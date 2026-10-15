---
track: seerah
order: 7
phase: null
unit: null
title: "The Black Stone"
hook: "Four clans were ready to fight over who would lift one stone. He found a way for all of them to lift it."
minutes: 6
skills: [T2, B4, B6]
pain_points: [family, character]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [ﷺ, Makkah, Ka'bah, Quraysh, al-Amin]
sources: [Bukhari 364, IslamQA 11575, Dar al-Ifta Egypt (seerah part 3), Qalam Institute Sirah Podcast ep. 22–23]
format: 2
---
# seerah-07 · The Black Stone

### 1 · hook
```yaml
pic: kaaba
text: "**Four clans were ready to fight over one stone.** Each wanted the honour of setting it back into the wall of the Ka'bah. He found a way for all of them to lift it."
```

### 2 · learn
```yaml
pic: icon:Construction
text: "**Rebuilding the House.** When he was about 35, the Ka'bah was badly damaged, and Quraysh decided to rebuild it [IslamQA 11575; Qalam ep. 22]. He carried stones for the walls alongside his uncle al-'Abbas [Bukhari 364]."
bubbles:
  - "By now he was married to Khadijah, and known across Makkah as al-Amin, \"the trustworthy\" [IslamQA 11575]."
```

### 3 · scenario
```yaml
pic: icon:Swords
situation: "You're there. The walls are up, and only the Black Stone is left to set in place. Every clan wants that honour, and tempers are rising. You're one of the elders. What do you suggest?"
options:
  - text: "Let someone outside the quarrel decide"
    best: true
    feedback: "Close to what happened. They agreed that the next man to walk in would decide, the early biographers say."
  - text: "Let the strongest clan do it"
    best: false
    feedback: "Not quite. That's how fights start. They chose a way that didn't hand one clan a win."
  - text: "Leave the stone out until people calm down"
    best: false
    feedback: "Not quite. The House needed its stone. They agreed to let the next man to enter decide."
```

### 4 · learn
```yaml
pic: icon:DoorOpen
text: "**The next man through the door.** The clans agreed that the next man to enter would decide [Qalam ep. 23; Dar al-Ifta 169]. It was him, the future Prophet ﷺ. They were relieved: al-Amin had come, the early biographers say [Qalam ep. 23; IslamQA 11575]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "One stone, one afternoon"
text: "How a fight was avoided."
events:
  - when: "About age 35"
    title: "A damaged House"
    text: "Quraysh decide to rebuild the Ka'bah [IslamQA 11575; Qalam ep. 22]."
    pic: kaaba
  - when: "During the work"
    title: "Carrying stones"
    text: "He carries stones for the walls with his uncle al-'Abbas [Bukhari 364]."
    pic: icon:Construction
  - when: "Walls finished"
    title: "A quarrel"
    text: "The clans argue over who will set the Black Stone back in place [Qalam ep. 23; Dar al-Ifta 169]."
    pic: icon:Swords
  - when: "That day"
    title: "Al-Amin walks in"
    text: "They agree to let the next man decide. It's him [Qalam ep. 23]."
    pic: icon:DoorOpen
  - when: "Moments later"
    title: "Everyone lifts"
    text: "A leader from each clan holds the cloth. He sets the stone in place [IslamQA 11575]."
    pic: icon:Handshake
```

### 6 · learn
```yaml
pic: icon:Handshake
text: "**One cloth, every clan.** He spread out a cloth and put the stone in the middle. A leader from each clan took hold of an edge, and they lifted it together. Then he set it in place himself [IslamQA 11575; Qalam ep. 23]."
```

### 7 · order
```yaml
prompt: "Put his solution in order."
items:
  - "He spreads out a cloth"
  - "He places the Black Stone in the middle"
  - "A leader from each clan takes an edge"
  - "Together they lift it to the wall"
  - "He sets it in place with his own hands"
pics: [icon:Shirt, icon:Gem, icon:Users, icon:Hand, kaaba]
feedback: "Every clan carried the stone, and nobody had to back down [IslamQA 11575; Qalam ep. 23]."
```

### 8 · learn
```yaml
pic: family
text: "**Nobody lost.** Every clan got a share of the honour, and no one had to lose face. When your family argues over your new faith, look for the answer where everyone keeps their dignity, not the one where you win."
```

### 9 · scenario
```yaml
pic: family
situation: "Marcus's mom made her famous pork roast for Sunday dinner. Marcus can't eat it now. His dad says he's insulting her, and his sister says Mom should just change the menu. Voices are rising."
options:
  - text: "Thank his mom warmly, offer to bring a dish everyone can share next time, and keep coming"
    best: true
    feedback: "Yes. Like the cloth: Mom's cooking is honoured, Marcus keeps his faith, and nobody has to lose."
  - text: "Let his sister win the argument for him"
    best: false
    feedback: "Not quite. Winning the fight can cost the family. Look for a way everyone keeps their dignity."
  - text: "Stop coming to Sunday dinner"
    best: false
    feedback: "Not quite. Staying away feels easier, but it widens the gap. Find a way to keep showing up."
```

### 10 · ask_ai
```yaml
chips:
  - "What is the Black Stone?"
  - "Do Muslims worship the Black Stone?"
  - "Why did the Ka'bah need rebuilding?"
  - "My family argues about my faith. How do I keep the peace?"
```

### 11 · do_today
```yaml
pic: icon:Handshake
text: "Find the cloth today."
steps:
  - "Notice one disagreement at home, work or school"
  - "Suggest a way where both sides get something and nobody has to lose face"
log: null
```

### 12 · takeaway
```yaml
pic: kaaba
text: "He didn't pick a winner. He found a way for everyone to carry the stone together."
```

### 13 · closing
Next episode: a cave on a mountain, a voice, and one word: "Read!"

---

## Check
```yaml
- prompt: "Why did the clans let him decide?"
  options:
    - text: "They had agreed the next man to enter would decide, and they trusted him"
      correct: true
      feedback: "Right. He walked in next, and they were relieved that it was al-Amin."
    - text: "He was the leader of Makkah"
      correct: false
      feedback: "Not quite. He held no office. They had agreed the next man in would decide, and they trusted him."
- prompt: "How did he solve the quarrel?"
  options:
    - text: "Each clan's leader held an edge of a cloth carrying the stone"
      correct: true
      feedback: "Right. Everyone shared the honour, and he set the stone in place himself."
    - text: "He chose his own clan to lift it"
      correct: false
      feedback: "Not quite. He gave every clan a share: each leader held an edge of the cloth."
```

## AI guide context
**Lesson facts**
- At about 35, Quraysh rebuilt the damaged Ka'bah [IslamQA 11575 (damaged by a flood); Qalam ep. 22].
- He carried stones for it alongside his uncle al-'Abbas [Bukhari 364].
- The clans quarrelled over who would set the Black Stone back in place and agreed to let the next man to enter decide [Qalam ep. 23; Dar al-Ifta Egypt, seerah part 3].
- He came in next; they were relieved that al-Amin had come [Qalam ep. 23; IslamQA 11575].
- He placed the stone on a cloth, had a leader of each clan hold an edge and lift it together, then set it in place himself [IslamQA 11575; Qalam ep. 23]. Some reports say the cloth was his own garment; say "a cloth".

**Likely questions**
- *"Do Muslims worship the Black Stone?"* No. Worship is for Allah alone. The stone is part of the Ka'bah, and pilgrims honour it during Hajj and Umrah because the Prophet ﷺ did. Day 47 and the hajj modules cover the rites.
- *"Was it his own cloak?"* Some reports say so; the sources agree on "a cloth". Don't state it as certain.
- *"How can I keep the peace when my family argues about my faith?"* Draw the lesson gently: look for options where everyone keeps their dignity (bringing a dish, coming to the meal, thanking the host). Day 14 and Day 65 cover family. Specific food or holiday rulings go to the imam.

**Escalate:** specific family-meal and holiday rulings (Q5, Q6 territory); any family conflict that becomes unsafe (safety rule, never only the imam queue).

**Don't**
- Don't mention the detail in Bukhari 364 about his waist-cloth; it isn't for screens, and the hadith is cited only for his carrying stones.
- Don't say the stone itself has power or is worshipped.
- Don't picture the Prophet ﷺ.

## Sources
- [Bukhari 364](https://sunnah.com/bukhari:364) (Sahih): he carried stones for the Ka'bah alongside al-'Abbas.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): rebuilding at 35; the cloth and the clans; al-Amin.
- [Dar al-Ifta Egypt, *The Divine Preparation of Prophet Muhammad (part 3)*](https://www.dar-alifta.org/en/article/details/169/the-divine-preparation-of-prophet-muhammad-part-3): the dispute over the Black Stone.
- Qalam Institute, *The Sīrah Podcast*: [ep. 22, Renovation of the Ka'bah](https://www.qalaminstitute.org/2012/05/seerah-life-of-the-prophet-muhammad-the-family-man-renovation-of-the-kabah/); [ep. 23, Placing of the Black Stone](https://www.qalaminstitute.org/2012/08/seerah-life-of-the-prophet-placing-of-the-black-stone-and-history-of-the-kabah/).
- Fact rows 07.1–07.5 in [[Seerah Fact-Check Log]].
