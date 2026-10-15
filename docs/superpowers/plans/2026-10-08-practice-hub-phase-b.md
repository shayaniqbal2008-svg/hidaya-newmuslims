# Practice hub, Phase B (Arabic alphabet): Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax.

**Goal:** An optional 12-lesson Arabic alphabet track in Practice: every letter's shapes and name (with audio), vowel marks and joining (text only for now), ending with reading Allah, Bismillah and al-Fatiha's first verse.

**Architecture:** Alphabet lessons are ordinary vault lessons in `Curriculum/Lessons/Alphabet/` with a `track: alphabet` frontmatter, compiled as `kind: "track"` (ids `alphabet-01`…`alphabet-12`). A static letter table (`lib/content/alphabet.ts`) feeds a new `letter` widget; letter-name audio lives in `public/audio/alphabet/`. Track lessons open any time, earn XP, and are excluded from the streak.

**Tech Stack:** Next.js 16, the existing compiler (`scripts/compile-lessons.ts`) and checker (`Curriculum/Tools/check_lessons.py`), Vitest, playwright-core for e2e.

**Spec:** `docs/superpowers/specs/2026-10-07-practice-hub-design.md` §5 and "§5 update (2026-10-08)".

## Global Constraints
- Letter-name audio only from the approved Commons files; every file has an ATTRIBUTIONS row (file, source URL, speaker, license). CC0 needs none legally but is credited anyway.
- Vowel/syllable screens have **no audio** (text + English sound hints) until Shayan's recordings exist.
- Arabic is rendered with the `.arabic` class, `lang="ar"`, `dir="rtl"`.
- Track lessons: open from day one, labelled optional, XP 10 each, **never** counted in the streak.
- Format 2 lesson rules (Curriculum Spec §4.6) and the checker apply: ≤45-word reading screens, a Check section, AI guide context, Sources.
- Qur'an text in the last lesson (Bismillah, Q 1:2) comes from `citations.json` / the Citation Bank only.

## Review Focus
1. **Non-joining letters** (ا د ذ ر ز و): the widget shows only isolated and final forms, never a fake initial/medial. Test in Task 3.
2. **A missing or blocked audio file** (offline, 404): the widget still shows the letter and name; the play button just does nothing, no crash. Test in Task 3 (component renders without audio) and e2e.
3. **Track lessons don't leak into the 90-day path, Today, the welcome-back quiz, the dashboard's "day reached" or the streak.** Tests in Tasks 1–2.
4. **Opening `alphabet-NN` directly** works for any convert; `alphabet-13` is rejected. Test in Task 2.
5. **Arabic letters inside choice options** (tap the letter you hear) render RTL in the Arabic font and aren't confused with similar shapes by tiny size. Checked in Task 6 screenshots.

---

### Task 1: Compile track lessons
**Files:** Modify `scripts/compile-lessons.ts` (discover `Lessons/Alphabet/*.md`; frontmatter `track`, `order`; `kind: "track"`), `lib/content/types.ts` (`Lesson.kind` adds `"track"`, `Lesson.track: string | null`, `Lesson.order: number | null`, `LessonSummary` gains `track`, `order`); checker `Curriculum/Tools/check_lessons.py` accepts `track` lessons (no `day`/`module`).
**Interfaces:** Produces compiled lessons `alphabet-NN` with `kind: "track"`, `track: "alphabet"`, `order: N`; `index.json` lists them.
- [ ] Failing test `lib/content/tracks.test.ts`: after `npm run content`, index has 0 track lessons in the 90-day units; every `kind === "track"` lesson has `track` and `order`; ids match `/^alphabet-\d{2}$/`. (Write one stub lesson `alphabet-01.md` first so the test has input.)
- [ ] Implement; `npm run content` → 0 errors; checker → 0 errors; tests pass. Commit.

### Task 2: Access, streak and XP for track lessons
**Files:** Modify `lib/access.ts` (track ids open: `/^alphabet-(\d{2})$/` with 1–12), `lib/streak.ts` callers (Today, Me, lesson page) pass only non-track completion dates; `app/(convert)/lesson/[id]/page.tsx` (`exitHref="/practice"` for track lessons).
**Interfaces:** Produces `streakDates(completed: Record<string,string>): string[]` in `lib/streak.ts` (dates of completed ids not starting with `alphabet-`/`seerah-`).
- [ ] Failing tests: `canOpen("alphabet-01", fresh)` true, `canOpen("alphabet-13", fresh)` false; `streakDates({ "day-01": "2026-10-01", "alphabet-01": "2026-10-02" })` → `["2026-10-01"]`.
- [ ] Implement; wire `streakDates` into the three callers. Tests pass. Commit.

### Task 3: Letter data, audio and the `letter` widget
**Files:** Create `lib/content/alphabet.ts`, `lib/content/alphabet.test.ts`, `public/audio/alphabet/*.wav` (28 files, names `alif.wav`…`hamza.wav`), `public/audio/alphabet/ATTRIBUTIONS.md`; modify `lib/content/types.ts` (`WidgetName` adds `"letter"`, widget field `letters?: string[]`), `components/lesson/widgets2.tsx` (LetterWidget), compiler/checker allow the widget.
**Interfaces:** `type LetterInfo = { char: string; name: string; translit: string; hint: string; joins: boolean; audio: string }`; `ALPHABET: LetterInfo[]` (28 + hamza, in order); `letterForms(l: LetterInfo): { isolated: string; initial?: string; medial?: string; final: string }` (ZWJ U+200D technique; non-joiners return isolated + final only).
- [ ] Failing tests: 29 entries in standard order; `letterForms` of ب has 4 forms, of ا/د/ذ/ر/ز/و only isolated + final; every `audio` file exists in `public/audio/alphabet/` and has an ATTRIBUTIONS row; every hint is non-empty.
- [ ] Download the 28 approved files (urls from the research note; polite User-Agent, one at a time) into `public/audio/alphabet/`, convert nothing; write ATTRIBUTIONS.md. Implement data + widget (cards: big letter, forms row, name + translit + hint, ▶ plays `new Audio(src)` with `.catch(() => {})`; `ready()` after every letter in the screen was played or tapped). Tests pass. Commit.

### Task 4: "Tap the letter you hear"
**Files:** Modify `lib/content/types.ts` (choice screen `audio?: string`), `components/lesson/screens.tsx` (ChoiceScreen shows a ▶ button that plays it; options with Arabic-only text get `.arabic` + `lang="ar"`).
- [ ] Failing test in `lib/content/alphabet.test.ts`: every `audio` used by a compiled alphabet lesson's choice screens exists in `public/audio/alphabet/`.
- [ ] Implement; typecheck; commit.

### Task 5: Write the 12 alphabet lessons (vault)
**Files:** `Curriculum/Lessons/Alphabet/alphabet-01.md` … `alphabet-12.md`.
Sequence: 1 ب ت ث · 2 ن ي (same "tooth" family) · 3 ج ح خ · 4 د ذ ر ز (non-joiners) · 5 س ش ص ض · 6 ط ظ ع غ · 7 ف ق ك ل · 8 م ه و ا ء · 9 short vowels (fatha, kasra, damma), text only · 10 sukun and shadda, text only · 11 long vowels and joining, text only · 12 reading: Allah, Bismillah, al-Hamdu lillah (Q 1:2), from the Citation Bank.
Each lesson: hook → `letter` widget (2–4 letters) → tap-the-letter-you-hear choices → a match (letter ↔ name) → takeaway; Check (2 items); AI guide context; Sources (Commons pages, a standard Arabic primer reference). Warm, short, no pressure ("optional; come back anytime").
- [ ] Write, `npm run content` → 0 errors; checker → 0 errors. Commit (vault is not in git; commit the compiled content).

### Task 6: Practice card and end-to-end
**Files:** Modify `app/(convert)/practice/page.tsx` (Alphabet card under Explore more: "N of 12", link to the first unfinished alphabet lesson, "Start" when 0).
- [ ] Typecheck, lint, build; full test suite.
- [ ] Headless Chrome on a local build, demo account: Practice shows "Alphabet · 0 of 12"; open alphabet-01, play every letter (audio requests return 200), finish → "1 of 12"; streak unchanged and XP +10; every alphabet lesson auto-played to the end with 0 page errors; screenshots of a letter widget and a tap-the-letter screen checked by eye (RTL, font, non-joiner forms).
- [ ] Update the vault hub; Shayan deploys; checkpoint B on his phone.
