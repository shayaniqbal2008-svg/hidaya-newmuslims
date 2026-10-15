---
day: 68
phase: 3
unit: 8
title: "Earning halal"
hook: "Your paycheck can be worship too. Here's how to keep it clean."
minutes: 5
skills: [S1]
pain_points: [work]
logs: []
madhab_sensitive: false
scholar_flags: [Q31]
status: draft-pending-scholar-review
glossary: [halal, riba, niyyah, Dawud, imam, Allah, ﷺ]
sources: [Bukhari 2072, Muslim 102, Q 2:188, Q 5:90, Q 2:275–279, Bukhari 2236, Bukhari 52, Revealed Path Part IV ch. 24, Research Notes - Retention and Convert Voices (V11)]
format: 2
---
# Day 68 · Earning halal

### 1 · hook
```yaml
pic: icon:Briefcase
text: "Most of your waking hours go to work or school. Islam doesn't treat that time as separate from your faith. Today: honest work, and the jobs worth asking about."
```

### 2 · learn
```yaml
pic: icon:Hammer
text: "**Work is honorable.** The Prophet ﷺ said nobody eats better food than what they earned with their own hands, and that the Prophet **Dawud** (David) lived from his own labor [Bukhari 2072]."
bubbles:
  - "With the right niyyah (intention), earning to support yourself and your family is a form of worship, whatever the job's status or pay [Revealed Path ch. 24]."
```

### 3 · fill
```yaml
before: "With the right niyyah, earning to support yourself and your family is a form of"
options:
  - text: "worship"
    correct: true
    feedback: "Yes. Honest work done with a good intention counts, whatever the job's status or pay."
  - text: "distraction"
    correct: false
    feedback: "Not quite. With the right intention, your work is worship, not a break from it."
  - text: "weakness"
    correct: false
    feedback: "Not quite. Earning with your own hands is praised [Bukhari 2072]. It's worship with the right intention."
```

### 4 · learn
```yaml
pic: icon:Wheat
text: "**Halal earning has two sides. First: how you work.** The Prophet ﷺ found wet grain hidden under dry grain at a market stall and said whoever cheats isn't one of us [Muslim 102]."
bubbles:
  - "Don't take people's money unjustly [Q 2:188]."
  - "At work that means: honest timesheets, no fake sick days, no hiding a product's flaws, no padding the bill."
```

### 5 · sort
```yaml
prompt: "Honest work, or cheating?"
buckets: ["Honest", "Cheating"]
items:
  - text: "Logging the hours you actually worked"
    bucket: 0
    why: "Honest timesheets are part of halal earning."
  - text: "Calling in a fake sick day"
    bucket: 1
    why: "That takes pay for a lie. Don't take people's money unjustly [Q 2:188]."
  - text: "Adding a few extra hours to a client's bill"
    bucket: 1
    why: "Padding the bill is taking money unjustly [Q 2:188]."
  - text: "Charging a fair price for good work"
    bucket: 0
    why: "Fair profit is halal. The problem is deception."
```

### 6 · choice
```yaml
pic: icon:Smartphone
prompt: "Which of these breaks the Prophet's rule ﷺ about cheating?"
options:
  - text: "Selling a used phone without mentioning the cracked battery"
    correct: true
    feedback: "Right. Hiding a flaw is exactly the wet grain under the dry [Muslim 102]."
  - text: "Charging a fair price for good work"
    correct: false
    feedback: "Not quite. Fair profit is halal. The problem is deception."
  - text: "Turning down a sale you're not sure about"
    correct: false
    feedback: "Not quite. Stepping back from something doubtful protects you [Bukhari 52]."
```

### 7 · learn
```yaml
pic: icon:Search
text: "**Second: what the work is.** A job is a question when its main work is something Islam forbids. Some jobs are in between: ask [Bukhari 52]. Already in a job like this? Talk to your imam privately, soon. `[SCHOLAR: Q31]`"
bubbles:
  - "Selling or serving alcohol, or gambling [Q 5:90; Bukhari 2236]."
  - "Interest-based lending, **riba** [Q 2:275–279]."
  - "Selling pork [Bukhari 2236]."
  - "Scams, adult content, deceiving people."
  - "{teen}If you're under 18: part-time jobs are great, like tutoring, babysitting, retail, lifeguarding or a grocery store.{/teen}"
  - "{teen}Before saying yes to a restaurant or store job, check whether you'd serve alcohol or handle pork, and ask {{mentor.name}} or your imam if so.{/teen}"
  - "{teen}Follow your parents' and your state's rules on teen work, and keep school first.{/teen}"
```

### 8 · multi
```yaml
prompt: "Which of these jobs raise a halal question to settle before you say yes? Select all that apply."
options:
  - text: "Bartender"
    correct: true
    feedback: "Yes. Serving alcohol is the job itself, and Islam forbids dealing in it [Q 5:90]. Look elsewhere."
  - text: "Loan officer at an interest-based lender"
    correct: true
    feedback: "Yes. Arranging interest loans is close to riba itself [Q 2:275–279]. Worth asking."
  - text: "Cashier at a grocery store that also sells beer"
    correct: true
    feedback: "Worth a quick question. The main work is groceries, but it's in-between enough to ask."
  - text: "Nursing assistant"
    correct: false
    feedback: "Generally fine. Caring for the sick is honorable work."
  - text: "Warehouse picker for an online store"
    correct: false
    feedback: "Generally fine. Ordinary honest work."
```

### 9 · scenario
```yaml
pic: icon:Utensils
situation: "Luis has served tables for three years. Part of his job is serving beer and wine. He just became Muslim, pays rent with this job, and feels sick about it."
options:
  - text: "Talk to his imam privately this week about his situation, and start looking for other work now"
    best: true
    feedback: "Yes. He takes it seriously without making a panicked choice alone. The imam can guide him on the timing."
  - text: "Quit tonight with no plan and no savings"
    best: false
    feedback: "His heart's in the right place, but losing rent overnight can create new harm. Get guidance first, and quickly."
  - text: "Decide it's fine since he doesn't drink it himself"
    best: false
    feedback: "Not quite. Serving it is part of the issue, not just drinking it. Don't settle it alone: ask the imam."
```

### 10 · ask_ai
```yaml
chips:
  - "My job involves alcohol. Do I have to quit?"
  - "Is it okay to work at a bank?"
  - "Is driving for a delivery app halal?"
  - "Can I invest in stocks or a 401(k)?"
```

### 11 · do_today
```yaml
pic: icon:Briefcase
text: "Look at your work with fresh eyes."
steps:
  - "Look at your job, school work or side hustle. Is there one small dishonest habit (a padded time, an excuse)?"
  - "Drop it this week"
  - "Set your niyyah: \"I work to provide, for Allah.\""
log: null
optional_extra: "If any part of your job worries you, write the question down and send it through \"Ask my imam.\""
```

### 12 · takeaway
```yaml
pic: icon:Scale
text: "Honest work is worship. Don't cheat, don't take what isn't yours, and if your job's main work is something Islam forbids, ask your imam soon instead of deciding alone."
```

### 13 · closing
Clean money, earned honestly, carries blessing.

---

## Check
```yaml
- prompt: "What did the Prophet ﷺ say about the man who hid wet grain under dry grain?"
  options:
    - text: "Whoever cheats isn't one of us"
      correct: true
      feedback: "Right [Muslim 102]. Hiding flaws to make a sale is cheating."
    - text: "Business is business"
      correct: false
      feedback: "Not quite. He said whoever cheats isn't one of us [Muslim 102]."
- prompt: "You're unsure whether a job is halal. What's the wise move?"
  options:
    - text: "Ask your imam before deciding"
      correct: true
      feedback: "Right. Doubtful matters are the ones to ask about [Bukhari 52]."
    - text: "Take it; if nobody told you, it's fine"
      correct: false
      feedback: "Not quite. When something's in between, asking first protects you [Bukhari 52]."
```

## AI guide context
**Lesson facts**
- Earning by your own work is praised; Dawud lived from his labor [Bukhari 2072]. With a good intention, earning to support family is worship; any lawful, honest work is noble [Revealed Path ch. 24].
- Cheating is condemned [Muslim 102]; consuming others' wealth unjustly is forbidden [Q 2:188]. Employees should work with care; employers must pay fairly [Revealed Path ch. 24].
- Clearly forbidden fields: alcohol and gambling [Q 5:90]; trading in alcohol, pigs, carrion and idols [Bukhari 2236]; interest [Q 2:275–279]; fraud. Between clear halal and clear haram are doubtful matters; avoiding them protects your faith [Bukhari 52].
- Convert advice: keep your job and studies; don't blow up your life in the first months [Research Notes - Retention and Convert Voices, V11].

**Likely questions**
- *"My job involves alcohol. Do I have to quit?"* `[SCHOLAR: Q31]` Don't rule on their case. Say: serving or selling alcohol isn't work to stay in long-term; talk to your imam privately this week; start looking for other work; don't make a panicked decision alone. Offer "Ask my imam."
- *"Bank job?"* Depends on the role (tellers, IT, loan officers differ). General picture: roles directly arranging interest are the clearest concern. Escalate for their role.
- *"Delivery apps?"* Generally ordinary work. If the app sends alcohol orders, that's a question for the imam.
- *"Stocks, 401(k)?"* General picture only: it depends on what the businesses do and whether interest is involved. Route their specific accounts to the imam; link Day 53. No financial advice beyond pointing to a professional.

**Escalate:** any convert currently in a job involving alcohol, gambling, interest, pork or adult content; business ownership questions; retirement accounts and existing debts (Q24 territory, Day 53).

**Don't**
- Don't tell anyone to quit immediately, or to stay.
- Don't give financial or legal advice; point to a professional.
- For teens: keep examples to student jobs; school and parents' rules come first.

## Sources
- [Bukhari 2072](https://sunnah.com/bukhari:2072): the best food is what you earn with your own hands; Dawud lived from his labor.
- [Muslim 102](https://sunnah.com/muslim:102): whoever cheats is not of us (the grain seller).
- [Bukhari 52](https://sunnah.com/bukhari:52): the halal is clear, the haram is clear, and doubtful matters lie between.
- [Bukhari 2236](https://sunnah.com/bukhari:2236): trade in alcohol, carrion, pigs and idols was made unlawful.
- Qur'an [2:188](https://quran.com/2/188), [5:90](https://quran.com/5/90), [2:275–279](https://quran.com/2/275-279).
- [[Source - The Revealed Path]] Part IV, ch. 24 (earning as worship; employers and employees).
- [[Research Notes - Retention and Convert Voices]] V11 (keep your job and studies).

## Scholar flags
- **Screen 7 and AI guide, a convert already working in a job whose main work is haram, e.g. serving alcohol (`[SCHOLAR: Q31]`).** Drafted as: it isn't work to stay in long-term; talk to your imam privately, soon; start looking for other work now; don't make a panicked decision alone. The app doesn't say whether to quit immediately or how long a transition may take.
