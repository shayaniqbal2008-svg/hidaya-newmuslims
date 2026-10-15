# Streak and gamification v1: Implementation Plan

> Executed inline (superpowers:executing-plans) with TDD. Spec: `docs/superpowers/specs/2026-10-09-streak-gamification-design.md`.

**Goal:** a forgiving, private daily streak (rest days, make-up, pause), a delightful after-lesson sequence, a Me calendar and derived badges.

**Architecture:** all rules are pure functions in `lib/streak.ts` (fold/settle, projection, milestones), `lib/badges.ts` (criteria + dates) and `lib/practice/top-up.ts`. One server-only store (`lib/streak-store.ts`) reads/writes the new tables and fails soft. UI: `components/lesson/Finish.tsx` + `components/celebrate/*`, Today header client island, Me page sections.

## Global constraints
- Streak counts: first completion of a path day, any calendar/welcome-back module, a full Practice session (≥ 5 questions). Never tracks or drills.
- Own-rows RLS only; staff get zero rows; new tables exported and cascade-deleted.
- Discreet mode: neutral copy, no hadith, sounds off. Reduced motion: fades only. Teens: nothing social, no streak in reminders.
- Never edit applied migrations, `content/` or vault lessons.

## Review focus
1. Settlement is idempotent and never overwrites an active day (upsert ignoreDuplicates; activity upserts win).
2. A two-day gap with two rest days held keeps the streak; with one, it breaks; repair restores it once per 30 days.
3. Deploy-before-migrate: every read of the new tables/columns falls back without throwing.
4. Practice-only days after Day 90 keep the streak alive.

### Task 1: pure streak fold (lib/streak.ts)
- [ ] Failing tests: counts back, held by yesterday, rest earn/hold/cap/auto-apply, 2-day gap with 1 vs 2 rest days, pause holds without consuming rest, repair eligibility + apply + 30-day limit, longest, idempotent writes, practice-only days, milestones, timezone crossover (`dayOf`), `countsForStreak`, `projectActivity`, XP.
- [ ] Implement; keep `streakDates`/`currentStreak` compatibility where still used. Commit.

### Task 2: badges (lib/badges.ts)
- [ ] Failing tests for every criterion + earned date + discreet names + new-badge diff. Implement. Commit.

### Task 3: practice top-up (lib/practice/top-up.ts)
- [ ] Failing test: tops up to 5 without duplicates, stable per seed. Implement. Commit.

### Task 4: migration + RLS tests
- [ ] Failing RLS tests (own rows, staff zero rows, anon denied, cross-insert rejected, record_activity increments, settings columns updatable, backfill, cascade). Write `20261010000001_streaks.sql`; add tables to `EXPORT_TABLES`. Commit.

### Task 5: server wiring
- [ ] `lib/streak-store.ts` (fail-soft read + settle + writes, recordActivity, pause/resume); `completeLesson` records activity; `completePractice` action; settings save new toggles; reminders cron skips paused and uses streak copy (pure `reminderText` tests first). Commit.

### Task 6: celebration UI
- [ ] Finish.tsx: XP pill, already-counts chip, StreakScreen v2 (ember/flame/odometer/dots), MilestoneScreen, BadgeScreen, tap-to-skip, calm/reduced motion, chime, haptics. LessonPlayer step wiring; practice session wiring; Today header ignite island + status card. Commit.

### Task 7: Me page
- [ ] Streak summary, 7-day ring, month calendar, Milestones grid, Pause/Resume, toggles. Commit.

### Task 8: verification
- [ ] vitest, test:db, tsc, lint, build; e2e screenshots light/dark 390×844 (fail-soft path, since the live DB lacks the tables); fix what looks off; self-review; merge `--no-ff`.
