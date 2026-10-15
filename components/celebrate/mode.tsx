"use client";
// How a celebration screen moves:
//  - full: springs, rolls, confetti (default)
//  - calm: fades only, no confetti (the "Calm celebrations" setting, or prefers-reduced-motion)
//  - instant: the end state, no motion (the convert tapped to skip)
import { createContext, useContext } from "react";
import type { TargetAndTransition, Transition } from "motion/react";

export type Mode = "full" | "calm" | "instant";
export const ModeContext = createContext<Mode>("full");
export const useMode = () => useContext(ModeContext);

type Anim = { initial: false | TargetAndTransition; animate: TargetAndTransition; transition?: Transition };

/** An entrance: `from` in full mode, a fade in calm mode, nothing when skipped. */
export function enter(mode: Mode, from: TargetAndTransition, delay = 0, transition: Transition = { type: "spring", bounce: 0.45 }): Anim {
  const to = Object.fromEntries(Object.keys(from).map((k) => [k, k === "opacity" ? 1 : k.startsWith("scale") ? 1 : 0])) as TargetAndTransition;
  if (mode === "instant") return { initial: false, animate: { ...to, opacity: 1 } };
  if (mode === "calm") return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: delay * 0.6, duration: 0.35 } };
  return { initial: { opacity: 0, ...from }, animate: { opacity: 1, ...to }, transition: { delay, ...transition } };
}
