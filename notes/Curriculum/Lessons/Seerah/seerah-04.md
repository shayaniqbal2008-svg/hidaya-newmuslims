---
track: seerah
order: 4
phase: null
unit: null
title: "Orphaned twice"
hook: "By eight, he had lost his father, his mother and his grandfather."
minutes: 6
skills: [T2, B4, B6]
pain_points: [family, grief, loneliness]
logs: []
madhab_sensitive: false
scholar_flags: [Q23, Q40, Q42]
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, Makkah, Qur'an, surah]
sources: [Q 93:6–8, Q 31:14–15, Bukhari 1303, Muslim 976, Bukhari 1360, IslamQA 11575, IslamQA 20240, Qalam Institute Sirah Podcast ep. 11, 14, 15]
format: 2
---
# seerah-04 · Orphaned twice

### 1 · hook
```yaml
pic: icon:Sunset
text: "**By the time he was eight,** he had lost his father, his mother and his grandfather. This episode is about grief, and about the people Allah kept sending."
```

### 2 · learn
```yaml
pic: icon:Route
text: "**A trip with his mother.** At about six, he travelled with his mother, Aminah, to visit relatives in Madinah. On the way home, at a place called al-Abwa', she died [IslamQA 11575; Qalam ep. 14]."
bubbles:
  - "According to the early biographers, Umm Ayman, a woman who helped care for him, brought the little boy home to Makkah [Qalam ep. 14]."
```

### 3 · reveal
```yaml
title: "The people who held him"
cards:
  - front: "Umm Ayman (Barakah)"
    back: "An Abyssinian woman in his family's household who cared for him from childhood. He later freed her [Qalam ep. 11]. `[SCHOLAR: Q40]`"
    pic: icon:HandHeart
  - front: "'Abd al-Muttalib, his grandfather"
    back: "Took the boy in and loved him dearly. He died when the boy was about eight [IslamQA 20240; Qalam ep. 15]."
    pic: icon:House
  - front: "And next?"
    back: "One more person was waiting to take him in. Keep going."
    pic: icon:DoorOpen
```

### 4 · learn
```yaml
pic: icon:House
text: "**An uncle who stayed.** After his grandfather died, his uncle Abu Talib took him in. Abu Talib didn't have much money, but he loved his nephew like his own children, and he would protect him for more than forty years [IslamQA 20240; IslamQA 11575]."
```

### 5 · widget
```yaml
widget: timeline
prompt: "Loss, and who came next"
text: "Each time he lost someone, someone else was there."
events:
  - when: "Before birth"
    title: "His father dies"
    text: "'Abdullah dies before his son is born [IslamQA 11575]."
    pic: icon:Sunset
  - when: "About age 6"
    title: "His mother dies"
    text: "Aminah dies at al-Abwa' on the way home from Madinah. Umm Ayman brings him home, the early biographers say [Qalam ep. 14]."
    pic: icon:Route
  - when: "About age 6 to 8"
    title: "His grandfather's home"
    text: "'Abd al-Muttalib takes him in and loves him dearly [IslamQA 20240]."
    pic: icon:House
  - when: "About age 8"
    title: "His grandfather dies"
    text: "Another loss, before he is even nine [IslamQA 20240; Qalam ep. 15]."
    pic: icon:HeartCrack
  - when: "From then on"
    title: "Abu Talib"
    text: "His uncle raises him and protects him for over forty years [IslamQA 11575]."
    pic: icon:Shield
```

### 6 · learn
```yaml
pic: quran
text: "**Years later, a reminder.** When he was a grown man and a prophet, the Qur'an looked back on this childhood: *\"Did He not find you an orphan and give [you] refuge?\"* [Q 93:6, Saheeh Intl.]"
bubbles:
  - "The **surah** goes on: *\"And He found you lost and guided [you], And He found you poor and made [you] self-sufficient\"* [Q 93:7–8, Saheeh Intl.]."
```

### 7 · fill
```yaml
before: "\"Did He not find you an"
after: "and give [you] refuge?\" [Q 93:6]"
options:
  - text: "orphan"
    correct: true
    feedback: "Yes. Allah reminded him that every loss had been met with shelter."
  - text: "enemy"
    correct: false
    feedback: "Not quite. The verse says orphan: a boy who lost his parents and was still given refuge."
  - text: "old man"
    correct: false
    feedback: "Not quite. It looks back on his childhood: Allah found him an orphan and sheltered him."
```

### 8 · learn
```yaml
pic: community
text: "**Allah sends people.** Each time he lost someone, someone else stepped in: Umm Ayman on the road, his grandfather, then his uncle. If becoming Muslim has cost you closeness with your family, you aren't forgotten."
bubbles:
  - "Sometimes the people He sends are a mentor, a friend from the masjid, a neighbour. Sometimes they come slowly. Keep your door open."
```

### 9 · scenario
```yaml
pic: family
situation: "Luis's mom stopped calling after he became Muslim. His grandma still has him over for Sunday lunch, and a brother from the masjid texts him before Friday prayer. Luis feels like he's lost his family."
options:
  - text: "Let himself grieve, keep a kind door open with his mom, and lean on the people who are there"
    best: true
    feedback: "Yes. The grief is real, the door stays open, and the people Allah sent are worth leaning on."
  - text: "Cut his mom off, since she cut him off"
    best: false
    feedback: "Not quite. Islam asks him to keep treating his parents well, even when it's hard [Q 31:14–15]."
  - text: "Pretend it doesn't hurt; real faith means not feeling sad"
    best: false
    feedback: "Not quite. The Prophet ﷺ wept when his little son died [Bukhari 1303]. Sadness isn't weak faith."
```

### 10 · ask_ai
```yaml
chips:
  - "Who was Umm Ayman?"
  - "How did Abu Talib protect him?"
  - "What is Surah al-Duha about?"
  - "My family pulled away. How do I cope?"
```

### 11 · reflect
```yaml
prompt: "Who has Allah sent into your life when you needed someone? It might be someone from before you were Muslim, too."
share_with_mentor: optional
```

### 12 · do_today
```yaml
pic: icon:MessageCircle
text: "Thank one of the people Allah sent you."
steps:
  - "Think of one person who has shown up for you on this journey"
  - "Send them a short thank-you message today"
log: null
```

### 13 · takeaway
```yaml
pic: icon:Shield
text: "He lost almost everyone, and Allah never once left him without someone who loved him."
```

### 14 · closing
Next episode: a shepherd, a trader, and a pact to stand up for the wronged.

---

## Check
```yaml
- prompt: "Who raised the Prophet ﷺ after his grandfather died?"
  options:
    - text: "His uncle Abu Talib"
      correct: true
      feedback: "Right. Poor, but loving, and he protected him for over forty years."
    - text: "Halimah, his desert nurse"
      correct: false
      feedback: "Not quite. Halimah nursed him as a baby. After his grandfather died, his uncle Abu Talib raised him."
- prompt: "What does Q 93:6 remind him of?"
  options:
    - text: "Allah found him an orphan and gave him refuge"
      correct: true
      feedback: "Right. Every loss in his childhood was met with shelter from Allah."
    - text: "He should have been an orphan forever"
      correct: false
      feedback: "Not quite. The verse is about Allah sheltering him: He found him an orphan and gave him refuge."
```

## AI guide context
**Lesson facts**
- At about six he travelled with his mother Aminah to visit relatives in Madinah; on the way back she died at al-Abwa' [IslamQA 11575; Qalam ep. 14].
- Umm Ayman (Barakah) brought him home, according to the early biographers [Qalam ep. 14] (reports differ on whether she went to Madinah first).
- Umm Ayman was an Abyssinian woman in his family's household; he inherited her and later freed her (the early biographers say at his marriage to Khadijah) [Qalam ep. 11]. `[SCHOLAR: Q40]`
- His grandfather 'Abd al-Muttalib took him in, loved him dearly, and died when the boy was about eight [IslamQA 20240; IslamQA 11575; Qalam ep. 15].
- His uncle Abu Talib, his father's full brother, then raised him; poor, loving, and protective for over forty years [IslamQA 20240; IslamQA 11575].
- The Qur'an: "Did He not find you an orphan and give [you] refuge?" [Q 93:6–8].

**Likely questions**
- *"Where are his parents (or Abu Talib) in the afterlife?"* This is sensitive, especially for converts with non-Muslim parents. Answer gently and briefly: there are authentic hadith on this [Muslim 976; Bukhari 1360], and scholars discuss them in different ways. Don't deny the texts and don't speculate about any person. Stress that Allah alone judges, with perfect justice and mercy. Offer "Ask my imam" for the detail. `[SCHOLAR: Q42]`
- *"What about my own non-Muslim parents?"* Respond with care first. Point to Day 77 for grief and what's open to them now: keeping ties, kindness, du'a for their guidance while they're alive [Q 31:14–15]. Never comment on any individual's fate. For a parent who has died, follow Day 77's handling and offer the imam. `[SCHOLAR: Q23]`
- *"Was Umm Ayman a slave?"* Say plainly that slavery existed everywhere at that time, that she was in his family's household, and that he freed her. Don't claim slavery is acceptable today or that Islam abolished it in one stroke; detailed questions go to the imam. `[SCHOLAR: Q40]`
- *"How did Abu Talib protect him?"* Later episodes (12, 15, 16) cover how Abu Talib stood by him during persecution. Keep it to that now.
- *"My family pulled away; how do I cope?"* Listen first. Grief over distance is real; keep a kind door open [Q 31:14–15]; lean on the mentor and masjid. If there's danger at home, follow the safety rule.

**Escalate:** the afterlife of his parents or Abu Talib beyond the gentle outline above (Q42); a convert's own deceased non-Muslim relative (Q23); detailed questions on slavery (Q40); any unsafe family situation (safety rule, never only the imam queue).

**Don't**
- Don't raise the afterlife of his parents or Abu Talib unless asked, and never on a screen.
- Don't quote Muslim 976 or Bukhari 1360 word for word to someone grieving; summarise gently if asked.
- Don't speculate about anyone's fate in the hereafter.
- Don't use the convert's family situation to pressure them.

## Sources
- Qur'an [93:6–8](https://quran.com/93/6-8) (found an orphan and given refuge), [31:14–15](https://quran.com/31/14-15) (kindness to parents).
- [Bukhari 1303](https://sunnah.com/bukhari:1303) (Sahih): he wept when his son Ibrahim died.
- AI guide only: [Muslim 976](https://sunnah.com/muslim:976) (Sahih), [Bukhari 1360](https://sunnah.com/bukhari:1360) (Sahih).
- [IslamQA 11575, *Who Is Muhammad?*](https://islamqa.info/en/answers/11575): his mother's death at al-Abwa'; his grandfather; Abu Talib's protection for over forty years.
- [IslamQA 20240, *Who took care of him after his mother died?*](https://islamqa.info/en/answers/20240): 'Abd al-Muttalib; Abu Talib, poor and loving.
- Qalam Institute, *The Sīrah Podcast*: [ep. 11, The women who cared for the Prophet](https://www.qalaminstitute.org/2012/01/seerah-life-of-the-prophet-the-women-who-cared-for-the-prophet/) (Umm Ayman freed); [ep. 14, Death of the Prophet's mother](https://www.qalaminstitute.org/2012/03/seerah-life-of-the-prophet-death-of-the-prophets-mother/); [ep. 15, With his loving grandfather and uncle](https://www.qalaminstitute.org/2012/03/seerah-life-of-the-prophet-with-his-loving-grandfather-uncle/).
- Fact rows 04.1–04.6 and X21 in [[Seerah Fact-Check Log]].

## Scholar flags
- **Screen 3 and AI guide (Q40).** Umm Ayman is described as a woman in his family's household whom he later freed; the AI guide says plainly that slavery existed everywhere then, doesn't claim it's acceptable today, and routes detail to the imam.
- **AI guide (Q42).** The fate of his parents and Abu Talib is never on screen; if asked, the guide acknowledges the sahih texts exist, doesn't speculate about anyone, stresses Allah alone judges, and offers the imam.
- **AI guide (Q23).** A convert's own deceased non-Muslim relative is handled as in Day 77: gently, without comment on anyone's fate, with the imam offered.
