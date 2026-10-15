---
day: 31
phase: 2
unit: 5
title: "The map: Islam, Iman, Ihsan"
hook: "One short conversation, long ago, maps out the whole religion."
minutes: 5
skills: [T2]
pain_points: [conversations]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Jibril, hadith, iman, ihsan, qadar, shahada, salah, Allah, ﷺ]
sources: [Muslim 8, Bukhari 50, Q 2:285, Revealed Path ch. 7, Being Muslim (Belief), Research Notes - Core Essentials §2]
format: 2
---
# Day 31 · The map: Islam, Iman, Ihsan

### 1 · hook
```yaml
pic: conversation
text: "Welcome to Phase 2, {{convert.first_name}}. For thirty days you've been *doing* Islam. Now we look at what sits underneath it, starting with one short conversation that maps out the whole religion."
```

### 2 · learn
```yaml
pic: icon:Users
text: "One day the Prophet ﷺ was sitting with his Companions. A stranger walked in: bright white clothes, jet-black hair, no dust from travel, and nobody knew him. He sat knee to knee with the Prophet ﷺ and asked four questions."
bubbles:
  - "When he left, the Prophet ﷺ told them it was **Jibril** (the angel Gabriel), come to teach them their religion [Muslim 8; Bukhari 50]."
  - "This report is called the **Hadith of Jibril** (a *hadith* is a report of what the Prophet ﷺ said or did)."
```

### 3 · reveal
```yaml
title: "The four questions. Tap each one."
cards:
  - front: "1 · What is Islam?"
    back: "What you *do*: the five pillars."
    pic: prayer-mat
  - front: "2 · What is iman (faith)?"
    back: "What you *believe*: six beliefs."
    pic: icon:Heart
  - front: "3 · What is ihsan (excellence)?"
    back: "*How* you do it: worshipping Allah as if you see Him, knowing that He sees you."
    pic: icon:Eye
  - front: "4 · The fourth question"
    back: "It was about the Last Day."
    pic: icon:Hourglass
```

### 4 · match
```yaml
prompt: "Match each layer to what it means."
pairs:
  - left: "Islam"
    right: "What you do: the five pillars"
  - left: "Iman"
    right: "What you believe: the six articles of faith"
  - left: "Ihsan"
    right: "Worshipping Allah as if you see Him"
  - left: "Jibril"
    right: "The angel who asked the questions"
```

### 5 · learn
```yaml
pic: icon:Layers
text: "**The six articles (Iman):** belief in Allah, His angels, His books, His messengers, the Last Day, and **qadar** (that Allah's plan covers everything, the good and the hard) [Muslim 8; Q 2:285]."
bubbles:
  - "**The five pillars (Islam):** the shahada, salah (the five daily prayers), zakat (yearly charity, if you have enough savings), fasting in Ramadan, and Hajj (the pilgrimage) once, if able."
```

### 6 · multi
```yaml
prompt: "Which of these are articles of faith (iman), not pillars of practice?"
options:
  - text: "Belief in angels"
    correct: true
    feedback: "Yes. Angels are one of the six things a Muslim believes in. Day 36 covers them."
  - text: "Fasting in Ramadan"
    correct: false
    feedback: "Not quite. Fasting is something you do, so it's a pillar of Islam."
  - text: "Belief in qadar (Allah's plan)"
    correct: true
    feedback: "Yes. It's the sixth article: Allah knows and plans everything, the good and the hard."
  - text: "The five daily prayers"
    correct: false
    feedback: "Not quite. Prayer is a practice, the second pillar of Islam."
  - text: "Belief in Allah's books"
    correct: true
    feedback: "Yes. The Torah, the Gospel, the Psalms and the Qur'an. Day 37 covers them."
```

### 7 · learn
```yaml
pic: icon:Map
text: "**Why it's a map.** You said the shahada and you pray: that's Islam. You believe in one God and His Prophet ﷺ: that's iman, and the next ten days fill in the rest."
bubbles:
  - "Ihsan is the part nobody finishes: praying, working and speaking as if Allah is right in front of you."
  - "One moment of real focus in prayer is already ihsan."
```

### 8 · steps
```yaml
title: "Try it in three sentences"
intro: "A friend asks, \"So what *is* Islam?\" You could say:"
steps:
  - text: "\"There are three layers. There's what we do, like praying five times a day and fasting in Ramadan.\""
    pic: prayer-mat
  - text: "\"There's what we believe: one God, His angels, His books, His prophets, a Day of Judgment, and that He's in control.\""
    pic: icon:Heart
  - text: "\"And the goal is to live like God is watching, because He is.\""
    pic: icon:Eye
```

### 9 · roleplay
```yaml
character: "Jordan, a friend from your old job. Curious and friendly, a little skeptical. Grew up going to church sometimes, not religious now."
setup: "You're grabbing coffee. Jordan says: \"Okay, I have to ask. Is Islam basically just a long list of rules?\""
goal: "Explain Islam's three layers (what Muslims do, what they believe, and the goal of living as if God sees you) in under a minute, in your own words."
success_looks_like: "The convert names at least a couple of practices and a couple of beliefs, mentions the inner goal (ihsan) in plain words, and stays relaxed. Saying \"I'm still learning that part\" is fine."
coach_notes: "Jordan follows up once or twice: \"So what's the point of the rules?\" or \"Do you actually believe in angels?\" Keep it friendly; Jordan isn't hostile. Debrief: praise what they explained clearly, point out if they skipped the inner layer (ihsan), and offer the three-sentence version from screen 8 as a model, not a script. Don't play a scholar or give rulings."
```

### 10 · ask_ai
```yaml
chips:
  - "Why did Jibril come in human form?"
  - "Do I have to believe all six articles right away?"
  - "What's the difference between Islam and iman?"
  - "How do I get better at ihsan?"
```

### 11 · do_today
```yaml
pic: conversation
text: "Explain the three layers to one person today."
steps:
  - "Pick someone: a friend, a family member you're open with, or just yourself out loud"
  - "Under a minute, in your own words"
log: null
optional_extra: "Read the whole Hadith of Jibril in English at sunnah.com/muslim:8 (it takes about three minutes)."
```

### 12 · takeaway
```yaml
pic: icon:Map
text: "Islam is what you do, iman is what you believe, and ihsan is doing it all as if you see Allah."
```

### 13 · closing
You've been living this map for a month already. Now you know its name.

---

## Check
```yaml
- prompt: "In the Hadith of Jibril, what is ihsan?"
  options:
    - text: "Worshipping Allah as if you see Him, knowing He sees you"
      correct: true
      feedback: "Right. Ihsan is the quality and focus you bring to everything."
    - text: "The five pillars of practice"
      correct: false
      feedback: "Not quite. The five pillars are Islam. Ihsan is worshipping as if you see Allah."
- prompt: "Which of these is one of the six articles of faith?"
  options:
    - text: "Belief in the Last Day"
      correct: true
      feedback: "Right. Allah, angels, books, messengers, the Last Day and qadar."
    - text: "Giving zakat"
      correct: false
      feedback: "Not quite. Zakat is a pillar of practice. The Last Day is an article of faith."
- prompt: "Who was the stranger in the Hadith of Jibril?"
  options:
    - text: "The angel Jibril, come to teach the religion"
      correct: true
      feedback: "Right. The Prophet ﷺ told the Companions afterwards who he was."
    - text: "A traveler from Yemen"
      correct: false
      feedback: "Not quite. He showed no sign of travel. It was the angel Jibril."
```

## AI guide context
**Lesson facts**
- The Hadith of Jibril: an unknown man in white with no sign of travel asked the Prophet ﷺ about Islam, iman, ihsan and the Hour; afterwards the Prophet ﷺ said it was Jibril, come to teach them their religion [Muslim 8; Bukhari 50].
- Islam = the five pillars: shahada, prayer, zakat, fasting Ramadan, Hajj for those able [Muslim 8].
- Iman = belief in Allah, His angels, His books, His messengers, the Last Day, and qadar, its good and its bad [Muslim 8; Q 2:285 names the first five].
- Ihsan = worshipping Allah as though you see Him; and though you don't see Him, He sees you [Muslim 8; Bukhari 50].
- Scholars treat this hadith as a summary of the whole religion [Research Notes - Core Essentials §2; Revealed Path ch. 7].
- Unit 5 walks through the articles: Allah (Days 32, 34), angels (36), books (37), messengers (39). The Last Day (41) and qadar (43) come in Unit 6.

**Likely questions**
- *"Do I have to believe all six right away?"* Yes, they're part of what the shahada means, and most converts already do in outline. The details are learned over time. Not knowing a detail yet isn't disbelief.
- *"Islam vs. iman: aren't they the same?"* Closely linked. In this hadith, Islam is the outward practice and iman the inner belief; together they make a Muslim's life. Ihsan is the highest level of both.
- *"How do I get better at ihsan?"* Small steps: slow down one prayer a day, know the meaning of what you say, remember Allah sees you at work and at home. Day 61 goes deeper.
- *"Why did Jibril appear as a man?"* Angels can take forms by Allah's permission; Day 36 covers angels. Keep it short.
- *"What about the signs of the Hour in the hadith?"* Brief: the hadith mentions some signs; the timing is known only to Allah. Day 41 covers the Last Day. Don't speculate about current events.

**Escalate:** none specific.

**Don't**
- Don't overload with theology (attributes of Allah, schools of creed). This is a map, not the territory.
- Don't make a convert feel their faith is incomplete because they can't list all six yet.
- In the role-play, don't let "Jordan" become hostile or mock Islam.

**Role-play brief:** Jordan is a curious ex-coworker, warm, mildly skeptical ("isn't it just rules?"). Pushes once on "the point of the rules" or angels. Debrief: name what was clear, gently add the missing layer, model a short three-layer answer, and remind them that "I'm still learning that" is a good answer.

## Sources
- [Muslim 8](https://sunnah.com/muslim:8): the Hadith of Jibril, Umar's narration (Islam, iman including qadar, ihsan, the Hour; the stranger's description).
- [Bukhari 50](https://sunnah.com/bukhari:50): the Hadith of Jibril, Abu Hurayra's narration.
- Qur'an [2:285](https://quran.com/2/285) (belief in Allah, His angels, books and messengers).
- [[Source - The Revealed Path]] ch. 7 (the six pillars of iman and the tree of faith); [[Source - Being Muslim a Practical Guide]], Belief section (the six objects of faith).
- [[Research Notes - Core Essentials and Madhab Map]] §2 (the hadith as a summary of the religion; Yaqeen Institute: Basics of Islam).
