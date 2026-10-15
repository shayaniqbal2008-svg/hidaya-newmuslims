---
day: 46
phase: 2
unit: 6
title: "Zakat and giving"
hook: "Zakat might not apply to you yet. Giving does, starting today, in any amount."
minutes: 5
skills: [T2]
pain_points: []
logs: []
madhab_sensitive: true
scholar_flags: [Q16]
status: draft-pending-scholar-review
glossary: [zakat, nisab, sadaqah, imam, Allah, ﷺ]
sources: [Bukhari 1395, Bukhari 8, Q 9:103, Q 9:60, Q 2:261, Abu Dawud 1573, Bukhari 6021, Muslim 2588, Revealed Path ch. 4, Being Muslim (Purifying Alms), SeekersGuidance 168089, Research Notes - Core Essentials and Madhab Map §7]
format: 2
---
# Day 46 · Zakat and giving

### 1 · hook
```yaml
pic: icon:HandCoins
text: "\"Zakat\" can sound like a tax form you're scared of getting wrong. Good news: it's simpler than it sounds, it may not apply to you yet, and giving is something you can do today."
```

### 2 · learn
```yaml
pic: icon:Landmark
text: "**Zakat** is the third pillar of Islam [Bukhari 8]: a yearly gift from your savings to people in need. When the Prophet ﷺ sent a teacher to Yemen, he listed it right after the shahada and prayer [Bukhari 1395]."
bubbles:
  - "The Qur'an says it purifies: *\"a charity by which you purify them and cause them increase\"* [Q 9:103, Saheeh Intl.]."
```

### 3 · fill
```yaml
before: "Zakat is the"
after: "pillar of Islam."
options:
  - text: "third"
    correct: true
    feedback: "Yes. The shahada, then prayer, then zakat [Bukhari 1395]."
  - text: "first"
    correct: false
    feedback: "Not quite. The shahada comes first, then prayer. Zakat is third [Bukhari 1395]."
  - text: "only"
    correct: false
    feedback: "Not quite. Islam is built on five pillars [Bukhari 8]. Zakat is the third."
```

### 4 · learn
```yaml
madhab_variant: true
pic: icon:CalendarDays
default: "**How it works.** There's a minimum, the **nisab**, measured in gold or silver; masjids publish a dollar figure each year. If your savings stay at or above it for a full **lunar year** (about 354 days), you give **2.5%** [Abu Dawud 1573]."
hanafi: "**How it works.** There's a minimum, the **nisab**, measured in gold or silver; masjids publish a dollar figure each year. If your savings reach it, and are still at or above it one **lunar year** (about 354 days) later, you give **2.5%** [Abu Dawud 1573]."
bubbles:
  - "It's counted once a year, on what you've saved [Revealed Path ch. 4]. If your savings dip mid-year, ask your imam how {{masjid.name}} counts it."
hanafi_bubbles:
  - "It's counted once a year, on what you've saved [Revealed Path ch. 4]. A dip in between doesn't reset the year, unless your savings run out completely."
```

### 5 · widget
```yaml
widget: zakat
nisab: 6000
prompt: "Slide your savings"
text: "This nisab is only an example. {{masjid.name}} publishes the real figure each year. Below it, no zakat. At or above it for a lunar year, 2.5%."
```

### 6 · choice
```yaml
pic: icon:Calculator
prompt: "Chris's savings have been above the nisab for a full lunar year. He has $8,000 saved. Roughly how much zakat does he owe?"
options:
  - text: "$200 (2.5%)"
    correct: true
    feedback: "Right. 2.5% of $8,000 is $200: one-fortieth of his savings on his zakat date."
  - text: "$800 (10%)"
    correct: false
    feedback: "Not quite. Zakat on savings is 2.5%, so $200."
  - text: "Nothing, because he's a new Muslim"
    correct: false
    feedback: "Not quite. Once his savings have met the nisab for a lunar year as a Muslim, zakat is due."
```

### 7 · sort
```yaml
prompt: "Does it count toward zakat?"
buckets: ["Counts", "Doesn't count"]
items:
  - text: "Cash and bank savings"
    bucket: 0
    why: "Yes. Money you've saved is the main thing zakat is counted on [Being Muslim]."
  - text: "Your home"
    bucket: 1
    why: "No. The place you live is something you use, not savings [Being Muslim]."
  - text: "Gold and silver"
    bucket: 0
    why: "Yes. Gold and silver count [Being Muslim]."
  - text: "Your car"
    bucket: 1
    why: "No. Things you use day to day don't count [Being Muslim]."
  - text: "Stocks and similar investments"
    bucket: 0
    why: "Yes. Investments count, like savings [Being Muslim]."
  - text: "Your clothes and your phone"
    bucket: 1
    why: "No. Personal things you use aren't counted [Being Muslim]."
  - text: "Goods you're selling"
    bucket: 0
    why: "Yes. Stock you hold to sell counts [Being Muslim]."
```

### 8 · learn
```yaml
pic: icon:HandHeart
text: "**Who receives it:** the poor and needy, people in debt, stranded travelers, and others the Qur'an names [Q 9:60]."
bubbles:
  - "Some scholars count new Muslims among them, and any Muslim in real need can receive it. No shame in that."
```

### 9 · reveal
```yaml
title: "What applies to you?"
cards:
  - front: "\"Do I owe zakat for my years before Islam?\""
    back: "No. Nothing is owed for years before you became Muslim. `[SCHOLAR: Q16]`"
    pic: fresh-start
  - front: "\"When does my first zakat year start?\""
    back: "Ask your imam how to count your first year. Meanwhile, note the date your savings first reach the nisab as a Muslim; that date will matter. `[SCHOLAR: Q16]`"
    pic: icon:CalendarDays
  - front: "\"I'm a student with almost no savings.\""
    back: "Then zakat probably isn't due yet. That's fine. Sadaqah (next screen) is open to you right now."
    pic: icon:PiggyBank
  - front: "\"I have gold jewelry, stocks or a business.\""
    back: "Some of these details need a closer look. Use \"Ask my imam\" for your situation."
    pic: icon:MessageCircle
```

### 10 · learn
```yaml
pic: icon:Sprout
text: "**Sadaqah: giving anyone can do.** It's voluntary charity, any amount, any time. Allah grows it like one seed that sprouts seven ears of grain, a hundred grains in each [Q 2:261]."
bubbles:
  - "It doesn't have to be money. Every good deed is charity [Bukhari 6021]."
  - "And giving never really makes you poorer [Muslim 2588]."
```

### 11 · fill
```yaml
before: "One seed, seven ears of grain, and in each ear"
after: "grains. That's how Allah grows a gift [Q 2:261]."
options:
  - text: "a hundred"
    correct: true
    feedback: "Yes. Seven hundred grains from one seed [Q 2:261]. Small gifts grow big."
  - text: "ten"
    correct: false
    feedback: "Not quite. A hundred in each ear [Q 2:261]. Small gifts grow big."
  - text: "two"
    correct: false
    feedback: "Not quite. A hundred in each ear [Q 2:261]. Small gifts grow big."
```

### 12 · ask_ai
```yaml
chips:
  - "How do I calculate my zakat?"
  - "Can I give zakat to my family?"
  - "What's the difference between zakat and sadaqah?"
  - "What if I'm in debt?"
```

### 13 · do_today
```yaml
pic: icon:Gift
text: "Give one sadaqah today, any size."
steps:
  - "Pick one: a dollar, a meal for someone, your time, or a kind word"
  - "Give it quietly. Allah sees it"
log: null
optional_extra: "If you have savings, ask {{masjid.name}} for this year's nisab figure and note today's date. That's your starting point for later."
```

### 14 · takeaway
```yaml
pic: icon:Coins
text: "Zakat is 2.5% of savings at or above the nisab, once a lunar year has passed. Nothing is owed for years before Islam. Sadaqah is open to everyone, today."
```

### 15 · closing
Small gifts, given often, add up.

---

## Check
```yaml
- prompt: "What's the basic rate of zakat on savings?"
  options:
    - text: "2.5% of savings at or above the nisab, once a lunar year has passed"
      correct: true
      feedback: "Right. One-fortieth of your savings, once a year [Abu Dawud 1573]."
    - text: "10% of every paycheck"
      correct: false
      feedback: "Not quite. Zakat isn't taken from each paycheck. It's 2.5% of your savings, counted once a year."
- prompt: "Do converts owe zakat for the years before they became Muslim?"
  options:
    - text: "No"
      correct: true
      feedback: "Right. Nothing from before Islam is owed. Ask your imam how to count your first year."
    - text: "Yes, for every year they had savings"
      correct: false
      feedback: "Not quite. Islam wipes the slate clean. Nothing is owed for years before Islam."
- prompt: "Who can give sadaqah?"
  options:
    - text: "Anyone, any amount, any time, even a kind act"
      correct: true
      feedback: "Right. Every good deed is charity [Bukhari 6021]."
    - text: "Only people who owe zakat"
      correct: false
      feedback: "Not quite. Sadaqah is open to everyone, with or without savings."
```

## AI guide context
**Lesson facts**
- Zakat is a pillar [Bukhari 8]; in the Mu'adh hadith it comes after the shahada and prayer [Bukhari 1395]. It purifies wealth [Q 9:103].
- Nisab: the value of about 85–87.5 g of gold or about 595–612 g of silver (books differ slightly in grams) [Revealed Path ch. 4; Being Muslim]. Due at 2.5% when savings meet the nisab for a full lunar year [Abu Dawud 1573, sahih per al-Albani].
- Zakatable: cash, bank balances, stocks and funds, gold and silver, trade goods. Not: home, car, clothes, personal items [Being Muslim].
- Recipients: the eight categories [Q 9:60]; the category of "hearts to be reconciled" includes new Muslims for many scholars [Being Muslim]. The Hanafi school holds that this category is no longer given separately; a convert in need receives zakat as one of the poor.
- The year (Hanafi): what matters is having the nisab at the start and end of the lunar year; a dip in between doesn't reset it unless the wealth is lost entirely. Other schools generally require the nisab throughout the year.
- Sadaqah: Q 2:261; every good deed is charity [Bukhari 6021]; charity doesn't decrease wealth [Muslim 2588].
- Q16 (drafted): nothing owed for pre-Islam years; ask the imam how to count the first year. The research notes found no Tier-1 page stating explicitly that the year starts at conversion [Research Notes - Core Essentials and Madhab Map §7].

**Likely questions**
- *"How do I calculate it?"* Add up zakatable savings on your zakat date; if at or above the nisab, multiply by 2.5%. Point to the masjid's figure and calculator. For debts, gold jewelry, retirement accounts or business assets, give the general picture and escalate.
- *"Can I give zakat to my family?"* Not to those you're already obliged to support (parents, children, spouse); other needy relatives can be good recipients [Revealed Path ch. 4]. Non-Muslim relatives: give sadaqah freely; zakat to them is a scholar question; escalate.
- *"Zakat vs. sadaqah?"* Zakat is required, fixed and yearly; sadaqah is voluntary, any amount, any time.
- *"I'm in debt."* Schools differ on deducting debts; ask the imam. Interest-bearing debt is Day 53 (Q24).
- *"Can I receive zakat?"* Possibly: new Muslims and people in need are among the recipients. Suggest talking to the mentor or masjid privately; no shame in it.

**Escalate:** first-year counting (Q16); jewelry, retirement accounts, business and investment details; debts; zakat to non-Muslim relatives.

**Don't**
- Don't give a dollar figure for the nisab (it changes); point to the masjid's current figure.
- Don't make zakat sound like a burden or pressure students and low-income converts.
- Don't rule on personal financial cases (Spec §6.2 rule 2).

## Madhab note
- **Which measure:** Hanafi scholars say to use the nisab measure that best serves the poor, and differ on which that is today: with current prices silver gives a much lower figure, while some (e.g. SeekersGuidance 168089) say gold suits wealthier economies. Your masjid will say which it uses.
- **Savings that dip mid-year:** in the Hanafi school, the nisab is checked at the start and end of the year; the other schools generally require it to stay at the nisab all year.
- **Details** like women's gold jewelry and deducting debts differ between the schools. Ask your imam.

## Sources
- [Bukhari 8](https://sunnah.com/bukhari:8): Islam is built on five; [Bukhari 1395](https://sunnah.com/bukhari:1395): Mu'adh sent to Yemen.
- Qur'an [9:103](https://quran.com/9/103), [9:60](https://quran.com/9/60), [2:261](https://quran.com/2/261).
- [Abu Dawud 1573](https://sunnah.com/abudawud:1573) (sahih, al-Albani): zakat after a year passes; 5 of 200 dirhams (2.5%).
- [Bukhari 6021](https://sunnah.com/bukhari:6021): every good deed is charity.
- [Muslim 2588](https://sunnah.com/muslim:2588): charity doesn't decrease wealth.
- [IslamQA.org/SeekersGuidance 168089: Do we calculate nisab with gold or silver?](https://islamqa.org/hanafi/seekersguidance-hanafi/168089/do-we-calculate-nisab-with-gold-or-silver/)
- [[Source - The Revealed Path]] ch. 4 (zakat: nisab, the year, recipients, etiquette); [[Source - Being Muslim a Practical Guide]] (Purifying Alms: what counts, the eight categories).
- [[Research Notes - Core Essentials and Madhab Map]] §7 (nothing owed for pre-Islam years; first-year question).

## Scholar flags
- **Screen 9, cards 1–2 (Q16).** "Nothing is owed for years before you became Muslim" and "Ask your imam how to count your first year." Drafted as in Spec §9. T2 final review: the second card no longer states "the usual answer" (the count starting once Muslim and at nisab is the common teaching on convert-oriented pages but wasn't found on a Tier-1 page); it now only says to note the date savings first reach the nisab and to ask the imam. The AI guide may give that common teaching as "many teachers say", and escalate.
