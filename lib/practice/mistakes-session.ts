// Practice → Mistakes: turn stored mistake rows into something the lesson player can replay.
// A row whose question no longer renders for this convert (content changed, a gender- or school-only
// screen, a Check that moved) is skipped rather than shown broken.
import type { ReviewItem } from "@/components/lesson/LessonPlayer";
import { getLesson } from "../content/load";
import { renderLesson, type RenderContext, type RenderedScreen } from "../content/render";

export type PracticeScreen = { lessonId: string; lessonTitle: string; screen: RenderedScreen };

/** Screens answered with the Check button (LessonPlayer's QUESTIONS, plus the graded widgets). */
const GRADED = new Set(["choice", "multi", "scenario", "fill", "tap_words", "order"]);
const isGraded = (s: RenderedScreen) => GRADED.has(s.type) || (s.type === "widget" && (s.widget === "rakahs" || s.widget === "rows"));

export function buildMistakeSession(
  rows: { lesson_id: string; ref: string }[],
  ctx: RenderContext,
  limit = 8,
): { screens: PracticeScreen[]; reviews: ReviewItem[]; lessonIds: string[] } {
  const screens: PracticeScreen[] = [];
  const reviews: ReviewItem[] = [];
  for (const row of rows) {
    if (screens.length + reviews.length >= limit) break;
    const src = getLesson(row.lesson_id);
    const m = /^(check|screen):(\d+)$/.exec(row.ref);
    if (!src || !m) continue;
    const rendered = renderLesson(src, ctx);
    const n = Number(m[2]);
    if (m[1] === "check") {
      const item = rendered.check[n];
      if (item) reviews.push({ lessonId: src.id, lessonTitle: src.title, checkIndex: n, item });
    } else {
      const screen = rendered.screens.find((s) => s.n === n);
      if (screen && isGraded(screen)) screens.push({ lessonId: src.id, lessonTitle: src.title, screen });
    }
  }
  const lessonIds = [...new Set([...screens.map((s) => s.lessonId), ...reviews.map((r) => r.lessonId)])];
  return { screens, reviews, lessonIds };
}
