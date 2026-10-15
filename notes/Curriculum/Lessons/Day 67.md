---
day: 67
phase: 3
unit: 8
title: "Neighbors and coworkers"
hook: "Most people will never read a book about Islam. They'll just live next to you, or work with you."
minutes: 5
skills: [T3, B4]
pain_points: [character]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [da'wah, Jibril, Allah, ﷺ, Fajr, Eid]
sources: [Bukhari 6014, Bukhari 6018, Q 60:8, Q 41:34, Bukhari 6021, Q 5:90, Tirmidhi 2801, Revealed Path Part IV ch. 22–23, Field Guide ch. 17]
format: 2
---
# Day 67 · Neighbors and coworkers

### 1 · hook
```yaml
pic: icon:House
text: "The family next door. The guy at the next desk. The classmate in your group project. To them, *you* might be the only Muslim they know. No pressure. Just a chance."
```

### 2 · learn
```yaml
pic: icon:House
text: "**Neighbors matter a lot in Islam.** The Prophet ﷺ said the angel **Jibril** kept urging him to be good to neighbors, so often that he thought neighbors would be given a share of inheritance [Bukhari 6014]."
bubbles:
  - "He tied it to faith itself: whoever believes in Allah and the Last Day shouldn't harm their neighbor [Bukhari 6018]."
  - "That includes neighbors who aren't Muslim. Allah doesn't forbid kindness and fairness to people who live in peace with you [Q 60:8]."
```

### 3 · fill
```yaml
before: "Jibril urged the Prophet ﷺ about them so often, he thought they'd inherit: his"
options:
  - text: "neighbors"
    correct: true
    feedback: "Yes. So often he thought neighbors would be given a share of inheritance [Bukhari 6014]."
  - text: "students"
    correct: false
    feedback: "Not quite. It was neighbors, so often he thought they'd be made heirs [Bukhari 6014]."
  - text: "guests"
    correct: false
    feedback: "Not quite. It was neighbors, so often he thought they'd be made heirs [Bukhari 6014]."
```

### 4 · choice
```yaml
pic: icon:Users
prompt: "Who counts as a neighbor you should treat well?"
options:
  - text: "Everyone living near you, Muslim or not"
    correct: true
    feedback: "Right. Kindness and fairness to peaceful neighbors of any faith is something Allah loves [Q 60:8]."
  - text: "Only Muslim neighbors"
    correct: false
    feedback: "Not quite. Islam's care for neighbors isn't limited by religion [Q 60:8]."
  - text: "Only the ones who are kind to you first"
    correct: false
    feedback: "Not quite. You can go first, and even answer rudeness with something better [Q 41:34]."
```

### 5 · scenario
```yaml
pic: icon:Music
situation: "Ana's new neighbors play loud music until 1 a.m. on weeknights. She gets up for Fajr (the dawn prayer) and is exhausted."
options:
  - text: "Knock on a weekend afternoon, introduce herself, bring something sweet, and ask kindly if they could keep it down after 11"
    best: true
    feedback: "Yes. Neighbors first, request second. Kind and direct usually works, and starts a relationship."
  - text: "Tape an angry note to their door"
    best: false
    feedback: "Not quite. Notes feel hostile and start a feud. A face and a friendly tone go much further."
  - text: "Call the landlord or police the first night"
    best: false
    feedback: "Sometimes that's needed, but as a first move it skips the chance to just talk. Start kind; escalate if it keeps up."
  - text: "Say nothing and quietly resent them for months"
    best: false
    feedback: "Not quite. Silent resentment hurts both of you. A calm request is fair to them and to you."
```

### 6 · learn
```yaml
pic: conversation
text: "**This is da'wah too.** **Da'wah** means inviting people to Islam. Most of it never involves a speech."
bubbles:
  - "It's the coworker who never steals credit, the neighbor who shovels both driveways, the classmate who does their share of the project."
  - "People remember how a Muslim treated them long after they forget what one said [Revealed Path ch. 23]."
```

### 7 · sort
```yaml
prompt: "Everyday da'wah, or a sales pitch?"
buckets: ["Everyday da'wah", "Sales pitch"]
items:
  - text: "Never stealing credit for a coworker's work"
    bucket: 0
    why: "Honesty at work speaks louder than any speech."
  - text: "Shoveling both driveways after a snowstorm"
    bucket: 0
    why: "A quiet kindness your neighbor will remember."
  - text: "Doing your full share of the group project"
    bucket: 0
    why: "Being reliable is part of good character, and classmates notice."
  - text: "Attaching a lecture about Islam to every favor you do"
    bucket: 1
    why: "Kindness isn't a tactic. Be kind because Allah loves it, full stop [Field Guide ch. 17]."
```

### 8 · reveal
```yaml
title: "Small things that count"
cards:
  - front: "Greet people first"
    back: "A smile and a hello to the neighbor you barely know. Every good deed is charity [Bukhari 6021]."
    pic: icon:Hand
  - front: "Share your Eid"
    back: "On Eid (the two yearly celebrations), bring a plate of food next door, or treats to work. It opens questions in the nicest way."
    pic: icon:Gift
  - front: "Return the bad with something better"
    back: "A coworker is cold or rude? Respond with something better, and enemies can become close friends [Q 41:34]."
    pic: icon:HeartHandshake
  - front: "Be the reliable one"
    back: "On time, honest with the hours, keeps their word. Coworkers notice."
    pic: icon:Clock
```

### 9 · scenario
```yaml
pic: icon:Briefcase
situation: "At work, Tyler's team goes out to a bar for drinks every Friday. He's skipped every time, and lately he's noticed he isn't included in other things either."
options:
  - text: "Suggest a team lunch or coffee he can join, and show up warmly to the events that aren't about drinking"
    best: true
    feedback: "Yes. He keeps his line on alcohol and still builds the relationships. Most teams welcome a lunch idea."
  - text: "Keep skipping and stop trying, since they clearly don't get it"
    best: false
    feedback: "Not quite. Pulling back completely can leave him isolated at work. Offer another way to connect."
  - text: "Give a talk at the next meeting about why alcohol is forbidden"
    best: false
    feedback: "Not quite. Nobody asked for a lecture. A simple \"I don't drink, but I'd love to do lunch\" is enough."
```

### 10 · learn
```yaml
pic: icon:Feather
text: "**You're not the spokesperson for two billion people.** You'll have grumpy days and make mistakes, and that's fine. You don't need to be perfect to represent Islam well."
bubbles:
  - "Just be decent, honest, and quick to apologize when you get it wrong."
  - "And don't turn every kindness into a sales pitch. Be kind because Allah loves it, full stop [Field Guide ch. 17]."
```

### 11 · ask_ai
```yaml
chips:
  - "My coworker keeps asking about Islam. How much should I say?"
  - "Can I go to a coworker's party if there's alcohol?"
  - "How do I give my neighbors food for Eid without it being awkward?"
  - "A neighbor is hostile because I'm Muslim. What do I do?"
```

### 12 · do_today
```yaml
pic: icon:HandHeart
text: "One small kindness, no religion talk needed."
steps:
  - "Do one kind thing for a neighbor, coworker or classmate: a greeting, help with a task, or something sweet"
  - "No mention of religion needed"
log: null
optional_extra: "Learn the name of one neighbor you don't know yet."
```

### 13 · takeaway
```yaml
pic: icon:House
text: "Being good to neighbors and coworkers, Muslim or not, is part of faith, and it's the da'wah most people will ever see."
```

### 14 · closing
You don't need to say much. Just keep showing up kind.

---

## Check
```yaml
- prompt: "What did Jibril keep urging the Prophet ﷺ about?"
  options:
    - text: "Being good to neighbors"
      correct: true
      feedback: "Right. So often he thought neighbors would inherit [Bukhari 6014]."
    - text: "Praying longer at night"
      correct: false
      feedback: "Not quite. It was neighbors, so often he thought they'd be made heirs [Bukhari 6014]."
- prompt: "What does most da'wah look like day to day?"
  options:
    - text: "Being honest, kind and reliable with the people around you"
      correct: true
      feedback: "Right. How you treat people speaks before you do."
    - text: "Bringing up Islam in every conversation"
      correct: false
      feedback: "Not quite. Constant pitches push people away. Good character opens doors."
```

## AI guide context
**Lesson facts**
- Jibril kept urging kindness to neighbors [Bukhari 6014]; a believer doesn't harm their neighbor [Bukhari 6018].
- Kindness and justice to non-Muslims who live in peace with you are encouraged; Allah loves the just [Q 60:8].
- Respond to bad with what is better [Q 41:34]. Every good deed is charity [Bukhari 6021].
- Muslims are meant to live engaged in their wider society, not isolated, as good citizens and examples [Revealed Path ch. 22–23].
- Don't preach at people or judge non-Muslims by Islamic standards; live it and answer when asked [Field Guide ch. 17].

**Likely questions**
- *"Coworker asks about Islam."* Answer briefly and honestly, about what it means to you; offer more if they're curious; it's fine to say "I don't know, I'll find out" (link Day 71 for tough questions).
- *"Parties with alcohol?"* Give the general picture: Muslims avoid alcohol [Q 5:90], and a hadith tells believers not to sit at a table where alcohol is being passed around [Tirmidhi 2801, hasan per al-Albani]; suggest alternatives (lunch, coffee, leaving early before drinks). For their specific workplace situation, offer "Ask my imam."
- *"Eid food to neighbors?"* Simple: a plate, a note ("It's our holiday, Eid, and we wanted to share"), no obligation.
- *"Hostile neighbor."* Stay calm, document anything threatening, don't retaliate; link Day 52 (Islamophobia) and CAIR for rights. Safety rule if there's a threat.

**Escalate:** harassment or threats from a neighbor or coworker (safety rule; Day 52 resources); workplace religious-accommodation disputes (mentor, CAIR); specific rulings on work events (imam).

**Don't**
- Don't frame kindness as a tactic to convert people.
- Don't encourage the convert to cut off non-Muslim friends or coworkers.

## Sources
- [Bukhari 6014](https://sunnah.com/bukhari:6014): Jibril's repeated urging about neighbors.
- [Bukhari 6018](https://sunnah.com/bukhari:6018): don't harm your neighbor.
- [Bukhari 6021](https://sunnah.com/bukhari:6021): every good deed is charity.
- Qur'an [60:8](https://quran.com/60/8), [41:34](https://quran.com/41/34), [5:90](https://quran.com/5/90).
- [Tirmidhi 2801](https://sunnah.com/tirmidhi:2801): don't sit at a table where alcohol is passed around (hasan, al-Albani; AI guide only).
- [[Source - The Revealed Path]] Part IV, ch. 22 (community), ch. 23 (living in non-Muslim societies).
- [[Source - The New Muslims Field Guide]] ch. 17 (don't preach or judge; live it).
