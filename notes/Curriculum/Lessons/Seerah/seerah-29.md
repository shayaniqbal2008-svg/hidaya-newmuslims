---
track: seerah
order: 29
phase: null
unit: null
title: "Hudaybiyah"
hook: "He let them strike \"Messenger of Allah\" from the treaty. His Companions were crushed. Allah called it \"a clear conquest\"."
minutes: 6
skills: [T2, B6]
pain_points: [family, conversations, character]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, Umrah, Bismillah, Quraysh]
sources: [Q 48:1, Q 48:18, Q 3:159, Bukhari 4154, Bukhari 2731, Abu Dawud 2766, IslamQA 11575, Yaqeen (How Muhammad Confronted Hate)]
format: 2
---
# seerah-29 · Hudaybiyah

### 1 · hook
```yaml
pic: icon:ScrollText
text: "**He let them cross out \"Messenger of Allah\" from the treaty.** His Companions were crushed. On the road home, Allah called it *\"a clear conquest\"* [Q 48:1, Saheeh Intl.]."
```

### 2 · learn
```yaml
pic: kaaba
text: "**Pilgrims, turned away.** Six years after the hijra, he set out for Makkah to perform **Umrah**, with about 1,400 Companions. They came as pilgrims; he said they hadn't come to fight anyone [Bukhari 2731]. Quraysh blocked the way at al-Hudaybiyah, just outside Makkah [Bukhari 4154; IslamQA 11575]."
bubbles:
  - "Under a tree there, the Companions pledged to stand by him. Allah said: *\"Certainly was Allah pleased with the believers when they pledged allegiance to you... under the tree\"* [Q 48:18, Saheeh Intl.]."
```

### 3 · choice
```yaml
pic: icon:PenLine
prompt: "The treaty is being written. Quraysh's negotiator, Suhayl, objects to the full Bismillah, and to \"Messenger of Allah\": if we believed that, he says, we wouldn't be blocking you. What does the Prophet ﷺ do?"
options:
  - text: "Agrees: \"By Your Name O Allah\", and \"Muhammad bin 'Abdullah\""
    correct: true
    feedback: "Right. He gave up the wording to get the peace [Bukhari 2731]."
  - text: "Walks away; the words are non-negotiable"
    correct: false
    feedback: "Not quite. He agreed to the changes. The truth didn't depend on a piece of paper [Bukhari 2731]."
  - text: "Lets 'Umar decide"
    correct: false
    feedback: "Not quite. He decided himself, and agreed to the changes so the treaty could go ahead [Bukhari 2731]."
```

### 4 · learn
```yaml
pic: icon:ScrollText
text: "**Hard terms.** No war for ten years. The Muslims would go home without their Umrah that year. And anyone who fled Makkah to join them must be sent back [Abu Dawud 2766; Bukhari 2731]."
bubbles:
  - "That rule was tested at once. Abu Jandal, a Muslim and the negotiator's own son, arrived in chains, and had to be returned. The Companions were heartbroken [Bukhari 2731]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Hudaybiyah, 6 AH"
text: "A treaty that looked like a loss."
events:
  - when: "Setting out"
    title: "Pilgrims"
    text: "About 1,400 set out for Umrah [Bukhari 4154]."
    pic: kaaba
  - when: "Blocked"
    title: "The pledge under the tree"
    text: "The Companions pledge to stand by him; Allah is pleased with them [Q 48:18]."
    pic: icon:TreeDeciduous
  - when: "Negotiating"
    title: "Words crossed out"
    text: "He agrees to Suhayl's wording [Bukhari 2731]."
    pic: icon:PenLine
  - when: "Signed"
    title: "Ten years of peace"
    text: "No war for ten years, and hard terms for the Muslims [Abu Dawud 2766; Bukhari 2731]."
    pic: icon:ScrollText
  - when: "On the road home"
    title: "A clear conquest"
    text: "Allah reveals: We have given you a clear conquest [Q 48:1]."
    pic: quran
```

### 6 · learn
```yaml
pic: icon:Users
text: "**Advice from home.** He told the Companions to sacrifice and shave their heads, ending their pilgrimage. Nobody moved. He went to his wife Umm Salamah. She advised: go out, say nothing, and do it yourself first. He did, and they all followed [Bukhari 2731]."
```

### 7 · fill
```yaml
before: "\"Indeed, We have given you, [O Muhammad], a clear"
after: "\" [Q 48:1]"
options:
  - text: "conquest"
    correct: true
    feedback: "Yes. A treaty that felt like a defeat was, in Allah's words, a clear conquest."
  - text: "warning"
    correct: false
    feedback: "Not quite. The verse calls it a clear conquest, though no battle was fought."
  - text: "loss"
    correct: false
    feedback: "Not quite. It felt like a loss to them. Allah called it a clear conquest."
```

### 8 · order
```yaml
prompt: "Put Hudaybiyah in order."
items:
  - "They set out as pilgrims for Umrah"
  - "Quraysh block the way"
  - "The Companions pledge under the tree"
  - "The treaty is written, with words crossed out"
  - "Umm Salamah's advice, and everyone follows"
feedback: "That's the sequence: the pilgrimage, the block, the pledge, the treaty, and Umm Salamah's advice [Bukhari 2731; Q 48:18]."
```

### 9 · learn
```yaml
pic: icon:Handshake
text: "**Peace over pride.** He gave up words he had every right to, because peace mattered more. And in a crisis, he took his wife's advice. Day 70 talked about consulting family; this is what it looks like."
bubbles:
  - "Giving up a point isn't giving up the truth. He was still the Messenger of Allah, whatever the paper said."
```

### 10 · scenario
```yaml
pic: family
situation: "Dre suggested a halal restaurant for his mom's birthday dinner, so he could eat with everyone. In the family group chat, his sister presents it as her idea. Dre is tempted to correct her."
options:
  - text: "Let the credit go; what matters is the family dinner he can share"
    best: true
    feedback: "Yes. Peace over pride. Like the treaty, the outcome mattered more than whose name was on it."
  - text: "Correct her publicly; it's the principle"
    best: false
    feedback: "Not quite. Nothing of his faith is at stake, only credit. Letting it go keeps the peace."
  - text: "Skip the dinner to make a point"
    best: false
    feedback: "Not quite. Walking away helps nobody. He stayed at the table and made the deal."
```

### 11 · ask_ai
```yaml
chips:
  - "Why did he accept such hard terms?"
  - "What happened to Abu Jandal?"
  - "Who was Umm Salamah?"
  - "How do I let go of an argument without giving in on my faith?"
```

### 12 · do_today
```yaml
pic: icon:Handshake
text: "Choose peace over pride once today."
steps:
  - "Let go of one small point you'd usually argue about"
  - "Ask someone at home for their advice on something real"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Handshake
text: "He let them cross out his title for the sake of peace, and Allah called it a clear conquest. Giving up a point isn't giving up the truth."
```

### 14 · closing
Next episode: letters to emperors and kings, inviting them to Islam.

---

## Check
```yaml
- prompt: "What did Umm Salamah advise when the Companions didn't move?"
  options:
    - text: "Go out, say nothing, and sacrifice and shave first"
      correct: true
      feedback: "Right. He did, and they all followed [Bukhari 2731]."
    - text: "Give them a long speech"
      correct: false
      feedback: "Not quite. She advised no words at all: just do it first, and they'll follow."
- prompt: "What did Allah call the treaty of Hudaybiyah?"
  options:
    - text: "A clear conquest"
      correct: true
      feedback: "Right. That's Q 48:1, revealed on the way home."
    - text: "A mistake"
      correct: false
      feedback: "Not quite. It felt like a loss to many, but Allah called it a clear conquest [Q 48:1]."
```

## AI guide context
**Lesson facts**
- In 6 AH he set out for 'Umrah with about 1,400 Companions (Bukhari also has 1,500 in other reports); Quraysh barred the way at al-Hudaybiyah [Bukhari 4154; IslamQA 11575; Yaqeen (How Muhammad Confronted Hate)].
- Under a tree the Companions pledged to stand by him, and Allah declared Himself pleased with them [Q 48:18].
- Negotiating with Suhayl ibn 'Amr, he agreed to write "By Your Name O Allah" instead of the Bismillah, and "Muhammad bin 'Abdullah" instead of "Messenger of Allah" [Bukhari 2731].
- Terms: no war for ten years [Abu Dawud 2766, Hasan]; the Muslims to return that year without 'Umrah; anyone fleeing from Makkah to be returned, applied at once to Abu Jandal, Suhayl's own son, who arrived in chains [Bukhari 2731].
- The Companions were slow to sacrifice and shave; Umm Salamah advised him to do it first without a word, and they followed [Bukhari 2731].
- On the way home, Allah revealed: "Indeed, We have given you a clear conquest" [Q 48:1].

**Likely questions**
- *"Why did he accept such hard terms?"* Keep to what's known: peace for ten years, a pledge Allah praised, and Allah calling it a clear conquest [Q 48:1]. Don't add later outcomes this track hasn't covered yet; episode 33 picks it up.
- *"What happened to Abu Jandal?"* He was returned, as the treaty required, and the Companions grieved for him; Bukhari 2731 says he later got free. Tell it with restraint.
- *"Why did the Companions hesitate?"* They were heartbroken; they had hoped to reach the Ka'bah. Their hesitation was grief, not rebellion; when he led, they followed.
- *"Who was Umm Salamah?"* One of the Prophet's ﷺ wives, known for her wisdom; episode 40 covers his family.
- *"How do I let go of an argument without giving in on my faith?"* Separate wording and pride from principles; the Prophet ﷺ gave up words, never the truth. For a real conflict of faith with family, offer the mentor and imam.

**Escalate:** using the treaty to argue about current politics or treaties today.

**Don't**
- Don't present the treaty's terms as a model for current politics.
- Don't tell the rumour about 'Uthman's death as fact (sirah only; "the early biographers report" at most).
- Don't dramatise Abu Jandal's suffering.

## Sources
- Qur'an [48:1](https://quran.com/48/1) (a clear conquest), [48:18](https://quran.com/48/18) (the pledge under the tree), [3:159](https://quran.com/3/159) (consultation; Day 70 link).
- [Bukhari 4154](https://sunnah.com/bukhari:4154) (Sahih): 1,400 at al-Hudaybiyah.
- [Bukhari 2731](https://sunnah.com/bukhari:2731) (Sahih): the negotiation with Suhayl; the wording; Abu Jandal; Umm Salamah's advice.
- [Abu Dawud 2766](https://sunnah.com/abudawud:2766) (Hasan, al-Albani): no war for ten years.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): 6 AH; prevented from the Ka'bah; the ten-year treaty.
- [Yaqeen Institute, *How Muhammad ﷺ Confronted Hate and Became the Most Influential Person in History*](https://yaqeeninstitute.org/read/paper/how-muhammad-confronted-hate-and-became-the-most-influential-person-in-history): about 1,400.
- Fact rows 29.1–29.7 in [[Seerah Fact-Check Log]].
