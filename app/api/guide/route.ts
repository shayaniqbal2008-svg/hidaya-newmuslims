// The AI guide (T3 §3.4): crisis check → prompt → model → output check → save (encrypted) → reply.
// The reply isn't streamed: the output check has to pass before the convert sees anything.
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { getAllCitations, getLesson } from "@/lib/content/load";
import { decrypt, encrypt } from "@/lib/crypto";
import { getMe, getProgress } from "@/lib/dal";
import { crisisCheck, crisisReply } from "@/lib/guide/crisis";
import { guideTurn, type Turn } from "@/lib/guide/engine";
import type { RoleplayBrief } from "@/lib/guide/prompt";
import { supabaseServer } from "@/lib/supabase/server";

export const maxDuration = 60;

const Body = z.object({
  threadId: z.string().uuid().nullable().optional(),
  lessonId: z.string().regex(/^[a-z0-9-]{3,40}$/).nullable().optional(),
  roleplay: z.number().int().min(1).max(30).nullable().optional(),
  message: z.string().trim().min(1).max(2000),
});

const DAILY_LIMIT = Number(process.env.GUIDE_DAILY_LIMIT || 40);

export async function POST(req: Request) {
  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return Response.json({ error: "Message missing or too long (2,000 characters max)." }, { status: 400 });
  const { message } = parsed.data;
  const me = await getMe();
  const supabase = await supabaseServer();

  // A daily cap keeps API spend predictable (and limits abuse of a stolen session).
  const since = new Date(Date.now() - 86_400_000).toISOString();
  const { count } = await supabase
    .from("ai_messages")
    .select("id", { count: "exact", head: true })
    .eq("role", "user")
    .gte("created_at", since);
  if ((count ?? 0) >= DAILY_LIMIT)
    return Response.json({ error: "You've asked a lot today. The guide resets tomorrow. For anything urgent, ask your imam." }, { status: 429 });

  const lesson = parsed.data.lessonId ? getLesson(parsed.data.lessonId) : null;
  let roleplay: RoleplayBrief | null = null;
  if (lesson && parsed.data.roleplay) {
    const s = lesson.screens.find((x) => x.n === parsed.data.roleplay);
    if (s?.type === "roleplay") roleplay = s;
  }

  // Thread: continue the convert's own (RLS guarantees it's theirs) or start a new one.
  let threadId = parsed.data.threadId ?? null;
  let history: Turn[] = [];
  if (threadId) {
    const { data } = await supabase
      .from("ai_messages")
      .select("role, body_enc")
      .eq("thread_id", threadId)
      .order("created_at")
      .limit(40);
    history = (data ?? []).map((m) => ({ role: m.role, text: safeDecrypt(me.userId, m.body_enc) }));
  } else {
    const { data, error } = await supabase
      .from("ai_threads")
      .insert({ convert_id: me.userId, lesson_id: lesson?.id ?? null, mode: roleplay ? "roleplay" : "chat", roleplay_screen: roleplay ? parsed.data.roleplay : null })
      .select("id")
      .single();
    if (error || !data) return Response.json({ error: "Couldn't start a conversation. Try again." }, { status: 500 });
    threadId = data.id;
  }

  const client = new Anthropic();
  const verdict = await crisisCheck(client, message, history.filter((t) => t.role === "user").map((t) => t.text));
  const save = (role: "user" | "assistant", text: string, extra: Record<string, unknown> = {}) =>
    supabase.from("ai_messages").insert({ thread_id: threadId, convert_id: me.userId, role, body_enc: encrypt(me.userId, text), ...extra });

  if (verdict.crisis) {
    const reply = crisisReply(me.isMinor);
    await save("user", message, { flagged: true });
    await save("assistant", reply, { model: "crisis-response" });
    return Response.json({ threadId, reply, crisis: true, askImam: null, citations: [], hasFemaleStaff: me.masjid.has_female_staff, hasMentor: !!me.convert.mentor_id });
  }

  const progress = await getProgress(me);
  try {
    const r = await guideTurn({
      client,
      lesson,
      roleplay,
      history,
      message,
      citations: getAllCitations(),
      profile: {
        firstName: me.convert.first_name,
        isMinor: me.isMinor,
        gender: me.convert.gender,
        masjidName: me.masjid.name,
        madhab: me.masjid.madhab,
        imamResponseHours: me.masjid.imam_response_hours,
        hasFemaleStaff: me.masjid.has_female_staff,
        dayReached: Math.max(1, progress.schedule.nextDay - 1),
      },
    });
    await save("user", message);
    await save("assistant", r.reply, { citations: r.citations, model: r.model });
    const all = getAllCitations();
    return Response.json({
      threadId,
      reply: r.reply,
      askImam: r.askImam,
      crisis: false,
      citations: r.citations.map((k) => all[k]).filter(Boolean),
    });
  } catch (e) {
    if (e instanceof Anthropic.RateLimitError)
      return Response.json({ error: "The guide is busy right now. Try again in a minute." }, { status: 503 });
    if (e instanceof Anthropic.APIError) {
      console.error("guide API error", e.status, e.message);
      return Response.json({ error: "The guide couldn't answer just now. Try again in a minute." }, { status: 502 });
    }
    throw e;
  }
}

function safeDecrypt(id: string, s: string) {
  try {
    return decrypt(id, s);
  } catch {
    return "";
  }
}
