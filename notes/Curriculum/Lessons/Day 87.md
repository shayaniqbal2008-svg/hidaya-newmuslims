---
day: 87
phase: 3
unit: 10
title: "Your people"
hook: "An app can't hug you on Eid. Today you map the people who can."
minutes: 5
skills: [B2, B3]
pain_points: [loneliness]
logs: [reached_out_to_community]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, imam, halaqa, Eid, Ramadan, iftar, salam, ﷺ]
sources: [Bukhari 481, Q 31:15, Abu Dawud 4833, Yaqeen 2025, Research Notes - Retention and Convert Voices, Field Guide ch. 11 and 12]
format: 2
---
# Day 87 · Your people

# Day 87 · Your people

### 1 · hook
```yaml
pic: community
text: "Three days to Day 90. This app has been with you every day, but it can't sit next to you at iftar or hug you on Eid. People can. Today you map who yours are, and who you'll call."
```

### 2 · multi
```yaml
prompt: "A large study of American converts asked what helps faith grow [Yaqeen 2025]. Which were the strongest supports? Tap all that apply."
options:
  - text: "Muslim friends"
    correct: true
    feedback: "Yes. Friends who share your faith were one of the strongest supports."
  - text: "A connection to a masjid"
    correct: true
    feedback: "Yes. Belonging to a masjid helps faith grow."
  - text: "A good imam"
    correct: true
    feedback: "Yes. A good imam was one of the three strongest supports."
  - text: "Studying alone as much as possible"
    correct: false
    feedback: "Not quite. Learning helps, but people made the biggest difference: friends, a masjid and a good imam."
```

### 3 · learn
```yaml
pic: icon:HeartHandshake
text: "**People keep faith alive.** The Prophet ﷺ described believers as bricks in one wall, each holding the others up [Bukhari 481]. You were never meant to do this alone."
```

### 4 · reveal
```yaml
title: "Your community map has four rings. Tap each one."
cards:
  - front: "1. Your guide"
    back: "{{mentor.name}} or the imam, for questions and hard days."
    pic: icon:UserCheck
  - front: "2. Your friends"
    back: "One or two Muslims you can text, eat with, pray next to."
    pic: icon:Users
  - front: "3. Your places"
    back: "The masjid, a weekly class or study circle (*halaqa*), a volunteer spot."
    pic: masjid
  - front: "4. Your family and old friends"
    back: "They still count. Keep them close and be kind [Q 31:15]."
    pic: family
```

### 5 · match
```yaml
prompt: "Match each moment to who you'd turn to."
pairs:
  - left: "A question about your prayer"
    right: "Your mentor or imam"
  - left: "A lonely Friday night"
    right: "A Muslim friend"
  - left: "Eid morning"
    right: "Your masjid, or a family who invited you"
  - left: "Your mom's birthday"
    right: "Your family, as always"
```

### 6 · reflect
```yaml
prompt: "Draw your community map. Write the names (or places) in each ring: guide, friends, places, family. Compare it with the circle you drew on Day 18. Which ring has grown? Which one is thin, and who could fill it?"
share_with_mentor: optional
resurface: [day-18]
```

### 7 · learn
```yaml
pic: crescent
text: "**Plan for the hard days now.** About four in ten converts feel lonely during Ramadan or Eid [Yaqeen 2025]. Don't wait to be invited: ask someone this month, \"Where are you for Eid? Can I come?\""
bubbles:
  - "A real friend makes your faith easier, not your life smaller."
```

### 8 · sort
```yaml
prompt: "Real community, or a red flag to tell {{mentor.name}} about?"
buckets: ["Real community", "Red flag"]
items:
  - text: "A sister or brother from class invites you to iftar with their family"
    bucket: 0
    why: "That's community: someone making your faith easier and your circle bigger."
  - text: "Someone says you should stop seeing your family now that you're Muslim"
    bucket: 1
    why: "Pushing you toward isolation isn't community. Tell {{mentor.name}}."
  - text: "Someone you just met keeps urging you to get married quickly"
    bucket: 1
    why: "Pressure toward a quick marriage isn't community. Tell {{mentor.name}}."
  - text: "A friend saves you a seat at the weekly class"
    bucket: 0
    why: "That's what real friends do: they make showing up easier."
  - text: "Someone at the masjid keeps asking you for money"
    bucket: 1
    why: "Pressure about money isn't community. Tell {{mentor.name}}."
```

### 9 · scenario
```yaml
pic: masjid
situation: "Luis has gone to the masjid for weeks, but he leaves right after the prayer and still doesn't know anyone. What's his best next step?"
options:
  - text: "Join the weekly class or a volunteer shift, and stay ten minutes after one prayer to say salam"
    best: true
    feedback: "Yes. Classes and volunteering put him next to the same faces every week. That's how friendships start."
  - text: "Keep coming and wait for someone to approach him"
    best: false
    feedback: "Not quite. Some people will, but many are shy too. One small step from him speeds it up."
  - text: "Give up on the masjid and stick to online groups"
    best: false
    feedback: "Online can help, but it can't replace faces you see each week. Friends at the masjid are a big protector."
```

### 10 · learn
```yaml
pic: icon:Users
text: "**Choose your company with care.** The Prophet ﷺ said a person tends to follow the ways of their close friend, so look carefully at who that is [Abu Dawud 4833]."
bubbles:
  - "That doesn't mean dropping old friends. It means making sure some of your closest people help you pray, not skip it."
  - "{teen}**Under 18?** Meet people at masjid events and classes, in public spaces, and keep {{mentor.name}} in the loop.{/teen}"
```

### 11 · ask_ai
```yaml
chips:
  - "How do I make Muslim friends as an adult?"
  - "I feel like an outsider at my masjid"
  - "Where can I spend Eid if I have nowhere to go?"
  - "Help me write a message to someone from class"
```

### 12 · do_today
```yaml
pic: icon:MessageCircle
text: "Reach out to one person on your map today."
steps:
  - "Pick one name from your map"
  - "Send a text, grab a coffee, or ask them to \"save me a seat at the class\""
  - "Tick this when you've done it"
log: reached_out_to_community
optional_extra: "Ask a Muslim friend or {{mentor.name}} where they'll be for the next Eid."
```

### 13 · takeaway
```yaml
pic: community
text: "Faith grows with people. Know your guide, your friends, your places and your family, and reach out first."
```

### 14 · closing
You came in alone, maybe. You don't have to stay that way.

---

## Check
```yaml
- prompt: "What did research find helps converts grow in faith the most?"
  options:
    - text: "Muslim friends, a connection to a masjid, and a good imam"
      correct: true
      feedback: "Right. People matter most. That's why your community map matters."
    - text: "Studying alone as much as possible"
      correct: false
      feedback: "Not quite. Learning helps, but friends, a masjid and a good imam made the biggest difference."
- prompt: "Does building a Muslim community mean dropping your family and old friends?"
  options:
    - text: "No. Keep them close and be kind; they're part of your map"
      correct: true
      feedback: "Right. Islam asks you to keep good ties with family [Q 31:15]."
    - text: "Yes, you need a fresh start"
      correct: false
      feedback: "Not quite. Islam never asks you to cut off family. Add to your circle; don't shrink it."
```

## AI guide context
**Lesson facts**
- Religious Muslim friends, attachment to a masjid and a capable imam were the strongest predictors of converts' faith growing; about 40% felt lonely in Ramadan or Eid; 78% made friends at the masjid [Yaqeen 2025, via Research Notes - Retention R1].
- Believers support each other like bricks in a wall [Bukhari 481].
- Keep kind ties with family, even when they don't share your faith [Q 31:15].
- A person tends to follow their close friend's way, so choose closest friends carefully [Abu Dawud 4833]. This doesn't mean cutting off non-Muslim friends.
- The community map: guide (mentor/imam), friends, places (masjid, class, volunteering), family and old friends.

**Likely questions**
- *"How do I make Muslim friends as an adult?"* Same faces every week: one class, one volunteer shift, staying after one prayer. Suggest one concrete step and offer to draft a message.
- *"I feel like an outsider at my masjid."* Validate it; it's common, especially at masjids organized around one culture. Suggest the mentor, a convert circle if the masjid has one, or another nearby masjid's class. Route harsh treatment to the mentor.
- *"I have nowhere to go for Eid."* Encourage asking the mentor or a friend now; many families welcome guests. The masjid's Eid prayer is open to all. Don't invent events.
- *"My old friends don't get it."* Keep the good ones; be kind; step back only from what pulls you away from your faith.

**Escalate:** anyone pressuring the convert into marriage, money or cutting off family (route to the mentor, Spec §6.2 rule 12); being thrown out or unsafe at home (safety rule first).

**Don't**
- Don't tell anyone to cut off family or non-Muslim friends.
- Don't promise specific events, classes or families at the masjid.
- For under-18s: suggest only public masjid settings and mentor-included contact, per safeguarding.

## Sources
- [Bukhari 481](https://sunnah.com/bukhari:481): believers are like a building whose parts hold each other up.
- Qur'an [31:15](https://quran.com/31/15): keep company with your parents in this world with kindness.
- [Abu Dawud 4833](https://sunnah.com/abudawud:4833) (hasan, al-Albani): a person follows the way of their close friend.
- Yaqeen Institute, *Becoming Muslim: The Lives of American Converts to Islam* (2025), via [[Research Notes - Retention and Convert Voices]] R1: protective factors; loneliness in Ramadan and Eid.
- [[Research Notes - Retention and Convert Voices]]: isolation after the shahada; friends and masjid attachment as protective factors.
- [[Source - The New Muslims Field Guide]] ch. 11 (the masjid), ch. 12 (the company you keep).
