---
day: 66
phase: 3
unit: 8
title: "Marriage and spouses"
hook: "Not how to get married. What a good Muslim marriage actually looks like, day to day."
minutes: 5
skills: [B3, B4]
pain_points: [marriage]
logs: []
madhab_sensitive: false
scholar_flags: [Q21]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, masjid, imam]
sources: [Q 30:21, Q 4:19, Tirmidhi 3895, Bukhari 676, Revealed Path Part IV ch. 21, Being Muslim (Lifestyle)]
format: 2
---
# Day 66 · Marriage and spouses

### 1 · hook
```yaml
pic: family
text: "On Day 42 you learned that marriage is never a race. Today is about the marriage itself: what a good one looks like, and what to do if you were already married when you became Muslim."
```

### 2 · learn
```yaml
pic: icon:House
text: "**The measure.** The Prophet ﷺ said the best of you are the best to their spouses, and that he was the best of all to his [Tirmidhi 3895]."
bubbles:
  - "So in Islam, your goodness isn't judged only at the masjid. It's judged at home: in tone of voice, in patience, in who does the dishes."
  - "{teen}Under 18? Marriage isn't for now. Here's what to know for later: in a good marriage, kindness at home is the real test of faith.{/teen}"
  - "{teen}And you'll never have to marry someone you don't want to. If anyone pressures you about marriage, tell {{mentor.name}} or a trusted adult.{/teen}"
  - "{teen}Right now, practice on your family: help without being asked, and keep your tone gentle.{/teen}"
```

### 3 · choice
```yaml
pic: icon:House
prompt: "According to the Prophet ﷺ, how is a person's goodness measured?"
options:
  - text: "By how they treat their spouse and family"
    correct: true
    feedback: "Right. The best of you are the best to their spouses [Tirmidhi 3895]."
  - text: "By how often they're seen at the masjid"
    correct: false
    feedback: "Not quite. The masjid matters, but the Prophet ﷺ pointed to home: the best are best to their spouses."
  - text: "By how strict they are with their family"
    correct: false
    feedback: "Not quite. He measured goodness by kindness at home, not strictness [Tirmidhi 3895]."
```

### 4 · learn
```yaml
pic: icon:HeartHandshake
text: "**What it's built on.** The Qur'an describes spouses as a sign from Allah, made so you find calm in each other, with affection and mercy placed between you [Q 30:21]."
bubbles:
  - "Affection rises and falls. Mercy is what carries you on the days it's low."
  - "{men}And husbands are told: live with your wives in kindness. If you dislike something about her, Allah may have put much good in it [Q 4:19].{/men}{women}And the Qur'an commands husbands to live with their wives in kindness [Q 4:19].{/women}"
```

### 5 · tap_words
```yaml
prompt: "What does the Qur'an say Allah placed in marriage? [Q 30:21]"
answer: "calm affection and mercy"
extra: ["wealth", "status", "fear"]
feedback: "Yes [Q 30:21]. When affection dips, mercy keeps a marriage going."
```

### 6 · reveal
```yaml
title: "Myths about Muslim marriage"
cards:
  - front: "\"In Islam, a husband can treat his wife however he wants.\""
    back: "No. Kindness is commanded [Q 4:19], and the best people are the best to their spouses [Tirmidhi 3895]. Harm has no cover in Islam."
    pic: icon:ShieldCheck
  - front: "\"Housework is only the wife's job.\""
    back: "At home, the Prophet ﷺ helped and served his family, then went out when prayer came [Bukhari 676]."
    pic: icon:House
  - front: "\"A good marriage means you never argue.\""
    back: "Every couple disagrees. What matters is how: fairly, without insults, and coming back to each other."
    pic: conversation
  - front: "\"Once the spark fades, it's over.\""
    back: "Feelings change. The Qur'an pairs affection with mercy [Q 30:21]: choosing kindness on ordinary days."
    pic: icon:Heart
```

### 7 · scenario
```yaml
audience: men
pic: conversation
situation: "Chris became Muslim three months ago. His wife isn't Muslim. She's been quiet lately, then says: \"You're at the masjid every night. I feel like I'm losing you.\""
options:
  - text: "Listen, reassure her she matters, plan time together, and book a private talk with his imam about their situation soon"
    best: true
    feedback: "Yes. Kindness at home now, and real guidance for his case from the imam, without rushing any decision."
  - text: "Tell her Islam comes first and keep his routine"
    best: false
    feedback: "Not quite. His faith does come first, but nothing in it asks him to neglect his wife. Kindness is part of it."
  - text: "Decide on his own, from a video he watched, what has to happen to the marriage"
    best: false
    feedback: "Not quite. Marriage questions depend on details. Don't act alone or online: talk to the imam privately."
```

### 8 · scenario
```yaml
audience: women
pic: conversation
situation: "Destiny became Muslim three months ago. Her husband isn't Muslim. He's been quiet lately, then says: \"You're at the masjid every night. I feel like I'm losing you.\""
options:
  - text: "Listen, reassure him he matters, plan time together, and book a private talk with her imam about their situation soon"
    best: true
    feedback: "Yes. Kindness at home now, and real guidance for her case from the imam, without rushing any decision."
  - text: "Tell him Islam comes first and keep her routine"
    best: false
    feedback: "Not quite. Her faith does come first, but nothing in it asks her to be unkind at home. Kindness is part of it."
  - text: "Decide on her own, from a video she watched, what has to happen to the marriage"
    best: false
    feedback: "Not quite. Marriage questions depend on details. Don't act alone or online: talk to the imam privately."
```

### 9 · steps
```yaml
title: "Already married when you became Muslim?"
intro: "You're not alone, and this isn't something to solve tonight. What applies depends on details: your spouse's faith, your situation, your local law."
steps:
  - text: "Don't make any big decision alone or in a hurry."
    pic: icon:Hourglass
  - text: "Keep being kind at home."
    pic: icon:HeartHandshake
  - text: "**Talk to your imam privately, soon.** `[SCHOLAR: Q21]`"
    pic: masjid
  - text: "You can send the question anonymously through \"Ask my imam.\""
    pic: icon:Lock
```

### 10 · ask_ai
```yaml
chips:
  - "I was already married when I became Muslim. What happens now?"
  - "What rights do husbands and wives have in Islam?"
  - "My spouse is supportive but not Muslim. How do I keep things good?"
  - "How do Muslim couples handle arguments?"
```

### 11 · do_today
```yaml
pic: icon:House
text: "One unasked kindness at home today."
steps:
  - "Married? Pick one thing that would make your spouse's day easier. Not married? Pick it for whoever you live with"
  - "Do it today, without being asked"
log: null
optional_extra: "If you were married before your shahada and haven't talked to your imam about it yet, send your question through \"Ask my imam\" today. You can send it anonymously."
```

### 12 · takeaway
```yaml
pic: icon:HeartHandshake
text: "A good marriage is built on calm, affection and mercy, and the best people are best at home. Already married when you converted? Be kind, decide nothing alone, and talk to your imam privately, soon."
```

### 13 · closing
Faith shows first in the people closest to you.

---

## Check
```yaml
- prompt: "What three things does the Qur'an say Allah placed in marriage?"
  options:
    - text: "Calm, affection and mercy"
      correct: true
      feedback: "Right [Q 30:21]. Mercy keeps a marriage going when feelings dip."
    - text: "Wealth, status and children"
      correct: false
      feedback: "Not quite. The verse names calm, affection and mercy [Q 30:21]."
- prompt: "You were married before becoming Muslim and aren't sure where you stand. What should you do?"
  options:
    - text: "Stay kind at home and talk to your imam privately, soon"
      correct: true
      feedback: "Right. Your case depends on details; the imam can help, and nothing should be rushed."
    - text: "Look it up online and decide by yourself"
      correct: false
      feedback: "Not quite. These questions depend on details. Don't decide alone: talk to your imam privately."
```

## AI guide context
**Lesson facts**
- The best are the best to their spouses (wives, in the hadith's wording); the Prophet ﷺ was the best to his [Tirmidhi 3895].
- Marriage is a sign of Allah: tranquility, affection and mercy [Q 30:21]. Husbands are commanded to live with their wives in kindness [Q 4:19].
- The Prophet ﷺ served his family at home [Bukhari 676].
- Spouses have mutual rights and responsibilities; marriage is a place of kindness and good companionship [Revealed Path ch. 21].
- A convert already married to a non-Muslim spouse: not ruled on in the app (Q21). The schools have detailed positions that depend on the spouse's faith and the couple's situation [Being Muslim, Lifestyle]; the imam handles it.

**Likely questions**
- *"I was already married. What happens now?"* `[SCHOLAR: Q21]` Don't rule. Say: what applies depends on details (who converted, the spouse's faith, timing), so talk to your imam privately, soon; don't make a big decision alone; keep being kind at home. Offer "Ask my imam" (anonymous option). Never tell them to leave or stay.
- *"What are spouses' rights?"* General picture only: kindness, fair treatment, financial support from the husband, the mahr is the wife's, mutual respect and intimacy, consultation. Personal disputes go to the imam.
- *"My spouse isn't Muslim but is supportive."* Encourage gratitude, time together, explaining their practice simply, not pressuring. The marriage question itself goes to the imam (Q21).
- *"How do Muslim couples argue well?"* No insults, no bringing up the past, take a break when angry (Day 69), come back and repair. Offer counseling resources.

**Escalate:** every question about the validity or future of a convert's existing marriage (Q21); divorce; custody; intimacy questions beyond the lesson's level (same-gender mentor or imam). **Safety first:** any mention of abuse, threats, control or fear at home triggers the safety rule (National Domestic Violence Hotline 1-800-799-7233; 911 in danger) and the option to alert a chosen person, including a female staff member.

**Don't**
- **Teens (under 18):** no marriage talk beyond "not now; here's what to know for later"; point them to family and the imam (Spec §6.2 rule 12).
- Don't rule on Q21 or tell anyone to leave or stay in a marriage.
- Don't repeat Day 42's matchmaking content unless asked; this lesson is about life inside a marriage.
- Don't present any verse as permission to harm a spouse.

## Sources
- Qur'an [30:21](https://quran.com/30/21), [4:19](https://quran.com/4/19).
- [Tirmidhi 3895](https://sunnah.com/tirmidhi:3895): the best of you are the best to their families (sahih, al-Albani).
- [Bukhari 676](https://sunnah.com/bukhari:676): he served his family at home.
- [[Source - The Revealed Path]] Part IV, ch. 21 (rights and responsibilities of marriage).
- [[Source - Being Muslim a Practical Guide]], Lifestyle (marriage; note on a woman who converts while married).

## Scholar flags
- **Screen 9 and AI guide, already married at conversion (Q21).** Drafted as: what applies depends on details; don't decide alone or in a hurry; keep being kind at home; talk to your imam privately, soon; the AI guide escalates and never says to leave or stay. No ruling is given in the app.
