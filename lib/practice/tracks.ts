// Progress through an optional Practice track (the alphabet, the seerah).
import { TRACKS } from "../access";

const trackId = (track: string, n: number) => `${track}-${String(n).padStart(2, "0")}`;

/** How many lessons of the track are done, and the first one not done yet (null when all are). */
export function trackProgress(
  track: string,
  completed: string[],
  counts: Record<string, number> = TRACKS,
): { done: number; total: number; next: string | null } {
  const total = counts[track] ?? 0;
  const set = new Set(completed);
  const ids = Array.from({ length: total }, (_, i) => trackId(track, i + 1));
  return { done: ids.filter((id) => set.has(id)).length, total, next: ids.find((id) => !set.has(id)) ?? null };
}

/** The line under a track's card on Practice: an intro before starting, then "X of N done", then all done. */
export function trackSubtitle(p: { done: number; total: number; next: string | null }, intro: (total: number) => string): string {
  if (p.done === 0) return intro(p.total);
  return p.next ? `${p.done} of ${p.total} done` : `All ${p.total} done. Read them again anytime.`;
}
