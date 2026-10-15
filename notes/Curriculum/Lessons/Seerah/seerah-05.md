---
track: seerah
order: 5
phase: null
unit: null
title: "Shepherd, trader, and a pact for justice"
hook: "Before anyone called him a prophet, they called him \"the trustworthy\"."
minutes: 6
skills: [T2, B6]
pain_points: [character, workplace]
logs: []
madhab_sensitive: false
scholar_flags: [Q43]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, Ka'bah, fiqh, al-Amin]
sources: [Bukhari 2262, IslamQA 11575, Dar al-Ifta Egypt (seerah parts 1, 3 and 8), Qalam Institute Sirah Podcast ep. 16, 19, 20, 23]
format: 2
---
# seerah-05 · Shepherd, trader, and a pact for justice

### 1 · hook
```yaml
pic: icon:Gem
text: "**Before anyone called him a prophet, they called him \"the trustworthy.\"** How does a poor orphan earn a name like that in a whole city? One job, one deal, one promise at a time."
```

### 2 · learn
```yaml
pic: icon:PawPrint
text: "**A shepherd for small wages.** He herded sheep for the people of Makkah, for a few coins. He said that every prophet Allah sent had herded sheep [Bukhari 2262]."
bubbles:
  - "Think about the job: long days, other people's animals, little pay, and nobody watching."
```

### 3 · multi
```yaml
pic: icon:PawPrint
prompt: "What can years of shepherding train in a person? Pick all that apply."
options:
  - text: "Patience"
    correct: true
    feedback: "Yes. Sheep wander and dawdle. You can't rush them, and you can't leave them."
  - text: "Care for the weakest"
    correct: true
    feedback: "Yes. A shepherd watches the slow and the hurt ones, not just the strong."
  - text: "Honesty when nobody's watching"
    correct: true
    feedback: "Yes. Out in the hills, only you and Allah know if you did the job well."
  - text: "Fame and status"
    correct: false
    feedback: "Not quite. Shepherding was humble, low-paid work. That was part of its lesson."
```

### 4 · learn
```yaml
pic: icon:Store
text: "**A trader people trusted.** As a young man he also worked in trade [IslamQA 11575; Dar al-Ifta 169]. He dealt honestly, and people noticed. His people gave him a name: al-Amin, \"the trustworthy\" [IslamQA 11575; Qalam ep. 23]."
bubbles:
  - "He never worshipped the idols around the Ka'bah, and he stayed away from alcohol and the immoral behaviour common around him [IslamQA 11575; Dar al-Ifta 167]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Growing up in Makkah"
text: "How al-Amin got his name."
events:
  - when: "Early years"
    title: "Shepherd"
    text: "Herds sheep for the people of Makkah for a few coins [Bukhari 2262]."
    pic: icon:PawPrint
  - when: "About age 20"
    title: "A pact for the wronged"
    text: "Witnesses Makkan clans swear to stand with anyone wronged in Makkah [Qalam ep. 19; Dar al-Ifta 174]."
    pic: icon:Handshake
  - when: "As a young man"
    title: "Trader"
    text: "Works in trade, at first locally, the early biographers say [IslamQA 11575; Qalam ep. 20]."
    pic: icon:Store
  - when: "Over the years"
    title: "Al-Amin"
    text: "His people call him \"the trustworthy\" [IslamQA 11575; Qalam ep. 23]."
    pic: icon:Gem
  - when: "Next episode"
    title: "A job offer"
    text: "A respected businesswoman named Khadijah hears about his honesty [IslamQA 11575]."
    pic: icon:Briefcase
```

### 6 · learn
```yaml
pic: kaaba
text: "**A pact for the wronged.** When he was about twenty, the early biographers say, a cheated visiting trader called out for help at the Ka'bah. Several clans met and swore to stand with anyone wronged in Makkah [Qalam ep. 19; Dar al-Ifta 174]."
bubbles:
  - "It was called *Hilf al-Fudul*, often translated \"the Pact of the Virtuous\". He was there to witness it."
  - "The trader got his goods back, the early biographers say. Being an outsider no longer meant being unprotected [Qalam ep. 19]."
```

### 7 · choice
```yaml
pic: icon:Scale
prompt: "What did the clans who swore Hilf al-Fudul promise?"
options:
  - text: "To stand with anyone wronged in Makkah"
    correct: true
    feedback: "Right. Even a visitor with no clan of his own in Makkah would be backed against the powerful."
  - text: "To protect only their own clan members"
    correct: false
    feedback: "Not quite. That was the old way. The pact covered anyone wronged in Makkah, outsiders included."
  - text: "To go to war with the cheater's tribe"
    correct: false
    feedback: "Not quite. It was a pledge to get justice for the wronged, not a war."
```

### 8 · learn
```yaml
pic: icon:ShieldCheck
text: "**Character before a title.** He was al-Amin for years before anyone called him a prophet. You don't need to know much **fiqh** (the detailed rules of practice) to be the most trustworthy person at your job or school. That part starts today."
```

### 9 · scenario
```yaml
pic: icon:Briefcase
situation: "Chris works in a phone store. His manager tells him to say a returned phone \"was working fine when it left the store\", though they both know it wasn't. Chris has been Muslim three weeks."
options:
  - text: "Politely say he won't tell the customer something untrue, and offer to help sort out the return"
    best: true
    feedback: "Yes. Calm, respectful, and honest. That's how al-Amin got his name: one deal at a time."
  - text: "Go along with it; he's new and doesn't know the rulings yet"
    best: false
    feedback: "Not quite. Honesty doesn't need advanced study. The Prophet ﷺ was trusted long before any rulings came."
  - text: "Quit on the spot and tell the manager off"
    best: false
    feedback: "Not quite. No drama needed. A calm, honest no keeps his integrity and his job, if he can."
```

### 10 · sort
```yaml
prompt: "Builds trust, or spends it? Sort these everyday moments."
buckets: ["Builds trust", "Spends trust"]
items:
  - text: "Giving back extra change a cashier handed you by mistake"
    bucket: 0
    why: "Small, unseen honesty is exactly how al-Amin's name was earned."
  - text: "Calling in sick to go to a party"
    bucket: 1
    why: "A small lie, but people remember. Trust is lost faster than it's built."
  - text: "Keeping a friend's secret"
    bucket: 0
    why: "Keeping what you're trusted with is part of being trustworthy."
  - text: "Rounding up hours on a timesheet"
    bucket: 1
    why: "It's taking pay you didn't earn, even if nobody checks."
```

### 11 · ask_ai
```yaml
chips:
  - "What was Hilf al-Fudul?"
  - "Why did every prophet herd sheep?"
  - "Didn't a monk recognise him as a boy?"
  - "My boss wants me to bend the truth. What do I do?"
```

### 12 · do_today
```yaml
pic: icon:Gem
text: "Be al-Amin for one day."
steps:
  - "Keep one small promise exactly as you said it"
  - "Return or pay back anything you owe: money, an item, a reply"
log: null
```

### 13 · takeaway
```yaml
pic: icon:ShieldCheck
text: "Long before the title of prophet, he earned the name \"the trustworthy\". Your character can start speaking for your faith today."
```

### 14 · closing
Next episode: Khadijah, a businesswoman who hires him, and then proposes.

---

## Check
```yaml
- prompt: "What did the people of Makkah call him before he was a prophet?"
  options:
    - text: "Al-Amin, the trustworthy"
      correct: true
      feedback: "Right. He earned it through years of honest work as a shepherd and trader."
    - text: "The shepherd king"
      correct: false
      feedback: "Not quite. He was a humble shepherd and trader. They called him al-Amin, the trustworthy."
- prompt: "What was Hilf al-Fudul?"
  options:
    - text: "A pact of Makkan clans to stand with anyone wronged in Makkah"
      correct: true
      feedback: "Right. He witnessed it at about twenty, after a visiting trader was cheated."
    - text: "A trade deal between Makkah and Syria"
      correct: false
      feedback: "Not quite. It was a pledge to stand with anyone wronged in Makkah, prompted by a cheated trader."
```

## AI guide context
**Lesson facts**
- He herded sheep for the people of Makkah for a few qirats (small coins), and said every prophet herded sheep [Bukhari 2262].
- As a young man he worked in trade [IslamQA 11575; Qalam ep. 20; Dar al-Ifta Egypt, seerah part 3]. Qalam ep. 20 notes he traded locally on commission before working for Khadijah.
- At about twenty he witnessed *Hilf al-Fudul*: a visiting trader (of the tribe of Zubayd) was cheated by a Makkan who refused to pay; he called out at the Ka'bah; clans met and swore to stand with anyone wronged in Makkah, whatever their tribe; the goods were returned [Qalam ep. 19; Dar al-Ifta Egypt, seerah part 8]. Tell the detail as "the early biographers say". (Dar al-Ifta part 2 describes it as a peace treaty after the Fijar war, a different framing.)
- His people called him al-Amin, "the trustworthy" [IslamQA 11575; Qalam ep. 23].
- He never worshipped idols and avoided alcohol and immoral behaviour [IslamQA 11575; Dar al-Ifta Egypt, seerah part 1].

**Likely questions**
- *"Didn't a Christian monk (Bahira) recognise him as a future prophet?"* It's "a well-known story whose chain scholars consider weak", and the reports differ on the details, so this track leaves it out. `[SCHOLAR: Q43]`
- *"Did he say he'd join the pact again in Islam?"* There is a report of this outside the six hadith collections this program uses, so don't quote it. Say the pact is remembered as an example of standing up for justice.
- *"Why did prophets herd sheep?"* The hadith states the fact [Bukhari 2262]; scholars reflect that it trains patience, care and humility. Present that as reflection, not as his words.
- *"My boss wants me to bend the truth."* Honesty is core [see Day 63]; suggest a calm, respectful no and an honest alternative. Job-specific dilemmas (whether to stay in a job) go to the imam.
- *"Did he worship idols before Islam?"* No; the sources say he never did.

**Escalate:** whether to leave a job over dishonest practices or haram work (Q31 territory).

**Don't**
- Don't tell the Bahira story as fact.
- Don't quote the "I would answer it in Islam" saying as a hadith.
- Don't use him to shame the convert's past ("he never did X, so you should feel bad").

## Sources
- [Bukhari 2262](https://sunnah.com/bukhari:2262) (Sahih): every prophet herded sheep; he herded for the people of Makkah for a few qirats.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): trade, al-Amin, never worshipping idols, avoiding alcohol and immorality.
- Dar al-Ifta Egypt: [*A Closer Look at the World before the Advent of Prophet Muhammad (part 1)*](https://www.dar-alifta.org/en/article/details/167/a-closer-look-at-the-world-before-the-advent-of-prophet-muhammadpart-1); [*The Divine Preparation of Prophet Muhammad (part 3)*](https://www.dar-alifta.org/en/article/details/169/the-divine-preparation-of-prophet-muhammad-part-3) (trade); [*The Art of Negotiations (part 8)*](https://www.dar-alifta.org/en/article/details/174/the-art-of-negotiations-a-prophetic-examplepart-8) (the Fudul alliance supports the unjustly treated).
- Qalam Institute, *The Sīrah Podcast*: [ep. 16, Bahira the monk](https://www.qalaminstitute.org/2012/04/seerah-life-of-the-prophet-bhaira-the-monk/) (AI guide only); [ep. 19, The virtuous pact of social justice](https://www.qalaminstitute.org/2012/05/seerah-life-of-the-prophet-the-virtuous-pact-of-social-justice/); [ep. 20, Muhammad the businessman](https://www.qalaminstitute.org/2012/05/seerah-life-of-the-prophet-muhammad-the-businessman-a-marriage-proposal/); [ep. 23, Placing of the Black Stone](https://www.qalaminstitute.org/2012/08/seerah-life-of-the-prophet-placing-of-the-black-stone-and-history-of-the-kabah/) (al-Amin).
- Fact rows 05.1–05.6 and X1 in [[Seerah Fact-Check Log]].

## Scholar flags
- **AI guide (Q43).** The Bahira story is left off screens; if asked, it's "a well-known story whose chain scholars consider weak."
