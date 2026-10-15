---
day: 54
phase: 2
unit: 7
title: "If you're struggling with something"
hook: "Drinking, weed, porn, vaping, gambling: a habit that came with you into Islam. You're not a fake. Here's how to keep going."
minutes: 5
skills: [S5]
pain_points: [guilt, struggling]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [Allah, ﷺ, tawbah, Astaghfirullah, du'a, wudu, rak'ah]
sources: [Q 5:90, Q 4:43, Q 39:53, Bukhari 6780, Bukhari 5678, IslamWeb 281668, IslamWeb 10399, Research Notes - Core Essentials and Madhab Map (§6c, struggling vs. denying)]
format: 2
---
# Day 54 · If you're struggling with something

### 1 · hook
```yaml
pic: fresh-start
text: "Maybe it's drinking, weed, porn, vaping or gambling: something that came with you into Islam and hasn't left yet. If you feel like a fake, this lesson is for you. Your answers here are private."
```

### 2 · learn
```yaml
pic: icon:Mountain
text: "**Struggling isn't denying.** Alcohol, drugs and gambling are forbidden [Q 5:90]. A Muslim who believes that and still slips is a believer in a hard fight, not a hypocrite."
bubbles:
  - "Saying \"it's not really wrong\" would be a different thing: that's denying."
  - "Wanting to stop and falling short is struggling. Struggling Muslims are still Muslims."
```

### 3 · sort
```yaml
prompt: "Struggling or denying? Sort what each person says."
buckets: ["Struggling", "Denying"]
items:
  - text: "\"I know drinking is wrong. I keep slipping, and I hate it.\""
    bucket: 0
    why: "Believes it's wrong, falls short, wants to stop. That's a Muslim in a hard fight."
  - text: "\"Weed isn't really haram. That rule is outdated.\""
    bucket: 1
    why: "Calling the rule not really wrong is denying, a different thing from slipping."
  - text: "\"I slipped again last night. I said Astaghfirullah and prayed Fajr.\""
    bucket: 0
    why: "Slipping, repenting and praying the next prayer. That's exactly what struggling looks like."
  - text: "\"Gambling is fine for me. The rule doesn't apply to me.\""
    bucket: 1
    why: "Waving the rule away is the slide into denying. Keep calling it what it is."
```

### 4 · learn
```yaml
pic: icon:Shield
text: "**The Prophet ﷺ defended a struggler.** A Companion named 'Abdullah was punished more than once for drinking. When someone cursed him, the Prophet ﷺ told him not to: this man loves Allah and His Messenger [Bukhari 6780]."
bubbles:
  - "His sin was real, and so was his love for Allah. Both can be true of you, too."
```

### 5 · choice
```yaml
pic: icon:Clock
prompt: "Dre got drunk last night. Today he feels ashamed. What should he do about today's prayers?"
options:
  - text: "Pray them, once he's clear-headed, and make up any he missed"
    correct: true
    feedback: "Yes. Prayer isn't for perfect people. Skipping it would add a second wrong to the first [IslamWeb 281668]."
  - text: "Skip prayer until he's been sober for a while"
    correct: false
    feedback: "Not quite. Prayer stays due, and it's part of how he gets better. Pray as soon as he's clear-headed."
  - text: "Pray while he's still drunk, so he doesn't miss it"
    correct: false
    feedback: "Not quite. The Qur'an says not to pray intoxicated [Q 4:43]. Wait until he's clear, then pray."
```

### 6 · learn
```yaml
pic: prayer-mat
text: "**Keep praying, no matter what.** Scholars say someone who keeps falling into a sin must keep praying. Dropping prayer doesn't make you more honest; it just adds a second wrong [IslamWeb 281668]."
bubbles:
  - "And the door of **tawbah** (turning back to Allah) never closes. Repent each time, even the hundredth time."
```

### 7 · fill
```yaml
before: "Allah says not to despair of His mercy: He forgives"
after: "sins [Q 39:53]."
options:
  - text: "all"
    correct: true
    feedback: "Yes. All sins [Q 39:53]. The door of tawbah never closes, even the hundredth time."
  - text: "only small"
    correct: false
    feedback: "Not quite. Allah forgives all sins [Q 39:53]. No habit is bigger than His mercy."
  - text: "first-time"
    correct: false
    feedback: "Not quite. He forgives all sins [Q 39:53]. Repent each time you slip."
```

### 8 · scenario
```yaml
pic: icon:Sprout
situation: "Jordan has smoked weed most nights for years. He's tried to stop since becoming Muslim and keeps slipping. He's starting to think, \"Maybe Islam isn't for people like me.\""
options:
  - text: "Keep praying, tell {{mentor.name}} or a counselor, and make a real plan: fewer triggers, a replacement habit, outside help"
    best: true
    feedback: "Yes. Faith plus a plan plus support. Long habits rarely break on willpower alone."
  - text: "Quietly stop praying until he's clean, so he's not a hypocrite"
    best: false
    feedback: "Not quite. Prayer is his lifeline, not a reward for being clean. Struggling while praying isn't hypocrisy."
  - text: "Decide it's fine since he can't stop anyway"
    best: false
    feedback: "Not quite. That's the slide from struggling to denying. Keep calling it what it is, and keep fighting it."
```

### 9 · learn
```yaml
pic: icon:LifeBuoy
text: "**Get real help.** Addiction is a health problem as well as a spiritual one. The Prophet ﷺ taught that Allah made a treatment for every illness He created [Bukhari 5678]. Seeking it is part of faith."
bubbles:
  - "Talk to a doctor or counselor. In the US, the free, confidential **SAMHSA helpline is 1-800-662-4357**, any time."
  - "Support groups help too. And {{mentor.name}} won't judge you."
```

### 10 · reveal
```yaml
title: "Small moves that help. Tap each one."
cards:
  - front: "Change the setting"
    back: "Delete the contact, skip the party, get rid of the stash. Make the slip harder to reach."
    pic: icon:Ban
  - front: "Swap, don't just stop"
    back: "Pick something for that time of day: a walk, the gym, a call, wudu and two rak'ahs."
    pic: icon:RefreshCw
  - front: "Tell one person"
    back: "A mentor, counselor or friend you trust. Secrets make habits stronger."
    pic: icon:MessageCircle
  - front: "After a slip"
    back: "Say Astaghfirullah, make wudu, pray the next prayer, and start again. No spiral."
    pic: icon:Undo2
```

### 11 · ask_ai
```yaml
chips:
  - "I slipped again. Does Allah still forgive me?"
  - "How do I tell my mentor without feeling ashamed?"
  - "Can I pray if I drank earlier today?"
  - "Where can I find help near me?"
```

### 12 · do_today
```yaml
pic: icon:Phone
text: "If something has a hold on you, take one step today."
steps:
  - "Pick one: save the helpline number (1-800-662-4357), tell one person, or remove one trigger"
  - "Pray your next prayer on time"
log: null
optional_extra: "Make a short du'a in your own words: \"Allah, help me let go of this.\""
```

### 13 · takeaway
```yaml
pic: icon:Heart
text: "Struggling isn't denying. Keep praying, repent every time, and get real help. Allah's mercy is bigger than your habit."
```

### 14 · closing
Change usually comes slowly, with slips along the way. Every time you come back counts.

---

## Check
```yaml
- prompt: "Someone keeps slipping into drinking. What does Islam say about their prayer?"
  options:
    - text: "Keep praying; dropping prayer adds a second wrong"
      correct: true
      feedback: "Right [IslamWeb 281668]. Pray when clear-headed, and keep repenting."
    - text: "Stop praying until they've quit"
      correct: false
      feedback: "Not quite. Prayer stays due and helps them heal. Quitting it adds a second wrong."
- prompt: "What's the difference between struggling and denying?"
  options:
    - text: "Struggling: you believe it's wrong but fall short. Denying: you say it isn't wrong"
      correct: true
      feedback: "Right. A struggling Muslim is still a Muslim working on it."
    - text: "There's no difference; any sin makes you a hypocrite"
      correct: false
      feedback: "Not quite. The Prophet ﷺ defended a man who kept drinking but loved Allah [Bukhari 6780]."
```

## AI guide context
**Lesson facts**
- Intoxicants and gambling are forbidden [Q 5:90]. Don't pray while intoxicated; pray once clear [Q 4:43], and make up missed prayers.
- Struggling (believing it's wrong, falling short) differs from denying (rejecting the prohibition). A persistent drinker must keep praying; abandoning prayer adds a second sin [IslamWeb 281668; IslamWeb 10399].
- The Prophet ﷺ forbade cursing a man repeatedly punished for drinking, saying he loved Allah and His Messenger [Bukhari 6780].
- Repentance is always open; Allah forgives all sins [Q 39:53]. Allah created a treatment for every disease [Bukhari 5678]: seeking medical and counseling help is encouraged.
- Help: a doctor or counselor; SAMHSA National Helpline 1-800-662-4357 (free, confidential, 24/7, US); support groups; the mentor.

**Likely questions**
- *"I slipped again. Am I still Muslim?"* Yes. Struggling isn't denying. Repent, pray the next prayer, make a plan. Never imply they've left Islam.
- *"Can I pray if I drank earlier?"* Once they're clear-headed, yes, and they should. Make a fresh wudu: in the Hanafi school, being intoxicated breaks wudu. Don't pray while intoxicated [Q 4:43].
- *"Is weed / vaping / porn haram?"* Intoxicants are forbidden [Q 5:90]; porn violates lowering the gaze [Q 24:30–31]. For vaping or specific substances (e.g., prescribed medication, CBD), route details to the imam.
- *"How do I tell my mentor?"* Help them script it: "I'm struggling with something and want help." They choose how much to share.
- *"Is there a hadith about prayers not being accepted for 40 days?"* Don't cite it (not in the bank). Say: whatever the reward question, the prayer stays required, and repentance is always open.

**Escalate:** withdrawal symptoms or medical danger (doctor/911; alcohol and benzodiazepine withdrawal can be dangerous); any mention of self-harm or suicide (safety rule: 988); working in a bar, liquor store or casino (imam); prescribed medication containing alcohol or controlled substances (imam and doctor).

**Don't**
- Never shame, threaten with Hell, or use the "40 days" warning to pressure.
- Never tell someone their prayers are pointless while they're struggling, or that they should stop praying.
- Don't diagnose or give medical advice; point to professionals.
- Don't promise quick fixes or say faith alone will cure an addiction.

## Sources
- Qur'an [5:90](https://quran.com/5/90), [4:43](https://quran.com/4/43), [39:53](https://quran.com/39/53).
- [Bukhari 6780](https://sunnah.com/bukhari:6780): 'Abdullah, punished for drinking; the Prophet ﷺ forbade cursing him because he loved Allah and His Messenger.
- [Bukhari 5678](https://sunnah.com/bukhari:5678): Allah created no disease without its treatment.
- [IslamWeb 281668](https://islamweb.net/amp/en/fatwa/281668): a persistent drinker must not stop praying; [IslamWeb 10399](https://www.islamweb.net/en/fatwa/10399/ruling-on-someone-who-drinks-alcohol-and-observes-prayer-and-fasting).
- [[Research Notes - Core Essentials and Madhab Map]] §6(c): struggling vs. denying.
- [SAMHSA National Helpline](https://www.samhsa.gov/find-help/helplines/national-helpline): 1-800-662-4357.
