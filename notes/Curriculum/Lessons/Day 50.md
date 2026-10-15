---
day: 50
phase: 2
unit: 6
title: "Dry spells"
hook: "Prayer feels like a routine and your heart feels quiet. Here's how to bring it back to life."
minutes: 5
skills: [S4]
pain_points: [iman-dips]
logs: []
madhab_sensitive: false
scholar_flags: [Q20]
status: draft-pending-scholar-review
glossary: [iman, dhikr, du'a, wudu, Subhan Allah, Allah, ﷺ]
sources: [Muslim 2750, Q 13:28, Bukhari 6407, Bukhari 6406, Bukhari 2101, Muslim 2699, Bukhari 7405, Bukhari 6464, Revealed Path ch. 17–18, Field Guide ch. 18]
format: 2
---
# Day 50 · Dry spells

### 1 · hook
```yaml
pic: icon:Sun
text: "Fifty days in. Maybe the early glow has faded and things feel dry: you pray, but your heart isn't in it. On Day 12 you learned that iman (faith) goes up and down. Today: practical ways to bring it back up."
```

### 2 · learn
```yaml
pic: icon:HeartHandshake
text: "**First, the reminder.** A dry spell is normal. Feeling low is not leaving Islam. Leaving is a choice to reject it. `[SCHOLAR: Q20]`"
bubbles:
  - "Hanzalah felt his faith fade at home and feared he'd become a hypocrite. The Prophet ﷺ reassured him: there's a time for this and a time for that [Muslim 2750]."
```

### 3 · widget
```yaml
widget: iman-graph
prompt: "Where a dry spell sits"
text: "Drag along the line. A dry stretch is one part of the path, and small steps carry you through it."
points:
  - label: "The early glow"
    text: "Everything felt bright and new."
  - label: "The dry spell"
    text: "You pray, but your heart feels quiet. Normal, and it passes."
  - label: "Small steps"
    text: "A little dhikr, good company, a few verses of Qur'an."
  - label: "Coming back to life"
    text: "The heart softens again. Next time it dips, you'll know what to do."
```

### 4 · learn
```yaml
pic: icon:Sprout
text: "**Three things revive a heart:** **dhikr** (remembering Allah), **good company**, and **the Qur'an**, even a few verses."
bubbles:
  - "*\"Unquestionably, by the remembrance of Allāh hearts are assured\"* [Q 13:28, Saheeh Intl.]."
  - "Someone who remembers Allah, compared to someone who doesn't, is like the living compared to the dead [Bukhari 6407]."
```

### 5 · phrase
```yaml
arabic: "سُبْحَانَ اللَّهِ الْعَظِيمِ، سُبْحَانَ اللَّهِ وَبِحَمْدِهِ"
translit: "Subhan Allahil-'azim, Subhan Allahi wa bihamdihi"
meaning: "Glory be to Allah, the Magnificent. Glory be to Allah, and all praise is His."
audio_id: dhikr-two-light-words
when: "Any time: walking, driving, waiting in line. The Prophet ﷺ called these two phrases light on the tongue, heavy on the scale, and loved by the Most Merciful. [Bukhari 6406]"
```

### 6 · widget
```yaml
widget: tasbih
prompt: "Try it now"
text: "Tap once each time you say it. Ten of each takes about a minute."
phrases:
  - translit: "Subhan Allahil-'azim"
    meaning: "Glory be to Allah, the Magnificent"
    count: 10
  - translit: "Subhan Allahi wa bihamdihi"
    meaning: "Glory be to Allah, and all praise is His"
    count: 10
```

### 7 · learn
```yaml
pic: community
text: "**Company and the Qur'an.** A good friend is like someone who sells perfume: even if you buy nothing, you leave smelling good [Bukhari 2101]."
bubbles:
  - "When people gather in a masjid to read and study the Qur'an together, calm comes down on them, mercy covers them, and angels surround them [Muslim 2699]."
  - "A class or circle can lift you more than a month alone."
```

### 8 · steps
```yaml
title: "A 10-minute heart reset"
steps:
  - text: "Make wudu slowly, paying attention to each step"
    pic: wudu:hands
  - text: "Pray your next prayer a little slower than usual: pause in each position"
    pic: "pose:ruku"
  - text: "After the prayer, sit and say the two phrases, 10 times each"
    pic: "pose:tashahhud"
  - text: "Read a short surah you know (al-Fatiha or al-Ikhlas) and think about its meaning"
    pic: quran
  - text: "Make a du'a in your own words: \"Allah, bring my heart back to life\""
    pic: "pose:dua"
  - text: "Message one Muslim friend or {{mentor.name}}, even just \"salam, how are you?\""
    pic: icon:MessageCircle
done_text: "That's a reset. Small and regular beats big and rare [Bukhari 6464]. Try it again this week."
```

### 9 · learn
```yaml
pic: icon:Footprints
text: "**Every step counts.** Allah says: if My servant comes toward Me a hand's span, I come closer by an arm's length; if he comes walking, I come running [Bukhari 7405]."
bubbles:
  - "You don't have to feel it to start. Take a small step, and trust that He's already coming closer."
```

### 10 · fill
```yaml
before: "Allah says: if My servant comes walking, I come"
after: "[Bukhari 7405]"
options:
  - text: "running"
    correct: true
    feedback: "Yes. Allah meets a small step with more. You don't have to feel it to take one."
  - text: "later"
    correct: false
    feedback: "Not quite. He comes running [Bukhari 7405]. Your small step is met with more."
  - text: "only if he's perfect"
    correct: false
    feedback: "Not quite. He comes running toward whoever walks to Him [Bukhari 7405]. Start small."
```

### 11 · scenario
```yaml
pic: icon:CloudRain
situation: "Jordan is seven weeks in. For three weeks his prayers have felt empty, he's stopped going to the masjid, and he spends evenings scrolling. He thinks, \"Maybe I'm just not spiritual.\""
options:
  - text: "Keep praying, add a minute of dhikr after each prayer, and go to one masjid class or event this week"
    best: true
    feedback: "Yes. Dhikr, company and a little Qur'an, one step at a time. Dry spells break when you move."
  - text: "Wait at home until the feeling comes back on its own"
    best: false
    feedback: "Not quite. Isolation usually makes it drier. One small step toward Allah and people helps more."
  - text: "Decide he isn't cut out for this"
    best: false
    feedback: "Not quite. Dry spells happen to everyone [Muslim 2750]. A quiet heart isn't a verdict."
```

### 12 · reflect
```yaml
resurface: [day-12]
prompt: "On Day 12 you wrote a note to your future self for a low day. Read it now if you can. What brought you to Islam? Which of today's three tools (dhikr, company, Qur'an) will you try first?"
share_with_mentor: optional
```

### 13 · ask_ai
```yaml
chips:
  - "My prayers feel empty. What can I do?"
  - "Give me a simple daily dhikr routine"
  - "Where should I start reading the Qur'an?"
  - "Am I a hypocrite if I don't feel anything?"
```

### 14 · do_today
```yaml
pic: icon:Sprout
text: "Do the heart reset once today."
steps:
  - "Do the full 10-minute reset"
  - "Short on time? Just its first step: one slow wudu and one slow prayer"
log: null
optional_extra: "Find one class, halaqa or social event at {{masjid.name}} this week and put it in your calendar."
```

### 15 · takeaway
```yaml
pic: icon:TrendingUp
text: "Dry spells are normal and they pass. Revive your heart with dhikr, good company and the Qur'an, one small step at a time."
```

### 16 · closing
Fifty days. You're still here, and that counts.

---

## Check
```yaml
- prompt: "What are three practical ways to revive a dry heart?"
  options:
    - text: "Dhikr, good company and the Qur'an"
      correct: true
      feedback: "Right. Remembrance calms the heart [Q 13:28], company lifts you [Bukhari 2101], and the Qur'an brings calm [Muslim 2699]."
    - text: "Waiting alone until the feeling returns"
      correct: false
      feedback: "Not quite. Dry spells break when you move: dhikr, company and a little Qur'an."
- prompt: "If you take one small step toward Allah, what does the hadith say He does?"
  options:
    - text: "He comes closer, even running"
      correct: true
      feedback: "Right. A hand's span from you, an arm's length from Him; walk, and He comes running [Bukhari 7405]."
    - text: "He waits until you've fixed everything"
      correct: false
      feedback: "Not quite. He meets small steps with more [Bukhari 7405]. Start small."
```

## AI guide context
**Lesson facts**
- Iman fluctuates; Hanzalah was reassured: a time for this and a time for that [Muslim 2750]. Approved wording (Q20): "Feeling low is not leaving Islam. Leaving is a choice to reject it."
- Hearts find rest in remembering Allah [Q 13:28]; the one who remembers vs. one who doesn't is like living vs. dead [Bukhari 6407]; *Subhan Allahil-'azim, Subhan Allahi wa bihamdihi*: light on the tongue, heavy on the scale [Bukhari 6406, Arabic copied from the hadith].
- Good company: the musk seller [Bukhari 2101]. Gathering for the Qur'an brings tranquility, mercy, angels, and Allah's mention of them [Muslim 2699].
- Allah draws nearer to whoever approaches Him [Bukhari 7405]. Small regular deeds are most beloved [Bukhari 6464].
- Book background: [[Source - The Revealed Path]] ch. 17 (company) and 18 (dhikr); [[Source - The New Muslims Field Guide]] ch. 18 (the slump).

**Likely questions**
- *"My prayers feel empty."* Normal. Slow down; learn the meaning of what you say (the phrase track); short personal du'a after prayer; pray at the masjid sometimes.
- *"Simple dhikr routine?"* After each prayer: *Astaghfirullah* ×3 (Day 29), then the two phrases from today ×10 each, or as time allows. Small and daily.
- *"Where do I start with the Qur'an?"* A few verses a day with a translation; short surahs at the end; Day 19 and Day 82.
- *"Am I a hypocrite?"* No: hypocrisy is outward faith hiding inward rejection; struggling to feel it while praying anyway is faithfulness [Muslim 2750].
- *"It's been months."* Encourage the mentor; check for burnout or low mood (Day 45).

**Escalate:** a convert who says they want to leave Islam (stay warm, no pressure or threats; offer the mentor or imam); persistent low mood, hopelessness or self-harm (safety rule 6 first: 988 and the alert flow).

**Don't**
- Don't imply a dry spell is a sin, punishment or sign of hypocrisy.
- Don't overload with long wird lists; one or two phrases is plenty.
- Don't discuss rulings on apostasy (fixed-policy topic); never threaten.

## Sources
- [Muslim 2750](https://sunnah.com/muslim:2750): Hanzalah ("a time for this and a time for that").
- Qur'an [13:28](https://quran.com/13/28).
- [Bukhari 6407](https://sunnah.com/bukhari:6407): the one who remembers Allah and the one who doesn't, like the living and the dead.
- [Bukhari 6406](https://sunnah.com/bukhari:6406): two phrases light on the tongue, heavy on the scale (Arabic copied from the hadith text).
- [Bukhari 2101](https://sunnah.com/bukhari:2101): the good companion and the musk seller.
- [Muslim 2699](https://sunnah.com/muslim:2699): gathering to recite and study the Qur'an brings tranquility and mercy.
- [Bukhari 7405](https://sunnah.com/bukhari:7405): "if he comes walking, I come running."
- [Bukhari 6464](https://sunnah.com/bukhari:6464): regular deeds, even small.
- [[Source - The Revealed Path]] ch. 17–18; [[Source - The New Muslims Field Guide]] ch. 18.

## Scholar flags
- **Screen 2 (Q20).** "Feeling low is not leaving Islam. Leaving is a choice to reject it." Used as drafted in Spec §9, with the Hanzalah hadith [Muslim 2750].
