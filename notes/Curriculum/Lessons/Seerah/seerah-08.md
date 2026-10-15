---
track: seerah
order: 8
phase: null
unit: null
title: "Hira: \"Read!\""
hook: "A man alone in a mountain cave is told to read. He answers that he can't."
minutes: 6
skills: [T2, B6]
pain_points: [family, anxiety]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, Qur'an, Ramadan, Musa]
sources: [Q 96:1–5, Q 2:185, Bukhari 3, Bukhari 3902, Muslim 1162, Yaqeen (What Islam Says About Prophet Muhammad), Dar al-Ifta Egypt (seerah part 4), Qalam Institute Sirah Podcast ep. 28]
format: 2
---
# seerah-08 · Hira: "Read!"

### 1 · hook
```yaml
pic: icon:Mountain
text: "**A cave on a mountain. A voice tells him to read.** He answers that he can't. You met this moment on Day 15. This is the rest of that night, and the woman who held him through it."
```

### 2 · learn
```yaml
pic: icon:Moon
text: "**Alone with Allah.** In the years before, he had come to love being alone. He would spend nights worshipping in a cave called Hira, outside Makkah, then return to Khadijah for more food [Bukhari 3]."
bubbles:
  - "He was forty, about 610 CE [Bukhari 3902; Yaqeen]. It was a Monday [Muslim 1162], in **Ramadan** according to most scholars [Q 2:185; Qalam ep. 28]."
```

### 3 · fill
```yaml
before: "The first words of the Qur'an to come down: \"Recite in the name of your Lord who"
after: "\" [Q 96:1, Saheeh Intl.]"
options:
  - text: "created"
    correct: true
    feedback: "Yes. The first revelation reminded him who made him, and who teaches by the pen [Q 96:1–5]."
  - text: "forgives"
    correct: false
    feedback: "Not quite. The verse says \"who created\". Allah forgives too, but the first word pointed to creation."
  - text: "rules the kings"
    correct: false
    feedback: "Not quite. The very first verse says \"who created\" [Q 96:1]."
```

### 4 · learn
```yaml
pic: icon:House
text: "**Shaking, he went home.** His heart pounding, he asked Khadijah to cover him. She wrapped him up, listened, and reassured him: Allah would never disgrace a man who kept family ties, helped the weak and honoured guests [Bukhari 3]."
bubbles:
  - "She didn't panic or argue. She reminded him of who he already was."
```

### 5 · widget
```yaml
widget: timeline
prompt: "The night it began"
text: "From the cave to the pause."
events:
  - when: "About 610 CE, age 40"
    title: "In the cave"
    text: "The angel tells him to read. The first verses of the Qur'an come down [Bukhari 3; Q 96:1–5]."
    pic: icon:Mountain
  - when: "That night"
    title: "Home to Khadijah"
    text: "She covers him and reminds him of his good character [Bukhari 3]."
    pic: icon:House
  - when: "Soon after"
    title: "To Waraqah"
    text: "Her elderly Christian cousin recognises the angel as the one sent to Musa [Bukhari 3]."
    pic: icon:ScrollText
  - when: "A few days later"
    title: "Silence"
    text: "Waraqah dies, and revelation pauses for a while [Bukhari 3]."
    pic: icon:Pause
```

### 6 · learn
```yaml
pic: icon:ScrollText
text: "**An old Christian scholar.** Khadijah took him to her cousin Waraqah ibn Nawfal, an elderly, blind Christian who knew the scripture. Waraqah said it was the same angel Allah had sent to **Musa** (Moses) [Bukhari 3]."
bubbles:
  - "Waraqah also warned that his own people would drive him out, and said he'd stand by him if he lived to see that day [Bukhari 3]."
```

### 7 · choice
```yaml
pic: icon:HandHeart
prompt: "When he came home frightened, how did Khadijah reassure him?"
options:
  - text: "She reminded him of the good he did for family, the weak and guests"
    correct: true
    feedback: "Right. She pointed to his character: Allah would never disgrace a man like that [Bukhari 3]."
  - text: "She told him it was only a bad dream"
    correct: false
    feedback: "Not quite. She took it seriously, comforted him, and then found someone who could help."
  - text: "She told him to keep it a secret from everyone"
    correct: false
    feedback: "Not quite. She took him straight to Waraqah, who knew the earlier scriptures."
```

### 8 · learn
```yaml
pic: icon:Heart
text: "**The person beside you.** At the most frightening moment of the Prophet's ﷺ life, his wife listened, reminded him of his good, and found him help. When you're shaken, you need someone like that. And you can be that person for someone else."
```

### 9 · scenario
```yaml
pic: conversation
situation: "Hannah has been Muslim a month. Late one night her friend Dre calls, shaken: he's just lost his job and is sure his life is falling apart."
options:
  - text: "Listen first, remind him of the good he does, and help him find someone who can help"
    best: true
    feedback: "Yes. That's what Khadijah did: listen, remind, then find help. Calm presence is worth more than a speech."
  - text: "Tell him to pray about it and get off the phone"
    best: false
    feedback: "Not quite. Prayer helps, but he needs someone to listen first. Khadijah heard the whole story."
  - text: "Give him a long lecture on what he should have done"
    best: false
    feedback: "Not quite. In a scary moment, people need comfort before advice."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Waraqah ibn Nawfal?"
  - "Why did he say he couldn't read?"
  - "Why was the first word \"Read\"?"
  - "How can I support someone who's scared?"
```

### 11 · do_today
```yaml
pic: icon:Phone
text: "Be a steady voice for someone today."
steps:
  - "Check in on one person who's going through something hard"
  - "Listen first. Then remind them of one good thing about them"
log: null
```

### 12 · takeaway
```yaml
pic: icon:Mountain
text: "Revelation began with one word, \"Read\", and with a wife who listened, believed in his goodness and found him help."
```

### 13 · closing
Next episode: the revelation goes quiet. Then the angel appears again.

---

## Check
```yaml
- prompt: "Who did Khadijah take him to after the first revelation?"
  options:
    - text: "Her cousin Waraqah, an elderly Christian who knew the scripture"
      correct: true
      feedback: "Right. He recognised the angel as the one sent to Musa [Bukhari 3]."
    - text: "The leaders of Quraysh"
      correct: false
      feedback: "Not quite. She took him to her cousin Waraqah ibn Nawfal, a Christian who knew the scripture."
- prompt: "What were the first words of the Qur'an to be revealed?"
  options:
    - text: "The opening of Surah al-'Alaq: Recite in the name of your Lord who created"
      correct: true
      feedback: "Right. Those verses came down in the cave of Hira [Q 96:1–5; Bukhari 3]."
    - text: "Surah al-Fatiha"
      correct: false
      feedback: "Not quite. The first revealed were the opening verses of Surah al-'Alaq [Q 96:1–5]."
```

## AI guide context
**Lesson facts**
- He came to love solitude and spent nights worshipping in the cave of Hira, returning to Khadijah for provisions [Bukhari 3].
- The angel told him to read; he said he could not; the first revelation was the opening of Surah al-'Alaq [Bukhari 3; Q 96:1–5]. Day 15 already teaches this; build on it.
- He was forty [Bukhari 3902], about 610 CE [Yaqeen; Dar al-Ifta Egypt, seerah part 4]. It was a Monday [Muslim 1162], in Ramadan according to most scholars [Qalam ep. 28; Q 2:185]. The day of the month is disputed (14th, 17th, 21st, 27th are all reported).
- He came home with his heart pounding and asked to be covered; Khadijah reassured him that Allah would never disgrace a man who kept family ties, helped the weak and honoured guests [Bukhari 3].
- She took him to her cousin Waraqah ibn Nawfal, an elderly, blind Christian who wrote from the Gospel in Hebrew; Waraqah said it was the same angel sent to Musa, warned that his people would drive him out, and said he would support him if he lived. A few days later Waraqah died and revelation paused [Bukhari 3].

**Likely questions**
- *"Why did he say he couldn't read?"* He couldn't read or write; the hadith tells it plainly [Bukhari 3]. The message didn't come from his own study.
- *"Was the angel rough with him?"* The hadith says the angel held him tightly three times before the verses came [Bukhari 3]. Tell it calmly, without dramatising, and don't explain why beyond the text.
- *"Was Waraqah a Muslim?"* Say what the hadith says: he recognised the angel and said he would support him, then died a few days later. Don't speculate about his fate.
- *"Which night of Ramadan?"* Most scholars say Ramadan; the exact night is disputed. Laylat al-Qadr questions can go to the ramadan modules.
- *"How do I support someone who's frightened?"* Listen first, remind them of their good, then help them find the right person (mentor, counsellor, imam). If anyone is in danger, follow the safety rule.

**Escalate:** nothing specific to this lesson; any crisis a convert describes follows the safety rule.

**Don't**
- Don't repeat Day 15's teaching at length; point back to it.
- Don't describe the angel's appearance, and don't picture the Prophet ﷺ, Jibril or Khadijah.
- Don't speak negatively of Christianity; Waraqah was a Christian who believed him (see Day 27).

## Sources
- Qur'an [96:1–5](https://quran.com/96/1-5) (the first revelation), [2:185](https://quran.com/2/185) (the Qur'an sent down in Ramadan).
- [Bukhari 3](https://sunnah.com/bukhari:3) (Sahih): how revelation began; Khadijah's reassurance; Waraqah; the pause.
- [Bukhari 3902](https://sunnah.com/bukhari:3902) (Sahih): revelation began when he was forty.
- [Muslim 1162](https://sunnah.com/muslim:1162) (Sahih): Monday, the day revelation began.
- [Yaqeen Institute, *What Islam Says About Prophet Muhammad ﷺ*](https://yaqeeninstitute.org/what-islam-says-about/prophet-muhammad): born 570 (so revelation about 610).
- [Dar al-Ifta Egypt, *The Beginning of the Revelation (part 4)*](https://www.dar-alifta.org/en/article/details/170/the-beginning-of-the-revelation-part-4): revelation at forty.
- [Qalam Institute, *The Sīrah Podcast*, ep. 28](https://www.qalaminstitute.org/2012/10/seerah-life-of-the-prophet-the-right-man-for-the-job-aftermath-of-revelation-khadijah-waraqah-bin-nawfal/): most scholars say Ramadan; Khadijah and Waraqah.
- Fact rows 08.1–08.8 in [[Seerah Fact-Check Log]].
