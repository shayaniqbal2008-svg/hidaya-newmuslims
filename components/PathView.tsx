"use client";
// The Learn tab, Duolingo-style: a winding path of star tiles, one per day, grouped under unit banners.
// Tap a tile for its card (title, hook, Start). The current day bounces and scrolls into view.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { StarTile } from "./art/StarTile";

export type PathNode = {
  id: string;
  day: number;
  title: string;
  hook: string;
  minutes: number;
  state: "done" | "current" | "open" | "locked";
  resume: boolean;
  /** The next day after today's work is done: shown locked with "opens tomorrow". */
  tomorrow: boolean;
};
export type PathUnit = { n: number; title: string; firstDay: number; lastDay: number; nodes: PathNode[] };

// The zigzag: offsets in px from the centre line, repeating every 8 tiles.
const WAVE = [0, 46, 72, 46, 0, -46, -72, -46];
const UNIT_TONE = ["var(--cobalt)", "var(--tile)", "var(--dawn-deep)"];

export function PathView({ units }: { units: PathUnit[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const current = useRef<HTMLDivElement>(null);
  useEffect(() => {
    current.current?.scrollIntoView({ block: "center" });
  }, []);
  return (
    <div className="pb-6" onClick={() => setOpen(null)}>
      {units.map((u, ui) => {
        const tone = UNIT_TONE[ui % UNIT_TONE.length];
        const unlocked = u.nodes.some((n) => n.state !== "locked");
        return (
          <section key={u.n} className="mt-6 first:mt-2">
            <div
              className="sticky top-[4.25rem] z-10 rounded-2xl border-b-4 px-5 py-3.5 text-white"
              style={{ background: unlocked ? tone : "var(--locked-deep)", borderBottomColor: "rgba(0,0,0,0.18)" }}
            >
              <p className="text-sm font-extrabold opacity-85">
                Unit {u.n} · Days {u.firstDay}–{u.lastDay}
              </p>
              <h2 className="font-display text-xl leading-tight">{u.title}</h2>
            </div>
            <ol className="relative mt-12 flex flex-col items-center gap-9">
              {u.nodes.map((n) => {
                const x = WAVE[(n.day - 1) % WAVE.length];
                const isOpen = open === n.id;
                const canStart = n.state !== "locked";
                return (
                  <li
                    key={n.id}
                    className={`relative ${n.state === "current" ? "mt-7" : ""} ${isOpen ? "z-30" : ""}`}
                    style={{ transform: `translateX(${x}px)` }}
                  >
                    <div ref={n.state === "current" ? current : undefined} className="relative flex flex-col items-center">
                      {n.state === "current" && !isOpen && (
                        <motion.span
                          className="animate-bob absolute -top-12 z-10 rounded-xl border-2 border-line bg-surface px-3 py-1.5 text-sm font-black whitespace-nowrap text-tile"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          {n.resume ? "PICK UP" : "START"}
                          <span className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-line bg-surface" />
                        </motion.span>
                      )}
                      <button
                        type="button"
                        aria-label={`Day ${n.day}: ${n.title}${n.state === "locked" ? " (locked)" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpen(isOpen ? null : n.id);
                        }}
                        className="relative transition-transform active:translate-y-1"
                      >
                        <StarTile state={n.state} size={n.state === "current" ? 84 : 74} />
                      </button>
                      <span
                        className={`mt-1 text-xs font-extrabold whitespace-nowrap ${n.state === "locked" ? "text-muted/60" : "text-muted"}`}
                      >
                        Day {n.day}
                        {n.tomorrow ? " · tomorrow" : ""}
                      </span>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <div
                          className="absolute top-full left-1/2 z-20 mt-2 w-72"
                          style={{ transform: `translateX(calc(-50% - ${x}px))` }}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="rounded-2xl p-4 text-white shadow-xl"
                            style={{
                              background: canStart
                                ? n.state === "done"
                                  ? "var(--dawn-deep)"
                                  : "var(--tile)"
                                : "var(--locked-deep)",
                            }}
                          >
                            <p className="font-display text-lg leading-snug">{n.title}</p>
                            <p className="mt-1 text-sm opacity-90">
                              {canStart
                                ? n.hook
                                : n.tomorrow
                                  ? "Opens tomorrow. A little every day is how it sticks."
                                  : "Finish the days before this to open it."}
                            </p>
                            {canStart && (
                              <Link
                                href={`/lesson/${n.id}`}
                                className="mt-3 block rounded-xl border-b-4 border-black/15 bg-surface py-2.5 text-center font-black"
                                style={{ color: n.state === "done" ? "var(--dawn-deep)" : "var(--tile-deep)" }}
                              >
                                {n.state === "done" ? "Review" : n.resume ? "Pick up where you left off" : `Start · +10 XP`}
                              </Link>
                            )}
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
