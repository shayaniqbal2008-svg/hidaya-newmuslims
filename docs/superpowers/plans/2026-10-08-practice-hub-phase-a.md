# Practice hub, Phase A: Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Open all 90 days; turn Practice into a hub with Review, Mistakes to retry, and Words / Prayer phrases / Du'as & short surahs drills.

**Architecture:** Day access moves to a pure `lib/access.ts`. Wrong answers are written to a new private table by one server action, called from the existing LessonPlayer Check flow. Mistake retries and drills are played by the existing LessonPlayer in practice mode, extended to accept rendered screens as well as Check items. Drills are generated on the server from compiled content (no new lesson files).

**Tech Stack:** Next.js 16 (app router, server actions), Supabase (Postgres + RLS), Vitest, PGlite for RLS tests, playwright-core (scratchpad) for end-to-end.

**Spec:** `docs/superpowers/specs/2026-10-07-practice-hub-design.md` (§1–§4, §7 Phase A, §8)

## Global Constraints
- Streak = one finished *daily* lesson per day (unchanged). Drills and mistake sessions never change the streak or XP.
- Mistakes are private: own rows only; no view, function or staff role reads them.
- A mistake clears after **2 right in a row**; a wrong answer resets the run to 0.
- Drills include only items taught in lessons the convert has finished.
- Arabic and Qur'an text comes from `content/citations.json` and lesson `prayerPhrase` data only; never generated.
- Copy on Today: "Want more? Every day is open. Go at the pace that feels right."
- No hearts, no shaming copy; "not quite" in amber (existing feedback sheet).

## Review Focus
1. **A stored mistake whose screen no longer renders** (content changed, convert changed gender, masjid changed school, so the screen is filtered out): the session skips it silently, and the Mistakes count on Practice counts only renderable ones. Test in Task 4.
2. **Arabic in drill screens shows right-to-left and isn't split mid-word** (fill and choice options with Arabic): the drill marks Arabic strings so screens render them `dir="rtl"`. Test in Task 5 (builder output) and checked by eye in Task 7.
3. **Answering the same question wrong twice in one lesson** (Check → "Try again" flows) counts once per Check press; no duplicate rows (primary key). Test in Task 2.
4. **A convert with nothing finished** opens Practice: no Mistakes card, drills say "Finish Day N to unlock" with no crash. Test in Task 6.
5. **Opening any day directly by URL** (`/lesson/day-90` on a fresh account) works; unknown ids (`day-91`, `day-00`) still 404/redirect. Test in Task 1.

---

### Task 1: Open all 90 days

**Files:**
- Create: `lib/access.ts`, `lib/access.test.ts`
- Modify: `lib/dal.ts:104-137` (getProgress sets `unlockedThrough = 90` for everyone; `canOpen` re-exported from `lib/access.ts`), `app/(convert)/today/page.tsx:30-39,60-66,91-95`

**Interfaces:**
- Produces: `canOpen(id: string, p: { completed: Record<string,string>; isDemo: boolean; schedule: { main: string|null; sideCards: string[] } }): boolean` in `lib/access.ts`.

- [ ] **Step 1: Failing test** `lib/access.test.ts`: `canOpen("day-40", fresh)` → true; `canOpen("day-90", fresh)` → true; `canOpen("day-91", fresh)` → false; `canOpen("day-00", fresh)` → false; `canOpen("ramadan-1", fresh)` → false unless `schedule.main === "ramadan-1"` or in `sideCards`; completed modules → true. `fresh = { completed: {}, isDemo: false, schedule: { main: "day-01", sideCards: [] } }`.
- [ ] **Step 2:** `npx vitest run lib/access.test.ts` → FAIL (module missing).
- [ ] **Step 3:** Implement `canOpen` (days 1–90 always open; modules as today). In `getProgress` set `schedule.unlockedThrough = 90` for everyone (remove the demo-only branch). Today page: drop the "tomorrow" lock state; replace the "Days 1, 2 and 3 are all open" banner with the Global Constraints copy; demo banner becomes "Demo: no invite link needed. Tap any tile to open it; the seasonal lessons are at the bottom."
- [ ] **Step 4:** `npx vitest run` → all pass (schedule tests unchanged).
- [ ] **Step 5:** Commit `feat: open all 90 days`.

### Task 2: Mistakes table, bookkeeping and privacy

**Files:**
- Create: `supabase/migrations/20261008000001_practice_mistakes.sql`, `lib/mistakes.ts`, `lib/mistakes.test.ts`
- Modify: `supabase/tests/rls.test.ts` (new describe block)

**Interfaces:**
- Produces table `practice_mistakes(convert_id uuid references converts on delete cascade, lesson_id text, ref text check (ref ~ '^(check|screen):[0-9]{1,3}$'), wrong_count int default 1, right_streak int default 0, last_wrong_at timestamptz default now(), cleared_at timestamptz, primary key (convert_id, lesson_id, ref))`, RLS on, policy "own rows" for all `using/with check (convert_id = auth.uid())`.
- Produces `type MistakeRow = { wrong_count: number; right_streak: number; cleared_at: string | null }` and `nextMistake(prev: MistakeRow | null, correct: boolean, now: Date): MistakeRow | null` (null = nothing to write: correct answer with no open mistake).

- [ ] **Step 1: Failing tests** `lib/mistakes.test.ts`: null+wrong → `{wrong_count:1,right_streak:0,cleared_at:null}`; null+right → null; open+right → right_streak 1, not cleared; right_streak 1 + right → cleared_at = now ISO; open+wrong → wrong_count+1, right_streak 0; cleared+wrong → reopened (cleared_at null, right_streak 0, wrong_count+1); cleared+right → null.
- [ ] **Step 2: Failing RLS tests** in `rls.test.ts`, describe "practice mistakes are the convert's alone": convertA inserts a row; convertA reads 1; convertC, adminX, mentorX, leadX each read 0; convertC can't insert with convert_id = convertA (error); anon reads 0.
- [ ] **Step 3:** `npx vitest run lib/mistakes.test.ts && npm run test:db` → FAIL.
- [ ] **Step 4:** Write migration and `nextMistake`.
- [ ] **Step 5:** Run both → PASS (all existing privacy tests still pass).
- [ ] **Step 6:** Commit `feat: private practice_mistakes table`. **Apply the migration to the live Supabase project only after Shayan's OK** (hub rule: changing the live database); give him the SQL editor steps or `npx supabase db push`.

### Task 3: Record answers from lessons and reviews

**Files:**
- Modify: `app/(convert)/actions.ts` (new action), `components/lesson/LessonPlayer.tsx:19-27,131-142`, `app/(convert)/lesson/[id]/page.tsx` (api), `app/(convert)/practice/session/page.tsx` (api)

**Interfaces:**
- Consumes: `nextMistake` (Task 2).
- Produces: server action `recordAnswer(lessonId: string, ref: string, correct: boolean): Promise<void>` (zod: lessonId `/^[a-z0-9-]{3,40}$/`, ref `/^(check|screen):\d{1,3}$/`; reads the row, applies `nextMistake`, upserts; ignores null). `PlayerApi.answer?: (lessonId: string, ref: string, correct: boolean) => Promise<void>`.

- [ ] **Step 0:** Add optional `lessonId?: string` to the `{ kind: "screen" }` Step type (Task 4 fills it for practice screens; lesson screens leave it unset).
- [ ] **Step 1:** In `runCheck`, after computing `r`: for `step.kind === "review"` call `api.answer?.(lessonId, \`check:${checkIndex}\`, r.good)`; for `step.kind === "screen"` on a graded screen (QUESTIONS or rakahs/rows widgets) call `api.answer?.(step.lessonId ?? lesson.id, \`screen:${step.screen.n}\`, r.good)`. Only the first press per step counts (track pressed steps in a `useRef<Set<number>>`), per Review Focus 3.
- [ ] **Step 2:** Wire `answer: recordAnswer` in the lesson page and the review session (not in drills).
- [ ] **Step 3:** `npm run typecheck && npx vitest run` → clean. (Behaviour is proved end to end in Task 7.)
- [ ] **Step 4:** Commit `feat: record wrong answers as practice mistakes`.

### Task 4: Mistakes session

**Files:**
- Create: `lib/practice/mistakes-session.ts`, `lib/practice/mistakes-session.test.ts`
- Modify: `components/lesson/LessonPlayer.tsx` (practice screens), `app/(convert)/practice/session/page.tsx` (`?mode=mistakes`)

**Interfaces:**
- Produces: `type PracticeScreen = { lessonId: string; lessonTitle: string; screen: RenderedScreen }`; LessonPlayer prop `screens?: PracticeScreen[]` (practice mode pushes them as `{ kind: "screen", screen, lessonId }` steps, before `reviews`).
- Produces: `buildMistakeSession(rows: { lesson_id: string; ref: string }[], ctx: RenderContext, limit = 8): { screens: PracticeScreen[]; reviews: ReviewItem[]; lessonIds: string[] }` — oldest first as given; `check:N` → ReviewItem from `renderLesson(...).check[N]`; `screen:N` → the rendered screen with that `n`; anything that doesn't render (missing lesson, filtered screen, index out of range) is skipped.

- [ ] **Step 1: Failing tests:** a `screen:N` ref for a real graded screen of `day-03` returns it; a ref to a `{men}`-audience screen with a female ctx is skipped; `check:99` skipped; unknown lesson skipped; limit honoured.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS.
- [ ] **Step 5:** Session page `?mode=mistakes`: select open rows (`cleared_at is null`) ordered by `last_wrong_at`, build, merge `lessonExtras` of every `lessonIds` entry for citations/glossary, pass `api={{ answer: recordAnswer }}`, redirect to `/practice` if empty.
- [ ] **Step 6:** Commit `feat: retry mistakes in practice`.

### Task 5: Drills from existing content

**Files:**
- Create: `lib/practice/drills.ts`, `lib/practice/drills.test.ts`, `app/(convert)/practice/drill/[kind]/page.tsx`

**Interfaces:**
- Produces: `type DrillKind = "words" | "phrases" | "surahs"`; `taughtTerms(completed: string[]): GlossaryEntry[]` (firstTaught "Day N" → `day-NN`, module ids as is); `buildDrill(kind: DrillKind, completed: string[], seed: string): RenderedScreen[]`; `drillAvailable(kind, completed): { count: number; unlockHint: string | null }` (hint e.g. "Finish Day 8 to unlock").
- Words: 5 terms (seeded pick) → one `reveal` screen (front: arabic + term, back: meaning) then one `match` screen (term → meaning).
- Phrases: from finished days' `prayerPhrase` (Days 8–30), up to 4 → for each a `phrase` screen then a `choice` "What does *translit* mean?" (3 options: right meaning + 2 other phrases' meanings); plus one `tap_words` putting the translit words in order.
- Surahs: `SURAHS = [{ id: "fatiha", title: "Al-Fatiha", keys: Q 1:1–7, taughtIn: "day-16" }, { id: "ikhlas", title: "Al-Ikhlas", keys: Q 112:1–4, taughtIn: "day-18" }]` (confirm `taughtIn` against the Outline phrase track before coding) → per unlocked surah a `reveal` (one card per verse: Arabic front, English back) and two `fill` screens (one Arabic word blanked, 3 Arabic options from the same surah). Arabic strings wrapped so screens render `dir="rtl"` (use the existing Arabic text component/class the phrase screen uses).
- Screen `n` numbers are 1..k; no screen is graded into mistakes (no `answer` api passed).

- [ ] **Step 1: Failing tests:** nothing finished → words count 0 with hint "Finish Day 1 to unlock" (or the earliest firstTaught day); after `day-20` finished words only include terms with firstTaught ≤ Day 20; phrases need `day-08`; surahs: fatiha only after `day-16`, ikhlas only after `day-18`; same seed → same screens; every Arabic string in surah fill options appears verbatim in `citations.json`.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement. **Step 4:** Run → PASS.
- [ ] **Step 5:** Page renders `LessonPlayer practice` with a synthetic `RenderedLesson` (title "Words" / "Prayer phrases" / "Du'as & short surahs", status "practice", `screens` from `buildDrill`, empty check) and `exitHref="/practice"`; `notFound()` for unknown kind; redirect to `/practice` if count 0. Player: in practice mode with `screens` from a drill, lesson screens are played (reuse Task 4's `screens` prop; lessonId = `drill-<kind>`).
- [ ] **Step 6:** Commit `feat: words, phrases and surah drills`.

### Task 6: Practice hub page

**Files:**
- Modify: `app/(convert)/practice/page.tsx`

**Interfaces:**
- Consumes: `drillAvailable` (Task 5), `buildMistakeSession` (Task 4, to count only renderable mistakes).

- [ ] **Step 1:** Layout per spec §2: Review card (existing), Mistakes card ("N to retry", link `/practice/session?mode=mistakes`, hidden at 0), then heading "Explore more" with the tag "optional, no pressure" and one card per drill (title, "N words / phrases / surahs learned" or the unlock hint, link `/practice/drill/<kind>`). Same card styling as the existing Review card.
- [ ] **Step 2:** `npm run typecheck && npm run lint && npm run build` → clean.
- [ ] **Step 3:** Commit `feat: practice hub layout`.

### Task 7: Verify end to end and hand off

- [ ] **Step 1:** `npx vitest run && npm run test:db && npm run typecheck && npm run lint && npm run build` → all pass; `python3 "<vault>/Curriculum/Tools/check_lessons.py"` → 0 errors.
- [ ] **Step 2:** After Shayan applies the migration: local `next start` against the live project, headless Chrome (scratchpad script) on a demo account: open `/lesson/day-40` directly (loads); play Day 8 answering one Check-button screen wrong → Practice shows "1 to retry" → mistakes session right once → still listed → right again → gone; play each drill to the end; no `pageerror`; screenshots of Practice and one Arabic fill screen checked by eye for RTL.
- [ ] **Step 3:** Update the vault hub (status, session log), then Shayan deploys (`npx vercel deploy --prod --yes`) and does checkpoint A on his phone.
