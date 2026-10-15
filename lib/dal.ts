// Data access layer for the convert app: one place that reads "who is this and what's their state".
// Everything here runs as the signed-in user, so the database's privacy rules apply.
import "server-only";
import { redirect } from "next/navigation";
import { cache } from "react";
import { getIndex, getLesson } from "./content/load";
import type { RenderContext } from "./content/render";
import type { Madhab } from "./content/types";
import { localDate, today as computeToday, type CalendarEvent } from "./schedule";
import { supabaseServer } from "./supabase/server";
import { isDemoSlug } from "./demo";

export type Me = {
  userId: string;
  email: string | null;
  convert: {
    id: string;
    first_name: string;
    birth_year: number;
    gender: "male" | "female" | null;
    timezone: string;
    program_start_date: string;
    mentor_id: string | null;
  };
  settings: {
    share_progress: boolean;
    share_logs: boolean;
    discreet_mode: boolean;
    neutral_app_name: boolean;
    reminder_time: string;
    reminder_channel: "push" | "email" | "both" | "none";
    quick_exit_url: string;
    /** Added by 20261010000001_streaks.sql; undefined until it runs (lib/streak-store.ts streakSettings). */
    show_streak?: boolean;
    celebration_sounds?: boolean;
    calm_celebrations?: boolean;
  };
  masjid: {
    id: string;
    name: string;
    madhab: Madhab | null;
    jumuah_time: string | null;
    imam_response_hours: number;
    has_female_staff: boolean;
    slug: string;
  };
  /** A demo account (scholars and testers): every lesson is open. */
  isDemo: boolean;
  mentorName: string | null;
  isMinor: boolean;
};

/** The signed-in user, or null. */
export const getUser = cache(async () => {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();
  return data.user ?? null;
});

/** The signed-in convert. Sends them to sign in, or to finish sign-up, if needed. */
export const getMe = cache(async (): Promise<Me> => {
  const user = await getUser();
  if (!user) redirect("/login");
  const supabase = await supabaseServer();
  const { data: convert } = await supabase
    .from("converts")
    .select("id, first_name, birth_year, gender, timezone, program_start_date, mentor_id, masjid_id")
    .eq("id", user.id)
    .maybeSingle();
  if (!convert) redirect("/welcome");
  const [{ data: settings }, { data: masjid }, mentor] = await Promise.all([
    supabase.from("convert_settings").select("*").eq("convert_id", user.id).single(),
    supabase
      .from("masjids")
      .select("id, name, madhab, jumuah_time, imam_response_hours, has_female_staff, slug")
      .eq("id", convert.masjid_id)
      .single(),
    convert.mentor_id
      ? supabase.from("staff").select("display_name").eq("id", convert.mentor_id).maybeSingle()
      : Promise.resolve({ data: null }),
  ]);
  if (!settings || !masjid) throw new Error("Account setup is incomplete. Try signing out and in again.");
  return {
    userId: user.id,
    email: user.email ?? null,
    convert,
    settings,
    masjid,
    mentorName: (mentor.data as { display_name: string } | null)?.display_name ?? null,
    isMinor: new Date().getFullYear() - convert.birth_year <= 18,
    isDemo: isDemoSlug((masjid as { slug: string }).slug),
  } as Me;
});

export function renderContext(me: Me): RenderContext {
  return {
    masjidName: me.masjid.name,
    madhab: me.masjid.madhab,
    jumuahTime: me.masjid.jumuah_time,
    mentorName: me.mentorName,
    firstName: me.convert.first_name,
    isMinor: me.isMinor,
    gender: me.convert.gender,
  };
}

/** lesson id → local date completed, plus the convert's "today". */
export async function getProgress(me: Me) {
  const supabase = await supabaseServer();
  const [{ data: rows }, { data: dates }] = await Promise.all([
    supabase.from("lesson_progress").select("lesson_id, completed_at, last_screen, started_at"),
    supabase.from("masjid_dates").select("event, date"),
  ]);
  const tz = me.convert.timezone;
  const completed: Record<string, string> = {};
  const inProgress: Record<string, number> = {};
  for (const r of rows ?? []) {
    if (r.completed_at) completed[r.lesson_id] = localDate(tz, new Date(r.completed_at));
    else if (r.started_at) inProgress[r.lesson_id] = r.last_screen;
  }
  const t = localDate(tz);
  const schedule = computeToday({
    today: t,
    programStart: me.convert.program_start_date,
    completed,
    masjidDates: (dates ?? []) as { event: CalendarEvent; date: string }[],
  });
  // Every day is open to everyone (lib/access.ts); the schedule still picks today's recommended lesson.
  schedule.unlockedThrough = 90;
  return { today: t, completed, inProgress, schedule, isDemo: me.isDemo };
}

export { canOpen } from "./access";

export function lessonTitle(id: string): string {
  return getIndex().lessons.find((l) => l.id === id)?.title ?? getLesson(id)?.title ?? id;
}
