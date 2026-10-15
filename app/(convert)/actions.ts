"use server";
// Everything a convert saves from a lesson. Each action runs as the signed-in user, so the
// database's privacy rules (RLS) decide what's allowed; the checks here are for good input.
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getLesson } from "@/lib/content/load";
import { encrypt } from "@/lib/crypto";
import { getMe, getProgress, canOpen } from "@/lib/dal";
import { addDays } from "@/lib/schedule";
import { nextMistake } from "@/lib/mistakes";
import { countsForStreak, LESSON_XP, PRACTICE_XP, practiceCounts } from "@/lib/streak";
import { celebrationFor, recordActivity } from "@/lib/streak-store";
import { localDate } from "@/lib/schedule";
import type { Celebration } from "@/lib/celebration";
import { supabaseServer } from "@/lib/supabase/server";

const LessonId = z.string().regex(/^[a-z0-9-]{3,40}$/);

async function ctx(lessonId: string) {
  LessonId.parse(lessonId);
  const lesson = getLesson(lessonId);
  if (!lesson) throw new Error("Unknown lesson");
  const me = await getMe();
  return { lesson, me, supabase: await supabaseServer() };
}

export async function saveScreen(lessonId: string, n: number) {
  const { lesson, me, supabase } = await ctx(lessonId);
  const now = new Date().toISOString();
  await supabase.from("lesson_progress").upsert(
    { convert_id: me.userId, lesson_id: lessonId, content_version: lesson.contentVersion, started_at: now, last_screen: n },
    { onConflict: "convert_id,lesson_id", ignoreDuplicates: false },
  );
  await supabase.from("converts").update({ last_active_at: now }).eq("id", me.userId);
}

/** Saves the completion and returns what to celebrate, worked out from the data just before this
 *  activity was recorded (so two tabs or a lesson that crosses midnight can't celebrate twice). */
export async function completeLesson(lessonId: string): Promise<Celebration | null> {
  const { lesson, me, supabase } = await ctx(lessonId);
  const progress = await getProgress(me);
  if (!canOpen(lessonId, progress)) throw new Error("This lesson isn't open yet");
  const now = new Date();
  const { data: existing } = await supabase
    .from("lesson_progress")
    .select("completed_at, started_at")
    .eq("lesson_id", lessonId)
    .maybeSingle();
  // Re-reading a finished lesson keeps its first completion date (the schedule depends on it),
  // except welcome-back and calendar modules, which can come round again.
  const repeatable = !lessonId.startsWith("day-");
  const tz = me.convert.timezone;
  const completedOn = existing?.completed_at ? localDate(tz, new Date(existing.completed_at)) : null;
  const counts = countsForStreak(lessonId, completedOn, progress.today);
  let celebration: Celebration | null = null;
  try {
    celebration = await celebrationFor(me, progress, {
      kind: counts ? "lesson" : null,
      completedAfter: { ...progress.completed, [lessonId]: completedOn && !repeatable ? completedOn : progress.today },
      xpGain: existing?.completed_at ? 0 : LESSON_XP,
    });
  } catch (e) {
    console.warn("[streak] celebration failed", e);
  }
  const completed_at = existing?.completed_at && !repeatable ? existing.completed_at : now.toISOString();
  await supabase.from("lesson_progress").upsert({
    convert_id: me.userId,
    lesson_id: lessonId,
    content_version: lesson.contentVersion,
    started_at: existing?.started_at ?? now.toISOString(),
    completed_at,
  });
  // Queue this lesson's Check questions for spaced review, starting tomorrow.
  if (lesson.check.length && !existing?.completed_at) {
    await supabase.from("review_items").upsert(
      lesson.check.map((_, i) => ({
        convert_id: me.userId,
        lesson_id: lessonId,
        check_index: i,
        due_at: new Date(now.getTime() + 86_400_000).toISOString(),
        interval_days: 1,
      })),
      { onConflict: "convert_id,lesson_id,check_index", ignoreDuplicates: true },
    );
  }
  await supabase.from("converts").update({ last_active_at: now.toISOString() }).eq("id", me.userId);
  // The streak: first finish of a path day, or any calendar/welcome-back module. Never track lessons.
  if (counts) await recordActivity(me, progress, "lesson");
  revalidatePath("/today");
  revalidatePath("/path");
  revalidatePath("/settings");
  return celebration;
}

/** A Practice session played to the end (review, past lessons or Mistakes). 5+ questions count for the
 *  streak and +5 XP. The count is bound on the server when the session renders. */
export async function completePractice(questions: number): Promise<Celebration | null> {
  const n = z.number().int().min(0).max(100).parse(questions);
  const me = await getMe();
  const supabase = await supabaseServer();
  await supabase.from("converts").update({ last_active_at: new Date().toISOString() }).eq("id", me.userId);
  if (!practiceCounts(n)) return null;
  const progress = await getProgress(me);
  const celebration = await celebrationFor(me, progress, { kind: "practice", completedAfter: progress.completed, xpGain: PRACTICE_XP }).catch(() => null);
  await recordActivity(me, progress, "practice");
  revalidatePath("/today");
  revalidatePath("/settings");
  return celebration;
}

export async function logAction(lessonId: string, key: string) {
  const { lesson, me, supabase } = await ctx(lessonId);
  if (!lesson.logs.includes(key)) throw new Error("Unknown log for this lesson");
  await supabase
    .from("action_logs")
    .upsert({ convert_id: me.userId, log_key: key, lesson_id: lessonId }, { onConflict: "convert_id,log_key", ignoreDuplicates: true });
}

export async function saveReflection(lessonId: string, n: number, text: string, share: boolean) {
  const { lesson, me, supabase } = await ctx(lessonId);
  const screen = lesson.screens.find((s) => s.n === n);
  if (!screen || screen.type !== "reflect") throw new Error("Not a reflection screen");
  const body = z.string().trim().min(1).max(4000).parse(text);
  const now = new Date().toISOString();
  await supabase.from("reflections").upsert(
    {
      convert_id: me.userId,
      lesson_id: lessonId,
      screen_n: n,
      body_enc: encrypt(me.userId, body),
      resurface_at: screen.resurface_after_days ? addDays(now.slice(0, 10), screen.resurface_after_days) : null,
      shared_with_mentor_at: share && screen.share_with_mentor ? now : null,
      updated_at: now,
    },
    { onConflict: "convert_id,lesson_id,screen_n" },
  );
}

export async function saveCarryForward(lessonId: string, steps: string[]) {
  const { lesson, me, supabase } = await ctx(lessonId);
  const allowed = new Set(lesson.screens.flatMap((s) => (s.type === "practice" && s.carry_forward ? s.steps : [])));
  const keep = steps.filter((s) => allowed.has(s));
  await supabase.from("carry_forward_items").delete().eq("lesson_id", lessonId);
  if (keep.length)
    await supabase.from("carry_forward_items").insert(keep.map((step_text) => ({ convert_id: me.userId, lesson_id: lessonId, step_text })));
}

/** Spaced review: right → wait longer next time; not quite → see it again tomorrow. */
export async function answerReview(lessonId: string, checkIndex: number, correct: boolean) {
  const { me, supabase } = await ctx(lessonId);
  const { data: item } = await supabase
    .from("review_items")
    .select("interval_days, ease")
    .eq("lesson_id", lessonId)
    .eq("check_index", checkIndex)
    .maybeSingle();
  if (!item) return;
  const ease = Math.max(1.3, Math.min(3, item.ease + (correct ? 0.1 : -0.2)));
  const interval = correct ? Math.max(2, Math.round(item.interval_days * ease)) : 1;
  await supabase
    .from("review_items")
    .update({ interval_days: interval, ease, last_result: correct, due_at: new Date(Date.now() + interval * 86_400_000).toISOString() })
    .eq("convert_id", me.userId)
    .eq("lesson_id", lessonId)
    .eq("check_index", checkIndex);
}

const Ref = z.string().regex(/^(check|screen):\d{1,3}$/);

/** Practice → Mistakes: a wrong answer is kept until it's answered right twice in a row (lib/mistakes.ts). */
export async function recordAnswer(lessonId: string, ref: string, correct: boolean) {
  LessonId.parse(lessonId);
  Ref.parse(ref);
  const me = await getMe();
  const supabase = await supabaseServer();
  const { data: prev } = await supabase
    .from("practice_mistakes")
    .select("wrong_count, right_streak, cleared_at")
    .eq("lesson_id", lessonId)
    .eq("ref", ref)
    .maybeSingle();
  const next = nextMistake(prev, correct === true, new Date());
  if (!next) return;
  await supabase.from("practice_mistakes").upsert({
    convert_id: me.userId,
    lesson_id: lessonId,
    ref,
    ...next,
    ...(correct ? {} : { last_wrong_at: new Date().toISOString() }),
  });
}

/** Asked once, privately, so lessons show only the guidance that applies (Checkpoint 4, C1). */
export async function setGender(gender: "male" | "female") {
  const g = z.enum(["male", "female"]).parse(gender);
  const me = await getMe();
  const supabase = await supabaseServer();
  const { error } = await supabase.from("converts").update({ gender: g }).eq("id", me.userId);
  if (error) throw new Error("Couldn't save that. Try again.");
  revalidatePath("/", "layout");
}
