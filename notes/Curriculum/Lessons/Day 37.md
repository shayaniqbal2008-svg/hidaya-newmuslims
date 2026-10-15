---
day: 37
phase: 2
unit: 5
title: "The books: Torah, Gospel, Qur'an"
hook: "There's a Bible on your family's shelf and a Qur'an on yours. Here's how Muslims see both."
minutes: 5
skills: [T2, T3]
pain_points: [christian-family]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Tawrah, Zabur, Injil, hafiz, Musa, Dawud, Isa, Allah, ﷺ]
sources: [Q 2:285, Q 3:3, Q 4:163, Q 5:46, Q 5:48, Q 87:18–19, Q 15:9, Q 2:136, Q 54:17, Bukhari 4485, Bukhari 4986, Bukhari 4987, Revealed Path ch. 10, Being Muslim (Belief)]
format: 2
---
# Day 37 · The books: Torah, Gospel, Qur'an

### 1 · hook
```yaml
pic: quran
text: "Believing in Allah's books is the third article of faith [Q 2:285], and the one that comes up most with Christian family. Today: which books, what Muslims believe about the Bible, and how the Qur'an was kept, word for word, for fourteen centuries."
```

### 2 · learn
```yaml
pic: icon:Library
text: "**Allah has always sent guidance.** The Qur'an names four books, each given to a prophet."
bubbles:
  - "The **Tawrah** (Torah), given to **Musa** (Moses), and the **Zabur** (Psalms), given to **Dawud** (David) [Q 4:163]."
  - "The **Injil** (Gospel), given to **Isa** (Jesus), full of guidance and light [Q 5:46]. And the **Qur'an**, given to Muhammad ﷺ [Q 3:3]."
  - "It also mentions the scriptures of Ibrahim (Abraham) and Musa [Q 87:18–19]."
```

### 3 · match
```yaml
prompt: "Match each book to the prophet who received it."
pairs:
  - left: "Tawrah (Torah)"
    right: "Musa (Moses)"
  - left: "Zabur (Psalms)"
    right: "Dawud (David)"
  - left: "Injil (Gospel)"
    right: "Isa (Jesus)"
  - left: "Qur'an"
    right: "Muhammad ﷺ"
```

### 4 · reveal
```yaml
title: "What Muslims believe about the Bible"
cards:
  - front: "Do Muslims respect the Torah and the Gospel?"
    back: "Yes. Muslims believe the original Torah and Gospel came from Allah, with guidance and light [Q 5:46]. Believing in them is part of your faith."
    pic: icon:BookOpen
  - front: "Is today's Bible the same as what Jesus received?"
    back: "Muslims believe much truth remains in it, but over centuries parts were lost or changed by people [Revealed Path ch. 10]. That's why we don't treat it as the final word."
    pic: icon:Hourglass
  - front: "Then why a Qur'an?"
    back: "It's the last message, for everyone. It confirms the truth that came before and acts as the guard over it [Q 5:48]."
    pic: quran
  - front: "Do I have to argue about which verses are original?"
    back: "No. When Jews read their scripture to the Companions, the Prophet ﷺ told them neither to accept nor reject it, but to say: we believe in Allah and what He revealed [Bukhari 4485; Q 2:136]."
    pic: icon:HeartHandshake
```

### 5 · widget
```yaml
widget: timeline
prompt: "How the Qur'an was kept"
text: "Tap through fourteen centuries."
events:
  - when: "Over 23 years"
    title: "Revealed, memorized, written"
    text: "The Qur'an came over 23 years. While the Prophet ﷺ was alive, Companions learned it by heart and wrote it down."
    pic: icon:PenLine
  - when: "After he died"
    title: "One complete copy"
    text: "The caliph Abu Bakr had Zayd ibn Thabit, one of the Prophet's ﷺ scribes, gather every written piece into one copy [Bukhari 4986]."
    pic: icon:BookText
  - when: "Under Uthman"
    title: "Copies for every region"
    text: "Later, the caliph Uthman had copies made from it and sent one to each region [Bukhari 4987]."
    pic: icon:Map
  - when: "Today"
    title: "Kept by heart"
    text: "Almost every Muslim community has people, many of them children, who know it all by heart: a **hafiz**. The Arabic is the same in Texas, Senegal and Indonesia."
    pic: icon:UsersRound
```

### 6 · order
```yaml
prompt: "Put the Qur'an's journey in order."
items:
  - "Memorized and written down in the Prophet's ﷺ lifetime"
  - "Gathered into one copy under Abu Bakr"
  - "Copies sent to each region under Uthman"
  - "Known by heart by a hafiz in your city today"
pics: ["icon:PenLine", "icon:BookText", "icon:Map", "icon:UsersRound"]
feedback: "That's the chain: memorized and written from the start, gathered, copied, and still recited by heart [Bukhari 4986; Bukhari 4987]."
```

### 7 · learn
```yaml
pic: icon:ShieldCheck
text: "**Allah promised to guard it** [Q 15:9]. Translations differ, which is why Muslims call them \"the meaning of the Qur'an,\" not the Qur'an itself."
```

### 8 · choice
```yaml
pic: conversation
prompt: "Ana's aunt, a churchgoer, asks quietly: \"So you think my Bible is fake?\" What's Ana's best answer?"
options:
  - text: "\"No. I believe God really did send the Torah and the Gospel, and I respect them. I believe the Qur'an is His last message, and that's the one I follow.\""
    correct: true
    feedback: "Yes. Honest, respectful, and it starts with what you share. That's the Muslim position, said kindly."
  - text: "\"Yes, it's been totally corrupted.\""
    correct: false
    feedback: "Not quite. It's not accurate either: Muslims believe much truth remains. And it hurts someone you love for no reason."
  - text: "\"I don't really know what Muslims think about that.\""
    correct: false
    feedback: "Not quite. You know more now. Muslims believe the original Torah and Gospel came from God. Lead with that."
```

### 9 · ask_ai
```yaml
chips:
  - "Can I read the Bible as a Muslim?"
  - "How do we know the Qur'an wasn't changed?"
  - "What's the difference between the Qur'an and a translation?"
  - "My grandma wants to read the Bible with me. What do I do?"
```

### 10 · do_today
```yaml
pic: conversation
text: "Explain the books in three sentences."
steps:
  - "One sentence on the Torah and the Gospel"
  - "One on the Bible today, one on the Qur'an"
  - "Say them to one person, or out loud to yourself"
log: null
optional_extra: "Listen to a short surah you know, like al-Ikhlas, recited by a hafiz online. It's the same Arabic recited everywhere in the world."
```

### 11 · takeaway
```yaml
pic: quran
text: "Muslims believe in the Torah, Psalms and Gospel as Allah's books, and in the Qur'an as His last word, kept unchanged."
```

### 12 · closing
You can honor your family's book and still follow yours.

---

## Check
```yaml
- prompt: "Which book was given to Isa (Jesus)?"
  options:
    - text: "The Injil (Gospel)"
      correct: true
      feedback: "Right. The Qur'an says it held guidance and light [Q 5:46]."
    - text: "The Zabur (Psalms)"
      correct: false
      feedback: "Not quite. The Zabur was given to Dawud (David). Isa received the Injil."
- prompt: "What do Muslims believe about the original Torah and Gospel?"
  options:
    - text: "They came from Allah"
      correct: true
      feedback: "Right. Believing in Allah's books is an article of faith. The Qur'an is the last of them."
    - text: "They were always man-made"
      correct: false
      feedback: "Not quite. Muslims believe the originals were revealed by Allah [Q 3:3; Q 5:46]."
```

## AI guide context
**Lesson facts**
- Belief in Allah's books is part of iman [Q 2:285]. Named: Tawrah to Musa, Zabur to Dawud [Q 4:163], Injil to Isa [Q 5:46], the Qur'an to Muhammad ﷺ [Q 3:3]; also the scriptures of Ibrahim and Musa [Q 87:18–19].
- The Qur'an confirms earlier scripture and is a criterion (guard, muhaymin) over it [Q 5:48]. Mainstream belief: the earlier scriptures in their original form came from Allah; much has been lost or altered by people over time [Revealed Path ch. 10].
- When People of the Book relate their scripture, neither confirm nor deny it; say "We believe in Allah and what was revealed to us" [Bukhari 4485; Q 2:136].
- Preservation: memorized and written in the Prophet's lifetime; collected into one copy under Abu Bakr by Zayd ibn Thabit [Bukhari 4986]; Uthman had standard copies made and sent to the provinces [Bukhari 4987]. Allah promised to guard it [Q 15:9]; it's made easy to remember [Q 54:17].

**Likely questions**
- *"Can I read the Bible?"* Many scholars say a Muslim grounded in their own faith can read it for understanding, e.g. to talk with family; a new Muslim should first build their Qur'an reading. Personal decision with the imam; don't rule.
- *"How do we know the Qur'an wasn't changed?"* Mass memorization from the start, writing in the Prophet's lifetime, the Abu Bakr and Uthman compilations, and an unbroken chain of teachers to today. Offer more depth if wanted.
- *"Translation vs. Qur'an?"* The Qur'an is the Arabic; translations convey meaning and are human work. That's why prayer is in Arabic (Q13: never recite a translation in prayer).
- *"Grandma wants to read the Bible with me."* Value the closeness. They might share stories both books honor (Mary, Jesus's birth: Day 27). The convert doesn't have to accept everything read; kind honesty is fine. If it becomes pressure, see Day 35.
- *"Was the Gospel written by Jesus?"* Brief: Muslims believe Allah gave Jesus a revelation (the Injil); the Gospels in the Bible today were written by others after him. Don't debate Christian scholarship.

**Escalate:** detailed polemics (specific Bible passages, textual criticism); requests to debate a pastor or family member.

**Don't**
- Don't call the Bible "fake" or mock it (rule 8). Don't quote Bible verses as proofs.
- Don't make claims about manuscripts beyond the lesson facts.
- Don't bring up verses that rebuke earlier communities for altering scripture; they're for a teacher to explain in context, not for a family conversation.

## Sources
- Qur'an [2:285](https://quran.com/2/285), [3:3](https://quran.com/3/3) (Torah and Gospel revealed), [4:163](https://quran.com/4/163) (Psalms to David), [5:46](https://quran.com/5/46) (the Gospel: guidance and light), [5:48](https://quran.com/5/48) (the Qur'an confirms and guards earlier scripture), [87:18–19](https://quran.com/87/18-19) (scriptures of Abraham and Moses), [15:9](https://quran.com/15/9) (We will guard it), [2:136](https://quran.com/2/136) (we believe in what was given to all the prophets), [54:17](https://quran.com/54/17) (made easy to remember).
- [Bukhari 4485](https://sunnah.com/bukhari:4485): neither believe nor disbelieve the People of the Scripture; say "We believe in Allah and what is revealed to us."
- [Bukhari 4986](https://sunnah.com/bukhari:4986): Zayd ibn Thabit collects the Qur'an under Abu Bakr.
- [Bukhari 4987](https://sunnah.com/bukhari:4987): Uthman's standard copies sent to the provinces.
- [[Source - The Revealed Path]] ch. 10 (the revealed books; earlier scriptures altered over time; the Qur'an preserved); [[Source - Being Muslim a Practical Guide]], Belief section.
