// A practice drill (Words, Prayer phrases, Du'as & short surahs): screens built from what this convert
// has already learned (lib/practice/drills.ts), played in the lesson player's practice mode.
import { notFound, redirect } from "next/navigation";
import { getLesson } from "@/lib/content/load";
import { renderLesson } from "@/lib/content/render";
import { getMe, getProgress, renderContext } from "@/lib/dal";
import { buildDrill, drillAvailable, DRILL_KINDS, taughtTerms, type DrillKind } from "@/lib/practice/drills";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";

const TITLES: Record<DrillKind, string> = { words: "Words", phrases: "Prayer phrases", surahs: "Du'as & short surahs" };

export default async function DrillPage({ params }: PageProps<"/practice/drill/[kind]">) {
  const { kind } = await params;
  if (!DRILL_KINDS.includes(kind as DrillKind)) notFound();
  const k = kind as DrillKind;
  const me = await getMe();
  const p = await getProgress(me);
  const completed = Object.keys(p.completed);
  if (!drillAvailable(k, completed).count) redirect("/practice");

  const screens = buildDrill(k, completed, p.today);
  // The player needs a lesson shell; the drill's screens are passed as practice screens.
  const shell = { ...renderLesson(getLesson("day-01")!, renderContext(me)), id: `drill-${k}`, title: TITLES[k], check: [], closing: null };
  return (
    <LessonPlayer
      practice
      lesson={shell}
      citations={{}}
      glossary={k === "words" ? taughtTerms(completed) : []}
      screens={screens.map((screen) => ({ lessonId: `drill-${k}`, lessonTitle: TITLES[k], screen }))}
      exitHref="/practice"
    />
  );
}
