"use client";
// The lesson player, Duolingo-style: a thick progress bar, one screen at a time sliding in, a Check
// button for questions with a feedback sheet that rises from the bottom, then a celebration and the
// streak screen. The current screen lives in the URL (?s=), so leaving for the guide and coming back
// returns to the same screen (Checkpoint 4, bug B1).
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { RenderedLesson, RenderedScreen } from "@/lib/content/render";
import type { CheckItem, Citation, GlossaryEntry } from "@/lib/content/types";
import { Markdown } from "../Markdown";
import { Sheet } from "../Sheet";
import { ArtContext } from "../art/Pic";
import { LessonExtrasProvider } from "./extras";
import { Celebration } from "./Finish";
import type { Celebration as CelebrationData } from "@/lib/celebration";
import { StreakScreen } from "../celebrate/Streak";
import { BadgeScreen, MilestoneScreen } from "../celebrate/Milestone";
import { ModeContext, type Mode } from "../celebrate/mode";
import { setIgnite } from "../celebrate/fx";
import * as S from "./screens";
import type { PracticeScreen } from "@/lib/practice/mistakes-session";

export type PlayerApi = {
  saveScreen?: (n: number) => Promise<void>;
  log?: (key: string) => Promise<void>;
  saveReflection?: (n: number, text: string, share: boolean) => Promise<void>;
  saveCarryForward?: (steps: string[]) => Promise<void>;
  review?: (lessonId: string, checkIndex: number, correct: boolean) => Promise<void>;
  /** Practice → Mistakes: `ref` is `check:N` or `screen:N`. */
  answer?: (lessonId: string, ref: string, correct: boolean) => Promise<void>;
  /** Saves the completion; may return the celebration worked out on the server at that moment. */
  complete?: () => Promise<CelebrationData | null | void>;
  setGender?: (g: "male" | "female") => Promise<void>;
};

export type ReviewItem = { lessonId: string; lessonTitle: string; checkIndex: number; item: CheckItem };

type Step =
  | { kind: "gender" }
  | { kind: "screen"; screen: RenderedScreen; lessonId?: string }
  | { kind: "prayer-phrase" }
  | { kind: "review"; review: ReviewItem }
  | { kind: "finish" }
  | { kind: "streak" }
  | { kind: "milestone" }
  | { kind: "badge"; n: number };

const ENDING = new Set(["finish", "streak", "milestone", "badge"]);

/** Screens answered with the Check button. */
const QUESTIONS = new Set(["choice", "multi", "scenario", "fill", "tap_words", "order"]);
/** Every other interactive screen must be done (or explicitly skipped) before Continue (Checkpoint 4b). */
const GATED = new Set(["steps", "prayer", "sort", "match", "reveal", "phrase", "prayer-phrase", "practice", "reflect", "do_today", "ask_ai", "roleplay", "quiz"]);

export function LessonPlayer({
  lesson,
  citations,
  glossary,
  reviews = [],
  screens = [],
  reflections = {},
  resurfaced = {},
  loggedKeys = [],
  startAt = 0,
  quickExitUrl,
  api = {},
  preview = false,
  exitHref = "/today",
  askGender = false,
  celebration: celebrationProp,
  practice = false,
}: {
  lesson: RenderedLesson;
  citations: Record<string, Citation>;
  glossary: GlossaryEntry[];
  reviews?: ReviewItem[];
  /** Practice: single screens from other lessons (mistakes to retry, drills), played before `reviews`. */
  screens?: PracticeScreen[];
  reflections?: Record<number, { text: string; shared: boolean }>;
  resurfaced?: Record<number, S.Resurfaced[]>;
  loggedKeys?: string[];
  startAt?: number;
  quickExitUrl?: string;
  api?: PlayerApi;
  preview?: boolean;
  exitHref?: string;
  askGender?: boolean;
  /** What follows the finish: streak, milestone and badge screens (lib/celebration.ts). */
  celebration?: CelebrationData;
  /** A Practice-tab session: only the review questions, no lesson screens. */
  practice?: boolean;
}) {
  const router = useRouter();
  const params = useSearchParams();
  // Frozen at first render: saving the completion revalidates the page, and the fresh props would say
  // "already finished, nothing to celebrate" while the convert is still on the way through the screens.
  const [celebration, setCelebration] = useState(celebrationProp);
  const steps = useMemo<Step[]>(() => {
    const s: Step[] = [];
    if (askGender) s.push({ kind: "gender" });
    if (!practice) {
      for (const screen of lesson.screens) s.push({ kind: "screen", screen });
      // Spec §4.4: the day's prayer phrase comes after the lesson's own screens.
      if (lesson.prayerPhrase) s.push({ kind: "prayer-phrase" });
    } else {
      for (const p of screens) s.push({ kind: "screen", screen: p.screen, lessonId: p.lessonId });
    }
    for (const r of reviews) s.push({ kind: "review", review: r });
    s.push({ kind: "finish" });
    if (celebration?.streak) s.push({ kind: "streak" });
    if (celebration?.milestone) s.push({ kind: "milestone" });
    celebration?.badges.forEach((_, n) => s.push({ kind: "badge", n }));
    return s;
  }, [lesson, reviews, screens, askGender, celebration, practice]);

  const fromUrl = Number(params.get("s"));
  const [i, setI] = useState(() => Math.min(fromUrl > 0 ? fromUrl : startAt, steps.length - 1));
  // Reopened (a reload) on the finish or a celebration screen: it was already saved, don't count it again.
  const [reopenedAtEnd] = useState(() => ENDING.has(steps[Math.min(i, steps.length - 1)].kind));
  const complete = useMemo(
    () =>
      api.complete && !reopenedAtEnd
        ? async () => {
            const fresh = await api.complete!();
            if (fresh) setCelebration(fresh);
          }
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reopenedAtEnd],
  );
  const [dir, setDir] = useState(1);
  const [readySet, setReadySet] = useState<Set<number>>(new Set());
  const [checkFn, setCheckFn] = useState<(() => S.Result) | null>(null);
  const [nextAction, setNextAction] = useState<S.NextAction>(null);
  const [result, setResult] = useState<S.Result | null>(null);
  const [score, setScore] = useState({ answered: 0, right: 0, combo: 0 });
  const [comboFlash, setComboFlash] = useState<number | null>(null);
  const [sources, setSources] = useState(false);
  const [startedAt] = useState(() => Date.now());
  // Celebration motion: calm (fades only) for the setting or reduced motion; a tap skips to the end.
  const reduced = useReducedMotion();
  const [skipped, setSkipped] = useState<Set<number>>(new Set());
  const answered = useRef<Set<number>>(new Set());
  const pathname = usePathname();
  const returnTo = `${pathname}?s=${i}`;
  const step = steps[Math.min(i, steps.length - 1)];
  const type = step.kind === "screen" ? step.screen.type : step.kind;
  const widget = step.kind === "screen" && step.screen.type === "widget" ? step.screen.widget : null;
  const isQuestion = QUESTIONS.has(type) || step.kind === "review" || widget === "rakahs" || widget === "rows";
  const gated =
    GATED.has(type) ||
    (step.kind === "screen" && step.screen.type === "learn" && !!step.screen.bubbles?.length) ||
    (widget !== null && widget !== "rakahs" && widget !== "rows");

  // Keep the screen in the URL (so Back from the guide lands here) and on the server.
  useEffect(() => {
    try {
      const u = new URL(window.location.href);
      u.searchParams.set("s", String(i));
      window.history.replaceState(window.history.state, "", u);
    } catch {}
    if (step.kind === "screen") void api.saveScreen?.(step.screen.n);
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i]);

  const ready = useCallback(() => setReadySet((r) => (r.has(i) ? r : new Set(r).add(i))), [i]);
  const setCheck = useCallback((fn: (() => S.Result) | null) => setCheckFn(() => fn), []);
  const setNext = useCallback((n: S.NextAction) => setNextAction(n), []);

  const go = (d: number) => {
    setDir(d);
    setResult(null);
    setCheckFn(null);
    setNextAction(null);
    setI((x) => Math.max(0, Math.min(steps.length - 1, x + d)));
  };

  const runCheck = () => {
    if (!checkFn) return;
    const r = checkFn();
    setResult(r);
    if (step.kind === "review") void api.review?.(step.review.lessonId, step.review.checkIndex, r.good);
    // Only the first Check press on a step counts toward Mistakes.
    if (!answered.current.has(i)) {
      answered.current.add(i);
      if (step.kind === "review") void api.answer?.(step.review.lessonId, `check:${step.review.checkIndex}`, r.good)?.catch(() => {});
      else if (step.kind === "screen") void api.answer?.(step.lessonId ?? lesson.id, `screen:${step.screen.n}`, r.good)?.catch(() => {});
    }
    const combo = r.good ? score.combo + 1 : 0;
    setScore({ answered: score.answered + 1, right: score.right + (r.good ? 1 : 0), combo });
    if (combo >= 3) setComboFlash(combo);
    try {
      navigator.vibrate?.(r.good ? 15 : [20, 40, 20]);
    } catch {}
  };

  useEffect(() => {
    if (comboFlash === null) return;
    const t = setTimeout(() => setComboFlash(null), 1400);
    return () => clearTimeout(t);
  }, [comboFlash]);

  const canContinue = !gated || readySet.has(i);
  const counted = steps.filter((s) => !ENDING.has(s.kind) && s.kind !== "gender").length;
  const doneSoFar = steps.slice(0, i).filter((s) => s.kind !== "gender").length + (result ? 1 : 0);
  const progress = Math.min(1, doneSoFar / Math.max(1, counted));
  const ending = ENDING.has(step.kind);
  const mode: Mode = ending && skipped.has(i) ? "instant" : celebration?.calm || reduced ? "calm" : "full";
  const leave = () => {
    if (celebration && !preview && exitHref === "/today")
      setIgnite({ xpFrom: celebration.xpBefore, xpTo: celebration.xpBefore + celebration.xpGain, lit: !!celebration.streak });
    window.location.href = exitHref;
  };

  return (
    <ArtContext value={{ madhab: lesson.madhab, gender: lesson.gender }}>
      <LessonExtrasProvider glossary={glossary} citations={citations}>
        <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
          {!ending && (
            <header className="flex items-center gap-3 py-2">
              <Link href={exitHref} aria-label="Leave the lesson" className="rounded-full p-1.5 text-muted">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  aria-hidden
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </Link>
              <div
                className="relative h-4 flex-1 overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                aria-label="Lesson progress"
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-full bg-tile"
                  initial={false}
                  animate={{ width: `${Math.max(4, progress * 100)}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  <span className="absolute top-1 right-2 left-2 h-1 rounded-full bg-white/35" />
                </motion.div>
              </div>
              <AnimatePresence>
                {comboFlash !== null && (
                  <motion.span
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="rounded-full bg-dawn px-2.5 py-0.5 text-sm font-black whitespace-nowrap text-[#3a2604]"
                  >
                    {comboFlash} in a row!
                  </motion.span>
                )}
              </AnimatePresence>
              {quickExitUrl && (
                <a
                  href={quickExitUrl}
                  rel="noreferrer"
                  className="rounded-full border-2 border-line px-3 py-0.5 text-sm font-extrabold text-muted"
                  onClick={() => {
                    try {
                      history.replaceState(null, "", "/");
                    } catch {}
                  }}
                >
                  Exit
                </a>
              )}
            </header>
          )}
          {lesson.status.startsWith("draft") && i === 0 && !practice && (
            <p className="mt-1 self-start rounded-full bg-dawn-soft px-3 py-1 text-xs font-extrabold text-dawn-deep">
              Draft, pending scholar review
            </p>
          )}
          {preview && <p className="mt-1 text-xs text-muted">Preview mode: nothing is saved.</p>}

          <main className="relative flex-1 py-5" aria-live="polite">
            {/* Entrance only: the next screen never waits on an exit animation to finish. */}
            <ModeContext value={mode}>
            <motion.div
              key={`${i}${mode === "instant" ? "!" : ""}`}
              onPointerDown={ending && step.kind !== "finish" && !skipped.has(i) ? () => setSkipped((x) => new Set(x).add(i)) : undefined}
              initial={mode === "instant" ? false : { x: dir * 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <StepView
                step={step}
                lesson={lesson}
                ready={ready}
                setCheck={setCheck}
                setNext={setNext}
                api={{ ...api, complete }}
                reflections={reflections}
                resurfaced={resurfaced}
                loggedKeys={loggedKeys}
                returnTo={returnTo}
                score={score}
                startedAt={startedAt}
                celebration={celebration}
                practice={practice}
                onGender={async (g) => {
                  if (g === null) {
                    document.cookie = "gender_ask=skip; path=/; max-age=31536000; samesite=lax";
                    go(1);
                    return;
                  }
                  await api.setGender?.(g);
                  router.refresh();
                }}
                onSources={() => setSources(true)}
              />
            </motion.div>
            </ModeContext>
          </main>

          {step.kind !== "gender" && (
            <footer className="sticky bottom-0 -mx-4 bg-bg px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {ending ? (
                <button
                  type="button"
                  onClick={() => (i < steps.length - 1 ? go(1) : leave())}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              ) : isQuestion && !result ? (
                <button type="button" disabled={!checkFn} onClick={runCheck} className="btn btn-primary">
                  Check
                </button>
              ) : (
                <div className="flex gap-3">
                  {i > 0 && !isQuestion && (
                    <button type="button" onClick={() => go(-1)} aria-label="Back" className="btn btn-ghost w-auto px-5">
                      ←
                    </button>
                  )}
                  {nextAction && !canContinue ? (
                    <button type="button" onClick={nextAction.run} className="btn btn-cobalt">
                      {nextAction.label}
                    </button>
                  ) : (
                    <button type="button" disabled={!canContinue} onClick={() => go(1)} className="btn btn-primary">
                      Continue
                    </button>
                  )}
                </div>
              )}
            </footer>
          )}
        </div>

        <FeedbackSheet result={result} onContinue={() => go(1)} />
        <Sheet open={sources} onClose={() => setSources(false)} title="Sources">
          <Markdown text={lesson.sourcesMd} className="text-[0.9rem] text-muted" glossary={false} />
        </Sheet>
      </LessonExtrasProvider>
    </ArtContext>
  );
}

const PRAISE = ["Nicely done!", "That's it!", "Masha'Allah!", "Exactly!", "Well done!"];

/** Duolingo's answer banner: slides up over the footer with the verdict and a Continue button. */
function FeedbackSheet({ result, onContinue }: { result: S.Result | null; onContinue: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (result?.good) setN((x) => x + 1);
  }, [result]);
  return (
    <AnimatePresence>
      {result && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          role="status"
          className={`fixed inset-x-0 bottom-0 z-40 ${result.good ? "bg-tile-soft" : "bg-gentle-soft"}`}
        >
          <div className="mx-auto max-w-lg px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.6, delay: 0.05 }}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xl font-black text-white ${result.good ? "bg-tile" : "bg-gentle"}`}
                aria-hidden
              >
                {result.good ? "✓" : "!"}
              </motion.span>
              <p className={`font-display text-2xl ${result.good ? "text-tile-deep" : "text-gentle"}`}>
                {result.good ? PRAISE[n % PRAISE.length] : "Not quite"}
              </p>
            </div>
            {result.answer && (
              <div className="mt-2">
                <p className="font-extrabold text-gentle">Best answer:</p>
                <Markdown text={result.answer} className="whitespace-pre-line text-[0.98rem]" glossary={false} />
              </div>
            )}
            {result.body && (
              <Markdown text={result.body} className="mt-2 max-h-40 overflow-y-auto text-[0.98rem]" glossary={false} />
            )}
            <button
              type="button"
              onClick={onContinue}
              autoFocus
              className={`btn mt-4 ${result.good ? "btn-primary" : "btn-gentle"}`}
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepView({
  step,
  lesson,
  ready,
  setCheck,
  setNext,
  api,
  reflections,
  resurfaced,
  loggedKeys,
  returnTo,
  score,
  startedAt,
  celebration,
  practice,
  onGender,
  onSources,
}: {
  step: Step;
  lesson: RenderedLesson;
  ready: () => void;
  setCheck: (fn: (() => S.Result) | null) => void;
  setNext: (n: S.NextAction) => void;
  api: PlayerApi;
  reflections: Record<number, { text: string; shared: boolean }>;
  resurfaced: Record<number, S.Resurfaced[]>;
  loggedKeys: string[];
  returnTo?: string;
  score: { answered: number; right: number };
  startedAt: number;
  celebration?: CelebrationData;
  practice: boolean;
  onGender: (g: "male" | "female" | null) => void;
  onSources: () => void;
}) {
  if (step.kind === "gender") return <GenderAsk onChoose={onGender} />;
  if (step.kind === "prayer-phrase")
    return <S.PhraseScreen phrase={lesson.prayerPhrase!} ready={ready} label="Today's prayer phrase" />;
  if (step.kind === "review")
    return (
      <div>
        <p className="mb-3 inline-block rounded-full bg-cobalt-soft px-3 py-1 text-sm font-extrabold text-cobalt">
          Review: {step.review.lessonTitle}
        </p>
        <S.ChoiceScreen
          screen={{
            n: 1000 + step.review.checkIndex,
            type: "choice" as const,
            prompt: step.review.item.prompt,
            options: step.review.item.options,
          }}
          lessonId={step.review.lessonId}
          ready={ready}
          setCheck={setCheck}
        />
      </div>
    );
  if (step.kind === "finish")
    return (
      <Celebration
        title={
          practice
            ? "Practice complete!"
            : lesson.day && [7, 30, 60, 90].includes(lesson.day)
              ? `Day ${lesson.day} complete!`
              : "Lesson complete!"
        }
        closing={practice ? null : lesson.closing}
        score={score}
        startedAt={startedAt}
        onComplete={api.complete}
        onSources={practice ? undefined : onSources}
        xpGain={celebration?.xpGain ?? 0}
        alreadyCounted={celebration?.alreadyCounted}
      />
    );
  if (step.kind === "streak") return <StreakScreen s={celebration!.streak!} sounds={celebration!.sounds} />;
  if (step.kind === "milestone") return <MilestoneScreen m={celebration!.milestone!} sounds={celebration!.sounds} />;
  if (step.kind === "badge") return <BadgeScreen badge={celebration!.badges[step.n]} />;

  const s = step.screen;
  const common = { ready, setCheck, setNext, lessonId: lesson.id, returnTo };
  switch (s.type) {
    case "hook":
      return <S.HookScreen screen={s} title={lesson.title} day={lesson.day} />;
    case "learn":
      return <S.LearnScreen screen={s} ready={ready} setNext={setNext} />;
    case "takeaway":
      return <S.TakeawayScreen screen={s} />;
    case "closing":
      return null; // shown on the celebration screen
    case "choice":
      return <S.ChoiceScreen screen={s} {...common} />;
    case "multi":
      return <S.MultiScreen screen={s} {...common} />;
    case "scenario":
      return <S.ScenarioScreen screen={s} {...common} />;
    case "fill":
      return <S.FillScreen screen={s} {...common} />;
    case "tap_words":
      return <S.TapWordsScreen screen={s} {...common} />;
    case "order":
      return <S.OrderScreen screen={s} {...common} />;
    case "match":
      return <S.MatchScreen screen={s} {...common} />;
    case "sort":
      return <S.SortScreen screen={s} {...common} />;
    case "reveal":
      return <S.RevealScreen screen={s} {...common} />;
    case "phrase":
      return <S.PhraseScreen phrase={s} ready={ready} />;
    case "steps":
      return <S.StepsScreen screen={s} {...common} />;
    case "prayer":
      return <S.PrayerScreen screen={s} {...common} />;
    case "widget":
      return <S.WidgetScreen screen={s} {...common} />;
    case "quiz":
      return <S.QuizScreen screen={s} {...common} />;
    case "practice":
      return <S.PracticeScreen screen={s} {...common} onCarryForward={(st) => void api.saveCarryForward?.(st)} />;
    case "reflect":
      return (
        <S.ReflectScreen
          screen={s}
          {...common}
          initial={reflections[s.n]}
          resurfaced={resurfaced[s.n]}
          onSave={api.saveReflection ? (t, share) => api.saveReflection!(s.n, t, share) : async () => {}}
        />
      );
    case "ask_ai":
      return <S.AskAiScreen screen={s} {...common} />;
    case "roleplay":
      return <S.RoleplayScreen screen={s} {...common} />;
    case "do_today":
      return <S.DoTodayScreen screen={s} logged={!!s.log && loggedKeys.includes(s.log)} onLog={api.log} ready={ready} />;
  }
}

/** Asked once, the first time a lesson has guidance that differs for men and women. */
function GenderAsk({ onChoose }: { onChoose: (g: "male" | "female" | null) => void }) {
  const [busy, setBusy] = useState(false);
  const pick = (g: "male" | "female" | null) => {
    setBusy(true);
    onChoose(g);
  };
  return (
    <div className="pt-6">
      <h1 className="font-display text-[1.8rem] leading-tight">One quick question</h1>
      <p className="mt-3 text-lg text-muted">
        A few things in prayer are done a little differently by men and women, so we only show you what applies to you.
      </p>
      <div className="mt-6 space-y-3">
        <button type="button" disabled={busy} onClick={() => pick("male")} className="btn btn-ghost">
          I&apos;m a man
        </button>
        <button type="button" disabled={busy} onClick={() => pick("female")} className="btn btn-ghost">
          I&apos;m a woman
        </button>
        <button type="button" disabled={busy} onClick={() => pick(null)} className="w-full py-3 font-extrabold text-muted">
          I&apos;d rather not say
        </button>
      </div>
      <p className="mt-4 text-sm text-muted">Private. You can change it any time in Settings.</p>
    </div>
  );
}
