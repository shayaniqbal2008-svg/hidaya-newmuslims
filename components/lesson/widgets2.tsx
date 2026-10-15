"use client";
// More Brilliant-style widgets (Checkpoint 4b: "the more diagrams and interactiveness, the better").
// Each one is something to drag, tap or count; it calls ready() once the convert has explored it,
// or (rows) hands the player a check like a question.
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Markdown } from "../Markdown";
import { Pic } from "../art/Pic";
import type { Result } from "./screens";

type Ready = { ready: () => void };

// ---------- fasting day: drag through a fasting day from the pre-dawn meal to iftar

const FAST = [
  { from: 3.5, to: 5.9, name: "Suhoor", note: "Eat and drink before dawn. It's sunnah to eat something, even a little.", eat: true },
  { from: 5.9, to: 20.4, name: "Fasting", note: "From dawn (Fajr) until sunset: no food, no drink.", eat: false },
  { from: 20.4, to: 23.9, name: "Iftar", note: "Sunset (Maghrib): break the fast, ideally with dates and water.", eat: true },
] as const;

export function FastDay({ ready }: Ready) {
  const [h, setH] = useState(4.5);
  const [seen, setSeen] = useState<Set<string>>(new Set(["Suhoor"]));
  const zone = FAST.find((z) => h >= z.from && h < z.to) ?? FAST[2];
  const move = (x: number) => {
    setH(x);
    const z = FAST.find((q) => x >= q.from && x < q.to) ?? FAST[2];
    if (!seen.has(z.name)) {
      const next = new Set(seen).add(z.name);
      setSeen(next);
      if (next.size === 3) ready();
    }
  };
  const day = h >= 7.3 && h <= 20.4;
  const t = Math.min(1, Math.max(0, (h - 7.3) / (20.4 - 7.3)));
  const sx = 20 + t * 260;
  const sy = 140 - Math.sin(t * Math.PI) * 105;
  const pct = ((h - 3.5) / (23.9 - 3.5)) * 100;
  return (
    <div>
      <motion.div
        animate={{ backgroundColor: day ? (h < 9 || h > 18.8 ? "#f8d9a8" : "#cfe4fb") : "#1c2550" }}
        className="relative overflow-hidden rounded-3xl"
        style={{ height: 170 }}
      >
        <svg viewBox="0 0 300 170" className="absolute inset-0 h-full w-full">
          {day ? <circle cx={sx} cy={sy} r="15" fill="var(--dawn)" /> : <circle cx="236" cy="44" r="13" fill="#f4efd6" />}
          <rect x="0" y="140" width="300" height="30" fill="var(--tile-deep)" opacity="0.85" />
          {/* the table: plate full when eating is allowed */}
          <ellipse cx="150" cy="150" rx="34" ry="8" fill="#fff" opacity="0.9" />
          {zone.eat && (
            <g>
              <ellipse cx="140" cy="146" rx="6" ry="4" fill="#7a4a2a" />
              <ellipse cx="152" cy="145" rx="6" ry="4" fill="#7a4a2a" />
              <rect x="166" y="132" width="9" height="16" rx="2" fill="#bfe3f5" />
            </g>
          )}
        </svg>
        <div className="absolute top-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-sm font-extrabold">{zone.name}</div>
      </motion.div>
      <div className="relative mt-4 h-3 overflow-hidden rounded-full bg-line" aria-hidden>
        <div className="absolute inset-y-0 bg-cobalt-soft" style={{ left: `${((5.9 - 3.5) / 20.4) * 100}%`, right: `${100 - ((20.4 - 3.5) / 20.4) * 100}%` }} />
        <div className="absolute top-0 h-3 w-1 rounded bg-cobalt" style={{ left: `${pct}%` }} />
      </div>
      <label className="sr-only" htmlFor="fast">
        Time of day
      </label>
      <input id="fast" type="range" min={3.5} max={23.8} step={0.05} value={h} onChange={(e) => move(Number(e.target.value))} className="mt-2 w-full accent-[var(--cobalt)]" />
      <motion.p key={zone.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-center text-[1.05rem]">
        {zone.note}
      </motion.p>
      <p className="mt-2 text-center text-sm text-muted">Drag through the day: {[...seen].join(", ")}</p>
    </div>
  );
}

// ---------- the moon: drag through a lunar month

export function Moon({ ready }: Ready) {
  const [d, setD] = useState(1);
  const [seen, setSeen] = useState<Set<string>>(new Set(["new"]));
  const stage = d <= 2 ? "new" : d >= 13 && d <= 16 ? "full" : d >= 28 ? "end" : "mid";
  const move = (x: number) => {
    setD(x);
    const st = x <= 2 ? "new" : x >= 13 && x <= 16 ? "full" : x >= 28 ? "end" : "mid";
    if (!seen.has(st)) {
      const next = new Set(seen).add(st);
      setSeen(next);
      if (next.has("new") && next.has("full") && next.has("end")) ready();
    }
  };
  // Lit fraction of the disc: 0 at new moon, 1 at full.
  // Shifted a little so the day-1 crescent is visible on a phone (the real one is a sliver).
  const lit = (1 - Math.cos(((d + 1.5) / 31) * 2 * Math.PI)) / 2;
  const waxing = d <= 15;
  const rx = Math.abs(1 - 2 * lit) * 40;
  const note = {
    new: "Day 1: a thin new crescent appears after sunset. Islamic months, Ramadan too, start with it; your masjid announces the exact day.",
    mid: "The moon grows, then shrinks, night by night.",
    full: "Around day 14–15: the full moon, the middle of the month.",
    end: "Day 29 or 30: the month ends, and the next one starts with the new crescent. Your masjid announces when.",
  }[stage];
  return (
    <div>
      <div className="flex h-48 items-center justify-center rounded-3xl bg-[#1c2550]">
        <svg viewBox="-50 -50 100 100" className="h-36 w-36">
          <circle r="40" fill="#2c3766" />
          {/* lit part: half disc on the lit side plus an ellipse that grows or eats into it */}
          <path d={`M0 -40 A40 40 0 0 ${waxing ? 1 : 0} 0 40 A${rx} 40 0 0 ${lit > 0.5 === waxing ? 1 : 0} 0 -40`} fill="#f4efd6" />
        </svg>
      </div>
      <label className="sr-only" htmlFor="moon">
        Day of the month
      </label>
      <input id="moon" type="range" min={1} max={30} step={1} value={d} onChange={(e) => move(Number(e.target.value))} className="mt-4 w-full accent-[var(--cobalt)]" />
      <p className="text-center font-display text-2xl">Day {d}</p>
      <motion.p key={stage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1 text-center text-[1.05rem]">
        {note}
      </motion.p>
      <p className="mt-2 text-center text-sm text-muted">Drag from the new crescent to the end of the month.</p>
    </div>
  );
}

// ---------- tasbih: tap to count

export type TasbihPhrase = { translit: string; meaning?: string; arabic?: string; count: number };

export function Tasbih({ ready, phrases }: Ready & { phrases: TasbihPhrase[] }) {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const done = p >= phrases.length;
  const cur = phrases[Math.min(p, phrases.length - 1)];
  const tap = () => {
    if (done) return;
    try {
      navigator.vibrate?.(8);
    } catch {}
    if (n + 1 >= cur.count) {
      setN(0);
      setP(p + 1);
      if (p + 1 >= phrases.length) ready();
    } else setN(n + 1);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex gap-1.5">
        {phrases.map((_, k) => (
          <span key={k} className={`h-2 w-10 rounded-full ${k < p ? "bg-tile" : k === p ? "bg-cobalt" : "bg-line"}`} />
        ))}
      </div>
      {!done ? (
        <>
          {cur.arabic && (
            <p className="arabic text-3xl" lang="ar">
              {cur.arabic}
            </p>
          )}
          <p className="mt-1 text-xl font-extrabold text-cobalt">{cur.translit}</p>
          {cur.meaning && <p className="text-muted">{cur.meaning}</p>}
          <motion.button
            type="button"
            onClick={tap}
            whileTap={{ scale: 0.92 }}
            className="mt-6 flex h-44 w-44 flex-col items-center justify-center rounded-full border-b-[8px] border-tile-deep bg-tile text-white shadow-lg"
            aria-label={`Count ${cur.translit}`}
          >
            <span className="font-display text-6xl">{n}</span>
            <span className="text-sm font-extrabold opacity-90">of {cur.count}</span>
          </motion.button>
          <p className="mt-4 text-sm text-muted">Say it once with each tap.</p>
        </>
      ) : (
        <motion.p initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-10 text-center font-display text-2xl text-tile">
          Done. Light on the tongue, heavy on the scale.
        </motion.p>
      )}
    </div>
  );
}

// ---------- timeline: swipe through events in order

export type TimelineEvent = { when: string; title: string; text: string; pic?: string };

export function Timeline({ ready, events }: Ready & { events: TimelineEvent[] }) {
  const [i, setI] = useState(0);
  const [seen, setSeen] = useState(1);
  const go = (k: number) => {
    setI(k);
    if (k + 1 > seen) {
      setSeen(k + 1);
      if (k + 1 >= events.length) ready();
    }
  };
  const e = events[i];
  return (
    <div>
      <div className="relative mb-5 flex items-center justify-between px-2">
        <div className="absolute top-1/2 right-4 left-4 h-1 -translate-y-1/2 rounded-full bg-line" />
        <motion.div
          className="absolute top-1/2 left-4 h-1 -translate-y-1/2 rounded-full bg-cobalt"
          animate={{ width: `calc((100% - 2rem) * ${events.length > 1 ? i / (events.length - 1) : 1})` }}
        />
        {events.map((ev, k) => (
          <button
            key={k}
            type="button"
            onClick={() => (k <= seen ? go(k) : undefined)}
            aria-label={ev.when}
            className={`relative z-10 h-5 w-5 rounded-full border-4 ${k === i ? "scale-125 border-cobalt bg-surface" : k < seen ? "border-cobalt bg-cobalt" : "border-line bg-surface"}`}
          />
        ))}
      </div>
      <motion.div
        key={i}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-5"
      >
        {e.pic && <Pic id={e.pic} className="mx-auto mb-3 h-32 w-full" />}
        <p className="font-extrabold text-cobalt">{e.when}</p>
        <p className="font-display text-xl leading-snug">{e.title}</p>
        <Markdown text={e.text} className="mt-2 text-[1.02rem]" />
      </motion.div>
      <div className="mt-4 flex gap-3">
        <button type="button" disabled={i === 0} onClick={() => go(i - 1)} className="btn btn-ghost w-auto px-5 disabled:opacity-40" aria-label="Earlier">
          ←
        </button>
        <button type="button" disabled={i === events.length - 1} onClick={() => go(i + 1)} className="btn btn-cobalt disabled:opacity-40">
          {i === events.length - 1 ? "That's the timeline" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// ---------- masjid map: tap each area

const AREAS = [
  { id: "shoes", label: "Shoe rack", x: 8, y: 74, w: 22, h: 18 },
  { id: "wudu", label: "Wudu area", x: 8, y: 50, w: 22, h: 20 },
  { id: "hall", label: "Prayer hall", x: 34, y: 30, w: 58, h: 40 },
  { id: "mihrab", label: "Mihrab", x: 56, y: 6, w: 16, h: 18 },
  { id: "minbar", label: "Minbar", x: 76, y: 8, w: 14, h: 14 },
  { id: "women", label: "Women's area", x: 34, y: 74, w: 40, h: 18 },
  { id: "entrance", label: "Entrance", x: 78, y: 76, w: 16, h: 16 },
] as const;

export function MasjidMap({ ready, areas }: Ready & { areas: Record<string, string> }) {
  const shown = AREAS.filter((a) => areas[a.id]);
  const [open, setOpen] = useState<string | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const tap = (id: string) => {
    setOpen(id);
    const next = new Set(seen).add(id);
    setSeen(next);
    if (next.size === shown.length) ready();
  };
  return (
    <div>
      <div className="relative aspect-[10/9] w-full rounded-3xl border-4 border-cobalt-deep bg-cobalt-soft">
        <span className="absolute top-1 left-2 text-xs font-extrabold text-cobalt">Qibla ↑</span>
        {/* prayer rows */}
        {[40, 48, 56, 64].map((y) => (
          <div key={y} className="absolute right-[10%] left-[36%] h-[3%] rounded bg-dawn-soft" style={{ top: `${y}%` }} />
        ))}
        {shown.map((a) => (
          <motion.button
            key={a.id}
            type="button"
            onClick={() => tap(a.id)}
            whileTap={{ scale: 0.95 }}
            className={`absolute flex items-center justify-center rounded-xl border-2 p-1 text-center text-[0.7rem] leading-tight font-extrabold ${
              open === a.id
                ? "border-tile bg-tile/85 text-white"
                : seen.has(a.id)
                  ? "border-tile bg-tile-soft/70 text-tile-deep"
                  : `border-cobalt text-cobalt ${a.id === "hall" ? "bg-surface/30" : "bg-surface/90"}`
            }`}
            style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%` }}
          >
            {a.label}
            {!seen.has(a.id) && <span className="absolute -top-1.5 -right-1.5 h-3 w-3 animate-ping rounded-full bg-dawn" />}
          </motion.button>
        ))}
      </div>
      <div className="mt-4 min-h-24 rounded-2xl bg-surface p-4">
        {open ? (
          <motion.div key={open} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
            <p className="font-extrabold text-tile-deep">{AREAS.find((a) => a.id === open)?.label}</p>
            <Markdown text={areas[open]} className="text-[1.02rem]" />
          </motion.div>
        ) : (
          <p className="text-muted">Tap each part of the masjid.</p>
        )}
      </div>
      <p className="mt-2 text-center text-sm text-muted">
        {seen.size} of {shown.length} explored
      </p>
    </div>
  );
}

// ---------- rows: where do you stand when you join the prayer?

// Rows fill from the front, starting behind the imam and spreading out; join the first row with space,
// shoulder to shoulder with the people already there.
const COLS = 7;
const FILLED = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

export function Rows({ setCheck }: { setCheck: (fn: (() => Result) | null) => void }) {
  const [pick, setPick] = useState<[number, number] | null>(null);
  const [checked, setChecked] = useState(false);
  const good = (r: number, c: number) => r === 1 && (c === 1 || c === 5);
  const choose = (r: number, c: number) => {
    if (checked || FILLED[r][c]) return;
    setPick([r, c]);
    setCheck(() => {
      setChecked(true);
      const ok = good(r, c);
      return {
        good: ok,
        body: ok
          ? "Join the first row with space, right next to the people already standing: shoulder to shoulder, no gaps."
          : r === 2
            ? "Not yet: the second row still has space. Fill it before starting a new row."
            : "Stand right beside the people already there, shoulder to shoulder, so there's no gap in the row.",
        answer: ok ? undefined : "Row 2, right beside the people already standing.",
      };
    });
  };
  return (
    <div>
      <div className="rounded-3xl bg-cobalt-soft p-4">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cobalt-deep text-xs font-extrabold text-white">Imam</div>
        <div className="space-y-2">
          {FILLED.map((row, r) => (
            <div key={r} className="flex justify-center gap-1.5">
              {row.map((f, c) => {
                const mine = pick?.[0] === r && pick?.[1] === c;
                return (
                  <button
                    key={c}
                    type="button"
                    disabled={!!f || checked}
                    onClick={() => choose(r, c)}
                    aria-label={f ? "Someone praying" : `Row ${r + 1}, place ${c + 1}`}
                    className={`h-10 w-10 rounded-full border-2 ${
                      f ? "border-cobalt-deep bg-cobalt" : mine ? (checked ? (good(r, c) ? "border-tile bg-tile" : "border-gentle bg-gentle") : "border-dawn-deep bg-dawn") : "border-dashed border-cobalt/50 bg-surface"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted">You arrive late and the prayer has started. Tap where you&apos;d stand.</p>
    </div>
  );
}

// ---------- zakat: slide your savings

export function Zakat({ ready, nisab }: Ready & { nisab: number }) {
  const [v, setV] = useState(Math.round(nisab * 0.5));
  const [seenBelow, setSeenBelow] = useState(true);
  const [seenAbove, setSeenAbove] = useState(false);
  const fired = useRef(false);
  const above = v >= nisab;
  const max = nisab * 4;
  useEffect(() => {
    if (seenBelow && seenAbove && !fired.current) {
      fired.current = true;
      ready();
    }
  }, [seenBelow, seenAbove, ready]);
  const fmt = (x: number) => `$${Math.round(x).toLocaleString("en-US")}`;
  return (
    <div>
      <div className="rounded-3xl border-2 border-line bg-surface p-5">
        <p className="text-sm font-extrabold text-muted">Savings you&apos;ve held for a full lunar year</p>
        <p className="font-display text-4xl">{fmt(v)}</p>
        <div className="relative mt-4 h-4 rounded-full bg-line">
          <motion.div className={`h-4 rounded-full ${above ? "bg-tile" : "bg-cobalt"}`} animate={{ width: `${(v / max) * 100}%` }} />
          <div className="absolute -top-2 h-8 w-1 rounded bg-dawn-deep" style={{ left: `${(nisab / max) * 100}%` }} />
        </div>
        <p className="mt-1 text-xs font-extrabold text-dawn-deep" style={{ marginLeft: `calc(${(nisab / max) * 100}% - 1.5rem)` }}>
          nisab
        </p>
        <input
          type="range"
          min={0}
          max={max}
          step={Math.max(1, Math.round(nisab / 100))}
          value={v}
          aria-label="Savings"
          onChange={(e) => {
            const x = Number(e.target.value);
            setV(x);
            if (x >= nisab) setSeenAbove(true);
            else setSeenBelow(true);
          }}
          className="mt-3 w-full accent-[var(--tile)]"
        />
      </div>
      <motion.div key={String(above)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 rounded-2xl p-4 ${above ? "bg-tile-soft" : "bg-cobalt-soft"}`}>
        {above ? (
          <p className="text-[1.05rem]">
            Above the nisab: zakat is due. <strong>2.5%</strong> of {fmt(v)} = <strong className="text-tile-deep">{fmt(v * 0.025)}</strong>
          </p>
        ) : (
          <p className="text-[1.05rem]">Below the nisab: no zakat is due on this yet.</p>
        )}
      </motion.div>
      <p className="mt-2 text-center text-sm text-muted">Example nisab only. It changes with the price of silver and gold: ask your masjid for today&apos;s figure.</p>
    </div>
  );
}

// ---------- iman graph: faith has ups and downs; drag along the line

export type ImanPoint = { label: string; text: string };

export function ImanGraph({ ready, points }: Ready & { points: ImanPoint[] }) {
  const [t, setT] = useState(0);
  const [max, setMax] = useState(0);
  const n = points.length;
  const k = Math.min(n - 1, Math.round(t * (n - 1)));
  const y = (x: number) => 60 - Math.sin(x * Math.PI * 2.4 - 0.4) * 28 - x * 22; // dips, but trending up
  const path = Array.from({ length: 61 }, (_, i) => `${i ? "L" : "M"}${10 + (i / 60) * 280} ${y(i / 60)}`).join(" ");
  return (
    <div>
      <div className="rounded-3xl bg-surface p-3">
        <svg viewBox="0 0 300 110" className="w-full">
          <path d={path} fill="none" stroke="var(--line)" strokeWidth="5" strokeLinecap="round" />
          <path d={path} fill="none" stroke="var(--tile)" strokeWidth="5" strokeLinecap="round" pathLength={1} strokeDasharray={`${t} 1`} />
          {points.map((_, i) => {
            const x = n > 1 ? i / (n - 1) : 0;
            return <circle key={i} cx={10 + x * 280} cy={y(x)} r="5" fill={i <= k ? "var(--tile)" : "var(--line-deep)"} />;
          })}
          <circle cx={10 + t * 280} cy={y(t)} r="9" fill="var(--dawn)" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.005}
        value={t}
        aria-label="Move along the line"
        onChange={(e) => {
          const x = Number(e.target.value);
          setT(x);
          if (x > max) {
            setMax(x);
            if (x >= 0.99) ready();
          }
        }}
        className="mt-3 w-full accent-[var(--tile)]"
      />
      <motion.div key={k} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-2xl bg-tile-soft p-4">
        <p className="font-extrabold text-tile-deep">{points[k].label}</p>
        <Markdown text={points[k].text} className="text-[1.02rem]" />
      </motion.div>
      <p className="mt-2 text-center text-sm text-muted">Drag along the line to the end.</p>
    </div>
  );
}

