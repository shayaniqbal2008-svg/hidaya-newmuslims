"use client";
// The prayer figure: a faceless pictogram seen from the side, facing the qibla (right), that moves
// smoothly between positions. Hand placement follows the masjid's school and the reader's gender
// (Hanafi: men fold below the navel, women on the chest). Women are drawn wearing a headscarf.
import { useEffect, useMemo, useRef, useState } from "react";
import type { Madhab, Pose } from "@/lib/content/types";
import type { Gender } from "@/lib/content/render";

type P = [number, number];
type Frame = { head: P; neck: P; sh: P; el: P; ha: P; hip: P; kn: P; an: P; toe: P };

const STAND: Frame = {
  head: [100, 34], neck: [100, 54], sh: [100, 60], el: [102, 92], ha: [104, 122],
  hip: [100, 118], kn: [101, 158], an: [100, 194], toe: [118, 197],
};
const SIT: Frame = {
  head: [92, 96], neck: [90, 116], sh: [90, 122], el: [98, 152], ha: [122, 176],
  hip: [86, 174], kn: [130, 190], an: [82, 192], toe: [62, 195],
};

function frame(pose: Pose, madhab: Madhab | null, gender: Gender | null): Frame {
  switch (pose) {
    case "stand":
    case "itidal":
      return STAND;
    case "takbir":
      return gender === "female" && madhab === "hanafi"
        ? { ...STAND, el: [118, 84], ha: [120, 60] } // to the shoulders
        : { ...STAND, el: [120, 72], ha: [119, 40] }; // to the ears
    case "qiyam":
      return madhab === "hanafi" && gender !== "female"
        ? { ...STAND, el: [95, 92], ha: [116, 104] } // below the navel
        : { ...STAND, el: [95, 90], ha: [116, 76] }; // on the chest
    case "ruku":
      return {
        head: [160, 110], neck: [142, 112], sh: [138, 114], el: [114, 136], ha: [94, 152],
        hip: [84, 118], kn: [86, 158], an: [86, 194], toe: [104, 197],
      };
    case "sujud":
      return {
        head: [150, 185], neck: [132, 168], sh: [128, 170],
        el: gender === "female" ? [126, 190] : [114, 178],
        ha: [142, 197],
        hip: [74, 148], kn: [104, 192], an: [66, 182], toe: [72, 197],
      };
    case "jalsa":
      return SIT;
    case "tashahhud":
      return { ...SIT, ha: [124, 170] };
    case "salam-right":
      return { ...SIT, head: [88, 96] };
    case "salam-left":
      return { ...SIT, head: [96, 96] };
    case "dua":
      return { ...STAND, el: [113, 98], ha: [124, 80] }; // hands raised in front, palms up
  }
}

const KEYS = Object.keys(STAND) as (keyof Frame)[];
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
function mix(a: Frame, b: Frame, t: number): Frame {
  const out = {} as Frame;
  for (const k of KEYS) out[k] = [a[k][0] + (b[k][0] - a[k][0]) * t, a[k][1] + (b[k][1] - a[k][1]) * t];
  return out;
}

/** Animates between frames whenever the target pose changes. */
function useFrame(target: Frame, ms = 650): Frame {
  const [f, setF] = useState(target);
  const cur = useRef(target);
  useEffect(() => {
    const from = cur.current;
    const dur = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ms;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = dur ? Math.min(1, (now - t0) / dur) : 1;
      const next = mix(from, target, ease(t));
      cur.current = next;
      setF(next);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return f;
}

const line = (...pts: P[]) => "M" + pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" L");

export function PrayerFigure({
  pose,
  madhab = null,
  gender = null,
  className = "",
  label,
}: {
  pose: Pose;
  madhab?: Madhab | null;
  gender?: Gender | null;
  className?: string;
  label?: string;
}) {
  const target = useMemo(() => frame(pose, madhab, gender), [pose, madhab, gender]);
  const f = useFrame(target);
  const woman = gender === "female";
  const garment = woman ? "var(--tile)" : "var(--cobalt)";
  const deep = woman ? "var(--tile-deep)" : "var(--cobalt-deep)";
  const turn = pose === "salam-right" ? 1 : pose === "salam-left" ? -1 : 0;
  // Which way the face points: the neck→head direction turned a quarter clockwise (right when standing).
  const dx = f.head[0] - f.neck[0];
  const dy = f.head[1] - f.neck[1];
  const len = Math.hypot(dx, dy) || 1;
  const face: P = [-dy / len, dx / len];
  const at = (d: number): P => [f.head[0] + face[0] * d, f.head[1] + face[1] * d];

  return (
    <svg viewBox="28 6 192 206" className={className} role="img" aria-label={label ?? `Prayer position: ${pose}`}>
      {/* prayer mat and qibla marker */}
      <rect x="40" y="198" width="150" height="7" rx="3.5" fill="var(--dawn-soft)" stroke="var(--dawn)" strokeWidth="1.5" />
      <path d="M176 198 v-10 a8 8 0 0 1 16 0 v10" fill="none" stroke="var(--dawn)" strokeWidth="1.5" />
      <g transform="translate(200 170)">
        <rect width="14" height="14" rx="1.5" fill="#15171c" stroke="var(--dawn)" strokeWidth="0.8" />
        <rect y="3" width="14" height="2.5" fill="var(--dawn)" />
      </g>
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* legs (a long garment for women) and feet */}
        <path d={line(f.hip, f.kn, f.an)} stroke={garment} strokeWidth={woman ? 21 : 16} />
        <path d={line(f.an, f.toe)} stroke={deep} strokeWidth="7" />
        {/* torso */}
        <path d={line(f.hip, f.neck)} stroke={garment} strokeWidth="24" />
        {/* headscarf drape, behind the head and over the shoulders */}
        {woman && (
          <path
            d={line(f.head, f.neck, [f.neck[0] + (f.hip[0] - f.neck[0]) * 0.25, f.neck[1] + (f.hip[1] - f.neck[1]) * 0.25])}
            stroke="var(--tile-deep)"
            strokeWidth="27"
          />
        )}
        {/* arm, in a darker shade so hand positions read against the body */}
        <path d={line(f.sh, f.el, f.ha)} stroke={deep} strokeWidth="9" />
        {pose === "tashahhud" && <path d={line(f.ha, [f.ha[0] + 4, f.ha[1] - 11])} stroke={deep} strokeWidth="3.5" />}
      </g>
      <circle cx={f.ha[0]} cy={f.ha[1]} r="5.5" fill={deep} />
      {/* head: faceless, with a small nose so you can see which way it faces */}
      {woman ? (
        <g>
          <circle cx={f.head[0]} cy={f.head[1]} r="15" fill="var(--tile-deep)" />
          <circle cx={at(5)[0]} cy={at(5)[1]} r="8.5" fill="var(--cobalt-soft)" />
        </g>
      ) : (
        <g>
          <circle cx={f.head[0]} cy={f.head[1]} r="13" fill="var(--cobalt-deep)" />
          <circle cx={at(12.5)[0]} cy={at(12.5)[1] + 1} r="3.4" fill="var(--cobalt-deep)" />
        </g>
      )}
      {turn !== 0 && (
        <g fill="none" stroke="var(--dawn-deep)" strokeWidth="2.5" strokeLinecap="round">
          <path d={`M${f.head[0] - 16} ${f.head[1] - 22} q16 -12 32 0`} />
          <path
            d={turn > 0 ? `M${f.head[0] + 16} ${f.head[1] - 22} l-6 -3 M${f.head[0] + 16} ${f.head[1] - 22} l-2 -6` : `M${f.head[0] - 16} ${f.head[1] - 22} l6 -3 M${f.head[0] - 16} ${f.head[1] - 22} l2 -6`}
          />
        </g>
      )}
    </svg>
  );
}
