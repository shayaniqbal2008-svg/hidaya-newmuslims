// A lesson, rendered for this convert (their masjid's school, their names, teen lines), plus up to
// two spaced-review questions from earlier lessons and any earlier reflections it should show again.
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { getLesson, lessonExtras } from "@/lib/content/load";
import { renderLesson } from "@/lib/content/render";
import { fillQuizzes } from "@/lib/content/quiz";
import { decrypt } from "@/lib/crypto";
import { canOpen, getMe, getProgress, lessonTitle, renderContext } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";
import { LessonPlayer, type ReviewItem } from "@/components/lesson/LessonPlayer";
import type { Resurfaced } from "@/components/lesson/screens";
import { isTrackId } from "@/lib/access";
import { countsForStreak, LESSON_XP } from "@/lib/streak";
import { localDate } from "@/lib/schedule";
import { celebrationFor } from "@/lib/streak-store";
import { answerReview, completeLesson, recordAnswer, logAction, saveCarryForward, saveReflection, saveScreen, setGender } from "../../actions";

export default async function LessonPage({ params }: PageProps<"/lesson/[id]">) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  const me = await getMe();
  const progress = await getProgress(me);
  if (!canOpen(id, progress)) redirect("/path");
  const track = isTrackId(id);

  const supabase = await supabaseServer();
  const resurfaceIds = lesson.screens.flatMap((s) => (s.type === "reflect" ? (s.resurface ?? []) : []));
  const [{ data: due }, { data: refl }, { data: logs }, { data: prog }] = await Promise.all([
    supabase
      .from("review_items")
      .select("lesson_id, check_index")
      .lte("due_at", new Date().toISOString())
      .neq("lesson_id", id)
      .order("due_at")
      .limit(2),
    supabase
      .from("reflections")
      .select("lesson_id, screen_n, body_enc, shared_with_mentor_at")
      .in("lesson_id", [id, ...resurfaceIds]),
    supabase.from("action_logs").select("log_key"),
    supabase.from("lesson_progress").select("last_screen, completed_at").eq("lesson_id", id).maybeSingle(),
  ]);

  const reviews: ReviewItem[] = [];
  for (const r of due ?? []) {
    const src = getLesson(r.lesson_id);
    const item = src?.check[r.check_index];
    if (src && item) reviews.push({ lessonId: r.lesson_id, lessonTitle: src.title, checkIndex: r.check_index, item });
  }

  const read = (enc: string) => {
    try {
      return decrypt(me.userId, enc);
    } catch {
      return "";
    }
  };
  const reflections: Record<number, { text: string; shared: boolean }> = {};
  const resurfaced: Record<number, Resurfaced[]> = {};
  for (const r of refl ?? []) if (r.lesson_id === id) reflections[r.screen_n] = { text: read(r.body_enc), shared: !!r.shared_with_mentor_at };
  for (const s of lesson.screens) {
    if (s.type !== "reflect" || !s.resurface) continue;
    resurfaced[s.n] = (refl ?? [])
      .filter((r) => s.resurface!.includes(r.lesson_id))
      .map((r) => ({ lessonId: r.lesson_id, title: lessonTitle(r.lesson_id), text: read(r.body_enc) }))
      .filter((r) => r.text);
  }

  const rendered = fillQuizzes(renderLesson(lesson, renderContext(me)), Object.keys(progress.completed), renderContext(me), progress.today);
  const { citations, glossary } = lessonExtras(lesson);
  // Resume at the screen they were on (screen n is 1-based; the player counts from 0).
  const startAt = prog && !prog.completed_at ? Math.max(0, rendered.screens.findIndex((s) => s.n === prog.last_screen)) : 0;
  const already = !!prog?.completed_at;
  const completedOn = prog?.completed_at ? localDate(me.convert.timezone, new Date(prog.completed_at)) : null;
  const celebration = await celebrationFor(me, progress, {
    kind: countsForStreak(id, completedOn, progress.today) ? "lesson" : null,
    completedAfter: { ...progress.completed, [id]: already && id.startsWith("day-") ? progress.completed[id] : progress.today },
    xpGain: already ? 0 : LESSON_XP,
  });
  const askGender = lesson.usesGender && !me.convert.gender && (await cookies()).get("gender_ask")?.value !== "skip";

  return (
    <LessonPlayer
      lesson={rendered}
      citations={citations}
      glossary={glossary}
      reviews={reviews}
      reflections={reflections}
      resurfaced={resurfaced}
      loggedKeys={(logs ?? []).map((l) => l.log_key)}
      startAt={startAt}
      askGender={askGender}
      // Optional track lessons (alphabet, seerah) earn XP but never touch the streak, and lead back to Practice.
      celebration={celebration}
      exitHref={track ? "/practice" : undefined}
      quickExitUrl={me.settings.quick_exit_url}
      api={{
        saveScreen: saveScreen.bind(null, id),
        log: logAction.bind(null, id),
        saveReflection: saveReflection.bind(null, id),
        saveCarryForward: saveCarryForward.bind(null, id),
        review: answerReview,
        answer: recordAnswer,
        complete: completeLesson.bind(null, id),
        setGender,
      }}
    />
  );
}
