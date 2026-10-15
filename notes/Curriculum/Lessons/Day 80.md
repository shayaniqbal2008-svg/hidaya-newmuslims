---
day: 80
phase: 3
unit: 9
title: "Serving others"
hook: "Eighty days ago, you needed help with everything. Now you have something to give."
minutes: 5
skills: [B1, B3]
pain_points: [belonging]
logs: [volunteered]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, imam, shahada, Jumu'ah, iftar, salam, sadaqah, Allah, ﷺ]
sources: [Q 5:2, Muslim 2699, Bukhari 6021, Bukhari 6011, Bukhari 13, Bukhari 1, Yaqeen 2025, Research Notes - Retention and Convert Voices]
format: 2
---
# Day 80 · Serving others

### 1 · hook
```yaml
pic: icon:HandHelping
text: "Remember your first week? Wudu felt complicated, the masjid felt big, and you didn't know where to sit. Eighty days later, you know a lot. Today is about turning around and helping: your masjid, your neighborhood, and the next person who says the shahada."
```

### 2 · learn
```yaml
pic: community
text: "**Service is worship.** Allah tells believers to *\"cooperate in righteousness and piety\"* [Q 5:2, Saheeh Intl.]. The Prophet ﷺ said whoever eases someone's hardship, Allah will ease theirs [Muslim 2699]."
bubbles:
  - "He also said every good deed is *sadaqah* (charity) [Bukhari 6021]."
  - "So stacking chairs after Jumu'ah, driving someone to the masjid or serving food at a shelter all count."
```

### 3 · multi
```yaml
pic: icon:HandHeart
prompt: "Which of these count as serving others? Select all that apply."
options:
  - text: "Helping set up iftar at the masjid"
    correct: true
    feedback: "Yes. Feeding people is one of the best deeds, and you'll meet people too."
  - text: "Volunteering at a food bank in your town"
    correct: true
    feedback: "Yes. Easing anyone's hardship counts, Muslim or not."
  - text: "Sitting with a brand-new Muslim so they're not alone at Jumu'ah"
    correct: true
    feedback: "Yes. You know exactly how much that matters."
  - text: "Volunteering mainly so you can post about it for likes"
    correct: false
    feedback: "Not quite. Deeds are judged by intentions [Bukhari 1]. Do it for Allah; posting can wait."
```

### 4 · learn
```yaml
pic: icon:HeartHandshake
text: "**One body.** The Prophet ﷺ compared believers to one body: when one part hurts, the whole body feels it [Bukhari 6011]. And he said none of us truly believes until we want for others what we want for ourselves [Bukhari 13]."
bubbles:
  - "Serving isn't only for Muslims, either. Kindness to neighbors and strangers is part of the same faith."
```

### 5 · widget
```yaml
widget: masjid-map
prompt: "Where you can help"
text: "Tap around the masjid. Every corner has a way to serve."
areas:
  entrance: "Say salam to anyone who looks new or lost. You remember how that felt."
  shoes: "Someone standing here after Jumu'ah, unsure where to go? Be the friendly face."
  hall: "Stack chairs after Jumu'ah, or help set up iftar and events."
  wudu: "Join a masjid cleanup. A clean, welcoming masjid is service too."
```

### 6 · scenario
```yaml
pic: conversation
situation: "Tyler took his shahada at Dre's masjid last Friday. This Friday he's standing by the shoe racks after Jumu'ah, looking lost. Dre is three months in himself."
options:
  - text: "Say salam, tell Tyler he converted a few months ago too, and invite him to grab food with a couple of brothers"
    best: true
    feedback: "Yes. A friendly face who remembers the first week, plus a small group, is exactly what new converts say they needed."
  - text: "Give him a list of twenty rules he should start following"
    best: false
    feedback: "Not quite. Overload is a top reason converts burn out. Friendship first; the rules come step by step."
  - text: "Leave it to the imam; Dre's too new to help"
    best: false
    feedback: "Not quite. The imam can't be everywhere. Dre's recent experience makes him one of the best people to help."
  - text: "Send Tyler a long list of online lectures"
    best: false
    feedback: "Not quite. Kind, but he needs a person more than a playlist right now."
```

### 7 · learn
```yaml
pic: icon:Award
text: "**You're an expert in the first 90 days.** Most converts say what they needed most was people: a salam, a meal invite, someone to sit with at Eid, patience with mistakes [Research Notes, Retention]."
bubbles:
  - "Tell your imam you'd like to help welcome new converts.{teen} Under 18? Help through the masjid's youth program, never one-on-one in private.{/teen}"
  - "No teaching needed: just be the friend you needed."
```

### 8 · reflect
```yaml
prompt: "What helped you most in your first weeks as a Muslim? Who in your life, Muslim or not, could you do something like that for?"
share_with_mentor: optional
```

### 9 · ask_ai
```yaml
chips:
  - "How can I volunteer at my masjid?"
  - "How do I welcome a new convert without overwhelming them?"
  - "Does volunteering count as charity?"
  - "I don't have much time. What small things can I do?"
```

### 10 · do_today
```yaml
pic: icon:HandHelping
text: "Give one hour of service this week."
steps:
  - "Pick one: a masjid cleanup, iftar or event setup, a food bank, or telling {{mentor.name}} you'd like to help welcome new converts"
  - "Sign up for it this week"
  - "Tick here once you've done it"
log: volunteered
optional_extra: "Text one person who's going through something hard, just to check in."
```

### 11 · takeaway
```yaml
pic: icon:HeartHandshake
text: "Serving others is worship. Ease someone's hardship, and Allah eases yours. And you're perfectly placed to help the next convert."
```

### 12 · closing
Someone helped you get here. Now you get to pass it on.

---

## Check
```yaml
- prompt: "What did the Prophet ﷺ say about easing someone's hardship?"
  options:
    - text: "Allah will ease the hardship of the one who does it"
      correct: true
      feedback: "Right [Muslim 2699]. Service comes back to you."
    - text: "It only counts if the person is Muslim"
      correct: false
      feedback: "Not quite. Easing hardship is good with anyone; every good deed is charity [Bukhari 6021]."
- prompt: "A new convert looks lost at the masjid. What helps most?"
  options:
    - text: "A warm salam, a little company, and an invitation"
      correct: true
      feedback: "Right. People, not rules, are what new converts say they needed most."
    - text: "A full list of rules to start on"
      correct: false
      feedback: "Not quite. That overwhelms. Friendship first; learning comes step by step."
```

## AI guide context
**Lesson facts**
- Cooperate in righteousness and piety [Q 5:2]; easing hardship is returned by Allah [Muslim 2699]; every good deed is charity [Bukhari 6021].
- Believers are like one body [Bukhari 6011]; want for others what you want for yourself [Bukhari 13].
- Intentions matter [Bukhari 1] (Day 62).
- Converts consistently say what helped most was people: a mentor, friends, an invitation, company at Ramadan and Eid; overload of rules is a leading reason for burnout [Research Notes - Retention and Convert Voices; Yaqeen 2025: Muslim friends and mosque attachment are the strongest predictors of positive faith development].

**Likely questions**
- *"How can I volunteer at my masjid?"* Ask the mentor or office; common roles: setup and cleanup, iftar and Eid events, youth programs, welcoming visitors, food drives.
- *"How do I welcome a new convert?"* Say salam, share your own story briefly, invite them to something social, don't correct small mistakes, and connect them with the imam or mentor. Respect their privacy: never announce someone's shahada or Islam to others without their consent.
- *"I don't have much time."* Small and regular is best (Bukhari 6464, Day 29): a ride, a text, ten minutes after Jumu'ah.
- *"Does volunteering count as charity?"* Every good deed is charity [Bukhari 6021]; zakat is a separate, specific obligation (Day 46).

**Escalate:** anything involving a minor mentoring or meeting others (safeguarding policy, rule 12); volunteering situations that put the convert at risk.

**Don't**
- Don't push the convert to "do da'wah" or recruit; this lesson is service and welcome.
- Don't suggest a teen meet anyone one-on-one; route through the masjid.
- Don't pressure anyone who's in a hard season themselves; small acts count.

## Sources
- Qur'an [5:2](https://quran.com/5/2) (cooperate in righteousness).
- [Muslim 2699](https://sunnah.com/muslim:2699): whoever eases a hardship, Allah eases his.
- [Bukhari 6021](https://sunnah.com/bukhari:6021): every good deed is charity.
- [Bukhari 6011](https://sunnah.com/bukhari:6011): believers like one body.
- [Bukhari 13](https://sunnah.com/bukhari:13): want for your brother what you want for yourself.
- [Bukhari 1](https://sunnah.com/bukhari:1): deeds are judged by intentions.
- Yaqeen Institute, *Becoming Muslim* (2025), and [[Research Notes - Retention and Convert Voices]] ("What converts say they needed").
