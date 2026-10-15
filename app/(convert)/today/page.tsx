// Learn: the home screen. A streak/XP bar, anything seasonal, then the path of all 90 days.
// The schedule (lib/schedule.ts) decides what's open; the path shows it.
import Link from "next/link";
import { getIndex } from "@/lib/content/load";
import { getMe, getProgress } from "@/lib/dal";
import { pathStarted } from "@/lib/access";
import { streakNotice } from "@/lib/streak";
import { getStreak, streakSettings, xpOf } from "@/lib/streak-store";
import { HeaderStats } from "@/components/celebrate/HeaderStats";
import { Crescent } from "@/components/celebrate/Streak";
import { Flame, Pause } from "lucide-react";
import { InstallHint } from "@/components/InstallHint";
import { PathView, type PathUnit } from "@/components/PathView";
import { StarTile } from "@/components/art/StarTile";

export default async function LearnPage({ searchParams }: PageProps<"/today">) {
  const me = await getMe();
  const p = await getProgress(me);
  const index = getIndex();
  const { schedule } = p;
  const welcome = (await searchParams).welcome === "1";
  const st = await getStreak(me, p);
  const showStreak = streakSettings(me).show_streak;
  const notice = showStreak ? streakNotice(st.settled) : null;
  const main = schedule.main ? index.lessons.find((l) => l.id === schedule.main) : null;
  const special = main && !main.day ? main : null; // welcome-back or a seasonal module leads today

  const units: PathUnit[] = index.units.map((u) => ({
    ...u,
    nodes: index.lessons
      .filter((l) => l.day && l.day >= u.firstDay && l.day <= u.lastDay)
      .map((l) => {
        const done = !!p.completed[l.id];
        return {
          id: l.id,
          day: l.day!,
          title: l.title,
          hook: l.hook,
          minutes: l.minutes,
          state: done ? "done" : l.day === schedule.nextDay ? "current" : "open",
          resume: p.inProgress[l.id] !== undefined,
          tomorrow: false,
        } as const;
      }),
  }));

  return (
    <main className="mx-auto w-full max-w-lg px-4 pb-8">
      <header className="sticky top-0 z-20 -mx-4 flex items-center justify-between border-b-2 border-line bg-bg px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
        <p className="font-display text-lg">
          {welcome ? "Welcome" : me.settings.discreet_mode ? "Hi" : "Assalamu alaykum"}, {me.convert.first_name}
        </p>
        <HeaderStats key={xpOf(p, st)} streak={st.settled.streak} doneToday={st.settled.doneToday} xp={xpOf(p, st)} showStreak={showStreak} />
      </header>

      {notice && (
        <Link href="/settings#streak" className="mt-4 flex items-center gap-3 rounded-2xl border-2 border-dawn/50 bg-dawn-soft px-4 py-3 text-[0.95rem]">
          <span aria-hidden className="text-dawn-deep">
            {st.settled.paused ? <Pause className="h-6 w-6" /> : st.settled.yesterday === "rest" && !st.settled.repair ? <Crescent size={24} className="text-cobalt" /> : <Flame className="h-6 w-6" />}
          </span>
          <span className="flex-1">{notice}</span>
        </Link>
      )}

      {p.isDemo && (
        <div className="mt-4 rounded-2xl border-2 border-dashed border-cobalt/40 bg-cobalt-soft px-4 py-3 text-[0.95rem]">
          <strong className="text-cobalt">Demo:</strong> no invite link needed. Tap any tile to open it; the seasonal lessons are at the
          bottom.
        </div>
      )}

      {schedule.finished && (
        <div className="mt-5 rounded-3xl border-2 border-dawn border-b-[6px] bg-dawn-soft p-6 text-center">
          <StarTile state="done" size={88} />
          <h1 className="mt-3 font-display text-2xl">90 days. You did it.</h1>
          <p className="mt-2 text-muted">Every lesson stays open below, and your guide is still here. Keep up the steps you chose on Day 89.</p>
        </div>
      )}

      {[...(special ? [special.id] : []), ...schedule.sideCards].map((id) => {
        const m = index.lessons.find((l) => l.id === id);
        if (!m) return null;
        return (
          <Link key={id} href={`/lesson/${id}`} className="mt-5 flex items-center gap-4 rounded-3xl border-2 border-dawn border-b-[6px] bg-surface p-4">
            <StarTile state="current" size={60} />
            <span className="flex-1">
              <span className="block text-sm font-extrabold text-dawn-deep">{id.startsWith("welcome-back") ? "Welcome back" : "For this time of year"}</span>
              <span className="block font-display text-lg leading-snug">{m.title}</span>
            </span>
          </Link>
        );
      })}

      {!p.isDemo && !schedule.finished && (
        <p className="mt-5 rounded-2xl bg-cobalt-soft px-4 py-3 text-[0.95rem]">
          {!pathStarted(p.completed) && (
            <>
              <strong>Prayer starts right away</strong>, so Day 2 (wudu) and Day 3 (your first prayer) are ready when you are.{" "}
            </>
          )}
          Want more? Every day is open. Go at the pace that feels right.
        </p>
      )}

      <PathView units={units} />

      {p.isDemo && (
        <section className="mt-8">
          <h2 className="font-display text-xl">Seasonal and welcome-back lessons</h2>
          <p className="text-sm text-muted">These appear on their own at the right time of year, or when someone comes back after a break.</p>
          <div className="mt-3 grid grid-cols-1 gap-2">
            {index.lessons
              .filter((l) => l.kind === "module")
              .map((l) => (
                <Link key={l.id} href={`/lesson/${l.id}`} className="opt flex items-center gap-3">
                  <StarTile state={p.completed[l.id] ? "done" : "open"} size={40} />
                  <span className="font-bold">{l.title}</span>
                </Link>
              ))}
          </div>
        </section>
      )}
      <InstallHint />
    </main>
  );
}
