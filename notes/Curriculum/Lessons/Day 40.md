---
day: 40
phase: 2
unit: 5
title: "Why Muslims pray a little differently"
hook: "The man next to you prays with his arms at his sides. Is one of you doing it wrong? Probably not."
minutes: 5
skills: [S3]
pain_points: [conflicting-advice]
logs: []
madhab_sensitive: true
scholar_flags: [Q10]
status: draft-pending-scholar-review
glossary: [madhab, fiqh, imam, masjid, takbir, al-Fatiha, tashahhud, qibla, ﷺ]
sources: [Bukhari 7352, Bukhari 4119, Q 16:43, Research Notes - Core Essentials (Madhab map; madhab choice), SeekersGuidance (raising the hands), SeekersGuidance (choosing a school as a convert), AMJA 78081, Yaqeen (What is a madhhab), IslamQA 21420, Darul Ifta Birmingham 135125]
format: 2
---
# Day 40 · Why Muslims pray a little differently

### 1 · hook
```yaml
pic: masjid
text: "Visit a few masjids and you'll notice it: some people fold their hands, some let them hang; some raise their hands again before bowing. It can feel like someone's doing it wrong. Today: why the differences exist, and what to do about them."
```

### 2 · learn
```yaml
pic: "pose:ruku"
text: "**Same prayer, small details.** Every Muslim prays the same five prayers, faces the same qibla, recites al-Fatiha, bows and prostrates, and ends with the salam."
bubbles:
  - "The small differences come from the four **madhabs**, the schools of *fiqh* (Islamic law): Hanafi, Maliki, Shafi'i and Hanbali."
```

### 3 · sort
```yaml
prompt: "The same for every Muslim, or a small detail that can differ?"
buckets: ["Same for everyone", "A detail that differs"]
items:
  - text: "Praying five prayers a day"
    bucket: 0
    why: "Every Muslim, in every school, prays the same five."
  - text: "Facing the qibla"
    bucket: 0
    why: "Every Muslim, in every school, faces the same qibla."
  - text: "Reciting al-Fatiha, bowing and prostrating"
    bucket: 0
    why: "The core of the prayer is shared by every school."
  - text: "Where the hands rest while standing"
    bucket: 1
    why: "A detail. The schools differ here, and all their ways are valid."
  - text: "Raising the hands again before bowing"
    bucket: 1
    why: "A detail. Some schools do it and some don't. Both are valid."
  - text: "Reciting al-Fatiha behind the imam, or listening in silence"
    bucket: 1
    why: "A detail. Each school follows strong evidence here."
```

### 4 · reveal
```yaml
title: "Things you might see at another masjid"
cards:
  - front: "Arms hanging at the sides while standing"
    back: "An established practice of one of the four schools, followed by millions. It's valid."
    pic: icon:Hand
  - front: "Hands raised again before and after bowing"
    back: "Another school's way of praying. It's valid, and so is yours."
    pic: icon:HandMetal
  - front: "The index finger moving during the tashahhud"
    back: "Schools differ: some move it, some raise it once, some point without moving. All valid."
    pic: icon:Pointer
  - front: "People reciting al-Fatiha quietly behind the imam"
    back: "Some schools require it; others say to listen in silence. Each follows strong evidence."
    pic: icon:Ear
```

### 5 · widget
```yaml
widget: timeline
prompt: "Where the differences come from"
text: "Tap through how one prayer reached you through many careful hands."
events:
  - when: "The Prophet's ﷺ lifetime"
    title: "Thousands watched him pray"
    text: "The Prophet ﷺ prayed in front of thousands of people, for years."
    pic: icon:Users
  - when: "The Companions"
    title: "Passing it on"
    text: "His Companions passed on what they saw."
    pic: icon:MessageSquare
  - when: "The great scholars"
    title: "Weighing the reports"
    text: "Great scholars weighed those reports carefully."
    pic: icon:Scale
  - when: "Four schools"
    title: "The madhabs grow"
    text: "The four schools grew from that work. Their founders even studied with one another."
    pic: icon:Library
  - when: "Today"
    title: "Your masjid"
    text: "{{masjid.name}} teaches you one of these ways, and you can pray with Muslims of every school."
    pic: masjid
```

### 6 · learn
```yaml
pic: icon:Scale
text: "**Honest differences are rewarded.** The Prophet ﷺ said a qualified judge who does his best to find the right ruling is rewarded even if he gets it wrong [Bukhari 7352]. Scholars treat honest differences that way."
bubbles:
  - "All four schools are valid, and you can pray behind an imam of any of them [AMJA 78081]."
```

### 7 · choice
```yaml
pic: icon:Route
prompt: "The Prophet ﷺ once told his Companions to pray Asr only once they reached a certain place. On the way, the time was running out. Some prayed on the road; others waited. What did he say?"
options:
  - text: "He blamed neither group"
    correct: true
    feedback: "Yes [Bukhari 4119]. Even the Companions differed, and both understood him in good faith."
  - text: "He told the ones who prayed on the road to pray again"
    correct: false
    feedback: "Not quite. When he heard, he blamed neither group [Bukhari 4119]."
  - text: "He blamed the ones who waited"
    correct: false
    feedback: "Not quite. He blamed neither group [Bukhari 4119]. Honest differences were respected from the start."
```

### 8 · choice
```yaml
pic: masjid
prompt: "Ana visits a new masjid. A sister next to her prays with her hands at her sides. What's most likely going on?"
options:
  - text: "She follows a different school, and her prayer is valid"
    correct: true
    feedback: "Yes. It's a known, respected practice. Ana can follow her own masjid's way, right beside her."
  - text: "She's new and doesn't know how to pray"
    correct: false
    feedback: "Not quite. It's an established practice of one of the four schools, followed by millions."
  - text: "Ana should gently correct her after the prayer"
    correct: false
    feedback: "Not quite. There's nothing to correct. It's a valid way to pray."
```

### 9 · learn
```yaml
madhab_variant: true
pic: "pose:qiyam"
default: "**What to do: follow your masjid while you learn.** Learn from a qualified teacher near you, don't pick rulings to suit your mood, and don't let these details divide people. Pray the way {{masjid.name}} teaches, and ask your imam when unsure [Q 16:43]. `[SCHOLAR: Q10]`"
hanafi: "**What to do: follow your masjid while you learn.** {{masjid.name}} teaches the Hanafi way, the one you've learned since Day 3. Stick with it, and ask your imam when you're unsure [Q 16:43]. `[SCHOLAR: Q10]`"
bubbles:
  - "Scholars give different advice on choosing a school, but they agree on this: learn from a qualified local teacher."
hanafi_bubbles:
  - "{men}Your way: hands folded below the navel{/men}{women}Your way: hands folded on the chest{/women}, hands raised only at the opening takbir, and silence behind the imam."
  - "Don't pick rulings to suit your mood, and don't let these details divide people."
```

### 10 · scenario
```yaml
pic: conversation
situation: "After Dhuhr, a brother tells Marcus: \"Your prayer is wrong, man. You have to raise your hands before you bow.\" Marcus prays the way his masjid taught him."
options:
  - text: "\"Thanks for caring. I pray the way this masjid teaches, but I'll ask the imam about it.\""
    best: true
    feedback: "Yes. Kind, calm, no argument, and it sends the question to someone qualified. Exactly right."
  - text: "Argue with him right there about which hadith is stronger"
    best: false
    feedback: "Not quite. Scholars have discussed this for centuries. A debate after prayer helps no one."
  - text: "Start raising his hands from now on, and change again whenever someone else says something"
    best: false
    feedback: "Not quite. Switching with every comment leads to confusion. Stick to your masjid's way and ask the imam."
  - text: "Decide this masjid isn't for him and stop going"
    best: false
    feedback: "Not quite. One person's comment isn't the community. Both ways are valid; keep going."
```

### 11 · ask_ai
```yaml
chips:
  - "Which school should I follow?"
  - "What if my friend's masjid prays differently from mine?"
  - "Was my prayer wrong before I knew all this?"
  - "Someone online said my prayer is invalid. Is it?"
```

### 12 · do_today
```yaml
pic: icon:MessageSquare
text: "Take your prayer questions to a person, not the internet."
steps:
  - "Write down one question you have about how you pray"
  - "Ask {{mentor.name}} or your imam"
log: null
optional_extra: "Next time you're at the masjid, notice the small differences around you, and say salam to someone who prays differently."
```

### 13 · takeaway
```yaml
pic: community
text: "The four schools differ in small details, and all are valid. Follow your masjid while you learn, and never argue about it at the masjid."
```

### 14 · closing
Same God, same qibla, same prayer. The details are a mercy, not a fight.

---

## Check
```yaml
- prompt: "Someone at another masjid prays with arms at their sides. What's true?"
  options:
    - text: "It's a valid practice of one of the four schools"
      correct: true
      feedback: "Right. All four schools are valid; this is one of their differences."
    - text: "Their prayer is invalid"
      correct: false
      feedback: "Not quite. It's an established practice of one of the four schools. Their prayer is valid."
- prompt: "While you're still learning, whose way of praying should you follow?"
  options:
    - text: "Your masjid's, asking your imam when unsure"
      correct: true
      feedback: "Right. Learn from a qualified local teacher and stay consistent."
    - text: "Whichever video you watched last"
      correct: false
      feedback: "Not quite. Switching with every video brings confusion. Follow your masjid and ask your imam."
```

## AI guide context
**Lesson facts**
- The four Sunni schools (Hanafi, Maliki, Shafi'i, Hanbali) regard one another as valid; their differences don't invalidate the prayer of someone following another school, and all accept praying behind an imam of another school [Research Notes - Core Essentials, Madhab map; AMJA 78081; SeekersGuidance (raising the hands: "a respected difference")].
- Examples (see the Madhab map; on screen these appear without school names, so name the school only if the convert asks): hands (Hanafi below the navel for men, chest for women; Maliki at the sides in obligatory prayers; Shafi'i below the chest; Hanbali below the navel); raising hands (Hanafi and well-known Maliki: opening only; Shafi'i and Hanbali: also before and after ruku'); Fatiha behind the imam (Hanafi: never; Maliki: silent prayers only; Shafi'i: always; Hanbali: recommended in silent prayers); the finger in tashahhud.
- A mujtahid who errs still gets a reward [Bukhari 7352]. The Companions differed on the Asr instruction and the Prophet ﷺ blamed neither group [Bukhari 4119; also Bukhari 946].
- Founders' links: al-Shafi'i studied under Malik; Ahmad studied with al-Shafi'i [Research Notes - Core Essentials, Madhab map].
- Q10 common ground: learn from a qualified local teacher; follow the masjid's practice while learning; don't derive rulings yourself; don't let differences cause conflict `[SCHOLAR: Q10]`.

**Likely questions**
- *"Which school should I follow?"* Scholars differ on whether following one school is required or recommended [Darul Ifta Birmingham 135125; Yaqeen; IslamQA 21420]. Common advice: follow your masjid's school while you learn, since that's where you can get answers [SeekersGuidance, choosing a school]. Big decisions: talk to the imam.
- *"Was my prayer wrong before I knew this?"* No. Honest mistakes made while learning aren't sins, and a prayer done in good faith with what you knew counts [SeekersGuidance, convert following a school]. Don't revisit old prayers.
- *"My friend's masjid prays differently."* Fine to pray there and follow that imam. Keep your own practice consistent and ask your imam if unsure.
- *"Someone online says my prayer is invalid."* Check with the imam, not the comment section. Differences among the four schools don't make a prayer invalid.
- *"Can I mix and match the easiest rulings?"* Scholars caution against picking rulings by convenience [Darul Ifta Birmingham 135125]. Route specifics to the imam.

**Escalate:** a convert wanting to formally choose or switch schools; questions about groups outside the four Sunni schools or sectarian disputes (fixed policy, rule 11).

**Don't**
- Don't rank the schools or call any practice wrong.
- Don't present the masjid's school as the only correct one.
- Don't get into sectarian or Salafi/Sufi debates.

## Madhab note
This lesson is about the four schools. On screen, {{masjid.name}}'s practice is taught, and the other schools' practices appear only as "valid differences" without naming which school does what. For the AI guide: arms at the sides is the common Maliki way (often seen in West and North African communities); raising the hands again before and after bowing is the Shafi'i and Hanbali way, while Hanafis raise them only at the opening takbir; a moving index finger in the tashahhud is common among Malikis, while others raise it once or point without moving; the Shafi'i school requires al-Fatiha behind the imam and the Hanafi school says to listen in silence. The schools also differ on things like Asr's start time and whether witr is required; your masjid's timetable and teaching follow its school.

## Sources
- [Bukhari 7352](https://sunnah.com/bukhari:7352): a judge who strives and errs still gets a reward.
- [Bukhari 4119](https://sunnah.com/bukhari:4119) (also [Bukhari 946](https://sunnah.com/bukhari:946)): the Companions differed over praying Asr on the way to Banu Qurayzah; the Prophet ﷺ blamed neither group.
- Qur'an [16:43](https://quran.com/16/43) (ask those who know).
- [[Research Notes - Core Essentials and Madhab Map]]: the four schools, practical differences, and how scholars advise converts on choosing a school.
- [SeekersGuidance: raising the hands for the opening takbir](https://seekersguidance.org/answers/prayer/what-is-the-ruling-and-method-of-raising-the-hands-for-the-opening-takbir/); [SeekersGuidance: As a convert, how do I choose a school of thought?](https://seekersguidance.org/answers/general-counsel/as-a-convert-how-do-i-choose-a-school-of-thought/); [SeekersGuidance: How can a convert follow a school correctly?](https://seekersguidance.org/answers/general-counsel/how-can-a-convert-follow-a-school-of-thought-correctly/)
- [AMJA 78081](https://www.amjaonline.org/fatwa/en/78081/wiping-on-the-socks) (differences shouldn't stop Muslims praying together).
- [Yaqeen Institute: What is a madhhab?](https://yaqeeninstitute.org/read/paper/what-is-a-madhhab-exploring-the-role-of-islamic-schools-of-law); [IslamQA.info 21420](https://islamqa.info/en/answers/21420); [Darul Ifta Birmingham 135125](https://islamqa.org/hanafi/daruliftaa-birmingham/135125/is-it-necessary-to-follow-any-one-of-the-four-imams/).

## Scholar flags
- **Screen 9 and AI guide context, choosing a madhab (Q10).** Drafted with the Q10 common ground: learn from a qualified local teacher and follow the masjid's practice while learning. It doesn't say whether following one school is obligatory or recommended.
