---
track: seerah
order: 14
phase: null
unit: null
title: "Hamzah and 'Umar"
hook: "Two of Makkah's strongest men, a famous hunter and a feared opponent, joined the Muslims one after the other."
minutes: 6
skills: [T2, T3, B6]
pain_points: [conversations, judging-others]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, Qur'an, du'a, Quraysh, Abyssinia]
sources: [Bukhari 3684, Bukhari 1590, Dar al-Ifta Egypt (Hardships of the Prophet; seerah part 9), Qalam Institute Sirah Podcast ep. 41, 44–45]
format: 2
---
# seerah-14 · Hamzah and 'Umar

### 1 · hook
```yaml
pic: icon:Shield
text: "**One was a famous hunter of Makkah. The other was one of the Muslims' fiercest enemies.** Both joined Islam around the same time, and the small, frightened community changed."
```

### 2 · learn
```yaml
pic: icon:Shield
text: "**The hunter steps in.** His uncle Hamzah, a famous hunter and warrior, heard that Abu Jahl had insulted his nephew, the Prophet ﷺ. He confronted Abu Jahl and declared that he too was Muslim, the early biographers say [Qalam ep. 44; Dar al-Ifta 175]."
bubbles:
  - "Most scholars place this after the first group left for Abyssinia, Qalam notes [Qalam ep. 44]."
```

### 3 · choice
```yaml
pic: icon:Shield
prompt: "Hamzah wasn't Muslim yet when he heard his nephew had been insulted. What does his reaction show?"
options:
  - text: "Loyalty to family can open a door to faith"
    correct: true
    feedback: "Right. Standing up for his nephew led him, that same day, to declare Islam, the early biographers say."
  - text: "Only anger matters in faith"
    correct: false
    feedback: "Not quite. His anger was the spark, but he stayed a Muslim for life. Something deeper had changed."
  - text: "He joined just to win the argument"
    correct: false
    feedback: "Not quite. He stood by Islam for the rest of his life, long after the argument was forgotten."
```

### 4 · learn
```yaml
pic: quran
text: "**Words that reached 'Umar.** 'Umar ibn al-Khattab was one of the fiercest opponents of the Muslims. Then, at his sister's home, he read the **Qur'an**, and it reached him. He accepted Islam [Qalam ep. 45; Dar al-Ifta 173]."
bubbles:
  - "Reports differ on exactly what happened at his sister's house. We keep to what they agree on: the Qur'an changed him."
```

### 5 · widget
```yaml
widget: timeline
prompt: "The tide starts to turn"
text: "Two strong men, one after the other."
events:
  - when: "Mid-Makkan years"
    title: "Refuge across the sea"
    text: "The first group of Muslims leaves for Abyssinia [Qalam ep. 41]."
    pic: icon:Sailboat
  - when: "After that"
    title: "Hamzah"
    text: "Angered by an insult to his nephew, he declares Islam, the early biographers say [Qalam ep. 44]."
    pic: icon:Shield
  - when: "Around then"
    title: "'Umar"
    text: "After reading the Qur'an at his sister's home, he accepts Islam [Qalam ep. 45; Dar al-Ifta 173]."
    pic: quran
  - when: "From then on"
    title: "Stronger"
    text: "The Muslims feel the difference [Bukhari 3684]."
    pic: icon:Dumbbell
  - when: "Next episode"
    title: "A boycott"
    text: "Quraysh try a new tactic: cut off his whole clan [Bukhari 1590]."
    pic: icon:Ban
```

### 6 · learn
```yaml
pic: icon:Users
text: "**Stronger together.** Ibn Mas'ud later said the Muslims had been strong ever since 'Umar accepted Islam [Bukhari 3684]. The man who had opposed them became one of their greatest supporters."
```

### 7 · sort
```yaml
prompt: "Someone has been harsh about your faith. Which responses leave the door open?"
buckets: ["Leaves the door open", "Slams it shut"]
items:
  - text: "Answering their question calmly, even after months of mockery"
    bucket: 0
    why: "The Qur'an reached 'Umar after years of opposition. A calm answer can land later."
  - text: "Reminding them of every insult they ever made"
    bucket: 1
    why: "Keeping score makes coming closer harder for them."
  - text: "Making du'a for them by name"
    bucket: 0
    why: "Hearts are in Allah's hands. Asking Him costs nothing and harms no one."
  - text: "Telling them they'll never change"
    bucket: 1
    why: "Nobody would have said that about 'Umar, and look what happened."
```

### 8 · learn
```yaml
pic: icon:DoorOpen
text: "**Don't write anyone off.** One of the fiercest opponents of the Muslims became one of their strongest brothers. The relative or coworker who mocks your faith today may ask you about it next year. Answer calmly, and leave the door open."
```

### 9 · scenario
```yaml
pic: icon:Smartphone
situation: "Since Chris became Muslim, his old friend has posted jokes about Islam. Tonight he texts: \"Okay, honest question. What's in the Qur'an that got you?\""
options:
  - text: "Answer warmly and honestly, and share a short passage that moved him"
    best: true
    feedback: "Yes. 'Umar was reached by reading the Qur'an. An honest answer to an honest question can go a long way."
  - text: "Remind him of every joke he's posted"
    best: false
    feedback: "Not quite. He's opening a door. Don't close it by keeping score."
  - text: "Ignore him; he can't be serious"
    best: false
    feedback: "Not quite. Nobody expected 'Umar either. Take the question at face value."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Hamzah?"
  - "How did 'Umar become Muslim?"
  - "Can someone who hated Islam really change?"
  - "How do I answer a friend who mocks Islam?"
```

### 11 · do_today
```yaml
pic: icon:DoorOpen
text: "Leave a door open today."
steps:
  - "Think of someone who has been critical of your faith"
  - "Make a **du'a** (a personal prayer) for them by name"
  - "If they ask you a question, answer it kindly and briefly"
log: null
```

### 12 · takeaway
```yaml
pic: icon:DoorOpen
text: "The Muslims' fiercest enemy became their brother. Don't write anyone off, including yourself."
```

### 13 · closing
Next episode: Quraysh cut off his whole clan, and relatives who weren't Muslim stand by him anyway.

---

## Check
```yaml
- prompt: "What led 'Umar to accept Islam?"
  options:
    - text: "Reading the Qur'an at his sister's home"
      correct: true
      feedback: "Right. The words of the Qur'an reached one of Islam's fiercest opponents."
    - text: "Losing a debate in public"
      correct: false
      feedback: "Not quite. It was the Qur'an, read at his sister's home, that changed him."
- prompt: "What did Ibn Mas'ud say about 'Umar's Islam?"
  options:
    - text: "The Muslims had been strong ever since"
      correct: true
      feedback: "Right [Bukhari 3684]."
    - text: "It made no difference"
      correct: false
      feedback: "Not quite. He said they had been strong ever since 'Umar accepted Islam [Bukhari 3684]."
```

## AI guide context
**Lesson facts**
- His uncle Hamzah, a famed hunter and warrior, heard that Abu Jahl had insulted the Prophet ﷺ, confronted him, and declared Islam [Qalam ep. 44; Dar al-Ifta Egypt, seerah part 9]. Details of the confrontation vary; keep it "the early biographers say".
- 'Umar ibn al-Khattab, a fierce opponent, accepted Islam after reading the Qur'an at his sister's house [Qalam ep. 45; Dar al-Ifta Egypt, Hardships of the Prophet (then to al-Arqam's house)].
- Ibn Mas'ud said the Muslims had been strong ever since 'Umar accepted Islam [Bukhari 3684].
- Most scholars place both after the first migration to Abyssinia [Qalam ep. 44]. Qalam puts 'Umar three days after Hamzah (single source: say "around the same time").

**Likely questions**
- *"How did 'Umar become Muslim?"* At his sister's home, after reading from the Qur'an. Reports differ on what happened first (whether he struck her, which passage he read); don't dramatise and don't pick a version.
- *"Didn't the Prophet ﷺ pray for one of the two 'Umars?"* That du'a is reported outside this program's approved list; don't quote it. Say only that the sources describe his deep hope for strong people to join.
- *"Did 'Umar do terrible things before Islam?"* Don't tell stories about his life before Islam beyond this lesson; if asked about a specific story, say this track hasn't verified it and offer the imam.
- *"Can someone who hated Islam really change?"* Yes: 'Umar is the classic example. Hearts belong to Allah; keep the door open with calm answers and du'a. Day 71 covers calm answers to skeptics.

**Escalate:** nothing specific; harassment that becomes threatening follows the safety rule.

**Don't**
- Don't dramatise 'Umar striking his sister or give one version of the story as certain.
- Don't quote the "two 'Umars" du'a.
- Don't picture the Prophet ﷺ, Hamzah or 'Umar.

## Sources
- [Bukhari 3684](https://sunnah.com/bukhari:3684) (Sahih): "we have been strong since 'Umar accepted Islam".
- [Bukhari 1590](https://sunnah.com/bukhari:1590) (Sahih): the pact against Banu Hashim (timeline teaser).
- Dar al-Ifta Egypt: [*Hardships of the Prophet and his companions (3rd–6th year)*](https://www.dar-alifta.org/en/article/details/173/hardships-of-the-prophet-and-his-companions-from-the-3rd-to-6th-year-of-revelati) ('Umar at his sister's); [*The years 3–6 before the Hijrah (part 9)*](https://www.dar-alifta.org/en/article/details/175/the-years-3-%e2%80%93-6-before-the-hijrah-part-9) (Hamzah and 'Umar embrace Islam).
- Qalam Institute, *The Sīrah Podcast*: [ep. 41, The migration to Abyssinia](https://www.qalaminstitute.org/2013/04/seerah-life-of-the-prophet-the-migration-to-abyssinia/); [ep. 44, Hamza accepts Islam](https://www.qalaminstitute.org/2013/05/seerah-life-of-the-prophet-hamza-ra-accepts-islam-and-the-aftermath-of-the-migration-to-abyssinia/); [ep. 45, 'Umar accepts Islam](https://www.qalaminstitute.org/2013/07/seerah-life-of-the-prophet-umar-bin-al-khattab-accepts-islam/).
- Fact rows 14.1–14.4 and 13.1 in [[Seerah Fact-Check Log]].
