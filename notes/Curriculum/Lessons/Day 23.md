---
day: 23
phase: 1
unit: 4
title: "Your story"
hook: "Someone will ask why you became Muslim. You can answer in a minute, kindly, without freezing."
minutes: 5
skills: [T1]
pain_points: [freezing-up]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [tashahhud]
sources: [Bukhari 831, Q 16:125, Yaqeen 2025 (Becoming Muslim), Research Notes - Retention and Convert Voices]
format: 2
---
# Day 23 · Your story

### 1 · hook
```yaml
pic: icon:MessageCircle
text: "Sooner or later someone asks: \"So why did you become Muslim?\" Today you get a short, honest answer ready, so the question feels like an open door instead of a pop quiz."
```

### 2 · learn
```yaml
pic: icon:NotebookPen
text: "**You already wrote the start.** On Day 1 you answered a private question: what made you say yes to Islam? Open it now (it's in your reflections). That sentence is the heart of your story."
bubbles:
  - "You don't need a dramatic conversion moment. Most converts say they came to Islam by reading and thinking it through over time [Yaqeen 2025]."
  - "\"It made sense to me\" is a real answer."
```

### 3 · steps
```yaml
title: "A one-minute story has three parts"
steps:
  - text: "**Before:** one line about where you were. (\"I grew up going to church,\" or \"I wasn't really religious.\")"
    pic: icon:Clock
  - text: "**What drew me:** one or two things that moved you. (One God, the prayer, the Qur'an, a Muslim's kindness.)"
    pic: icon:Lightbulb
  - text: "**Now:** what it's like today. (\"It gives my day a shape.\")"
    pic: icon:Sun
done_text: "Keep it about you, not about what's wrong with anyone else."
```

### 4 · order
```yaml
prompt: "Put Destiny's one-minute story in order."
items:
  - "I grew up in church, and I always had questions about God."
  - "A friend gave me a Qur'an, and the idea of praying straight to one God hit me."
  - "Now I pray five times a day. Some days are hard, but it gives me peace."
pics: ["icon:Clock", quran, prayer-mat]
feedback: "Before, what drew me, now. Short and personal, with nothing to argue about."
```

### 5 · sort
```yaml
prompt: "Does it belong in your story?"
buckets: ["About me: keep it", "An argument: leave it out"]
items:
  - text: "\"The idea of one God just made sense to me.\""
    bucket: 0
    why: "Keep it. It's your own experience, and nobody can argue with that."
  - text: "\"Let me show you why your beliefs don't hold up.\""
    bucket: 1
    why: "Leave it out. A debate usually closes the door. The Qur'an asks for wisdom and kind words [Q 16:125]."
  - text: "\"The prayer gives my day a shape.\""
    bucket: 0
    why: "Keep it. What it's like now is the best ending."
  - text: "\"Everyone who isn't Muslim is missing the point.\""
    bucket: 1
    why: "Leave it out. Keep it about you, not about what's wrong with anyone else."
```

### 6 · scenario
```yaml
pic: family
situation: "Chris is asked about his conversion at a family barbecue. His cousin says, \"So you think the rest of us are wrong?\""
options:
  - text: "\"I'm just sharing what it means to me. I'm not here to put anyone down.\""
    best: true
    feedback: "Calm and kind. It keeps the door open and the focus on his own story."
  - text: "\"Well, yes. Let me explain why your beliefs don't hold up.\""
    best: false
    feedback: "Not quite. A debate usually closes the door. The Qur'an asks for wisdom and kind words [Q 16:125]."
  - text: "Go quiet and change the subject"
    best: false
    feedback: "Understandable, and sometimes fine. But a short, gentle answer usually goes better than silence."
```

### 7 · learn
```yaml
pic: icon:Lock
text: "**You set the limits.** You can share a little, a lot, or nothing. \"That's personal, but I'm happy\" is a full answer. If you haven't told your family yet, you choose who hears your story and when."
bubbles:
  - "And \"I don't know, let me find out\" is always allowed. You're three weeks in. Nobody expects you to be a scholar."
```

### 8 · reflect
```yaml
prompt: "Write your one-minute story: one line for Before, one or two for What drew me, one for Now. Start from what you wrote on Day 1."
share_with_mentor: optional
resurface: [day-1]
```

### 9 · roleplay
```yaml
character: "Jordan, a friendly coworker who just noticed you stepped out to pray"
setup: "You're on break in the break room. Jordan says: \"Hey, I saw you praying earlier. You're Muslim? Since when? What made you do that?\""
goal: "Tell your story in about a minute, stay relaxed, and handle one follow-up question."
success_looks_like: "You share Before, What drew me and Now in your own words; you answer a follow-up honestly (or say you'll find out); you stay warm and don't argue."
coach_notes: "Jordan is curious and kind, not hostile. After the story, Jordan asks one follow-up, such as \"Was it for a guy/girl?\", \"Do you have to pray at work?\" or \"Isn't that a big change?\". Debrief: name one thing the convert did well, point out if the story ran long or turned into a debate, and suggest one sentence to tighten."
```

### 10 · ask_ai
```yaml
chips:
  - "Help me shorten my story to one minute"
  - "What if someone asks if I converted for marriage?"
  - "How do I answer if I'm not public yet?"
  - "What if I get asked something I can't answer?"
```

### 11 · do_today
```yaml
pic: icon:Timer
text: "Say your story out loud once."
steps:
  - "Tell your one-minute story to a mirror, or just to yourself"
  - "Time it"
optional_extra: "If you trust someone (your mentor, a Muslim friend), tell it to them and ask what stood out."
```

### 12 · takeaway
```yaml
pic: icon:MessageCircle
text: "Before, what drew me, now: your story in one minute, about you, with no argument needed."
```

### 13 · closing
Your story is still being written. Telling the first chapter well is enough for today.

---

## Prayer phrase
```yaml
arabic: "السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ"
translit: "As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh"
meaning: "Peace be on you, O Prophet, with Allah's mercy and His blessings"
audio_id: tashahhud-2
when: "Tashahhud part 2. In the sitting, right after yesterday's \"At-tahiyyatu lillahi was-salawatu wat-tayyibat\". These are the words the Prophet ﷺ taught for the sitting [Bukhari 831]."
```

## Check
```yaml
- prompt: "What are the three parts of a one-minute conversion story?"
  options:
    - text: "Before, what drew me, now"
      correct: true
      feedback: "Right. Short, personal and easy to remember."
    - text: "My old religion's mistakes, Islam's proofs, a challenge"
      correct: false
      feedback: "Not quite. Keep it about your own journey, not about what's wrong with others."
- prompt: "Someone asks why you became Muslim, but you're not ready to share. What can you say?"
  options:
    - text: "\"That's personal, but I'm happy with it.\""
      correct: true
      feedback: "Right. You decide how much to share and with whom."
    - text: "You have to give a full explanation"
      correct: false
      feedback: "Not quite. Nobody is owed your story. A short, kind answer is enough."
```

## AI guide context
**Lesson facts**
- A conversion story works best short and personal: Before, What drew me, Now. It's about the convert's own experience, not a critique of anyone's faith [Q 16:125: invite with wisdom and good instruction].
- Most American converts say study and reflection drew them; only a minority cite marriage (Yaqeen 2025: 99% said study influenced them; 17% cited marriage).
- The convert controls who hears their story and when. "That's personal" is a complete answer.
- "I don't know, let me find out" is a strength, not a failure.
- Prayer phrase: tashahhud part 2, from the wording of Ibn Mas'ud [Bukhari 831].

**Likely questions**
- *"Help me shorten my story."* Ask for their draft (or their Day 1 reflection if they choose to paste it) and trim it to 4–5 sentences in their own voice. Don't add religious claims they didn't make.
- *"Did you convert for marriage?"* Suggest a light, honest reply ("No, I came to it on my own," or, if true, "I met Islam through someone, but I chose it for myself").
- *"How do I answer if I'm not public yet?"* Help them choose a non-answer that isn't a lie: "I've been reading about a lot of things lately."
- *"Why do you say peace to the Prophet ﷺ in the prayer?"* It's the wording he taught his Companions for the sitting [Bukhari 831]; Muslims send him greetings of peace as a sign of love and respect.

**Escalate:** a convert facing danger or threats because people found out (safety rule first); someone pressuring them to go public.

**Don't**
- Don't script a story for them that isn't theirs, or exaggerate it.
- Don't encourage debating or "proving" other religions wrong.
- Don't push them to tell anyone they aren't ready to tell.

**Role-play brief:** Jordan is a curious, friendly coworker. Not hostile, no traps. One follow-up question. Debrief briefly: one strength, one tweak, a tighter sentence.

## Sources
- [Bukhari 831](https://sunnah.com/bukhari:831): the tashahhud of 'Abdullah ibn Mas'ud (the Hanafi wording).
- Qur'an [16:125](https://quran.com/16/125): invite with wisdom and good instruction.
- Yaqeen Institute, *Becoming Muslim: The Lives of American Converts to Islam* (2025), via [[Research Notes - Retention and Convert Voices]] R1: what drew converts.
- [[Research Notes - Retention and Convert Voices]]: converts freezing up when asked, and fear of being judged.
