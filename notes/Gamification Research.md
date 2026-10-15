---
related: ["[[Hidaya]]", "[[T4 - Build Plan]]", "[[Curriculum Spec]]", "[[Scholar Review Packet]]"]
aliases: ["Hidaya gamification", "Streak research"]
date: 2026-10-08
---
# Gamification Research: streaks, celebrations and rewards for Hidaya

Requested 2026-10-08 ("add the daily streak feature, with cool animations… research other apps' gamification and learn what works best"). Hub: [[Hidaya]]. Research only; no code was changed.

**What exists today** (`~/Projects/new-muslims-program`): `lib/streak.ts` works the streak out from lesson completion dates (no table; it survives until a whole day is missed; alphabet and seerah track lessons don't count). XP is flat (10 per lesson). `Finish.tsx` has the Celebration screen (confetti, star tile, XP, accuracy and time count-ups) and a basic StreakScreen (flame, count-up, 7-day dots). The Today header shows a flame plus XP, and Settings/Me shows a streak stat and an XP stat. Practice (review, mistakes, drills) doesn't affect the streak. Wrong answers already vibrate (`navigator.vibrate`, Android only). Discreet mode is on by default.

**Bottom line:** streaks are the most proven mechanic, but only when they're forgiving. Celebrate the effort right away, track progress privately, and don't use competition, currency or penalties. For converts, sincerity (ikhlas) and privacy rule out the social half of Duolingo entirely.

---

## 1. Findings by mechanic

### Streaks: the strongest lever, if they're forgiving
- **Evidence (Duolingo):** learners who reach a 7-day streak are **3.6× more likely to finish their course**. The streak-extension animation raised new learners' day-7 retention by **+1.7%**. Letting learners hold **2 freezes** raised daily active learners by **+0.38%**. Duolingo also notes that early streak days feel biggest (2→3 is a 50% increase, while 200→201 is 0.5%), so it celebrates early days hardest ([Duolingo: how the streak builds habit](https://blog.duolingo.com/how-duolingo-streak-builds-habit)).
- **Weekend Amulet** (protects the weekend): learners were **4% more likely to return a week later** and **5% less likely to lose their streak**. **Streak Wager** (bet currency on 7 more days): **D7 retention +14%** ([Duolingo blog](https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals)).
- **Scale:** Duolingo ran 600+ streak experiments in 4 years. Making the streak easier (counting a single exercise) did **not** raise DAU ([Lenny's Podcast summary](https://www.recall.it/summary/lennys-podcast/behind-the-product-duolingo-streaks-or-jackson-shuttleworth-group-pm-retention-team)). Over 4 years, the streak work plus leagues and notifications moved CURR +21% and cut churn among the best users by 40%+. Its first big streak win was the late-day "streak saver" notification ([Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth)).
- **Duolingo mechanics** ([teardown](https://duolingo.deconstructoroffun.com/mechanics/streaks)): freezes apply automatically and silently, and free users hold up to 2. The calendar marks lesson days with checkmarks and frozen days with snowflakes. Custom animations play only on days **7, 30, 100 and 365**. Duolingo has also had an "Earn Back" repair path, a "Perfect Streak" tier for days without freezes, and tiered **Streak Society** rewards from day 7. The milestone mascot became a phoenix because it reads the same across cultures ([Duolingo design post](https://blog.duolingo.com/streak-milestone-design-animation)).
- **Academic evidence:** across 7 studies, *intact* streaks shown in a log increase future engagement. When a streak breaks, people disengage, especially when they blame themselves. **Letting people repair a broken streak weakens that drop-off.** Defining the streak flexibly (more than one activity counts) raised motivation even when actual behaviour was the same ([Silverman & Barasch, JCR 2023](https://www.colorado.edu/business/faculty-research/2023/04/19/or-track-how-broken-streaks-affect-consumer-decisions)). Barasch adds that "you failed, get back on track" messages don't work.
- **Habit science:** habits took a median of **66 days** to become automatic (range 18–254). **Missing one day did not hurt habit formation**, but repeated misses did ([Lally et al. 2010, via BPS](https://bps.org.uk/research-digest/how-form-habit)). The 90-day program fits that window, and a forgiving streak matches the science.
- **Risks:** streak anxiety, guilt-trip notifications ("you made Duo sad"), paid repair as monetized loss aversion ([deceptive.design](https://www.deceptive.design/articles/when-a-user-uses-duolingo-on-a-series-of-consecutive-days-this-is-called-a-streak-if-users-miss-a-day-they-can-pay-to-repair-it); [parent guide](https://screenwiseapp.com/guides/managing-duolingo-streaks-when-gamification-becomes-stressful)). **In a Quran app specifically**, users wrote that the streak made them question "if I'm sincere or chasing the digital count," and that "the only purpose I have is to maintain the streak and not reading the Quran." Other users said it built their daily habit. Most asked for an off switch ([Greentech Quran app feedback](https://feedback.gtaf.org/board/p/option-to-completely-disable-or-hide-the-streak-counter)). Headspace lets members hide streaks for the same reason ([Built for Mars](https://builtformars.com/ux-bites/hiding-your-headspace-streaks)).

### Rest days and pauses
- **Apple Fitness** (watchOS 11): "Pause Rings" for a day, a week, a month or custom (reportedly up to 90 days) **without breaking award streaks**. Alerts stop, and the night before resuming it asks "ready to get back to it?" Reviewers framed this as removing guilt ([iMore](https://www.imore.com/health-fitness/apple-watch/how-to-pause-activity-streaks-in-watchos-11); [BGR](https://bgr.com/tech/with-watchos-11-pausing-my-activity-rings-wont-make-me-feel-bad-about-myself-anymore/)).
- **Brilliant:** a day counts after 3 problems *or* a lesson, and "streak charges" are used up automatically on a missed day ([Brilliant help](https://brilliant.org/help/features/what-is-a-streak-charge/)). **Snapchat** allows one free streak restore ([Snap](https://newsroom.snap.com/en-GB/keep-the-streak-with-restore)).

### XP, points and levels
- XP drives Duolingo's leagues; on its own, it's a progress meter. Khan Academy says its energy points measure **effort, not mastery**, and keeps mastery separate ([Khan help](https://support.khanacademy.org/hc/en-us/articles/202487710-What-are-energy-points-)).
- **Overjustification:** a meta-analysis of 128 experiments found that *expected, tangible* rewards tied to engagement or completion reduce free-choice intrinsic motivation (d ≈ −0.28 to −0.40). Informational positive feedback does not ([Deci, Koestner & Ryan 1999](https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf)). The design takeaway: points should *inform* ("you learned X"), not *pay*.

### Leagues and leaderboards
- **Evidence:** leagues raised Duolingo's learning time **17%** and **tripled** its highly engaged learners ([Lenny's Newsletter](https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth)).
- **Risks:** a 9-year study of forum posts plus 15 interviews found "gamification misuse": competitiveness and XP farming that "negatively impacts learning performance" ([arXiv 2203.16175](https://arxiv.org/abs/2203.16175)). Users describe demotion stress and rushing lessons to stay in Diamond ([Substack account](https://melisalw.substack.com/p/when-a-demotion-is-helpful)).

### Hearts and lives
- Hearts punish mistakes and push users toward a paid upgrade. Duolingo itself moved to "energy" in 2025 so it was "not penalizing you for mistakes," though critics say energy still drains ([Android Authority](https://www.androidauthority.com/quitting-duolingo-energy-system-3599842/)). Habitica goes further: missed tasks cost health, and in quests the damage hits the whole party ([Habitica wiki](https://habitica.fandom.com/wiki/Death)). It works for some people and is guilt-heavy for others.

### Quests, badges and achievements
- Duolingo has 3 daily quests (rewarded with chests), weekly Friends Quests and monthly badges. Duolingo credits social features for retention, but no quest-specific lift has been published ([Duolingo blog](https://blog.duolingo.com/friends-quests/)). Friend Streaks: users with one are **22% more likely** to finish the daily lesson ([teardown](https://duolingo.deconstructoroffun.com/mechanics/streaks)).
- **Tarteel** shows earned badges with dates and unearned ones greyed out ([Tarteel help](https://support.tarteel.ai/en/articles/12414371-badges)). **Muslim Pro** gives "Stars & Crescents" for daily acts and streaks for its prayer and fasting tracker ([App Store](https://apps.apple.com/app/id388389451)). Some Islamic habit apps openly sell "the same psychology that makes games addictive" ([HalalYouNeed](https://apps.apple.com/ca/app/halalyouneed/id6758355562)), which is exactly the line Hidaya shouldn't cross.

### Gentle and compassionate designs
- **Finch:** missing a day does nothing except offer an optional reflection prompt, and the pet never scolds ([Internet Matters](https://www.internetmatters.org/advice/apps-and-platforms/wellbeing/finch/)). **Fogg (Tiny Habits):** celebrate *immediately* after the behaviour to produce "Shine," a feeling of authentic pride ([TED Ideas](https://ideas.ted.com/how-you-can-use-the-power-of-celebration-to-make-new-habits-stick/)).

### Motivation theory
- **Self-determination theory:** the pull of games comes from **competence, autonomy and relatedness**, each of which independently predicts enjoyment and continued play ([Ryan, Rigby & Przybylski 2006](https://www.rochester.edu/warner/lida/wp-content/uploads/2022/11/02bfe513dd59366750000000.pdf)).
- **Gamification of learning, meta-analysis:** small positive effects. Cognitive g = .49, motivational .36, behavioural .25; the motivational and behavioural effects are less robust ([Sailer & Homner 2020](https://link.springer.com/article/10.1007/s10648-019-09498-w)). Gamification helps, but it doesn't replace good lessons.

### Religious learning, sincerity and riya'
- I found no fatwa or Muslim UX writer specifically on streaks. The academic work flags superficiality and dependence on external motivators, and says game elements must be adapted to Islamic values ([Kazakh religious-studies bulletin 2025](https://bulletin-religious.kaznu.kz/index.php/relig/en/article/view/772); [UINSU 2024](https://jurnal.uinsu.ac.id/index.php/analytica/article/view/22113)).
- **Textual anchors that support consistency:** "the most beloved deeds to Allah are the most consistent, even if small" ([Bukhari 6464](https://sunnah.com/bukhari:6464)). **And concealment:** one of the seven shaded is the one who gives so secretly "his left hand does not know what his right hand gave" ([Bukhari 660 / Muslim 1031](https://www.abuaminaelias.com/dailyhadithonline/2012/08/08/seven-shaded-by-allah/)). Together they suggest: reward *consistency in learning*, keep it **private**, and never score *worship itself*. Quote these hadith in the app only through the [[Citation Bank]].
- **Teens:** the UK Children's Code (standard 13) bars nudges that exploit psychological bias in children, and the 2019 draft named streaks ([ICO](https://ico.org.uk/for-organisations/guide-to-data-protection/ico-codes-of-practice/age-appropriate-design-a-code-of-practice-for-online-services/13-nudge-techniques)). Not binding in the US, but it's a good bar.

---

## 2. What fits Hidaya and what doesn't

| Use | Avoid |
|---|---|
| Private streak with auto rest days, free repair and a pause | Public or friend leaderboards and leagues (riya', privacy, outing risk) |
| Strong, *immediate* celebration after each lesson (Fogg, Duolingo's +1.7%) | Hearts, energy or lives: a mistake already becomes a Practice item |
| Milestones tied to the journey (first prayer, Day 45, Day 90) | Any currency, shop or paid repair (no money, no loss-aversion monetization) |
| Progress *information* (path, units, words learned): competence | Points or badges for **worship acts** (`action_logs` such as "I prayed," `do_today`, du'a logs) |
| Week view and weekly rhythm, so a broken streak still shows progress (Barasch) | Share cards, friend streaks, Streak Society status |
| A "Hide streak" setting; calm celebration mode; sounds off by default | Guilt copy ("you'll lose…", sad mascot), late-night streak-at-risk pushes |
| Celebrating **coming back** (the welcome-back lesson already exists) | Speed bonuses or XP farming (the "misuse" study) |

**Discreet mode:** the flame and XP are neutral and can stay. Milestone copy must avoid religious words when `discreet_mode` is on (as in `lib/reminders.ts`), and sounds never play. Push notifications stay neutral, with no streak count in discreet mode.
**Teens** (`is_minor`): same features, but no streak-at-risk nudge, no "almost lost" messaging, and repair available by default.
**Staff:** see nothing from these tables. At most, the T5 dashboard shows aggregates already derivable (active this week) and never streaks, XP or badges per convert. Sincerity also argues against mentors seeing a "score."

---

## 3. Recommended v1 design

### MUST

**A. Streak rules** (replace the date-only logic in `lib/streak.ts` with a stored activity log)
- **What counts:** a *day* counts when the convert completes ≥1 main path lesson (a Day lesson, a seasonal module or welcome-back) **or** a full Practice review/Mistakes session (≥5 questions). **Track lessons (alphabet, seerah) and drills still never count**, consistent with the current rule. *Recommendation on Practice:* let it count. Otherwise the streak dies on Day 91, when the path is finished, and the research favours flexible streak definitions. (Open question 1.)
- **Day boundary:** the convert's local date (existing `localDate`/`today` with `converts.timezone`).
- **Rest days (= freezes, named for the culture):** earn 1 rest day per 7 streak days, hold at most 2, and start with 1. They're **applied automatically** on a missed day. No purchase, ever. The calendar shows a small crescent on rest days.
- **Make-up (repair):** if the streak broke within the last 2 days, finishing **one extra lesson today** restores it. Free, and once per 30 days. Copy: "You can pick your streak back up: do one more lesson today."
- **Pause:** in Settings, "Pause my streak" for 1–30 days (travel, illness, a hard season), Apple-style. It isn't gendered and needs no reason. Reminders stop; a pause doesn't add days or break the streak.
- **Longest streak** is stored and shown, so a reset never erases history.
- **Hide streak:** a setting that removes the flame from the header and skips the streak screen.

**B. After-lesson celebration sequence** (in `LessonPlayer` steps: `finish` → `streak` → optional `milestone` → optional `badge`). All of it respects `prefers-reduced-motion` and a "Calm celebrations" setting (fades only, no confetti).
1. **Lesson complete** (existing `Celebration`, keep it): star tile spins in (spring, ~0.9s), title, closing line, stat cards stagger in at 0.6/0.75/0.9s and count up. *Add:* a "+10 XP" pill that flies up toward the top-right (0.5s) and a short vibration `[10]` on Android. Continue.
2. **Streak screen** (only the **first counted activity of the day**; later lessons skip it and show a small "Today already counts ✓" chip on screen 1):
   - 0–0.4s: an ember (small dawn dot) pops in. 0.4–1.0s: it grows into the flame (scale 0.3→1, spring bounce 0.5) and settles into the existing `animate-flicker`.
   - 0.6–1.3s: the counter **rolls from N-1 to N** like an odometer (vertical slot roll, not a count-up from 0), then a scale pulse 1→1.15→1.
   - 1.0–1.6s: the 7-day row; past days are already filled, and **today's circle fills with a radial sweep** plus one ring pulse. Rest days show a crescent, not ✓.
   - 1.6s: copy fades in. Haptic `[15, 40, 25]` on fill (Android; iOS web has no vibration API, so the visual has to carry it).
   - The flame color warms by tier: dawn (1–6), gold with an inner glow (7–29), gold with a soft 8-point star halo using the existing StarTile geometry (30+).
3. **Milestone screen** (days **3, 7, 14, 30, 50, 90, 100, 180, 365**; the big animation only on **7, 30, 90, 365**): the StarTile unfolds point by point (8 points × 60ms), rays rotate slowly behind it, a gentle confetti of dawn and gold (no more than the existing burst), and a big number with a label. For 90: "Ninety days in a row." The consistency hadith (Bukhari 6464, from the Citation Bank) appears on 30/90/365 when discreet mode is off. ~2.5s, then Continue.
4. **Badge unlocked** (if any): a card slides up (spring), the badge icon stamps in (scale 1.3→1 with a slight rotate), name and one line. One per screen, at most 2 per session, and extras wait in the Me tab.
5. **Return to Today:** the header flame does a single "ignite" (fill animates from none to dawn, 0.4s) and XP counts up from the old value to the new one. Pass a one-shot flag via a query param or sessionStorage, wrapped in try/catch.
- **Sound:** off by default. A Settings toggle ("Celebration sounds") plays a soft chime only on the streak and milestone screens, and it is **forced off in discreet mode**.

**C. Copy tone.** Warm, informational, never guilt.
- Streak screen: "3 days in a row. Small and steady is how this sticks." / day 1 after a break: "Day 1 again, and that's how every streak starts."
- Rest day used: "Yesterday was a rest day. Your 12-day streak is safe."
- Break, no repair: "Welcome back. Your longest streak (21) stays yours. Let's start a new one." **Never** "You lost your streak."
- Reminder (non-discreet, streak ≥3, at `reminder_time`, max 1/day as now): "A few minutes today keeps your 5 days going." In discreet mode: unchanged neutral text.

**D. Data** (new migration; RLS "own rows" like `practice_mistakes`; no staff view; add to `lib/export-tables`; deleted with the account by cascade)
- `activity_days (convert_id, day date, source text check in ('lesson','practice','rest','repair','pause'), created_at, primary key (convert_id, day))`, written on lesson complete or Practice session complete. Rest and pause rows are written when the streak is *settled*: lazily, the next time it's computed, for missed days. Settlement is deterministic and idempotent.
- `streak_state (convert_id pk, rest_days int default 1, rest_earned_at_streak int, longest int, paused_until date, last_repair_on date, updated_at)`.
- `convert_settings` gains: `show_streak bool default true`, `celebration_sounds bool default false`, `calm_celebrations bool default false`.
- Backfill `activity_days` from `lesson_progress.completed_at` (excluding track ids) so current streaks carry over.
- Tests: the existing `streak` tests plus freeze and repair edges (two-day gap with 2 rest days, timezone crossover, pause, Day 91 practice-only).

### SHOULD

**E. Streak calendar** on the Me page: a month grid with a flame dot on active days, a crescent on rest days and grey for paused days. Current and longest streak shown above it, plus a "This week: 4 of 7 days" ring. That ring is the compassionate second goal (Apple and Barasch): a broken streak still shows weekly progress.

**F. Badges ("Milestones" tab on Me).** Private, dated, greyed until earned (Tarteel pattern). All of them are about **learning**, never about acts of worship.

| Badge | Criteria | Line |
|---|---|---|
| First Step | Finish Day 1 | "You started. That's the hardest part." |
| Ready for Prayer | Finish Days 2–3 (wudu + first prayer) | "You've learned how to pray." |
| One Week | 7-day streak | "A week of showing up." |
| Unit badges (one per unit in `index.units`) | Finish every lesson in a unit | "Unit complete: {unit name}" |
| Halfway | Finish 45 path lessons | "Halfway through the path." |
| The Path | Finish all 90 | "All 90 days. The learning keeps going." |
| Came Back | Finish a welcome-back lesson | "You came back. That counts for a lot." |
| Clean Slate | Clear 10 Mistakes | "10 mistakes turned into things you know." |
| Alif to Ya | Finish the Arabic alphabet track | "All 28 letters." |
| Seerah stages | Finish each seerah section | "{section} complete" |
| Season | Finish a seasonal module (Ramadan, Dhul Hijjah) | "Ready for {season}." |
| 30 / 90 / 365 days | Streak milestones | (as above) |

In discreet mode, badge names that mention prayer or Ramadan display neutrally ("Unit 1 complete").

**G. XP:** keep 10 per lesson and add **5 per Practice session**. No speed or accuracy bonuses (they invite rushing). **No levels in v1.** Competence shows through the path, units and badges instead. XP stays a quiet effort counter, as at Khan Academy.

**H. Daily goal:** fixed at "one lesson or one review a day." No goal picker (it adds a choice with no proven gain for a 5-minute lesson). The weekly ring (E) is the softer goal.

### LATER (only after watching real usage)
- A **weekly focus** quest (one per week, e.g. "Review 3 times this week"), private, rewarded with a badge, never currency.
- Opt-in **"learning buddy"** with a mentor (a shared weekly check-in, not a competition), only if converts ask and only after T5's mentor privacy model.
- iOS/Android widget (a PWA can't do this; needs native).
- Perfect-week flourish (a gold bar when all 7 days are lessons with no rest days).

**Never:** leagues, public or friend leaderboards, hearts/energy, gems, share cards (unless a convert explicitly asks), points for logged worship, paid anything.

**Where each piece goes:** Today header (flame with a grey outline when not done, ignite on return; XP; both hidden by `show_streak=false`) · LessonPlayer finish flow (B) · Practice session end (a short streak screen if it was the first activity today) · Me/Settings (calendar, current/longest, weekly ring, Milestones grid, toggles for Show streak, Pause, Calm celebrations, Sounds) · reminders cron (copy in C).

---

## 4. Open questions for Shayan
1. **Should a Practice review count toward the streak?** Recommended: yes, a full review or Mistakes session. Track lessons and drills stay excluded.
2. **Streak on by default, or asked at sign-up** ("Want a daily streak to keep you going?")? Recommended: on by default, with an easy Hide.
3. **Scholar check:** add one question to the [[Scholar Review Packet]]: "Is a private learning streak with milestone badges (never for acts of worship) appropriate, and may we show Bukhari 6464 on milestone screens?"
