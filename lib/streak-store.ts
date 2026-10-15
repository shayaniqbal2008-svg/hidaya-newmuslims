// Reads and writes the streak tables (migration 20261010000001_streaks.sql) as the signed-in convert.
// Fails soft: if the tables or columns aren't there yet (deployed before the migration ran), it logs
// once and works the streak out from lesson completion dates, writing nothing. Never throws.
import "server-only";
import { getAllCitations, getIndex } from "./content/load";
import { celebrationFor as buildCelebration, consistencyQuote, type Celebration } from "./celebration";
import type { Me } from "./dal";
import { addDays, localDate } from "./schedule";
import { EMPTY_META, mergeRows, pauseWindow, rowsFromCompleted, settle, totalXp, type DayRow, type Settled, type StreakMeta } from "./streak";
import { supabaseServer } from "./supabase/server";

export type StreakData = {
  settled: Settled;
  /** The day log fed to settle (stored + lesson dates + settled writes). */
  rows: DayRow[];
  meta: StreakMeta;
  practiceSessions: number;
  /** false when the streak tables aren't available (fallback). */
  stored: boolean;
};

type Progress = { completed: Record<string, string>; today: string };

function soft(where: string, e: unknown) {
  console.warn(`[streak] ${where} failed; using lesson dates instead.`, (e as { message?: string })?.message ?? e);
}

/** Settings with the streak columns' defaults when the migration hasn't run. */
export function streakSettings(me: Me) {
  const s = me.settings;
  return {
    show_streak: s.show_streak ?? true,
    celebration_sounds: s.celebration_sounds ?? false,
    calm_celebrations: s.calm_celebrations ?? false,
    discreet_mode: s.discreet_mode,
  };
}

async function readStored(): Promise<{ rows: DayRow[]; meta: StreakMeta; practice: number } | null> {
  try {
    const supabase = await supabaseServer();
    const [a, s] = await Promise.all([
      supabase.from("activity_days").select("day, source, lessons, practice"),
      supabase.from("streak_state").select("longest, paused_from, paused_until, last_repair_on").maybeSingle(),
    ]);
    if (a.error || s.error) {
      soft("read", a.error ?? s.error);
      return null;
    }
    const rows = (a.data ?? []) as DayRow[];
    const st = s.data;
    const meta: StreakMeta = st
      ? { longest: st.longest, pausedFrom: st.paused_from, pausedUntil: st.paused_until, lastRepairOn: st.last_repair_on }
      : EMPTY_META;
    return { rows, meta, practice: rows.reduce((n, r) => n + (r.practice ?? 0), 0) };
  } catch (e) {
    soft("read", e);
    return null;
  }
}

/** The convert's streak, settled (missed days become rest/pause rows; a completed make-up is recorded). */
export async function getStreak(me: Me, p: Progress): Promise<StreakData> {
  const stored = await readStored();
  // Once the log is stored it's the truth; lesson dates only fill in yesterday/today in case a write failed
  // (older dates recomputed in today's timezone could shift a day after a timezone change).
  const rows = mergeRows(stored?.rows ?? [], rowsFromCompleted(p.completed), stored ? addDays(p.today, -1) : undefined);
  const meta = stored?.meta ?? EMPTY_META;
  const settled = settle(rows, meta, p.today);
  if (stored) await persist(me, settled, meta);
  return { settled, rows: mergeRows(rows, settled.writes), meta: settled.meta, practiceSessions: stored?.practice ?? 0, stored: !!stored };
}

async function persist(me: Me, s: Settled, before: StreakMeta) {
  try {
    const supabase = await supabaseServer();
    if (s.writes.length) {
      const { error } = await supabase
        .from("activity_days")
        .upsert(s.writes.map((w) => ({ convert_id: me.userId, day: w.day, source: w.source })), { onConflict: "convert_id,day", ignoreDuplicates: true });
      if (error) soft("settle write", error);
    }
    if (s.meta.longest !== before.longest || s.meta.lastRepairOn !== before.lastRepairOn) {
      // Only these columns: never write back a pause window read earlier (a concurrent pause would be undone).
      const { error } = await supabase.from("streak_state").upsert({
        convert_id: me.userId,
        longest: s.meta.longest,
        last_repair_on: s.meta.lastRepairOn,
        updated_at: new Date().toISOString(),
      });
      if (error) soft("state write", error);
    }
  } catch (e) {
    soft("persist", e);
  }
}

/** Count one activity today (a lesson or a full practice session), then settle (a make-up may complete). */
export async function recordActivity(me: Me, p: Progress, kind: "lesson" | "practice") {
  try {
    const supabase = await supabaseServer();
    const { error } = await supabase.rpc("record_activity", { p_day: p.today, p_kind: kind });
    if (error) return soft("record", error);
    await getStreak(me, p);
  } catch (e) {
    soft("record", e);
  }
}

/** Pause for 1–30 days starting today, or resume (days = 0). Settles first so past pause days are kept. */
export async function setPause(me: Me, p: Progress, days: number): Promise<boolean> {
  const cur = await getStreak(me, p);
  if (!cur.stored) return false;
  const w = pauseWindow(cur.meta, p.today, days);
  const supabase = await supabaseServer();
  const { error } = await supabase.from("streak_state").upsert({
    convert_id: me.userId,
    paused_from: w.pausedFrom,
    paused_until: w.pausedUntil,
    updated_at: new Date().toISOString(),
  });
  if (error) soft("pause", error);
  return !error;
}

/** Local dates mistakes were cleared (for the Clean Slate badge). */
export async function clearedDates(me: Me): Promise<string[]> {
  try {
    const supabase = await supabaseServer();
    const { data } = await supabase.from("practice_mistakes").select("cleared_at").not("cleared_at", "is", null);
    return (data ?? []).map((r) => localDate(me.convert.timezone, new Date(r.cleared_at as string)));
  } catch {
    return [];
  }
}

/** Bukhari 6464, from the Citation Bank only. */
export function consistencyHadith() {
  const c = getAllCitations()["Bukhari 6464"];
  return c ? { text: consistencyQuote(c.english), source: "Sahih al-Bukhari 6464" } : null;
}

export const contentForBadges = () => {
  const index = getIndex();
  return { units: index.units, tracks: index.tracks };
};

/** XP so far: 10 per finished lesson, 5 per counted practice session. */
export const xpOf = (p: Progress, s: StreakData) => totalXp(Object.keys(p.completed).length, s.practiceSessions);

/** The screens after a lesson or practice session, worked out before it's saved (the player animates them). */
export async function celebrationFor(
  me: Me,
  p: Progress,
  o: { kind: "lesson" | "practice" | null; completedAfter: Record<string, string>; xpGain: number },
): Promise<Celebration> {
  const [s, cleared] = await Promise.all([getStreak(me, p), clearedDates(me)]);
  return buildCelebration({
    rows: s.rows,
    meta: s.meta,
    today: p.today,
    kind: o.kind,
    completedBefore: p.completed,
    completedAfter: o.completedAfter,
    cleared,
    ...contentForBadges(),
    settings: streakSettings(me),
    xpBefore: xpOf(p, s),
    xpGain: o.xpGain,
    hadith: consistencyHadith(),
  });
}
