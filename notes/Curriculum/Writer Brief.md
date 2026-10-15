---
created: 2026-10-05
project: "[[Hidaya]]"
task: T2
---
# Writer Brief (for lesson-writing agents)

> [!info] Who this is for
> Each lesson writer (a Claude agent or a person) gets a batch of days. Read this note, then do exactly what it says. The rulebook is [[Curriculum Spec]]; the day plan is [[Outline - 90 Days]]; the model lessons are `Lessons/Day 01.md`–`Day 03.md`.

> [!important] Format 2 (from Checkpoint 4, 2026-10-07)
> All lessons are now written in **format 2**: [[Curriculum Spec]] §4.6. Add `format: 2` to the frontmatter. Less reading, a picture on most screens, every how-to as a `steps` screen, prayer shown with the `prayer` figure, `{men}`/`{women}` tags instead of side-by-side rules, no "other schools" on screens. Model lessons: the new `Day 01.md`–`Day 03.md`. When converting an existing lesson, keep its religious content, citations, scholar flags, Check, AI guide context, Madhab note and Sources; rebuild the screens.

## 1. Read first (in this order)
1. [[Curriculum Spec]], all of it. It wins over anything else.
2. [[Outline - 90 Days]]: your days, plus the days on either side (so lessons connect), the phrase track, the coverage tables, and the teen-lines list.
3. `Lessons/Day 01.md`, `Day 02.md`, `Day 03.md`: the model for format, voice, interactions, AI guide context, Madhab notes, Sources and Scholar flags. Match them.
4. [[Citation Bank]] and [[Glossary]].
5. For content: the T1 research notes in `Curriculum/` (especially [[Research Notes - Core Essentials and Madhab Map]] for anything religious, and [[Research Notes - Retention and Convert Voices]] for the convert experience) and the book summaries in `Curriculum/Sources/`. Full book texts (for reading only, never copying) are in `~/.cache/new-muslims-program/books/` (fieldguide, welcome, revealedpath, beingmuslim, hanafi).

## 2. Write
- One file per day: `Lessons/Day NN.md` (two digits). Modules go in `Lessons/Modules/<id>.md`.
- Follow the outline's title, goal, skills, pain point and main interaction. You may sharpen a title or swap the main interaction if it clearly teaches better; say so in your report.
- Days 8–30 also need a `## Prayer phrase` section with the day's phrase from the outline's phrase track.
- **Original wording only.** Read sources, close them, then write. Never paste.
- **Religious accuracy is the top priority.** Every religious claim needs a source in the lesson's Sources: Qur'an or hadith (from the Citation Bank), a Tier-1 fatwa or scholar page from the research notes, or one of the books. Where schools differ, teach the Hanafi practice on screen (variant block) and the others in the Madhab note. Where a scholar question in Spec §9 applies, use its drafted position and mark `[SCHOLAR: Qn]` inline and in the frontmatter. If you hit a new unresolved question, don't invent an answer: draft the most cautious mainstream position, flag it as `[SCHOLAR: NEW]` and describe it in your report (I'll number it).
- **Teens.** If your day is on the outline's teen-lines list, add the teen line (Spec §5).
- **Role-play screens** follow Spec §6.2 rule 13 (no scholars, imams, the Prophet ﷺ or Companions as characters; nobody abusive).
- Keep it warm, plain and short. Count your words. Interactions should be real thinking (scenarios with tradeoffs, ordering, matching, recall), not filler.

## 3. Citations
- Use the lookup tool for every verse and hadith you cite, and read the full text before citing it:
  - `python3 "Curriculum/Tools/cite.py" q 2:186` · `q 31:14-15` (Qur'an, Saheeh International + Arabic)
  - `python3 "Curriculum/Tools/cite.py" h bukhari 50` (hadith, sunnah.com numbering; collections: bukhari muslim abudawud tirmidhi nasai ibnmajah)
  - `python3 "Curriculum/Tools/cite.py" ha bukhari 831` (the Arabic text of a hadith)
  - `python3 "Curriculum/Tools/cite.py" s bukhari "neighbor"` (search)
- A citation the bank doesn't have yet: check it with the tool, then add it to **your batch's additions file** (below), never directly to the Citation Bank. Include the gist in your own words, the grade (for collections other than Bukhari and Muslim, use only hadith graded sahih or hasan by al-Albani or an equivalent, and give the grade), and the days that use it.
- Only the six collections. Nothing from Ahmad, al-Bayhaqi, al-Tabarani, etc.
- Never put a hadith gist in quotation marks as the Prophet's words.
- **Arabic text in `phrase` screens** must be copied from the tool's output: Qur'an from `q`, du'as and prayer phrases from the Arabic hadith text (`ha`) of the hadith that teaches them (e.g. the tashahhud of Ibn Mas'ud, Bukhari 831, which is the Hanafi wording). If you can't source a phrase's Arabic, write `arabic: "TODO-VERIFY"` and say so in your report. Never type Arabic from memory.

## 4. Files you may and may not touch
- **Write:** your lesson files; `Curriculum/Drafts/Batch <X> - additions.md` with two sections, *Citation Bank additions* (table rows in the bank's format) and *Glossary additions* (table rows in the glossary's format).
- **Don't edit:** Curriculum Spec, Outline, Citation Bank, Glossary, Days 1–3, other batches' lessons, the hub. Note any needed change in your report instead.

## 5. Check before you finish
Run `python3 "Curriculum/Tools/check_lessons.py" "Curriculum/Lessons/Day NN.md" …` on your files. Fix every error **except** "not in Citation Bank" and "missing from Glossary" for entries you've listed in your additions file (those clear when I merge). Then re-read each lesson once as a nervous new Muslim would, and once as a strict Hanafi mufti would.

## 6. Report (your final message)
Under 400 words:
- Days written; anything you changed from the outline and why.
- New scholar questions (`[SCHOLAR: NEW]`), with the passage and the cautious position you drafted.
- Any `TODO-VERIFY` Arabic.
- Anything you weren't sure was accurate.
- Checker result (remaining errors should only be pending bank or glossary additions).
