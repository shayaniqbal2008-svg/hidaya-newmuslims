---
day: 84
phase: 3
unit: 10
title: "Music, movies and fun"
hook: "Being Muslim doesn't mean giving up fun. It means choosing it well."
minutes: 5
skills: [S1]
pain_points: [identity]
logs: []
madhab_sensitive: true
scholar_flags: [Q22]
status: draft-pending-scholar-review
glossary: [halal, haram, nasheed, daff, ﷺ, imam, madhab]
sources: [Abu Dawud 2578, Bukhari 454, Q 2:185, Bukhari 52, SeekersGuidance (is listening to music haram), Field Guide ch. 1 and 9]
format: 2
---
# Day 84 · Music, movies and fun

# Day 84 · Music, movies and fun

### 1 · hook
```yaml
pic: icon:PartyPopper
text: "Maybe someone told you Muslims can't have fun. Or you're quietly wondering what to do about your playlist and your favorite shows. Let's sort out what's clear, what's debated, and what's simply good fun."
```

### 2 · learn
```yaml
pic: icon:Footprints
text: "**Fun is part of the faith.** The Prophet ﷺ raced his wife Aisha on a journey: she won the first time, and he won the rematch [Abu Dawud 2578]."
bubbles:
  - "He let her watch Ethiopian men show off their spear skills in the masjid [Bukhari 454]."
  - "Islam wants ease for you, not hardship [Q 2:185]. Most things are **halal** (allowed)."
```

### 3 · multi
```yaml
prompt: "Which of these are halal fun? Tap all that apply."
options:
  - text: "A pickup basketball game with friends"
    correct: true
    feedback: "Yes. Sport, exercise and friendly competition are encouraged."
  - text: "A hiking or camping trip"
    correct: true
    feedback: "Yes. Time outdoors is good for body and heart."
  - text: "A board game or video game with clean content, done in moderation"
    correct: true
    feedback: "Yes. Games are fine when the content is clean and they don't crowd out prayer."
  - text: "A party where the main event is drinking"
    correct: false
    feedback: "Not quite. Alcohol is haram, so it's best to skip that one and plan something else."
```

### 4 · reveal
```yaml
title: "Two questions for anything you watch, play or listen to. Tap each one."
cards:
  - front: "1. Content"
    back: "Is it full of what Islam forbids, like nudity, mocking faith, or glorifying sin?"
    pic: icon:Clapperboard
  - front: "2. Effect"
    back: "Does it make you miss prayers, pull you toward harm, or leave your heart heavier?"
    pic: icon:Heart
  - front: "Both answers are no?"
    back: "Then you're usually on solid ground."
    pic: icon:ShieldCheck
```

### 5 · sort
```yaml
prompt: "Use the two questions. Solid ground, or time to rethink?"
buckets: ["Usually solid ground", "Time to rethink"]
items:
  - text: "A family movie night with a clean film"
    bucket: 0
    why: "Clean content, and it brings people together. Both answers are no."
  - text: "A comedy special built on mocking people's faith"
    bucket: 1
    why: "The content fails: mocking faith is one of the things to watch for."
  - text: "A game you play for hours, and Asr slips past again"
    bucket: 1
    why: "The effect fails: anything that makes you miss prayers needs a rethink."
  - text: "A nature documentary on a Saturday afternoon"
    bucket: 0
    why: "Clean content, no harm, and it may even leave you in awe."
  - text: "A show that makes sin look glamorous and leaves you feeling heavy"
    bucket: 1
    why: "Both fail: glorifying sin, and a heavier heart afterwards."
```

### 6 · learn
```yaml
madhab_variant: true
pic: icon:Music
default: "**Music is where scholars differ.** Singing with good words is fine. Most scholars say musical instruments aren't allowed, apart from a hand drum (the **daff**); some scholars allowed them. All agree content matters. Ask your imam what {{masjid.name}} teaches. `[SCHOLAR: Q22]`"
hanafi: "**Music is where scholars differ.** In the Hanafi school, and most scholars of all four schools, musical instruments aren't allowed, apart from a hand drum (the **daff**). Some scholars allowed instruments. `[SCHOLAR: Q22]`"
hanafi_bubbles:
  - "Singing with good words is fine, and so are **nasheeds** (songs without instruments)."
  - "Ask your imam for guidance on your situation."
teen: "At school, music class, the band, or a dance can come up. Don't panic or quit anything today. Talk to {{mentor.name}} or your imam first, and keep your parents in the loop."
```

### 7 · scenario
```yaml
pic: icon:Headphones
situation: "Jordan's whole friend group lives on music. He's heard it's haram and feels like he'll lose his friends and himself. What's a wise next step?"
options:
  - text: "Ask his imam, then make steady changes, starting with lyrics that clash with his faith"
    best: true
    feedback: "Wise. Get real guidance, start with what's clearest, and change at a pace he can keep."
  - text: "Delete everything tonight and cut off friends who listen"
    best: false
    feedback: "Not quite. Sudden all-or-nothing moves often burn out. Islam doesn't ask him to drop his friends."
  - text: "Ignore it; it doesn't matter what he listens to"
    best: false
    feedback: "Not quite. Content and effect do matter, and scholars take it seriously. A conversation with the imam helps."
```

### 8 · ask_ai
```yaml
chips:
  - "Is listening to music haram?"
  - "Can I watch movies and TV shows?"
  - "What are nasheeds?"
  - "Ask my imam about music in my situation"
```

### 9 · reflect
```yaml
prompt: "Think about what you watch, play and listen to in a normal week. What fills you up? What leaves you feeling heavy? Write one thing to keep and one thing to change. Private to you."
share_with_mentor: optional
```

### 10 · do_today
```yaml
pic: icon:Volleyball
text: "Plan one halal fun thing this week."
steps:
  - "Pick it: a game, a walk, a meal out, a sports night"
  - "Invite someone, ideally a Muslim friend"
log: null
optional_extra: "If music is a real question for you, send it to your imam with \"Ask my imam.\""
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "Fun is halal. Check the content and the effect, and ask your imam about music."
```

### 12 · closing
You don't have to become someone who never laughs. The Prophet ﷺ raced, joked and smiled.

---

## Check
```yaml
- prompt: "What two questions help you judge a show, game or song?"
  options:
    - text: "What's in it, and what does it do to me?"
      correct: true
      feedback: "Right. Content and effect are the two big questions."
    - text: "Is it popular, and is it new?"
      correct: false
      feedback: "Not quite. Ask about its content and its effect on your heart and habits."
- prompt: "On music, what's the right next step if you're unsure?"
  options:
    - text: "Ask your imam, since scholars differ"
      correct: true
      feedback: "Right. Get guidance on your situation, then change at a steady pace."
    - text: "Decide from whatever a stranger online says"
      correct: false
      feedback: "Not quite. Scholars differ on it; ask your imam."
```

## AI guide context
**Lesson facts**
- Halal fun is real: the Prophet ﷺ raced Aisha [Abu Dawud 2578] and let her watch the Ethiopians' spear display in the masjid [Bukhari 454]. Allah intends ease [Q 2:185].
- Judge entertainment by content (nudity, mocking faith, glorifying sin) and effect (missing prayers, pulling toward harm).
- Music (Q22): the mainstream position of all four schools, including the Hanafi school, is that musical instruments are not permitted, except the daff; singing with permissible content is allowed. A minority of scholars allowed instruments [SeekersGuidance (is listening to music haram)]. State this as the mainstream view, mention that scholars differ, and route personal questions to the imam.

**Likely questions**
- *"Is music haram?"* Give the mainstream picture above, mention the minority view, and offer "Ask my imam." Never give a personal ruling. Encourage steady change, not panic.
- *"Can I watch movies?"* Many are fine; avoid what's built on nudity or glorifying sin; mind time and prayers. Specific cases: imam.
- *"What are nasheeds?"* Songs, often about faith, usually with voice only or a daff.
- *"I'm a musician / my job involves music."* Escalate (livelihood question).
- Teens: band, music class, school dances: don't quit anything abruptly; talk to the mentor or imam, and keep parents informed.

**Escalate:** music as a job or school requirement; weddings and celebrations with music; anyone distressed about past music or entertainment (reassure: Islam wipes out the past; Day 1).

**Don't**
- Don't declare a personal ruling on music, or say "it's all fine" or "it's all haram."
- Don't shame anyone for their playlist.
- Don't tell anyone to cut off friends.

## Madhab note
The mainstream position in all four schools is that musical instruments aren't allowed, with exceptions (such as the daff, especially at weddings and Eid) that vary by school. Some scholars, past and present, allowed instruments when the content and setting are clean. Your imam will tell you {{masjid.name}}'s guidance.

## Sources
- [Abu Dawud 2578](https://sunnah.com/abudawud:2578) (sahih, al-Albani): the Prophet ﷺ races Aisha.
- [Bukhari 454](https://sunnah.com/bukhari:454): Aisha watches the Ethiopians' spear display in the masjid.
- Qur'an [2:185](https://quran.com/2/185): Allah intends ease for you.
- [Bukhari 52](https://sunnah.com/bukhari:52): the halal is clear and the haram is clear.
- [SeekersGuidance: Is listening to music haram?](https://seekersguidance.org/answers/halal-and-haram/is-listening-to-music-haram/) (Shaykh Yusuf Weltch, checked by Shaykh Faraz Rabbani): the four schools' mainstream view, the daff, the minority view.
- [[Source - The New Muslims Field Guide]] ch. 1 (you're still you), ch. 9 (slow and steady).

## Scholar flags
- **Screen 6 (Q22).** Drafted as: scholars differ; content and effect matter; ask your imam. The Hanafi variant states the mainstream position of the four schools (instruments not allowed except the daff; good singing fine) and names the minority view. The teen line tells teens not to quit school activities abruptly and to talk to the mentor or imam first.
