---
day: 78
phase: 3
unit: 9
title: "The four schools and their imams"
hook: "Four scholars, four cities, one chain of teachers and students. Meet the people behind the madhabs."
minutes: 5
skills: [S3]
pain_points: [conflicting-advice]
logs: []
madhab_sensitive: true
scholar_flags: [Q10]
status: draft-pending-scholar-review
glossary: [madhab, fiqh, hadith, sunnah, imam, ﷺ]
sources: [Research Notes - Core Essentials (Madhab map), IslamWeb 86509, Yaqeen (What is a madhhab), Bukhari 7352, Q 16:43, SeekersGuidance (choosing a school as a convert), AMJA 78081]
format: 2
---
# Day 78 · The four schools and their imams

### 1 · hook
```yaml
pic: icon:Library
text: "On Day 40 you saw that Muslims pray with small differences, and that all four schools are valid. Today, meet the people behind them. Their story is more connected than you'd guess: one of them was born the very year another died."
```

### 2 · learn
```yaml
pic: icon:BookOpen
text: "**What a madhab is.** A **madhab** is a school of *fiqh* (Islamic law): a careful method for reading the Qur'an and the Prophet's *sunnah* ﷺ and drawing rulings from them, passed from teacher to student for over a thousand years."
bubbles:
  - "There were once many such schools. Four lasted, because generations of students kept learning, teaching and writing them down [Yaqeen, What is a madhhab]."
```

### 3 · widget
```yaml
widget: timeline
prompt: "The four imams"
text: "Tap through each one, in the order they lived."
events:
  - when: "Died 767 CE"
    title: "Abu Hanifa · Kufa, Iraq"
    text: "Known for deep, careful reasoning. His students wrote down and developed his method. Today it's the largest school: Turkey, Central and South Asia, and many US masjids."
    pic: icon:Lightbulb
  - when: "Died 795"
    title: "Malik ibn Anas · Madinah"
    text: "Taught in the Prophet's own city ﷺ and wrote al-Muwatta', one of the earliest books of hadith and law. Valued Madinah's living practice. Strong in North and West Africa."
    pic: icon:BookOpen
  - when: "767–820"
    title: "Al-Shafi'i · from Makkah to Madinah, Iraq and Egypt"
    text: "Born the year Abu Hanifa died. Studied with Malik and with Abu Hanifa's students. Wrote al-Risala, a founding book on deriving rulings. Strong in Egypt, East Africa, Southeast Asia."
    pic: icon:Route
  - when: "780–855"
    title: "Ahmad ibn Hanbal · Baghdad"
    text: "Studied with al-Shafi'i. A giant of hadith who stayed very close to the texts. The smallest of the four; strong in Saudi Arabia and Qatar."
    pic: icon:ScrollText
```

### 4 · learn
```yaml
pic: icon:Network
text: "**A family tree of teachers.** Al-Shafi'i was born in the year Abu Hanifa died. He traveled to learn from Malik in Madinah, and also studied with Abu Hanifa's students. Then Ahmad ibn Hanbal studied with al-Shafi'i [Madhab map; Yaqeen]."
bubbles:
  - "So the four schools aren't rival teams. They're one conversation, carried across generations, with deep respect for each other's learning."
```

### 5 · match
```yaml
prompt: "Match each imam to a fact about him."
pairs:
  - left: "Abu Hanifa"
    right: "Kufa, Iraq; the largest school today"
  - left: "Malik"
    right: "Madinah; wrote al-Muwatta'"
  - left: "Al-Shafi'i"
    right: "Studied with Malik; wrote al-Risala"
  - left: "Ahmad ibn Hanbal"
    right: "Student of al-Shafi'i; hadith scholar in Baghdad"
```

### 6 · learn
```yaml
pic: icon:Scale
text: "**Why do careful scholars reach different answers?** Many verses and hadith can honestly be read more than one way. A hadith might have reached one scholar and not another, or been judged differently. And each school weighs evidence with its own method."
bubbles:
  - "The Prophet ﷺ said a qualified scholar who works hard and gets it right earns two rewards, and one who gets it wrong still earns one [Bukhari 7352]."
```

### 7 · fill
```yaml
before: "A qualified scholar who works hard and gets a ruling wrong still earns"
after: "[Bukhari 7352]."
options:
  - text: "one reward"
    correct: true
    feedback: "Yes. Honest effort is rewarded, and getting it right earns two [Bukhari 7352]."
  - text: "a sin"
    correct: false
    feedback: "Not quite. A qualified scholar who strives and errs still gets one reward [Bukhari 7352]."
  - text: "nothing"
    correct: false
    feedback: "Not quite. Honest effort still earns one reward; getting it right earns two [Bukhari 7352]."
```

### 8 · choice
```yaml
pic: conversation
prompt: "A friend asks Keisha: \"So which of the four schools is the right one?\" What's the best answer?"
options:
  - text: "\"All four are valid ways of following Islam. I follow my masjid's school while I learn.\""
    correct: true
    feedback: "Yes. That's the mainstream view, and it's how she can get her questions answered consistently."
  - text: "\"Mine is right and the others are wrong.\""
    correct: false
    feedback: "Not quite. All four schools accept each other as valid, and you can pray behind an imam of any of them."
  - text: "\"None of them; I just pick whatever ruling sounds easiest.\""
    correct: false
    feedback: "Not quite. Scholars warn against picking rulings by convenience. Learn one way well from a teacher."
```

### 9 · learn
```yaml
madhab_variant: true
pic: masjid
default: "**What this means for you.** Follow {{masjid.name}}'s way while you learn, and ask your imam when unsure [Q 16:43]. `[SCHOLAR: Q10]`"
hanafi: "**What this means for you.** {{masjid.name}} follows the Hanafi school, the school of Abu Hanifa. It's what you've learned since Day 3. Stick with it while you learn, and ask your imam when unsure [Q 16:43]. `[SCHOLAR: Q10]`"
bubbles:
  - "Scholars give different advice about choosing a school, but agree on the basics: learn from a qualified teacher near you, stay consistent, and never let these differences divide people."
hanafi_bubbles:
  - "Pray happily beside Muslims of every school, and never let these differences divide people."
```

### 10 · ask_ai
```yaml
chips:
  - "Tell me more about Abu Hanifa"
  - "Did the four imams ever disagree with each other?"
  - "Can I switch schools later?"
  - "Are there Muslims who don't follow any school?"
```

### 11 · do_today
```yaml
pic: icon:MessageSquare
text: "Find your own chain of teachers."
steps:
  - "Ask {{mentor.name}} or your imam: \"Who taught you, and who taught them?\""
  - "Notice the chain. Every real teacher has one"
log: null
optional_extra: "Look up one story about the imam of your masjid's school and share it with a friend."
```

### 12 · takeaway
```yaml
pic: icon:Library
text: "Four great scholars, linked as teachers and students, built the four schools. All are valid; follow your masjid's while you learn."
```

### 13 · closing
You're standing at the end of a very long line of learners.

---

## Check
```yaml
- prompt: "How were al-Shafi'i and Ahmad ibn Hanbal connected?"
  options:
    - text: "Ahmad studied with al-Shafi'i"
      correct: true
      feedback: "Right. And al-Shafi'i studied with Malik. The schools grew from one chain of learning."
    - text: "They founded rival schools and never met"
      correct: false
      feedback: "Not quite. Ahmad was al-Shafi'i's student; the imams were linked as teachers and students."
- prompt: "What does a scholar who works hard and gets a ruling wrong receive?"
  options:
    - text: "One reward"
      correct: true
      feedback: "Right [Bukhari 7352]. Honest effort is rewarded; getting it right earns two."
    - text: "A sin"
      correct: false
      feedback: "Not quite. A qualified scholar who strives and errs still gets one reward [Bukhari 7352]."
```

## AI guide context
**Lesson facts**
- Abu Hanifa al-Nu'man ibn Thabit (d. 150 AH / 767 CE), Kufa; school developed by Abu Yusuf and Muhammad al-Shaybani; largest today (Turkey, Balkans, Central Asia, South Asia; common in South Asian and Turkish US masjids).
- Malik ibn Anas (d. 179 AH / 795–796 CE), Madinah; al-Muwatta'; the practice ('amal) of Madinah as a source; North and West Africa, Upper Egypt.
- Al-Shafi'i (150–204 AH / 767–820 CE); studied with Malik and with Hanafi scholars; died in Egypt; al-Risala systematized legal theory; Lower Egypt, Yemen, East Africa, Kurdistan, Southeast Asia.
- Ahmad ibn Hanbal (164–241 AH / 780–855 CE), Baghdad; student of al-Shafi'i; compiled the Musnad; close to hadith and Companions' reports; Saudi Arabia, Qatar. (All from [Research Notes - Core Essentials, Madhab map]; IslamWeb 86509.)
- Al-Shaybani also studied with Malik. Many schools existed historically; most didn't survive for lack of students to carry them [Yaqeen, What is a madhhab].
- Reasons for difference: most legal texts are open to more than one reading; different evidence reached or was weighed differently; different methods [Yaqeen]. A mujtahid who errs still gets a reward [Bukhari 7352].
- All four accept one another as valid; praying behind an imam of another school is fine [AMJA 78081].
- Q10 common ground `[SCHOLAR: Q10]`: learn from a qualified local teacher; follow the masjid's practice while learning; don't pick rulings by convenience.

**Likely questions**
- *"Did the imams disagree?"* Yes, on many details, while respecting each other's learning; their students carried on both the disagreement and the respect. Don't invent quotes or anecdotes.
- *"Can I switch schools later?"* Scholars differ on how and when; it's a serious step done with a teacher, not by convenience. Route to the imam.
- *"Are there Muslims who don't follow a school?"* Some scholars hold that following one school isn't obligatory and that a layperson follows trustworthy scholars [IslamQA 21420]; others hold following one of the four is necessary [Darul Ifta Birmingham 135125]. Don't take sides; follow the masjid while learning (Q10). Avoid Salafi/Sufi debates (rule 11).
- *"What about Shia schools?"* Short and neutral: Shia Muslims have their own schools of law (most widely the Ja'fari); this program teaches the four Sunni schools. Route more to the imam.

**Escalate:** formally choosing or switching schools; sectarian questions (rule 11).

**Don't:** rank the schools; call any practice wrong; present the masjid's school as the only correct one; invent biographical stories.

## Madhab note
This lesson is about all four schools. Screen 9 shows {{masjid.name}}'s school. If your masjid follows Maliki, Shafi'i or Hanbali practice, the same advice applies: learn that school well from your imam, and pray side by side with everyone.

## Sources
- [[Research Notes - Core Essentials and Madhab Map]], Madhab map (founders, dates, cities, regions, teacher links) and the section on how scholars advise converts.
- [IslamWeb 86509: The period in which the four imams lived](https://www.islamweb.net/en/fatwa/86509/the-period-in-which-the-four-imams-lived).
- [Yaqeen Institute: What is a madhhab?](https://yaqeeninstitute.org/read/paper/what-is-a-madhhab-exploring-the-role-of-islamic-schools-of-law) (why scholars differ; teacher links; many historical schools).
- [Bukhari 7352](https://sunnah.com/bukhari:7352): a judge who strives and errs still gets a reward.
- Qur'an [16:43](https://quran.com/16/43) (ask those who know).
- [SeekersGuidance: As a convert, how do I choose a school of thought?](https://seekersguidance.org/answers/general-counsel/as-a-convert-how-do-i-choose-a-school-of-thought/); [AMJA 78081](https://www.amjaonline.org/fatwa/en/78081/wiping-on-the-socks); [IslamQA.info 21420](https://islamqa.info/en/answers/21420); [Darul Ifta Birmingham 135125](https://islamqa.org/hanafi/daruliftaa-birmingham/135125/is-it-necessary-to-follow-any-one-of-the-four-imams/).

## Scholar flags
- **Screen 9 and the AI guide, choosing a madhab (Q10).** Drafted with the Q10 common ground: learn from a qualified local teacher and follow the masjid's practice while learning. It doesn't say whether following one school is obligatory or recommended.
