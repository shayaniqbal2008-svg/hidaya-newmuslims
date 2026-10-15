// Practice drills built from content the convert has already met: glossary words, the prayer phrases
// (Days 8–30) and short surahs. Arabic comes only from compiled source data (citations.json, lesson
// prayerPhrase), never generated. Stable within a day for the same seed.
import { isArabicOnly } from "../content/alphabet";
import { getAllCitations, getGlossary, getLesson } from "../content/load";
import type { RenderedScreen } from "../content/render";
import type { GlossaryEntry, PhraseData } from "../content/types";

/** A screen before numbering (Omit over each member of the union). */
type Unnumbered = RenderedScreen extends infer T ? (T extends unknown ? Omit<T, "n"> : never) : never;

export type DrillKind = "words" | "phrases" | "surahs";
export const DRILL_KINDS: DrillKind[] = ["words", "phrases", "surahs"];

/** Short surahs taught in full in the phrase track (Outline: al-Fatiha by Day 16, al-Ikhlas by Day 18). */
const SURAHS = [
  { id: "fatiha", title: "Al-Fatiha", surah: 1, verses: 7, taughtIn: 16 },
  { id: "ikhlas", title: "Al-Ikhlas", surah: 112, verses: 4, taughtIn: 18 },
];

const hash = (s: string) => [...s].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) >>> 0, 7);
const seeded = <T>(xs: T[], seed: string, key: (x: T) => string) => [...xs].sort((a, b) => hash(seed + key(a)) - hash(seed + key(b)));
const dayId = (n: number) => `day-${String(n).padStart(2, "0")}`;
/** "Day 11" and "Day 3 (note)" → day-11 / day-03; module ids ("ramadan-1") stay as they are. */
const taughtDay = (firstTaught: string) => Number(/^Day (\d+)/.exec(firstTaught)?.[1] ?? NaN);
const lessonOf = (firstTaught: string) => (taughtDay(firstTaught) ? dayId(taughtDay(firstTaught)) : firstTaught);
const firstSentence = (s: string) => s.split(/(?<=[.:;])\s/)[0].replace(/[.:;]$/, "");

export function taughtTerms(completed: string[]): GlossaryEntry[] {
  const done = new Set(completed);
  return getGlossary().filter((g) => done.has(lessonOf(g.firstTaught)));
}

function taughtPhrases(completed: string[]): PhraseData[] {
  return completed
    .filter((id) => id.startsWith("day-"))
    .sort()
    .flatMap((id) => {
      const p = getLesson(id)?.prayerPhrase;
      return p && !p.arabic.startsWith("TODO") ? [p] : [];
    });
}

function verses(surah: number, count: number): { arabic: string; english: string }[] {
  const all = getAllCitations();
  return Array.from({ length: count }, (_, i) => all[`Q ${surah}:${i + 1}`]).map((c) => ({
    arabic: c.arabic.trim().replace(/\s+/g, " "),
    english: c.english,
  }));
}

function unlockedSurahs(completed: string[]) {
  return SURAHS.filter((s) => completed.includes(dayId(s.taughtIn)));
}

export function drillAvailable(kind: DrillKind, completed: string[]): { count: number; unlockHint: string | null } {
  if (kind === "words") {
    const count = taughtTerms(completed).length;
    const first = Math.min(...getGlossary().map((g) => taughtDay(g.firstTaught)).filter((d) => d > 0));
    return { count, unlockHint: count ? null : `Finish Day ${first} to unlock` };
  }
  if (kind === "phrases") {
    const count = taughtPhrases(completed).length;
    return { count, unlockHint: count ? null : "Finish Day 8 to unlock" };
  }
  const count = unlockedSurahs(completed).length;
  return { count, unlockHint: count ? null : `Finish Day ${SURAHS[0].taughtIn} to unlock` };
}

export function buildDrill(kind: DrillKind, completed: string[], seed: string): RenderedScreen[] {
  const out: Unnumbered[] = [];
  if (kind === "words") {
    const pick = seeded(taughtTerms(completed), seed, (g) => g.term).slice(0, 5);
    out.push({
      type: "reveal",
      title: "Words you've learned",
      // The Arabic goes in its own field so the card renders it in the Arabic font, right to left.
      cards: pick.map((g) =>
        isArabicOnly(g.arabic) ? { front: `**${g.term}**`, back: g.meaning, arabic: g.arabic } : { front: `**${g.term}**`, back: `${g.arabic} · ${g.meaning}` },
      ),
    });
    out.push({ type: "match", prompt: "Match each word to its meaning", pairs: pick.map((g) => ({ left: g.term, right: firstSentence(g.meaning) })) });
  } else if (kind === "phrases") {
    const all = taughtPhrases(completed);
    const pick = seeded(all, seed, (p) => p.translit).slice(0, 4);
    for (const p of pick) {
      out.push({ type: "phrase", ...p });
      const others = seeded(all.filter((o) => o.meaning !== p.meaning), seed + p.translit, (o) => o.translit).slice(0, 2);
      // A meaning question needs three real choices; with fewer phrases taught, just show the phrase.
      if (others.length === 2)
        out.push({
          type: "choice",
          prompt: `What does *${p.translit}* mean?`,
          options: [{ text: p.meaning, correct: true }, ...others.map((o) => ({ text: o.meaning }))],
        });
    }
    // Ordering only for short phrases: al-Fatiha or the tashahhud would be 40 chips on a phone.
    const short = all.filter((o) => o.translit.split(/\s+/).length <= 8 && !o.translit.includes("…"));
    const last = seeded(short, seed + "order", (o) => o.translit)[0];
    if (last) {
      const extra = seeded(all.filter((o) => o !== last).flatMap((o) => o.translit.split(/\s+/)), seed, (w) => w)
        .filter((w) => !last.translit.split(/\s+/).includes(w))
        .slice(0, 3);
      out.push({ type: "tap_words", prompt: `Put it in order: "${last.meaning}"`, answer: last.translit, extra });
    }
  } else {
    for (const s of unlockedSurahs(completed)) {
      const vs = verses(s.surah, s.verses);
      out.push({ type: "reveal", title: s.title, cards: vs.map((v) => ({ front: v.arabic, back: v.english, rtl: true })) });
      const words = vs.flatMap((v) => v.arabic.split(" "));
      for (const v of seeded(vs, seed + s.id, (x) => x.arabic).slice(0, 2)) {
        const ws = v.arabic.split(" ");
        const k = hash(seed + v.arabic) % ws.length;
        const wrong = seeded([...new Set(words.filter((w) => w !== ws[k]))], seed + k, (w) => w).slice(0, 2);
        out.push({
          type: "fill",
          dir: "rtl",
          before: ws.slice(0, k).join(" "),
          after: ws.slice(k + 1).join(" "),
          options: [{ text: ws[k], correct: true }, ...wrong.map((text) => ({ text }))],
        });
      }
    }
  }
  return out.map((s, i) => ({ ...s, n: i + 1 }) as RenderedScreen);
}
