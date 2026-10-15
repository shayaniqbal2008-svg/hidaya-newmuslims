---
day: 49
phase: 2
unit: 6
title: "Halal by default"
hook: "If it feels like everything is haram, here's the truth: most things are allowed."
minutes: 5
skills: [S1]
pain_points: [overwhelm]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [halal, haram, Allah, ﷺ]
sources: [Q 2:29, Q 5:87, Q 2:168, Q 7:157, Bukhari 52, Bukhari 4993, Being Muslim (glossary: mubah), Research Notes - Core Essentials and Madhab Map, Research Notes - Retention and Convert Voices]
format: 2
---
# Day 49 · Halal by default

### 1 · hook
```yaml
pic: icon:CircleCheck
text: "Some days it feels like every post, every person, has a new thing you're \"not allowed\" to do. Today, a reset: the list of what's allowed is huge, and the list of what's forbidden is short."
```

### 2 · learn
```yaml
pic: icon:Earth
text: "**Allowed is the starting point.** *\"It is He who created for you all of that which is on the earth\"* [Q 2:29, Saheeh Intl.]. Scholars take a principle from verses like this one: in everyday things, the default is **halal** (allowed)."
bubbles:
  - "Everyday things means food, clothes, hobbies, work and fun."
  - "Something is **haram** (forbidden) only when there's clear evidence for it [Being Muslim, glossary: mubah]."
```

### 3 · fill
```yaml
before: "In everyday things like food, clothes and hobbies, the starting point is"
options:
  - text: "allowed"
    correct: true
    feedback: "Yes. Halal is the default. Something is forbidden only with clear evidence."
  - text: "forbidden"
    correct: false
    feedback: "Not quite. It's the other way round: allowed, unless there's clear evidence it's forbidden [Q 2:29]."
  - text: "suspicious"
    correct: false
    feedback: "Not quite. Allah created what's on earth for us [Q 2:29]. Start from allowed."
```

### 4 · learn
```yaml
pic: icon:Ban
text: "**The forbidden list is short,** and you already know most of it: pork, alcohol and drugs, sex outside marriage, interest, gambling, stealing, lying, and harming people."
bubbles:
  - "The Prophet ﷺ came to make good things lawful, forbid harmful ones, and lift people's heavy burdens [Q 7:157]."
  - "And Allah warns against forbidding the good things He allowed [Q 5:87]."
```

### 5 · sort
```yaml
prompt: "Halal by default, or one of the few limits?"
buckets: ["Halal by default", "A clear limit"]
items:
  - text: "Playing basketball with friends"
    bucket: 0
    why: "Sports, exercise and fun with friends are allowed."
  - text: "A beer \"just to be social\""
    bucket: 1
    why: "Alcohol is one of the few clear limits. A soda works just as well socially."
  - text: "Wearing jeans and a hoodie"
    bucket: 0
    why: "Normal clothes are fine, as long as they cover what needs covering."
  - text: "Keeping your own name"
    bucket: 0
    why: "Your name stays unless its meaning is bad (Day 9)."
  - text: "Betting money on the game"
    bucket: 1
    why: "Gambling is on the short forbidden list."
  - text: "A vegetarian pizza with friends"
    bucket: 0
    why: "Most food without pork, alcohol or meat questions is simply allowed."
```

### 6 · learn
```yaml
pic: icon:Signpost
text: "**Gray areas exist, and that's okay.** The Prophet ﷺ said the halal is clear and the haram is clear, and between them are unclear things many people don't know. Whoever steers clear of those protects their faith [Bukhari 52]."
bubbles:
  - "So in a gray area, ask before you worry. Don't let it make everything feel forbidden."
```

### 7 · scenario
```yaml
pic: icon:Video
situation: "Chris watches a video where a guy says real Muslims must drop their Western clothes, birthday cakes, non-Muslim friends and their old names. Chris feels like he's failing at everything."
options:
  - text: "Remember that halal is the default, and ask his mentor which of these, if any, actually matter"
    best: true
    feedback: "Yes. Most of that list is culture or opinion. A trusted teacher can sort the real limits from the noise."
  - text: "Drop all of it tonight to be safe"
    best: false
    feedback: "Not quite. Forbidding what Allah allowed is its own mistake [Q 5:87]. And burnout follows."
  - text: "Decide Islam is too strict for him"
    best: false
    feedback: "Not quite. That video isn't Islam's list. The real limits are few, and most of life stays the same."
```

### 8 · learn
```yaml
pic: icon:Shield
text: "**Why the limits are there.** Each one protects something: your mind (no intoxicants), your body, your family, other people's rights, your money."
bubbles:
  - "And Allah teaches gently. The first parts of the Qur'an to come down were about faith and the afterlife. Rules came later, once hearts were settled [Bukhari 4993]."
  - "You're on that same path."
```

### 9 · match
```yaml
prompt: "Match each limit to something it protects."
pairs:
  - left: "No intoxicants"
    right: "Your mind"
  - left: "No sex outside marriage"
    right: "Your family"
  - left: "No stealing"
    right: "Other people's rights"
  - left: "No gambling"
    right: "Your money"
```

### 10 · ask_ai
```yaml
chips:
  - "Is ___ halal? (ask about anything)"
  - "How do I know if something is just culture?"
  - "What should I do in a gray area?"
  - "Someone told me my hobby is haram. Is it?"
```

### 11 · do_today
```yaml
pic: icon:Sparkles
text: "Enjoy something halal, on purpose."
steps:
  - "Write down three things you love doing that are completely halal"
  - "Enjoy one of them today, with a \"thank you\" to Allah"
log: null
optional_extra: "If there's one thing you've been unsure about, ask the AI guide or {{mentor.name}} instead of guessing."
```

### 12 · takeaway
```yaml
pic: icon:CircleCheck
text: "In everyday life, halal is the default. The forbidden list is short and wise. For gray areas, ask instead of worrying."
```

### 13 · closing
Most of your life gets to stay. The few changes are there to protect you.

---

## Check
```yaml
- prompt: "In everyday things like food, clothes and hobbies, what's the starting point?"
  options:
    - text: "Allowed, unless there's clear evidence it's forbidden"
      correct: true
      feedback: "Right. Allah created what's on earth for us [Q 2:29]. The forbidden list is short."
    - text: "Forbidden, unless a scholar says it's allowed"
      correct: false
      feedback: "Not quite. Halal is the default. Forbidding the good things Allah allowed is a mistake [Q 5:87]."
- prompt: "What's the best move in a gray area?"
  options:
    - text: "Ask a trusted teacher, and steer clear while unsure"
      correct: true
      feedback: "Right. Avoiding unclear things protects your faith [Bukhari 52], and asking clears it up."
    - text: "Assume everything unclear is haram and panic"
      correct: false
      feedback: "Not quite. Ask before you worry. Most things turn out to be allowed."
```

## AI guide context
**Lesson facts**
- Allah created what is on earth for people [Q 2:29]; eat what is lawful and good [Q 2:168]; don't forbid the good things Allah made lawful [Q 5:87]; the Prophet ﷺ makes lawful the good, forbids the harmful, and lifts burdens [Q 7:157].
- The legal principle that, in worldly matters (food, dress, customs, transactions), the default is permissibility unless evidence forbids it [Being Muslim, glossary: mubah; Research Notes - Core Essentials and Madhab Map (culture vs religion)]. Acts of worship are the opposite: they follow what's taught.
- Clear halal, clear haram, and doubtful things between; avoiding the doubtful protects faith [Bukhari 52].
- Rules came gradually, after faith settled [Bukhari 4993].
- Convert context: information overload and "haram police" online cause burnout and doubt [Research Notes - Retention and Convert Voices, themes 3–4].

**Likely questions**
- *"Is X halal?"* For everyday things with no clear text, start from "allowed," then check: does it involve one of the clear limits (pork, alcohol, intoxicants, interest, gambling, immodesty, harm, deception)? If unsure or contested, say so and offer the imam.
- *"How do I tell culture from religion?"* Ask: is there a verse or authentic hadith behind it, or is it a custom? Point back to Day 9.
- *"My hobby/music/birthday was called haram."* Hobbies: usually fine. Music (Q22) and holidays (Q5) are contested: give the "scholars differ; ask your imam" line and escalate. Birthdays: scholars differ; route to the imam.

**Escalate:** music and entertainment (Q22); holidays (Q5); meat (Q6); finance and interest (Q24); anything the convert wants a personal ruling on.

**Don't**
- Don't declare contested things haram or halal; name the difference and offer the imam.
- Don't add to the forbidden list or play "haram police."
- Don't treat the default-permissibility principle as applying to new acts of worship.

## Sources
- Qur'an [2:29](https://quran.com/2/29), [5:87](https://quran.com/5/87), [2:168](https://quran.com/2/168), [7:157](https://quran.com/7/157).
- [Bukhari 52](https://sunnah.com/bukhari:52): the halal is clear, the haram is clear, and doubtful matters between.
- [Bukhari 4993](https://sunnah.com/bukhari:4993): Aisha on the order of revelation.
- [[Source - Being Muslim a Practical Guide]] (glossary, "mubah": most acts are permissible, and jurists treat that as the default until revelation says otherwise).
- [[Research Notes - Core Essentials and Madhab Map]] (culture vs religion); [[Research Notes - Retention and Convert Voices]] (themes 3–4).
