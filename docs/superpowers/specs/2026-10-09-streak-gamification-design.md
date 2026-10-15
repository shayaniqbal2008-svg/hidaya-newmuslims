# Daily streak and gamification v1: design

Source: vault `Projects/Hidaya/Gamification Research.md` (the approved design; this spec builds its MUST + SHOULD items). Shayan's answers to its open questions (2026-10-08):
1. A full Practice session (spaced review or Mistakes round, completed) **counts** toward the streak. Optional track lessons (alphabet-NN, seerah-NN) and drills (words/phrases/surahs) still do **not**.
2. The streak is **on by default**; a setting hides it.
3. No scholar question needed.

**Never** (kept from the research): leagues or leaderboards, hearts/energy, gems/shop/currency, paid anything, share cards, friend streaks, points or badges for logged worship (`action_logs`, `do_today`), guilt copy, streak-at-risk pushes for teens.

## 1. What counts (lib/streak.ts)
- A **day counts** when the convert, on their local date (`converts.timezone`), completes:
  - a main path lesson for the first time (day-NN), or a calendar / welcome-back module (once per day), or
  - a **full Practice session**: a spaced review, "practice past lessons" or Mistakes round played to the end with **≥ 5 questions**. Review and Mistakes sessions are topped up to 5 with questions from finished lessons when fewer are due (`lib/practice/top-up.ts`).
- Never: track lessons, drills, re-reading an already finished day lesson.
- The question count is reported by the session (bound on the server at render). It's the convert's own private streak, so self-reporting is acceptable.

## 2. Streak rules (pure fold, `settle()` in lib/streak.ts)
The streak is a deterministic fold over the stored day log, from the first logged day to today:
- **Active day** (lesson/practice): streak +1. Each time the run reaches a multiple of 7, earn a **rest day** (start with 1, hold at most 2). After a break the next run starts with 1 again.
- **Missed past day** (no row, before today): if paused that day → a `pause` row (holds). Else if streak > 0 and a rest day is held → a `rest` row (holds, uses it; applied automatically). Else the run breaks (no row).
- **Today** with no activity yet never breaks anything.
- `rest`, `pause`, `repair` rows hold the run without adding to it.
- **Settlement** writes the new `rest`/`pause` rows lazily the next time the streak is read (upsert, never overwriting an active day). Re-running is idempotent.
- **Make-up (repair):** if the run broke with 1–2 unprotected missed days immediately before today, the broken run was ≥ 2 days, no repair in the last 30 days and not paused, then **two counted activities today** (the comeback one plus one more) write `repair` rows for the missed days and the run continues. Free.
- **Pause:** 1–30 days starting today, from Me. Days inside the window are held. Reminders stop. Resume any time (the window ends yesterday).
- **Longest** = max(stored, folded). Never shrinks.
- **Rest-day balance** is derived from the fold, not stored (no drift).
- **Milestones:** 3, 7, 14, 30, 50, 90, 100, 180, 365; the big animation on 7, 30, 90, 365.

## 3. Data (migration `20261010000001_streaks.sql`)
- `activity_days(convert_id, day, source in lesson|practice|rest|pause|repair, lessons int, practice int, created_at)`, pk `(convert_id, day)`.
- `streak_state(convert_id pk, longest, paused_from, paused_until, last_repair_on, updated_at)`.
- `record_activity(p_day, p_kind)` SQL function (security invoker, RLS applies) that upserts and increments today's counter atomically; returns the day's activity count. Only the convert's local today ±1 day is accepted, and at most 3 practice sessions a day count (no XP farming).
- `convert_settings` + `show_streak` (default true), `celebration_sounds` (false), `calm_celebrations` (false); column update grants.
- RLS "own rows" on both tables like `practice_mistakes`; no view, function or staff policy reads them. Cascade delete with the convert. Both in `EXPORT_TABLES`.
- Backfill `activity_days` from `lesson_progress.completed_at` (local date, non-track ids).
- **Badges are derived, not stored**: every badge's earned date is computed from progress, the streak fold and cleared mistakes. No new table, nothing to leak.

**Review decisions (2026-10-09):** once the log is stored, lesson dates only fill in yesterday/today (no timezone drift); the after-lesson celebration is recomputed by the completion action from pre-activity data and replaces the render-time projection; reopening a lesson on its finish screen never records again; "resume" only shortens a running pause.

**Fail-soft:** server reads of the new tables/columns log and fall back to the lesson_progress dates (practice then can't count, nothing is written). Settings save the new columns in a separate update whose failure is ignored. A deploy before the migration never crashes a page.

## 4. XP
10 per lesson (as now), **+5 per counted Practice session**. No speed/accuracy bonuses, no levels.

## 5. Screens
- **Lesson end** (LessonPlayer `finish → streak → milestone → badge(≤2)`), ~1–2.5 s each, tap to skip to the end state, `prefers-reduced-motion` and "Calm celebrations" → fades only, no confetti.
  1. Celebration (kept) + "+10 XP" pill flying up, `vibrate(10)`. If today already counted: "Today already counts ✓" chip.
  2. Streak screen (first counted activity of the day, or the activity that completed a repair): ember → flame ignite (tier colour: dawn 1–6, gold glow 7–29, star halo 30+), odometer roll N−1 → N with a pulse, week dots (rest = crescent, pause = dash), today's dot radial-fills with a ring pulse, copy fades in, `vibrate([15,40,25])`.
  3. Milestone (on the milestone days): StarTile unfolds point by point, slow rays, gentle dawn/gold confetti, big number + label. Bukhari 6464 (from content/citations.json) on 30/90/365 when discreet mode is off.
  4. Badge: card slides up, icon stamps in.
  5. Back on Today: the header flame ignites once and XP counts up (one-shot `sessionStorage`, try/catch).
- **Practice session end**: the same streak / milestone screens when the session counted and was the first counted activity today.
- **Today**: flame outline when not done; hidden with XP when `show_streak` is off. Status card: repair offer, rest-day-used note, or the warm break copy.
- **Me**: current + longest streak, rest days held, "Last 7 days: N of 7" ring, month calendar (flame dot / crescent / grey pause / repair), Milestones grid (earned with date, others greyed), Pause/Resume, toggles: Show streak, Calm celebrations, Celebration sounds.
- **Sound**: off by default; soft WebAudio chime on the streak and milestone screens only; forced off in discreet mode.
- **Discreet mode**: neutral badge names ("Unit 1 complete", "Seasonal lesson"), no hadith, no sounds; reminders unchanged (no streak count).
- **Teens**: same features; reminders never mention the streak.
- **Reminders**: skipped while paused; non-discreet adults with streak ≥ 3: "A few minutes today keeps your N days going."

## 6. Copy (never guilt)
- "N days in a row. Small and steady is how this sticks." / "Day 1 again, and that's how every streak starts."
- "Yesterday was a rest day. Your N-day streak is safe."
- "Welcome back. Your longest streak (N) stays yours. Let's start a new one."
- "You can pick your streak back up: do one more lesson today."

## 7. Badges
First Step (Day 1) · Ready for Prayer (Days 2–3; discreet "Off to a good start") · One Week (7-day streak) · Unit badges ×10 · Halfway (45 path days) · The Path (all 90) · Came Back (a welcome-back lesson) · Clean Slate (10 mistakes cleared) · Alif to Ya (alphabet track; discreet "Alphabet complete") · Seerah (whole track, shown once episodes exist) · Ramadan / Dhul Hijjah season (any module of that season; discreet "Seasonal lesson") · 30 / 90 / 365 days. Streak badges hide when the streak is hidden.

## 8. Deferred
Per-section seerah badges (no section data yet), weekly focus quest, learning buddy, widgets, perfect-week flourish, the T5 dashboard aggregate.
