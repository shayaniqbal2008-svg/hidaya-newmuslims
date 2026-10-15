// Preview the Learn path without signing in: /preview/path?done=2 (days finished so far).
// Development only, like the lesson previews.
import { notFound } from "next/navigation";
import { getIndex } from "@/lib/content/load";
import { PathView, type PathUnit } from "@/components/PathView";

export const dynamic = "force-dynamic";

export default async function PathPreview({ searchParams }: PageProps<"/preview/path">) {
  if (process.env.NODE_ENV === "production" && process.env.PREVIEW_ENABLED !== "1") notFound();
  const done = Math.max(0, Math.min(90, Number((await searchParams).done ?? 0) || 0));
  const unlocked = Math.max(3, done + 1);
  const index = getIndex();
  const units: PathUnit[] = index.units.map((u) => ({
    ...u,
    nodes: index.lessons
      .filter((l) => l.day && l.day >= u.firstDay && l.day <= u.lastDay)
      .map((l) => ({
        id: l.id,
        day: l.day!,
        title: l.title,
        hook: l.hook,
        minutes: l.minutes,
        state: l.day! <= done ? "done" : l.day === done + 1 ? "current" : l.day! <= unlocked ? "open" : "locked",
        resume: false,
        tomorrow: l.day === unlocked + 1,
      })),
  }));
  return (
    <main className="mx-auto w-full max-w-lg px-4 pb-8">
      <p className="sticky top-0 z-20 -mx-4 border-b-2 border-line bg-bg px-4 py-3 font-display text-lg">Preview: {done} days done</p>
      <PathView units={units} />
    </main>
  );
}
