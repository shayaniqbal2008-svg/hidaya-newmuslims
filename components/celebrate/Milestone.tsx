"use client";
// Milestone (Research §3B.3) and badge (§3B.4) screens. The milestone star is built point by point
// from the same eight-pointed khatam as the path tiles; slow rays and a little confetti on 7/30/90/365.
import { useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { BookOpen, Eraser, Flame as FlameIcon, Footprints, Layers, Moon, Route, Star, Type, Undo2, type LucideIcon } from "lucide-react";
import type { Badge } from "@/lib/badges";
import type { Celebration } from "@/lib/celebration";
import { chime, haptic } from "./fx";
import { enter, useMode } from "./mode";

const WORDS: Record<number, string> = {
  3: "Three days in a row",
  7: "Seven days in a row",
  14: "Two weeks in a row",
  30: "Thirty days in a row",
  50: "Fifty days in a row",
  90: "Ninety days in a row",
  100: "A hundred days in a row",
  180: "Half a year in a row",
  365: "A whole year, every day",
};
const LINES: Record<number, string> = {
  3: "Three days is where a habit starts.",
  7: "A week of showing up.",
  14: "Two weeks. This is becoming part of your day.",
  30: "A month of showing up.",
  50: "Fifty days of small, steady steps.",
  90: "Ninety days. Long enough for a habit to stick.",
  100: "A hundred days. Keep going.",
  180: "Six months of a little every day.",
  365: "A year of a little every day.",
};

function point(k: number, R = 84, c = 100) {
  const r = R * 0.7654;
  const at = (deg: number, rad: number) => {
    const a = (deg * Math.PI) / 180;
    return [c + rad * Math.cos(a), c + rad * Math.sin(a)].map((v) => v.toFixed(2)).join(",");
  };
  const tip = k * 45 - 90;
  return { left: `${c},${c} ${at(tip - 22.5, r)} ${at(tip, R)}`, right: `${c},${c} ${at(tip, R)} ${at(tip + 22.5, r)}` };
}

function UnfoldingStar({ days, big }: { days: number; big: boolean }) {
  const mode = useMode();
  const full = mode === "full";
  return (
    <div className="relative h-[240px] w-[240px]">
      {big && (
        <motion.svg viewBox="0 0 200 200" className="absolute inset-0" aria-hidden {...enter(mode, { scale: 0.5 }, 0.5, { duration: 0.8 })}>
          <g className={full ? "animate-[spin_60s_linear_infinite]" : ""} style={{ transformOrigin: "100px 100px" }}>
            {Array.from({ length: 16 }, (_, k) => (
              <polygon key={k} points="100,100 96,0 104,0" fill="var(--dawn)" opacity={k % 2 ? 0.12 : 0.22} transform={`rotate(${k * 22.5} 100 100)`} />
            ))}
          </g>
        </motion.svg>
      )}
      <svg viewBox="0 0 200 200" className="absolute inset-0 overflow-visible" aria-hidden>
        <g transform="translate(0 6)">
          <polygon points={pointsAll()} fill="var(--dawn-deep)" />
        </g>
        {Array.from({ length: 8 }, (_, k) => {
          const p = point(k);
          return (
            <motion.g
              key={k}
              style={{ transformOrigin: "100px 100px" }}
              {...(full
                ? { initial: { scale: 0, rotate: -25, opacity: 0 }, animate: { scale: 1, rotate: 0, opacity: 1 }, transition: { delay: 0.15 + k * 0.06, type: "spring", bounce: 0.45, duration: 0.6 } }
                : enter(mode, { scale: 0.9 }, 0.1))}
            >
              <polygon points={p.left} fill="var(--dawn)" stroke="var(--dawn)" strokeWidth="1" strokeLinejoin="round" />
              <polygon points={p.right} fill="#f7c35a" stroke="#f7c35a" strokeWidth="1" strokeLinejoin="round" />
            </motion.g>
          );
        })}
        <motion.polygon
          points={pointsAll(56)}
          fill="none"
          stroke="#fff"
          strokeOpacity="0.4"
          strokeWidth="2.5"
          strokeLinejoin="round"
          {...enter(mode, { scale: 0.6 }, 0.75)}
          style={{ transformOrigin: "100px 100px" }}
        />
      </svg>
      <motion.span
        className="absolute inset-0 flex items-center justify-center font-display text-[3.4rem] leading-none text-white tabular-nums [text-shadow:0_2px_0_rgba(140,80,0,0.45)]"
        {...enter(mode, { scale: 0.4 }, 0.8, { type: "spring", bounce: 0.6 })}
      >
        {days}
      </motion.span>
    </div>
  );
}

function pointsAll(R = 84, c = 100) {
  const r = R * 0.7654;
  return Array.from({ length: 16 }, (_, k) => {
    const a = ((k * 22.5 - 90) * Math.PI) / 180;
    const rad = k % 2 === 0 ? R : r;
    return `${(c + rad * Math.cos(a)).toFixed(2)},${(c + rad * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

export function MilestoneScreen({ m, sounds }: { m: NonNullable<Celebration["milestone"]>; sounds: boolean }) {
  const mode = useMode();
  useEffect(() => {
    if (mode === "instant") return;
    const t = setTimeout(() => {
      haptic([20, 50, 20, 50, 40]);
      if (sounds) chime(true);
      if (mode === "full" && m.big && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const colors = ["#f0a92e", "#f7c35a", "#ffe08a", "#c9851a"];
        confetti({ particleCount: 70, spread: 80, startVelocity: 32, origin: { y: 0.35 }, colors, scalar: 0.9, disableForReducedMotion: true });
      }
    }, 750);
    return () => clearTimeout(t);
  }, [mode, sounds, m.big]);
  return (
    <div className="flex flex-col items-center pt-4 text-center">
      <UnfoldingStar days={m.days} big={m.big} />
      <motion.h1 className="mt-6 font-display text-[2rem] leading-tight text-dawn-deep" {...enter(mode, { y: 10 }, 1.1)}>
        {WORDS[m.days] ?? `${m.days} days in a row`}
      </motion.h1>
      <motion.p className="mt-2 text-lg text-muted" {...enter(mode, { y: 6 }, 1.3)}>
        {LINES[m.days]}
      </motion.p>
      {m.hadith && (
        <motion.figure className="mt-7 w-full rounded-3xl bg-cobalt-soft px-5 py-4 text-left" {...enter(mode, { y: 10 }, 1.7)}>
          <blockquote className="font-display text-lg leading-snug">&ldquo;{m.hadith.text}&rdquo;</blockquote>
          <figcaption className="mt-2 text-sm font-extrabold text-cobalt">The Prophet ﷺ, {m.hadith.source}</figcaption>
        </motion.figure>
      )}
    </div>
  );
}

const ICONS: Record<Badge["icon"], LucideIcon> = {
  step: Footprints,
  star: Star,
  flame: FlameIcon,
  unit: Layers,
  path: Route,
  return: Undo2,
  slate: Eraser,
  letters: Type,
  book: BookOpen,
  moon: Moon,
};

/** A badge as a medallion: an eight-pointed star with the badge's icon. Greyed when not earned. */
export function BadgeMedal({ badge, size = 64, earned = true }: { badge: Badge; size?: number; earned?: boolean }) {
  const Icon = ICONS[badge.icon];
  const face = earned ? (badge.kind === "streak" ? "var(--dawn)" : "var(--tile)") : "var(--locked)";
  const edge = earned ? (badge.kind === "streak" ? "var(--dawn-deep)" : "var(--tile-deep)") : "var(--locked-deep)";
  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 overflow-visible" aria-hidden>
        <polygon points={pointsAll(46, 50).split(" ").map((p) => p.split(",").map(Number)).map(([x, y]) => `${x},${y + 4}`).join(" ")} fill={edge} />
        <polygon points={pointsAll(46, 50)} fill={face} />
      </svg>
      <Icon className={`relative ${earned ? "text-white" : "text-muted"}`} style={{ width: size * 0.38, height: size * 0.38 }} strokeWidth={2.6} aria-hidden />
    </span>
  );
}

export function BadgeScreen({ badge }: { badge: Badge }) {
  const mode = useMode();
  useEffect(() => {
    if (mode !== "instant") {
      const t = setTimeout(() => haptic(12), 450);
      return () => clearTimeout(t);
    }
  }, [mode]);
  return (
    <div className="flex flex-col items-center pt-10 text-center">
      <motion.div
        className="w-full rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface px-6 pt-8 pb-7"
        {...enter(mode, { y: 120 }, 0.05, { type: "spring", stiffness: 260, damping: 24 })}
      >
        <motion.div
          className="flex justify-center"
          {...(mode === "full"
            ? { initial: { scale: 1.3, rotate: -12, opacity: 0 }, animate: { scale: 1, rotate: 0, opacity: 1 }, transition: { delay: 0.4, type: "spring", stiffness: 500, damping: 14 } }
            : enter(mode, { scale: 0.9 }, 0.2))}
        >
          <BadgeMedal badge={badge} size={112} />
        </motion.div>
        <p className="mt-5 text-sm font-extrabold text-tile-deep">New milestone</p>
        <h1 className="mt-1 font-display text-[1.9rem] leading-tight">{badge.name}</h1>
        <p className="mt-2 text-lg text-muted">{badge.line}</p>
      </motion.div>
      <motion.p className="mt-4 text-sm text-muted" {...enter(mode, { y: 0 }, 0.9)}>
        All your milestones are on the Me tab. Only you can see them.
      </motion.p>
    </div>
  );
}
