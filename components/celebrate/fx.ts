"use client";
// Small effects for the celebration screens. All of them fail silently: no vibration API on iOS web,
// no AudioContext in some browsers, blocked storage in private windows.

/** Android vibration (iOS web has none, so the visuals carry the moment). */
export function haptic(pattern: number | number[]) {
  try {
    navigator.vibrate?.(pattern);
  } catch {}
}

let ctx: AudioContext | null = null;

/** A soft two-note chime, synthesized (no audio file). Only called when the convert turned sounds on,
 *  never in discreet mode (lib/celebration.ts decides). */
export function chime(high = false) {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    ctx ??= new AC();
    const t0 = ctx.currentTime + 0.02;
    const notes = high ? [659.25, 987.77, 1318.5] : [659.25, 987.77];
    notes.forEach((f, k) => {
      const o = ctx!.createOscillator();
      const g = ctx!.createGain();
      o.type = "sine";
      o.frequency.value = f;
      const t = t0 + k * 0.11;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.08, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      o.connect(g).connect(ctx!.destination);
      o.start(t);
      o.stop(t + 1);
    });
  } catch {}
}

/** One-shot hand-off to the Today header: it ignites the flame and counts XP up once. */
export const IGNITE_KEY = "celebrate:ignite";
export type Ignite = { xpFrom: number; xpTo: number; lit: boolean };

export function setIgnite(v: Ignite) {
  try {
    sessionStorage.setItem(IGNITE_KEY, JSON.stringify(v));
  } catch {}
}

export function takeIgnite(): Ignite | null {
  try {
    const raw = sessionStorage.getItem(IGNITE_KEY);
    sessionStorage.removeItem(IGNITE_KEY);
    return raw ? (JSON.parse(raw) as Ignite) : null;
  } catch {
    return null;
  }
}
