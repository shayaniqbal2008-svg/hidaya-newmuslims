// Shayan (2026-10-08): "dont test them on knowledge they havent learned yet, like letters they havent
// learned." Every letter an alphabet lesson asks about must be taught in that lesson's letter widget or an
// earlier alphabet lesson. Lessons 9-12 (vowels, reading) come after all 28 and may use any letter.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ALPHABET, letterInfo } from "./alphabet";
import type { Lesson } from "./types";

const DIR = join(__dirname, "../../content/lessons");
const lessons = readdirSync(DIR)
  .filter((f) => /^alphabet-\d{2}\.json$/.test(f))
  .sort()
  .map((f) => JSON.parse(readFileSync(join(DIR, f), "utf8")) as Lesson);
const ALL_FROM = 9;

// Letters written with a hamza seat or as a variant count as their base letter.
const BASE: Record<string, string> = { "أ": "ا", "إ": "ا", "آ": "ا", "ٱ": "ا", "ى": "ي", "ؤ": "و", "ئ": "ي", "ة": "ت" };
const BY_AUDIO = new Map(ALPHABET.filter((l) => l.audio).map((l) => [l.audio!, l.char]));
const BY_NAME = new Map(ALPHABET.map((l) => [l.name.toLowerCase(), l.char]));
/** Arabic letters in the text, plus a letter named in Latin when the whole text is its name ("taa"). */
const lettersIn = (s: string | undefined) => {
  const named = BY_NAME.get((s ?? "").trim().toLowerCase().replace(/[.!?]$/, ""));
  return [...(s ?? "")].map((ch) => BASE[ch] ?? ch).filter((ch) => letterInfo(ch)).concat(named ? [named] : []);
};

/** Every letter the lesson tests: question prompts, choice/fill options, match pairs, Check, audio. */
function tested(lesson: Lesson): { where: string; letters: string[] }[] {
  const out: { where: string; letters: string[] }[] = [];
  for (const s of lesson.screens as unknown as Record<string, unknown>[]) {
    const where = `screen ${s.n} (${s.type})`;
    if (!["choice", "multi", "match", "fill", "order"].includes(s.type as string)) continue;
    const opts = (s.options as { text: string }[] | undefined) ?? [];
    const pairs = (s.pairs as { left: string; right: string }[] | undefined) ?? [];
    out.push({
      where,
      letters: [
        ...lettersIn(s.prompt as string),
        ...opts.flatMap((o) => lettersIn(o.text)),
        ...pairs.flatMap((p) => [...lettersIn(p.left), ...lettersIn(p.right)]),
        ...(typeof s.audio === "string" ? [BY_AUDIO.get(s.audio) ?? `unknown audio ${s.audio}`] : []),
      ],
    });
  }
  for (const [i, c] of (lesson.check as unknown as { prompt: string; options: { text: string }[] }[]).entries())
    out.push({ where: `check ${i + 1}`, letters: [...lettersIn(c.prompt), ...c.options.flatMap((o) => lettersIn(o.text))] });
  return out;
}

const taughtIn = (lesson: Lesson) =>
  (lesson.screens as unknown as { type: string; widget?: string; letters?: string[] }[])
    .filter((s) => s.type === "widget" && s.widget === "letter")
    .flatMap((s) => s.letters ?? []);

describe("alphabet lessons only test letters already taught", () => {
  it("has the 12 lessons", () => expect(lessons).toHaveLength(12));

  it("lessons 1-8 together teach all 28 letters", () => {
    const all = new Set(lessons.filter((l) => l.order! < ALL_FROM).flatMap(taughtIn));
    for (const l of ALPHABET.slice(0, 28)) expect(all.has(l.char), l.name).toBe(true);
  });

  it("every letter in a question was taught in this lesson or an earlier one", () => {
    const known = new Set<string>();
    const problems: string[] = [];
    for (const lesson of lessons) {
      for (const ch of taughtIn(lesson)) known.add(ch);
      if (lesson.order! >= ALL_FROM) continue;
      for (const { where, letters } of tested(lesson)) {
        const unknown = [...new Set(letters.filter((ch) => !known.has(ch)))];
        if (unknown.length) problems.push(`${lesson.id} ${where}: ${unknown.join(" ")}`);
      }
    }
    expect(problems).toEqual([]);
  });
});
