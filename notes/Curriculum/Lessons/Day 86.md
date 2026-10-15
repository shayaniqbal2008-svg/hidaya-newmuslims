---
day: 86
phase: 3
unit: 10
title: "Pray with confidence"
hook: "Alone, at the masjid, or walking in late: today you check that you've got it."
minutes: 5
skills: [P3, P4, P5]
pain_points: [milestone, skill]
logs: [prayer_skill_check]
madhab_sensitive: true
scholar_flags: [Q1]
status: draft-pending-scholar-review
glossary: [rak'ah, al-Fatiha, surah, tashahhud, Salat Ibrahimiyya, takbir, Amin, imam, masjid, salam, sujud al-sahw, qada, Dhuhr, Fajr, Isha, Allah]
sources: [Bukhari 636, Bukhari 722, Bukhari 723, Bukhari 645, Bukhari 137, Bukhari 6464, Muslim 831, First Instructions on Worship ch. 7 and 8, SeekersGuidance (latecomer), SeekersGuidance (latecomer recitation), Research Notes - Core Essentials and Madhab Map]
format: 2
---
# Day 86 · Pray with confidence

# Day 86 · Pray with confidence

### 1 · hook
```yaml
pic: "pose:takbir"
text: "On Day 3 you prayed with one verse and a few phrases. Today is a skill check: the whole prayer, praying behind an imam, and walking in late. It isn't a test you can fail. It shows you how far you've come."
```

### 2 · learn
```yaml
pic: icon:ListChecks
text: "**What \"confident\" means here.** Not perfect. It means you can pray any of the five on your own, with every phrase; pray behind an imam without guessing; join late and finish what you missed; and fix a mistake without panicking."
bubbles:
  - "Let's check each one."
```

### 3 · widget
```yaml
widget: rakahs
prompt: "Warm-up: how many rak'ahs in each prayer?"
text: "Set each one. The 3- and 4-rak'ah prayers are the ones with a middle sitting."
```

### 4 · prayer
```yaml
title: "Check 1: a 4-rak'ah prayer, every phrase"
intro: "Dhuhr, start to finish. Say each phrase along with the figure, then tap Next move."
moves:
  - pose: stand
    text: "Wudu done, covered, facing the qibla. Intend Dhuhr in your heart."
  - pose: takbir
    text: "Raise your hands and say *Allahu akbar*."
    say: "Allahu akbar"
  - pose: qiyam
    text: "Hands folded. Say the opening du'a."
    say: "Subhanaka Allahumma…"
  - pose: qiyam
    text: "Then *A'udhu billah*, *Bismillah*, al-Fatiha, *Amin*, and a short surah."
    say: "A'udhu billah… Bismillah… al-Fatiha… Amin. Qul huwa Allahu ahad…"
  - pose: ruku
    text: "Say *Allahu akbar* and bow."
    say: "Subhana rabbiyal-'azim ×3"
  - pose: itidal
    text: "Rise."
    say: "Sami'a Allahu liman hamidah. Rabbana wa lakal-hamd"
  - pose: sujud
    text: "Say *Allahu akbar* and prostrate."
    say: "Subhana rabbiyal-a'la ×3"
  - pose: jalsa
    text: "Say *Allahu akbar* and sit up."
    say: "Rabbighfirli"
  - pose: sujud
    text: "Say *Allahu akbar* and prostrate again. That's rak'ah 1."
    say: "Subhana rabbiyal-a'la ×3"
  - pose: qiyam
    text: "Stand for rak'ah 2: *Bismillah*, al-Fatiha, *Amin*, a short surah. Then bow, rise and prostrate twice, the same way."
  - pose: tashahhud
    text: "**Middle sitting:** the tashahhud only. {{masjid.name}} will show you how to sit and hold your finger."
    say: "At-tahiyyatu… As-salamu 'alayka… As-salamu 'alayna… Ash-hadu…"
  - pose: qiyam
    text: "Say *Allahu akbar* and stand. Rak'ahs 3 and 4: *Bismillah* and al-Fatiha only, **no surah**. Bow, rise and prostrate twice in each."
  - pose: tashahhud
    text: "**Last sitting:** the tashahhud, then Salat Ibrahimiyya and *Rabbana atina*."
    say: "At-tahiyyatu… Allahumma salli… Allahumma barik… Rabbana atina…"
  - pose: salam-right
    text: "Turn to the right."
    say: "As-salamu 'alaykum wa rahmatullah"
  - pose: salam-left
    text: "Turn to the left. Your prayer is done."
    say: "As-salamu 'alaykum wa rahmatullah"
  - pose: tashahhud
    text: "Stay seated a moment."
    say: "Astaghfirullah ×3"
done_text: "Every phrase in its place. If one slipped, that's the one to practice today."
variants:
  hanafi:
    moves:
      - pose: stand
        text: "Wudu done, covered, facing the qibla. Intend Dhuhr in your heart."
      - pose: takbir
        text: "Raise your hands {men}to your ears{/men}{women}to your shoulders{/women} and say *Allahu akbar*."
        say: "Allahu akbar"
      - pose: qiyam
        text: "Fold your hands, right over left, {men}just below your navel{/men}{women}on your chest{/women}. Say the opening du'a."
        say: "Subhanaka Allahumma…"
      - pose: qiyam
        text: "Then *A'udhu billah*, *Bismillah*, al-Fatiha, *Amin*, and a short surah."
        say: "A'udhu billah… Bismillah… al-Fatiha… Amin. Qul huwa Allahu ahad…"
      - pose: ruku
        text: "Say *Allahu akbar* and bow."
        say: "Subhana rabbiyal-'azim ×3"
      - pose: itidal
        text: "Rise."
        say: "Sami'a Allahu liman hamidah. Rabbana wa lakal-hamd"
      - pose: sujud
        text: "Say *Allahu akbar* and prostrate."
        say: "Subhana rabbiyal-a'la ×3"
      - pose: jalsa
        text: "Say *Allahu akbar* and sit up."
        say: "Rabbighfirli"
      - pose: sujud
        text: "Say *Allahu akbar* and prostrate again. That's rak'ah 1."
        say: "Subhana rabbiyal-a'la ×3"
      - pose: qiyam
        text: "Stand for rak'ah 2: *Bismillah*, al-Fatiha, *Amin*, a short surah. Then bow, rise and prostrate twice, the same way."
      - pose: tashahhud
        text: "**Middle sitting:** sit {men}on your left foot, with your right foot upright{/men}{women}with both feet out to your right{/women}. The tashahhud only: finger up at \"*la ilaha*\", down at \"*illa Allah*\"."
        say: "At-tahiyyatu… As-salamu 'alayka… As-salamu 'alayna… Ash-hadu…"
      - pose: qiyam
        text: "Say *Allahu akbar* and stand. Rak'ahs 3 and 4: *Bismillah* and al-Fatiha only, **no surah**. Bow, rise and prostrate twice in each."
      - pose: tashahhud
        text: "**Last sitting:** the tashahhud, then Salat Ibrahimiyya and *Rabbana atina*."
        say: "At-tahiyyatu… Allahumma salli… Allahumma barik… Rabbana atina…"
      - pose: salam-right
        text: "Turn to the right."
        say: "As-salamu 'alaykum wa rahmatullah"
      - pose: salam-left
        text: "Turn to the left. Your prayer is done."
        say: "As-salamu 'alaykum wa rahmatullah"
      - pose: tashahhud
        text: "Stay seated a moment."
        say: "Astaghfirullah ×3"
    done_text: "Every phrase in its place. If one slipped, that's the one to practice today."
```

### 5 · order
```yaml
prompt: "Now from memory: put a 4-rak'ah prayer, like Dhuhr, in order."
items:
  - "Rak'ah 1: takbir, opening du'a, A'udhu billah, Bismillah, al-Fatiha, Amin, a short surah; bow, rise, two prostrations"
  - "Rak'ah 2: Bismillah, al-Fatiha, Amin, a short surah; bow, rise, two prostrations"
  - "Middle sitting: the tashahhud only, then Allahu akbar and stand"
  - "Rak'ahs 3 and 4: Bismillah and al-Fatiha only, no surah; bow, rise, two prostrations each"
  - "Last sitting: tashahhud, Salat Ibrahimiyya, Rabbana atina"
  - "Salam to the right, then the left; then Astaghfirullah ×3"
pics: ["pose:takbir", "pose:ruku", "pose:tashahhud", "pose:qiyam", "pose:tashahhud", "pose:salam-right"]
feedback: "That's it. The two things people mix up: the middle sitting is tashahhud only, and rak'ahs 3 and 4 are al-Fatiha only."
```

### 6 · sort
```yaml
prompt: "The two sittings people mix up. Middle sitting, or last sitting?"
buckets: ["Middle sitting", "Last sitting"]
items:
  - text: "The tashahhud only"
    bucket: 0
    why: "In the middle sitting you say the tashahhud and nothing more."
  - text: "Allahu akbar, then stand up"
    bucket: 0
    why: "After the middle sitting you stand for rak'ah 3."
  - text: "Salat Ibrahimiyya"
    bucket: 1
    why: "It comes after the tashahhud in the last sitting only."
  - text: "Rabbana atina…"
    bucket: 1
    why: "The short du'a belongs to the last sitting, just before the salam."
  - text: "The salam"
    bucket: 1
    why: "The salam ends the prayer, so it only comes at the very end."
```

### 7 · learn
```yaml
pic: masjid
text: "**Check 2: behind the imam.** Fill the front rows first, shoulder to shoulder [Bukhari 723]. Move after him, never ahead [Bukhari 722]. Give your salam after his."
```

### 8 · prayer
```yaml
title: "Following the imam"
intro: "He leads; you follow, one beat behind."
moves:
  - pose: takbir
    text: "Say each *Allahu akbar* after him, never before."
    say: "Allahu akbar"
  - pose: qiyam
    text: "While he recites, do what {{masjid.name}} teaches about reciting al-Fatiha behind the imam."
  - pose: ruku
    text: "Bow after he bows, never ahead of him."
  - pose: sujud
    text: "Prostrate after him. Everything you say is as you'd say it alone."
  - pose: salam-right
    text: "Give your salam after he gives his."
variants:
  hanafi:
    moves:
      - pose: takbir
        text: "Say each *Allahu akbar* after him, never before."
        say: "Allahu akbar"
      - pose: qiyam
        text: "Say the opening du'a if he hasn't started reciting aloud. Then stay silent: **no al-Fatiha or surah** behind the imam. `[SCHOLAR: Q1]`"
      - pose: qiyam
        text: "When he finishes al-Fatiha, say *Amin* quietly."
        say: "Amin"
      - pose: ruku
        text: "Bow after he bows, never ahead of him."
      - pose: itidal
        text: "Rising from bowing, say only *Rabbana wa lakal-hamd*."
        say: "Rabbana wa lakal-hamd"
      - pose: sujud
        text: "Prostrate after him. Everything else you say as usual."
      - pose: salam-right
        text: "Give your salam after he gives his."
```

### 9 · multi
```yaml
prompt: "Which of these are right when you pray behind an imam? Tap all that apply."
options:
  - text: "Go down to bow after the imam does, not before"
    correct: true
    feedback: "Yes. You follow him; moving ahead of him is the one thing to avoid [Bukhari 722]."
  - text: "Fill a gap in the front row before starting a new one"
    correct: true
    feedback: "Yes. Straight, full rows are part of a complete prayer [Bukhari 723]."
  - text: "If you arrive late, wait at the back until he stands up"
    correct: false
    feedback: "Not quite. Join him right away, in whatever position he's in."
  - text: "Give your salam after the imam gives his"
    correct: true
    feedback: "Yes. He ends the prayer first, then you follow."
```

### 10 · steps
```yaml
title: "Check 3: walking in late (Day 22, in short)"
steps:
  - text: "Walk calmly; no running [Bukhari 636]."
    pic: icon:Footprints
  - text: "Say your opening *Allahu akbar* standing, then join him wherever he is."
    pic: "pose:takbir"
  - text: "Bow with him before he rises, and that rak'ah counts."
    pic: "pose:ruku"
  - text: "At the end, don't give the salam with him. After both his salams, stand and pray what you missed."
    pic: "pose:qiyam"
```

### 11 · widget
```yaml
widget: rows
prompt: "You walk in late. Where do you stand?"
text: "Front rows fill first, with no gaps."
```

### 12 · scenario
```yaml
pic: "pose:itidal"
situation: "Marcus walks into Fajr just as the imam rises from bowing in the second rak'ah. What should he do?"
options:
  - text: "Say Allahu akbar standing, join, sit with the imam to the end without the salam, then stand and pray two rak'ahs"
    best: true
    feedback: "Yes. He didn't catch the bow, so he missed both rak'ahs. Joining still earns reward; he completes two after the salam."
  - text: "Join, and count the second rak'ah as caught"
    best: false
    feedback: "Not quite. A rak'ah counts only if you bow with the imam before he rises. Marcus completes both."
  - text: "Wait until the imam finishes, then pray Fajr alone"
    best: false
    feedback: "That's valid, but he'd miss praying with the group. Joining late is normal, and joining beats waiting."
```

### 13 · reveal
```yaml
title: "Check 4: if something goes wrong. Tap each card."
cards:
  - front: "You skipped the middle sitting and you're already standing"
    back: "Keep going. Do the forgetfulness prostration (sujud al-sahw) at the end (Day 26)."
    pic: "pose:sujud"
  - front: "You wonder if your wudu broke mid-prayer"
    back: "Unless you're sure, it didn't. Carry on [Bukhari 137]."
    pic: water
  - front: "You slept through Fajr"
    back: "Pray it as a make-up (qada) prayer as soon as you can; {{masjid.name}} will show you what to do if the sun is rising. No shame, just pray."
    pic: icon:Sunrise
  - front: "You blank on a phrase"
    back: "Say what you remember and carry on. Practice it afterward, never from your phone during prayer."
    pic: icon:Brain
variants:
  hanafi:
    cards:
      - front: "You skipped the middle sitting and you're already standing"
        back: "Keep going. Do the forgetfulness prostration (sujud al-sahw) at the end (Day 26)."
        pic: "pose:sujud"
      - front: "You wonder if your wudu broke mid-prayer"
        back: "Unless you're sure, it didn't. Carry on [Bukhari 137]."
        pic: water
      - front: "You slept through Fajr"
        back: "Pray it as a make-up (qada) prayer as soon as you can. If the sun is rising, wait until it's fully up (about 20 minutes). No shame, just pray."
        pic: icon:Sunrise
      - front: "You blank on a phrase"
        back: "Say what you remember and carry on. Practice it afterward, never from your phone during prayer."
        pic: icon:Brain
```

### 14 · steps
```yaml
title: "Skill check: say it out loud, from memory, before your next prayer"
intro: "Say each one out loud before you tap Next. Stumble on any? That's the one to drill."
steps:
  - text: "Opening du'a"
    say: "Subhanaka Allahumma…"
    pic: "pose:qiyam"
  - text: "A'udhu billah, Bismillah, al-Fatiha, then Amin"
    say: "A'udhu billah… Bismillah… al-Fatiha… Amin"
    pic: quran
  - text: "One short surah (al-Ikhlas or another you know)"
    say: "Qul huwa Allahu ahad…"
    pic: quran
  - text: "Bowing, rising and prostration phrases, and Rabbighfirli"
    say: "Subhana rabbiyal-'azim… Sami'a Allahu liman hamidah… Subhana rabbiyal-a'la… Rabbighfirli"
    pic: "pose:sujud"
  - text: "The whole tashahhud"
    say: "At-tahiyyatu…"
    pic: "pose:tashahhud"
  - text: "Salat Ibrahimiyya, then Rabbana atina"
    say: "Allahumma salli… Allahumma barik… Rabbana atina…"
    pic: "pose:tashahhud"
  - text: "Explain to yourself: what you say behind the imam, and what you do if you're late"
    pic: masjid
done_text: "Anything you stumbled on? Ask the guide to drill it with you. Now put the phone away and pray."
```

### 15 · ask_ai
```yaml
chips:
  - "Quiz me on the phrase I always forget"
  - "I joined Isha in the third rak'ah. What do I make up?"
  - "Walk me through the forgetfulness prostration again"
  - "What if the imam follows a different school?"
```

### 16 · do_today
```yaml
pic: community
text: "Pray one prayer with a group this week."
steps:
  - "Pray with a group, at {{masjid.name}} or with one other Muslim, using today's steps"
  - "Tick this when you've done your skill check"
log: prayer_skill_check
optional_extra: "Ask {{mentor.name}} to pray next to you once and tell you one thing you're doing well."
```

### 17 · takeaway
```yaml
pic: "pose:salam-right"
text: "You can pray all five alone, follow an imam, join late, and fix a mistake. That's prayer with confidence."
```

### 18 · closing
You aren't praying perfectly; nobody is. You're praying steadily, and that's what Allah loves [Bukhari 6464].

---

## Check
```yaml
- prompt: "In the third and fourth rak'ahs of Dhuhr, what do you recite while standing?"
  options:
    - text: "Al-Fatiha only"
      correct: true
      feedback: "Right. The short surah is added only in the first two rak'ahs."
    - text: "Al-Fatiha and a short surah"
      correct: false
      feedback: "Not quite. That's the first two rak'ahs. Rak'ahs 3 and 4 are al-Fatiha only."
- prompt: "You arrive late and the imam has already risen from bowing. Did you catch that rak'ah?"
  options:
    - text: "No. Join him now, and make that rak'ah up after his salam"
      correct: true
      feedback: "Right. You catch a rak'ah by bowing with the imam before he rises."
    - text: "Yes, as long as you're in the row before the prostration"
      correct: false
      feedback: "Not quite. The bow is the cut-off. Join anyway; you'll make it up after."
- prompt: "What's the middle sitting of a 4-rak'ah prayer?"
  options:
    - text: "The tashahhud only, then stand"
      correct: true
      feedback: "Right. Salat Ibrahimiyya and the du'a come in the last sitting."
    - text: "The tashahhud, Salat Ibrahimiyya and the salam"
      correct: false
      feedback: "Not quite. That's the last sitting. In the middle one, say the tashahhud and stand up."
```

## AI guide context
**Lesson facts**
- A 4-rak'ah prayer: in rak'ahs 1–2, al-Fatiha then a short surah; middle sitting: tashahhud only; rak'ahs 3–4: al-Fatiha only; last sitting: tashahhud, Salat Ibrahimiyya, a du'a (*Rabbana atina*), then the salam [First Instructions on Worship ch. 7].
- Congregation: fill front rows, straight [Bukhari 723]; follow the imam, never precede him [Bukhari 722]; 27 times the reward [Bukhari 645].
- Hanafi follower: opening du'a, then silence during the imam's recitation (no al-Fatiha or surah in any prayer); Amin quietly; *Rabbana wa lakal-hamd* only on rising; the rest as usual; salam after him [First Instructions on Worship ch. 8; Research Notes - Core Essentials (madhab map)].
- Latecomer (Hanafi): opening takbir standing, then join in any position; bowing with the imam before he rises catches the rak'ah; no salam with the imam; after both his salams, stand and make up the missed rak'ahs [Bukhari 636; SeekersGuidance (latecomer); SeekersGuidance (latecomer recitation)]. Fajr example on screen 12: caught neither bow, so two rak'ahs are made up, each with al-Fatiha and a surah, then the final sitting.
- Mistakes: skipped wajib (e.g. the middle sitting) → sujud al-sahw (Day 26); doubt about wudu → certainty stands [Bukhari 137]; a missed prayer is made up as soon as possible (qada). Hanafi: not while the sun is rising; wait until it's fully up [Muslim 831]. Day 21 covers make-up prayers.

**Likely questions**
- *"I joined Isha in the third rak'ah."* Two missed: after the imam's salams, stand and pray two rak'ahs, each with al-Fatiha and a surah, with no sitting between them, then the final sitting and salam [SeekersGuidance (latecomer recitation)]. Suggest confirming with the mentor.
- *"I joined in the last rak'ah of Maghrib."* Two missed: one with al-Fatiha and a surah, sit for the tashahhud, then one more with al-Fatiha and a surah, final sitting, salam.
- *"Drill me on a phrase."* Say it in pieces, have them repeat, build up. Practice happens outside prayer only.
- *"The imam follows another school."* Praying behind him is valid; follow his movements, recite per your own school.
- *"I still feel unsure."* Normal. Suggest praying next to the mentor, and re-reading Days 22, 26 and 30.

**Escalate:** specific prayer-repair cases after a mistake the guide isn't sure about; physical limits on standing or prostrating (Day 58 basics, details to the imam).

**Don't**
- Don't tell a Hanafi convert to recite al-Fatiha behind the imam.
- Don't suggest reading from a phone or card during prayer.
- Don't turn the skill check into a pass/fail grade; it's a confidence check.

## Madhab note
- **Reciting behind the imam:** Hanafis stay silent in every prayer; Malikis recite al-Fatiha in the silent prayers only; Shafi'is recite al-Fatiha in every rak'ah; Hanbalis recommend it in the silent prayers and in the imam's pauses.
- **Making up a missed prayer at sunrise:** Hanafis wait until the sun is fully up [Muslim 831]; Shafi'is and Hanbalis allow making up an obligatory prayer even then.
- **Latecomer's make-up:** schools differ on whether the made-up rak'ahs count as the start or the end of your prayer, which changes small details of recitation. Follow your masjid.
- **Rak'ahs 3 and 4:** in the other three schools, al-Fatiha is required in every rak'ah you pray alone or as imam. Hanafis count it as a sunnah there (the best option), and also allow saying *Subhan Allah* three times or staying silent for that long. Reciting it covers every school.

## Sources
- [Bukhari 636](https://sunnah.com/bukhari:636): come calmly; pray what you catch and complete what you missed.
- [Bukhari 645](https://sunnah.com/bukhari:645): congregation is twenty-seven times better.
- [Bukhari 722](https://sunnah.com/bukhari:722): the imam is there to be followed; straighten the rows.
- [Bukhari 723](https://sunnah.com/bukhari:723): straight rows complete the prayer.
- [Bukhari 137](https://sunnah.com/bukhari:137): don't leave the prayer over a doubt about wudu.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the deeds Allah loves most are the regular ones.
- [Muslim 831](https://sunnah.com/muslim:831): no prayer as the sun is rising.
- [SeekersGuidance: A latecomer's prayer, when is a rak'ah missed?](https://seekersguidance.org/answers/hanafi-fiqh/a-latecomers-prayer-when-is-one-considered-to-have-missed-a-cycle-rakat/); [SeekersGuidance: Latecomer recitation in prayer](https://seekersguidance.org/answers/hanafi-fiqh/latecomer-recitation-in-prayer/).
- [[Source - First Instructions on Worship]] (Hanafi) ch. 7 (praying 2, 3 and 4 rak'ahs; the sittings) and ch. 8 (praying in a group; the follower; missed prayers).
- [[Research Notes - Core Essentials and Madhab Map]]: the madhab map (al-Fatiha behind the imam).
- Madhab note, rak'ahs 3–4 (verified, T2 final review): [SeekersGuidance: does silence in place of the Fatiha require sujud al-sahw?](https://seekersguidance.org/answers/hanafi-fiqh/does-silence-in-place-of-the-fatiha-require-sujud-al-sahw/); [Qibla 37325: not reciting the Fatiha in the final two rak'ahs](https://islamqa.org/hanafi/qibla-hanafi/37325/the-obligatory-prayer-not-reciting-the-fatiha-in-the-final-two-rakats-2/).

## Scholar flags
- **Screen 8 (Q1).** The Hanafi follower's practice (no recitation behind the imam; Amin quietly; only *Rabbana wa lakal-hamd* on rising) is on screen as the pilot default, pending the reviewing imam's confirmation of the pilot masjid's school. The `default` variant defers to the masjid.
