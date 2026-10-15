# Practice hub, open days, alphabet and seerah: design

Approved in chat by Shayan on 2026-10-07 ("all of it looks good, get to it"). Hub log: vault `Projects/Hidaya/Hidaya.md`.

## Goal
Make the Practice tab a place converts come back to: retry what they got wrong, drill words, phrases and short surahs they've learned, and (optionally) learn the Arabic alphabet and the Prophet's ﷺ life. Also let converts work ahead on the 90 days.

## Decisions (from Shayan)
1. All four sections: Mistakes, existing-content drills, Arabic alphabet, Seerah.
2. Seerah: ~40 detailed episodes, chronological.
3. Alphabet audio: openly licensed recordings (no spend). If good licensed audio can't be found for a sound, stop and ask.
4. Alphabet and seerah are open from day one, labelled "optional, no pressure". The daily lesson stays first.
5. **All 90 days are open to everyone** ("there's no harm in learning more"). Today's recommended lesson stays the next unfinished day.
6. **Seerah accuracy is confirmed against highly credible online sources** (see §6).

## 1. Open days
- `getProgress` sets `schedule.unlockedThrough = 90` for every convert (today only the demo does). `computeToday` is unchanged, so "today's lesson", welcome-back and calendar modules work as now; the streak is still one finished lesson per day.
- Path and Today show every day as open; the "tomorrow" lock styling goes. Copy on Today: "Want more? Every day is open. Go at the pace that feels right."
- Masjid dashboard "day reached" must mean the highest finished day; check `dashboard_converts` and adjust if it uses the unlocked day.
- The demo banner wording changes, since unlocking is no longer demo-only (the demo still skips the invite link).

## 2. Practice tab layout
Top to bottom:
1. **Review**: the existing spaced review (unchanged).
2. **Mistakes (N)**: questions answered wrong; hidden when N = 0.
3. **Explore more · optional**: cards for Arabic alphabet, Seerah, Words, Prayer phrases, Du'as & short surahs, each with a progress bar ("4 of 12").

Extra lessons give XP (10 each, as lessons do). They never affect the streak, and nothing nags about them.

## 3. Mistakes to retry
- New table `practice_mistakes(convert_id, lesson_id, ref, wrong_count, right_streak, last_wrong_at, cleared_at)`, primary key `(convert_id, lesson_id, ref)`. `ref` is `check:N` for end-of-lesson Check items and `screen:N` for graded in-lesson screens (choice, multi, sort, order, fill, tap_words, match).
- Written when a graded answer is wrong: in lessons, in the Check, in reviews and in practice tracks. A correct retry adds 1 to `right_streak`; a wrong one resets it. **Cleared after 2 right in a row.**
- RLS: own rows only. No view, function or staff role reads it. Privacy tests: staff (admin, imam, mentor, org admin later) get zero rows; another convert gets zero rows.
- Session: up to 8 mistakes, oldest first, played in the existing LessonPlayer practice mode (it already renders Check items; extend it to render a single graded screen from its lesson, with the lesson's citations and glossary).

## 4. Drills from existing content
Only what the convert has already been taught (`firstTaught` ≤ a finished lesson).
- **Words**: glossary terms (Arabic, transliteration, meaning). Flip cards, then a match round of 5.
- **Prayer phrases**: the phrase track from Days 8–30 (Arabic text pulled from source data, never generated). Order-the-words and fill-the-gap rounds.
- **Du'as & short surahs**: al-Fatiha, al-Ikhlas and the du'as taught in lessons, revealed line by line, then a fill-the-missing-word round. Text comes from the Citation Bank and cite data only.
These are generated at request time from compiled content (no new lesson files) and are deterministic for a given day.

## 5. Arabic alphabet (~12 lessons)
- Lesson files in the vault: `Curriculum/Lessons/Alphabet/alphabet-NN.md`, format 2, compiled like the 90 days, checked by the checker.
- Sequence: letters by shape family (ب ت ث; ج ح خ; د ذ; ر ز; س ش; ص ض; ط ظ; ع غ; ف ق; ك ل م ن; ه و ي; ا ء), then short vowels (fatha, kasra, damma), sukun and shadda, long vowels, joining, and reading first words (Allah, Bismillah, al-Hamdu lillah, then al-Fatiha's first verse).
- New widget `letter`: shows a letter's isolated, initial, medial and final forms, plays its sound and its name. New screen use: "tap the letter you hear" (choice with audio prompt).
- Audio: per-letter and per-vowel files in `public/audio/alphabet/`, from openly licensed sources (e.g. Wikimedia Commons), each logged in `public/audio/alphabet/ATTRIBUTIONS.md` (file, source URL, author, license). A file is used only if its license allows reuse in an app and the pronunciation is standard (checked against a second reference).

### §5 update (2026-10-08, Shayan)
- **Letter-name audio** comes from Wikimedia Commons / Lingua Libre: AlNatiq (CC0) for 23 letters; Zinou2go (CC BY-SA 3.0) for ب د ز و; Rashed Aljahdali (CC BY 4.0) for ظ and hamza. Credits in `ATTRIBUTIONS.md` and on an in-app credits line. Shayan listens to all 28 and approves before they ship; any rejected clip is swapped for another speaker's.
- **Vowel lessons are text-only for now** (shapes + English sound hints, e.g. "ba as in *bat*"). Shayan or an imam records the syllables before launch; the lessons gain audio then.
- Alphabet lessons give XP but never count toward the streak (track lessons are excluded from the streak calculation).

## 6. Seerah (~40 episodes)
- Files: `Curriculum/Lessons/Seerah/seerah-NN.md`, format 2, same checker, Citation Bank rule, "draft, pending scholar review" label.
- Arc: Arabia and the Ka'bah before Islam → lineage and birth → childhood (Halimah, his mother's and grandfather's deaths, Abu Talib) → youth and trade, al-Amin → marriage to Khadijah → the Ka'bah's Black Stone → Hira and the first revelation → the first Muslims → public call and persecution → migration to Abyssinia → Hamzah and Umar → the boycott → the Year of Sorrow → Ta'if → al-Isra' wal-Mi'raj → the pledges of 'Aqabah → the hijra → building Madinah (masjid, brotherhood) → Badr → Uhud → the Trench → Hudaybiyyah → letters to rulers → Khaybar → Makkah opened → Hunayn and Ta'if → Tabuk → the Year of Delegations → the farewell pilgrimage → his illness and passing → his family and character (closing episodes). Final count and splits are set in the outline (Phase C, step 1).
- **Accuracy (Shayan's requirement):**
  - Every factual claim in an episode has a source. Where a primary source exists it is cited: the Qur'an (quran.com) or a hadith on sunnah.com **with its grading**; only sahih/hasan hadith are told as fact.
  - Events known only from the classical seerah literature (Ibn Ishaq/Ibn Hisham, Ibn Sa'd, al-Tabari) are cross-checked against at least two highly credible present-day sources from this list: Yaqeen Institute, SeekersGuidance, Qalam Institute, IslamQA, Dar al-Ifta al-Misriyyah, sunnah.com, quran.com, and university or reference works available free online (e.g. Encyclopaedia Britannica for dates and places). Where they disagree (dates, numbers, names), the lesson uses the majority or the cautious wording ("about", "according to the early biographers") and logs the difference.
  - Weak or disputed stories (for example, the spider and the dove at the cave, if the fact-check confirms its chain is weak) are left out or labelled as "a well-known story whose chain scholars consider weak".
  - A separate verification agent re-opens every source in every episode and records the result in `Curriculum/Seerah Fact-Check Log.md` (claim, source, verdict). Nothing ships with an unresolved claim.
  - A seerah section is added to the Scholar Review Packet.
- Production: outline first (Shayan approves), then episodes 1–5 (Shayan approves the voice), then Opus writers 3 at a time, then the fact-check pass, then the checker.

## 7. Build order and checkpoints
- **Phase A** (code, existing content): open days, Practice layout, Mistakes, Words, Prayer phrases, Du'as & surahs. Checkpoint A: Shayan tries it on his phone.
- **Phase B**: alphabet (audio sourcing, `letter` widget, 12 lessons). Checkpoint B.
- **Phase C**: seerah (outline → 5 episodes → the rest → fact-check). Checkpoints C1 (outline), C2 (first 5), C3 (all, with the fact-check log).

## 8. Verification
- Unit tests: mistake bookkeeping (wrong → listed; right twice → cleared; wrong resets the streak); drill selection only includes taught items; open days (`canOpen` true for all 90).
- Privacy tests (PGlite RLS): `practice_mistakes` invisible to staff and other converts.
- Checker: 0 errors on all lessons including alphabet and seerah.
- Headless Chrome: every new lesson clicked through as both genders; every drill played; end to end: answer wrong in Day 1 → appears in Mistakes → right twice → gone; open Day 40 on a fresh account.
- Audio: every referenced file exists and loads; every file has an ATTRIBUTIONS row.
- Seerah: fact-check log has a verdict for every claim; no unresolved rows.
- Typecheck, lint, build clean; existing tests still pass.

## Out of scope
Handwriting/tracing letters, Qur'an recitation grading, leaderboards, seerah audio narration.
