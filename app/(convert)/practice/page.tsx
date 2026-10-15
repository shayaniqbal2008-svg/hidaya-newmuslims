// Practice (Duolingo's practice hub): spaced review of finished lessons, mistakes to retry, the optional
// Arabic alphabet and Seerah tracks, and drills on what the convert has already learned. A full review or
// Mistakes session (5+ questions) counts toward the streak; tracks and drills never do (lib/streak.ts).
import Link from "next/link";
import { BookOpen, Dumbbell, Languages, RotateCcw, ScrollText, Sparkles, Type, type LucideIcon } from "lucide-react";
import { getMe, getProgress, renderContext } from "@/lib/dal";
import { buildMistakeSession } from "@/lib/practice/mistakes-session";
import { drillAvailable, type DrillKind } from "@/lib/practice/drills";
import { trackProgress, trackSubtitle } from "@/lib/practice/tracks";
import { supabaseServer } from "@/lib/supabase/server";

const DRILLS: { kind: DrillKind; title: string; unit: [string, string]; Icon: LucideIcon }[] = [
  { kind: "words", title: "Words", unit: ["word", "words"], Icon: Languages },
  { kind: "phrases", title: "Prayer phrases", unit: ["phrase", "phrases"], Icon: Sparkles },
  { kind: "surahs", title: "Du'as & short surahs", unit: ["surah", "surahs"], Icon: BookOpen },
];

/** Optional tracks under Explore more, in this order. A track with no compiled lessons yet is hidden. */
const TRACK_CARDS: { track: string; title: string; intro: (n: number) => string; Icon: LucideIcon }[] = [
  {
    track: "alphabet",
    title: "Arabic alphabet",
    intro: (n) => `${n} short lessons, from your first letter to reading al-Fatiha's first verses`,
    Icon: Type,
  },
  {
    track: "seerah",
    title: "Seerah",
    intro: (n) => `${n} short episodes on the life of the Prophet ﷺ, from Makkah to Madinah`,
    Icon: ScrollText,
  },
];

export default async function PracticePage() {
  const me = await getMe();
  const p = await getProgress(me);
  const supabase = await supabaseServer();
  const { count } = await supabase
    .from("review_items")
    .select("lesson_id", { count: "exact", head: true })
    .lte("due_at", new Date().toISOString());
  const due = count ?? 0;
  const completed = Object.keys(p.completed);
  const finished = completed.length;
  const { data: open } = await supabase.from("practice_mistakes").select("lesson_id, ref").is("cleared_at", null).order("last_wrong_at");
  const mistakes = buildMistakeSession(open ?? [], renderContext(me), Infinity);
  const toRetry = mistakes.screens.length + mistakes.reviews.length;
  const tracks = TRACK_CARDS.map((c) => ({ ...c, prog: trackProgress(c.track, completed) })).filter((c) => c.prog.total > 0);
  return (
    <main className="mx-auto w-full max-w-lg px-4 pt-[max(1.5rem,env(safe-area-inset-top))] pb-8">
      <h1 className="font-display text-[2rem]">Practice</h1>
      <p className="mt-1 text-muted">Short reviews keep what you learned fresh, and a finished review counts for your streak.</p>
      <div className="mt-6 rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-6 text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-cobalt-soft text-cobalt">
          <Dumbbell className="h-10 w-10" strokeWidth={2.4} aria-hidden />
        </span>
        {due > 0 ? (
          <>
            <p className="mt-4 font-display text-2xl">{due} question{due === 1 ? "" : "s"} to review</p>
            <p className="mt-1 text-muted">From lessons you finished a little while ago.</p>
            <Link href="/practice/session" className="btn btn-primary mt-5">
              Start review
            </Link>
          </>
        ) : finished > 0 ? (
          <>
            <p className="mt-4 font-display text-2xl">Nothing due right now</p>
            <p className="mt-1 text-muted">Reviews come back a day or so after each lesson. Want a quick practice anyway?</p>
            <Link href="/practice/session?any=1" className="btn btn-cobalt mt-5">
              Practice past lessons
            </Link>
          </>
        ) : (
          <>
            <p className="mt-4 font-display text-2xl">Finish a lesson first</p>
            <p className="mt-1 text-muted">Its questions come back here to practice.</p>
            <Link href="/today" className="btn btn-primary mt-5">
              Go to today&apos;s lesson
            </Link>
          </>
        )}
      </div>

      {toRetry > 0 && (
        <Link
          href="/practice/session?mode=mistakes"
          className="mt-4 flex items-center gap-4 rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-4"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-dawn-soft text-dawn-deep">
            <RotateCcw className="h-7 w-7" strokeWidth={2.4} aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block font-display text-xl">Mistakes</span>
            <span className="block text-muted">
              {toRetry} to retry. Each one goes once you get it right twice.
            </span>
          </span>
        </Link>
      )}

      <h2 className="mt-8 font-display text-2xl">Explore more</h2>
      <p className="text-muted">Optional, no pressure.</p>
      <div className="mt-3 space-y-3">
        {tracks.map(({ track, title, intro, Icon, prog }) => (
          <Link
            key={track}
            href={`/lesson/${prog.next ?? `${track}-01`}`}
            className="flex items-center gap-4 rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-4"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-tile-soft text-tile-deep">
              <Icon className="h-7 w-7" strokeWidth={2.4} aria-hidden />
            </span>
            <span className="flex-1">
              <span className="block font-display text-xl">{title}</span>
              <span className="block text-muted">{trackSubtitle(prog, intro)}</span>
            </span>
          </Link>
        ))}
        {DRILLS.map(({ kind, title, unit, Icon }) => {
          const a = drillAvailable(kind, completed);
          const body = (
            <>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cobalt-soft text-cobalt">
                <Icon className="h-7 w-7" strokeWidth={2.4} aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block font-display text-xl">{title}</span>
                <span className="block text-muted">{a.unlockHint ?? `${a.count} ${unit[a.count === 1 ? 0 : 1]} learned`}</span>
              </span>
            </>
          );
          return a.count ? (
            <Link
              key={kind}
              href={`/practice/drill/${kind}`}
              className="flex items-center gap-4 rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-4"
            >
              {body}
            </Link>
          ) : (
            <div key={kind} className="flex items-center gap-4 rounded-3xl border-2 border-dashed border-line bg-surface p-4 opacity-70">
              {body}
            </div>
          );
        })}
      </div>
    </main>
  );
}
