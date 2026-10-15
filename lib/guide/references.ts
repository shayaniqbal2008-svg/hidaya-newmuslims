// Picks which Citation Bank entries the guide sees for a conversation: everything the current lesson
// cites (in its screens or its AI guide context), plus a simple keyword match on the question.
// Scripture text always comes from content/citations.json (the source datasets), never from the model.
import { citationKeysIn } from "../content/citations";
import type { Citation, Lesson } from "../content/types";

const STOP = new Set(
  "a an and are as at be but by can do does for from have how i if in is it me my no not of on or so that the this to was what when where who why will with you your about should would could".split(" "),
);

function terms(text: string) {
  return [...new Set(text.toLowerCase().match(/[a-z']{3,}/g) ?? [])].filter((w) => !STOP.has(w));
}

export function pickReferences(
  all: Record<string, Citation>,
  lesson: Lesson | null,
  question: string,
  limit = 14,
): Citation[] {
  const keys = new Set<string>();
  if (lesson) for (const k of [...lesson.citations, ...citationKeysIn(lesson.aiContext)]) if (all[k]) keys.add(k);
  // Keyword match over gists and English text; hadith gists are short and topical, so they rank well.
  const q = terms(question);
  if (q.length) {
    const scored = Object.values(all)
      .filter((c) => !keys.has(c.key))
      .map((c) => {
        const hay = `${c.gist ?? ""} ${c.english}`.toLowerCase();
        return { c, s: q.reduce((n, w) => n + (hay.includes(w) ? (c.gist?.toLowerCase().includes(w) ? 2 : 1) : 0), 0) };
      })
      .filter((x) => x.s >= 2)
      .sort((a, b) => b.s - a.s)
      .slice(0, 6);
    for (const x of scored) keys.add(x.c.key);
  }
  return [...keys].slice(0, limit).map((k) => all[k]);
}

/** How the references are shown to the model. Qur'an: exact translation. Hadith: our paraphrase only. */
export function formatReferences(refs: Citation[]): string {
  return refs
    .map((c) =>
      c.kind === "quran"
        ? `[${c.key}] (Qur'an, Saheeh International): "${c.english}"`
        : `[${c.key}] (hadith${c.grade && c.grade !== "Sahih" ? `, graded ${c.grade}` : ""}) Gist, paraphrase only, never quote: ${c.gist}`,
    )
    .join("\n");
}
