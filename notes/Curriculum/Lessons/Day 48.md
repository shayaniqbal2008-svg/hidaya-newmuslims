---
day: 48
phase: 2
unit: 6
title: "When Muslims let you down"
hook: "Someone at the masjid was harsh, or cold, or just plain rude. It hurts. It isn't Islam."
minutes: 5
skills: [S3, S4]
pain_points: [doubts-behavior]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, imam, Allah, ﷺ]
sources: [ISPU RMS, Yaqeen 2025, Yaqeen DoubleTake (Oduro), Q 49:11, Q 49:12, Q 3:159, Bukhari 6128, Bukhari 12, Research Notes - Retention and Convert Voices]
format: 2
---
# Day 48 · When Muslims let you down

### 1 · hook
```yaml
pic: icon:HeartCrack
text: "Maybe someone corrected you loudly after prayer. Maybe nobody said hello. Maybe you heard gossip, or saw a \"good Muslim\" act badly. If you've wondered, *\"If this is Islam, do I want it?\"*, today is for you."
```

### 2 · learn
```yaml
pic: icon:Users
text: "**You're not imagining it, and you're not alone.** In ISPU focus groups, one of the biggest turn-offs at mosques for converts, young people and women was being \"criticized, frowned upon, or rudely corrected\" [ISPU RMS]."
bubbles:
  - "And in a survey of 618 American converts, more than a third named intolerance from other Muslims as a source of doubt [Yaqeen 2025]."
```

### 3 · fill
```yaml
before: "In a survey of 618 American converts, more than"
after: "named intolerance from other Muslims as a source of doubt."
options:
  - text: "a third"
    correct: true
    feedback: "Yes, 37% [Yaqeen 2025]. If it's happened to you, you're far from the only one."
  - text: "a handful"
    correct: false
    feedback: "Not quite. It was more than a third, 37% [Yaqeen 2025]. You're far from the only one."
  - text: "nobody"
    correct: false
    feedback: "Not quite. More than a third said so [Yaqeen 2025]. You're far from the only one."
```

### 4 · learn
```yaml
pic: icon:Scale
text: "**Islam is the measure. Muslims are people trying to meet it.** Some do it well, some badly, and all of us fall short sometimes."
bubbles:
  - "Sh. Abdullah Oduro, a convert who leads Yaqeen's convert work, puts it this way: separate the doer from the doctrine [Yaqeen DoubleTake]."
```

### 5 · tap_words
```yaml
prompt: "When a Muslim acts badly, what's the rule?"
answer: "Judge the act by Islam, not Islam by the act"
extra: ["Muslims", "people", "feelings"]
feedback: "That's it. Islam is the standard; a person's behavior is measured against it."
```

### 6 · reveal
```yaml
title: "What happened vs. what Islam teaches"
cards:
  - front: "Someone laughed at how you pronounced the Arabic."
    back: "The Qur'an forbids mocking others: they may be better than the mocker [Q 49:11]. You're the one following Islam here."
    pic: icon:VolumeX
  - front: "Someone told everyone about a mistake you made."
    back: "Islam forbids backbiting and prying into others' faults [Q 49:12]."
    pic: icon:EyeOff
  - front: "Nobody greeted you at the masjid."
    back: "The Prophet ﷺ taught greeting both people you know and people you don't [Bukhari 12]. That's the standard, even when people miss it."
    pic: icon:Handshake
  - front: "Someone yelled at you for standing in the wrong spot."
    back: "That isn't the Prophet's way ﷺ (next screen)."
    pic: masjid
```

### 7 · learn
```yaml
pic: masjid
text: "**How the Prophet ﷺ corrected people.** A desert traveler once urinated inside the masjid. People rushed at him. The Prophet ﷺ told them to leave him alone, had the spot washed, and said: you were sent to make things easy, not hard [Bukhari 6128]."
bubbles:
  - "Allah told him that if he had been harsh, people would have scattered from him [Q 3:159]."
  - "Gentleness is the Sunnah. Harshness isn't."
```

### 8 · scenario
```yaml
pic: masjid
situation: "After Jumu'ah, a woman loudly tells Aaliyah her scarf is \"wrong\" in front of others. Aaliyah's face burns. On the drive home, she thinks, \"I'm never going back.\""
options:
  - text: "Let herself be upset, tell her mentor, and go back next week, maybe sitting with someone she trusts"
    best: true
    feedback: "Yes. Her hurt is valid. One person's rudeness doesn't get to take her masjid or her faith."
  - text: "Stop going to the masjid. The people there clearly aren't for her"
    best: false
    feedback: "Understandable, but not quite. One harsh person isn't the whole community, and isolation makes everything harder."
  - text: "Decide that if Muslims act like this, maybe Islam isn't true"
    best: false
    feedback: "Not quite. That woman's behavior went against Islam [Q 49:11]. Judge the act by Islam, not Islam by the act."
```

### 9 · learn
```yaml
pic: community
text: "**Don't write off the whole community.** Most Muslims you'll meet are kind, and many are newer to their faith than they look. A bad moment is often ignorance, not malice."
bubbles:
  - "Find your people: the friendly few, your mentor, other converts."
  - "If something is truly wrong (harassment, exploitation, abuse), tell {{mentor.name}} or the imam. Reporting harm isn't gossip."
```

### 10 · sort
```yaml
prompt: "Backbiting, or reporting harm?"
buckets: ["Backbiting", "Reporting harm"]
items:
  - text: "Telling friends about an embarrassing mistake someone made"
    bucket: 0
    why: "That spreads someone's faults, which Islam forbids [Q 49:12]."
  - text: "Telling the imam a man at the masjid keeps harassing you"
    bucket: 1
    why: "Telling someone who can stop harm isn't gossip. Say it plainly and factually."
  - text: "Telling {{mentor.name}} someone pressured you for money"
    bucket: 1
    why: "Exploitation is harm. Your mentor needs to know so it can be stopped."
  - text: "Joking in a group chat about how rude an uncle was"
    bucket: 0
    why: "That's airing someone's faults for no fix [Q 49:12]. If it hurt you, tell your mentor instead."
```

### 11 · reflect
```yaml
prompt: "Has a Muslim hurt or disappointed you? Write what happened, how it felt, and what Islam actually says about it. Then: who's one Muslim who has shown you what the faith looks like at its best?"
share_with_mentor: optional
```

### 12 · ask_ai
```yaml
chips:
  - "Someone at the masjid was rude to me. What do I do?"
  - "How can Muslims act like this if Islam is true?"
  - "How do I tell the imam about a problem without gossiping?"
  - "I don't feel welcome at my masjid"
```

### 13 · do_today
```yaml
pic: icon:Send
text: "Notice one Muslim who's been kind to you."
steps:
  - "Send a short thank-you to one Muslim who has been kind since you converted"
  - "Kindness grows when it's noticed"
log: null
optional_extra: "If something happened that still stings, tell {{mentor.name}} about it this week."
```

### 14 · takeaway
```yaml
pic: icon:Scale
text: "Muslims are people; Islam is the standard. Judge the act by Islam, not Islam by the act, and keep finding the people who live it well."
```

### 15 · closing
Someone else's bad day doesn't get to decide your faith.

---

## Check
```yaml
- prompt: "A Muslim mocks you at the masjid. What does Islam say about that?"
  options:
    - text: "Mocking others is forbidden. The mocker is the one going against Islam"
      correct: true
      feedback: "Right. The Qur'an forbids ridiculing others [Q 49:11]. Judge the act by Islam."
    - text: "It shows Islam allows people to be harsh"
      correct: false
      feedback: "Not quite. Islam forbids mockery [Q 49:11], and the Prophet ﷺ corrected people gently [Bukhari 6128]."
- prompt: "How did the Prophet ﷺ respond to the man who urinated in the masjid?"
  options:
    - text: "He stopped people from harming him and handled it gently"
      correct: true
      feedback: "Right. He said we were sent to make things easy, not hard [Bukhari 6128]."
    - text: "He told everyone to throw him out"
      correct: false
      feedback: "Not quite. He stopped the crowd, had the spot washed, and stayed gentle [Bukhari 6128]."
```

## AI guide context
**Lesson facts**
- ISPU's *Reimagining Muslim Spaces* focus groups (86 participants in DC, Detroit and the Bay Area) found being "criticized, frowned upon, or rudely corrected" at mosques was a major turn-off for young adults, women and converts [ISPU RMS; T1 Fact-Check Log #29–30: attribution confirmed, exact wording medium confidence].
- Yaqeen 2025 (n=618): intolerance of Muslims was a source of doubt for 37%; the report says converts' anguish comes overwhelmingly from Muslims' behavior, not doctrine [Yaqeen 2025].
- "Separate the doer from the doctrine": Sh. Abdullah Oduro on Yaqeen's DoubleTake podcast (V20).
- Islam forbids mockery [Q 49:11] and backbiting [Q 49:12]; greet those you know and don't [Bukhari 12]. The Prophet ﷺ handled the Bedouin gently: "you were sent to make things easy" [Bukhari 6128]. Harshness drives people away [Q 3:159].

**Likely questions**
- *"Someone was rude to me."* Validate first. Separate the act from Islam. Suggest telling the mentor, going back with a friend, and trying a different time or class. Don't attack the person.
- *"How can Muslims act like this if Islam is true?"* Muslims aren't Islam; every community has flawed people; the Qur'an itself warns believers against these behaviors, which shows they're wrong, not that Islam is. Take it seriously as a doubt (Day 33); never dismiss it.
- *"How do I report a problem?"* Telling the imam or mentor about harm, to fix it, isn't backbiting. Be factual. For anything involving abuse, exploitation or safety, use the safety rule.
- *"I don't feel welcome."* Ask what happened; suggest the mentor, convert groups, a different program or a nearby masjid; keep a path to community open.

**Escalate:** harassment, exploitation, financial or sexual misconduct, a mentor or leader behaving inappropriately (to the imam; and if the problem is the imam, to another staff member or a female staff member where requested); any danger (safety rule first).

**Don't**
- Don't trash the masjid, the community, any ethnic group or any named person.
- Don't tell the convert they're "too sensitive" or that they must tolerate mistreatment.
- Don't use this to argue that the convert's critic is a bad Muslim; focus on the act.

## Sources
- [ISPU, *Reimagining Muslim Spaces*](https://web.archive.org/web/2019/https://www.ispu.org/wp-content/uploads/2018/06/RMS_Creating-a-More-Welcoming-Mosque-for-Converts.pdf) (converts infographic; see also [ISPU, *10 Areas of Need*](https://ispu.org/reports-and-analysis/10-needs/)); [[T1 Fact-Check Log]] #29–30.
- [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam): intolerance of Muslims as a source of doubt (37%).
- [Yaqeen DoubleTake S3E3, "Are we failing new Muslims?"](https://yaqeeninstitute.org/watch/series/are-we-failing-new-muslims-doubletake-podcast) (Sh. Abdullah Oduro: separate the doer from the doctrine).
- Qur'an [49:11](https://quran.com/49/11), [49:12](https://quran.com/49/12), [3:159](https://quran.com/3/159).
- [Bukhari 6128](https://sunnah.com/bukhari:6128): the Bedouin in the masjid; "make things easy."
- [Bukhari 12](https://sunnah.com/bukhari:12): greet those you know and those you don't.
- [[Research Notes - Retention and Convert Voices]] (R1, R4, V20; theme 3: harsh or public correction).
