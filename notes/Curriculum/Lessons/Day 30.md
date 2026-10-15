---
day: 30
phase: 1
unit: 4
title: "Phase 1 complete"
hook: "Thirty days ago you learned your first words of prayer. Today you can pray the whole thing."
minutes: 5
skills: [P3, P4, B2]
pain_points: [milestone]
logs: [phase1_mentor_checkin]
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [tashahhud, Salat Ibrahimiyya, salam, rak'ah, al-Fatiha, Astaghfirullah, Fajr, wudu, takbir]
sources: [Bukhari 831, Bukhari 3370, Q 2:201, Muslim 591, First Instructions on Worship ch. 7, Darul Ifta Birmingham 20074]
format: 2
---
# Day 30 · Phase 1 complete

### 1 · hook
```yaml
pic: icon:Trophy
text: "**Thirty days, {{convert.first_name}}.** A month ago you were learning what wudu was. Today you'll run through the whole prayer, every phrase, start to finish. Take a second to notice that."
```

### 2 · widget
```yaml
widget: timeline
prompt: "Look how far you've come"
text: "Nobody learns all that perfectly in a month. You learned it anyway."
events:
  - when: "Day 1"
    title: "You said yes"
    text: "Your shahada, and a fresh start."
    pic: fresh-start
  - when: "Day 2"
    title: "Wudu and prayer times"
    text: "How to wash for prayer, and when the five prayers are due."
    pic: water
  - when: "Day 3"
    title: "Your first prayer"
    text: "You prayed from day one, with what you knew."
    pic: "pose:qiyam"
  - when: "Days 11–18"
    title: "Al-Fatiha and a short surah"
    text: "The Qur'an's first chapter, verse by verse, then Qul huwa Allahu ahad."
    pic: quran
  - when: "Days 19–29"
    title: "Every phrase of the prayer"
    text: "The opening du'a, the tashahhud, the last sitting, and the remembrance after it."
    pic: "pose:tashahhud"
  - when: "All month"
    title: "Real life"
    text: "Telling your story, talking with family, and handling slumps and doubts."
    pic: community
```

### 3 · prayer
```yaml
title: "The whole prayer, start to finish"
intro: "A 2-rak'ah prayer, like Fajr, with every phrase you've learned. Tap Play, or go move by move."
moves:
  - pose: stand
    text: "Wudu done, covered, facing the qibla. Intend the prayer in your heart."
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
    text: "Say *Allahu akbar* and prostrate again."
    say: "Subhana rabbiyal-a'la ×3"
  - pose: qiyam
    text: "Say *Allahu akbar* and stand. Second rak'ah: *Bismillah*, al-Fatiha, *Amin*, a short surah, then bow and prostrate the same way."
  - pose: tashahhud
    text: "Sit, the way {{masjid.name}} shows you, and say the whole tashahhud. Your masjid will also show you how to hold your finger."
    say: "At-tahiyyatu… As-salamu 'alayka… As-salamu 'alayna… Ash-hadu…"
  - pose: tashahhud
    text: "This is the last sitting, so add Salat Ibrahimiyya and a short du'a like *Rabbana atina*."
    say: "Allahumma salli… Allahumma barik… Rabbana atina…"
  - pose: salam-right
    text: "Turn to the right."
    say: "As-salamu 'alaykum wa rahmatullah"
  - pose: salam-left
    text: "Turn to the left. Your prayer is done."
    say: "As-salamu 'alaykum wa rahmatullah"
  - pose: tashahhud
    text: "Stay seated a moment for the remembrance after the prayer."
    say: "Astaghfirullah ×3. Allahumma antas-salam…"
done_text: "That's every phrase in its place. Now put your phone away and pray it."
variants:
  hanafi:
    moves:
      - pose: stand
        text: "Wudu done, covered, facing the qibla. Intend the prayer in your heart."
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
        text: "Say *Allahu akbar* and prostrate again."
        say: "Subhana rabbiyal-a'la ×3"
      - pose: qiyam
        text: "Say *Allahu akbar* and stand. Second rak'ah: *Bismillah*, al-Fatiha, *Amin*, a short surah, then bow and prostrate the same way."
      - pose: tashahhud
        text: "Sit {men}on your left foot, with your right foot upright{/men}{women}with both feet out to your right{/women}. Say the whole tashahhud: index finger up at \"*la ilaha*\", down at \"*illa Allah*\"."
        say: "At-tahiyyatu… As-salamu 'alayka… As-salamu 'alayna… Ash-hadu…"
      - pose: tashahhud
        text: "This is the last sitting, so add Salat Ibrahimiyya and *Rabbana atina*."
        say: "Allahumma salli… Allahumma barik… Rabbana atina…"
      - pose: salam-right
        text: "Turn to the right."
        say: "As-salamu 'alaykum wa rahmatullah"
      - pose: salam-left
        text: "Turn to the left. Your prayer is done."
        say: "As-salamu 'alaykum wa rahmatullah"
      - pose: tashahhud
        text: "Stay seated a moment for the remembrance after the prayer."
        say: "Astaghfirullah ×3. Allahumma antas-salam…"
    done_text: "That's every phrase in its place. Now put your phone away and pray it."
```

### 4 · learn
```yaml
madhab_variant: true
pic: "pose:tashahhud"
default: |
  **The two sittings.** In a 3- or 4-rak'ah prayer, the middle sitting has the tashahhud only; then you stand. The last sitting has the tashahhud, Salat Ibrahimiyya and a short du'a like *Rabbana atina*, then the salam.
hanafi: |
  **The two sittings.** In a 3- or 4-rak'ah prayer, the middle sitting has the tashahhud only; then you stand. The last sitting has the tashahhud, Salat Ibrahimiyya and *Rabbana atina*, then the salam.
```

### 5 · widget
```yaml
widget: rakahs
prompt: "Quick check: how many rak'ahs in each prayer?"
text: "Set each one. The 3- and 4-rak'ah prayers are the ones with a middle sitting."
```

### 6 · order
```yaml
prompt: "Put a 2-rak'ah prayer (like Fajr) in order."
items:
  - "Takbir (Allahu akbar), fold your hands, opening du'a (Subhanaka Allahumma…)"
  - "A'udhu billah, Bismillah, al-Fatiha, Amin, then a short surah"
  - "Bow: Subhana rabbiyal-'azim ×3. Rise: Sami'a Allahu liman hamidah, Rabbana wa lakal-hamd"
  - "Prostrate: Subhana rabbiyal-a'la ×3. Sit: Rabbighfirli. Prostrate again"
  - "Stand for the second rak'ah and repeat, from Bismillah and al-Fatiha"
  - "Sit: tashahhud, Salat Ibrahimiyya, Rabbana atina…"
  - "Salam to the right, then to the left; then Astaghfirullah ×3 and Allahumma antas-salam…"
pics: ["pose:takbir", "pose:qiyam", "pose:ruku", "pose:sujud", "pose:qiyam", "pose:tashahhud", "pose:salam-right"]
feedback: "That's the whole prayer. Every phrase you learned this month has a place in it."
```

### 7 · reflect
```yaml
prompt: "Read what you wrote on Day 1 about why you said yes. What's changed in 30 days? What's been hardest, and what are you proud of?"
share_with_mentor: optional
resurface: [day-1]
```

### 8 · ask_ai
```yaml
chips:
  - "Quiz me on the prayer phrases"
  - "Walk me through a 4-rak'ah prayer with every phrase"
  - "Which phrase do I mix up most? Help me practice it"
  - "What comes next in the program?"
```

### 9 · learn
```yaml
pic: icon:Flag
text: "**Phase 1: complete.** You prayed from day one, learned every phrase of the prayer, and kept going through a slump. That's real."
bubbles:
  - "Phase 2 starts tomorrow: what Muslims believe, in depth, and the rest of the pillars. Same pace: one small lesson a day."
```

### 10 · do_today
```yaml
pic: icon:MessageCircle
text: "Check in with {{mentor.name}}."
steps:
  - "Tell them you finished Phase 1"
  - "Share one win and one thing you're still working on"
  - "Tick this when you've done it"
log: phase1_mentor_checkin
optional_extra: "Pray one prayer today using the full run-through, at {{masjid.name}} if you can."
```

### 11 · takeaway
```yaml
pic: "pose:salam-right"
text: "You know the whole prayer now. Keep praying it, five times a day, and it will keep getting easier."
```

### 12 · closing
Thirty days of small steps got you here. Sixty more, the same way. Slow and steady.

---

## Prayer phrase
```yaml
arabic: "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ"
translit: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh"
meaning: "All words of honor belong to Allah, and all prayers, and every good thing. Peace be on you, O Prophet, with Allah's mercy and His blessings. Peace be on us, and on all of Allah's righteous servants. I testify that there is no god except Allah, and I testify that Muhammad is His servant and Messenger."
audio_id: tashahhud-full
when: "The whole tashahhud in one go, as you'll say it in every sitting [Bukhari 831]. In the last sitting, follow it with Salat Ibrahimiyya and Rabbana atina."
```

## Check
```yaml
- prompt: "What do you say in the middle sitting of a 4-rak'ah prayer?"
  options:
    - text: "The tashahhud only, then stand up"
      correct: true
      feedback: "Right. Salat Ibrahimiyya and the du'a come in the last sitting."
    - text: "Everything, then the salam"
      correct: false
      feedback: "Not quite. The salam comes only at the end. In the middle sitting, the tashahhud, then stand."
- prompt: "What comes right after the salam?"
  options:
    - text: "Astaghfirullah ×3, then Allahumma antas-salam…"
      correct: true
      feedback: "Right [Muslim 591]. A short, humble close to every prayer."
    - text: "Another tashahhud"
      correct: false
      feedback: "Not quite. The tashahhud is before the salam. After it: Astaghfirullah ×3 and Allahumma antas-salam."
```

## AI guide context
**Lesson facts**
- Phase 1 milestone. Celebrate warmly; no public sharing, badges or comparison (Spec §3).
- The full prayer with every phrase: opening takbir, *Subhanaka*, *A'udhu*, *Bismillah*, al-Fatiha, *Amin*, a surah; bowing and rising phrases; prostration phrases and *Rabbighfirli*; tashahhud [Bukhari 831]; in the last sitting Salat Ibrahimiyya [Bukhari 3370] and *Rabbana atina* [Q 2:201]; salam; then *Astaghfirullah* ×3 and *Allahumma antas-salam* [Muslim 591].
- Hanafi: middle sitting = tashahhud only; last sitting = tashahhud, Salat Ibrahimiyya, a du'a in Arabic, salam; in the third and fourth rak'ahs of a fard prayer, al-Fatiha only (no added surah); finger raised at "la ilaha" and lowered at "illa Allah" [First Instructions on Worship ch. 7; Darul Ifta Birmingham 20074].
- A learner who still mixes up a phrase keeps praying; the prayer is valid with what they know, and Day 26's forgetfulness prostration covers required parts missed by mistake.

**Likely questions**
- *"Quiz me."* Ask one phrase at a time ("What do you say when you rise from bowing?"), correct gently, and stop after 5.
- *"Walk me through a 4-rak'ah prayer."* Use the run-through; note the middle sitting and that rak'ahs 3–4 have al-Fatiha only.
- *"What's next?"* Phase 2 (Days 31–60): beliefs in depth, the rest of the pillars, halal life. Same pace.
- *"I still don't know it all by heart."* Normal. Keep praying with what they know; review one phrase a day.

**Escalate:** none specific.

**Don't**
- Don't suggest sharing progress publicly.
- Don't imply the convert's earlier, simpler prayers didn't count.

## Madhab note
- **Middle and last sittings:** the same in all four schools (tashahhud in both; Salat Ibrahimiyya in the last). Shafi'is also recommend Salat Ibrahimiyya (the first half) in the middle sitting.
- **Sitting:** in the last sitting, Malikis and Shafi'is sit on the left hip with the left foot tucked under (Hanbalis do this only in prayers of 3 or 4 rak'ahs).
- **The finger and the tashahhud wording:** see Day 25. Shafi'is and Malikis use other authentic wordings of the tashahhud; all are valid.

## Sources
- [Bukhari 831](https://sunnah.com/bukhari:831): the tashahhud (Ibn Mas'ud).
- [Bukhari 3370](https://sunnah.com/bukhari:3370): Salat Ibrahimiyya.
- Qur'an [2:201](https://quran.com/2/201).
- [Muslim 591](https://sunnah.com/muslim:591): after-prayer remembrance.
- [[Source - First Instructions on Worship]] (Hanafi) ch. 7: praying two, three and four rak'ahs; sittings; finger in the tashahhud.
- [Darul Ifta Birmingham via IslamQA.org 20074](https://islamqa.org/hanafi/daruliftaa-birmingham/20074/raising-and-moving-index-finger-in-tashahud/).
