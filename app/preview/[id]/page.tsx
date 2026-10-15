// Preview any lesson without signing in: /preview/day-03?madhab=hanafi&minor=1&gender=female (gender=none: both, labelled)
// Only available in development, or when PREVIEW_ENABLED=1 (handy for scholar review links later).
import { notFound } from "next/navigation";
import { getAllCitations, getIndex, getLesson, lessonExtras } from "@/lib/content/load";
import { renderLesson, type RenderContext } from "@/lib/content/render";
import { fillQuizzes } from "@/lib/content/quiz";
import type { Madhab } from "@/lib/content/types";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { celebrationFor, consistencyQuote } from "@/lib/celebration";
import { addDays } from "@/lib/schedule";
import type { DayRow } from "@/lib/streak";

export default async function PreviewPage({ params, searchParams }: PageProps<"/preview/[id]">) {
  if (process.env.NODE_ENV === "production" && process.env.PREVIEW_ENABLED !== "1") notFound();
  const { id } = await params;
  const sp = await searchParams;
  const lesson = getLesson(id);
  if (!lesson) notFound();
  const madhab = (["hanafi", "maliki", "shafii", "hanbali"].includes(String(sp.madhab)) ? sp.madhab : null) as Madhab | null;
  const ctx: RenderContext = {
    masjidName: "Demo Masjid",
    madhab: sp.madhab === undefined ? "hanafi" : madhab,
    jumuahTime: "1:30 pm",
    mentorName: sp.mentor === "0" ? null : "Br. Moneeb",
    firstName: "Keisha",
    isMinor: sp.minor === "1",
    gender: sp.gender === "none" ? null : sp.gender === "female" ? "female" : "male",
  };
  // Welcome-back quiz in preview: pretend the first ?done= days (default 30) are finished.
  const done = Math.max(0, Math.min(90, Number(sp.done ?? 30) || 0));
  const completed = Array.from({ length: done }, (_, i) => `day-${String(i + 1).padStart(2, "0")}`);
  const rendered = fillQuizzes(renderLesson(lesson, ctx), completed, ctx, "preview");
  const { citations, glossary } = lessonExtras(lesson);
  // The celebration with made-up history: ?streak=N (days before today), &rest=1 (a rest day 2 days ago),
  // &restart=1 (a broken 4-day streak: Day 1 again with a make-up offer), &calm=1, &discreet=1, &sounds=1.
  const today = "2026-10-20";
  const n = Math.max(0, Math.min(400, Number(sp.streak ?? 2) || 0));
  const rows: DayRow[] =
    sp.restart === "1"
      ? [-6, -5, -4, -3].map((k) => ({ day: addDays(today, k), source: "lesson" as const, lessons: 1 }))
      : Array.from({ length: n }, (_, k) => ({ day: addDays(today, -1 - k - (sp.rest === "1" && k >= 1 ? 1 : 0)), source: "lesson" as const, lessons: 1 }));
  const c = getAllCitations()["Bukhari 6464"];
  const celebration = celebrationFor({
    rows,
    meta: { longest: 0, pausedFrom: null, pausedUntil: null, lastRepairOn: null },
    today,
    kind: "lesson",
    completedBefore: Object.fromEntries(completed.filter((d) => d !== id).map((d) => [d, today])),
    completedAfter: Object.fromEntries([...completed, id].map((d) => [d, today])),
    cleared: [],
    units: getIndex().units,
    tracks: getIndex().tracks,
    settings: { show_streak: true, calm_celebrations: sp.calm === "1", celebration_sounds: sp.sounds === "1", discreet_mode: sp.discreet === "1" },
    xpBefore: 120,
    xpGain: 10,
    hadith: c ? { text: consistencyQuote(c.english), source: "Sahih al-Bukhari 6464" } : null,
  });
  return (
    <LessonPlayer
      lesson={rendered}
      citations={citations}
      glossary={glossary}
      preview
      exitHref="/preview"
      celebration={celebration}
    />
  );
}
