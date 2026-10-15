// The daily streak (Gamification Research §3A; spec docs/superpowers/specs/2026-10-09-streak-gamification-design.md).
// Pure functions: the streak is a deterministic fold over the convert's day log (activity_days), so the
// same rows always give the same answer and re-settling is harmless.
//
//  - A day counts with a first finished path lesson, a calendar/welcome-back module, or a full Practice
//    session (5+ questions). Optional track lessons and drills never count.
//  - Rest days: start with 1, earn 1 per 7 streak days, hold at most 2, used automatically on a missed day.
//  - Pause: days inside the window hold the streak and use nothing.
//  - Make-up: after a 1–2 day break (run of 2+), two counted activities today restore it; once per 30 days.
//  - Today with nothing done yet never breaks anything.
import { isTrackId } from "./access";
import { addDays, daysBetween } from "./schedule";

export const LESSON_XP = 10;
export const PRACTICE_XP = 5;
export const MIN_PRACTICE_QUESTIONS = 5;
export const START_REST_DAYS = 1;
export const MAX_REST_DAYS = 2;
export const REST_EVERY = 7;
export const REPAIR_COOLDOWN_DAYS = 30;
export const MAX_PAUSE_DAYS = 30;
export const MILESTONES = [3, 7, 14, 30, 50, 90, 100, 180, 365];
const BIG_MILESTONES = new Set([7, 30, 90, 365]);

export type DaySource = "lesson" | "practice" | "rest" | "pause" | "repair";
export type DayRow = { day: string; source: DaySource; lessons?: number; practice?: number };
export type StreakMeta = { longest: number; pausedFrom: string | null; pausedUntil: string | null; lastRepairOn: string | null };
export const EMPTY_META: StreakMeta = { longest: 0, pausedFrom: null, pausedUntil: null, lastRepairOn: null };

export type RepairOffer = { missed: string[]; streakBefore: number; needed: number };
export type Milestone = { days: number; big: boolean };

export type Settled = {
  /** Active days in the current run (rest, pause and repair days hold it without adding). */
  streak: number;
  doneToday: boolean;
  /** Counted activities today (lessons + practice sessions). */
  todayCount: number;
  restDays: number;
  longest: number;
  /** Today is inside a pause. */
  paused: boolean;
  /** Rows to persist: rest/pause days settled now, repair days if a make-up just completed. */
  writes: DayRow[];
  meta: StreakMeta;
  repair: RepairOffer | null;
  /** A make-up completed in this settle. */
  repaired: boolean;
  yesterday: DaySource | null;
  /** Every known day (stored + settled) → its kind, for the week and month views. */
  days: Record<string, DaySource>;
  /** First date the streak reached N, for each milestone N reached. */
  reached: Record<number, string>;
};

const isActive = (s: DaySource | undefined) => s === "lesson" || s === "practice";
const countOf = (r: DayRow | undefined) => (r && isActive(r.source) ? (r.lessons ?? 0) + (r.practice ?? 0) || 1 : 0);

function fold(map: Map<string, DayRow>, meta: StreakMeta, today: string) {
  const yesterday = addDays(today, -1);
  const writes: DayRow[] = [];
  const reached: Record<number, string> = {};
  const runAt = new Map<string, number>();
  let balance = START_REST_DAYS;
  let run = 0;
  let longest = 0;
  const inPause = (d: string) => !!meta.pausedFrom && !!meta.pausedUntil && meta.pausedFrom <= d && d <= meta.pausedUntil;
  const step = (d: string) => {
    run++;
    if (run % REST_EVERY === 0) balance = Math.min(MAX_REST_DAYS, balance + 1);
    longest = Math.max(longest, run);
    if (MILESTONES.includes(run) && !reached[run]) reached[run] = d;
  };
  const first = [...map.keys()].sort()[0];
  if (first)
    for (let d = first; d <= yesterday; d = addDays(d, 1)) {
      const row = map.get(d);
      if (row && isActive(row.source)) step(d);
      else if (row?.source === "rest") balance = Math.max(0, balance - 1);
      else if (row) {
        // pause or repair: holds the run
      } else if (inPause(d)) writes.push({ day: d, source: "pause" });
      else if (run > 0 && balance > 0) {
        balance--;
        writes.push({ day: d, source: "rest" });
      } else {
        // A break: the next run starts fresh, with the starting rest day again.
        if (run > 0) balance = Math.max(balance, START_REST_DAYS);
        run = 0;
      }
      runAt.set(d, run);
    }
  const todayRow = map.get(today);
  const doneToday = isActive(todayRow?.source);
  const runBeforeToday = run;
  if (doneToday) step(today);
  return { writes, reached, runAt, balance, run, runBeforeToday, longest, doneToday, todayCount: countOf(todayRow), inPause };
}

function toMap(rows: DayRow[]) {
  const map = new Map<string, DayRow>();
  for (const r of rows) map.set(r.day, r);
  return map;
}

/** Work out the streak from the day log, settling missed past days (rest/pause) and a completed make-up. */
export function settle(rows: DayRow[], meta: StreakMeta, today: string): Settled {
  const map = toMap(rows);
  let f = fold(map, meta, today);
  for (const w of f.writes) map.set(w.day, w);
  const writes = [...f.writes];

  // Make-up: the run broke 1–2 days ago (no row on those days) and was 2+ days long.
  let repair: RepairOffer | null = null;
  let repaired = false;
  let newMeta = meta;
  const paused = f.inPause(today);
  const first = [...map.keys()].sort()[0];
  if (first && f.runBeforeToday === 0 && !paused) {
    const missed: string[] = [];
    let d = addDays(today, -1);
    while (missed.length < 3 && d >= first && !map.has(d)) {
      missed.unshift(d);
      d = addDays(d, -1);
    }
    const streakBefore = f.runAt.get(d) ?? 0;
    const cooled = !meta.lastRepairOn || daysBetween(meta.lastRepairOn, today) >= REPAIR_COOLDOWN_DAYS;
    if (map.has(d) && missed.length >= 1 && missed.length <= 2 && streakBefore >= 2 && cooled) {
      if (f.todayCount >= 2) {
        for (const m of missed) {
          const w: DayRow = { day: m, source: "repair" };
          map.set(m, w);
          writes.push(w);
        }
        newMeta = { ...meta, lastRepairOn: today };
        repaired = true;
        f = fold(map, newMeta, today);
      } else repair = { missed, streakBefore, needed: 2 - f.todayCount };
    }
  }

  const longest = Math.max(meta.longest, f.longest);
  const days: Record<string, DaySource> = {};
  for (const [k, v] of map) days[k] = v.source;
  return {
    streak: f.run,
    doneToday: f.doneToday,
    todayCount: f.todayCount,
    restDays: f.balance,
    longest,
    paused,
    writes,
    meta: { ...newMeta, longest },
    repair,
    repaired,
    yesterday: map.get(addDays(today, -1))?.source ?? null,
    days,
    reached: f.reached,
  };
}

/** Today's row with one more counted activity. */
export function addActivity(rows: DayRow[], today: string, kind: "lesson" | "practice"): DayRow[] {
  const cur = rows.find((r) => r.day === today);
  const base = cur && isActive(cur.source) ? cur : { lessons: 0, practice: 0 };
  const lessons = (base.lessons ?? 0) + (kind === "lesson" ? 1 : 0);
  const practice = (base.practice ?? 0) + (kind === "practice" ? 1 : 0);
  const next: DayRow = { day: today, source: lessons > 0 ? "lesson" : "practice", lessons, practice };
  return [...rows.filter((r) => r.day !== today), next];
}

/** Before and after one more counted activity today: what the end of a lesson or practice shows. */
export function streakMoment(rows: DayRow[], meta: StreakMeta, today: string, kind: "lesson" | "practice") {
  const before = settle(rows, meta, today);
  const after = settle(addActivity(rows, today, kind), meta, today);
  const showStreak = after.streak > before.streak;
  return { before, after, showStreak, milestone: showStreak ? milestoneFor(after.streak) : null };
}

export const milestoneFor = (days: number): Milestone | null => (MILESTONES.includes(days) ? { days, big: BIG_MILESTONES.has(days) } : null);

/** Whether finishing this lesson counts toward the streak: path days the first time, calendar and
 *  welcome-back modules once a day, never tracks. `completedOn` is the local date it was last finished. */
export const countsForStreak = (lessonId: string, completedOn: string | null, today: string) =>
  !isTrackId(lessonId) && (lessonId.startsWith("day-") ? !completedOn : completedOn !== today);

export const practiceCounts = (questions: number) => questions >= MIN_PRACTICE_QUESTIONS;

/** Day log from lesson completion dates (fallback before the migration, and the backfill rule). */
export function rowsFromCompleted(completed: Record<string, string>): DayRow[] {
  const per = new Map<string, number>();
  for (const [id, day] of Object.entries(completed)) if (!isTrackId(id)) per.set(day, (per.get(day) ?? 0) + 1);
  return [...per].sort(([a], [b]) => a.localeCompare(b)).map(([day, n]) => ({ day, source: "lesson", lessons: n, practice: 0 }));
}

/** Stored rows plus lesson dates the log missed. A finished lesson beats a stored rest/pause/repair row.
 *  `since`: ignore lesson dates before it (once the log is stored, older dates recomputed in today's
 *  timezone could shift a day and invent activity). */
export function mergeRows(stored: DayRow[], fromLessons: DayRow[], since?: string): DayRow[] {
  const map = toMap(stored);
  for (const r of fromLessons) {
    if (since && r.day < since) continue;
    const s = map.get(r.day);
    if (!s || !isActive(s.source)) map.set(r.day, r);
  }
  return [...map.values()].sort((a, b) => a.day.localeCompare(b.day));
}

/** The pause window after "pause for N days" (N ≥ 1, from today, at most 30) or "resume" (N = 0).
 *  Resuming only ever shortens a pause that's still running; it never stretches an old one. */
export function pauseWindow(meta: StreakMeta, today: string, days: number): { pausedFrom: string | null; pausedUntil: string | null } {
  const n = Math.max(0, Math.min(MAX_PAUSE_DAYS, Math.floor(days)));
  if (n > 0) return { pausedFrom: today, pausedUntil: addDays(today, n - 1) };
  const { pausedFrom, pausedUntil } = meta;
  if (!pausedFrom || !pausedUntil || pausedUntil < today) return { pausedFrom, pausedUntil };
  if (pausedFrom >= today) return { pausedFrom: null, pausedUntil: null };
  return { pausedFrom, pausedUntil: addDays(today, -1) };
}

export const totalXp = (completedLessons: number, practiceSessions = 0) => completedLessons * LESSON_XP + practiceSessions * PRACTICE_XP;

// ---------- views

export type DayState = "done" | "rest" | "pause" | "repair" | "none";
const stateOf = (s: DaySource | undefined): DayState => (s === "lesson" || s === "practice" ? "done" : (s ?? "none"));
const DAY = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const weekday = (d: string) => new Date(`${d}T12:00:00Z`).getUTCDay();

export type WeekDay = { date: string; label: string; state: DayState };

/** The last 7 days ending today. */
export function weekView(days: Record<string, DaySource>, today: string): WeekDay[] {
  return Array.from({ length: 7 }, (_, k) => {
    const date = addDays(today, k - 6);
    return { date, label: DAY[weekday(date)], state: stateOf(days[date]) };
  });
}

export type MonthCell = { date: string | null; n: number; state: DayState; today: boolean; future: boolean };

/** A month ("2026-10") as a Sunday-first grid; blank cells have a null date. */
export function monthView(days: Record<string, DaySource>, month: string, today: string) {
  const first = `${month}-01`;
  const [y, m] = month.split("-").map(Number);
  const len = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const blank: MonthCell = { date: null, n: 0, state: "none", today: false, future: false };
  const cells: MonthCell[] = [];
  for (let k = 0; k < weekday(first); k++) cells.push(blank);
  for (let n = 1; n <= len; n++) {
    const date = addDays(first, n - 1);
    cells.push({ date, n, state: stateOf(days[date]), today: date === today, future: date > today });
  }
  while (cells.length % 7) cells.push(blank);
  const title = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${first}T12:00:00Z`));
  return { title, cells };
}

const shortDate = (d: string) =>
  new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(`${d}T12:00:00Z`));

/** The one line Today shows about the streak, if any. Warm and informational, never guilt (Research §3C). */
export function streakNotice(s: Settled): string | null {
  if (s.paused && s.meta.pausedUntil) return `Your streak is paused until ${shortDate(s.meta.pausedUntil)}. Reminders are off until then.`;
  if (s.repair)
    return s.repair.needed >= 2
      ? `You can pick your ${s.repair.streakBefore}-day streak back up: finish two lessons or reviews today.`
      : "You can pick your streak back up: do one more lesson today.";
  if (s.yesterday === "rest" && !s.doneToday && s.streak > 0) return `Yesterday was a rest day. Your ${s.streak}-day streak is safe.`;
  if (s.streak === 0 && s.longest >= 2) return `Welcome back. Your longest streak (${s.longest}) stays yours. Let's start a new one.`;
  return null;
}
