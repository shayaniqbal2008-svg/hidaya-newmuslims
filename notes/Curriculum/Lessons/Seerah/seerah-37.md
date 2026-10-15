---
track: seerah
order: 37
phase: null
unit: null
title: "The Farewell Pilgrimage"
hook: "One Hajj, one sermon, and a verse that said the religion was complete."
minutes: 6
skills: [T2, B6]
pain_points: [overwhelm, character]
logs: []
madhab_sensitive: false
scholar_flags: [Q45]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Hajj, Arafah, Dhul Hijjah, du'a, adhan]
sources: [Muslim 1218, Bukhari 1739, Bukhari 45, Q 5:3, Q 49:13, Q 4:19, Q 3:31, Muslim 2328, IslamQA 11575]
format: 2
---
# seerah-37 · The Farewell Pilgrimage

### 1 · hook
```yaml
pic: kaaba
text: "**One Hajj. One sermon. One verse that said the religion was complete.** In 10 AH a great crowd gathered to watch how he did it, and to hear what he would say."
```

### 2 · learn
```yaml
pic: icon:Users
text: "**His only Hajj.** In 10 AH the Prophet ﷺ announced he would perform Hajj. A great crowd came to Madinah, all wanting to do exactly as he did [Muslim 1218]. It was his only Hajj after the hijra: the Farewell Pilgrimage [IslamQA 11575]."
bubbles:
  - "Day 47 showed you Hajj. This is the one Muslims have learned from ever since."
```

### 3 · widget
```yaml
widget: moon
prompt: "Hajj falls in Dhul Hijjah, the last month of the Islamic year. Drag through the month: the day of 'Arafah is the ninth [Muslim 1218]."
```

### 4 · learn
```yaml
pic: icon:Scale
text: "**Sacred, like this day.** At 'Arafah he addressed the crowd: your blood and your property are as sacred as this day, in this month, in this town [Muslim 1218]. Another report adds your honour too [Bukhari 1739]."
bubbles:
  - "He cancelled the old blood feuds and the usury of the days before Islam, starting with claims belonging to his own family [Muslim 1218]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Where we are"
text: "The last year of his life begins."
events:
  - when: "9 AH"
    title: "The delegations"
    text: "Tribes from across Arabia come to meet him [IslamQA 11575]."
    pic: icon:Users
  - when: "10 AH"
    title: "He announces Hajj"
    text: "A great crowd gathers to follow him [Muslim 1218]."
    pic: icon:Megaphone
  - when: "9 Dhul Hijjah"
    title: "The sermon at 'Arafah"
    text: "Life, property and honour are sacred [Muslim 1218; Bukhari 1739]."
    pic: icon:Mountain
  - when: "At 'Arafah"
    title: "A verse comes down"
    text: "\"This day I have perfected for you your religion\" [Q 5:3; Bukhari 45]."
    pic: quran
  - when: "11 AH"
    title: "Next: his last days"
    text: "Back in Madinah, he falls ill."
    pic: icon:Bed
```

### 6 · learn
```yaml
pic: quran
text: "**Rights, and a Book.** He told the people to fear Allah concerning women, and named women's rights over their husbands [Muslim 1218]. `[SCHOLAR: Q45]` He said he was leaving them the Book of Allah: hold fast to it and you won't go astray [Muslim 1218]."
bubbles:
  - "Then he asked what they would say about him. They said he had conveyed the message. Pointing upward, he said three times: O Allah, be witness [Muslim 1218]."
```

### 7 · order
```yaml
prompt: "Put his day at 'Arafah in order [Muslim 1218]."
items:
  - "He arrives at 'Arafah, where a tent is ready for him"
  - "He addresses the crowd from the valley"
  - "Bilal calls the adhan, and he leads Dhuhr, then 'Asr"
  - "He stands facing the qibla in du'a until sunset"
feedback: "A sermon, two prayers together, then du'a until the sun went down. Pilgrims still follow that day [Muslim 1218]."
```

### 8 · learn
```yaml
pic: quran
text: "**Complete.** At 'Arafah, on a Friday, Allah revealed: *\"This day I have perfected for you your religion and completed My favor upon you\"* [Q 5:3, Saheeh Intl.; Bukhari 45]. Nothing is missing from what you accepted. And you don't need all of it at once to belong."
```

### 9 · choice
```yaml
pic: icon:CircleCheck
prompt: "Allah called the religion perfected. What does that mean for a new Muslim?"
options:
  - text: "Nothing needs to be added; I can grow into it one step at a time"
    correct: true
    feedback: "Right. The religion is complete. Your learning is a lifelong path, and every step counts."
  - text: "I must master all of it before I really count as Muslim"
    correct: false
    feedback: "Not quite. The religion is complete; you don't have to be. Struggling and learning is still Islam."
  - text: "I should look for extra practices to make it better"
    correct: false
    feedback: "Not quite. Allah called it perfected. Following what he taught is enough [Q 5:3]."
```

### 10 · scenario
```yaml
pic: conversation
situation: "Maria's work group chat starts passing around screenshots mocking a coworker's private life. Everyone's adding laughing emojis. Maria's been Muslim a month."
options:
  - text: "Don't share or react, and say kindly that it's not fair to her"
    best: true
    feedback: "Yes. He called people's honour sacred [Bukhari 1739]. Protecting someone who isn't there is part of that."
  - text: "Add an emoji so she doesn't seem stuck-up"
    best: false
    feedback: "Not quite. A small reaction still joins in. Her honour is sacred, even in a chat [Bukhari 1739]."
  - text: "Screenshot the chat and post it to shame the group"
    best: false
    feedback: "Not quite. That spreads it further. A calm word protects her without new harm."
```

### 11 · ask_ai
```yaml
chips:
  - "What is the day of 'Arafah?"
  - "What does \"I leave you the Book of Allah\" mean?"
  - "Why was this his only Hajj?"
  - "Could I go on Hajj one day?"
```

### 12 · do_today
```yaml
pic: icon:Shield
text: "Treat someone's honour as sacred today."
steps:
  - "Say nothing about anyone that you wouldn't say in front of them"
  - "If a conversation turns to gossip, change the subject kindly"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Mountain
text: "At 'Arafah he made every person's life, property and honour sacred, and Allah called the religion complete. Nothing is missing from what you've accepted."
```

### 14 · closing
Next episode: his last days. Too weak to lead the prayer, he sent for Abu Bakr.

---

## Check
```yaml
- prompt: "At 'Arafah, what did he say was as sacred as that day, month and town?"
  options:
    - text: "People's blood and property, and their honour"
      correct: true
      feedback: "Right. Every person's life, property and honour [Muslim 1218; Bukhari 1739]."
    - text: "Only the Ka'bah"
      correct: false
      feedback: "Not quite. He said people's blood and property are that sacred, and their honour [Muslim 1218; Bukhari 1739]."
- prompt: "What verse was revealed at 'Arafah?"
  options:
    - text: "This day I have perfected for you your religion"
      correct: true
      feedback: "Right. Q 5:3, revealed on a Friday at 'Arafah [Bukhari 45]."
    - text: "Read in the name of your Lord"
      correct: false
      feedback: "Not quite. That was the first revelation, at Hira. At 'Arafah it was Q 5:3 [Bukhari 45]."
```

## AI guide context
**Lesson facts**
- In the tenth year he announced Hajj; a large number came to Madinah wanting to follow him and do as he did [Muslim 1218, Jabir's long narration]. It was his only Hajj after the hijra, called the Farewell Pilgrimage [IslamQA 11575]. Say "a great crowd" (100,000+ is sirah only).
- At 'Arafah, in the valley, he said: your blood and your property are sacred like this day, this month, this town; the matters of the days of ignorance are abolished, including blood revenge (starting with the claim for the son of Rabi'ah ibn al-Harith) and usury (starting with al-'Abbas's); fear Allah concerning women; women's rights to provision and clothing in a fitting manner; I have left among you the Book of Allah, and if you hold to it you will not go astray; they bore witness he had conveyed the message; he pointed upward and said, O Allah, be witness, three times. Bilal then called the adhan and he led Dhuhr and 'Asr together, then stood in du'a facing the qiblah until sunset [Muslim 1218]. The day of Tarwiyah (8 Dhul Hijjah) came before 'Arafah [Muslim 1218].
- On the Day of Sacrifice he asked what day, town and month it was and said blood, property and honour are sacred; he told those present to convey it to those absent [Bukhari 1739].
- Q 5:3 ("This day I have perfected for you your religion…") was revealed at 'Arafah on a Friday [Bukhari 45]. Day 47 and the hajj modules cover Hajj and 'Arafah.

**Likely questions**
- *"What did he say about women in the sermon? Doesn't it mention hitting?"* Answer honestly and calmly: the same passage in Muslim 1218 gives husbands a right regarding who enters the home and mentions discipline "not severely" if that's violated. Scholars explain it within strict limits. Point to Q 4:19 ("live with them in kindness") and his own conduct: he never struck a woman [Muslim 2328]. Abuse is never permitted; if the convert is in an unsafe situation, the safety rule comes first. Detailed questions go to the imam. `[SCHOLAR: Q45]`
- *"Didn't he say no Arab is better than a non-Arab?"* That well-known line is in a report from Musnad Ahmad, outside the six collections this program cites, so we don't quote it as hadith. The same idea is in the Qur'an: the most noble of you in Allah's sight is the most righteous [Q 49:13].
- *"Didn't he say 'I leave you the Qur'an and my Sunnah'?"* That wording comes from another collection (al-Muwatta'). In Muslim 1218 he says "the Book of Allah". Following his Sunnah is still part of following the Qur'an (Q 3:31; seerah-41); don't turn this into a debate.
- *"Usury? I have a student loan."* Day 53 covers interest and existing debt gently; for their situation, the imam (Q24 territory: don't rule here).
- *"Could I go on Hajj one day?"* Yes, in sha Allah: Day 47 explains who it's due on and how to prepare.

**Escalate:** any sign of domestic abuse (safety rule, never only the imam); existing interest-bearing debt (imam); detailed questions on the sermon's discipline line (Q45, imam).

**Don't**
- Don't quote the discipline line on your own initiative, and don't put it on a screen. `[SCHOLAR: Q45]`
- Don't quote "No Arab is superior…" or "the Qur'an and my Sunnah" as hadith.
- Don't give crowd sizes or exact dates beyond 9 Dhul Hijjah for 'Arafah.

## Sources
- Qur'an [5:3](https://quran.com/5/3) (the religion perfected), [49:13](https://quran.com/49/13) (the most noble is the most righteous; AI guide), [4:19](https://quran.com/4/19) (live with them in kindness; AI guide), [3:31](https://quran.com/3/31) (follow him; AI guide).
- [Muslim 1218](https://sunnah.com/muslim:1218) (Sahih; Jabir's long narration of the Farewell Hajj): the crowd, the sermon at 'Arafah, the Book of Allah, "O Allah, be witness", the order of the day.
- [Bukhari 1739](https://sunnah.com/bukhari:1739) (Sahih): blood, property and honour sacred; convey it to the absent.
- [Bukhari 45](https://sunnah.com/bukhari:45) (Sahih): Q 5:3 revealed at 'Arafah on a Friday.
- [Muslim 2328](https://sunnah.com/muslim:2328) (Sahih; AI guide): he never struck a woman or a servant.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): Hajj in 10 AH, his only one after the hijra.
- Fact rows 37.1–37.6, X18, X19 and 37.7–37.8 (added 2026-10-09) in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 6 and AI guide (Q45).** The screen quotes "fear Allah concerning women" and their rights only; the discipline line is handled in the AI guide with Q 4:19, Muslim 2328, the safety rule and the imam.
