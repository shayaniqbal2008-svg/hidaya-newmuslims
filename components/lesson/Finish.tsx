"use client";
// The end of a lesson: a celebration (confetti, the star tile, XP, accuracy, time). The streak,
// milestone and badge screens that follow live in components/celebrate. Saving the completion
// happens as the celebration opens.
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "motion/react";
import confetti from "canvas-confetti";
import { Markdown } from "../Markdown";
import { StarTile } from "../art/StarTile";
import { enter, useMode } from "../celebrate/mode";
import { haptic } from "../celebrate/fx";

export function CountUp({ to, from = 0, suffix = "", delay = 0 }: { to: number; from?: number; suffix?: string; delay?: number }) {
  const mode = useMode();
  const [v, setV] = useState(mode === "instant" ? to : from);
  useEffect(() => {
    if (mode === "instant") return;
    const c = animate(from, to, { duration: 0.9, delay, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [to, from, delay, mode]);
  return (
    <>
      {v}
      {suffix}
    </>
  );
}

function Stat({ label, color, children, delay }: { label: string; color: string; children: React.ReactNode; delay: number }) {
  const mode = useMode();
  return (
    <motion.div
      {...enter(mode, { y: 20 }, delay, { type: "spring", bounce: 0.4 })}
      className="flex-1 overflow-hidden rounded-2xl border-2"
      style={{ borderColor: color, background: color }}
    >
      <p className="py-1 text-center text-xs font-black text-white">{label}</p>
      <p className="rounded-xl bg-surface py-3 text-center text-xl font-black" style={{ color }}>
        {children}
      </p>
    </motion.div>
  );
}

export function Celebration({
  title,
  closing,
  score,
  startedAt,
  onComplete,
  onSources,
  xpGain = 10,
  alreadyCounted = false,
}: {
  xpGain?: number;
  /** Today already counted toward the streak before this lesson. */
  alreadyCounted?: boolean;
  title: string;
  closing: string | null;
  score: { answered: number; right: number };
  startedAt: number;
  onComplete?: () => Promise<unknown>;
  onSources?: () => void;
}) {
  const mode = useMode();
  const saved = useRef(false);
  const [state, setState] = useState<"saving" | "saved" | "error">(onComplete ? "saving" : "saved");
  const [seconds] = useState(() => Math.round((Date.now() - startedAt) / 1000));
  useEffect(() => {
    if (saved.current) return;
    saved.current = true;
    if (onComplete)
      onComplete()
        .then(() => setState("saved"))
        .catch(() => setState("error"));
    if (mode === "instant") return;
    const t = setTimeout(() => haptic(10), 600);
    if (mode === "full" && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const colors = ["#0f9a86", "#2a46a8", "#f0a92e", "#ffffff"];
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.35 }, colors, disableForReducedMotion: true });
      setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 60, origin: { x: 0, y: 0.6 }, colors }), 250);
      setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 60, origin: { x: 1, y: 0.6 }, colors }), 400);
    }
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);
  const acc = score.answered ? Math.round((score.right / score.answered) * 100) : 100;
  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, "0");
  return (
    <div className="flex flex-col items-center pt-6 text-center">
      <motion.div {...enter(mode, { scale: 0, rotate: -90 }, 0, { type: "spring", bounce: 0.55, duration: 0.9 })}>
        <StarTile state="done" size={132} />
      </motion.div>
      <motion.h1 {...enter(mode, { y: 10 }, 0.25, { duration: 0.3 })} className="mt-6 font-display text-[2.1rem] text-dawn-deep">
        {title}
      </motion.h1>
      {alreadyCounted && (
        <motion.p {...enter(mode, { scale: 0.8 }, 0.4)} className="mt-2 rounded-full bg-tile-soft px-3 py-1 text-sm font-extrabold text-tile-deep">
          Today already counts ✓
        </motion.p>
      )}
      {closing && (
        <motion.div {...enter(mode, {}, 0.45, { duration: 0.3 })}>
          <Markdown text={closing} className="mt-3 text-lg text-muted" />
        </motion.div>
      )}
      <div className="relative mt-8 flex w-full gap-3">
        {/* "+10 XP" lifts off the card toward the XP counter in the header. */}
        {mode === "full" && xpGain > 0 && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute top-0 left-[8%] z-10 rounded-full bg-dawn px-3 py-1 text-sm font-black text-[#3a2604] shadow-[0_3px_0_var(--dawn-deep)]"
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, -30, -150, -260], x: [0, 0, 120, 230], scale: [0.6, 1.1, 1, 0.7] }}
            transition={{ delay: 1.1, duration: 1.0, times: [0, 0.2, 0.6, 1], ease: "easeIn" }}
          >
            +{xpGain} XP
          </motion.span>
        )}
        {xpGain > 0 && (
          <Stat label="XP" color="var(--dawn)" delay={0.6}>
            +<CountUp to={xpGain} />
          </Stat>
        )}
        <Stat label="Accuracy" color="var(--tile)" delay={0.75}>
          <CountUp to={acc} suffix="%" />
        </Stat>
        <Stat label="Time" color="var(--cobalt)" delay={0.9}>
          {mm}:{ss}
        </Stat>
      </div>
      {state === "error" && <p className="mt-4 text-gentle">This didn&apos;t save. Check your connection: your progress will save next time you finish.</p>}
      {onSources && (
        <button type="button" onClick={onSources} className="mt-6 text-sm font-extrabold text-muted underline">
          Sources for this lesson
        </button>
      )}
    </div>
  );
}
