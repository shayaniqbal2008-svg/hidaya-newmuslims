// A Practice session counts toward the streak with 5+ questions (lib/streak.ts). When fewer are due,
// top it up with questions from finished lessons: a different mix each day, stable within the day.
const hash = (s: string) => [...s].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) >>> 0, 7);

export function topUp<T>(picks: T[], pool: T[], min: number, key: (x: T) => string, seed: string): T[] {
  if (picks.length >= min) return picks;
  const have = new Set(picks.map(key));
  const extra = pool
    .filter((x) => !have.has(key(x)))
    .sort((a, b) => hash(seed + key(a)) - hash(seed + key(b)))
    .slice(0, min - picks.length);
  return [...picks, ...extra];
}
