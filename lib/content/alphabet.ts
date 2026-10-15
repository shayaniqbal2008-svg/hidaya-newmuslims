// The Arabic alphabet for the optional alphabet track (Practice → Explore more).
// Names follow the common teaching spellings; hints describe the sound for an English speaker.
// Audio: Lingua Libre recordings on Wikimedia Commons (public/audio/alphabet/ATTRIBUTIONS.md).
// Hamza has no clip yet: the only one found says the word "hamza", not the sound (Shayan, 2026-10-08).

export type LetterInfo = {
  char: string;
  name: string;
  /** How the sound is written in Latin letters. */
  translit: string;
  hint: string;
  /** False for the six letters that never join to the letter after them (ا د ذ ر ز و), and for hamza. */
  joins: boolean;
  audio: string | null;
};

const a = (n: number, name: string) => `/audio/alphabet/${String(n).padStart(2, "0")}-${name}.wav`;

export const ALPHABET: LetterInfo[] = [
  { char: "ا", name: "alif", translit: "ā", hint: "Carries a long \"aa\" as in \"father\", or holds a hamza.", joins: false, audio: a(1, "alif") },
  { char: "ب", name: "baa", translit: "b", hint: "b as in \"bed\".", joins: true, audio: a(2, "baa") },
  { char: "ت", name: "taa", translit: "t", hint: "t as in \"tea\", tongue just behind the teeth.", joins: true, audio: a(3, "taa") },
  { char: "ث", name: "thaa", translit: "th", hint: "th as in \"think\".", joins: true, audio: a(4, "thaa") },
  { char: "ج", name: "jiim", translit: "j", hint: "j as in \"jam\".", joins: true, audio: a(5, "jiim") },
  { char: "ح", name: "Ḥaa", translit: "ḥ", hint: "A breathy h from deep in the throat, like fogging up a mirror.", joins: true, audio: a(6, "haa") },
  { char: "خ", name: "khaa", translit: "kh", hint: "kh like the \"ch\" in Scottish \"loch\".", joins: true, audio: a(7, "khaa") },
  { char: "د", name: "daal", translit: "d", hint: "d as in \"dog\".", joins: false, audio: a(8, "daal") },
  { char: "ذ", name: "dhaal", translit: "dh", hint: "th as in \"this\".", joins: false, audio: a(9, "dhaal") },
  { char: "ر", name: "raa", translit: "r", hint: "A tapped r, like the Spanish \"pero\".", joins: false, audio: a(10, "raa") },
  { char: "ز", name: "zaay", translit: "z", hint: "z as in \"zoo\".", joins: false, audio: a(11, "zaay") },
  { char: "س", name: "siin", translit: "s", hint: "s as in \"sun\".", joins: true, audio: a(12, "siin") },
  { char: "ش", name: "shiin", translit: "sh", hint: "sh as in \"shoe\".", joins: true, audio: a(13, "shiin") },
  { char: "ص", name: "Ṣaad", translit: "ṣ", hint: "A heavy s: say s with the back of your tongue raised.", joins: true, audio: a(14, "saad") },
  { char: "ض", name: "Ḍaad", translit: "ḍ", hint: "A heavy d, deep and full in the mouth.", joins: true, audio: a(15, "daad") },
  { char: "ط", name: "Ṭaa", translit: "ṭ", hint: "A heavy t, deep and full in the mouth.", joins: true, audio: a(16, "taa") },
  { char: "ظ", name: "Ẓaa", translit: "ẓ", hint: "A heavy \"th\" as in \"this\".", joins: true, audio: a(17, "zaa") },
  { char: "ع", name: "ʿayn", translit: "ʿ", hint: "A squeeze in the middle of the throat. No English match: listen and copy.", joins: true, audio: a(18, "ayn") },
  { char: "غ", name: "ghayn", translit: "gh", hint: "A gargled g, close to the French r.", joins: true, audio: a(19, "ghayn") },
  { char: "ف", name: "faa", translit: "f", hint: "f as in \"fun\".", joins: true, audio: a(20, "faa") },
  { char: "ق", name: "qaaf", translit: "q", hint: "A k from far back in the throat.", joins: true, audio: a(21, "qaaf") },
  { char: "ك", name: "kaaf", translit: "k", hint: "k as in \"kite\".", joins: true, audio: a(22, "kaaf") },
  { char: "ل", name: "laam", translit: "l", hint: "l as in \"lamp\".", joins: true, audio: a(23, "laam") },
  { char: "م", name: "miim", translit: "m", hint: "m as in \"moon\".", joins: true, audio: a(24, "miim") },
  { char: "ن", name: "nuun", translit: "n", hint: "n as in \"noon\".", joins: true, audio: a(25, "nuun") },
  { char: "ه", name: "haa", translit: "h", hint: "h as in \"hat\".", joins: true, audio: a(26, "haa") },
  { char: "و", name: "waaw", translit: "w", hint: "w as in \"water\", or a long \"oo\".", joins: false, audio: a(27, "waaw") },
  { char: "ي", name: "yaa", translit: "y", hint: "y as in \"yes\", or a long \"ee\".", joins: true, audio: a(28, "yaa") },
  { char: "ء", name: "hamza", translit: "ʾ", hint: "A tiny catch in the throat, like the break in \"uh-oh\".", joins: false, audio: null },
];

const BY_CHAR = new Map(ALPHABET.map((l) => [l.char, l]));
export const letterInfo = (char: string) => BY_CHAR.get(char);

/** Tatweel: the visible joining line, so the convert sees which side a letter connects on. */
const JOIN = "\u0640";

/**
 * A letter's shapes, drawn by the font itself: a joining line on a side makes the letter take its joined
 * form there and shows where it connects. Letters that never join forward get no start or middle shape;
 * standalone hamza has one.
 */
export function letterForms(l: LetterInfo): { isolated: string; initial?: string; medial?: string; final?: string } {
  if (l.char === "ء") return { isolated: l.char };
  const final = JOIN + l.char;
  if (!l.joins) return { isolated: l.char, final };
  return { isolated: l.char, initial: l.char + JOIN, medial: JOIN + l.char + JOIN, final };
}

/** True when text is only Arabic script (and spaces), e.g. an answer option that is a letter or a word. */
export const isArabicOnly = (text: string) => /^[\s\u0600-\u06ff\u0750-\u077f\u08a0-\u08ff\u200d]+$/.test(text) && /\S/.test(text);
