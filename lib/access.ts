// Which lessons a convert can open. Every one of the 90 days is open (Shayan, 2026-10-07: "there's no
// harm in learning more"); calendar and welcome-back modules open when they're due or once done.
// Optional Practice tracks (the alphabet and the seerah) are open any time and never count as
// "today's lesson" or toward the streak.

import { TRACK_COUNTS } from "./content/tracks.generated";

/**
 * Optional Practice tracks and how many lessons each has, derived from the compiled content by
 * scripts/compile-lessons.ts (a small generated TS file, so this module stays client-safe).
 */
export const TRACKS: Record<string, number> = TRACK_COUNTS;

export const isTrackId = (id: string) => /^(alphabet|seerah)-\d{2}$/.test(id);

export type AccessProgress = {
  completed: Record<string, string>;
  isDemo: boolean;
  schedule: { main: string | null; sideCards: string[] };
};

export function canOpen(id: string, p: AccessProgress, counts: Record<string, number> = TRACKS): boolean {
  if (p.completed[id] || p.isDemo) return true;
  const day = /^day-(\d{2})$/.exec(id);
  if (day) return Number(day[1]) >= 1 && Number(day[1]) <= 90;
  const track = /^([a-z]+)-(\d{2})$/.exec(id);
  if (track && isTrackId(id)) return Number(track[2]) >= 1 && Number(track[2]) <= (counts[track[1]] ?? 0);
  return p.schedule.main === id || p.schedule.sideCards.includes(id);
}

/** Whether the convert has finished any day of the 90-day path (track lessons don't count). */
export const pathStarted = (completed: Record<string, string>) => Object.keys(completed).some((id) => id.startsWith("day-"));
