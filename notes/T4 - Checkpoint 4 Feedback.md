---
created: 2026-10-07
project: "[[Hidaya]]"
task: T4
related: ["[[T4 - Build Plan]]", "[[T4 - Your Next Steps]]", "[[Curriculum Spec]]"]
---
# T4: Checkpoint 4 feedback

Shayan's critique after finishing Days 1–3 on his phone (2026-10-07). Saved verbatim; the sorted version and fix plan are below it.

## Verbatim

> The overarching thing you need to fix is making it more Duolingo-based. Go look at the formatting and the UI design/structure of Duolingo, and basically copy that word for word. Duolingo's structure and UI design is great for these types of apps, so just go in and straight up copy it.
>
> Additionally, you need to make the slides more interactive. There are a lot of readings, so take inspiration from Duolingo and especially Brilliant to work on making the pages and lessons more interactive and having more animations to make them more engaging and less reading.
>
> Bug number one: When I click "Ask something else" on the page that lets me ask the AI, after the AI answers the question, when I click "Go back" (the back arrow on the top left), it sends me back to the start of the lesson.
>
> Change the fonts and the brand theme of the fonts for this app. It's too basic. Make it something more classy. Also, at the end of the lesson, don't provide the other schools option. That's something that's specific for each mosque, or the school of thought is specific for whichever mosque we're pitching it to. It's not for the user to decide.
>
> Have some animations for a completed lesson.
>
> A good example of making a page more interactive would be for the Do section. Make the steps like actual lists, not just text, and also have pictures of examples of how to do it, things like that.
>
> Needs a lot more visual aspects to learn better.
>
> For the "Before You Start" page in the third lesson, when describing what to cover up for women, don't make it seem like a list compared to what you have to cover up for men. That makes it seem like there's a lot more for women, which can imply wrong things to the users. Don't make it seem like a comparison between men and women.
>
> Also, for lesson one on the whole whistle thing, change the wording a bit so that you're not saying that every revert needs to make it before prayer. That can imply that you have to make it every prayer.
>
> When teaching them how to pray, again, you need lots, lots more visuals, animations, and less text that doesn't properly explain how to pray.
>
> Okay, I just finished lessons 1 to 3, which are the ones that I have access to, or which are the ones that reverts will have access to when they first download the app. Above are the notes I've taken based off of those three days.
>
> I want you to fix everything that I've listed above. Also, try and extrapolate my thinking, the reasons for what I said, and the things I said themselves to all the 90 lessons, to all the other days. Try and use what I said above as a blueprint to rebuild the entire app this time, much better with the advice that I've given.

*("whistle" = speech-to-text for **ghusl**/**wudu**; see sorted list.)*

## Sorted

**Bugs**
- B1. "Ask something else" → guide → back arrow restarts the lesson from screen 1. *Cause:* the player never records its screen in the URL; going back reloads the page at the server's saved screen (stale in the router cache).

**UX / design**
- U1. Make it Duolingo: path, lesson flow, buttons, feedback, celebrations. *Approach:* copy Duolingo's structure and interaction patterns closely (winding path of lesson nodes by unit, chunky 3D buttons, select → **Check** → green/amber feedback sheet → Continue, XP + streak, lesson-complete and streak screens, Practice tab). Not copied: their owl, proprietary font and artwork (trademarked, and a mascot would break discreet mode). **No hearts/lives**: losing lives for wrong answers about worship contradicts the "no shaming" rule.
- U2. Fonts/brand too basic → classier: Fraunces (serif display) + Nunito (rounded UI text, Duolingo-like), Amiri for Arabic; ivory, deep emerald and gold.
- U3. Animations: screen transitions, answer feedback, progress bar, path nodes, lesson-complete celebration (confetti, XP count-up, streak flame).
- U4. Less reading, more interaction (Brilliant + Duolingo): new screen types (below) and a hard word limit on reading screens.
- U5. Visuals everywhere: an illustration library (faceless figures, objects) used across all lessons; prayer taught with an animated figure.
- U6. Don't offer "Other schools" at the end of a lesson: the masjid's school is the only one shown (note stays in the AI guide's context).

**Content**
- C1. Day 3 "Before you start": covering shown as a men-vs-women comparison. → Each person sees only their own line (Shayan's choice); if gender wasn't given at sign-up, the app asks once, privately.
- C2. Day 1 ghusl wording implies a ghusl before every prayer. → Make clear it's **one** full shower, once, now that you're Muslim (wudu is what's done before prayers).
- C3. "Do" sections: real step lists with pictures, not paragraphs.
- C4. Prayer teaching: far more visuals and animation, much less text.

**Extrapolated to all 104 lessons** (the reasons behind the notes)
- Show, don't tell: any how-to → step-by-step screen with a picture per step; any physical act (wudu, prayer, ghusl, tayammum, Jumu'ah, fasting day) → illustrated/animated.
- Reading screens ≤ ~45 words; long explanations split into tap-to-reveal bubbles or turned into a question.
- Never present men/women side by side; render only the reader's own guidance. Avoid wording that makes a one-off act sound recurring (or vice versa).
- The masjid's school is the convert's school: no "other schools" comparisons in what converts see.
- Every lesson ends with a celebration; the closing line moves onto the celebration screen.

## Plan
**Phase A: app rebuild + Days 1–3 (this session) → Shayan checks on his phone**
1. Design system: fonts, palette, 3D buttons, option cards, feedback sheet, motion.
2. Learn tab = Duolingo path (replaces Today + Path), top bar with streak and XP, Practice tab (spaced review), Me tab (stats + settings).
3. Lesson player: Check → feedback sheet flow; screen transitions; step saved in the URL (fixes B1); "Back to lesson" in the guide; gender question when needed; finish = celebration + streak screen; no "Other schools".
4. New screen types: `steps` (one step at a time, picture each, then a tick list), `prayer` (animated figure walkthrough), `tap_words` (build the meaning from word tiles), `sort` (two buckets), `fill` (fill the blank), `widget` (interactive: prayer-times sun dial, qibla compass, rak'ah counter); `learn` gains `pic` and `bubbles`; `do_today` gains `steps`.
5. Gender markup `{men}…{/men}` / `{women}…{/women}` usable in any text; rendered server-side so the other version never reaches the phone.
6. Illustration library: animated prayer figure (all positions, school- and gender-aware), wudu/ghusl body diagrams, religious objects, plus a curated icon set; pic ids validated at compile time.
7. Rewrite Days 1–3 in the new format (C1–C4); update [[Curriculum Spec]] §4 and [[Writer Brief]] with the new format and rules.

**Phase B (after Shayan's OK on Days 1–3):** parallel Opus writers convert Days 4–90 + 13 modules in batches of 3, then a review pass, then the checker.

## Verification plan
- Unit tests: gender rendering (other gender's text never in output), new screen parsers, streak/XP maths, URL step restore; existing 81 tests + privacy tests still pass.
- Compiler/checker: new types validated (unknown pic ids, word limits, gender tags balanced, no "other schools" in convert-facing text) → 0 errors on all 104 lessons (old lessons must still compile during Phase A).
- Browser: run every Day 1–3 screen at phone width, both genders, Hanafi and no-school, screenshot each new screen type and check it visually; click through all 104 lessons to confirm nothing old broke.
- B1 repro: start Day 1 → Ask something else → back → lands on the same screen.
- Build, typecheck, lint clean; deploy (Shayan runs it); Shayan's phone check of Days 1–3 = checkpoint 4b.

## Checkpoint 4b (2026-10-07)
Shayan, after the rebuilt Days 1–3: *"this is much better… the only adjustment I see is not letting a user continue onto the next page unless they have answered [the] interactive page, regardless of if they got it right or wrong."* He loved the interactive sun dial ("a prime example of what I am looking for") and asked for more diagrams and interactivity in every lesson. The app is named **Hidaya**.
- Done: every interactive screen needs an answer or an explicit choice; Hidaya name (neutral "Daily" in discreet mode); 8 new widgets (fast-day, moon, tasbih, timeline, masjid-map, rows, zakat, iman-graph), previewable at `/preview/widgets`.

## Phase B: converting Days 4–90 + modules (started 2026-10-07)
Opus writers, 3 at a time, each converting a batch in place; originals backed up before starting. After each wave: checker, compile, click-through of every converted lesson in headless Chrome, spot-read against the originals.

| Wave | Batches | Status |
|---|---|---|
| 1 | Days 4–10 · 11–17 · 18–24 | done |
| 2 | Days 25–31 · 32–38 · 39–45 | done |
| 3 | Days 46–52 · 53–59 · 60–66 | done |
| 4 | Days 67–73 · 74–80 · 81–87 | done |
| 5 | Days 88–90 + welcome-back ×2 + holidays ×2 · Ramadan 1–6 · Eids + Hajj | done |
Every finished lesson: checker 0 errors, and clicked start to finish in the app as a man and as a woman (plus no-school and "rather not say" samples).

### For Shayan / scholar review (flagged by the writers)
Small wording changes and judgment calls made while converting. None changes a ruling; all are listed so a reviewer can glance at them.
- **Additions the original didn't state:** Day 26 sort: hearing yourself pass wind breaks wudu (agreed by all schools). Day 7 default: say *Subhan Allah* quietly in bowing (Day 3 content). Day 13: card "Family dinner with ordinary meat? Eat the sides, ask your imam" (follows Q6). Day 49: what each limit protects (only intoxicants→mind was original). Day 44: the moon widget (months start with the new crescent; masjid announces the date).
- **Corrections:** Day 31 no longer implies Q 3:42 is in Surah Maryam (it's Al Imran). Day 36: Amin "part of every prayer" → "a sunnah in every prayer", with a Hanafi variant for saying it quietly. Day 10's prayer phrase no longer names "(Hanafi)" on screen (variant instead).
- **Visibility by gender/age (by design, per Checkpoint 4):** Day 38 hijab ruling screens show to women only; men get men's modesty and "don't police sisters". Day 42 wali screen women only. Day 44 period/pregnancy fasting points women only. Teen lines are now teen-only (Days 42, 45, others).
- **Worth a scholar's eye:** Day 66 new women's scenario (convert wife, non-Muslim husband: no ruling, kindness + imam privately, per Q21); Day 17 Hanafi period length line (compressed); Day 21 *Rabbighfirli* shown in the sitting; Day 22 latecomer make-up simplification; Day 38 "arms and legs" as examples of body; Day 40 names the four schools on screen (no practices); Day 30 timeline day ranges follow the outline's phrase track.
- **Fixes I made after the writers:** Day 57 qunut screen now Hanafi-only and its takeaway neutral by default (Hanafi witr details in a variant); placeholder Arabic ("TODO") is never shown. Day 86 "slept through Fajr, wait for sunrise" now Hanafi-only (neutral default). Day 69 gained an on-screen safety line (threats or feeling unsafe → 911 / mentor). The matching game now allows two items with the same answer (Day 57 broke on it).
- **More judgment calls:** practice counts on tasbih widgets (Days 34, 64, 88, 90, ramadan-5) are labelled as practice, not sunnah numbers. Teen-only lines across Ramadan modules and Days 68, 70, 87, 89 now show only to teens. welcome-back-2 adds a short prayer refresher (copied from Day 3). Day 75 has an extra Q20 marker. Day 84 Hanafi text still mentions "all four schools" (agreement, not comparison). Christmas module: dinner/church cards became a be-there/skip sort; greetings, gifts and decorations stay as reveal cards (scholars differ).
- **Eid and Hajj modules:** Eid prayer is now an animated walkthrough (Hanafi: extra takbirs 3 + 3; hands fold after the third takbir in rak'ah 1, worth a scholar's eye). "Schools differ" lines on screen became "your masjid will show you" (extra takbirs, udhiyah status, hair-and-nails, Tashriq timing); the details stay in the Madhab notes. A few guide-context facts moved onto screens (Eid al-Fitr is 1 Shawwal, udhiyah sharing and timing, no fasting on the 11th–13th). Tashriq takbir meaning is a fresh translation.
- **Questions for Shayan:** Eid prayer: add a `{women}` line that women are warmly welcome and rewarded? Should eid-adha also teach the Takbir al-Tashriq wording (now only in hajj-2)? Welcome-back: short Day 3 prayer or the full prayer? should men see one neutral line about hijab on Day 38? Should Day 52's school section be teen-only? Is splitting scenarios by gender (e.g. Day 11 Aaliyah/Marcus) the right pattern?
- **Widget ideas from writers (not built yet):** label scanner (Days 13, 51), Hajj map (47), scale of deeds (41), effort-vs-decree circle (43), red-flag chat (42), story builder (23), rak'ah make-up counter (22), tashahhud finger close-up (25, 30), habit planner on prayer windows (29), modest-dress builder (38).
