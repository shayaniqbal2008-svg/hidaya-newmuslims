"use client";
// One component per screen type (Curriculum Spec §4.3). Two ways a screen lets the convert move on:
//  - question screens hand the player a `check` function once something is picked; the player's Check
//    button runs it and shows the result in the feedback sheet (Duolingo's select → Check → Continue);
//  - everything else calls `ready()` once it has been done (all steps seen, a card turned, …).
// Feedback is warm: right answers get a reason, others get "Not quite" in amber, never red.
import Link from "next/link";
import { use, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Volume2 } from "lucide-react";
import { makeGate } from "@/lib/audio-play";
import { isArabicOnly } from "@/lib/content/alphabet";
import type { Option, PhraseData } from "@/lib/content/types";
import type { RenderedScreen } from "@/lib/content/render";
import { Markdown } from "../Markdown";
import { playClip } from "./audio";
import { ArtContext, Pic } from "../art/Pic";
import { PrayerFigure } from "../art/PrayerFigure";

type Of<T extends RenderedScreen["type"]> = Extract<RenderedScreen, { type: T }>;
export type Result = { good: boolean; body?: string; answer?: string };
/** What the footer's main button does while a walkthrough screen isn't finished yet. */
export type NextAction = { label: string; run: () => void } | null;
export type ScreenProps<T extends RenderedScreen["type"]> = {
  screen: Of<T>;
  ready: () => void;
  setCheck: (fn: (() => Result) | null) => void;
  setNext?: (next: NextAction) => void;
  lessonId: string;
  returnTo?: string;
  onAnswer?: (response: unknown) => void;
};

// Shuffle that's stable for a given screen, so options don't jump around on re-render.
export function useShuffled<T>(items: T[], seed: string): T[] {
  return useMemo(() => {
    let h = 0;
    for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const a = items.map((x, i) => ({
      x,
      k: ((h ^ Math.imul(i + 1, 2654435761)) >>> 0) % 10007,
    }));
    return a.sort((p, q) => p.k - q.k).map((p) => p.x);
  }, [items, seed]);
}

const stripLead = (fb = "") => fb.replace(/^(Right|Yes|Correct|Not quite|Exactly|That's it)[.:!,]\s*/i, "");
const plain = (s: string) => s.replace(/[*_`]/g, "");

function Prompt({ text, sub }: { text: string; sub?: string }) {
  return (
    <div className="mb-5">
      <Markdown text={text} className="font-display text-[1.6rem] leading-tight" glossary={false} />
      {sub && <p className="mt-1.5 text-[0.95rem] text-muted">{sub}</p>}
    </div>
  );
}

// ---------- reading screens (kept short; pictures carry the meaning)

export function HookScreen({ screen, title, day }: { screen: Of<"hook">; title: string; day: number | null }) {
  return (
    <div className="flex flex-col items-center pt-2 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.45 }}
        className="w-full"
      >
        <Pic id={screen.pic ?? "fresh-start"} className="mx-auto h-48 w-full" />
      </motion.div>
      {day && <p className="mt-4 font-extrabold text-cobalt">Day {day}</p>}
      <h1 className="mt-1 font-display text-[2rem] leading-tight">{title}</h1>
      <Markdown text={screen.text} className="mt-4 text-lg leading-relaxed text-muted" />
    </div>
  );
}

export function LearnScreen({
  screen,
  ready,
  setNext,
}: {
  screen: Of<"learn">;
  ready: () => void;
  setNext?: (n: NextAction) => void;
}) {
  const bubbles = screen.bubbles ?? [];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= bubbles.length) {
      setNext?.(null);
      ready();
    } else
      setNext?.({
        label: shown === 0 ? "Tell me more" : "And?",
        run: () => setShown((s) => s + 1),
      });
  }, [shown, bubbles.length, ready, setNext]);
  return (
    <div>
      {screen.pic && (
        <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-5">
          <Pic id={screen.pic} className="mx-auto h-44 w-full" />
        </motion.div>
      )}
      <Markdown text={screen.text} className="text-[1.2rem] leading-relaxed" />
      <div className="mt-4 space-y-3">
        <AnimatePresence initial={false}>
          {bubbles.slice(0, shown).map((b, i) => (
            <motion.div
              key={i}
              initial={{ y: 16, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className="rounded-2xl border-2 border-line bg-surface px-4 py-3 text-[1.1rem]"
            >
              <Markdown text={b} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TakeawayScreen({ screen }: { screen: Of<"takeaway"> }) {
  return (
    <div className="pt-2">
      {screen.pic && <Pic id={screen.pic} className="mx-auto mb-4 h-36 w-full" tone="dawn" />}
      <motion.div
        initial={{ rotate: -2, scale: 0.94, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
        className="rounded-3xl border-2 border-dawn border-b-[6px] border-b-dawn-deep bg-dawn-soft p-6"
      >
        <p className="mb-2 font-extrabold text-dawn-deep">Remember this</p>
        <Markdown text={screen.text} className="font-display text-[1.35rem] leading-snug" />
      </motion.div>
    </div>
  );
}

// ---------- questions (select → Check)

function Options({
  options,
  picked,
  checked,
  onPick,
  multi = false,
  bestKey = "correct",
}: {
  options: Option[];
  picked: Set<number>;
  checked: boolean;
  onPick: (i: number) => void;
  multi?: boolean;
  bestKey?: "correct" | "best";
}) {
  return (
    <div className="space-y-3">
      {options.map((o, i) => {
        const on = picked.has(i);
        const isRight = !!o[bestKey];
        const state = !checked ? (on ? "picked" : "idle") : isRight ? "right" : on ? "wrong" : "dim";
        return (
          <motion.button
            key={i}
            type="button"
            disabled={checked}
            data-state={state}
            onClick={() => onPick(i)}
            animate={checked && on && !isRight ? { x: [0, -7, 7, -4, 4, 0] } : {}}
            transition={{ duration: 0.35 }}
            className="opt flex items-start gap-3"
          >
            <span
              aria-hidden
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-extrabold ${on ? "border-current" : "border-line text-muted"}`}
            >
              {multi ? (on ? "✓" : "") : i + 1}
            </span>
            {isArabicOnly(o.text) ? (
              <span className="arabic text-[2rem] leading-[1.3]" lang="ar" dir="rtl">
                {o.text.trim()}
              </span>
            ) : (
              <Markdown text={o.text} inert className="text-[1.05rem]" />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

/** Plays the question's clip; if it can't load, says so instead of failing silently. */
function HearButton({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  // A second tap supersedes the first; only the latest tap's result is shown.
  const [gate] = useState(makeGate);
  return (
    <div className="mb-4 flex flex-col items-center">
      <button
        type="button"
        onClick={async () => {
          const isCurrent = gate.begin();
          setFailed(false);
          const ok = await playClip(src);
          if (isCurrent()) setFailed(!ok);
        }}
        aria-label="Play the sound"
        className="flex h-20 w-20 items-center justify-center rounded-full border-b-[6px] border-cobalt-deep bg-cobalt text-white"
      >
        <Volume2 size={36} aria-hidden />
      </button>
      {failed && <p className="mt-2 text-sm text-muted">The sound didn&apos;t load. Try again in a moment.</p>}
    </div>
  );
}

export function ChoiceScreen({ screen, setCheck, lessonId, onAnswer }: ScreenProps<"choice">) {
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const opts = useShuffled(screen.options, `${lessonId}-${screen.n}`);
  return (
    <div>
      {screen.pic && <Pic id={screen.pic} className="mx-auto mb-3 h-36 w-full" />}
      <Prompt text={screen.prompt} />
      {screen.audio && <HearButton src={screen.audio} />}
      <Options
        options={opts}
        picked={new Set(picked === null ? [] : [picked])}
        checked={checked}
        onPick={(i) => {
          setPicked(i);
          const o = opts[i];
          setCheck(() => {
            setChecked(true);
            onAnswer?.({ correct: !!o.correct });
            const right = opts.find((x) => x.correct);
            return {
              good: !!o.correct,
              body: stripLead(o.feedback),
              answer: o.correct ? undefined : right && plain(right.text),
            };
          });
        }}
      />
    </div>
  );
}

export function MultiScreen({ screen, setCheck, lessonId }: ScreenProps<"multi">) {
  const [sel, setSel] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const opts = useShuffled(screen.options, `${lessonId}-${screen.n}`);
  return (
    <div>
      <Prompt text={screen.prompt} sub="Pick every one that fits." />
      <Options
        multi
        options={opts}
        picked={sel}
        checked={checked}
        onPick={(i) => {
          const next = new Set(sel.has(i) ? [...sel].filter((x) => x !== i) : [...sel, i]);
          setSel(next);
          setCheck(
            next.size
              ? () => {
                  setChecked(true);
                  const good = opts.every((o, k) => !!o.correct === next.has(k));
                  const missed = opts.filter((o, k) => o.correct && !next.has(k));
                  const wrong = opts.filter((o, k) => !o.correct && next.has(k));
                  const body = good
                    ? stripLead(opts.find((o) => o.correct)?.feedback)
                    : [...wrong.map((o) => stripLead(o.feedback)), ...missed.map((o) => `“${plain(o.text)}” counts too.`)].join(
                        " ",
                      );
                  return { good, body };
                }
              : null,
          );
        }}
      />
    </div>
  );
}

export function ScenarioScreen({ screen, setCheck, lessonId }: ScreenProps<"scenario">) {
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const opts = useShuffled(screen.options, `${lessonId}-${screen.n}`);
  return (
    <div>
      <div className="mb-5 flex items-start gap-3">
        <div className="shrink-0">
          <Pic id={screen.pic ?? "icon:MessageCircleQuestionMark"} className="h-16 w-16" />
        </div>
        <div className="flex-1 rounded-2xl border-2 border-line bg-surface p-4">
          <p className="mb-1 text-sm font-extrabold text-cobalt">What would you do?</p>
          <Markdown text={screen.situation} className="text-[1.05rem]" />
        </div>
      </div>
      <Options
        options={opts}
        bestKey="best"
        picked={new Set(picked === null ? [] : [picked])}
        checked={checked}
        onPick={(i) => {
          setPicked(i);
          setCheck(() => {
            setChecked(true);
            const best = opts.find((o) => o.best);
            return {
              good: !!opts[i].best,
              body: opts[i].feedback ?? "",
              answer: opts[i].best ? undefined : best && plain(best.text),
            };
          });
        }}
      />
    </div>
  );
}

export function FillScreen({ screen, setCheck, lessonId }: ScreenProps<"fill">) {
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const opts = useShuffled(screen.options, `${lessonId}-${screen.n}`);
  const chosen = picked === null ? null : opts[picked];
  const rtl = screen.dir === "rtl";
  return (
    <div>
      <Prompt text="Fill in the blank" />
      <div
        className={`rounded-2xl border-2 border-line bg-surface p-5 ${rtl ? "arabic text-[1.8rem]" : "text-[1.3rem] leading-loose"}`}
        dir={rtl ? "rtl" : undefined}
        lang={rtl ? "ar" : undefined}
      >
        {rtl ? <span>{screen.before}</span> : <Markdown text={screen.before} className="inline" glossary={false} />}{" "}
        <motion.span
          key={picked ?? -1}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`mx-1 inline-block min-w-20 rounded-lg border-b-4 px-2 text-center font-extrabold ${
            !chosen
              ? "border-line text-transparent"
              : checked
                ? chosen.correct
                  ? "border-tile text-tile"
                  : "border-gentle text-gentle"
                : "border-cobalt text-cobalt"
          }`}
        >
          {chosen ? plain(chosen.text) : "____"}
        </motion.span>{" "}
        {screen.after && (rtl ? <span>{screen.after}</span> : <Markdown text={screen.after} className="inline" glossary={false} />)}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {opts.map((o, i) => (
          <button
            key={i}
            type="button"
            disabled={checked}
            onClick={() => {
              setPicked(i);
              setCheck(() => {
                setChecked(true);
                const right = opts.find((x) => x.correct);
                return {
                  good: !!o.correct,
                  body: stripLead(o.feedback),
                  answer: o.correct ? undefined : right && plain(right.text),
                };
              });
            }}
            className={`chip ${rtl ? "arabic text-2xl" : "text-lg"} ${picked === i ? "opacity-40" : ""}`}
            lang={rtl ? "ar" : undefined}
          >
            {plain(o.text)}
          </button>
        ))}
      </div>
    </div>
  );
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}' ]/gu, "")
    .replace(/\s+/g, " ")
    .trim();

export function TapWordsScreen({ screen, setCheck, lessonId }: ScreenProps<"tap_words">) {
  const words = useMemo(
    () =>
      [...screen.answer.split(/\s+/), ...screen.extra].map((w, i) => ({
        w,
        i,
      })),
    [screen],
  );
  const bank = useShuffled(words, `${lessonId}-${screen.n}`);
  const [line, setLine] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const update = (next: number[]) => {
    setLine(next);
    setCheck(
      next.length
        ? () => {
            setChecked(true);
            const said = next.map((i) => words[i].w).join(" ");
            const good = norm(said) === norm(screen.answer);
            return {
              good,
              body: screen.feedback ?? "",
              answer: good ? undefined : screen.answer,
            };
          }
        : null,
    );
  };
  return (
    <div>
      <Prompt text={screen.prompt} sub="Tap the words in order." />
      <div className="flex min-h-28 flex-wrap content-start gap-2 border-b-2 border-line pb-3">
        <AnimatePresence>
          {line.map((i) => (
            <motion.button
              layout
              key={i}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              type="button"
              disabled={checked}
              onClick={() => update(line.filter((x) => x !== i))}
              className="chip text-lg"
            >
              {words[i].w}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {bank.map(({ w, i }) => {
          const used = line.includes(i);
          return (
            <button
              key={i}
              type="button"
              disabled={used || checked}
              onClick={() => update([...line, i])}
              className={`chip text-lg ${used ? "border-line bg-line text-transparent" : ""}`}
            >
              {w}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function OrderScreen({ screen, setCheck, lessonId }: ScreenProps<"order">) {
  const items = useMemo(() => screen.items.map((x, i) => ({ x, pic: screen.pics?.[i] })), [screen]);
  const shuffled = useShuffled(items, `${lessonId}-${screen.n}`);
  const [placed, setPlaced] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const left = shuffled.filter((x) => !placed.includes(x.x));
  const picOf = (x: string) => items.find((s) => s.x === x)?.pic;
  const update = (next: string[]) => {
    setPlaced(next);
    setCheck(
      next.length === screen.items.length
        ? () => {
            setChecked(true);
            const good = next.every((x, i) => x === screen.items[i]);
            return {
              good,
              body: screen.feedback ?? "",
              answer: good ? undefined : screen.items.map((x, i) => `${i + 1}. ${plain(x)}`).join("\n"),
            };
          }
        : null,
    );
  };
  return (
    <div>
      <Prompt text={screen.prompt} sub="Tap them in order. Tap a placed one to take it back." />
      <ol className="mb-4 space-y-2">
        <AnimatePresence>
          {placed.map((x, i) => {
            const ok = x === screen.items[i];
            const pic = picOf(x);
            return (
              <motion.li key={x} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <button
                  type="button"
                  disabled={checked}
                  onClick={() => update(placed.filter((y) => y !== x))}
                  data-state={checked ? (ok ? "right" : "wrong") : "picked"}
                  className="opt flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalt text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  {pic && <Pic id={pic} className="h-10 w-10 shrink-0" />}
                  <Markdown text={x} inert />
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>
      <div className="space-y-2">
        {left.map((s) => (
          <motion.button
            layout
            key={s.x}
            type="button"
            onClick={() => update([...placed, s.x])}
            className="opt flex items-center gap-3 border-dashed"
          >
            {s.pic && <Pic id={s.pic} className="h-10 w-10 shrink-0" />}
            <Markdown text={s.x} inert />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/** A match card's text: Arabic letters and words get the Arabic font, large enough to tell apart. */
function MatchText({ text }: { text: string }) {
  return isArabicOnly(text) ? (
    <span className="arabic text-[1.9rem] leading-[1.3]" lang="ar" dir="rtl">
      {text.trim()}
    </span>
  ) : (
    <>{text}</>
  );
}

export function MatchScreen({ screen, ready, lessonId }: ScreenProps<"match">) {
  // Right-hand tiles are tracked by position, so two pairs may share an answer (e.g. "2 before").
  const rights = useShuffled(
    useMemo(() => screen.pairs.map((p, i) => ({ text: p.right, i })), [screen]),
    `${lessonId}-${screen.n}`,
  );
  const [leftSel, setLeftSel] = useState<number | null>(null);
  const [matchedLeft, setMatchedLeft] = useState<Set<number>>(new Set());
  const [usedRight, setUsedRight] = useState<Set<number>>(new Set());
  const [miss, setMiss] = useState<number | null>(null);
  return (
    <div>
      <Prompt text={screen.prompt} sub="Tap a pair." />
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2.5">
          {screen.pairs.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              disabled={matchedLeft.has(i)}
              animate={matchedLeft.has(i) ? { opacity: 0.4, scale: 0.97 } : { opacity: 1, scale: 1 }}
              data-state={matchedLeft.has(i) ? "right" : leftSel === i ? "picked" : "idle"}
              onClick={() => {
                setLeftSel(i);
                setMiss(null);
              }}
              className="opt min-h-16 text-center text-[0.98rem]"
            >
              <MatchText text={p.left} />
            </motion.button>
          ))}
        </div>
        <div className="space-y-2.5">
          {rights.map((r) => {
            const done = usedRight.has(r.i);
            return (
              <motion.button
                key={r.i}
                type="button"
                disabled={done}
                animate={done ? { opacity: 0.4, scale: 0.97 } : miss === r.i ? { x: [0, -6, 6, -3, 3, 0] } : { opacity: 1, scale: 1 }}
                data-state={done ? "right" : miss === r.i ? "wrong" : "idle"}
                onClick={() => {
                  if (leftSel === null) return;
                  if (screen.pairs[leftSel].right === r.text) {
                    const next = new Set(matchedLeft).add(leftSel);
                    setMatchedLeft(next);
                    setUsedRight(new Set(usedRight).add(r.i));
                    setLeftSel(null);
                    setMiss(null);
                    if (next.size === screen.pairs.length) ready();
                  } else setMiss(r.i);
                }}
                className="opt min-h-16 text-center text-[0.98rem]"
              >
                <MatchText text={r.text} />
              </motion.button>
            );
          })}
        </div>
      </div>
      {matchedLeft.size === screen.pairs.length && (
        <p role="status" className="animate-pop mt-4 text-center font-extrabold text-tile">
          All matched!
        </p>
      )}
    </div>
  );
}

export function SortScreen({ screen, ready, lessonId }: ScreenProps<"sort">) {
  const items = useShuffled(screen.items, `${lessonId}-${screen.n}`);
  const [i, setI] = useState(0);
  const [last, setLast] = useState<{
    good: boolean;
    why?: string;
    text: string;
  } | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= items.length;
  useEffect(() => {
    if (done) ready();
  }, [done, ready]);
  const choose = (b: 0 | 1) => {
    const it = items[i];
    const good = it.bucket === b;
    setLast({ good, why: it.why, text: it.text });
    if (good) setScore((s) => s + 1);
    setI((x) => x + 1);
  };
  return (
    <div>
      <Prompt text={screen.prompt} sub={done ? undefined : `${i + 1} of ${items.length}`} />
      <div className="relative flex h-40 items-center justify-center">
        {!done ? (
          <motion.div
            key={i}
            initial={{ y: 30, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            className="w-full rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-6 text-center text-xl font-extrabold"
          >
            <Markdown text={items[i].text} glossary={false} />
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <p className="font-display text-3xl">
              {score} of {items.length}
            </p>
            <p className="mt-1 text-muted">sorted right</p>
          </motion.div>
        )}
      </div>
      {last && (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 rounded-2xl px-4 py-3 text-[0.95rem] ${last.good ? "bg-tile-soft" : "bg-gentle-soft"}`}
        >
          <span className={`font-extrabold ${last.good ? "text-tile-deep" : "text-gentle"}`}>
            {last.good ? "Yes. " : "Not quite. "}
          </span>
          <span className="font-bold">{plain(last.text)}</span>
          {last.why ? `: ${stripLead(last.why)}` : ""}
        </motion.div>
      )}
      {!done && (
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button type="button" onClick={() => choose(0)} className="btn btn-cobalt min-h-16">
            {screen.buckets[0]}
          </button>
          <button type="button" onClick={() => choose(1)} className="btn btn-dawn min-h-16">
            {screen.buckets[1]}
          </button>
        </div>
      )}
    </div>
  );
}

export function RevealScreen({ screen, ready }: ScreenProps<"reveal">) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  return (
    <div>
      {screen.title && <Prompt text={screen.title} sub="Tap each card to flip it." />}
      <div className="space-y-3">
        {screen.cards.map((c, i) => {
          const isOpen = open.has(i);
          return (
            // Closed: a button that flips it. Open: plain content, so its glossary words and references stay tappable.
            <motion.div
              key={i}
              animate={{ rotateX: isOpen ? 360 : 0 }}
              transition={{ duration: 0.5 }}
              className="[perspective:900px]"
            >
              {!isOpen ? (
                <button
                  type="button"
                  aria-expanded={false}
                  onClick={() => {
                    const next = new Set(open).add(i);
                    setOpen(next);
                    if (next.size === screen.cards.length) ready();
                  }}
                  className="opt flex items-center gap-3"
                >
                  {c.pic && <Pic id={c.pic} className="h-10 w-10 shrink-0" />}
                  {c.rtl ? (
                    <p className="arabic w-full text-[1.7rem]" lang="ar" dir="rtl">
                      {c.front}
                    </p>
                  ) : (
                    <Markdown text={c.front} className="font-extrabold" inert />
                  )}
                </button>
              ) : (
                <div data-state="right" className="opt text-ink" aria-expanded>
                  {c.rtl ? (
                    <p className="arabic text-[1.4rem] text-muted" lang="ar" dir="rtl">
                      {c.front}
                    </p>
                  ) : (
                    <Markdown text={c.front} className="text-sm text-muted" glossary={false} />
                  )}
                  {c.arabic && (
                    <p className="arabic mt-1.5 text-[1.7rem]" lang="ar" dir="rtl">
                      {c.arabic}
                    </p>
                  )}
                  <Markdown text={c.back} className="mt-1.5" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      <p className="mt-3 text-center text-sm text-muted">
        {open.size} of {screen.cards.length} turned
      </p>
    </div>
  );
}

// ---------- show, don't tell

export function PhraseScreen({ phrase, ready, label }: { phrase: PhraseData; ready: () => void; label?: string }) {
  const [meaning, setMeaning] = useState(false);
  const [said, setSaid] = useState(false);
  return (
    <div className="text-center">
      <p className="mb-3 font-extrabold text-cobalt">{label ?? "New words"}</p>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface px-5 py-6"
      >
        {/* Arabic still waiting on a scholar ("TODO…") is never shown. */}
        {!phrase.arabic.startsWith("TODO") && (
          <p className="arabic text-[2.3rem] leading-[2.1] text-ink" lang="ar">
            {phrase.arabic}
          </p>
        )}
        <p className="mt-3 text-xl font-extrabold text-cobalt">{phrase.translit}</p>
        {meaning ? (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-lg text-muted">
            {phrase.meaning}
          </motion.p>
        ) : (
          <button
            type="button"
            onClick={() => setMeaning(true)}
            className="mt-3 rounded-full bg-cobalt-soft px-4 py-1.5 text-sm font-extrabold text-cobalt"
          >
            What does it mean?
          </button>
        )}
      </motion.div>
      <div className="mt-4 rounded-2xl bg-dawn-soft px-4 py-3 text-left text-[0.95rem]">
        <p className="font-extrabold text-dawn-deep">When to say it</p>
        <Markdown text={phrase.when} />
      </div>
      <button
        type="button"
        onClick={() => {
          setSaid(true);
          ready();
        }}
        className={`btn mt-5 ${said ? "btn-ghost" : "btn-cobalt"}`}
      >
        {said ? "Said it ✓" : "I said it out loud"}
      </button>
    </div>
  );
}

/** A how-to, one step at a time with a picture each, then the whole list. */
export function StepsScreen({ screen, ready, setNext }: ScreenProps<"steps">) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const total = screen.steps.length;
  const atList = i >= total;
  const go = useCallback(
    (d: number) => {
      setDir(d);
      setI((x) => Math.max(0, Math.min(total, x + d)));
    },
    [total],
  );
  useEffect(() => {
    if (atList) {
      setNext?.(null);
      ready();
    } else
      setNext?.({
        label: i === total - 1 ? "See all the steps" : "Next step",
        run: () => go(1),
      });
  }, [atList, i, total, ready, setNext, go]);
  const step = screen.steps[Math.min(i, total - 1)];
  return (
    <div>
      <Prompt text={screen.title} sub={screen.intro} />
      <div className="mb-4 flex gap-1.5" aria-hidden>
        {screen.steps.map((_, k) => (
          <span
            key={k}
            className={`h-2 flex-1 rounded-full transition-colors duration-300 ${k < i || atList ? "bg-tile" : k === i ? "bg-cobalt" : "bg-line"}`}
          />
        ))}
      </div>
      {!atList ? (
        <motion.div
          key={i}
          initial={{ x: dir * 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.22 }}
          className="rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-5"
        >
          {step.pic && <Pic id={step.pic} className="mx-auto h-44 w-full" />}
          <div className="mt-3 flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cobalt font-display text-lg text-white">
              {i + 1}
            </span>
            <Markdown text={step.text} className="pt-1 text-[1.15rem] leading-snug" />
          </div>
          {step.say && (
            <p className="mt-3 rounded-xl bg-tile-soft px-3 py-2 text-center font-extrabold text-tile-deep">
              Say: <em>{step.say}</em>
            </p>
          )}
        </motion.div>
      ) : (
        <motion.ol key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          {screen.steps.map((s, k) => (
            <motion.li
              key={k}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: k * 0.05 }}
              className="flex items-center gap-3 rounded-2xl bg-surface px-3 py-2.5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tile text-sm font-extrabold text-white">
                ✓
              </span>
              {s.pic && <Pic id={s.pic} className="h-10 w-10 shrink-0" />}
              <Markdown text={s.text} className="text-[0.98rem]" glossary={false} />
            </motion.li>
          ))}
          {screen.done_text && <p className="animate-pop pt-2 text-center font-extrabold text-tile">{screen.done_text}</p>}
        </motion.ol>
      )}
      {i > 0 && (
        <button type="button" onClick={() => go(-1)} className="mt-3 text-sm font-extrabold text-muted">
          ← {atList ? "Back to the steps" : "Previous step"}
        </button>
      )}
    </div>
  );
}

/** The prayer, move by move, with the figure animating between positions. */
export function PrayerScreen({ screen, ready, setNext }: ScreenProps<"prayer">) {
  const { madhab, gender } = use(ArtContext);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = screen.moves.length;
  const move = screen.moves[i];
  useEffect(() => {
    if (i === total - 1) {
      setNext?.(null);
      ready();
    } else
      setNext?.({
        label: "Next move",
        run: () => {
          setPlaying(false);
          setI((x) => Math.min(total - 1, x + 1));
        },
      });
  }, [i, total, ready, setNext]);
  useEffect(() => {
    if (!playing) return;
    if (i >= total - 1) {
      const t = setTimeout(() => setPlaying(false), 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI((x) => x + 1), 2600);
    return () => clearTimeout(t);
  }, [playing, i, total]);
  return (
    <div>
      <Prompt text={screen.title} sub={screen.intro} />
      <div className="rounded-3xl border-2 border-line border-b-[6px] border-b-line-deep bg-surface p-4">
        <PrayerFigure pose={move.pose} madhab={madhab} gender={gender} className="mx-auto h-56 w-full" />
        <div className="mt-1 flex items-center justify-between text-sm font-extrabold text-muted">
          <span>
            {i + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => {
              if (i === total - 1) setI(0);
              setPlaying((p) => !p);
            }}
            className="rounded-full bg-cobalt-soft px-3 py-1 text-cobalt"
          >
            {playing ? "Pause" : i === total - 1 ? "Watch again" : "▶ Play it all"}
          </button>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
          <motion.div className="h-full bg-cobalt" animate={{ width: `${((i + 1) / total) * 100}%` }} />
        </div>
      </div>
      <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 min-h-24">
        <Markdown text={move.text} className="text-[1.15rem] leading-snug" />
        {move.say && (
          <p className="mt-2 inline-block rounded-xl bg-tile-soft px-3 py-1.5 font-extrabold text-tile-deep">
            Say: <em>{move.say}</em>
          </p>
        )}
      </motion.div>
      {i > 0 && (
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setI((x) => Math.max(0, x - 1));
          }}
          className="text-sm font-extrabold text-muted"
        >
          ← Previous move
        </button>
      )}
      {i === total - 1 && screen.done_text && (
        <p className="animate-pop mt-3 text-center font-extrabold text-tile">{screen.done_text}</p>
      )}
    </div>
  );
}

export function PracticeScreen({
  screen,
  ready,
  onCarryForward,
}: ScreenProps<"practice"> & { onCarryForward?: (steps: string[]) => void }) {
  const [ticked, setTicked] = useState<Set<number>>(new Set());
  const all = ticked.size === screen.steps.length;
  return (
    <div>
      <Prompt
        text={screen.title}
        sub={
          screen.carry_forward
            ? "Tick the ones you'll keep. After Day 90 the app will remind you of them."
            : "Tick each one as you go."
        }
      />
      <ul className="space-y-2">
        {screen.steps.map((s, i) => {
          const on = ticked.has(i);
          return (
            <li key={i}>
              <button
                type="button"
                aria-pressed={on}
                data-state={on ? "right" : "idle"}
                onClick={() => {
                  const next = new Set(ticked);
                  if (on) next.delete(i);
                  else next.add(i);
                  setTicked(next);
                  ready();
                  if (screen.carry_forward) onCarryForward?.([...next].sort().map((k) => screen.steps[k]));
                }}
                className="opt flex items-start gap-3"
              >
                <motion.span
                  animate={on ? { scale: [1, 1.25, 1] } : {}}
                  aria-hidden
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-extrabold ${on ? "border-tile bg-tile text-white" : "border-line"}`}
                >
                  {on ? "✓" : ""}
                </motion.span>
                <Markdown text={s} inert />
              </button>
            </li>
          );
        })}
      </ul>
      {all && screen.done_text && <p className="animate-pop mt-4 text-center font-extrabold text-tile">{screen.done_text}</p>}
    </div>
  );
}

export type Resurfaced = { lessonId: string; title: string; text: string };

export function ReflectScreen({
  screen,
  ready,
  initial,
  resurfaced,
  onSave,
}: ScreenProps<"reflect"> & {
  initial?: { text: string; shared: boolean };
  resurfaced?: Resurfaced[];
  onSave?: (text: string, share: boolean) => Promise<void>;
}) {
  const [text, setText] = useState(initial?.text ?? "");
  const [share, setShare] = useState(initial?.shared ?? false);
  const [state, setState] = useState<"idle" | "saving" | "saved" | "error">(initial?.text ? "saved" : "idle");
  const canShare = screen.share_with_mentor === "optional" || screen.share_with_mentor === true;
  return (
    <div>
      <Pic id="icon:NotebookPen" className="mb-3 h-20 w-full" tone="dawn" />
      <Prompt text={screen.prompt} />
      {!!resurfaced?.length && (
        <div className="mb-4 space-y-2">
          {resurfaced.map((r) => (
            <div key={r.lessonId} className="rounded-2xl bg-dawn-soft px-4 py-3 text-[0.95rem]">
              <p className="text-sm font-extrabold text-dawn-deep">What you wrote: {r.title}</p>
              <p className="whitespace-pre-line">{r.text}</p>
            </div>
          ))}
        </div>
      )}
      <label className="sr-only" htmlFor={`reflect-${screen.n}`}>
        Your reflection
      </label>
      <textarea
        id={`reflect-${screen.n}`}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setState("idle");
        }}
        rows={5}
        maxLength={4000}
        className="w-full rounded-2xl border-2 border-line bg-surface p-4 font-semibold focus:border-cobalt focus:outline-none"
        placeholder="Write as much or as little as you like."
      />
      <p className="mt-2 text-sm text-muted">
        Private and encrypted. Nobody at the masjid can read it
        {canShare ? " unless you share it." : "."}
      </p>
      {canShare && (
        <label className="mt-3 flex items-center gap-3">
          <input
            type="checkbox"
            checked={share}
            onChange={(e) => setShare(e.target.checked)}
            className="h-5 w-5 accent-[var(--tile)]"
          />
          Share this with my mentor
        </label>
      )}
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          disabled={!text.trim() || state === "saving"}
          onClick={async () => {
            setState("saving");
            try {
              await onSave?.(text, share);
              setState("saved");
              ready();
            } catch {
              setState("error");
            }
          }}
          className="btn btn-dawn"
        >
          {state === "saving" ? "Saving…" : state === "saved" ? "Saved ✓" : "Save"}
        </button>
        <button type="button" onClick={ready} className="btn btn-ghost w-auto px-4">
          Skip
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-gentle">That didn&apos;t save. Check your connection and try again.</p>}
    </div>
  );
}

/** Ask and role-play screens count as done once the convert has opened the guide from them (remembered
 * for this visit, so coming back from the guide doesn't block them) or chosen to skip. */
function useVisited(key: string, ready: () => void) {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(key)) ready();
    } catch {}
  }, [key, ready]);
  return () => {
    try {
      sessionStorage.setItem(key, "1");
    } catch {}
  };
}

export function AskAiScreen({ screen, lessonId, returnTo, ready }: ScreenProps<"ask_ai">) {
  const from = returnTo ? `&from=${encodeURIComponent(returnTo)}` : "";
  const visit = useVisited(`visited:${lessonId}:${screen.n}`, ready);
  return (
    <div>
      <Pic id="icon:MessagesSquare" className="mb-3 h-24 w-full" />
      <Prompt text="Questions on your mind?" sub="Your guide knows where you are in the program. Tap one, or ask your own." />
      <div className="flex flex-col gap-3">
        {screen.chips.map((c) => (
          <Link key={c} href={`/guide?lesson=${lessonId}&q=${encodeURIComponent(c)}${from}`} onClick={visit} className="opt text-cobalt">
            {c}
          </Link>
        ))}
        <Link href={`/guide?lesson=${lessonId}${from}`} onClick={visit} className="py-2 text-center font-extrabold text-cobalt">
          Ask something else
        </Link>
        <button
          type="button"
          onClick={() => {
            visit();
            ready();
          }}
          className="py-1 text-center text-sm font-extrabold text-muted"
        >
          No questions right now
        </button>
      </div>
    </div>
  );
}

export function RoleplayScreen({ screen, lessonId, returnTo, ready }: ScreenProps<"roleplay">) {
  const from = returnTo ? `&from=${encodeURIComponent(returnTo)}` : "";
  const visit = useVisited(`visited:${lessonId}:${screen.n}`, ready);
  return (
    <div>
      <Pic id="icon:Theater" className="mb-3 h-24 w-full" tone="tile" />
      <Prompt text="Practice the conversation" />
      <div className="space-y-3 rounded-3xl border-2 border-line bg-surface p-5">
        <Markdown text={screen.setup} className="text-[1.05rem]" />
        <div className="rounded-2xl bg-tile-soft px-4 py-3">
          <p className="text-sm font-extrabold text-tile-deep">Your goal</p>
          <Markdown text={screen.goal} />
        </div>
      </div>
      <p className="mt-3 text-[0.95rem] text-muted">
        Your guide plays the other person, then tells you what went well. Stop any time.
      </p>
      <Link href={`/guide?lesson=${lessonId}&roleplay=${screen.n}${from}`} className="btn btn-primary mt-4">
        Start the practice
      </Link>
      <button
        type="button"
        onClick={() => {
          visit();
          ready();
        }}
        className="mt-3 w-full text-center text-sm font-extrabold text-muted"
      >
        Skip it for now
      </button>
    </div>
  );
}

export function DoTodayScreen({
  screen,
  logged,
  onLog,
  ready,
}: {
  screen: Of<"do_today">;
  logged: boolean;
  onLog?: (key: string) => Promise<void>;
  ready: () => void;
}) {
  const [done, setDone] = useState(logged);
  const [later, setLater] = useState(false);
  useEffect(() => {
    if (logged) ready();
  }, [logged, ready]);
  const [ticked, setTicked] = useState<Set<number>>(new Set());
  return (
    <div>
      <div className="flex items-center gap-4">
        <Pic id={screen.pic ?? "icon:Target"} className="h-20 w-20 shrink-0" tone="dawn" />
        <div>
          <p className="font-extrabold text-dawn-deep">Today&apos;s mission</p>
          <Markdown text={screen.text} className="font-display text-[1.3rem] leading-snug" />
        </div>
      </div>
      {!!screen.steps?.length && (
        <ul className="mt-5 space-y-2">
          {screen.steps.map((s, i) => {
            const on = ticked.has(i);
            return (
              <li key={i}>
                <button
                  type="button"
                  aria-pressed={on}
                  data-state={on ? "right" : "idle"}
                  onClick={() => setTicked((t) => new Set(on ? [...t].filter((x) => x !== i) : [...t, i]))}
                  className="opt flex items-start gap-3"
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-extrabold ${on ? "border-tile bg-tile text-white" : "border-line"}`}
                  >
                    {on ? "✓" : i + 1}
                  </span>
                  <Markdown text={s} inert />
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {screen.optional_extra && (
        <div className="mt-4 rounded-2xl bg-cobalt-soft p-4 text-[0.95rem]">
          <p className="font-extrabold text-cobalt">If you can</p>
          <Markdown text={screen.optional_extra} />
        </div>
      )}
      {/* An explicit choice moves them on: done now, or a promise for later today. */}
      {done ? (
        <p className="animate-pop mt-5 text-center font-extrabold text-tile">Done. May Allah accept it.</p>
      ) : later ? (
        <p className="animate-pop mt-5 text-center font-extrabold text-dawn-deep">Great. Come back and tick it off when it&apos;s done.</p>
      ) : (
        <div className="mt-5 space-y-2">
          {screen.log && (
            <button
              type="button"
              onClick={async () => {
                setDone(true);
                ready();
                await onLog?.(screen.log!);
              }}
              className="btn btn-dawn"
            >
              I&apos;ve done it
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setLater(true);
              ready();
            }}
            className={`btn ${screen.log ? "btn-ghost" : "btn-dawn"}`}
          >
            {screen.log ? "I'll do it later today" : "I'll do it today"}
          </button>
        </div>
      )}
    </div>
  );
}

/** Welcome-back quiz: questions from lessons they've finished, then what they remembered and the gaps,
 * each gap explained with a link back to its lesson. */
export function QuizScreen({ screen, ready, returnTo }: ScreenProps<"quiz">) {
  const items = screen.items ?? [];
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const done = i >= items.length;
  useEffect(() => {
    if (done) ready();
  }, [done, ready]);
  const base = returnTo?.startsWith("/preview") ? "/preview/" : "/lesson/";
  if (!items.length) return <Prompt text={screen.title} sub="Nothing to review yet. Let's keep going." />;
  if (done) {
    const right = results.filter(Boolean).length;
    const gaps = items.filter((_, k) => !results[k]);
    const strong = items.filter((_, k) => results[k]);
    return (
      <div>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-[10px] border-tile bg-surface"
            style={{ borderColor: right / items.length >= 0.7 ? "var(--tile)" : "var(--dawn)" }}
          >
            <span className="font-display text-4xl">
              {right}/{items.length}
            </span>
          </motion.div>
          <p className="mt-3 font-display text-2xl">
            {gaps.length === 0 ? "You remembered it all!" : right >= items.length / 2 ? "Most of it is still there." : "A refresher will help."}
          </p>
          <p className="text-muted">That&apos;s normal after time away. Here&apos;s where you stand.</p>
        </div>
        {!!gaps.length && (
          <div className="mt-6">
            <p className="mb-2 font-extrabold text-dawn-deep">Worth a refresher</p>
            <div className="space-y-3">
              {gaps.map((g) => {
                const best = g.options.find((o) => o.correct);
                return (
                  <motion.div key={g.lessonId} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border-2 border-dawn bg-dawn-soft p-4">
                    <p className="text-sm font-extrabold text-dawn-deep">
                      {g.day ? `Day ${g.day} · ` : ""}
                      {g.lessonTitle}
                    </p>
                    <Markdown text={g.prompt} className="mt-1 font-bold" glossary={false} />
                    {best && (
                      <p className="mt-1">
                        <span className="font-extrabold text-tile-deep">Answer: </span>
                        {plain(best.text)}
                      </p>
                    )}
                    {best?.feedback && <Markdown text={stripLead(best.feedback)} className="mt-1 text-[0.95rem] text-muted" glossary={false} />}
                    <Link href={`${base}${g.lessonId}`} className="mt-2 inline-block font-extrabold text-cobalt underline">
                      Revisit this lesson
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
        {!!strong.length && (
          <div className="mt-6">
            <p className="mb-2 font-extrabold text-tile-deep">Still strong</p>
            <ul className="space-y-1.5">
              {strong.map((g) => (
                <li key={g.lessonId} className="flex items-center gap-2 text-[0.95rem]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tile text-xs font-extrabold text-white">✓</span>
                  {g.day ? `Day ${g.day}: ` : ""}
                  {g.lessonTitle}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  const it = items[i];
  const answered = picked !== null;
  return (
    <div>
      <Prompt text={screen.title} sub={screen.intro && i === 0 ? screen.intro : `Question ${i + 1} of ${items.length}`} />
      <div className="mb-4 flex gap-1.5" aria-hidden>
        {items.map((_, k) => (
          <span key={k} className={`h-2 flex-1 rounded-full ${k < i ? (results[k] ? "bg-tile" : "bg-dawn") : k === i ? "bg-cobalt" : "bg-line"}`} />
        ))}
      </div>
      <p className="mb-1 text-sm font-extrabold text-muted">{it.day ? `From Day ${it.day}` : "From your lessons"}</p>
      <Markdown key={i} text={it.prompt} className="mb-4 font-display text-[1.4rem] leading-snug" glossary={false} />
      <div className="space-y-3">
        {it.options.map((o, k) => (
          <button
            key={`${i}-${k}`}
            type="button"
            disabled={answered}
            data-state={!answered ? "idle" : o.correct ? "right" : picked === k ? "wrong" : "dim"}
            onClick={() => {
              setPicked(k);
              setResults((r) => [...r, !!o.correct]);
            }}
            className="opt"
          >
            <Markdown text={o.text} inert />
          </button>
        ))}
      </div>
      {answered && (
        <button
          type="button"
          onClick={() => {
            setPicked(null);
            setI((x) => x + 1);
          }}
          className="btn btn-cobalt mt-5"
        >
          {i === items.length - 1 ? "See where I stand" : "Next question"}
        </button>
      )}
    </div>
  );
}

export { WidgetScreen } from "./widgets";
