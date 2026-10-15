---
track: seerah
order: 31
phase: null
unit: null
title: "Khaybar"
hook: "A fortress town, a flag for a man with sore eyes, and a meal that was poisoned."
minutes: 6
skills: [T2, B6]
pain_points: [character, conflicting-voices]
logs: []
madhab_sensitive: false
scholar_flags: [Q39, Q40, Q41]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Quraysh, Abyssinia, Mother of the Believers]
sources: [Bukhari 4210, Bukhari 2617, Bukhari 2731, Bukhari 4428, Bukhari 4201, Bukhari 3560, Bukhari 3015, Q 33:6, IslamQA 11575, Dar al-Ifta Egypt (seerah part 9)]
format: 2
---
# seerah-31 · Khaybar

### 1 · hook
```yaml
pic: icon:Castle
text: "**At Khaybar, someone tried to kill him.** A poisoned meal was set in front of him. He had the power to punish. Watch what he chose."
```

### 2 · learn
```yaml
pic: icon:Castle
text: "**Why Khaybar?** In 7 AH he marched on Khaybar, a fortified town north of Madinah. Its leaders, IslamQA reports, had been rallying tribes against the Muslims [IslamQA 11575]."
bubbles:
  - "As in every battle episode, we tell the history, not the fighting. His rule held here too: no harming women or children [Bukhari 3015]. `[SCHOLAR: Q39]`"
```

### 3 · choice
```yaml
pic: icon:Flag
prompt: "He said he'd give the flag to a man who loves Allah and His Messenger, and is loved by them. Everyone hoped it was them. Who got it?"
options:
  - text: "'Ali, who was at home with sore eyes"
    correct: true
    feedback: "Right. He sent for 'Ali, prayed over his eyes, and they healed. Then he handed him the flag [Bukhari 4210]."
  - text: "The strongest fighter in the army"
    correct: false
    feedback: "Not quite. He described the man by love, not strength. It was 'Ali, whose sore eyes he healed [Bukhari 4210]."
  - text: "Whoever volunteered first"
    correct: false
    feedback: "Not quite. Everyone hoped. He asked for 'Ali, who wasn't even there, and healed his eyes [Bukhari 4210]."
```

### 4 · learn
```yaml
pic: icon:MessageCircle
text: "**Invite them first.** As 'Ali set out, the Prophet ﷺ told him not to rush, and to call the people to Islam first. If Allah guided even one person through you, he said, it would be better than the finest red camels [Bukhari 4210]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Where we are"
text: "A year after the truce."
events:
  - when: "6 AH"
    title: "Hudaybiyah"
    text: "A truce with Quraysh in the south [Bukhari 2731]."
    pic: icon:Handshake
  - when: "7 AH"
    title: "Khaybar"
    text: "He marches on the fortress town to the north [IslamQA 11575]."
    pic: icon:Castle
  - when: "At Khaybar"
    title: "A poisoned meal"
    text: "Someone tries to kill him. He refuses revenge [Bukhari 2617]."
    pic: icon:UtensilsCrossed
  - when: "Around this time"
    title: "Ja'far comes home"
    text: "The emigrants return from Abyssinia, the early biographers report [Dar al-Ifta 175]."
    pic: icon:Route
  - when: "8 AH"
    title: "Next: Mu'tah"
    text: "An army goes north, and three commanders are named."
    pic: icon:Flag
```

### 6 · learn
```yaml
pic: icon:UtensilsCrossed
text: "**A poisoned meal.** At Khaybar a woman served him meat she had poisoned, and he ate from it. His Companions asked whether she should be killed. He said no [Bukhari 2617]."
bubbles:
  - "He felt the poison's effects for the rest of his life, until his final illness [Bukhari 4428]."
```

### 7 · reveal
```yaml
title: "Three moments at Khaybar"
cards:
  - front: "The woman with the poison"
    back: "She tried to kill him. He would not have her killed [Bukhari 2617]."
    pic: icon:ShieldCheck
  - front: "Safiyyah"
    back: "A chief's daughter, she became his wife after he freed her. She is honoured as a Mother of the Believers [Bukhari 4201; Q 33:6]. `[SCHOLAR: Q40, Q41]`"
    pic: icon:Crown
  - front: "Ja'far, back from Abyssinia"
    back: "After years away, his cousin came home around this time. He embraced him with joy, the early biographers report [Dar al-Ifta 175]."
    pic: icon:HandHeart
```

### 8 · learn
```yaml
pic: icon:Shield
text: "**No revenge for himself.** You met this in Day 73: he never took revenge for his own sake [Bukhari 3560]. At Khaybar it was his own life on the line, and he still held back. If someone hurts you for being Muslim, you don't owe them payback."
```

### 9 · scenario
```yaml
pic: icon:UtensilsCrossed
situation: "Tyler's roommate thought it'd be funny to slip bacon into Tyler's lunch without telling him. Tyler found out after eating half of it. He's angry and embarrassed."
options:
  - text: "Tell him calmly that it hurt and isn't okay, set a clear boundary, and leave it there"
    best: true
    feedback: "Yes. Speaking up protects him; skipping revenge keeps his character. That's the Khaybar way."
  - text: "Get him back with a worse prank"
    best: false
    feedback: "Not quite. The Prophet ﷺ didn't take revenge even for poison. Payback rarely ends anything."
  - text: "Say nothing and start eating alone in his room"
    best: false
    feedback: "Not quite. Holding back revenge doesn't mean hiding. He can speak up and protect himself."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Safiyyah?"
  - "Who was 'Ali?"
  - "Why did the Muslims go to Khaybar?"
  - "Someone hurt me for being Muslim. What now?"
```

### 11 · do_today
```yaml
pic: icon:Feather
text: "Let one thing go."
steps:
  - "Think of a small hurt someone caused you recently"
  - "Choose not to pay it back today, in words or in actions"
  - "Ask Allah to soften your heart, and theirs"
log: null
```

### 12 · takeaway
```yaml
pic: icon:ShieldCheck
text: "Someone tried to kill him, and he refused revenge. Strength isn't paying people back. It's being able to and choosing not to."
```

### 13 · closing
Next episode: Mu'tah. Three commanders named in order, and tears before any messenger arrived.

---

## Check
```yaml
- prompt: "What did he say when asked whether the woman who poisoned him should be killed?"
  options:
    - text: "No"
      correct: true
      feedback: "Right. He never took revenge for himself, even for an attempt on his life [Bukhari 2617; Bukhari 3560]."
    - text: "Yes, right away"
      correct: false
      feedback: "Not quite. He said no. He never took revenge for his own sake [Bukhari 2617; Bukhari 3560]."
- prompt: "What did he tell 'Ali to do first at Khaybar?"
  options:
    - text: "Go calmly and invite them to Islam"
      correct: true
      feedback: "Right. One person guided, he said, is better than the finest red camels [Bukhari 4210]."
    - text: "Attack before they were ready"
      correct: false
      feedback: "Not quite. He told 'Ali not to rush and to invite them to Islam first [Bukhari 4210]."
```

## AI guide context
**Lesson facts**
- In 7 AH he marched on Khaybar, a fortified town north of Madinah whose leaders, according to IslamQA, had been harming the Muslims and rallying tribes against Madinah [IslamQA 11575] (single source; say "is reported").
- He said he would give the flag to a man who loves Allah and His Messenger and is loved by them; he sent for 'Ali, who had eye trouble, prayed over him and his eyes healed; he told 'Ali to proceed without haste, invite them to Islam first, and said that one person guided through him is better than red camels (the most prized possessions of the time) [Bukhari 4210].
- A woman served him poisoned meat; asked whether she should be killed, he said no [Bukhari 2617]. In his final illness he said he still felt the pain of the food he ate at Khaybar [Bukhari 4428].
- Safiyyah bint Huyayy, daughter of a chief, was taken captive; he freed her and married her, and her freedom was her mahr [Bukhari 4201]. His wives are honoured as Mothers of the Believers [Q 33:6]. `[SCHOLAR: Q40, Q41]`
- Ja'far and the emigrants returned from Abyssinia after Khaybar; Dar al-Ifta reports he embraced Ja'far, unsure whether he was happier at Khaybar or at Ja'far's return [Dar al-Ifta Egypt, seerah part 9] (single organisation; "the early biographers report").
- His rules of war applied: no killing of women or children [Bukhari 3015]. `[SCHOLAR: Q39]`

**Likely questions**
- *"Why did the Muslims attack Khaybar?"* Keep to the history: a fortified town whose leaders are reported to have been organising tribes against Madinah [IslamQA 11575]. It was a political and military conflict, not a war on a religion. Don't describe the fighting. No rulings about fighting today (Day 71 frame). `[SCHOLAR: Q39]`
- *"Wasn't Khaybar Jewish? Does Islam hate Jews?"* No. Day 73 shows him standing for a Jewish man's funeral. The Qur'an honours the earlier prophets and calls Jews and Christians People of the Book. Khaybar was a conflict with a town's leaders, not a verdict on a people. Never connect it to Jews today, and no polemics.
- *"Who was Safiyyah? Was she forced to marry him?"* Say plainly: she was taken captive after the battle; slavery and captivity existed everywhere at that time; he freed her and married her, with her freedom as her mahr [Bukhari 4201]; she is honoured as a Mother of the Believers. Don't speculate about her feelings beyond the sources. Detailed questions about captives, or about his marriages, go to the imam. `[SCHOLAR: Q40, Q41]`
- *"Why did he marry so many times?"* Give the one calm line from seerah-40 (monogamous with Khadijah for about 25 years; later marriages mostly to widows or divorcees, many tied to alliances and care) and offer the imam. `[SCHOLAR: Q41]`
- *"Someone hurt me for being Muslim."* Listen first. No revenge doesn't mean no boundaries: speak up calmly, protect yourself, and involve the mentor. If there's danger, follow the safety rule.

**Escalate:** detailed questions on captives and slavery (Q40) or on his marriages (Q41); any question about fighting today (Day 71 frame and the imam); any unsafe situation (safety rule).

**Don't**
- Don't describe the fighting or give casualty numbers.
- Don't name the poisoner's religion on a screen or use the story against any group.
- Don't romanticise or debate Safiyyah's marriage; give the facts and offer the imam.

## Sources
- Qur'an [33:6](https://quran.com/33/6) (his wives as mothers of the believers).
- [Bukhari 4210](https://sunnah.com/bukhari:4210) (Sahih): the flag for 'Ali; his eyes healed; invite them first; one person guided is better than red camels.
- [Bukhari 2617](https://sunnah.com/bukhari:2617) (Sahih): the poisoned meat; he refused to have her killed.
- [Bukhari 4428](https://sunnah.com/bukhari:4428) (Sahih): he still felt the Khaybar poison in his final illness.
- [Bukhari 4201](https://sunnah.com/bukhari:4201) (Sahih): Safiyyah freed and married; her freedom was her mahr.
- [Bukhari 3560](https://sunnah.com/bukhari:3560) (Sahih): he never took revenge for himself.
- [Bukhari 3015](https://sunnah.com/bukhari:3015) (Sahih): no killing of women or children.
- [Bukhari 2731](https://sunnah.com/bukhari:2731) (Sahih): the truce of Hudaybiyah.
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): Khaybar in 7 AH.
- Dar al-Ifta Egypt: [*The years 3–6 before the Hijrah (part 9)*](https://www.dar-alifta.org/en/article/details/175/the-years-3-%e2%80%93-6-before-the-hijrah-part-9) (the emigrants' return from Abyssinia after Khaybar).
- Fact rows 31.1–31.5 and 31.6 (added 2026-10-09) in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 2 and AI guide (Q39).** Khaybar is told as history with his rule of war (no harming women or children); no fighting described, no rulings on fighting today.
- **Screen 7 and AI guide (Q40, Q41).** Safiyyah gets the outline's one line only (a chief's daughter who became his wife after he freed her; a Mother of the Believers). Captivity and the marriage are explained in the AI guide, plainly, with the imam offered.
