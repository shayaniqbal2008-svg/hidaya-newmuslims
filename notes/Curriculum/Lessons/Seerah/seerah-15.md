---
track: seerah
order: 15
phase: null
unit: null
title: "The boycott"
hook: "For about three years, his whole clan was shut out: no trade, no marriage, barely any food."
minutes: 6
skills: [T2, B4, B6]
pain_points: [family, christian-family]
logs: []
madhab_sensitive: false
scholar_flags: [Q42, Q43]
status: draft-pending-scholar-review
glossary: [ﷺ, Makkah, sabr, Quraysh]
sources: [Bukhari 1590, Bukhari 3896, IslamQA 11575, Yaqeen (How Muhammad Confronted Hate), Qalam Institute Sirah Podcast ep. 48, 50]
format: 2
---
# seerah-15 · The boycott

### 1 · hook
```yaml
pic: icon:Ban
text: "**For about three years, his whole clan was shut out.** No trade. No marriage. Barely any food. And relatives who didn't share his faith went through it with him."
```

### 2 · learn
```yaml
pic: icon:ScrollText
text: "**A pact against a clan.** Quraysh swore an agreement against his clan, Banu Hashim, and Banu al-Muttalib: no marrying them and no trading with them until they handed him over [Bukhari 1590]."
bubbles:
  - "Years later, during Hajj, he named the very place where that pact had been sworn [Bukhari 1590]."
```

### 3 · scenario
```yaml
pic: icon:Users
situation: "You're there. You belong to his clan, but you aren't Muslim. Because of the pact, your family will go hungry too. Handing him over would end it. What do you do?"
options:
  - text: "Stand by him. He's family"
    best: true
    feedback: "That's what his clan did, Muslims and non-Muslims alike. They stayed with him through years of hunger."
  - text: "Hand him over so the rest of the clan can eat"
    best: false
    feedback: "Not quite. His clan refused, even those who didn't share his faith. Family loyalty held."
  - text: "Quietly leave the clan and join Quraysh"
    best: false
    feedback: "Not quite. Most of his clan stayed together, under his uncle Abu Talib's protection."
```

### 4 · learn
```yaml
pic: icon:Tent
text: "**Into the valley.** Abu Talib led the clan, Muslims and non-Muslims alike, into a valley to keep him safe, the early biographers say [Qalam ep. 48]. It lasted about three years, with severe hunger [Qalam ep. 48; Yaqeen]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "The boycott"
text: "About three years, and how it ended."
events:
  - when: "Mid-Makkan years"
    title: "The pact"
    text: "Quraysh swear: no marriage or trade with his clan until they hand him over [Bukhari 1590]."
    pic: icon:ScrollText
  - when: "Right after"
    title: "Into the valley"
    text: "Abu Talib leads the whole clan there to protect him, the early biographers say [Qalam ep. 48]."
    pic: icon:Tent
  - when: "About 3 years"
    title: "Hunger"
    text: "Food is scarce and the hardship is severe [Qalam ep. 48; Yaqeen]."
    pic: icon:Wheat
  - when: "At last"
    title: "Consciences speak"
    text: "Some Makkans campaign against the boycott, and it ends [Qalam ep. 50]."
    pic: icon:Megaphone
  - when: "Next episode"
    title: "The Year of Sorrow"
    text: "Soon after, he loses Khadijah and Abu Talib [Bukhari 3896; IslamQA 11575]."
    pic: icon:Sunset
```

### 6 · learn
```yaml
pic: icon:Megaphone
text: "**Consciences wake up.** In the end, some Makkans with a conscience campaigned against the boycott, and it was brought to an end, the early biographers say [Qalam ep. 50]."
bubbles:
  - "Not everyone in Makkah agreed with the cruelty. Some spoke up, even against their own leaders."
```

### 7 · choice
```yaml
pic: icon:Users
prompt: "Why did relatives who weren't Muslim go hungry alongside him?"
options:
  - text: "Family loyalty: they wouldn't hand over one of their own"
    correct: true
    feedback: "Right. They didn't share his faith, but they wouldn't abandon him. Loyalty like that deserves honour."
  - text: "They were secretly Muslim"
    correct: false
    feedback: "Not quite. Many of them weren't Muslim. They stood by him because he was family."
  - text: "Quraysh forced them into the valley"
    correct: false
    feedback: "Not quite. Abu Talib led them there to protect him. They chose to stay together."
```

### 8 · learn
```yaml
pic: family
text: "**Unexpected loyalty.** Relatives who didn't share his faith went hungry for him. Your family may surprise you too: a parent who drives you to the masjid, a cousin who defends you. Notice it, and honour it."
bubbles:
  - "And for the Muslims in the valley, three years of **sabr** (patient endurance) ended in relief."
```

### 9 · scenario
```yaml
pic: family
situation: "Destiny's dad still doesn't understand why she became Muslim. But when a neighbour made a nasty comment about her faith, her dad told him firmly to back off."
options:
  - text: "Thank her dad and tell him how much it meant"
    best: true
    feedback: "Yes. Loyalty across faiths is precious. His clan stood by the Prophet ﷺ, and he never forgot it."
  - text: "Assume he only did it out of pride"
    best: false
    feedback: "Not quite. Give him credit. Standing up for her was love, whatever he thinks of her faith."
  - text: "Say nothing; he isn't Muslim, so it doesn't count"
    best: false
    feedback: "Not quite. Loyalty from family of another faith counts, and it deserves thanks."
```

### 10 · ask_ai
```yaml
chips:
  - "Why did Quraysh boycott his clan?"
  - "How did the boycott end?"
  - "Who was Abu Talib?"
  - "My non-Muslim family stood up for me. How do I thank them?"
```

### 11 · do_today
```yaml
pic: icon:HandHeart
text: "Honour a loyal relative today."
steps:
  - "Think of a family member who isn't Muslim and has stood by you"
  - "Thank them today, with words or a small favour"
log: null
```

### 12 · takeaway
```yaml
pic: icon:Users
text: "Family who didn't share his faith went hungry beside him. Loyalty from loved ones of another faith is something to honour."
```

### 13 · closing
Next episode: in one year, he loses the wife who believed him first and the uncle who shielded him.

---

## Check
```yaml
- prompt: "What did the pact against his clan forbid?"
  options:
    - text: "Marrying them or trading with them"
      correct: true
      feedback: "Right. Until they handed him over, which they refused to do [Bukhari 1590]."
    - text: "Praying at the Ka'bah"
      correct: false
      feedback: "Not quite. It cut them off from marriage and trade, to starve them into handing him over [Bukhari 1590]."
- prompt: "Who went into the valley with him?"
  options:
    - text: "His clan, Muslims and non-Muslims alike"
      correct: true
      feedback: "Right. Abu Talib led them there to protect him, the early biographers say."
    - text: "Only the Muslims"
      correct: false
      feedback: "Not quite. Relatives who weren't Muslim went too, out of family loyalty."
```

## AI guide context
**Lesson facts**
- Quraysh swore a pact against Banu Hashim and Banu al-Muttalib: no marriage or trade with them until they handed him over [Bukhari 1590].
- Abu Talib took the clan, Muslims and non-Muslims alike, into a valley (Shi'b Abi Talib) to protect him [Qalam ep. 48]. Single present-day source: say "the early biographers say".
- It lasted about three years, with severe hunger [Qalam ep. 48; Yaqeen].
- It ended when some Makkans with a conscience campaigned against it [Qalam ep. 50]. Single source: keep it cautious.

**Likely questions**
- *"Is it true termites ate the boycott document, except Allah's name?"* It's a popular story, but its chain hasn't been verified for this track, so it's left out. Don't tell it as fact. `[SCHOLAR: Q43]`
- *"Did Abu Talib become Muslim?"* He never accepted Islam, yet he protected the Prophet ﷺ all his life, and the Prophet ﷺ loved him. The next episode covers his death. Questions about his afterlife: there are sahih texts, the guide doesn't deny them or speculate, Allah alone judges, and the imam is offered. `[SCHOLAR: Q42]`
- *"Who exactly was in the valley?"* His clan, Banu Hashim, with Banu al-Muttalib, Muslims and non-Muslims alike [Bukhari 1590; Qalam ep. 48]. Keep to that.
- *"My non-Muslim family stood up for me."* Encourage thanks and closeness; Day 65 and Day 14.

**Escalate:** the afterlife of Abu Talib or of the convert's own relatives (Q42, Q23); unsafe family situations (safety rule).

**Don't**
- Don't tell the termite story.
- Don't describe the hunger in graphic detail.
- Don't suggest a convert's family loves them less for not being Muslim.
- Don't picture the Prophet ﷺ.

## Sources
- [Bukhari 1590](https://sunnah.com/bukhari:1590) (Sahih): the pact against Banu Hashim and Banu al-Muttalib.
- [Bukhari 3896](https://sunnah.com/bukhari:3896) (Sahih): Khadijah's death (timeline teaser).
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): Abu Talib's death (timeline teaser).
- [Yaqeen Institute, *How Muhammad ﷺ Confronted Hate…*](https://yaqeeninstitute.org/read/paper/how-muhammad-confronted-hate-and-became-the-most-influential-person-in-history): his clan starved for three years.
- Qalam Institute, *The Sīrah Podcast*: [ep. 48, Boycott in Makkah and its annulment](https://www.qalaminstitute.org/2013/07/seerah-life-of-the-prophet-boycott-in-makkah-its-annulment/); [ep. 50](https://www.qalaminstitute.org/2013/08/seerah-life-of-the-prophet-uthman-bin-mazhun-returns-to-makkah-abu-bakr-attempts-to-leave/) (the campaign against the boycott).
- Fact rows 15.1–15.4, 16.1–16.2, X6 and X21 in [[Seerah Fact-Check Log]].

## Scholar flags
- **AI guide (Q43).** The termite story (X6) is left out; if asked, it's a popular story whose chain this track hasn't verified.
- **AI guide (Q42).** Abu Talib's afterlife is never on screen; the guide follows the drafted Q42 approach and offers the imam.
