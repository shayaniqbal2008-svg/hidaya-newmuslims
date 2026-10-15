"use client";
// Brilliant-style widgets: something to move and see what changes, instead of reading about it.
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { RenderedScreen } from "@/lib/content/render";
import { Markdown } from "../Markdown";
import type { ScreenProps } from "./screens";
import { Letters } from "./letters";
import { FastDay, ImanGraph, MasjidMap, Moon, Rows, Tasbih, Timeline, Zakat } from "./widgets2";

type W = Extract<RenderedScreen, { type: "widget" }>;

export function WidgetScreen(props: ScreenProps<"widget">) {
  const { screen } = props;
  return (
    <div>
      {screen.prompt && <Markdown text={screen.prompt} className="mb-1 font-display text-[1.6rem] leading-tight" glossary={false} />}
      {screen.text && <Markdown text={screen.text} className="mb-4 text-[0.95rem] text-muted" />}
      {screen.widget === "prayer-times" && <PrayerTimes ready={props.ready} />}
      {screen.widget === "qibla" && <Qibla ready={props.ready} />}
      {screen.widget === "rakahs" && <Rakahs setCheck={props.setCheck} />}
      {screen.widget === "fast-day" && <FastDay ready={props.ready} />}
      {screen.widget === "moon" && <Moon ready={props.ready} />}
      {screen.widget === "tasbih" && <Tasbih ready={props.ready} phrases={screen.phrases ?? []} />}
      {screen.widget === "timeline" && <Timeline ready={props.ready} events={screen.events ?? []} />}
      {screen.widget === "masjid-map" && <MasjidMap ready={props.ready} areas={screen.areas ?? {}} />}
      {screen.widget === "rows" && <Rows setCheck={props.setCheck} />}
      {screen.widget === "zakat" && <Zakat ready={props.ready} nisab={screen.nisab ?? 0} />}
      {screen.widget === "iman-graph" && <ImanGraph ready={props.ready} points={screen.points ?? []} />}
      {screen.widget === "letter" && <Letters ready={props.ready} letters={screen.letters ?? []} />}
    </div>
  );
}

// ---------- prayer times: drag the sun through one day

// An example summer day; the lesson says real times move with the seasons and the app shows them.
const WINDOWS = [
  { name: "Fajr", from: 5.9, to: 7.3, note: "Dawn, before sunrise" },
  { name: null, from: 7.3, to: 13.6, note: "No prayer due: the morning" },
  { name: "Dhuhr", from: 13.6, to: 17.2, note: "Just after midday" },
  { name: "Asr", from: 17.2, to: 20.4, note: "Late afternoon" },
  { name: "Maghrib", from: 20.4, to: 21.7, note: "Right after sunset" },
  { name: "Isha", from: 21.7, to: 29.9, note: "Night, once it's fully dark" },
] as const;
const SUNRISE = 7.3;
const SUNSET = 20.4;

function windowAt(h: number) {
  const x = h < 5.9 ? h + 24 : h;
  return WINDOWS.find((w) => x >= w.from && x < w.to) ?? WINDOWS[5];
}
const fmt = (h: number) => {
  const hh = Math.floor(h) % 24;
  const mm = Math.round((h % 1) * 60) % 60;
  return `${((hh + 11) % 12) + 1}:${String(mm).padStart(2, "0")} ${hh < 12 ? "am" : "pm"}`;
};

function PrayerTimes({ ready }: { ready: () => void }) {
  const [h, setH] = useState(6.5);
  const [seen, setSeen] = useState<Set<string>>(new Set(["Fajr"]));
  const w = windowAt(h);
  const move = (x: number) => {
    setH(x);
    const name = windowAt(x).name;
    if (name && !seen.has(name)) {
      const next = new Set(seen).add(name);
      setSeen(next);
      if (next.size === 5) ready();
    }
  };
  const day = h >= SUNRISE && h <= SUNSET;
  const t = Math.min(1, Math.max(0, (h - SUNRISE) / (SUNSET - SUNRISE)));
  const sx = 20 + t * 260;
  const sy = 150 - Math.sin(t * Math.PI) * 115;
  const sky = day ? (h < 9 || h > 18.8 ? "#f8d9a8" : "#cfe4fb") : h < SUNRISE ? "#3a4a7a" : "#1c2550";
  return (
    <div>
      <motion.div animate={{ backgroundColor: sky }} className="relative overflow-hidden rounded-3xl" style={{ height: 190 }}>
        <svg viewBox="0 0 300 190" className="absolute inset-0 h-full w-full">
          <path d="M20 150 Q150 -80 280 150" fill="none" stroke="#ffffff" strokeOpacity="0.6" strokeDasharray="4 6" strokeWidth="2" />
          {day ? (
            <circle cx={sx} cy={sy} r="16" fill="var(--dawn)" />
          ) : (
            <g>
              <circle cx="230" cy="50" r="14" fill="#f4efd6" />
              <circle cx="237" cy="45" r="12" fill={h < SUNRISE ? "#3a4a7a" : "#1c2550"} />
              {[30, 80, 140, 190, 60, 120].map((x, i) => (
                <circle key={i} cx={x} cy={20 + ((i * 37) % 70)} r="1.6" fill="#fff" />
              ))}
            </g>
          )}
          <rect x="0" y="150" width="300" height="40" fill="var(--tile-deep)" opacity="0.85" />
          <path d="M120 150 v-26 q16 -22 32 0 v26z M160 150 v-50 h6 v50z" fill="var(--cobalt-deep)" opacity="0.6" />
        </svg>
        <div className="absolute top-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-sm font-extrabold">{fmt(h)}</div>
      </motion.div>
      <label className="sr-only" htmlFor="time">
        Time of day
      </label>
      <input
        id="time"
        type="range"
        min={4.5}
        max={23.9}
        step={0.05}
        value={h}
        onChange={(e) => move(Number(e.target.value))}
        className="mt-4 w-full accent-[var(--cobalt)]"
      />
      <motion.div key={w.name ?? "none"} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-3 text-center">
        <p className="font-display text-3xl">{w.name ?? "Between prayers"}</p>
        <p className="text-muted">{w.note}</p>
      </motion.div>
      <div className="mt-4 flex justify-center gap-2">
        {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((n) => (
          <span key={n} className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${seen.has(n) ? "bg-tile text-white" : "bg-line text-muted"}`}>
            {n}
          </span>
        ))}
      </div>
      <p className="mt-3 text-center text-sm text-muted">Drag the slider through the day to find all five.</p>
    </div>
  );
}

// ---------- qibla: turn the arrow toward Makkah (northeast from the US)

function Qibla({ ready }: { ready: () => void }) {
  const [deg, setDegRaw] = useState(200);
  const [found, setFound] = useState(false);
  const dial = useRef<HTMLDivElement>(null);
  const isNear = (d: number) => d >= 25 && d <= 65;
  const near = isNear(deg);
  const setDeg = (next: number | ((d: number) => number)) => {
    const d = typeof next === "function" ? next(deg) : next;
    setDegRaw(d);
    if (isNear(d) && !found) {
      setFound(true);
      ready();
    }
  };
  const fromPointer = (e: React.PointerEvent) => {
    const r = dial.current!.getBoundingClientRect();
    const a = (Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180) / Math.PI;
    setDeg((a + 360) % 360);
  };
  return (
    <div className="flex flex-col items-center">
      <div
        ref={dial}
        className="relative h-64 w-64 touch-none rounded-full border-4 border-line bg-surface"
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          fromPointer(e);
        }}
        onPointerMove={(e) => e.buttons && fromPointer(e)}
        role="slider"
        aria-label="Direction"
        aria-valuemin={0}
        aria-valuemax={359}
        aria-valuenow={Math.round(deg)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setDeg((d) => (d + 5) % 360);
          if (e.key === "ArrowLeft") setDeg((d) => (d + 355) % 360);
        }}
      >
        {["N", "E", "S", "W"].map((c, i) => (
          <span
            key={c}
            className="absolute font-extrabold text-muted"
            style={{ left: `${50 + 42 * Math.sin((i * Math.PI) / 2)}%`, top: `${50 - 42 * Math.cos((i * Math.PI) / 2)}%`, transform: "translate(-50%,-50%)" }}
          >
            {c}
          </span>
        ))}
        {found && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute h-5 w-5 rounded-[3px] bg-ink"
            style={{ left: `${50 + 34 * Math.sin((45 * Math.PI) / 180)}%`, top: `${50 - 34 * Math.cos((45 * Math.PI) / 180)}%`, transform: "translate(-50%,-50%)" }}
          >
            <span className="absolute top-1 h-1 w-full bg-dawn" />
          </motion.div>
        )}
        <motion.div className="absolute inset-0" animate={{ rotate: deg }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
          <div className={`absolute top-6 left-1/2 h-24 w-3 -translate-x-1/2 rounded-full ${near ? "bg-tile" : "bg-cobalt"}`} />
          <div className={`absolute top-3 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[12px] border-b-[18px] border-x-transparent ${near ? "border-b-tile" : "border-b-cobalt"}`} />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
      </div>
      <p className={`mt-4 text-center font-extrabold ${near ? "text-tile" : "text-muted"}`}>
        {near ? "That's it: northeast, toward the Kaaba." : "Drag the arrow to point toward Makkah."}
      </p>
    </div>
  );
}

// ---------- rak'ahs: how many in each prayer?

const RAKAHS: [string, number][] = [
  ["Fajr", 2],
  ["Dhuhr", 4],
  ["Asr", 4],
  ["Maghrib", 3],
  ["Isha", 4],
];

function Rakahs({ setCheck }: { setCheck: ScreenProps<"widget">["setCheck"] }) {
  const [n, setN] = useState<number[]>([1, 1, 1, 1, 1]);
  const [touched, setTouched] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    // Check opens up only once they've set at least one prayer themselves.
    if (!touched) return;
    setCheck(() => {
      setChecked(true);
      const good = n.every((v, i) => v === RAKAHS[i][1]);
      return {
        good,
        body: good ? "All five, right. That's 17 rak'ahs a day." : "",
        answer: good ? undefined : RAKAHS.map(([p, c]) => `${p}: ${c}`).join(" · "),
      };
    });
  }, [n, touched, setCheck]);
  return (
    <div className="space-y-2.5">
      {RAKAHS.map(([name, right], i) => {
        const ok = checked && n[i] === right;
        return (
          <div key={name} data-state={checked ? (ok ? "right" : "wrong") : "idle"} className="opt flex items-center gap-3">
            <span className="w-20 font-extrabold">{name}</span>
            <div className="flex flex-1 gap-1">
              {Array.from({ length: n[i] }, (_, k) => (
                <motion.span key={k} initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-6 w-6 rounded-md bg-cobalt" />
              ))}
            </div>
            <button
              type="button"
              disabled={checked || n[i] <= 1}
              onClick={() => {
                setTouched(true);
                setN((a) => a.map((v, k) => (k === i ? v - 1 : v)));
              }}
              className="chip px-3 disabled:opacity-40"
              aria-label={`Fewer rak'ahs for ${name}`}
            >
              −
            </button>
            <button
              type="button"
              disabled={checked || n[i] >= 4}
              onClick={() => {
                setTouched(true);
                setN((a) => a.map((v, k) => (k === i ? v + 1 : v)));
              }}
              className="chip px-3 disabled:opacity-40"
              aria-label={`More rak'ahs for ${name}`}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}

export type { W as WidgetScreenData };
