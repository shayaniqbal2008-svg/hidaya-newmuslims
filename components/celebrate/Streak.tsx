"use client";
// The streak screen (Gamification Research §3B.2): an ember catches, the flame rises, the count rolls
// from yesterday's number to today's, and today's dot fills. About 1.8 seconds; tap to skip.
import { useEffect } from "react";
import { motion } from "motion/react";
import type { StreakScreenData } from "@/lib/celebration";
import type { DayState } from "@/lib/streak";
import { chime, haptic } from "./fx";
import { enter, useMode, type Mode } from "./mode";

const FLAME_OUTER = "M65 8 C90 40 118 62 112 100 C107 132 84 146 65 146 C40 146 18 128 18 98 C18 72 34 58 44 40 C48 62 58 66 62 66 C56 44 58 24 65 8z";
const FLAME_INNER = "M66 62 C80 82 92 94 88 114 C85 130 76 138 65 138 C52 138 42 128 42 114 C42 100 52 92 58 82 C60 92 64 96 67 96 C64 84 62 72 66 62z";

/** Eight-pointed star outline (the khatam of StarTile), as an SVG points string. */
export function starPoints(cx: number, cy: number, R: number) {
  const r = R * 0.7654;
  return Array.from({ length: 16 }, (_, k) => {
    const a = ((k * 22.5 - 90) * Math.PI) / 180;
    const rad = k % 2 === 0 ? R : r;
    return `${(cx + rad * Math.cos(a)).toFixed(2)},${(cy + rad * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

/** The flame, warmer by tier: saffron (1–6 days), gold with a glow (7–29), gold in a star halo (30+). */
export function Flame({ tier, size = 130, ignite = true }: { tier: 1 | 2 | 3; size?: number; ignite?: boolean }) {
  const mode = useMode();
  const full = mode === "full" && ignite;
  const outer = tier >= 2 ? "#f7b51e" : "var(--dawn)";
  const inner = tier >= 2 ? "#fff1b8" : "#ffd77a";
  return (
    <div className="relative flex items-center justify-center" style={{ width: size * 1.7, height: size * 1.45 }}>
      {tier >= 3 && (
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 m-auto"
          style={{ width: size * 1.6, height: size * 1.6 }}
          aria-hidden
          {...enter(mode, { scale: 0.6, rotate: -30 }, 0.9, { duration: 0.8, ease: "easeOut" })}
        >
          <g className={mode === "instant" || mode === "calm" ? "" : "animate-[spin_40s_linear_infinite]"} style={{ transformOrigin: "100px 100px" }}>
            <polygon points={starPoints(100, 100, 92)} fill="none" stroke="var(--dawn)" strokeOpacity="0.45" strokeWidth="3" strokeLinejoin="round" />
            <polygon points={starPoints(100, 100, 74)} fill="var(--dawn-soft)" stroke="var(--dawn)" strokeOpacity="0.25" strokeWidth="2" strokeLinejoin="round" />
          </g>
        </motion.svg>
      )}
      {tier >= 2 && (
        <motion.span
          aria-hidden
          className="absolute rounded-full"
          style={{ width: size * 0.95, height: size * 0.95, background: "radial-gradient(circle, rgba(255,210,74,0.55), rgba(255,210,74,0) 70%)" }}
          {...enter(mode, { scale: 0.4 }, 0.7, { duration: 0.7 })}
        />
      )}
      {/* The ember: a small saffron coal that pops, then the flame grows out of it. */}
      {full && (
        <motion.span
          aria-hidden
          className="absolute rounded-full bg-dawn"
          style={{ width: 18, height: 18, bottom: size * 0.2 }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [0, 1.4, 1, 1.6], opacity: [1, 1, 1, 0] }}
          transition={{ duration: 0.75, times: [0, 0.35, 0.55, 1] }}
        />
      )}
      <motion.div
        style={{ transformOrigin: "50% 92%" }}
        {...(full
          ? { initial: { scale: 0.3, opacity: 0, y: 12 }, animate: { scale: 1, opacity: 1, y: 0 }, transition: { delay: 0.4, type: "spring", bounce: 0.5, duration: 0.7 } }
          : enter(mode, { scale: 0.9 }))}
      >
        <div className="animate-flicker">
          <svg width={size} height={size * 1.15} viewBox="0 0 130 150" aria-hidden>
            <path d={FLAME_OUTER} fill={outer} />
            <path d={FLAME_INNER} fill={inner} />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

/** The count rolls like an odometer from yesterday's number to today's, then pulses once. */
export function Odometer({ from, to, delay = 0.6 }: { from: number; to: number; delay?: number }) {
  const mode = useMode();
  if (mode !== "full" || from === to)
    return (
      <motion.span className="inline-block" {...enter(mode, { y: 8 }, delay)}>
        {to}
      </motion.span>
    );
  return (
    <motion.span
      className="relative inline-flex h-[1em] overflow-hidden align-top"
      animate={{ scale: [1, 1, 1.15, 1] }}
      transition={{ delay, duration: 1.0, times: [0, 0.5, 0.75, 1] }}
    >
      <span className="invisible">{Math.max(from, to)}</span>
      <motion.span className="absolute inset-x-0 text-center" initial={{ y: "0%" }} animate={{ y: "-110%" }} transition={{ delay, duration: 0.5, ease: [0.6, 0, 0.3, 1] }}>
        {from}
      </motion.span>
      <motion.span className="absolute inset-x-0 text-center" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ delay, duration: 0.5, ease: [0.6, 0, 0.3, 1] }}>
        {to}
      </motion.span>
    </motion.span>
  );
}

/** A crescent: the calendar mark for a rest day. */
export function Crescent({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M15.5 3.5a8.5 8.5 0 1 0 5 15.2A7 7 0 0 1 15.5 3.5z" fill="currentColor" />
    </svg>
  );
}

const DOT_LABEL: Record<DayState, string> = { done: "done", rest: "rest day", pause: "paused", repair: "made up", none: "not done" };

function Dot({ state, isToday, mode, k }: { state: DayState; isToday: boolean; mode: Mode; k: number }) {
  const base = "relative flex h-9 w-9 items-center justify-center rounded-full text-sm font-black";
  if (isToday && state === "done") {
    const C = 2 * Math.PI * 9;
    const sweep = mode === "full";
    return (
      <span className={`${base} bg-line`}>
        {/* Radial sweep: a pie that fills clockwise, then a ring pulse. */}
        <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden>
          <motion.circle
            cx="18"
            cy="18"
            r="9"
            fill="none"
            stroke="var(--dawn)"
            strokeWidth="18"
            strokeDasharray={C}
            initial={{ strokeDashoffset: sweep ? C : 0, opacity: mode === "calm" ? 0 : 1 }}
            animate={{ strokeDashoffset: 0, opacity: 1 }}
            transition={sweep ? { delay: 1.0, duration: 0.45, ease: "easeInOut" } : { delay: 0.6, duration: 0.3 }}
          />
        </svg>
        {mode === "full" && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full border-[3px] border-dawn"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.9], opacity: [0.9, 0] }}
            transition={{ delay: 1.45, duration: 0.6, ease: "easeOut" }}
          />
        )}
        <motion.span className="relative text-[#3a2604]" {...enter(mode, { scale: 0 }, sweep ? 1.4 : 0.6)}>
          ✓
        </motion.span>
      </span>
    );
  }
  const look: Record<DayState, string> = {
    done: "bg-dawn text-[#3a2604]",
    repair: "border-[3px] border-dawn bg-dawn-soft text-dawn-deep",
    rest: "bg-cobalt-soft text-cobalt",
    pause: "bg-line text-muted",
    none: "bg-line text-transparent",
  };
  return (
    <motion.span className={`${base} ${look[state]}`} {...enter(mode, { scale: 0 }, 0.35 + k * 0.06, { type: "spring", bounce: 0.5 })}>
      {state === "rest" ? <Crescent /> : state === "pause" ? "–" : state === "none" ? null : "✓"}
    </motion.span>
  );
}

export function WeekDots({ week, todayIndex = 6 }: { week: { label: string; state: DayState }[]; todayIndex?: number }) {
  const mode = useMode();
  return (
    <ol className="flex justify-between" aria-label="The last 7 days">
      {week.map((d, k) => (
        <li key={k} className="flex flex-col items-center gap-1.5" aria-label={`${d.label}: ${DOT_LABEL[d.state]}`}>
          <span className={`text-xs font-extrabold ${k === todayIndex ? "text-dawn-deep" : "text-muted"}`}>{d.label}</span>
          <Dot state={d.state} isToday={k === todayIndex} mode={mode} k={k} />
        </li>
      ))}
    </ol>
  );
}

function streakLine(s: StreakScreenData) {
  if (s.repaired) return { head: `Streak restored: ${s.days} days`, body: "You came back and picked it up. That's what consistency looks like." };
  if (s.restart) return { head: "Day 1 again", body: "And that's how every streak starts." };
  if (s.days === 1) return { head: "Day one", body: "Small and steady is how this sticks." };
  return { head: `${s.days} days in a row`, body: "Small and steady is how this sticks." };
}

export function StreakScreen({ s, sounds }: { s: StreakScreenData; sounds: boolean }) {
  const mode = useMode();
  useEffect(() => {
    if (mode === "instant") return;
    const t = setTimeout(() => {
      haptic([15, 40, 25]);
      if (sounds) chime();
    }, mode === "full" ? 1450 : 600);
    return () => clearTimeout(t);
  }, [mode, sounds]);
  const line = streakLine(s);
  return (
    <div className="flex flex-col items-center pt-2 text-center">
      <Flame tier={s.tier} />
      <p className="-mt-2 font-display text-[4.5rem] leading-none text-dawn-deep tabular-nums" aria-live="polite">
        <Odometer from={s.from} to={s.days} />
      </p>
      <p className="mt-1 font-display text-2xl text-dawn-deep">day streak</p>
      <div className="mt-7 w-full rounded-3xl border-2 border-line border-b-4 border-b-line-deep bg-surface p-5">
        <WeekDots week={s.week} />
        <motion.div {...enter(mode, { y: 6 }, 1.6, { duration: 0.4 })}>
          <p className="mt-5 font-display text-xl">{line.head}</p>
          <p className="mt-1 text-[0.95rem] text-muted">{line.body}</p>
          {s.restDays > 0 && !s.repairNeeded && (
            <p className="mx-auto mt-4 max-w-[17rem] text-sm text-muted">
              <Crescent size={14} className="mr-1 inline-block -translate-y-px text-cobalt" />
              {s.restDays === 1 ? "1 rest day saved." : `${s.restDays} rest days saved.`} If you miss a day, one is used for you.
            </p>
          )}
        </motion.div>
      </div>
      {s.repairNeeded !== null && s.repairStreak !== null && (
        <motion.p className="mt-4 w-full rounded-2xl bg-dawn-soft px-4 py-3 text-[0.95rem]" {...enter(mode, { y: 8 }, 1.8)}>
          You can pick your {s.repairStreak}-day streak back up: do one more lesson today.
        </motion.p>
      )}
    </div>
  );
}
