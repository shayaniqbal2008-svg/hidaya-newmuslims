---
day: 10
phase: 1
unit: 2
title: "Making Muslim friends"
hook: "Lots of converts say the hardest part isn't the rules. It's being alone."
minutes: 5
skills: [B3]
pain_points: [loneliness]
logs: [went_to_social_event]
madhab_sensitive: true
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, imam, salam, Isha, ﷺ]
sources: [Bukhari 2101, Bukhari 12, Bukhari 734, Yaqeen 2025, Field Guide ch. 12, Welcome to Islam D5, Research Notes - Retention and Convert Voices, Personal Research via reddit]
format: 2
---
# Day 10 · Making Muslim friends

### 1 · hook
```yaml
pic: community
text: "Many new Muslims get hugs on the day of their shahada, and then… quiet. If you've felt lonely since, you're not doing anything wrong. It's one of the most common things converts go through. Today is about finding your people."
```

### 2 · learn
```yaml
pic: icon:Users
text: "**You're not imagining it.** In a survey of over 600 US converts, loneliness came up again and again, and about 4 in 10 felt lonely at Ramadan or Eid [Yaqeen 2025]."
```

### 3 · multi
```yaml
prompt: "The same survey found what helps converts most. Which of these? Select all that apply."
options:
  - text: "Muslim friends who practice"
    correct: true
    feedback: "Yes. People, not just knowledge."
  - text: "Feeling at home in a masjid"
    correct: true
    feedback: "Yes. A masjid that feels like yours makes a real difference."
  - text: "A good imam"
    correct: true
    feedback: "Yes. Someone you can bring your questions to."
  - text: "Studying alone until you know enough"
    correct: false
    feedback: "Not quite. Knowledge matters, but people helped most [Yaqeen 2025]."
```

### 4 · reveal
```yaml
title: "The Prophet ﷺ compared friends to two people [Bukhari 2101]"
cards:
  - front: "A good friend is like…"
    back: "…someone selling perfume. Even if you buy nothing, you leave smelling good."
    pic: icon:SprayCan
  - front: "A bad friend is like…"
    back: "…a blacksmith's furnace. At the least, you leave smelling of smoke."
    pic: icon:Flame
```

### 5 · scenario
```yaml
pic: masjid
situation: "After Isha, people break into little groups and chat. Tyler sits by himself near the wall, scrolling his phone. Nobody comes over."
options:
  - text: "Walk up to one group, say salam, and say \"I'm new here\""
    best: true
    feedback: "Yes. It feels scary for ten seconds, then usually turns into \"Welcome! Where are you from?\""
  - text: "Find the imam and ask what's on this week"
    best: true
    feedback: "Also great. The imam knows the classes and the friendly people, and can introduce you."
  - text: "Leave; maybe next time someone will notice"
    best: false
    feedback: "Understandable, but people often assume newcomers want space. One hello from you breaks it open."
```

### 6 · steps
```yaml
title: "Where friends happen"
steps:
  - text: "**Stay 10 minutes** after a prayer. Say salam to one person"
    pic: icon:Clock
  - text: "**Go to one class, circle or dinner.** Many masjids have new-Muslim or youth groups"
    pic: icon:Users
  - text: "**Help out.** Setting up chairs for an event is the fastest way to know people"
    pic: icon:Armchair
  - text: "**Ask {{mentor.name}}** to introduce you to someone your age"
    pic: icon:UserPlus
```

### 7 · learn
```yaml
pic: icon:HeartHandshake
text: "**Greet people.** The Prophet ﷺ counted greeting with salam, people you know and people you don't, among the best things in Islam [Bukhari 12]. *As-salamu 'alaykum* opens a lot of doors."
bubbles:
  - "**Keep your good friends from before, too.** Islam doesn't ask you to drop them. Only step back from anyone pulling you toward what you're leaving behind [Field Guide ch. 12]."
```

### 8 · sort
```yaml
prompt: "Good company, or someone to step back from?"
buckets: ["Good company", "Step back"]
items:
  - text: "Someone who practices and encourages you"
    bucket: 0
    why: "That's the \"just right\" friend [Field Guide ch. 12]. Like the perfume seller."
  - text: "Someone who makes you feel small for what you don't know yet"
    bucket: 1
    why: "Good friends never make you feel small for being new."
  - text: "A kind friend from before Islam"
    bucket: 0
    why: "Keep them. Islam doesn't ask you to drop good friends."
  - text: "Someone pulling you back toward what you're leaving behind"
    bucket: 1
    why: "That's the one to step back from [Field Guide ch. 12]."
```

### 9 · choice
```yaml
pic: icon:Smartphone
prompt: "Maria met two new Muslims online. One is a woman her age in her city; the other is a man who messages her late at night, offering to \"teach her Islam\" privately. What fits today's lesson?"
options:
  - text: "Meet the woman at the masjid; tell her mentor about the man and don't reply privately"
    correct: true
    feedback: "Right. Friendship with the same gender, in public places. A stranger offering private lessons is a warning sign."
  - text: "Accept the private lessons; he seems knowledgeable"
    correct: false
    feedback: "Not quite. Real teachers teach in classes and groups. Private late-night messages are a red flag."
  - text: "Avoid all Muslims online, to be safe"
    correct: false
    feedback: "Not quite. Online can work, with care. Meet in public, stay with your own gender, involve your mentor."
```

### 10 · roleplay
```yaml
character: "A friendly Muslim about the convert's age and the same gender, sitting near them after the prayer. Warm, a bit shy, born Muslim."
setup: "You're at {{masjid.name}} after a prayer. You've decided to say salam to the person next to you."
goal: "Start a short, friendly conversation and find one thing to do together (a class, coffee, a game, an event)."
success_looks_like: "You greet them, share a little about yourself, ask about them, and suggest or accept one plan."
coach_notes: "They're happy to talk but won't push. They might ask, 'How long have you been Muslim?' or mention a weekly halaqa or a basketball night. Keep it light and same-gender. Debrief: what opened the conversation, and one question to use next time."
```

### 11 · ask_ai
```yaml
chips:
  - "I'm shy. How do I start a conversation at the masjid?"
  - "My masjid is mostly one ethnic group. How do I fit in?"
  - "There's no masjid near me. What can I do?"
  - "Can I keep my non-Muslim friends?"
```

### 12 · do_today
```yaml
pic: icon:Calendar
text: "Find one social thing at {{masjid.name}} this week."
steps:
  - "Pick one: a class, circle, dinner or youth night"
  - "Put it in your calendar"
  - "Go, then tap when you've been"
log: went_to_social_event
optional_extra: "Today, stay a few minutes after one prayer and say salam to one person."
```

### 13 · takeaway
```yaml
pic: community
text: "Friends who practice and encourage you are part of your faith. Say salam, show up once, and let people in."
```

### 14 · closing
One hello at a time.

---

## Prayer phrase
```yaml
arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ... رَبَّنَا وَلَكَ الْحَمْدُ"
translit: "Sami'a Allahu liman hamidah … Rabbana wa lakal-hamd"
meaning: "Allah hears whoever praises Him … Our Lord, and to You is all praise"
audio_id: rising-from-ruku
when: "Rising from bowing: say Sami'a Allahu liman hamidah as you come up, and Rabbana wa lakal-hamd once you're standing still. Behind an imam, he says the first part aloud; {{masjid.name}} will show you what you say. [Bukhari 734]"
variants:
  hanafi:
    when: "Rising from bowing: say Sami'a Allahu liman hamidah as you come up, and Rabbana wa lakal-hamd once you're standing still. Behind an imam, he says the first part; you say only Rabbana wa lakal-hamd. [Bukhari 734]"
```

## Check
```yaml
- prompt: "What did the Prophet ﷺ compare a good friend to?"
  options:
    - text: "Someone selling perfume"
      correct: true
      feedback: "Right [Bukhari 2101]. Good company rubs off on you, even without trying."
    - text: "A blacksmith's furnace"
      correct: false
      feedback: "Not quite. That was the bad friend. The good one is like a perfume seller [Bukhari 2101]."
- prompt: "Behind an imam, what do you say as you rise from bowing (Hanafi)?"
  options:
    - text: "Rabbana wa lakal-hamd"
      correct: true
      feedback: "Right. The imam says Sami'a Allahu liman hamidah; you answer Rabbana wa lakal-hamd [Bukhari 734]."
    - text: "Nothing at all"
      correct: false
      feedback: "Not quite. You answer the imam with Rabbana wa lakal-hamd [Bukhari 734]."
```

## AI guide context
**Lesson facts**
- Loneliness is the most common convert theme; about 40% felt lonely at Ramadan or Eid; religious Muslim friends, mosque attachment and a capable imam are the strongest predictors of positive faith development [Yaqeen 2025; Research Notes - Retention and Convert Voices].
- The good companion is like a perfume seller; the bad like a blacksmith's bellows [Bukhari 2101].
- Greeting people you know and don't know is among the best acts [Bukhari 12].
- Keep good non-Muslim friends; step back from those pushing you toward what you're leaving [Field Guide ch. 12]. Don't isolate [Welcome to Islam D5].
- Friendships stay same-gender; be wary of anyone (especially online) offering private lessons, pushing marriage, asking for money, or isolating the convert (Spec §6.2 rule 12).
- Rising from ruku': someone praying alone says both phrases; in the Hanafi school the follower says only *Rabbana wa lakal-hamd* [Bukhari 734; First Instructions on Worship].

**Likely questions**
- *"I'm shy."* One small step: say salam, give your name, say you're new. Or ask the mentor to introduce them.
- *"Mostly one ethnic group."* Common experience; it's okay; look for youth or convert groups, other masjids' convert programs, and the mentor. Don't criticize the community.
- *"No masjid nearby."* Online convert circles with care, the nearest masjid's events once a month, the mentor by message.
- *"Can I keep non-Muslim friends?"* Yes, with the caveat above.
- *"Someone online wants to marry me / teach me privately / asked for money."* Warn gently and route to the mentor (Spec §6.2 rule 12).

**Escalate:** any sign of grooming, marriage pressure, financial exploitation or isolation by an individual; a minor being contacted privately by an adult.

**Don't:** suggest opposite-gender close friendships; shame the convert for being lonely; push them to cut off old friends.

**Role-play brief:** A friendly, slightly shy born-Muslim of the same gender and age, after a prayer. Mentions one event (a weekly circle, a sports night, a potluck). Never pushy, never romantic. Debrief: what worked and one opener to reuse.

## Madhab note
Rising from bowing: in the Hanafi school, the imam says *Sami'a Allahu liman hamidah* and the follower says only *Rabbana wa lakal-hamd*; someone praying alone says both. In the Shafi'i school, everyone, follower included, says both. Some wordings drop the "wa" (*Rabbana lakal-hamd*) or add *Allahumma* at the start; all are authentic.

## Sources
- [Bukhari 2101](https://sunnah.com/bukhari:2101): the perfume seller and the blacksmith. [Bukhari 12](https://sunnah.com/bukhari:12): greeting with salam.
- [Bukhari 734](https://sunnah.com/bukhari:734): when the imam says *Sami'a Allahu liman hamidah*, say *Rabbana wa lakal-hamd* (Arabic copied from this hadith).
- [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam).
- [[Source - The New Muslims Field Guide]] ch. 12 (the company you keep). [[Source - Welcome to Islam]] Day 5 (don't isolate yourself).
- [[Source - First Instructions on Worship]] (Hanafi): what the follower says rising from bowing.
- [[Research Notes - Retention and Convert Voices]] (theme 1, loneliness; V2, V10, V15); [[Personal Research via reddit on pain points for converts]] (loneliness; hugs at the shahada, then no follow-through).
- Madhab note (verified, T2 final review): [IslamQA.org/Shafi'i Fiqh 30035: the follower says both when rising](https://islamqa.org/shafii/shafiifiqh/30035/does-the-follower-say-the-tasmi-and-tahmid-when-coming-up-from-bowing/); [IslamQA.org/Askimam 2031 (Hanafi follower)](https://islamqa.org/hanafi/askimam/2031/when-the-imam-says-samiallahuliman-hamidah-do-we-as-muqtadi-also-say-it-or-do-we-only-say-rabbana-lakal-hamd/).
