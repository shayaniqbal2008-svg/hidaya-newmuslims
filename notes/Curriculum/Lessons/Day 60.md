---
day: 60
phase: 2
unit: 7
title: "Phase 2 complete"
hook: "Sixty days. Today you find out how much you can explain, in your own words, to someone who asks."
minutes: 5
skills: [T2]
pain_points: [milestone]
logs: [phase2_mentor_checkin]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [iman, qadar, Jibril, Allah, ﷺ, Qur'an]
sources: [Muslim 8, Q 2:285, Q 112:1–4, Q 33:40, Q 57:22–23, Bukhari 6464]
format: 2
---
# Day 60 · Phase 2 complete

### 1 · hook
```yaml
pic: icon:Trophy
text: "**Sixty days, {{convert.first_name}}.** Thirty days ago you could pray the whole prayer. Since then you've learned what Muslims believe, the pillars, and how to live it in the real world. Today you'll explain it out loud, to someone who's curious."
```

### 2 · widget
```yaml
widget: timeline
prompt: "Look how far you've come"
text: "Most people born Muslim couldn't explain all that clearly. You're about to."
events:
  - when: "Days 31–43"
    title: "What you believe"
    text: "The six beliefs at the heart of iman (faith)."
    pic: icon:BookOpen
  - when: "Day 33"
    title: "Hard questions are allowed"
    text: "Questions you're allowed to ask, even the hard ones."
    pic: icon:Lightbulb
  - when: "Days 44–47"
    title: "The rest of the pillars"
    text: "Fasting, zakat and Hajj."
    pic: icon:Moon
  - when: "All along"
    title: "Real life"
    text: "Family, food, money, struggles, boundaries, travel and modesty."
    pic: community
```

### 3 · learn
```yaml
pic: icon:Sparkles
text: "**Six in one breath.** When the angel Jibril asked the Prophet ﷺ what iman is, he answered: believing in Allah, His angels, His books, His messengers, the Last Day, and **qadar**, the good of it and the hard [Muslim 8]."
bubbles:
  - "The Qur'an names the first five together too [Q 2:285]."
  - "If you can say that sentence and explain each word simply, you can answer the question most people ask."
```

### 4 · match
```yaml
prompt: "Match each article of faith with what it means."
pairs:
  - left: "Allah"
    right: "One God, with no partner, nothing like Him"
  - left: "Angels"
    right: "Created beings who obey Allah and carry out His commands"
  - left: "Books"
    right: "Revelation, from the Torah and Gospel to the Qur'an"
  - left: "Messengers"
    right: "People chosen to guide humanity, from Adam to Muhammad ﷺ"
  - left: "The Last Day"
    right: "Everyone will be raised and held to account"
  - left: "Qadar"
    right: "Allah's plan covers everything, the good and the hard"
```

### 5 · sort
```yaml
prompt: "Something you believe (iman), or something you do (a pillar)?"
buckets: ["Belief", "Practice"]
items:
  - text: "The angels"
    bucket: 0
    why: "One of the six articles of faith [Muslim 8]."
  - text: "Fasting in Ramadan"
    bucket: 1
    why: "One of the five pillars: something you do."
  - text: "Qadar, the good of it and the hard"
    bucket: 0
    why: "The sixth article of faith [Muslim 8]."
  - text: "Zakat"
    bucket: 1
    why: "A pillar: giving part of your wealth."
  - text: "The Last Day"
    bucket: 0
    why: "An article of faith: everyone will be raised and held to account."
  - text: "Hajj"
    bucket: 1
    why: "A pillar: the pilgrimage to Makkah."
```

### 6 · roleplay
```yaml
character: "Hannah, the convert's 16-year-old cousin. Curious, a bit blunt, raised loosely Christian, and genuinely interested."
setup: "At a family barbecue, Hannah sits down next to you: \"Okay, so what do Muslims actually believe? Like, the basics. Go.\""
goal: "Explain the six articles of faith in plain words, one or two sentences each, and answer one follow-up without getting flustered."
success_looks_like: "The convert names all six (Allah, angels, books, messengers, the Last Day, qadar) in everyday language; mentions that Muslims believe in Jesus as a prophet when it fits; answers a follow-up honestly, saying 'I'm not sure, let me find out' if needed; stays warm and doesn't debate Hannah's beliefs."
coach_notes: "Hannah asks one or two follow-ups, picking from: 'So you believe in Jesus?', 'Wait, angels are real?', 'If God plans everything, why do bad things happen?', 'Is the Qur'an like the Bible?'. She's curious, never hostile or mocking. Debrief: name which of the six they explained clearly, which they skipped or blurred, and offer a one-line version for any they struggled with. Praise 'I don't know, let me find out' if used. Don't play a scholar, and don't give rulings in character."
```

### 7 · reflect
```yaml
resurface: [day-1, day-30]
prompt: "Look back at what you wrote on Day 1 and Day 30. What do you understand now that you didn't then? What are you most proud of from these last 30 days?"
share_with_mentor: optional
```

### 8 · learn
```yaml
pic: icon:Flag
text: "**Phase 2: complete.** You learned what you believe and why, and you kept praying through all of it. That's the foundation everything else stands on."
bubbles:
  - "Phase 3 starts tomorrow: character, work and money, the wider world, and a plan for after Day 90."
  - "Same pace: one small lesson a day. Small, steady deeds are the ones Allah loves most [Bukhari 6464]."
```

### 9 · ask_ai
```yaml
chips:
  - "Quiz me on the six articles of faith"
  - "Give me a one-line answer for each article"
  - "How do I explain qadar without sounding confusing?"
  - "What's coming in Phase 3?"
```

### 10 · do_today
```yaml
pic: icon:MessageCircle
text: "Check in with {{mentor.name}}."
steps:
  - "Tell them you finished Phase 2"
  - "Share one thing you can now explain, and one thing you're still working on"
  - "Tick this when you've done it"
log: phase2_mentor_checkin
optional_extra: "Explain the six articles to a Muslim friend, or out loud to yourself, in under two minutes."
```

### 11 · takeaway
```yaml
pic: icon:BookOpen
text: "Iman is six beliefs: Allah, His angels, His books, His messengers, the Last Day, and qadar. You can explain them now, in your own words."
```

### 12 · closing
Sixty days of small steps. Thirty more, the same way. Slow and steady.

---

## Check
```yaml
- prompt: "Which list is the six articles of faith?"
  options:
    - text: "Allah, angels, books, messengers, the Last Day, qadar"
      correct: true
      feedback: "Right [Muslim 8]. The heart of iman."
    - text: "Shahada, prayer, zakat, fasting, Hajj, charity"
      correct: false
      feedback: "Not quite. Those are practices (and there are five pillars). The six articles are beliefs [Muslim 8]."
- prompt: "Someone asks a question about Islam you can't answer. What's a good response?"
  options:
    - text: "\"Good question. I'm not sure; let me find out and get back to you.\""
      correct: true
      feedback: "Right. Honest and calm. Then ask your mentor or the AI guide."
    - text: "Make up an answer so you don't look unsure"
      correct: false
      feedback: "Not quite. Saying \"I don't know, let me find out\" is a strength, not a failure."
```

## AI guide context
**Lesson facts**
- Phase 2 milestone. Celebrate warmly; no public sharing, badges or comparison (Spec §3).
- The six articles of faith from the Hadith of Jibril: Allah, His angels, His books, His messengers, the Last Day, and qadar, its good and its bad [Muslim 8]; five named together in [Q 2:285].
- One-liners the guide can offer: Allah is one, with nothing like Him [Q 112:1–4] (Day 32); angels are created beings who obey Allah (Day 36); the books include the Torah, the Gospel and the Qur'an, which is preserved (Day 37); messengers from Adam to Muhammad ﷺ, the last of them [Q 33:40] (Day 39); the Last Day: resurrection, judgment, Paradise and Hell, with hope (Day 41); qadar: Allah knows and has written everything, and we still choose and act [Q 57:22–23] (Day 43).
- Regular, small steps are what Allah loves most [Bukhari 6464].

**Likely questions**
- *"Quiz me."* Ask one article at a time; accept plain-language answers; gently correct.
- *"How do I explain qadar?"* Allah knows and has written everything; we still make real choices and are responsible for them; hard things have wisdom we may not see. Keep it short; Day 43.
- *"What's Phase 3?"* Character (Days 61–70), out in the world (71–80), and your path forward (81–90), ending with a plan for after Day 90.
- *"I feel behind."* There's no behind; review any lesson any time.

**Escalate:** nothing specific; follow the usual rules.

**Don't**
- Don't make the milestone feel like a test they can fail.
- In the role-play, don't debate or belittle the cousin's beliefs, and don't play a scholar.

**Role-play brief:** Hannah is 16, curious and blunt, raised loosely Christian. She asks one or two follow-ups (Jesus, angels, why bad things happen, Qur'an vs. Bible). Never hostile. Debrief: which of the six were clear, which were missed, a one-line fix for each gap, and praise for any honest "I don't know."

## Sources
- [Muslim 8](https://sunnah.com/muslim:8): the Hadith of Jibril (the six articles of faith).
- Qur'an [2:285](https://quran.com/2/285), [112:1–4](https://quran.com/112/1-4), [33:40](https://quran.com/33/40), [57:22–23](https://quran.com/57/22-23).
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the most beloved deeds are the regular ones, even if small.
