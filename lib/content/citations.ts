// Finding scripture references in text. Shared by the content compiler, the lesson player
// (tap a reference to read it) and the AI guide's output check.

export const HADITH_COLLECTIONS = ["Bukhari", "Muslim", "Abu Dawud", "Tirmidhi", "Nasa'i", "Ibn Majah"] as const;

const COLL_ALIASES: Record<string, string> = {
  bukhari: "Bukhari",
  "sahih al-bukhari": "Bukhari",
  "sahih bukhari": "Bukhari",
  muslim: "Muslim",
  "sahih muslim": "Muslim",
  "abu dawud": "Abu Dawud",
  "abu dawood": "Abu Dawud",
  tirmidhi: "Tirmidhi",
  "at-tirmidhi": "Tirmidhi",
  "nasa'i": "Nasa'i",
  nasai: "Nasa'i",
  "an-nasa'i": "Nasa'i",
  "ibn majah": "Ibn Majah",
};
const COLL_RE = Object.keys(COLL_ALIASES)
  .sort((a, b) => b.length - a.length)
  .map((k) => k.replace(/[.*+?^${}()|[\]\\']/g, "\\$&"))
  .join("|");

/** Hadith references like "Bukhari 50", "Sahih Muslim 2750", "Abu Dawud #832". */
export const HADITH_RE = new RegExp(`\\b(${COLL_RE})\\s*(?:#|no\\.?\\s*)?(\\d+)[a-z]?\\b`, "gi");
/** Qur'an references like "Q 2:186", "Q2:186–187", "Qur'an 31:14". */
export const QURAN_RE = /(?:\bQ\.?\s?|\bQur'?an\s+|\bQuran\s+)(\d{1,3}):(\d{1,3})(?:\s?[–-]\s?(\d{1,3}))?/gi;

export type Ref =
  | { kind: "quran"; surah: number; from: number; to: number; raw: string }
  | { kind: "hadith"; collection: string; number: number; raw: string };

/** Every scripture reference in a piece of text, in order of appearance. */
export function findRefs(text: string): Ref[] {
  const refs: (Ref & { at: number })[] = [];
  for (const m of text.matchAll(QURAN_RE)) {
    const from = Number(m[2]);
    refs.push({ kind: "quran", surah: Number(m[1]), from, to: Number(m[3] ?? from), raw: m[0], at: m.index! });
    // "[Q 4:34, 5:33]": extra references after the first inside the same bracket
    const after = text.slice(m.index! + m[0].length);
    const tail = after.match(/^((?:\s*[,;]\s*\d{1,3}:\d{1,3}(?:\s?[–-]\s?\d{1,3})?)+)\s*\]/);
    if (tail) {
      for (const t of tail[1].matchAll(/(\d{1,3}):(\d{1,3})(?:\s?[–-]\s?(\d{1,3}))?/g)) {
        const f = Number(t[2]);
        refs.push({ kind: "quran", surah: Number(t[1]), from: f, to: Number(t[3] ?? f), raw: t[0], at: m.index! + 1 });
      }
    }
  }
  for (const m of text.matchAll(HADITH_RE)) {
    refs.push({
      kind: "hadith",
      collection: COLL_ALIASES[m[1].toLowerCase()],
      number: Number(m[2]),
      raw: m[0],
      at: m.index!,
    });
  }
  return refs.sort((a, b) => a.at - b.at).map(({ at: _at, ...r }) => r as Ref);
}

/** Per-verse keys for a Qur'an range: Q 31:14–15 → ["Q 31:14", "Q 31:15"]. */
export function quranVerseKeys(surah: number, from: number, to: number): string[] {
  const out: string[] = [];
  for (let v = from; v <= Math.max(from, to); v++) out.push(`Q ${surah}:${v}`);
  return out;
}

export function refKeys(r: Ref): string[] {
  return r.kind === "quran" ? quranVerseKeys(r.surah, r.from, r.to) : [`${r.collection} ${r.number}`];
}

/** Unique citation keys (per verse / per hadith) found in text. */
export function citationKeysIn(text: string): string[] {
  return [...new Set(findRefs(text).flatMap(refKeys))];
}
