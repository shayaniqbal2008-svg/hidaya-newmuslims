// Reading the compiled content from content/. Server only.
import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Citation, ContentIndex, GlossaryEntry, Lesson } from "./types";

const DIR = join(process.cwd(), "content");
const cache = new Map<string, unknown>();

function read<T>(file: string): T {
  if (!cache.has(file)) cache.set(file, JSON.parse(readFileSync(join(DIR, file), "utf8")));
  return cache.get(file) as T;
}

const SAFE_ID = /^(day-\d{2}|[a-z]+(?:-[a-z0-9]+)*)$/;

export function getLesson(id: string): Lesson | null {
  if (!SAFE_ID.test(id)) return null;
  try {
    return read<Lesson>(`lessons/${id}.json`);
  } catch {
    return null;
  }
}

export const getIndex = () => read<ContentIndex>("index.json");
export const getAllCitations = () => read<Record<string, Citation>>("citations.json");
export const getGlossary = () => read<GlossaryEntry[]>("glossary.json");

/** Only what one lesson needs: its citations and its glossary terms. */
export function lessonExtras(lesson: Pick<Lesson, "citations" | "glossary">) {
  const all = getAllCitations();
  const citations = Object.fromEntries(lesson.citations.filter((k) => all[k]).map((k) => [k, all[k]]));
  const want = new Set(lesson.glossary.map((g) => g.toLowerCase()));
  const glossary = getGlossary().filter((g) => want.has(g.term.toLowerCase()));
  return { citations, glossary };
}
