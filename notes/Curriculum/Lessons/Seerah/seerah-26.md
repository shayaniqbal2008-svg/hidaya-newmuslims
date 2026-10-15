---
track: seerah
order: 26
phase: null
unit: null
title: "Uhud"
hook: "They were winning. Then a group left their post, and everything turned."
minutes: 6
skills: [T2, T3, B6]
pain_points: [grief, conflicting-voices, guilt]
logs: []
madhab_sensitive: false
scholar_flags: [Q39]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Shawwal, Quraysh]
sources: [Q 3:152, Q 3:128, Q 3:159, Bukhari 3039, Muslim 1791, Bukhari 4072, Bukhari 3015, IslamQA 11575, Yaqeen (How Muhammad Confronted Hate)]
format: 2
---
# seerah-26 · Uhud

### 1 · hook
```yaml
pic: icon:Mountain
text: "**They were winning.** Then a group of his own people left the post he'd told them never to leave, and everything turned. What he did next, and what Allah told him to do, is the real story of Uhud."
```

### 2 · learn
```yaml
pic: icon:Mountain
text: "**Quraysh come back.** A year after Badr, in **Shawwal** of 3 AH, Quraysh marched on Madinah to avenge their losses and camped by Mount Uhud [IslamQA 11575]. `[SCHOLAR: Q39]`"
bubbles:
  - "The Makkans were about three thousand. The Muslims were far fewer, after about a third of their army turned back with a hypocrite leader [Yaqeen (Hate)]."
```

### 3 · choice
```yaml
pic: icon:Mountain
prompt: "You're one of fifty archers on a hill. Your orders: don't leave this spot, win or lose, until he sends for you. The enemy is running. Your friends below are gathering what they left behind. What do you do?"
options:
  - text: "Stay at the post, as he ordered"
    correct: true
    feedback: "Right. A few did stay. But most ran down, and the battle turned [Bukhari 3039; Q 3:152]."
  - text: "Run down; the battle's won"
    correct: false
    feedback: "That's what most did, despite their commander reminding them of the order. Then the battle turned [Bukhari 3039]."
  - text: "Send one person to ask"
    correct: false
    feedback: "Not quite. The order already covered this: win or lose, stay until he sends for you [Bukhari 3039]."
```

### 4 · learn
```yaml
pic: icon:HeartCrack
text: "**The battle turns.** When most of the archers left, the battle turned against the Muslims. The Prophet ﷺ was wounded: a tooth broken and his head cut. He wondered aloud how a people could succeed after wounding their own prophet [Muslim 1791]."
bubbles:
  - "Allah answered: *\"Not for you, [O Muhammad, but for Allah], is the decision\"* [Q 3:128, Saheeh Intl.]. Their fate was Allah's to decide, not his."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Uhud, Shawwal 3 AH"
text: "A hard day, and what came after."
events:
  - when: "Before"
    title: "Fifty archers"
    text: "He posts archers on a hill: don't leave, win or lose [Bukhari 3039]."
    pic: icon:Mountain
  - when: "At first"
    title: "Winning"
    text: "The Makkan army starts to flee [Bukhari 3039]."
    pic: icon:TrendingUp
  - when: "Then"
    title: "The post is left"
    text: "Most archers run down, and the battle turns [Bukhari 3039; Q 3:152]."
    pic: icon:HeartCrack
  - when: "That day"
    title: "He is wounded"
    text: "A broken tooth and a head wound [Muslim 1791]."
    pic: icon:Bandage
  - when: "After"
    title: "Pardon and consult"
    text: "Allah tells him to be gentle with them, forgive them and keep consulting them [Q 3:159]."
    pic: icon:Users
```

### 6 · learn
```yaml
pic: quran
text: "**What Allah told him next.** His own people had disobeyed and cost them dearly. The Qur'an praised his gentleness and told him: *\"So pardon them and ask forgiveness for them and consult them in the matter\"* [Q 3:159, Saheeh Intl.]."
```

### 7 · fill
```yaml
before: "\"So pardon them and ask forgiveness for them and"
after: "them in the matter.\" [Q 3:159]"
options:
  - text: "consult"
    correct: true
    feedback: "Yes. After a failure caused by their choices, he was told to keep asking their opinion."
  - text: "blame"
    correct: false
    feedback: "Not quite. The opposite: pardon them, pray for them, and keep consulting them."
  - text: "replace"
    correct: false
    feedback: "Not quite. He kept the same people and kept consulting them."
```

### 8 · reveal
```yaml
title: "Hamzah and Wahshi"
cards:
  - front: "Hamzah"
    back: "The Prophet's ﷺ beloved uncle was killed at Uhud by a man named Wahshi [Bukhari 4072]."
    pic: icon:HeartCrack
  - front: "Years later"
    back: "Wahshi became Muslim and came to the Prophet ﷺ. He was accepted [Bukhari 4072]."
    pic: icon:UserCheck
  - front: "And honestly"
    back: "He asked Wahshi to keep out of his sight. Forgiving doesn't mean the grief disappears [Bukhari 4072]."
    pic: icon:Heart
```

### 9 · learn
```yaml
pic: community
text: "**Forgive, and keep them close.** After a loss his own people caused, he forgave them and kept asking their advice. He even accepted his uncle's killer as a Muslim. You can forgive and still feel the hurt. Day 77 talked about grief."
```

### 10 · scenario
```yaml
pic: icon:Users
situation: "Tyler organised the masjid's first open house for non-Muslim neighbours. Two volunteers didn't show, and it went badly. Next month, he's planning another."
options:
  - text: "Forgive them, talk it through, and still ask their ideas for next time"
    best: true
    feedback: "Yes. That's Uhud's lesson: pardon, pray for them, and keep consulting them."
  - text: "Do the next one alone so nobody lets him down"
    best: false
    feedback: "Not quite. After Uhud, he was told to keep consulting the same people, not to shut them out."
  - text: "Call them out in the group chat"
    best: false
    feedback: "Not quite. Public blame breaks people. Talk privately and kindly, like his gentleness in Q 3:159."
```

### 11 · ask_ai
```yaml
chips:
  - "Why did the archers leave their post?"
  - "Wasn't the Prophet ﷺ a warrior?"
  - "How could he forgive Hamzah's killer?"
  - "How do I forgive someone who let me down?"
```

### 12 · do_today
```yaml
pic: icon:Heart
text: "Forgive one person who let you down."
steps:
  - "Think of someone whose mistake cost you"
  - "Make du'a for them by name"
  - "If it's right, ask their opinion on something again"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Users
text: "After his own people's mistake cost them dearly, Allah told him: pardon them, and keep consulting them."
```

### 14 · closing
Next episode: ten thousand march on Madinah, and the Muslims dig a trench, hungry.

---

## Check
```yaml
- prompt: "What turned the battle of Uhud?"
  options:
    - text: "Most of the archers left the post he had told them to hold"
      correct: true
      feedback: "Right. They left when the enemy fled, and the battle turned [Bukhari 3039]."
    - text: "The Muslims ran out of food"
      correct: false
      feedback: "Not quite. It was the archers leaving their post, against his clear order."
- prompt: "After Uhud, what did Allah tell him to do with his Companions?"
  options:
    - text: "Pardon them and keep consulting them"
      correct: true
      feedback: "Right. That's Q 3:159."
    - text: "Stop asking their opinion"
      correct: false
      feedback: "Not quite. Q 3:159 told him to pardon them, pray for them and consult them."
```

## AI guide context
**Lesson facts**
- A year after Badr, in Shawwal 3 AH, Quraysh came to avenge Badr and camped by Mount Uhud [IslamQA 11575]. `[SCHOLAR: Q39]`
- The Makkans were about 3,000; the Muslims about 700 after a third of the army withdrew with the hypocrite 'Abdullah ibn Ubayy (single source; say "about") [Yaqeen (How Muhammad Confronted Hate)].
- He placed fifty archers on a hill under 'Abdullah ibn Jubayr and told them not to leave, win or lose, until he sent for them; when the enemy fled, most left despite their commander reminding them of the order, and the battle turned [Bukhari 3039; Q 3:152].
- He was wounded (a tooth broken, his head cut) and wondered how a people could succeed who did this to their prophet; Q 3:128 was revealed [Muslim 1791].
- His uncle Hamzah was killed by Wahshi, who later became Muslim and told the story himself; the Prophet ﷺ asked him to keep out of his sight [Bukhari 4072].
- The Qur'an told him to be gentle, pardon them, ask forgiveness for them and consult them [Q 3:159]; Day 73 and Day 70 use this verse.
- His rules of war applied: no killing of women or children [Bukhari 3015].

**Likely questions**
- *"Why did the archers leave?"* They saw the enemy fleeing and went down for the spoils, though their commander reminded them of the order [Bukhari 3039]. The Qur'an names the disobedience and also says Allah forgave them [Q 3:152].
- *"Wasn't the Prophet ﷺ a warrior?"* Day 71 frame: defence of the community after years of persecution, strict rules [Bukhari 3015]; Uhud was an army coming to Madinah. No rulings on fighting today. `[SCHOLAR: Q39]`
- *"How many died?"* Many Muslims were killed, including Hamzah. Don't dwell on numbers or describe deaths.
- *"How could he forgive Hamzah's killer?"* He accepted Wahshi's Islam; he was also human and asked not to see him. Forgiveness and grief can live together.
- *"What happened to Hamzah's body?"* Say only that he was killed and deeply mourned; don't describe what was done afterwards.

**Escalate:** any question about fighting today (fixed policy).

**Don't**
- Don't describe wounds beyond the hadith's words, killings, or the mutilation reports.
- Don't present Wahshi's story as the Prophet ﷺ being angry or vengeful.
- Don't blame "the Companions" as a whole; it was a group of archers, and Allah forgave them [Q 3:152].

## Sources
- Qur'an [3:152](https://quran.com/3/152) (the disobedience, and Allah's forgiveness), [3:128](https://quran.com/3/128) (the decision is Allah's), [3:159](https://quran.com/3/159) (pardon them and consult them).
- [Bukhari 3039](https://sunnah.com/bukhari:3039) (Sahih): fifty archers; the order; their commander's reminder; the turn.
- [Muslim 1791](https://sunnah.com/muslim:1791) (Sahih): his wounds and Q 3:128.
- [Bukhari 4072](https://sunnah.com/bukhari:4072) (Sahih): Wahshi's own account.
- [Bukhari 3015](https://sunnah.com/bukhari:3015) (Sahih): killing women and children forbidden.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): Shawwal 3 AH, camped by Uhud, the archers disobeyed.
- [Yaqeen Institute, *How Muhammad ﷺ Confronted Hate and Became the Most Influential Person in History*](https://yaqeeninstitute.org/read/paper/how-muhammad-confronted-hate-and-became-the-most-influential-person-in-history): about 3,000 vs 700; Ibn Ubayy's withdrawal.
- Fact rows 26.1–26.7 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 2 and AI guide (Q39).** Uhud is told as history: why it happened, the archers, his wounds, and the Qur'an's command to pardon and consult. No graphic detail (no mutilation reports), no casualty figures on screen, no rulings on fighting today.
