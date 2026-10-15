// Daily reminders. Called every 15 minutes by a scheduler (Supabase Cron; see README) with
// "Authorization: Bearer $CRON_SECRET". Push first; email when there's no push subscription
// (or when the convert chose email). Uses the service-role client because no user is signed in.
import webpush from "web-push";
import { getIndex } from "@/lib/content/load";
import { localTime, reminderText, shouldRemind } from "@/lib/reminders";
import { localDate, today as computeToday, type CalendarEvent } from "@/lib/schedule";
import { supabaseAdmin } from "@/lib/supabase/server";
import { appNameFor } from "@/lib/brand";
import { EMPTY_META, mergeRows, rowsFromCompleted, settle, type DayRow } from "@/lib/streak";

export const maxDuration = 60;

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) return new Response("Unauthorized", { status: 401 });
  const pushReady = Boolean(process.env.VAPID_PRIVATE_KEY && process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY);
  if (pushReady)
    webpush.setVapidDetails(
      process.env.VAPID_SUBJECT || "mailto:admin@example.com",
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
      process.env.VAPID_PRIVATE_KEY!,
    );

  const db = supabaseAdmin();
  const { data: rows, error } = await db
    .from("converts")
    .select("id, masjid_id, timezone, program_start_date, birth_year, convert_settings!inner(discreet_mode, reminder_time, reminder_channel, last_reminded_on)")
    .neq("convert_settings.reminder_channel", "none");
  if (error) return Response.json({ error: error.message }, { status: 500 });

  const index = getIndex();
  const datesByMasjid = new Map<string, { event: CalendarEvent; date: string }[]>();
  let pushed = 0, emailed = 0, skipped = 0;

  for (const c of rows ?? []) {
    const s = (Array.isArray(c.convert_settings) ? c.convert_settings[0] : c.convert_settings) as {
      discreet_mode: boolean; reminder_time: string; reminder_channel: "push" | "email" | "both" | "none"; last_reminded_on: string | null;
    };
    const tz = c.timezone;
    const d = localDate(tz);
    if (s.last_reminded_on === d || localTime(tz) < s.reminder_time.slice(0, 5)) { skipped++; continue; }

    if (!datesByMasjid.has(c.masjid_id)) {
      const { data } = await db.from("masjid_dates").select("event, date").eq("masjid_id", c.masjid_id);
      datesByMasjid.set(c.masjid_id, (data ?? []) as { event: CalendarEvent; date: string }[]);
    }
    const { data: prog } = await db.from("lesson_progress").select("lesson_id, completed_at").eq("convert_id", c.id).not("completed_at", "is", null);
    const completed = Object.fromEntries((prog ?? []).map((p) => [p.lesson_id, localDate(tz, new Date(p.completed_at!))]));
    const t = computeToday({ today: d, programStart: c.program_start_date, completed, masjidDates: datesByMasjid.get(c.masjid_id) });
    const streak = await streakFor(db, c.id, completed, d);
    if (!shouldRemind({ localDate: d, localTime: localTime(tz), reminderTime: s.reminder_time, lastRemindedOn: s.last_reminded_on, channel: s.reminder_channel, today: t, paused: streak.paused })) { skipped++; continue; }

    const meta = index.lessons.find((l) => l.id === t.main);
    const minor = new Date().getFullYear() - (c.birth_year as number) <= 18;
    const text = reminderText({ discreet: s.discreet_mode, lessonTitle: meta?.title ?? null, day: meta?.day ?? null, streak: streak.doneToday ? 0 : streak.streak, minor });
    let sent = false;

    if (pushReady && s.reminder_channel !== "email") {
      const { data: subs } = await db.from("push_subscriptions").select("id, endpoint, p256dh, auth").eq("convert_id", c.id);
      for (const sub of subs ?? []) {
        try {
          await webpush.sendNotification(
            { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
            JSON.stringify({ title: text.title, body: text.body, url: "/today" }),
            { TTL: 6 * 3600 },
          );
          sent = true; pushed++;
        } catch (e) {
          const code = (e as { statusCode?: number }).statusCode;
          if (code === 404 || code === 410) await db.from("push_subscriptions").delete().eq("id", sub.id); // phone unsubscribed
        }
      }
    }
    if (process.env.RESEND_API_KEY && (s.reminder_channel === "email" || (s.reminder_channel === "both" && !sent))) {
      const { data: u } = await db.auth.admin.getUserById(c.id);
      if (u.user?.email && (await sendEmail(u.user.email, text.subject, text.body, s.discreet_mode))) { sent = true; emailed++; }
    }
    if (sent) await db.from("convert_settings").update({ last_reminded_on: d }).eq("convert_id", c.id);
  }
  return Response.json({ checked: rows?.length ?? 0, pushed, emailed, skipped });
}

/** The convert's streak for the reminder text (read only; settling happens when they open the app).
 *  Before the streak migration runs, falls back to lesson dates with no pause. */
async function streakFor(db: ReturnType<typeof supabaseAdmin>, convertId: string, completed: Record<string, string>, today: string) {
  const [a, st] = await Promise.all([
    db.from("activity_days").select("day, source, lessons, practice").eq("convert_id", convertId),
    db.from("streak_state").select("longest, paused_from, paused_until, last_repair_on").eq("convert_id", convertId).maybeSingle(),
  ]);
  const ok = !a.error && !st.error;
  const meta = ok && st.data
    ? { longest: st.data.longest, pausedFrom: st.data.paused_from, pausedUntil: st.data.paused_until, lastRepairOn: st.data.last_repair_on }
    : EMPTY_META;
  return settle(mergeRows(ok ? ((a.data ?? []) as DayRow[]) : [], rowsFromCompleted(completed)), meta, today);
}

async function sendEmail(to: string, subject: string, body: string, discreet: boolean) {
  const app = process.env.NEXT_PUBLIC_APP_URL || "";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: `${appNameFor(discreet)} <${process.env.REMINDER_FROM_ADDRESS || "onboarding@resend.dev"}>`,
      to,
      subject,
      text: `${body}\n\n${app}/today\n\nTo change or stop these reminders, open Settings in the app.`,
    }),
  });
  return res.ok;
}
