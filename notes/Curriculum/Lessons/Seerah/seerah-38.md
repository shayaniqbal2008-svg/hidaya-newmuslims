---
track: seerah
order: 38
phase: null
unit: null
title: "His last days"
hook: "Too weak to lead the prayer, he sent for Abu Bakr. His last words were about prayer and the people in your care."
minutes: 6
skills: [T2, B4, B6]
pain_points: [grief, family]
logs: []
madhab_sensitive: false
scholar_flags: [Q40]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, salah, Qur'an, Jibril]
sources: [Bukhari 664, Bukhari 3624, Bukhari 4428, Bukhari 4449, Abu Dawud 5156, Muslim 1218, Q 31:14–15, IslamQA 11575]
format: 2
---
# seerah-38 · His last days

### 1 · hook
```yaml
pic: icon:Bed
text: "**Too weak to lead the prayer, he sent for Abu Bakr.** These are the last days of his life, so take this one gently. His final words were about prayer, and about the people in your care."
```

### 2 · learn
```yaml
pic: icon:Bed
text: "**He fell ill.** Early in 11 AH, back in Madinah, the Prophet ﷺ fell ill, IslamQA reports [IslamQA 11575]. When prayer time came, he was too weak to lead it. Tell Abu Bakr to lead the people, he said [Bukhari 664]."
bubbles:
  - "Told that Abu Bakr was too soft-hearted for it, he said it again, and again, until Abu Bakr led [Bukhari 664]."
```

### 3 · choice
```yaml
pic: masjid
prompt: "You're in the masjid. Abu Bakr is leading. Then the Prophet ﷺ comes out, held up by two men, his feet dragging. Abu Bakr starts to step back. What happens?"
options:
  - text: "He signals Abu Bakr to stay, and sits down beside him"
    correct: true
    feedback: "That's what happened. Ill as he was, he came to pray with them and kept Abu Bakr in place [Bukhari 664]."
  - text: "He sends Abu Bakr away and stands to lead"
    correct: false
    feedback: "Not quite. He signalled Abu Bakr to stay where he was, and was seated beside him [Bukhari 664]."
  - text: "He turns back without praying"
    correct: false
    feedback: "Not quite. He came out to pray, too weak to stand, and sat beside Abu Bakr [Bukhari 664]."
```

### 4 · learn
```yaml
pic: icon:HeartCrack
text: "**A daughter's tears.** His daughter Fatimah came to see him. Welcome, my daughter, he said, and sat her beside him. He whispered something, and she wept. He whispered again, and she laughed [Bukhari 3624]."
bubbles:
  - "Aisha was watching. She said she had never seen happiness so close to sadness [Bukhari 3624]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Where we are"
text: "A few months after the Farewell Hajj."
events:
  - when: "10 AH"
    title: "The Farewell Hajj"
    text: "His sermon at 'Arafah [Muslim 1218]."
    pic: icon:Mountain
  - when: "Early 11 AH"
    title: "He falls ill"
    text: "Back in Madinah, IslamQA reports [IslamQA 11575]."
    pic: icon:Bed
  - when: "His illness"
    title: "Abu Bakr leads"
    text: "Too weak to lead, he sends Abu Bakr [Bukhari 664]."
    pic: masjid
  - when: "His illness"
    title: "Two whispers"
    text: "Fatimah weeps, then laughs [Bukhari 3624]."
    pic: icon:HeartCrack
  - when: "Next episode"
    title: "The day he died"
    text: "And the words that steadied everyone."
    pic: icon:Sunset
```

### 6 · reveal
```yaml
title: "The two whispers"
cards:
  - front: "Why she wept"
    back: "He told her he would die soon. Every year Jibril had gone over the Qur'an with him once; that year, twice [Bukhari 3624]."
    pic: quran
  - front: "Why she laughed"
    back: "He told her she would be the first of his family to follow him, and the leader of the believing women [Bukhari 3624]."
    pic: icon:Sparkles
  - front: "When she told"
    back: "She kept his secret while he lived. Only after he died did she tell Aisha [Bukhari 3624]."
    pic: icon:Lock
```

### 7 · learn
```yaml
pic: icon:HandHeart
text: "**His last words.** Among the very last things he said: the prayer, the prayer, and fear Allah regarding those in your care [Abu Dawud 5156]. `[SCHOLAR: Q40]`"
bubbles:
  - "At the end of everything, he was still thinking about salah, and about the people who depend on others."
```

### 8 · fill
```yaml
before: "Among his last words: the prayer, the prayer, and fear Allah regarding those in your"
after: "[Abu Dawud 5156]"
options:
  - text: "care"
    correct: true
    feedback: "Yes. Prayer, and the people who depend on you. That's what he left them with."
  - text: "wealth"
    correct: false
    feedback: "Not quite. Not wealth: the people in your care, and the prayer [Abu Dawud 5156]."
  - text: "enemies"
    correct: false
    feedback: "Not quite. His last concern was the people in your care [Abu Dawud 5156]."
```

### 9 · learn
```yaml
pic: prayer-mat
text: "**What mattered most.** You've been building your prayers since Day 8. At the end of his life, prayer was still the first thing on his mind. Then the people in your care: a parent, a child, someone who depends on you. That's where he pointed."
```

### 10 · scenario
```yaml
pic: family
situation: "Aaliyah's mom, who isn't Muslim, is in hospital, and Aaliyah spends every evening with her. She's been missing prayers and feels torn between her mom and her faith."
options:
  - text: "Keep caring for her mom, and pray quietly in a corner of the room or a hospital prayer room when it's time"
    best: true
    feedback: "Yes. Prayer and care for the people you love belong together. His last words held both."
  - text: "Put prayer on hold until her mom gets better"
    best: false
    feedback: "Not quite. Prayer was the first thing on his mind even when he was dying. It goes with her."
  - text: "Visit her mom less so she can keep her prayer schedule"
    best: false
    feedback: "Not quite. Caring for her mom is part of her faith too. She can do both."
```

### 11 · ask_ai
```yaml
chips:
  - "Why did he choose Abu Bakr to lead the prayer?"
  - "What was his illness?"
  - "Who was Fatimah?"
  - "How do I keep praying when life is heavy?"
```

### 12 · do_today
```yaml
pic: prayer-mat
text: "Keep his last words today."
steps:
  - "Pray your next prayer on time, as well as you can"
  - "Do one thing for someone who depends on you"
log: null
```

### 13 · takeaway
```yaml
pic: icon:HandHeart
text: "At the end of his life, his words were about prayer and the people in our care. Those two things are worth a whole life."
```

### 14 · closing
Next episode: the day he died, and the words from Abu Bakr that steadied a whole community.

---

## Check
```yaml
- prompt: "Who did he ask to lead the prayer when he was too ill?"
  options:
    - text: "Abu Bakr"
      correct: true
      feedback: "Right. He repeated it until Abu Bakr led, then came out and sat beside him [Bukhari 664]."
    - text: "Fatimah"
      correct: false
      feedback: "Not quite. He told them to let Abu Bakr lead the people in prayer [Bukhari 664]."
- prompt: "What were among his last words?"
  options:
    - text: "The prayer, the prayer, and fear Allah regarding those in your care"
      correct: true
      feedback: "Right. Prayer, and the people who depend on you [Abu Dawud 5156]."
    - text: "Guard your wealth"
      correct: false
      feedback: "Not quite. His last concern was prayer and the people in your care [Abu Dawud 5156]."
```

## AI guide context
**Lesson facts**
- He fell ill early in 11 AH (IslamQA: in Safar) [IslamQA 11575] (single organisation; "IslamQA reports").
- In his final illness, when the adhan was called, he said to tell Abu Bakr to lead the people; told Abu Bakr was soft-hearted, he repeated it a third time. Feeling a little better, he came out supported by two men, his feet dragging; Abu Bakr began to step back; he signalled him to stay and was seated beside him [Bukhari 664].
- Fatimah came; he welcomed her as "my daughter", whispered and she wept, whispered again and she laughed; Aisha said she had never seen happiness so close to sadness. After his death Fatimah explained: Jibril had reviewed the Qur'an with him twice that year instead of once, which he took as a sign of his death; then that she would be the first of his family to follow him and the chief of the believing women [Bukhari 3624].
- In his last illness he said he still felt the pain of the food he ate at Khaybar [Bukhari 4428] (seerah-31).
- 'Ali reported his last words: the prayer, the prayer; fear Allah regarding those whom your right hands possess [Abu Dawud 5156; Sahih per al-Albani]. On screen: "those in your care". `[SCHOLAR: Q40]`

**Likely questions**
- *"What does 'those in your care' literally mean?"* Answer honestly: the Arabic literally means "those whom your right hands possess", i.e. slaves and servants. Slavery existed everywhere then; his last words urged kindness to the most vulnerable people in a household. Today the same care applies to anyone who depends on us (employees, children, the elderly). Don't claim slavery is acceptable today; detailed questions go to the imam. `[SCHOLAR: Q40]`
- *"What illness did he have?"* The hadith say he was in great pain at the end (he said death has its agonies [Bukhari 4449]) and that he still felt the Khaybar poison [Bukhari 4428]. Keep it brief and gentle.
- *"Did he want to write something at the end?"* There is a well-known report about this; it's a matter of long-standing disagreement between Muslim groups, and this track leaves it out. Suggest the imam if they want to study it.
- *"How do I keep praying when life is heavy?"* Listen first. All five are due, and it's fine to do them simply; pray wherever you are when it's time (Days 8–30). For specific situations (hospital, work, travel), the imam can advise. If they're overwhelmed, involve the mentor.
- *"I'm caring for a sick or dying non-Muslim parent."* Caring for them is part of their faith [Q 31:14–15]; comfort first. Questions about the parent's fate are never answered here (Day 77; Q23 handling via the imam).

**Escalate:** detailed questions on slavery (Q40); a convert caring for a dying relative who seems overwhelmed (mentor); any question about a relative's fate (Day 77 handling, imam).

**Don't**
- Don't tell the "pen and paper" incident (log row X22) or discuss succession.
- Don't describe his suffering in detail.
- Don't use "those whom your right hands possess" on a screen.

## Sources
- [Bukhari 664](https://sunnah.com/bukhari:664) (Sahih): Abu Bakr to lead the prayer; he came out and sat beside him.
- [Bukhari 3624](https://sunnah.com/bukhari:3624) (Sahih): the two whispers to Fatimah.
- [Bukhari 4428](https://sunnah.com/bukhari:4428) (Sahih; AI guide): the Khaybar poison felt in his last illness.
- [Abu Dawud 5156](https://sunnah.com/abudawud:5156) (Sahih, al-Albani; Sahih li-ghayrihi, al-Arna'ut): his last words.
- [Bukhari 4449](https://sunnah.com/bukhari:4449) (Sahih; AI guide): death has its agonies.
- [Muslim 1218](https://sunnah.com/muslim:1218) (Sahih): the Farewell Hajj (timeline).
- Qur'an [31:14–15](https://quran.com/31/14-15) (kindness to parents; AI guide).
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): his illness in 11 AH.
- Fact rows 38.1–38.5, X22 and 38.6–38.7 (added 2026-10-09) in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 7 and AI guide (Q40).** "Those whom your right hands possess" is shown as "those in your care"; the AI guide gives the literal meaning honestly if asked and routes detail to the imam.
