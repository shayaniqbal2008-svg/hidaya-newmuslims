---
module: holiday-christmas
phase: null
unit: null
title: "Christmas with family"
hook: "\"Are you coming home for Christmas?\" Yes, you can. Here's how to be there, keep your faith, and keep the peace."
minutes: 5
skills: [B4, T5, T3]
pain_points: [christian-family, family]
logs: []
madhab_sensitive: false
scholar_flags: [Q5, Q33]
status: draft-pending-scholar-review
glossary: [Isa, Maryam, salah, imam]
sources: [Q 3:45–47, Q 19:16–36, Q 4:171, Q 60:8, Q 31:14–15, Bukhari 2620, SeekersGuidance (Christmas with family), IslamOnline (Christmas with non-Muslim relatives), Dar al-Ifta Egypt 6815, IslamQA.info 947, IslamQA.info 145986, Research Notes - Core Essentials and Madhab Map §8]
format: 2
---
# holiday-christmas · Christmas with family

### 1 · hook
```yaml
pic: family
text: "**Christmas is a week away,** and someone has probably asked already: \"Are you coming home?\" If you're new, this might be the moment you've been dreading. If you've been Muslim a while, you may have your answers ready. Either way: you can go, love your family, and stay true to your faith."
```

### 2 · learn
```yaml
pic: quran
text: "**Your bridge: Jesus.** Muslims love Jesus (**'Isa**) and Mary (**Maryam**). The Qur'an tells of the angels' news to Mary and the virgin birth [Q 3:45–47], and has a whole chapter named after her [Q 19:16–36]."
bubbles:
  - "So when your family celebrates his birth, you share real common ground."
  - "The difference: Muslims see him as a beloved prophet, not God's son [Q 4:171]."
```

### 3 · fill
```yaml
before: "Muslims see Jesus as a beloved"
after: ", not God's son [Q 4:171]."
options:
  - text: "prophet"
    correct: true
    feedback: "Yes. Muslims love and honor him as a messenger of Allah. That's real common ground at Christmas."
  - text: "teacher only"
    correct: false
    feedback: "Not quite. He's more than a teacher: the Qur'an calls him a messenger of Allah [Q 4:171]."
  - text: "stranger"
    correct: false
    feedback: "Not quite. Muslims love Jesus. Believing in him as a prophet is part of Islam."
```

### 4 · learn
```yaml
pic: family
text: "**What to do.** Keeping ties with your family is part of your faith [Q 31:14–15; Bukhari 2620]. So go home, help in the kitchen, enjoy the meal and the time together. Skip the religious rites: the worship, the prayers, the hymns. `[SCHOLAR: Q5]`"
bubbles:
  - "Scholars differ on saying \"Merry Christmas\" and on gifts. Ask your imam."
```

### 5 · sort
```yaml
prompt: "Be there for it, or the part to skip?"
buckets: ["Be there", "Skip it"]
items:
  - text: "The family dinner"
    bucket: 0
    why: "Go. It's family time, and keeping ties is part of your faith. Just eat what's halal."
  - text: "Helping in the kitchen"
    bucket: 0
    why: "Yes. Help out, enjoy the time together."
  - text: "The church service"
    bucket: 1
    why: "That's worship, so it's the part to skip. If it's a big deal for your family, ask your imam before the day."
  - text: "The prayers and hymns"
    bucket: 1
    why: "They're part of the worship, so they're the part to skip."
```

### 6 · reveal
```yaml
title: "Tap each one: what about…"
cards:
  - front: "Saying \"Merry Christmas\""
    back: "Scholars differ: some allow it in words that don't go against your beliefs, others don't. Ask your imam."
    pic: icon:MessageCircle
  - front: "Gifts"
    back: "Scholars differ on Christmas gifts too. Ask your imam. Whatever you decide, thank people warmly."
    pic: icon:Gift
  - front: "The tree and decorations at your parents' house"
    back: "It's their home. You don't need to take anything down or comment on it. Whether to help decorate is a good question for your imam."
    pic: icon:TreePine
```

### 7 · roleplay
```yaml
character: "Your mom (or dad) on the phone. Loving, excited to see you, a bit anxious about your new faith. Never cruel or threatening."
setup: "Your phone rings. \"Hi, sweetheart! So, are you coming home for Christmas? Grandma's so excited. We're all going to the Christmas Eve service together, like always.\""
goal: "Say yes to coming home, show you're excited to see everyone, and kindly explain that you'll skip the service."
success_looks_like: "You say how much you want to be there, offer to help with dinner or stay with Grandma, explain briefly that you don't join church worship now, and keep the tone warm."
coach_notes: "The parent pushes: 'It's just one hour', 'Grandma will be heartbroken', 'You went every year', 'Is this the Muslims telling you what to do?'. They soften when the convert stresses love and offers something else (cooking, staying with Grandma, Christmas lunch). Never push the convert to join the worship. Debrief: one warm line, one firm-but-kind line, and a reminder that a calm 'no' to one thing and 'yes' to the rest is how ties stay strong. For teens, see the AI guide notes."
```

### 8 · learn
```yaml
pic: prayer-mat
text: "**Your prayers.** Take your salah (prayer) with you: find a quiet room, step out for five minutes, and come back to the party."
bubbles:
  - "{teen}Under 18 and your parents expect you at church? Don't fight it out alone, and don't decide in the moment.{/teen} `[SCHOLAR: Q33]`"
  - "{teen}Talk to {{mentor.name}} and your imam well before the day about what to do.{/teen}"
```

### 9 · scenario
```yaml
pic: family
situation: "At Christmas dinner, Grandma smiles at Ana: \"Honey, would you say grace for us this year?\" The family usually prays in Jesus's name."
options:
  - text: "Thank her, gently ask someone else to lead it, and sit quietly while they pray"
    best: true
    feedback: "Yes. Warm, honest, and no scene. Grandma feels honored, and Ana doesn't join a prayer she doesn't share."
  - text: "Lead it in Jesus's name to keep the peace"
    best: false
    feedback: "Not quite. Muslims pray to Allah alone. Kindly passing the honor on keeps the peace and her faith."
  - text: "Explain at the table why Muslims don't pray to Jesus"
    best: false
    feedback: "Not quite. A dinner-table debate hurts more than it helps. Save it for a calm moment, if they ask."
```

### 10 · ask_ai
```yaml
chips:
  - "How do I explain what Muslims believe about Jesus at Christmas?"
  - "Can I say \"Merry Christmas\" back?"
  - "Can I give or accept Christmas gifts?"
  - "My family wants me at church. What do I do?"
```

### 11 · reflect
```yaml
prompt: "What do you love most about Christmas with your family that has nothing to do with the worship? How can you keep that part this year?"
share_with_mentor: optional
```

### 12 · do_today
```yaml
pic: icon:CalendarDays
text: "Make your Christmas plan."
steps:
  - "Decide when you'll go"
  - "Decide what you'll skip, and what you'll offer instead"
  - "Use \"Ask my imam\" for any questions about greetings, gifts or the service"
log: null
optional_extra: "Read Mary's story in the Qur'an (Surah Maryam, verses 16 to 36) so you're ready if Jesus comes up."
```

### 13 · takeaway
```yaml
pic: icon:HeartHandshake
text: "Go home and love your family. Lead with Jesus and Mary as common ground. Skip the worship, keep your prayers, and ask your imam about greetings and gifts."
```

### 14 · closing
You can say "no" to one hour and "yes" to the whole visit. That's what keeping ties looks like.

---

## Check
```yaml
- prompt: "What's a good plan for Christmas with non-Muslim family?"
  options:
    - text: "Go and keep ties, enjoy the meal, skip the religious worship"
      correct: true
      feedback: "Right. Family ties are part of your faith; the worship is the part to skip."
    - text: "Stay away from family for the whole season"
      correct: false
      feedback: "Not quite. Keeping ties with family is part of your faith [Bukhari 2620]."
- prompt: "What do Muslims believe about Jesus?"
  options:
    - text: "He's a beloved prophet, born of the virgin Mary, not God's son"
      correct: true
      feedback: "Right. The Qur'an honors him and Mary [Q 3:45–47] and calls him a messenger of Allah [Q 4:171]."
    - text: "Muslims don't believe in Jesus"
      correct: false
      feedback: "Not quite. Believing in Jesus as a prophet is part of Islam."
```

## AI guide context
**Lesson facts**
- Jesus and Mary in Islam (Day 27): the angels' news and virgin birth [Q 3:45–47]; Surah Maryam [Q 19:16–36]; Jesus a messenger and word of Allah, not His son [Q 4:171].
- Keeping ties with non-Muslim parents and family is part of the faith [Q 31:14–15; Bukhari 2620]; kindness and justice toward non-Muslims who aren't hostile [Q 60:8].
- Q5 drafted position: attend the family gathering and meal; don't take part in religious rites (services, prayers, hymns); don't resolve the greeting question; ask the imam. Range: SeekersGuidance (Hanafi) and IslamOnline (Badawi, Kutty) allow attending to keep ties without joining religious activities; Dar al-Ifta Egypt [6815] permits the greeting in words that don't contradict belief; IslamQA.info [947] prohibits the greeting, and [145986] says not to take part in any way, including parties and gift exchanges.

**Likely questions**
- *"How do I explain Jesus at Christmas?"* Common ground first: Muslims love Jesus, believe in the virgin birth and his miracles. The difference briefly: a prophet, not God's son. No debate.
- *"Can I say 'Merry Christmas'?"* Present both views (Dar al-Ifta Egypt permits; IslamQA.info prohibits) without choosing. Offer "Ask my imam." Warm alternatives: "Happy holidays to you too," "It's so good to see you."
- *"Gifts?"* Scholars differ on Christmas gifts. Don't resolve; "Ask my imam." Encourage gracious thanks whatever they decide.
- *"Church?"* Attending a relative's funeral is allowed (Day 77). Joining the worship itself is the part to skip under the drafted position. Suggest offering something else (cooking, staying with Grandma). A relative's funeral: attending and sitting respectfully is fine without joining the rites (Day 77). Adults asking about sitting through a wedding or Christmas Eve service: escalate. For a minor whose parents require attendance: don't coach defiance or deception; route to the mentor and imam before the day (Spec §6.2 rule 12).
- *"The food?"* Same as Thanksgiving: no pork or alcohol; meat per Q6, ask the imam.

**Escalate:** church attendance of any kind; greetings and gifts if they want a ruling; a minor required to attend church; family conflict that turns unsafe (safety rule).

**Don't**
- Don't rule on the greeting, gifts, or attendance.
- Don't mock Christmas, the Bible, the cross, or Christian worship.
- Don't tell anyone to skip the family visit.

**Role-play brief:** A loving parent on the phone, excited, a bit anxious; pushes on the Christmas Eve service and Grandma's feelings. Softens when the convert offers love and an alternative. Debrief on warm yes plus kind no.

## Sources
- Qur'an [3:45–47](https://quran.com/3/45-47), [19:16–36](https://quran.com/19/16-36), [4:171](https://quran.com/4/171), [60:8](https://quran.com/60/8), [31:14–15](https://quran.com/31/14-15).
- [Bukhari 2620](https://sunnah.com/bukhari:2620): keeping good ties with a non-Muslim mother.
- [SeekersGuidance: Attending Christmas festivities of one's non-Muslim family](https://seekersguidance.org/answers/hanafi-fiqh/attending-christmas-festivities-of-ones-non-muslim-family/); [IslamOnline: Attending Christmas with non-Muslim relatives](https://fiqh.islamonline.net/en/attending-christmas-with-non-muslim-relatives/).
- Greetings and participation (the range of views): [Dar al-Ifta Egypt 6815](https://www.dar-alifta.org/en/fatwa/details/6815/39-congratulating-christians-on-the-occasion-of-christmas); [IslamQA.info 947](https://islamqa.info/en/answers/947/ruling-on-celebrating-non-muslim-holidays-and-congratulating-them); [IslamQA.info 145986](https://islamqa.info/en/answers/145986).
- [[Research Notes - Core Essentials and Madhab Map]] §8 (non-Muslim family; holidays).
- Decorations card (T2 final review): kept within Q5; helping decorate is routed to the imam rather than ruled on.

## Scholar flags
- **Screens 4–6 (Q5).** Drafted as: go home and keep ties; enjoy the meal; skip religious rites (services, prayers, hymns); scholars differ on the greeting and on gifts (not resolved); ask your imam. The decorations card only says the convert needn't remove or comment on their family's decorations; helping decorate isn't ruled on (ask your imam).
- **Screen 8, teen line ([SCHOLAR: Q33]).** A minor whose parents require them to attend a church service (Christmas Eve). Drafted as the most cautious position: the app doesn't tell the teen to defy or deceive their parents, doesn't say attending is fine, and routes them to the mentor and imam before the day. Question for the scholar: may a minor who depends on their parents sit in a service silently without taking part, and what should the app say?
