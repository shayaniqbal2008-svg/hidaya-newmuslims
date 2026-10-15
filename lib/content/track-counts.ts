// How many lessons each optional Practice track has, worked out from the compiled lessons.
// Used by scripts/compile-lessons.ts, which writes the result to lib/content/tracks.generated.ts
// (client-safe) and content/index.json. Pure, so it can be tested.

/** The optional Practice tracks. Lesson ids are <track>-NN (lib/access.ts isTrackId). */
export const TRACK_NAMES = ["alphabet", "seerah"] as const;

const id = (track: string, n: number) => `${track}-${String(n).padStart(2, "0")}`;

/**
 * Each track's count is the unbroken run from 01: with seerah-01, 02 and 04 compiled the count is 2,
 * so the app never opens or links to a lesson that doesn't exist. Lessons after a gap are reported.
 */
export function trackCounts(
  lessons: { kind: string; track: string | null; order: number | null }[],
): { counts: Record<string, number>; gaps: string[] } {
  const counts: Record<string, number> = {};
  const gaps: string[] = [];
  for (const t of TRACK_NAMES) {
    const orders = new Set(lessons.filter((l) => l.kind === "track" && l.track === t).map((l) => l.order ?? 0));
    let n = 0;
    while (orders.has(n + 1)) n++;
    counts[t] = n;
    const hidden = [...orders].filter((o) => o > n).sort((a, b) => a - b);
    if (hidden.length)
      gaps.push(`${id(t, n + 1)} is missing (${hidden.map((o) => id(t, o)).join(", ")} compiled but hidden until it exists)`);
  }
  return { counts, gaps };
}
