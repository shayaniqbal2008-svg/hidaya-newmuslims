// Milestones on the Me page (Gamification Research §3F). Private, dated, greyed until earned, and all
// about learning: never about acts of worship (action logs). Derived from progress, so nothing is stored.
import type { Unit } from "./content/types";

export type BadgeInput = {
  /** lesson id → local date completed */
  completed: Record<string, string>;
  /** streak length → first date reached (lib/streak.ts settle().reached) */
  reached: Record<number, string>;
  /** local dates mistakes were cleared */
  cleared: string[];
  units: Unit[];
  tracks: Record<string, number>;
  discreet: boolean;
  /** false when the convert hides their streak */
  includeStreak?: boolean;
};

export type Badge = {
  id: string;
  kind: "streak" | "learning";
  name: string;
  line: string;
  /** null until earned */
  earnedOn: string | null;
  icon: "step" | "star" | "flame" | "unit" | "path" | "return" | "slate" | "letters" | "book" | "moon";
};

const dayId = (n: number) => `day-${String(n).padStart(2, "0")}`;
const latest = (dates: (string | undefined)[]) => (dates.every(Boolean) && dates.length ? ([...dates].sort().at(-1) as string) : null);
const earliest = (dates: string[]) => (dates.length ? [...dates].sort()[0] : null);
const nth = (dates: string[], n: number) => (dates.length >= n ? [...dates].sort()[n - 1] : null);

export function badges(i: BadgeInput): Badge[] {
  const c = i.completed;
  const d = i.discreet;
  const out: Badge[] = [];
  const add = (b: Badge) => out.push(b);
  const pathDates = Object.entries(c).filter(([id]) => /^day-\d{2}$/.test(id)).map(([, v]) => v);
  const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, k) => c[dayId(a + k)]);
  const streak = (n: number, name: string, line: string) => {
    if (i.includeStreak !== false) add({ id: `streak-${n}`, kind: "streak", name, line, earnedOn: i.reached[n] ?? null, icon: "flame" });
  };

  add({ id: "first-step", kind: "learning", name: "First Step", line: "You started. That's the hardest part.", earnedOn: c[dayId(1)] ?? null, icon: "step" });
  add({
    id: "ready-for-prayer",
    kind: "learning",
    name: d ? "Off to a good start" : "Ready for Prayer",
    line: d ? "Days 2 and 3 done." : "You've learned how to pray.",
    earnedOn: latest(range(2, 3)),
    icon: "star",
  });
  streak(7, "One Week", "A week of showing up.");
  for (const u of i.units)
    add({ id: `unit-${u.n}`, kind: "learning", name: `Unit ${u.n} complete`, line: u.title, earnedOn: latest(range(u.firstDay, u.lastDay)), icon: "unit" });
  add({ id: "halfway", kind: "learning", name: "Halfway", line: "Halfway through the path.", earnedOn: nth(pathDates, 45), icon: "path" });
  add({ id: "the-path", kind: "learning", name: "The Path", line: "All 90 days. The learning keeps going.", earnedOn: latest(range(1, 90)), icon: "path" });
  add({
    id: "came-back",
    kind: "learning",
    name: "Came Back",
    line: "You came back. That counts for a lot.",
    earnedOn: earliest(Object.entries(c).filter(([id]) => id.startsWith("welcome-back")).map(([, v]) => v)),
    icon: "return",
  });
  add({ id: "clean-slate", kind: "learning", name: "Clean Slate", line: "10 mistakes turned into things you know.", earnedOn: nth(i.cleared, 10), icon: "slate" });
  const track = (name: string) => Array.from({ length: i.tracks[name] ?? 0 }, (_, k) => c[`${name}-${String(k + 1).padStart(2, "0")}`]);
  if ((i.tracks.alphabet ?? 0) > 0)
    add({
      id: "alif-to-ya",
      kind: "learning",
      name: d ? "Alphabet complete" : "Alif to Ya",
      line: d ? "Every letter, done." : "All 28 letters.",
      earnedOn: latest(track("alphabet")),
      icon: "letters",
    });
  if ((i.tracks.seerah ?? 0) > 0)
    add({
      id: "seerah",
      kind: "learning",
      name: d ? "Story track complete" : "Seerah complete",
      line: d ? "Every episode, done." : "The whole life of the Prophet ﷺ, start to finish.",
      earnedOn: latest(track("seerah")),
      icon: "book",
    });
  const season = (id: string, name: string, test: (lessonId: string) => boolean) =>
    add({
      id,
      kind: "learning",
      name: d ? "Seasonal lesson" : `Ready for ${name}`,
      line: d ? "A lesson for this time of year." : `You're ready for ${name}.`,
      earnedOn: earliest(Object.entries(c).filter(([k]) => test(k)).map(([, v]) => v)),
      icon: "moon",
    });
  season("season-ramadan", "Ramadan", (k) => k.startsWith("ramadan-") || k === "eid-fitr");
  season("season-dhul-hijjah", "Dhul Hijjah", (k) => k.startsWith("hajj-") || k === "eid-adha");
  streak(30, "30 days", "A month of showing up.");
  streak(90, "90 days", "Ninety days in a row.");
  streak(365, "365 days", "A whole year, a little every day.");
  return out;
}

/** Badges earned by this activity: earned after, not before. */
export const newBadges = (before: Badge[], after: Badge[]) => {
  const had = new Set(before.filter((b) => b.earnedOn).map((b) => b.id));
  return after.filter((b) => b.earnedOn && !had.has(b.id));
};
