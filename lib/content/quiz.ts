// The welcome-back quiz: questions come from the Check sections of lessons this convert has finished
// (already-reviewed content), so the quiz shows what they still remember and where the gaps are.
import { getLesson } from "./load";
import { renderLesson, type RenderContext, type RenderedLesson } from "./render";
import type { QuizItem } from "./types";

const hash = (s: string) => [...s].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) >>> 0, 7);

/** Pick quiz questions: one per lesson, preferred lessons first, then the rest; stable within a day. */
export function pickQuizItems(opts: {
  completed: string[];
  prefer?: string[];
  count: number;
  seed: string;
  ctx: RenderContext;
}): QuizItem[] {
  const done = opts.completed.filter((id) => id.startsWith("day-"));
  // Nothing finished yet (shouldn't happen on a welcome-back): fall back to the first week.
  const pool = done.length ? done : ["day-01", "day-02", "day-03", "day-05", "day-07"];
  const preferred = (opts.prefer ?? []).filter((id) => pool.includes(id));
  const others = pool.filter((id) => !preferred.includes(id)).sort((a, b) => hash(opts.seed + a) - hash(opts.seed + b));
  const out: QuizItem[] = [];
  for (const id of [...preferred, ...others]) {
    if (out.length >= opts.count) break;
    const lesson = getLesson(id);
    if (!lesson?.check.length) continue;
    const check = renderLesson(lesson, opts.ctx).check;
    const item = check[hash(opts.seed + id) % check.length];
    if (item) out.push({ lessonId: id, lessonTitle: lesson.title, day: lesson.day, prompt: item.prompt, options: item.options });
  }
  return out;
}

/** Fill every quiz screen in a rendered lesson. */
export function fillQuizzes(lesson: RenderedLesson, completed: string[], ctx: RenderContext, seed: string): RenderedLesson {
  if (!lesson.screens.some((s) => s.type === "quiz")) return lesson;
  return {
    ...lesson,
    screens: lesson.screens.map((s) =>
      s.type === "quiz" ? { ...s, items: pickQuizItems({ completed, prefer: s.prefer, count: s.count ?? 6, seed: seed + s.n, ctx }) } : s,
    ),
  };
}
