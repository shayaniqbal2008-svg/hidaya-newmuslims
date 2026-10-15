---
day: 55
phase: 2
unit: 7
title: "Is this still right for me?"
hook: "Almost two months in, a harder question can show up. It's allowed. Let's look at it honestly."
minutes: 5
skills: [S4]
pain_points: [honeymoon-ends, doubts]
logs: []
madhab_sensitive: false
scholar_flags: [Q20]
status: draft-pending-scholar-review
glossary: [iman, Allah, ﷺ, Fajr]
sources: [Q 29:2, Muslim 132, Muslim 2999, Bukhari 6464, Field Guide ch. 18, Research Notes - Retention and Convert Voices]
format: 2
---
# Day 55 · Is this still right for me?

### 1 · hook
```yaml
pic: icon:CloudRain
text: "On Day 25 the first glow faded. Now, almost two months in, a heavier question might show up: *Is this still right for me?* If it has, you're not broken, and you're not alone. Let's take it seriously."
```

### 2 · learn
```yaml
pic: icon:TrendingDown
text: "**The second slump.** For many converts, another dip comes after the first months. The newness is gone; the work is real: Fajr, food, family, and people who don't get it."
bubbles:
  - "Allah said people wouldn't be left to say \"we believe\" without being tested [Q 29:2]. A test is part of the path. It isn't proof you took the wrong one."
```

### 3 · widget
```yaml
widget: iman-graph
prompt: "Your first months, so far"
text: "Drag along the line. The dips are real, and the line still climbs."
points:
  - label: "Day 1: you said yes"
    text: "You saw something true and said your shahada."
  - label: "Day 25: the first glow fades"
    text: "The newness wore off once already. You kept going."
  - label: "Month two: the second slump"
    text: "The work is real now. A test is part of the path, not proof you took the wrong one [Q 29:2]."
  - label: "Remember why"
    text: "The reasons you came didn't stop being true because the excitement faded. Feelings rise and fall; the truth you saw doesn't."
  - label: "Keep going"
    text: "Small, steady deeds carry you through flat seasons [Bukhari 6464]."
```

### 4 · reveal
```yaml
title: "What's the question underneath? Tap the one that sounds like you."
cards:
  - front: "\"It's too much right now.\""
    back: "That's about load, not truth. Go back to the basics: the five, and one small habit (Day 8). Let the extras wait."
    pic: icon:Layers
  - front: "\"The Muslims I've met let me down.\""
    back: "That's about people, and it hurts. Islam isn't measured by its worst followers (Day 48). Find better company."
    pic: icon:Users
  - front: "\"I miss my old life.\""
    back: "Missing things is human, and grief is allowed. Name what you miss, and what you've gained."
    pic: icon:Hourglass
  - front: "\"I'm honestly not sure it's true.\""
    back: "That's a real question, and it deserves real answers. Bring it to {{mentor.name}} or a teacher you trust. Asking isn't leaving."
    pic: icon:Search
```

### 5 · learn
```yaml
pic: icon:Anchor
text: "**Feeling low is not leaving Islam. Leaving is a choice to reject it.** `[SCHOLAR: Q20]`"
bubbles:
  - "Even the Companions had thoughts they were scared to say out loud. The Prophet ﷺ told them that being troubled by such thoughts was a sign of real faith [Muslim 132]."
  - "A heavy question, brought honestly to Allah and to good people, is part of **iman** (faith), not the end of it."
```

### 6 · reflect
```yaml
resurface: [day-1]
prompt: "Read what you wrote on Day 1 about why you said yes. Which of those reasons is still true today, even if the feeling is quieter?"
share_with_mentor: optional
```

### 7 · fill
```yaml
before: "The Prophet ﷺ said a believer's life is all good: in good times they're grateful, and in hard times they're"
after: "[Muslim 2999]."
options:
  - text: "patient"
    correct: true
    feedback: "Yes. Grateful in ease, patient in hardship, and both bring good [Muslim 2999]. This season can be the patient kind."
  - text: "ashamed"
    correct: false
    feedback: "Not quite. Hard times call for patience, not shame, and patience brings good too [Muslim 2999]."
  - text: "on their own"
    correct: false
    feedback: "Not quite. In hard times a believer is patient, and that brings good [Muslim 2999]. You don't have to be alone in it."
```

### 8 · choice
```yaml
pic: conversation
prompt: "Luis tells his mentor: \"I don't feel it anymore, so maybe Islam isn't for me.\" What's the most honest next step?"
options:
  - text: "Keep praying the five, name what's really behind the feeling, and talk it through with someone he trusts"
    correct: true
    feedback: "Yes. Small steady deeds carry you through flat seasons [Bukhari 6464], and talking helps you find the real question."
  - text: "Take a break from Islam until the feeling comes back"
    correct: false
    feedback: "Not quite. The five stay due, and feelings often come back through practice, not before it."
  - text: "Push the question down and never mention it"
    correct: false
    feedback: "Not quite. Buried questions grow. Asking honestly is safer than hiding it."
```

### 9 · ask_ai
```yaml
chips:
  - "I'm not sure Islam is still right for me"
  - "How do I know if this is a slump or something deeper?"
  - "I miss my old life. Is that wrong?"
  - "Can I talk to someone about my doubts?"
```

### 10 · do_today
```yaml
pic: icon:MessageCircle
text: "Tell one person how you're really doing."
steps:
  - "Pick one: {{mentor.name}}, a Muslim friend, or the AI guide"
  - "Say it plainly. Even \"I'm in a slump\" is enough"
log: null
optional_extra: "Pray your next prayer slowly, and in the last prostration ask Allah in your own words to keep your heart steady."
```

### 11 · takeaway
```yaml
pic: icon:TrendingUp
text: "A hard question is not a verdict. Feeling low is not leaving. Keep the five, remember why you came, and don't carry the question alone."
```

### 12 · closing
Lots of converts who stayed for decades had a month like this one.

---

## Check
```yaml
- prompt: "Does feeling low or doubtful mean you've left Islam?"
  options:
    - text: "No. Leaving is a choice to reject it; feeling low is part of being human"
      correct: true
      feedback: "Right. Even the Companions struggled with hard thoughts [Muslim 132]."
    - text: "Yes, if the doubt lasts more than a few days"
      correct: false
      feedback: "Not quite. Feeling low is not leaving Islam. Bring the question to someone you trust."
- prompt: "What does Qur'an 29:2 say about tests?"
  options:
    - text: "People who say \"we believe\" will be tested"
      correct: true
      feedback: "Right. A test is part of the path, not proof you're on the wrong one."
    - text: "True believers never feel tested"
      correct: false
      feedback: "Not quite. Allah says believers will be tested [Q 29:2]."
```

## AI guide context
**Lesson facts**
- Convert-care groups describe the first months and years as the hardest, highest-risk period; a second dip after the first glow is common: novelty gone, real demands, social letdowns [Research Notes - Retention and Convert Voices; Field Guide ch. 18].
- Believers are tested [Q 29:2]. The Companions felt terrible intrusive thoughts and were told their distress was a sign of faith [Muslim 132]. The believer's affair is all good: gratitude in ease, patience in hardship [Muslim 2999]. Regular small deeds are most beloved [Bukhari 6464].
- Q20 wording: "Feeling low is not leaving Islam. Leaving is a choice to reject it."
- Untangle the question: load (Day 8), people (Day 48), grief for the old life, or a real question about truth (Day 33).

**Likely questions**
- *"I'm not sure Islam is right for me."* Take it seriously; ask what's underneath. Don't argue them into belief (Spec §6.2 rule 5). Offer to connect them with the mentor or a scholar for real questions.
- *"Is this a slump or something deeper?"* Help them sort it with the reveal cards. Offer the Day 50 heart reset for flatness; the mentor or a scholar for intellectual doubts.
- *"I miss my old life."* Normal. Ask what exactly they miss; many things (friends, family, food, fun) can be kept in halal forms.
- *"I think I want to leave Islam."* Don't pressure, threaten or debate. Respond warmly, ask what's going on, and offer a conversation with the mentor or imam. Don't discuss apostasy penalties (fixed-policy topic: short calm answer, route to the imam).

**Escalate:** a convert saying they want to leave or have left (offer the mentor/imam, gently, without pressure); questions about apostasy rulings (fixed policy); any sign of depression, hopelessness or self-harm (safety rule: 988).

**Don't**
- Don't tell them doubts are sinful, or that feeling low means they've left Islam.
- Don't use Hell or fear to keep them.
- Don't suggest a "break" from the five prayers.
- Don't dismiss their reasons; hurt from Muslims is real.

## Sources
- Qur'an [29:2](https://quran.com/29/2).
- [Muslim 132](https://sunnah.com/muslim:132): distress at bad thoughts is a sign of real faith.
- [Muslim 2999](https://sunnah.com/muslim:2999): the believer's affair is all good.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the most beloved deeds are the regular ones, even if small.
- [[Source - The New Muslims Field Guide]] ch. 18 (the slump after the first months).
- [[Research Notes - Retention and Convert Voices]] (when converts struggle and why).

## Scholar flags
- **Screen 5 (Q20).** Uses the drafted wording exactly: "Feeling low is not leaving Islam. Leaving is a choice to reject it." Paired with Muslim 132 (distress at bad thoughts is a sign of faith). It doesn't address the status of someone with sustained, settled doubt; that goes to the imam.
