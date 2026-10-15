// The streak and milestones on the Me page (Gamification Research §3E–F): current and longest streak,
// the last 7 days as a ring, a month calendar, and the milestones grid. Private: only the convert sees it.
import Link from "next/link";
import type { Badge } from "@/lib/badges";
import type { MonthCell } from "@/lib/streak";
import { Crescent } from "./Streak";
import { BadgeMedal } from "./Milestone";

function WeekRing({ done }: { done: number }) {
  const C = 2 * Math.PI * 26;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden className="-rotate-90">
      <circle cx="32" cy="32" r="26" fill="none" stroke="var(--line)" strokeWidth="8" />
      {done > 0 && (
        <circle cx="32" cy="32" r="26" fill="none" stroke="var(--dawn)" strokeWidth="8" strokeLinecap="round" strokeDasharray={`${(C * done) / 7} ${C}`} />
      )}
    </svg>
  );
}

const CELL: Record<MonthCell["state"], string> = {
  done: "bg-dawn text-[#3a2604]",
  repair: "border-2 border-dawn bg-dawn-soft text-dawn-deep",
  rest: "bg-cobalt-soft text-cobalt",
  pause: "bg-line text-muted",
  none: "text-muted",
};

export function StreakCard({
  streak,
  longest,
  restDays,
  weekDone,
  month,
  prev,
  next,
  paused,
  pausedUntil,
  pauseAction,
  canPause,
}: {
  streak: number;
  longest: number;
  restDays: number;
  weekDone: number;
  month: { title: string; cells: MonthCell[] };
  prev: string | null;
  next: string | null;
  paused: boolean;
  pausedUntil: string | null;
  pauseAction: (form: FormData) => Promise<void>;
  canPause: boolean;
}) {
  return (
    <section id="streak" className="mt-6 scroll-mt-6 rounded-3xl border-2 border-line border-b-4 border-b-line-deep bg-surface p-5">
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0">
            <WeekRing done={weekDone} />
          </span>
          <span className="font-display text-xl">{weekDone}</span>
        </div>
        <div className="flex-1">
          <p className="font-display text-xl leading-tight">{weekDone} of the last 7 days</p>
          <p className="text-sm text-muted">
            {streak > 0 ? `${streak}-day streak` : "No streak right now"} · longest {longest}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">
        <Crescent size={14} className="mr-1 inline-block -translate-y-px text-cobalt" />
        {restDays === 0
          ? "No rest days saved. You earn one every 7 days in a row."
          : `${restDays} rest day${restDays === 1 ? "" : "s"} saved. A missed day uses one automatically.`}
      </p>

      <div className="mt-5 flex items-center justify-between">
        {prev ? (
          <Link href={`/settings?m=${prev}#streak`} aria-label="Previous month" className="rounded-full px-3 py-1 font-black text-cobalt">
            ‹
          </Link>
        ) : (
          <span className="px-3" />
        )}
        <h3 className="font-display text-lg">{month.title}</h3>
        {next ? (
          <Link href={`/settings?m=${next}#streak`} aria-label="Next month" className="rounded-full px-3 py-1 font-black text-cobalt">
            ›
          </Link>
        ) : (
          <span className="px-3" />
        )}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1.5 text-center text-xs font-extrabold text-muted">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, k) => (
          <span key={k}>{d}</span>
        ))}
        {month.cells.map((c, k) =>
          c.date ? (
            <span
              key={k}
              title={`${c.date}: ${c.state === "none" ? "" : c.state}`}
              className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[0.8rem] ${c.future ? "text-muted/50" : CELL[c.state]} ${c.today ? "ring-2 ring-tile ring-offset-2 ring-offset-surface" : ""}`}
            >
              {c.state === "rest" ? <Crescent size={15} /> : c.n}
            </span>
          ) : (
            <span key={k} />
          ),
        )}
      </div>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-dawn" /> Lesson or review
        </span>
        <span className="flex items-center gap-1">
          <Crescent size={12} className="text-cobalt" /> Rest day
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full bg-line" /> Paused
        </span>
        <span className="flex items-center gap-1">
          <span className="h-3 w-3 rounded-full border-2 border-dawn" /> Made up
        </span>
      </p>

      {canPause && (
        <form action={pauseAction} className="mt-5 border-t-2 border-line pt-4">
          {paused ? (
            <div className="flex items-center gap-3">
              <p className="flex-1 text-[0.95rem]">Paused until {pausedUntil}. Your streak is safe and reminders are off.</p>
              <input type="hidden" name="days" value="0" />
              <button className="rounded-xl border-2 border-line border-b-4 px-4 py-2 font-extrabold text-cobalt">Resume</button>
            </div>
          ) : (
            <>
              <p className="font-bold">Need a break?</p>
              <p className="text-sm text-muted">Travel, illness, a hard season: pause and your streak waits for you. Reminders stop too.</p>
              <div className="mt-3 flex gap-3">
                <select name="days" defaultValue="7" aria-label="How long" className="flex-1 rounded-xl border-2 border-line bg-bg px-3 py-2">
                  {[1, 3, 7, 14, 30].map((n) => (
                    <option key={n} value={n}>
                      {n === 1 ? "Today only" : `${n} days`}
                    </option>
                  ))}
                </select>
                <button className="rounded-xl border-2 border-line border-b-4 px-4 py-2 font-extrabold text-cobalt">Pause streak</button>
              </div>
            </>
          )}
        </form>
      )}
    </section>
  );
}

const fmt = (d: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${d}T12:00:00Z`));

export function MilestonesGrid({ badges }: { badges: Badge[] }) {
  const earned = badges.filter((b) => b.earnedOn).length;
  return (
    <section className="mt-8">
      <div className="flex items-baseline justify-between">
        <h2 className="font-display text-2xl">Milestones</h2>
        <p className="text-sm font-extrabold text-muted">
          {earned} of {badges.length}
        </p>
      </div>
      <p className="text-sm text-muted">Only you can see these.</p>
      <ul className="mt-4 grid grid-cols-3 gap-x-2 gap-y-5">
        {badges.map((b) => (
          <li key={b.id} className={`flex flex-col items-center text-center ${b.earnedOn ? "" : "opacity-60"}`}>
            <BadgeMedal badge={b} size={58} earned={!!b.earnedOn} />
            <p className="mt-2 text-[0.8rem] leading-tight font-extrabold">{b.name}</p>
            <p className="text-[0.7rem] leading-tight text-muted">{b.earnedOn ? fmt(b.earnedOn) : b.kind === "streak" ? "Keep going" : "Not yet"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
