---
day: 59
phase: 2
unit: 7
title: "Modesty, a few months on"
hook: "Maybe you started hijab, or stopped. Maybe you're growing a beard and your family hates it. Wherever you are, let's talk honestly."
minutes: 5
skills: [B4, S1]
pain_points: [hijab-reactions]
logs: []
madhab_sensitive: false
scholar_flags: [Q8, Q27, Q29]
status: draft-pending-scholar-review
glossary: [hijab, "haya'", ﷺ, imam]
sources: [Q 24:30–31, Q 24:31, Q 49:11, Bukhari 9, Bukhari 5892, Qibla 35720 (Haddad), Field Guide ch. 10, Research Notes - Core Essentials and Madhab Map (§5, §9)]
format: 2
---
# Day 59 · Modesty, a few months on

### 1 · hook
```yaml
pic: icon:Shirt
text: "Three weeks ago, on Day 38, you learned what modesty asks. Since then, real life happened. {women}Maybe you started hijab, or tried and stopped.{/women}{men}Maybe you're growing a beard and getting looks.{/men} Today is a check-in, with no judgment."
```

### 2 · learn
```yaml
pic: icon:Scale
text: "**The ruling hasn't changed. Neither has the mercy.** {women}Hijab is required for Muslim women past puberty [Q 24:31].{/women}{men}Modesty is asked of you first [Q 24:30–31]: lowering your gaze, loose clothing covering at least navel to knee, no showing off.{/men} `[SCHOLAR: Q8]`"
bubbles:
  - "Journeys aren't straight lines. {women}Scholars describe helping new Muslims toward hijab step by step [Qibla 35720].{/women}{men}Modesty can grow in steps, like everything else.{/men}"
  - "A step back isn't the end. It's a place to start again."
```

### 3 · reveal
```yaml
title: "Things people tell themselves. Tap each one."
cards:
  - front: "{women}\"I took my hijab off for a while. I'm a hypocrite.\"{/women}{men}\"I keep slipping on lowering my gaze. I'm a hypocrite.\"{/men}"
    back: "{women}No. You're a Muslim who had a hard stretch. The ruling still stands, and so does the way back. Start again when you can, and talk to a sister you trust.{/women}{men}No. You're a Muslim in a hard fight, and struggling isn't denying. Lower it again and keep going.{/men}"
    pic: icon:Undo2
  - front: "\"She's not covered, so she can't be serious about Islam.\""
    back: "You can't see her story or her heart. That judgment isn't yours to make."
    pic: icon:EyeOff
  - front: "\"If I'm not perfect at it, I shouldn't try at all.\""
    back: "A step is a path forward, not permission to stop. Small and steady still counts."
    pic: icon:Sprout
```

### 4 · learn
```yaml
audience: men
pic: icon:UserRound
text: "**The beard.** The Prophet ﷺ told men to let their beards grow and trim their mustaches [Bukhari 5892]. Many scholars hold that keeping a beard is required; your imam can explain the details. `[SCHOLAR: Q29]`"
bubbles:
  - "It can grow in steps."
  - "If work or family pushes back, talk to your imam rather than deciding alone."
```

### 5 · scenario
```yaml
audience: men
pic: family
situation: "Marcus has been growing a beard for a month. His mom hates it and keeps asking him to shave before the family reunion."
options:
  - text: "Stay kind and patient with his mom, and talk to his imam about it rather than deciding alone"
    best: true
    feedback: "Yes. Kindness to his mom stays, and the imam can help him with his own situation."
  - text: "Tell his mom it's required and refuse to discuss it"
    best: false
    feedback: "Not quite. Hard words with a parent rarely help. Stay gentle, and take the question to his imam."
  - text: "Shave in secret, feel like a fake, and stop going to the masjid"
    best: false
    feedback: "Not quite. Hiding from the masjid makes everything harder. Stay connected and talk it through instead."
```

### 6 · scenario
```yaml
audience: women
pic: masjid
situation: "Ana started wearing hijab a month ago. After some ugly comments at work, she took it off. Now she feels like a fake and is thinking about skipping the masjid so no one sees her."
options:
  - text: "Keep going to the masjid, talk to a sister or mentor she trusts, and plan a next step she can actually keep"
    best: true
    feedback: "Yes. Staying connected is how people find their way back. One honest next step beats hiding."
  - text: "Stay away from the masjid until she's ready to wear it every day"
    best: false
    feedback: "Not quite. Hiding makes it harder. The masjid is for Muslims on the way, which is everyone."
  - text: "Decide hijab isn't really required, so there's nothing to feel bad about"
    best: false
    feedback: "Not quite. That's turning a struggle into a denial. Keep the ruling and be gentle with herself."
```

### 7 · learn
```yaml
pic: community
text: "**No judging, either way.** The Qur'an says not to mock others, since they may be better than you [Q 49:11]. That goes for the sister in jeans and the brother who's clean-shaven."
bubbles:
  - "It also goes for people who judge *you*. Their comments aren't the ruling, and they aren't your mentor."
  - "**Haya'** (dignity and modesty) is part of faith [Bukhari 9], and it includes how we treat each other."
```

### 8 · sort
```yaml
prompt: "Judging others, or minding your own path? Sort each one."
buckets: ["Judging others", "Minding your own path"]
items:
  - text: "Whispering about the sister in jeans after prayer"
    bucket: 0
    why: "Mocking and gossip are out. She may be better than you [Q 49:11]."
  - text: "Assuming the clean-shaven brother isn't serious about Islam"
    bucket: 0
    why: "You can't see his story or his heart. That judgment isn't yours to make."
  - text: "Giving everyone at the masjid the same warm welcome"
    bucket: 1
    why: "Yes. Everyone there is on the way. Haya' includes how we treat each other [Bukhari 9]."
  - text: "Working on your own one step this month"
    bucket: 1
    why: "Yes. Your own path is the one that's yours to work on."
```

### 9 · learn
```yaml
audience: women
pic: conversation
text: "**You don't have to carry this alone.** You can ask for a female mentor or staff member at {{masjid.name}} and talk through hijab privately."
bubbles:
  - "{teen}If you're under 18 and your parents are against hijab, don't take it on alone.{/teen}"
  - "{teen}Talk to a female mentor at {{masjid.name}} and your imam before it becomes a standoff at home. `[SCHOLAR: Q27]`{/teen}"
  - "{teen}They'll help you find a way that keeps your faith and your family.{/teen}"
```

### 10 · reflect
```yaml
prompt: "Where are you with modesty right now, honestly? What's one step that's yours this month, in clothes, gaze, words or online?"
share_with_mentor: optional
```

### 11 · ask_ai
```yaml
chips:
  - "{women}I stopped wearing hijab. How do I start again?{/women}{men}My family hates my beard. What do I do?{/men}"
  - "How do I handle people at the masjid judging me?"
  - "{women}Can a female mentor help me with this?{/women}{men}Is the beard really required?{/men}"
  - "{women}My family hates my hijab. What do I do?{/women}{men}How do I lower my gaze online?{/men}"
```

### 12 · do_today
```yaml
pic: icon:NotebookPen
text: "Make your one step real."
steps:
  - "Write down your one step from the reflection"
  - "{women}If something about hijab is weighing on you, send it to {{mentor.name}}, or ask for a female staff member{/women}{men}If something about your beard is weighing on you, send it to {{mentor.name}}{/men}"
log: null
optional_extra: "Notice one moment today where you lower your gaze online or in person. That's modesty too."
```

### 13 · takeaway
```yaml
pic: icon:Sprout
text: "The ruling stands, the path can be gradual, and nobody's journey is yours to judge, including your own, too harshly."
```

### 14 · closing
Modesty grows the way everything else has: one step, kept, then the next.

---

## Check
```yaml
- prompt: "A sister took her hijab off for a while after harassment. What's true?"
  options:
    - text: "She's a Muslim who had a hard stretch; the ruling stands and the way back is open"
      correct: true
      feedback: "Right. Struggling isn't denying, and a step back isn't the end."
    - text: "Hijab must not be required for her anymore"
      correct: false
      feedback: "Not quite. The ruling stands [Q 24:31]. What's gentle is the pace and the support."
- prompt: "What does the Qur'an say about mocking other Muslims over their practice?"
  options:
    - text: "Don't mock others; they may be better than you"
      correct: true
      feedback: "Right [Q 49:11]. You can't see anyone's whole story."
    - text: "It's fine if it motivates them"
      correct: false
      feedback: "Not quite. Mocking is forbidden [Q 49:11]. Advice, if any, is private and kind."
```

## AI guide context
**Lesson facts**
- Hijab is held to be required for women past puberty by mainstream scholars of all four schools [Q 24:31; Q 33:59]; modesty (gaze, dress, conduct) applies to men first [Q 24:30–31]. Haya' is part of faith [Bukhari 9].
- The approach can be gradual: Shaykh Gibril Haddad describes helping a convert toward hijab step by step while the ruling "stands as prescribed" [Qibla 35720]. A sister not covering yet, or who stopped, is a Muslim working toward it, never told it's optional (Q8).
- Beard: the Prophet ﷺ commanded men to let the beard grow and trim the mustache [Bukhari 5892]. Many scholars hold it's required (the Hanafi school holds shaving it is not allowed); others treat it more lightly. Drafted as "many scholars hold it's required; ask your imam" (NEW flag).
- Don't mock or judge [Q 49:11].
- A girl under 18 whose parents oppose hijab: no pressure, no telling her the ruling doesn't apply, no telling her to defy her parents; route to a female mentor and the imam before any standoff (Q27).
- Field Guide ch. 10 covers hijab and modesty for men and women from a convert's angle.

**Likely questions**
- *"I stopped wearing hijab. Am I a bad Muslim?"* No shame. She's a Muslim who had a hard stretch. Ask what made it hard (safety, work, family, feeling alone); suggest small steps and a female mentor.
- *"My family hates my beard / my hijab."* Acknowledge it. Kindness to parents [Q 31:14–15]. Don't rule; route to the imam, and for women, a female mentor if wanted.
- *"Is the beard really required?"* Give the hadith and "many scholars hold it's required"; offer "Ask my imam". Don't shame clean-shaven men.
- *"Brothers have it easy."* (a sister's frustration) Men's modesty is real too: lowering the gaze, loose clothing covering at least navel to knee, no showing off. It's just less visible. Don't turn it into a comparison; keep the focus on her own path.
- *"People at the masjid judge me."* Validate; their comments aren't rulings. Suggest a trusted sister/brother or the mentor; Day 48 for when Muslims let you down.
- *"I'm being harassed for wearing hijab."* Safety first; Day 52 (CAIR). Workplace accommodation: Day 38.

**Escalate:** a minor whose parents oppose hijab (Q27: female mentor and imam); safety threats linked to visible dress (safety rule; CAIR); a job requiring removal of hijab or shaving (imam; CAIR for rights); any question about the extent of 'awrah in her own case (female mentor or imam).

**Don't**
- Don't call hijab optional, or say a step back cancels someone's Islam.
- Don't pressure anyone with a timeline, or with Hell.
- Don't comment on anyone's appearance.
- Don't tell a teen to defy her parents, or that the ruling doesn't apply to her.

## Sources
- Qur'an [24:30–31](https://quran.com/24/30-31), [24:31](https://quran.com/24/31), [49:11](https://quran.com/49/11).
- [Bukhari 9](https://sunnah.com/bukhari:9): haya' is part of faith.
- [Bukhari 5892](https://sunnah.com/bukhari:5892): let the beard grow and trim the mustache.
- [Qibla via IslamQA.org 35720 (Shaykh Gibril Haddad): converts' hijab and gradualism](https://islamqa.org/hanafi/qibla-hanafi/35720/converts-hijab-the-question-of-gradualism/).
- [[Source - The New Muslims Field Guide]] ch. 10 (hijab and modesty, men and women).
- [[Research Notes - Core Essentials and Madhab Map]] §5 and §9 (hijab ruling; gradual approach).

## Scholar flags
- **Screens 2–3, 6 (Q8).** The ruling is stated plainly; the pace is gradual per Qibla 35720; a sister who stopped is "a Muslim who had a hard stretch" with the ruling still standing. Doesn't adopt al-Qaradawi's wider tolerance.
- **Screen 9 (Q27).** A girl under 18 with opposing parents: not pressured, not told the ruling is optional, not told to defy her parents; routed to a female mentor and the imam.
- **Screens 4–5 ([SCHOLAR: Q29], the beard).** Drafted as: the Prophet ﷺ commanded it [Bukhari 5892]; "many scholars hold that keeping a beard is required; your imam can explain"; gradual growth; pushback from work or family goes to the imam. Needs a scholar's wording on how firmly to state the obligation (the Hanafi school holds shaving impermissible) and on trimming length, without making it a test of a new Muslim's sincerity.
