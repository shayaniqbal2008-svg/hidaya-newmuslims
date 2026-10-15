---
day: 69
phase: 3
unit: 8
title: "Anger and conflict"
hook: "Someone at the masjid corrects you rudely. Your mom mocks your prayer. Here's what to do in the next ten seconds."
minutes: 5
skills: [B1]
pain_points: [character]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, masjid, Dhuhr]
sources: [Bukhari 6116, Bukhari 6114, Bukhari 6115, Abu Dawud 4782, Bukhari 6018, Q 3:134, Q 41:34, Being Muslim (Spiritual Refinement)]
format: 2
---
# Day 69 · Anger and conflict

### 1 · hook
```yaml
pic: icon:Flame
text: "Everyone gets angry. Converts get extra chances: family who push your buttons, and sometimes Muslims who forget their manners. Today is a plan for the heat of the moment."
```

### 2 · learn
```yaml
pic: icon:Flame
text: "A man asked the Prophet ﷺ for advice. He said: **don't get angry.** The man asked again and again, and got the same answer every time [Bukhari 6116]."
bubbles:
  - "Feeling anger isn't a sin. Anger can even be right, at injustice [Being Muslim, Spiritual Refinement]. What counts is what you do next."
```

### 3 · tap_words
```yaml
prompt: "The Prophet ﷺ said real strength isn't overpowering people. Who is the strong one?"
answer: "The one who controls themselves when angry"
extra: ["wins", "fights", "loudest"]
feedback: "That's it [Bukhari 6114]. Self-control is the real strength."
```

### 4 · order
```yaml
prompt: "Anger is rising. Put these steps, drawn from the Prophet's teaching ﷺ, in a sensible order."
items:
  - "Notice it: \"I'm getting angry.\""
  - "Say *a'udhu billahi minash-shaytanir-rajim* (I seek refuge in Allah from Satan the outcast)"
  - "If you're standing, sit down; if that doesn't help, lie down"
  - "Stay quiet until it passes"
  - "Come back later, calm, to deal with the problem"
pics: ["icon:Thermometer", "icon:ShieldCheck", "icon:Armchair", "icon:MicOff", "icon:Clock"]
feedback: "Seeking refuge [Bukhari 6115], changing position [Abu Dawud 4782], and silence [Bukhari 6018] all come from his teaching."
```

### 5 · reveal
```yaml
title: "Why those steps work"
cards:
  - front: "Say *a'udhu billah*"
    back: "It breaks the spiral and turns you toward Allah [Bukhari 6115]."
    pic: icon:ShieldCheck
  - front: "Sit down, or lie down"
    back: "Changing position cools the body [Abu Dawud 4782]."
    pic: icon:Armchair
  - front: "Stay quiet"
    back: "Silence keeps you from saying what you can't take back: say good or stay quiet [Bukhari 6018]."
    pic: icon:MicOff
  - front: "Step away"
    back: "Stepping away isn't losing. You can always come back to the conversation. You can't un-say a cruel sentence."
    pic: icon:DoorOpen
```

### 6 · scenario
```yaml
pic: masjid
situation: "After Dhuhr at the masjid, an older man tells Marcus loudly, in front of others: \"Brother, your prayer is all wrong. Didn't anyone teach you?\" Marcus feels his face go hot."
options:
  - text: "Breathe, say \"Thanks, I'm still learning,\" and later ask his mentor to check his prayer"
    best: true
    feedback: "Yes. He keeps his dignity, cools things down, and still gets the correction checked by someone he trusts."
  - text: "Snap back: \"Mind your own business\""
    best: false
    feedback: "Understandable, but it turns a rude moment into a fight in the masjid. A calm reply ends it faster."
  - text: "Never go back to that masjid"
    best: false
    feedback: "Not quite. One rude person isn't the community. Don't let him take the masjid from you."
  - text: "Argue every point right there"
    best: false
    feedback: "Not quite. A heated debate in public rarely teaches anyone. Check it later, calmly."
```

### 7 · learn
```yaml
pic: icon:HeartHandshake
text: "**Pardon, without being a doormat.** Allah praises those who hold in their anger and pardon people; He loves those who do good [Q 3:134]."
bubbles:
  - "Pardoning doesn't mean pretending nothing happened. You can still set a boundary, ask someone to speak to you privately, or tell {{mentor.name}}."
  - "And masjids are full of people still working on themselves. Including you."
  - "Someone's anger involves threats or makes you feel unsafe? That's not for patience: call 911 if you're in danger, and tell {{mentor.name}}."
```

### 8 · scenario
```yaml
pic: prayer-mat
situation: "Destiny's mom, stressed after work, mocks her as she lays out her prayer mat: \"There she goes again with her little routine.\""
options:
  - text: "Pray calmly, then later, when things are quiet, tell her gently that it hurt and ask how her day was"
    best: true
    feedback: "Yes. She protects her prayer and her relationship, and raises it when both are calm."
  - text: "Fire back about her mom's own habits"
    best: false
    feedback: "Not quite. It wins a moment and starts a war. Answering with something better works far better [Q 41:34]."
  - text: "Skip the prayer to avoid the comments"
    best: false
    feedback: "Not quite. The prayer is still due. Find a quieter spot or time if you need to, but pray."
```

### 9 · reflect
```yaml
prompt: "What usually sets you off: a person, a topic, being tired or hungry? Write it down, then pick which of today's tools you'll try first next time."
share_with_mentor: optional
```

### 10 · ask_ai
```yaml
chips:
  - "What if I'm angry at someone at the masjid and can't let it go?"
  - "How do I apologize after I lost my temper?"
  - "Is it wrong to be angry at injustice?"
  - "My family argues all the time. How do I stay calm?"
```

### 11 · do_today
```yaml
pic: icon:ShieldCheck
text: "Set up your anger reset."
steps:
  - "Memorize *a'udhu billahi minash-shaytanir-rajim* as your anger reset"
  - "Next time you feel heat rising, say it and stay quiet for ten seconds"
log: null
optional_extra: "Is there someone you snapped at recently? Apologize today, briefly and sincerely."
```

### 12 · takeaway
```yaml
pic: icon:Shield
text: "Real strength is controlling yourself when angry. Seek refuge in Allah, sit down, stay quiet, and come back to the problem calm."
```

### 13 · closing
Every time you hold your tongue in anger, you're getting stronger.

---

## Check
```yaml
- prompt: "Who did the Prophet ﷺ call truly strong?"
  options:
    - text: "The one who controls themselves when angry"
      correct: true
      feedback: "Right [Bukhari 6114]. Self-control is the real strength."
    - text: "The one who wins every argument"
      correct: false
      feedback: "Not quite. The strong one controls themselves when angry [Bukhari 6114]."
- prompt: "You're standing and getting angry. What did the Prophet ﷺ advise?"
  options:
    - text: "Sit down, and if it doesn't pass, lie down"
      correct: true
      feedback: "Right [Abu Dawud 4782]. Changing position helps the anger cool."
    - text: "Say what you feel right away so it doesn't build up"
      correct: false
      feedback: "Not quite. He advised changing position and staying quiet first [Abu Dawud 4782; Bukhari 6018]."
```

## AI guide context
**Lesson facts**
- Asked for advice, the Prophet ﷺ told a man not to get angry, and repeated it each time he asked again [Bukhari 6116].
- The strong one controls himself in anger [Bukhari 6114].
- Seeking refuge in Allah from Satan removes anger [Bukhari 6115]; if standing, sit; if it persists, lie down [Abu Dawud 4782, sahih per al-Albani].
- Say good or stay silent [Bukhari 6018]. Restrain anger and pardon [Q 3:134]; repel bad with better [Q 41:34].
- Anger has a balanced place: rage is a vice, but appropriate anger at injustice can be right [Being Muslim, Spiritual Refinement].

**Likely questions**
- *"I can't let go of anger at someone at the masjid."* Validate; suggest du'a for the person, some distance, and talking to the mentor or imam if it involves real mistreatment. Pardon is rewarded but not forced.
- *"How do I apologize?"* Short, specific, no "but": "I'm sorry I snapped. That wasn't fair to you."
- *"Anger at injustice?"* It can be right; channel it into just action and calm words, not cruelty.
- *"Family argues constantly."* Use the tools, step away, pick calm times for real talks; link Days 14, 35 and 65.
- *"Does anger break wudu?"* No. (Hanafi: loud laughter in salah breaks wudu, but anger and shouting don't.) Don't overload.

**Escalate:** conflict with masjid staff or leaders, or mistreatment at the masjid (mentor/imam). **Safety first:** if anyone's anger, at home or elsewhere, involves threats, violence or fear, follow the safety rule (crisis resources, consent-based alert). If the convert fears their own anger could hurt someone, respond with care and point to professional help.

**Don't**
- Don't tell a convert to "just be patient" with abuse.
- Don't play or describe imams or scholars as the angry party in examples; keep characters as ordinary community members (Spec §6.2 rule 13).

## Sources
- [Bukhari 6116](https://sunnah.com/bukhari:6116): advice not to get angry, repeated.
- [Bukhari 6114](https://sunnah.com/bukhari:6114): the strong one controls himself in anger.
- [Bukhari 6115](https://sunnah.com/bukhari:6115): seeking refuge in Allah removes anger.
- [Abu Dawud 4782](https://sunnah.com/abudawud:4782): if angry while standing, sit; then lie down (sahih, al-Albani).
- [Bukhari 6018](https://sunnah.com/bukhari:6018): say good or stay silent.
- Qur'an [3:134](https://quran.com/3/134), [41:34](https://quran.com/41/34).
- [[Source - Being Muslim a Practical Guide]], Spiritual Refinement (the balance of anger).
