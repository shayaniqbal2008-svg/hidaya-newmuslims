// A practice session: due review questions, (?any=1) a few from any finished lesson, or (?mode=mistakes)
// questions answered wrong, until each is right twice in a row.
import { redirect } from "next/navigation";
import { getLesson, lessonExtras } from "@/lib/content/load";
import { renderLesson } from "@/lib/content/render";
import { getMe, getProgress, renderContext } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";
import { LessonPlayer, type ReviewItem } from "@/components/lesson/LessonPlayer";
import { answerReview, completePractice, recordAnswer } from "../../actions";
import { buildMistakeSession } from "@/lib/practice/mistakes-session";
import { topUp } from "@/lib/practice/top-up";
import { MIN_PRACTICE_QUESTIONS, PRACTICE_XP, practiceCounts } from "@/lib/streak";
import { celebrationFor } from "@/lib/streak-store";

type Pick = { lesson_id: string; check_index: number };
const pickKey = (x: Pick) => `${x.lesson_id}:${x.check_index}`;

/** Every Check question from lessons the convert has finished: the pool a short session is topped up from. */
const finishedPool = (completed: Record<string, string>): Pick[] =>
  Object.keys(completed).flatMap((id) => (getLesson(id)?.check ?? []).map((_, i) => ({ lesson_id: id, check_index: i })));

function toReviews(picks: Pick[], ctx: ReturnType<typeof renderContext>): ReviewItem[] {
  const out: ReviewItem[] = [];
  for (const r of picks) {
    const src = getLesson(r.lesson_id);
    if (!src) continue;
    const item = renderLesson(src, ctx).check[r.check_index];
    if (item) out.push({ lessonId: r.lesson_id, lessonTitle: src.title, checkIndex: r.check_index, item });
  }
  return out;
}

export default async function PracticeSession({ searchParams }: PageProps<"/practice/session">) {
  const me = await getMe();
  const p = await getProgress(me);
  const sp = await searchParams;
  const any = sp.any === "1";
  const ctx = renderContext(me);
  const supabase = await supabaseServer();

  if (sp.mode === "mistakes") {
    const { data } = await supabase
      .from("practice_mistakes")
      .select("lesson_id, ref")
      .is("cleared_at", null)
      .order("last_wrong_at");
    const session = buildMistakeSession(data ?? [], ctx);
    if (!session.lessonIds.length) redirect("/practice");
    // A full session has 5+ questions (the streak rule): top a short round up with past-lesson questions.
    const have = session.screens.length + session.reviews.length;
    const taken = new Set(session.reviews.map((r) => `${r.lessonId}:${r.checkIndex}`));
    const extra = toReviews(
      topUp([], finishedPool(p.completed).filter((x) => !taken.has(pickKey(x))), Math.max(0, MIN_PRACTICE_QUESTIONS - have), pickKey, p.today),
      ctx,
    );
    const reviewsAll = [...session.reviews, ...extra];
    const questions = have + extra.length;
    const counts = practiceCounts(questions);
    const celebration = await celebrationFor(me, p, { kind: counts ? "practice" : null, completedAfter: p.completed, xpGain: counts ? PRACTICE_XP : 0 });
    const extras = session.lessonIds.flatMap((id) => {
      const l = getLesson(id);
      return l ? [lessonExtras(l)] : [];
    });
    const base = getLesson(session.lessonIds[0])!;
    return (
      <LessonPlayer
        practice
        lesson={renderLesson(base, ctx)}
        citations={Object.assign({}, ...extras.map((e) => e.citations))}
        glossary={[...new Map(extras.flatMap((e) => e.glossary).map((g) => [g.term, g])).values()]}
        screens={session.screens}
        reviews={reviewsAll}
        exitHref="/practice"
        celebration={celebration}
        api={{ answer: recordAnswer, complete: completePractice.bind(null, questions) }}
      />
    );
  }

  let picks: Pick[] = [];
  if (!any) {
    const { data } = await supabase
      .from("review_items")
      .select("lesson_id, check_index")
      .lte("due_at", new Date().toISOString())
      .order("due_at")
      .limit(8);
    // Top a short review up to a full session (5+) with past-lesson questions.
    picks = topUp(data ?? [], finishedPool(p.completed), MIN_PRACTICE_QUESTIONS, pickKey, p.today);
  } else {
    const all = finishedPool(p.completed);
    // A different mix each day, stable within the day.
    const h = (s: string) => [...s].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) >>> 0, 7);
    picks = all.sort((a, b) => h(`${p.today}${a.lesson_id}${a.check_index}`) - h(`${p.today}${b.lesson_id}${b.check_index}`)).slice(0, 6);
  }
  const reviews = toReviews(picks, ctx);
  if (!reviews.length) redirect("/practice");
  const counts = practiceCounts(reviews.length);
  const celebration = await celebrationFor(me, p, { kind: counts ? "practice" : null, completedAfter: p.completed, xpGain: counts ? PRACTICE_XP : 0 });
  const base = getLesson(reviews[0].lessonId)!;
  const { citations, glossary } = lessonExtras(base);
  return (
    <LessonPlayer
      practice
      lesson={renderLesson(base, ctx)}
      citations={citations}
      glossary={glossary}
      reviews={reviews}
      exitHref="/practice"
      celebration={celebration}
      api={{ review: any ? undefined : answerReview, answer: recordAnswer, complete: completePractice.bind(null, reviews.length) }}
    />
  );
}
