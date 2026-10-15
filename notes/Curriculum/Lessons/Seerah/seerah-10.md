---
track: seerah
order: 10
phase: null
unit: null
title: "The first believers"
hook: "The first people to believe him knew him best: his wife, his best friend, a boy in his house and a man he had freed."
minutes: 6
skills: [T2, B6]
pain_points: [loneliness, belonging]
logs: []
madhab_sensitive: false
scholar_flags: [Q40]
status: draft-pending-scholar-review
glossary: [ﷺ, Makkah, salam]
sources: [Bukhari 3660, Bukhari 3726, IslamQA 11575, SeekersGuidance (Amazing Muslim Women: Khadija), Dar al-Ifta Egypt (seerah parts 6 and 8), Qalam Institute Sirah Podcast ep. 32, 33, 55]
format: 2
---
# seerah-10 · The first believers

### 1 · hook
```yaml
pic: icon:Users
text: "**The first people to believe him knew him best.** His wife. His closest friend. A boy who lived in his house. A man he had freed and raised as a son."
```

### 2 · learn
```yaml
pic: icon:House
text: "**Those closest to him.** By most accounts, Khadijah was the very first to believe him. She was certainly the first woman in Islam [SeekersGuidance; Dar al-Ifta 172]."
bubbles:
  - "The people who saw him every day, at home and in private, were the first to say he was telling the truth."
```

### 3 · reveal
```yaml
title: "Among the very first"
cards:
  - front: "'Ali"
    back: "A boy who lived in the Prophet's ﷺ household [Qalam ep. 32]."
    pic: icon:Baby
  - front: "Zayd ibn Harithah"
    back: "Kidnapped as a child and sold into slavery. The Prophet ﷺ freed him and raised him as a son [Qalam ep. 32]. `[SCHOLAR: Q40]`"
    pic: icon:HandHeart
  - front: "Abu Bakr"
    back: "His close friend, and the first free adult man to believe [Qalam ep. 32; IslamQA 11575]."
    pic: icon:Handshake
```

### 4 · learn
```yaml
pic: icon:DoorClosed
text: "**A quiet circle.** For about three years, the call was private. Believers met in secret, including at the house of a man named al-Arqam [Dar al-Ifta 172; Dar al-Ifta 174; Qalam ep. 33]."
bubbles:
  - "At one point, a companion recalled, the only ones with him were five slaves, two women and Abu Bakr [Bukhari 3660]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Islam's first few years"
text: "From a handful of people in one house."
events:
  - when: "About 610 CE"
    title: "Khadijah"
    text: "By most accounts, the first to believe him [SeekersGuidance; Dar al-Ifta 172]."
    pic: icon:House
  - when: "Soon after"
    title: "'Ali, Zayd, Abu Bakr"
    text: "A boy, a freed man and a close friend join [Qalam ep. 32]."
    pic: icon:Users
  - when: "About 3 years"
    title: "Meeting in secret"
    text: "Believers gather quietly, including at al-Arqam's house [Dar al-Ifta 174; Qalam ep. 33]."
    pic: icon:DoorClosed
  - when: "At one point"
    title: "A handful"
    text: "Only a few slaves, two women and Abu Bakr are with him [Bukhari 3660]."
    pic: icon:Hand
  - when: "Next episode"
    title: "Going public"
    text: "He is told to warn his nearest relatives [Q 26:214]."
    pic: icon:Megaphone
```

### 6 · learn
```yaml
pic: icon:Hand
text: "**Small numbers.** Sa'd ibn Abi Waqqas later said that, for a time, he was one of only three Muslims [Bukhari 3726]. The whole of Islam could fit in a few rooms."
bubbles:
  - "Many of the first believers were people Makkah overlooked: the young, women, and slaves."
```

### 7 · choice
```yaml
pic: icon:Users
prompt: "Why does it matter that the very first believers were the people closest to him?"
options:
  - text: "They knew his private life, and still trusted him completely"
    correct: true
    feedback: "Right. Nobody knows you like the people you live with. They were the first to say he was truthful."
  - text: "They had to believe him because they were family"
    correct: false
    feedback: "Not quite. Some of his own relatives opposed him fiercely, as the next episode shows."
  - text: "They were promised money and status"
    correct: false
    feedback: "Not quite. Believing cost them, as later episodes show. There was nothing to gain but the truth."
```

### 8 · learn
```yaml
pic: community
text: "**You're in good company.** Islam began tiny, carried by people the city didn't think mattered. If you're the only Muslim you know, you're standing right where the first believers stood."
```

### 9 · scenario
```yaml
pic: icon:Smartphone
situation: "Maria is the only Muslim in her family and at her job. On Fridays she scrolls through photos of packed masjids online and feels like she doesn't really count."
options:
  - text: "Remember Islam once fit in a few rooms, and ask {{mentor.name}} to help her meet one Muslim friend"
    best: true
    feedback: "Yes. Being few has never meant being less. One friend at a time is how it started."
  - text: "Decide she isn't a real Muslim until she has a community"
    best: false
    feedback: "Not quite. Her Islam is real now. Sa'd was one of only three Muslims once [Bukhari 3726]."
  - text: "Stop looking for Muslim friends; it's too hard"
    best: false
    feedback: "Not quite. The first believers found each other, quietly. Her mentor can help her take one small step."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Zayd ibn Harithah?"
  - "Who was Abu Bakr?"
  - "Why was the call kept private at first?"
  - "I'm the only Muslim I know. What can I do?"
```

### 11 · do_today
```yaml
pic: icon:MessageCircle
text: "Find one of your people."
steps:
  - "Message one Muslim you know, even just to say **salam** (peace)"
  - "Or ask {{mentor.name}} to introduce you to one new person"
log: null
```

### 12 · takeaway
```yaml
pic: icon:Users
text: "Islam started with a handful of people nobody thought important. Being few has never meant being wrong."
```

### 13 · closing
Next episode: he climbs a hill and calls out to the whole city.

---

## Check
```yaml
- prompt: "Who were among the very first to believe him?"
  options:
    - text: "Khadijah, 'Ali, Zayd and Abu Bakr"
      correct: true
      feedback: "Right. The people who knew him best believed him first."
    - text: "The leaders of Quraysh"
      correct: false
      feedback: "Not quite. Most leaders opposed him. The first believers were his wife, a boy, a freed man and his close friend."
- prompt: "How did the first believers meet for the first few years?"
  options:
    - text: "Quietly, in private, including at al-Arqam's house"
      correct: true
      feedback: "Right. For about three years the call was private."
    - text: "In large public gatherings at the Ka'bah"
      correct: false
      feedback: "Not quite. For about three years they met quietly, including at al-Arqam's house."
```

## AI guide context
**Lesson facts**
- Khadijah was the first woman to accept Islam and, by most accounts, the very first believer [SeekersGuidance; Dar al-Ifta Egypt, seerah part 6; Qalam ep. 55]. Say "by most accounts" for "the first".
- Among the first: 'Ali (a boy in his household), Zayd ibn Harithah (kidnapped as a child, sold into slavery, freed and raised as a son) and Abu Bakr (the first free adult man) [Qalam ep. 32; IslamQA 11575].
- For about three years the call was private; believers met in secret, including at the house of al-Arqam [Dar al-Ifta Egypt, seerah parts 6 and 8; Qalam ep. 33].
- At one point the only ones with him were five slaves, two women and Abu Bakr [Bukhari 3660]. Sa'd ibn Abi Waqqas said that for a time he was one of only three Muslims [Bukhari 3726].

**Likely questions**
- *"Who was the first Muslim?"* "First" lists differ by category (first woman, first man, first child, first freed slave). Say "among the very first", and that by most accounts Khadijah was the very first.
- *"Was Zayd his adopted son?"* He freed Zayd and raised him as a son. Later revelation changed the rules on adoption so that a child keeps their birth family's name; don't go into detail, and offer the imam for questions about adoption today. `[SCHOLAR: Q40]`
- *"Why were there slaves among the first Muslims?"* Slavery existed everywhere at that time. Many of the first believers were enslaved, and early Muslims freed several of them (Bilal comes in seerah-12). Don't claim slavery is acceptable today or that Islam abolished it in one stroke; detailed questions go to the imam. `[SCHOLAR: Q40]`
- *"Why was the call private at first?"* The sources describe a private phase of about three years before the command to warn his relatives publicly (seerah-11). Don't add reasons as fact.
- *"I'm the only Muslim I know."* Normalise it, point to the mentor and the masjid, Day 20 and Day 48.

**Escalate:** adoption and fostering questions (a ruling); detailed questions on slavery (Q40).

**Don't**
- Don't argue over who was "first"; use "among the very first".
- Don't describe Zayd's later adoption rule change as a story on screen.
- Don't picture the Prophet ﷺ or the Companions.

## Sources
- [Bukhari 3660](https://sunnah.com/bukhari:3660) (Sahih): at one point only five slaves, two women and Abu Bakr were with him.
- [Bukhari 3726](https://sunnah.com/bukhari:3726) (Sahih): Sa'd, one of only three Muslims for a time.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): the early believers.
- [SeekersGuidance (Zaynab Ansari), *Amazing Muslim Women: Khadija*](https://seekersguidance.org/articles/social-issues/amazing-muslim-women-khadija/): the first woman to accept Islam.
- Dar al-Ifta Egypt: [*The first four years following the Revelation (part 6)*](https://www.dar-alifta.org/en/article/details/172/the-first-four-years-following-the-revelation-part-6) (Khadijah the first believer; the private phase of about three years); [*The Art of Negotiations (part 8)*](https://www.dar-alifta.org/en/article/details/174/the-art-of-negotiations-a-prophetic-examplepart-8) (Dar al-Arqam).
- Qalam Institute, *The Sīrah Podcast*: [ep. 32, The next 3 converts](https://www.qalaminstitute.org/2013/01/seerah-life-of-the-prophet-the-next-3-converts-ali-bin-abi-talib-zayd-bin-harithah-abu-bakr-ra/); [ep. 33, A community in the making](https://www.qalaminstitute.org/2013/01/seerah-life-of-the-prophet-a-community-in-the-making-some-of-the-early-companions-ra/); [ep. 55, The Prophet loses Khadijah](https://www.qalaminstitute.org/2013/10/seerah-life-of-the-prophet-the-prophet-losses-khadijah/).
- Fact rows 10.1–10.5 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 3 and AI guide (Q40).** Zayd is described plainly (kidnapped, enslaved, freed, raised as a son); the AI guide says slavery existed everywhere then, doesn't claim it's acceptable today, and routes detail to the imam.
