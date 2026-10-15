"use client";
// The flame and XP in the Today header. Coming back from a lesson that counted, the flame ignites once
// and XP counts up from the old total (a one-shot hand-off in sessionStorage, components/celebrate/fx).
import { useEffect, useState } from "react";
import { animate, motion, useReducedMotion } from "motion/react";
import { Flame, Zap } from "lucide-react";
import { takeIgnite } from "./fx";

export function HeaderStats({ streak, doneToday, xp, showStreak }: { streak: number; doneToday: boolean; xp: number; showStreak: boolean }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(xp);
  const [igniting, setIgniting] = useState(false);
  useEffect(() => {
    const ig = takeIgnite();
    if (!ig || ig.xpTo !== xp || reduced) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIgniting(ig.lit && doneToday);
    const c = animate(ig.xpFrom, ig.xpTo, { duration: 0.9, delay: 0.35, ease: "easeOut", onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [xp, doneToday, reduced]);
  if (!showStreak) return null;
  return (
    <div className="flex items-center gap-4 font-black">
      <span className={`flex items-center gap-1 ${doneToday ? "text-dawn-deep" : "text-muted"}`} aria-label={`${streak} day streak${doneToday ? ", today done" : ""}`}>
        <motion.span
          className="inline-flex"
          initial={igniting ? { scale: 0.6 } : false}
          animate={igniting ? { scale: [0.6, 1.35, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Flame className="h-6 w-6" fill={doneToday ? "var(--dawn)" : "none"} strokeWidth={2.4} aria-hidden style={{ transition: igniting ? "fill 0.4s" : undefined }} />
        </motion.span>
        {streak}
      </span>
      <span className="flex items-center gap-1 text-cobalt tabular-nums" aria-label={`${xp} XP`}>
        <Zap className="h-6 w-6" fill="var(--cobalt)" strokeWidth={2} aria-hidden />
        {shown}
      </span>
    </div>
  );
}
