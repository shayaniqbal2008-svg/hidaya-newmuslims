---
track: seerah
order: 30
phase: null
unit: null
title: "Letters to kings"
hook: "A man who couldn't read sent letters to the emperors of Rome and Persia."
minutes: 6
skills: [T2, T3, B6]
pain_points: [conversations, christian-family, family]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Qur'an, Quraysh, Abyssinia]
sources: [Muslim 1774, Bukhari 7, Bukhari 64, Bukhari 2731, Q 3:64, Q 7:157, Q 16:125, IslamQA 11575]
format: 2
---
# seerah-30 · Letters to kings

### 1 · hook
```yaml
pic: icon:Mail
text: "**A man who couldn't read sent letters to emperors.** Persia, Byzantium, Abyssinia. Each letter was short, polite and clear. This episode is about inviting people to Allah without raising your voice."
```

### 2 · learn
```yaml
pic: icon:ScrollText
text: "**Letters to the powerful.** During the truce after Hudaybiyah, the Prophet ﷺ sent letters to rulers: Khosrau of Persia, Caesar of Byzantium, the Negus of Abyssinia and others. Each one invited its reader to Allah [Muslim 1774]."
bubbles:
  - "He never learned to read or write. The Qur'an calls him *\"the unlettered prophet\"* [Q 7:157, Saheeh Intl.]."
```

### 3 · reveal
```yaml
title: "Three rulers, three letters"
cards:
  - front: "Caesar (Heraclius) of Byzantium"
    back: "He had the letter read out, and first questioned Makkan traders about the man who sent it [Bukhari 7]."
    pic: icon:Landmark
  - front: "Khosrau of Persia"
    back: "He tore the letter up [Bukhari 64]."
    pic: icon:Flame
  - front: "The Negus of Abyssinia"
    back: "Also invited. The hadith notes this was a different Negus from the king who sheltered the Muslims years before [Muslim 1774]."
    pic: icon:Crown
```

### 4 · learn
```yaml
pic: icon:Scale
text: "**An enemy under questioning.** Heraclius called in Abu Sufyan, a Makkan leader trading in Syria and still an enemy. He asked about the Prophet's ﷺ family, his followers and his honesty. Abu Sufyan later admitted he'd have lied if his companions couldn't have exposed him [Bukhari 7]."
bubbles:
  - "Asked if he had ever lied, Abu Sufyan had to say no. Heraclius reasoned that a man who won't lie about people won't lie about Allah [Bukhari 7]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Where we are"
text: "A truce opens a door, and letters go out."
events:
  - when: "6 AH"
    title: "The truce of Hudaybiyah"
    text: "A peace treaty with Quraysh, after years of war [Bukhari 2731]."
    pic: icon:Handshake
  - when: "During the truce"
    title: "Letters go out"
    text: "To Khosrau, Caesar, the Negus and other rulers [Muslim 1774]."
    pic: icon:Mail
  - when: "During the truce"
    title: "Questions in Syria"
    text: "Heraclius questions Abu Sufyan, then reads the letter [Bukhari 7]."
    pic: icon:Landmark
  - when: "Around then"
    title: "A torn letter"
    text: "Khosrau rips his letter apart [Bukhari 64]."
    pic: icon:Flame
  - when: "7 AH"
    title: "Next: Khaybar"
    text: "A fortress town north of Madinah [IslamQA 11575]."
    pic: icon:Castle
```

### 6 · learn
```yaml
pic: icon:PenLine
text: "**Short, clear, courteous.** The letter to Heraclius opened in Allah's name. He signed it as Allah's servant and messenger, wished peace on whoever follows guidance, and invited the emperor to Islam [Bukhari 7]."
bubbles:
  - "It closed with a verse: *\"come to a word that is equitable between us and you - that we will not worship except Allah\"* [Q 3:64, Saheeh Intl.]."
```

### 7 · fill
```yaml
before: "\"Come to a word that is"
after: "between us and you\" [Q 3:64]"
options:
  - text: "equitable"
    correct: true
    feedback: "Yes. Fair to both sides: an invitation to common ground, worshipping Allah alone."
  - text: "hidden"
    correct: false
    feedback: "Not quite. The verse calls it equitable: fair and shared, said openly to an emperor."
  - text: "frightening"
    correct: false
    feedback: "Not quite. It's an invitation to common ground, a word that is equitable between us and you."
```

### 8 · learn
```yaml
pic: conversation
text: "**Invite the way he did.** In Day 71 you met the verse about inviting *\"with wisdom and good instruction\"* [Q 16:125, Saheeh Intl.]. His letters show what that looks like: short, respectful, about Allah, not about winning."
bubbles:
  - "One letter was torn up and another read with care. The invitation was equally kind either way [Bukhari 64; Bukhari 7]. Your family deserves that courtesy too."
```

### 9 · scenario
```yaml
pic: family
situation: "Hannah's dad is a deacon at his church. A little hurt, he asks her to explain what she believes now. She wants to answer well, and she's nervous."
options:
  - text: "Write him a short, warm note: she believes in one God, honours Jesus as a prophet, and loves her dad as much as ever"
    best: true
    feedback: "Yes. Short, clear and kind, like the letters. It answers him and leaves the door open."
  - text: "Send him a long list of what's wrong with his church's teaching"
    best: false
    feedback: "Not quite. She's asked to invite with wisdom, not to attack what her dad holds dear [Q 16:125]."
  - text: "Avoid the subject forever so nobody gets upset"
    best: false
    feedback: "Not quite. She needn't say everything now, but a kind, honest answer respects him more than silence."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Abu Sufyan?"
  - "Why write to emperors at all?"
  - "What did Heraclius do after the letter?"
  - "How do I explain Islam to my parents?"
```

### 11 · reflect
```yaml
prompt: "Who would you most love to share Islam with? What would a short, kind first sentence to them sound like?"
share_with_mentor: optional
```

### 12 · do_today
```yaml
pic: icon:PenLine
text: "Draft your own short letter."
steps:
  - "Write three kind sentences about what you believe, for one person you love"
  - "Keep it for now, or share it only if it feels right"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Mail
text: "He invited emperors with a short, respectful letter. You can invite the people you love the same way: calmly, clearly, and kindly."
```

### 14 · closing
Next episode: Khaybar, a flag for a man with sore eyes, and a meal that was poisoned.

---

## Check
```yaml
- prompt: "Heraclius asked whether the nobles or the poor followed him. What did Abu Sufyan say?"
  options:
    - text: "Mostly the poor"
      correct: true
      feedback: "Right. Heraclius said the followers of prophets had always been like that [Bukhari 7]."
    - text: "Mostly kings and nobles"
      correct: false
      feedback: "Not quite. Abu Sufyan admitted it was mostly the poor, and that their numbers kept growing [Bukhari 7]."
- prompt: "How did the letter to Heraclius end?"
  options:
    - text: "With a verse inviting him to a word that is equitable: worship Allah alone"
      correct: true
      feedback: "Right. Q 3:64: common ground, said with courtesy, even to an emperor."
    - text: "With a threat of war"
      correct: false
      feedback: "Not quite. It ended with an invitation to common ground: to worship none but Allah [Q 3:64]."
```

## AI guide context
**Lesson facts**
- During the truce after Hudaybiyah, the Prophet ﷺ wrote to Khosrau (Persia), Caesar (Byzantium), the Negus and other rulers, inviting them to Allah [Muslim 1774]. Muslim 1774 notes this Negus was not the one he later prayed the funeral prayer over.
- He was unlettered: he could not read or write [Q 7:157; Bukhari 3 ("I am not a reader")].
- Heraclius summoned Abu Sufyan, then an enemy trading in Syria with other Quraysh, and asked about his lineage, followers (mostly the poor, and growing), whether any left the religion, whether he had lied or broken promises (no), and what he commanded: worship Allah alone, prayer, truthfulness, chastity and family ties. Abu Sufyan said he would have lied if his companions could not have contradicted him. Heraclius reasoned that a man who doesn't lie about people wouldn't lie about Allah [Bukhari 7].
- The letter, carried by Dihyah, opened with the Bismillah, named the sender as Allah's servant and messenger, greeted with peace whoever follows guidance, invited Heraclius to Islam, and ended with Q 3:64 [Bukhari 7].
- Khosrau tore his letter up [Bukhari 64].
- Abu Sufyan himself later accepted Islam (end of Bukhari 7; seerah-33).

**Likely questions**
- *"What did Heraclius do?"* Bukhari 7 reports he was impressed and urged his nobles to follow the Prophet ﷺ, but when they reacted angrily he backed down, saying he had only been testing them. Tell it plainly; don't speculate about his inner state or fate.
- *"Didn't he pray against Khosrau?"* Bukhari 64 adds a line about a du'a against them, but the sub-narrator presents it as his recollection of what someone else said. This track leaves it out. If asked, say that honestly and keep the focus on the invitation.
- *"Are the letters in museums real?"* The program's sources don't cover the authenticity of artefacts; say so, and offer the imam or a historian.
- *"How do I explain Islam to my parents?"* Point to Day 71 and Q 16:125: short, kind, honest, at the right time, about Allah and not about winning. Respect their faith; never compare it to idolatry. If the convert isn't public yet or is a teen at home, follow the privacy rule and suggest talking to the mentor first.
- *"Why write to emperors at all?"* His message was for everyone [Q 7:157 describes him as the messenger foretold to the People of the Book]; the letters were invitations, not ultimatums, ending with Q 3:64.

**Escalate:** a convert in conflict or danger at home over their faith (safety rule); questions about modern politics or empires (keep to the history).

**Don't**
- Don't present the letters as threats, and don't mock the rulers or their faiths.
- Don't put the Bukhari 64 du'a line on any screen or quote it as his words.
- Don't comment on museum artefacts.
- Don't pressure the convert to "give da'wah" to family before they're ready.

## Sources
- Qur'an [3:64](https://quran.com/3/64) (a word equitable between us and you), [7:157](https://quran.com/7/157) (the unlettered prophet), [16:125](https://quran.com/16/125) (invite with wisdom).
- [Muslim 1774](https://sunnah.com/muslim:1774) (Sahih; the first narration, which adds that this Negus was not the one he prayed over): letters to Khosrau, Caesar, the Negus and other rulers.
- [Bukhari 7](https://sunnah.com/bukhari:7) (Sahih): Heraclius questions Abu Sufyan; the letter carried by Dihyah, ending with Q 3:64.
- [Bukhari 64](https://sunnah.com/bukhari:64) (Sahih): Khosrau tears up his letter.
- [Bukhari 2731](https://sunnah.com/bukhari:2731) (Sahih): the treaty of Hudaybiyah.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): Khaybar in 7 AH (next episode).
- Fact rows 30.1–30.4 and 30.5–30.8 (added 2026-10-09) in [[Seerah Fact-Check Log]].
