---
day: 81
phase: 3
unit: 10
title: "Keep learning"
hook: "Nine days to go. The learning doesn't stop at Day 90, and that's good news."
minutes: 5
skills: [S3]
pain_points: [conflicting-voices]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Qur'an, masjid, imam, ﷺ, Allah]
sources: [Q 20:114, Q 16:43, Muslim 2699, Bukhari 6464, SeekersGuidance (recent convert), SeekersGuidance (convert following a school), Field Guide ch. 8 and 9, Research Notes - Core Essentials and Madhab Map]
format: 2
---
# Day 81 · Keep learning

### 1 · hook
```yaml
pic: icon:GraduationCap
text: "**Nine days left.** In 80 days you've learned to pray, to talk about your faith, and to find your people. The good news: Day 90 isn't a finish line. Learning is part of being Muslim for life."
```

### 2 · learn
```yaml
pic: quran
text: "**Learning is worship.** Allah told His Prophet ﷺ to ask for more knowledge [Q 20:114]. Even he kept asking for more."
bubbles:
  - "Whoever sets out on a path to learn, Allah makes their path to Paradise easier [Muslim 2699]. Every class you sit in counts."
```

### 3 · tap_words
```yaml
prompt: "Build the du'a Allah taught His Prophet ﷺ to say [Q 20:114]."
answer: "My Lord, increase me in knowledge"
extra: ["wealth", "give", "patience"]
feedback: "*\"My Lord, increase me in knowledge\"* [Q 20:114, Saheeh Intl.]. A short du'a you can say before any class."
```

### 4 · reveal
```yaml
title: "Three things make learning last. Tap each one."
cards:
  - front: "A real teacher"
    back: "Someone qualified, who knows you, and whom you can ask follow-up questions [Q 16:43]."
    pic: icon:UserCheck
  - front: "A little, often"
    back: "Twenty minutes a week you keep beats a big course you quit. Allah loves deeds done regularly, even small ones [Bukhari 6464]."
    pic: icon:Repeat
  - front: "People to learn with"
    back: "A class at {{masjid.name}} gives you knowledge and friends at once."
    pic: community
```

### 5 · scenario
```yaml
pic: icon:Compass
situation: "Ana wants to keep learning after Day 90. She's choosing between three options. Which is the best place to start?"
options:
  - text: "A weekly beginners' class at her masjid, taught by the imam"
    best: true
    feedback: "Best start. A qualified teacher, real questions, and people she'll see every week. Learning and belonging together."
  - text: "A two-year intensive online course, five nights a week"
    best: false
    feedback: "Not quite yet. Great someday, but too heavy now usually leads to burnout. Start small and build up."
  - text: "Short clips from a popular account she found online"
    best: false
    feedback: "Not as a main source. Clips can't answer her follow-up questions, and she can't tell if the speaker is qualified (Day 76)."
```

### 6 · learn
```yaml
pic: icon:Library
text: "**Trusted places to keep learning**, with a teacher, not instead of one."
bubbles:
  - "Your imam and {{mentor.name}}."
  - "Beginner classes at {{masjid.name}} or a nearby masjid."
  - "SeekersGuidance: free online courses and answers."
  - "Yaqeen Institute: short videos and articles."
```

### 7 · fill
```yaml
before: "When two sources disagree, follow"
after: "while you learn (Day 78)."
options:
  - text: "your masjid's teaching"
    correct: true
    feedback: "Right. Your masjid's teaching is your anchor while you learn, and your imam can explain any difference."
  - text: "whichever sounds easier"
    correct: false
    feedback: "Not quite. Picking the easiest answer each time isn't a method. Follow your masjid's teaching while you learn."
  - text: "the most popular video"
    correct: false
    feedback: "Not quite. Popular doesn't mean qualified. Follow your masjid's teaching while you learn."
```

### 8 · match
```yaml
prompt: "Match the question to the best place to take it."
pairs:
  - left: "How do I make up a prayer I missed?"
    right: "Ask your imam or mentor"
  - left: "I want to understand the Qur'an better"
    right: "A weekly class at the masjid"
  - left: "Quick question late at night"
    right: "The AI guide, then confirm with your imam if it's personal"
  - left: "Someone online says your masjid prays wrong"
    right: "Ask your imam; schools differ and both can be valid"
```

### 9 · choice
```yaml
pic: icon:Footprints
prompt: "Hannah feels behind because born Muslims seem to know so much more. What's the healthiest way to see it?"
options:
  - text: "She's on a lifelong path, and every step counts with Allah"
    correct: true
    feedback: "Right. Nobody finishes learning. Allah rewards the effort, and she started 90 days ago."
  - text: "She should study every night until she catches up"
    correct: false
    feedback: "Not quite. That's a recipe for burnout. Small and steady wins."
  - text: "She'll never really belong unless she knows Arabic"
    correct: false
    feedback: "Not quite. Arabic helps, but belonging doesn't depend on it. Millions of Muslims are still learning."
```

### 10 · ask_ai
```yaml
chips:
  - "What should I learn next after this program?"
  - "How do I know if an online teacher is trustworthy?"
  - "Is there a beginner class near me?"
  - "I feel behind born Muslims"
```

### 11 · do_today
```yaml
pic: icon:NotebookPen
text: "Ask for one recommendation."
steps:
  - "Ask your imam or {{mentor.name}}: \"What class or teacher would you recommend for me after Day 90?\""
  - "Write down the answer"
log: null
optional_extra: "Look up the class schedule at {{masjid.name}} and pick one you could try this month."
```

### 12 · takeaway
```yaml
pic: icon:Sprout
text: "Keep learning a little, often, with a real teacher and people around you."
```

### 13 · closing
You didn't learn everything in 90 days, and you weren't meant to. You learned how to keep going.

---

## Check
```yaml
- prompt: "What's the best main source for learning after Day 90?"
  options:
    - text: "A qualified teacher you can ask follow-up questions"
      correct: true
      feedback: "Right. A real teacher, ideally at your masjid, plus trusted sites alongside."
    - text: "Whatever short clips show up in your feed"
      correct: false
      feedback: "Not quite. Clips can't answer your questions, and you can't always tell who's qualified."
- prompt: "Which pace of learning tends to last?"
  options:
    - text: "A little, regularly"
      correct: true
      feedback: "Right. Allah loves deeds done regularly, even small ones [Bukhari 6464]."
    - text: "As much as possible, as fast as possible"
      correct: false
      feedback: "Not quite. Rushing tends to burn people out. Small and steady lasts."
```

## AI guide context
**Lesson facts**
- Seeking knowledge is worship; even the Prophet ﷺ was told to ask for more [Q 20:114]. Whoever takes a path to knowledge, Allah eases their path to Paradise [Muslim 2699].
- Ask those who know [Q 16:43]: a qualified local teacher is the anchor; trusted online sources supplement [SeekersGuidance (recent convert)].
- Small and regular beats big and short-lived [Bukhari 6464].
- While learning, follow the masjid's school; differences between schools are valid (Day 78) [SeekersGuidance (convert following a school)].

**Likely questions**
- *"What should I learn next?"* Suggest a sequence: keep the prayer solid, al-Fatiha and a few short surahs, a basic class on belief and worship at the masjid, the Prophet's life ﷺ. Day 89 builds a plan.
- *"How do I know an online teacher is trustworthy?"* Studied with known scholars; answers to a community; humble; doesn't attack other Muslims; your imam recognizes them. When in doubt, ask the imam.
- *"Is there a class near me?"* Point to {{masjid.name}} and the mentor. Don't invent class names or times.
- *"I feel behind."* Reassure: everyone learns over a lifetime; effort is rewarded; comparing is unhelpful.

**Escalate:** personal rulings that come up while they plan their learning; requests to join a specific group or teacher the guide can't vouch for (send to the imam).

**Don't**
- Don't recommend specific online personalities beyond the trusted institutions named in the lesson.
- Don't push heavy study loads or full-time programs.
- Don't disparage any group or teacher.

## Sources
- Qur'an [20:114](https://quran.com/20/114), [16:43](https://quran.com/16/43).
- [Muslim 2699](https://sunnah.com/muslim:2699): whoever takes a path to knowledge, Allah eases a path to Paradise.
- [Bukhari 6464](https://sunnah.com/bukhari:6464): the deeds Allah loves most are the regular ones, even if small.
- [SeekersGuidance: How should a recent convert build their knowledge of Islam?](https://seekersguidance.org/answers/seeking-knowledge/how-should-a-recent-convert-build-their-knowledge-of-islam/) (learn from qualified teachers; take it gradually).
- [SeekersGuidance: How can a convert follow a school correctly](https://seekersguidance.org/answers/general-counsel/how-can-a-convert-follow-a-school-of-thought-correctly/).
- [[Source - The New Muslims Field Guide]] ch. 8 (know your sources), ch. 9 (slow and steady).
