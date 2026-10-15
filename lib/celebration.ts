// What follows a finished lesson or Practice session (Gamification Research §3B): the streak screen,
// a milestone, new badges. Pure: the pages compute it on the server and the player animates it.
import { badges, newBadges, type Badge } from "./badges";
import type { Unit } from "./content/types";
import { settle, streakMoment, weekView, type DayRow, type StreakMeta, type WeekDay } from "./streak";

export type CelebrationSettings = { show_streak: boolean; calm_celebrations: boolean; celebration_sounds: boolean; discreet_mode: boolean };

export type CelebrationInput = {
  rows: DayRow[];
  meta: StreakMeta;
  today: string;
  /** What this activity counts as, or null when it doesn't count (track lesson, re-read, short session). */
  kind: "lesson" | "practice" | null;
  completedBefore: Record<string, string>;
  completedAfter: Record<string, string>;
  cleared: string[];
  units: Unit[];
  tracks: Record<string, number>;
  settings: CelebrationSettings;
  xpBefore: number;
  xpGain: number;
  /** Bukhari 6464 from the Citation Bank, shown on 30/90/365 outside discreet mode. */
  hadith: { text: string; source: string } | null;
};

export type StreakScreenData = {
  days: number;
  from: number;
  week: WeekDay[];
  tier: 1 | 2 | 3;
  repaired: boolean;
  /** Day 1 again after an earlier streak. */
  restart: boolean;
  /** A make-up is open: this many more counted activities today restore it. */
  repairNeeded: number | null;
  repairStreak: number | null;
  restDays: number;
};

export type Celebration = {
  xpBefore: number;
  xpGain: number;
  alreadyCounted: boolean;
  streak: StreakScreenData | null;
  milestone: { days: number; big: boolean; hadith: { text: string; source: string } | null } | null;
  badges: Badge[];
  calm: boolean;
  sounds: boolean;
  discreet: boolean;
};

const HADITH_DAYS = new Set([30, 90, 365]);
export const MAX_BADGE_SCREENS = 2;

export function celebrationFor(i: CelebrationInput): Celebration {
  const s = i.settings;
  const show = s.show_streak;
  const before = settle(i.rows, i.meta, i.today);
  const m = i.kind ? streakMoment(i.rows, i.meta, i.today, i.kind) : null;
  const after = m?.after ?? before;
  let streak: StreakScreenData | null = null;
  if (show && m?.showStreak) {
    const days = after.streak;
    streak = {
      days,
      from: m.before.streak,
      week: weekView(after.days, i.today),
      tier: days >= 30 ? 3 : days >= 7 ? 2 : 1,
      repaired: after.repaired,
      restart: days === 1 && before.longest >= 2,
      repairNeeded: after.repair?.needed ?? null,
      repairStreak: after.repair?.streakBefore ?? null,
      restDays: after.restDays,
    };
  }
  const milestone =
    show && m?.milestone
      ? { ...m.milestone, hadith: !s.discreet_mode && HADITH_DAYS.has(m.milestone.days) ? i.hadith : null }
      : null;
  const common = { cleared: i.cleared, units: i.units, tracks: i.tracks, discreet: s.discreet_mode, includeStreak: show };
  const earned = newBadges(
    badges({ ...common, completed: i.completedBefore, reached: before.reached }),
    badges({ ...common, completed: i.completedAfter, reached: after.reached }),
  )
    // The milestone screen already celebrates this streak length.
    .filter((b) => !milestone || b.id !== `streak-${milestone.days}`)
    .slice(0, MAX_BADGE_SCREENS);
  return {
    xpBefore: i.xpBefore,
    xpGain: i.xpGain,
    alreadyCounted: show && !!i.kind && before.doneToday && !streak,
    streak,
    milestone,
    badges: earned,
    calm: s.calm_celebrations,
    sounds: s.celebration_sounds && !s.discreet_mode,
    discreet: s.discreet_mode,
  };
}

/** The closing words of Bukhari 6464, verbatim from the Citation Bank's English. */
export function consistencyQuote(english: string): string {
  const k = english.toLowerCase().lastIndexOf("the most beloved deed");
  const t = (k >= 0 ? english.slice(k) : english).trim().replace(/["”.]+$/, "");
  return `${t[0].toUpperCase()}${t.slice(1)}.`;
}
