---
day: 26
phase: 1
unit: 4
title: "Did my prayer count?"
hook: "Did I break my wudu? Did I pray three or four? Here's how to stop second-guessing every prayer."
minutes: 5
skills: [S1, P3]
pain_points: [overthinking, waswasa]
logs: []
madhab_sensitive: true
scholar_flags: [Q25]
status: draft-pending-scholar-review
glossary: [wudu, rak'ah, salam, tashahhud, sujud al-sahw, waswasa, Salat Ibrahimiyya, Dhuhr]
sources: [Bukhari 137, Muslim 571, Bukhari 401, Abu Dawud 1038, Bukhari 3370, First Instructions on Worship Part I, Qibla 34580, Qibla 36786, SeekersGuidance (proofs for the Hanafi forgetful prostration)]
format: 2
---
# Day 26 · Did my prayer count?

### 1 · hook
```yaml
pic: icon:Brain
text: "New Muslims often finish a prayer and wonder, \"Did that even count?\" Usually, yes. Today you get two tools: a rule that quiets doubt, and a simple fix for real mistakes."
```

### 2 · learn
```yaml
pic: water
text: "**Doubt doesn't cancel what you're sure of.** A man told the Prophet ﷺ he sometimes felt he'd broken his wudu during prayer. The answer: don't leave the prayer unless you hear a sound or notice a smell [Bukhari 137]."
bubbles:
  - "So if you're sure you made wudu, and only *wonder* whether it broke, you still have it."
  - "Clothes and floors too: clean unless you know otherwise [First Instructions on Worship Part I]."
```

### 3 · scenario
```yaml
pic: prayer-mat
situation: "Halfway through Maghrib, Hannah feels a vague \"maybe something happened\" and wonders if her wudu broke. She heard and smelled nothing."
options:
  - text: "Keep praying. Her wudu stands until she's sure it broke"
    best: true
    feedback: "Yes. A maybe doesn't cancel what she's sure of. That's straight from the Prophet's ﷺ guidance."
  - text: "Stop, redo wudu, and start over just in case"
    best: false
    feedback: "Not quite. Restarting over a maybe feeds the doubt, and it tends to come back stronger."
  - text: "Finish, then repeat the prayer twice to be safe"
    best: false
    feedback: "Not quite. Her prayer counts. Repeating it over a vague feeling isn't required, and it wears you out."
```

### 4 · sort
```yaml
prompt: "Sure or just a maybe?"
buckets: ["Maybe: carry on", "Sure: act on it"]
items:
  - text: "You made wudu, and now wonder whether it broke"
    bucket: 0
    why: "You still have wudu until you're sure it broke [Bukhari 137]."
  - text: "A vague feeling mid-prayer, with no sound and no smell"
    bucket: 0
    why: "A maybe doesn't cancel what you're sure of. Keep praying."
  - text: "You're not sure a spot on the floor is clean"
    bucket: 0
    why: "Floors and clothes are clean unless you know otherwise."
  - text: "You clearly heard yourself pass wind"
    bucket: 1
    why: "That's not doubt; you're sure. Your wudu is broken, so redo it and pray again."
```

### 5 · learn
```yaml
pic: icon:Repeat
text: "**Overthinking has a name: *waswasa*** (nagging doubts, often about wudu and prayer). It loves extra effort: washing again, restarting, repeating. The way out is the opposite: go with what you're sure of, and move on."
bubbles:
  - "If doubts are taking over your day, tell {{mentor.name}}. It's common, and it gets better."
```

### 6 · tap_words
```yaml
prompt: "Build the rule that quiets doubt"
answer: "Doubt doesn't cancel what you're sure of"
extra: ["always", "restart", "feelings", "maybe"]
feedback: "That's it. Sure beats maybe, every time [Bukhari 137]."
```

### 7 · learn
```yaml
pic: "pose:sujud"
text: "**Forgot a required part by mistake?** There's a built-in fix: ***sujud al-sahw*** (the forgetfulness prostration), two extra prostrations near the end of the prayer."
bubbles:
  - "It isn't needed for skipping something optional."
```

### 8 · prayer
```yaml
title: "The forgetfulness prostration"
intro: "Say you skipped the sitting after the second rak'ah. Keep going. Here's the fix at the end."
moves:
  - pose: tashahhud
    text: "Carry on with the prayer until its last sitting."
  - pose: sujud
    text: "Near the end of the prayer, make two extra prostrations. {{masjid.name}} will show you exactly where they go."
  - pose: salam-right
    text: "Finish the prayer with the salam. Your mistake is repaired."
variants:
  hanafi:
    moves:
      - pose: tashahhud
        text: "In the last sitting, say the tashahhud."
      - pose: salam-right
        text: "Give **one salam, to the right** only."
      - pose: sujud
        text: "Make **two prostrations**."
      - pose: tashahhud
        text: "Sit, and say the tashahhud again, and what follows it."
      - pose: salam-right
        text: "Now finish with both salams: right…"
      - pose: salam-left
        text: "…and left. Your mistake is repaired."
```

### 9 · choice
```yaml
pic: "pose:qiyam"
prompt: "Dre stands up for the third rak'ah of Dhuhr and realizes he skipped the sitting after the second. He's fully standing. What now?"
options:
  - text: "Keep going, and do the forgetfulness prostration at the end"
    correct: true
    feedback: "Right. Once fully standing, carry on. The forgetfulness prostration repairs it."
  - text: "Start the whole prayer over"
    correct: false
    feedback: "Not quite. No restart needed. The forgetfulness prostration exists for exactly this."
  - text: "Ignore it; it doesn't matter"
    correct: false
    feedback: "Not quite. Skipping that sitting by mistake is what the forgetfulness prostration at the end is for."
```

### 10 · steps
```yaml
title: "Lost count of rak'ahs?"
steps:
  - text: "Go with the lower number, because that's the one you're sure of"
    pic: icon:ListOrdered
  - text: "Finish the prayer from there, then make the forgetfulness prostration [Muslim 571]"
    pic: "pose:sujud"
  - text: "A doubt that only comes after you've finished is normally ignored"
    pic: icon:CircleCheck
done_text: "{{masjid.name}} will show you its way."
variants:
  hanafi:
    steps:
      - text: "Is this kind of doubt new for you? End the prayer and pray it again. `[SCHOLAR: Q25]`"
        pic: icon:RotateCcw
      - text: "Does it happen to you often? Go with what feels most likely. If nothing does, take the lower number"
        pic: icon:ListOrdered
      - text: "Then finish and make the forgetfulness prostration [Bukhari 401]"
        pic: "pose:sujud"
      - text: "A doubt that only comes after the salam is ignored"
        pic: icon:CircleCheck
    done_text: "Sure beats maybe."
```

### 11 · ask_ai
```yaml
chips:
  - "I keep redoing my wudu. How do I stop?"
  - "Walk me through the forgetfulness prostration"
  - "What if I forgot a whole prostration?"
  - "What counts as a required part?"
```

### 12 · do_today
```yaml
pic: icon:Brain
text: "Answer the next doubt with what you're sure of."
steps:
  - "Next time a \"did that count?\" thought shows up, say to yourself: \"I'm going with what I'm sure of\""
  - "Then move on"
log: null
optional_extra: "Walk through the forgetfulness prostration once on your prayer mat, outside prayer, so it's familiar."
```

### 13 · takeaway
```yaml
pic: icon:ShieldCheck
text: "Sure beats maybe: doubt doesn't cancel what you're sure of. For a real mistake, the forgetfulness prostration fixes it."
```

### 14 · closing
Allah made the prayer with room for human mistakes. You don't have to be perfect, just present.

---

## Prayer phrase
```yaml
arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ"
translit: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka hamidun majid"
meaning: "O Allah, send Your blessings on Muhammad and his family, as You sent blessings on Ibrahim (Abraham) and his family. You are Praiseworthy, Glorious."
audio_id: salat-ibrahimiyya-1
when: "Salat Ibrahimiyya part 1. Only in the last sitting of a prayer, right after the tashahhud. In the middle sitting of a 3- or 4-rak'ah prayer, stop after the tashahhud and stand up. The Prophet ﷺ taught these words [Bukhari 3370]."
```

## Check
```yaml
- prompt: "You're sure you made wudu, but you wonder if it broke. What's the rule?"
  options:
    - text: "You still have wudu until you're sure it broke"
      correct: true
      feedback: "Right. Doubt doesn't cancel what you're sure of [Bukhari 137]."
    - text: "Redo it just in case"
      correct: false
      feedback: "Not quite. A maybe doesn't break wudu. Redoing it feeds the doubt."
- prompt: "What is the forgetfulness prostration (sujud al-sahw) for?"
  options:
    - text: "Repairing a required part of the prayer you missed by mistake"
      correct: true
      feedback: "Right. Two extra prostrations at the end fix an honest mistake."
    - text: "Making up a prayer you missed completely"
      correct: false
      feedback: "Not quite. A missed prayer is made up as its own prayer. Sahw fixes mistakes inside a prayer."
```

## AI guide context
**Lesson facts**
- Certainty isn't removed by doubt: someone who feels they may have broken wudu in prayer doesn't leave unless there's a sound or smell [Bukhari 137]. Things are pure unless known to be impure [First Instructions on Worship Part I].
- Hanafi sujud al-sahw: due when a **wajib** (required) act is left out by mistake (e.g. the first sitting, the tashahhud, al-Fatiha in a rak'ah where it's due), or done late. Method: after the tashahhud in the last sitting, one salam to the right, two prostrations, sit, repeat the tashahhud, Salat Ibrahimiyya and a du'a, then the two salams [Qibla 34580 (Faraz Rabbani); SeekersGuidance, proofs for the Hanafi method]. Evidence for prostrating after the salam: [Abu Dawud 1038] (hasan) and Ibn Mas'ud's narration [Bukhari 401].
- It isn't performed for deliberate omissions (a deliberately skipped wajib means the prayer should be repeated) or for skipped sunnah acts [Qibla 34580].
- Hanafi doubt about the number of rak'ahs: if this doubt is new to the person, the prayer is invalidated and repeated; if it happens often, act on the strongest impression; if none, build on the lower number and make sujud al-sahw. Doubts after the salam are ignored unless near-certain a rak'ah was missed [Qibla 36786, from *al-Hadiyya al-'Ala'iyya*]. Other schools: build on the lower number and prostrate before the salam [Muslim 571]. `[SCHOLAR: Q25]`
- Forgetting the first sitting (Hanafi): if they're closer to standing (legs straightened) or fully up, they don't go back; they finish and make sujud al-sahw. If they're still closer to sitting, they sit back down, say the tashahhud, and no sahw is due [Qibla 35619; Qibla 43843].
- Prayer phrase: Salat Ibrahimiyya part 1 [Bukhari 3370], in the final sitting only.

**Likely questions**
- *"I keep redoing wudu."* Name it kindly (waswasa), give the rule, suggest one wudu and no repeats for a week, and talk to their mentor. If it's distressing or compulsive, gently mention it can be OCD-like and a counselor can help; that's not a lack of faith.
- *"I forgot a whole prostration / a whole rak'ah."* This is a missed pillar (fard), not just a wajib. In general: if still in the prayer, make it up and do sujud al-sahw; if unsure or already finished and spoke, ask the imam. Keep it short and escalate details.
- *"What counts as required?"* Short Hanafi list: al-Fatiha, a surah in the first two rak'ahs, stillness, the first sitting, the tashahhud, ending with the salam. Don't overload.
- *"Do I need sahw for every little thing?"* No: only a required part missed by mistake, not optional sunnahs.

**Escalate:** a missed fard (prostration, rak'ah); scrupulosity that's disrupting daily life (mentor and, if needed, a counselor); the "first time" doubt question for converts (below).

**Don't**
- Don't encourage repeating prayers or wudu "to be safe."
- Don't make the convert feel their past prayers were invalid.
- Don't overload with the full list of sahw cases.

## Madhab note
- **When the forgetfulness prostration comes:** Shafi'is make it before the salam; Malikis before the salam for something left out and after it for something added; Hanbalis mostly before, with some cases after. Hanafis after one salam (screen 8).
- **Losing count:** the other three schools build on the lower number and prostrate before the salam [Muslim 571]. Hanafis distinguish a first-time doubt from a habitual one, following Ibn Mas'ud's narration to go with one's best judgment [Bukhari 401].

## Sources
- [Bukhari 137](https://sunnah.com/bukhari:137): don't leave the prayer over a feeling unless there's a sound or smell.
- [Muslim 571](https://sunnah.com/muslim:571): unsure of the count, build on what you're sure of, two prostrations.
- [Bukhari 401](https://sunnah.com/bukhari:401): if in doubt, aim for what's correct, complete, then two prostrations.
- [Abu Dawud 1038](https://sunnah.com/abudawud:1038) (hasan, al-Albani): two prostrations after the salam for forgetfulness.
- [Bukhari 3370](https://sunnah.com/bukhari:3370): the wording of Salat Ibrahimiyya.
- [[Source - First Instructions on Worship]] Part I: purity is the default; don't feed doubts.
- [Qibla via IslamQA.org 34580 (Faraz Rabbani)](https://islamqa.org/hanafi/qibla-hanafi/34580/how-do-i-perform-forgetfulness-prostrations-sujud-al-sahw/): when sahw is due and the Hanafi method.
- [Qibla via IslamQA.org 36786 (Faraz Rabbani)](https://islamqa.org/hanafi/qibla-hanafi/36786/forgetting-in-the-prayer-a-detailed-explanation/): doubt about the number of rak'ahs (Hanafi).
- [SeekersGuidance: proofs for the Hanafi method of the forgetful prostration](https://seekersguidance.org/answers/hanafi-fiqh/what-are-the-proofs-for-the-hanafi-method-of-performing-the-forgetful-prostration/).
- Verified (T2 final review): [Qibla 35619: forgetting the first sitting (Hanafi)](https://islamqa.org/hanafi/qibla-hanafi/35619/for-hanafis-when-one-forgets-to-sit-and-say-the-tashahhud-after-the-second-rakat-then-stands/); [Qibla 43843: omitting the first sitting](https://islamqa.org/hanafi/qibla-hanafi/43843/prayer-omitting-the-first-sitting/); [Darul Iftaa Birmingham 171524: method of sajda sahw](https://islamqa.org/hanafi/daruliftaa-birmingham/171524/the-method-of-sajda-sahwa-in-salaah-and-when-it-should-be-done/).

## Scholar flags
- **Screen 10, Hanafi variant (Q25).** The Hanafi rule is that a doubt about the number of rak'ahs invalidates the prayer if it's the first time such a doubt has occurred (texts say: the first time in one's life after puberty), and that a habitual doubter acts on their strongest impression. Open question: for a convert, does "first time" count from their conversion, and should the app say "if this doubt is new for you" (as drafted) or something more specific? Drafted cautiously: a new doubter repeats the prayer (always valid), a frequent doubter goes with their best judgment.
