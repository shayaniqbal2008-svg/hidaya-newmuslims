---
day: 18
phase: 1
unit: 3
title: "Building your circle"
hook: "You don't need a crowd. You need one mentor, one friend and one class."
minutes: 5
skills: [B2, B3]
pain_points: [loneliness]
logs: [messaged_mentor]
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: [masjid, halaqa, Jumu'ah, al-Ikhlas, Allah, ﷺ]
sources: [Bukhari 2101, Abu Dawud 4833, Q 60:8, Q 112:3–4, Yaqeen 2025 (Becoming Muslim), Field Guide ch. 12, Revealed Path ch. 17]
format: 2
---
# Day 18 · Building your circle

### 1 · hook
```yaml
pic: community
text: "The shahada can come with hugs and smiles, and then a quiet week. If it's felt lonely, you're not imagining it, and it doesn't mean you chose wrong. Today you start building your circle on purpose."
```

### 2 · learn
```yaml
pic: icon:Users
text: "**You weren't meant to do this alone.** In a large survey of American converts, loneliness was one of the hardest parts, especially around holidays [Yaqeen 2025]."
bubbles:
  - "Faith grows faster with people around you."
```

### 3 · fill
```yaml
before: "In that survey, the converts who did best had"
after: "at the masjid and a real connection there."
options:
  - text: "friends"
    correct: true
    feedback: "Yes. Friends at the masjid made the biggest difference [Yaqeen 2025]."
  - text: "a perfect prayer"
    correct: false
    feedback: "Not quite. It was friends at the masjid and a real connection there [Yaqeen 2025]."
  - text: "lots of books"
    correct: false
    feedback: "Not quite. Books help, but people made the difference: friends at the masjid [Yaqeen 2025]."
```

### 4 · learn
```yaml
pic: icon:Sparkles
text: "**Company shapes you.** The Prophet ﷺ compared a good friend to someone who sells perfume: even if you buy nothing, you leave smelling good [Bukhari 2101]."
bubbles:
  - "He also taught that people tend to take on the ways of their close friends, so choose them with care [Abu Dawud 4833]."
  - "Keep your old friends too, with kindness [Q 60:8]. Step back only from what pulls you away from Allah [Field Guide ch. 12]."
```

### 5 · sort
```yaml
prompt: "Your old friends: keep it, or step back?"
buckets: ["Keep it", "Step back"]
items:
  - text: "Coffee with a college friend who isn't Muslim"
    bucket: 0
    why: "Keep it. Islam asks you to be kind to friends who aren't Muslim [Q 60:8]."
  - text: "A nights-out routine built around drinking"
    bucket: 1
    why: "Step back from the drinking, not the person. Suggest a meal or a game instead."
  - text: "Pickup basketball with your usual crew"
    bucket: 0
    why: "Keep it. Nothing here pulls you away from Allah."
  - text: "A friend's birthday dinner"
    bucket: 0
    why: "Keep it. Eat what's halal for you, and enjoy the company."
```

### 6 · reveal
```yaml
title: "Your circle: three people to find"
cards:
  - front: "One mentor"
    pic: icon:UserCheck
    back: "Someone further along who you can text with questions: {{mentor.name}}, or someone your imam suggests. Not someone you met online last week."
  - front: "One friend"
    pic: icon:Coffee
    back: "A Muslim around your age and stage of life, ideally another convert. Someone you'd grab food with, not just pray next to."
  - front: "One class"
    pic: icon:BookOpen
    back: "A weekly halaqa (study circle), a new-Muslim class or a youth night at {{masjid.name}}. Showing up weekly matters more than which class."
```

### 7 · scenario
```yaml
pic: community
situation: "After Jumu'ah, a woman invites Hannah to a new-Muslim dinner on Saturday. Hannah's tired, a bit shy, and doesn't know anyone going."
options:
  - text: "Say yes, and ask if she can come with someone"
    best: true
    feedback: "Great choice. Arriving with someone makes it easier. One dinner can turn into a real friend."
  - text: "Say maybe, then not go"
    best: false
    feedback: "Very human. But these invites don't always come twice. Going once, even for an hour, is worth it."
  - text: "Decline. She'll wait until she knows more"
    best: false
    feedback: "Not quite. You don't need to know more to belong. People there were new once too."
```

### 8 · learn
```yaml
pic: icon:ShieldCheck
text: "**A word of care.** Real friends and mentors never rush you. If someone does, step back and tell {{mentor.name}}."
bubbles:
  - "{teen}Under 18? Your mentor will be an adult the masjid has checked, messages include a second adult, and meetings happen in public masjid spaces.{/teen}"
```

### 9 · sort
```yaml
prompt: "A good friend, or a warning sign?"
buckets: ["Good sign", "Warning sign"]
items:
  - text: "Invites you to a class at the masjid, no pressure"
    bucket: 0
    why: "Healthy. An open invite you can take or leave."
  - text: "Pushes you to get married quickly"
    bucket: 1
    why: "Warning sign. Real friends never rush you. Tell your mentor."
  - text: "Asks you for money"
    bucket: 1
    why: "Warning sign. Be cautious, and talk to your mentor."
  - text: "Wants you to join their group and drop everyone else"
    bucket: 1
    why: "Warning sign. Pulling you toward a new group, away from others, is a red flag."
  - text: "Says to cut off your family"
    bucket: 1
    why: "Warning sign. Islam asks you to be good to your family. Tell your mentor."
  - text: "Lets you go at your own pace"
    bucket: 0
    why: "Healthy. Good company never rushes you."
```

### 10 · reflect
```yaml
prompt: "Draw your circle. Who do you already have (a mentor, a Muslim friend, a class)? Which one is missing, and what's one step toward it this week?"
share_with_mentor: optional
```

### 11 · ask_ai
```yaml
chips:
  - "Where can I find other converts near me?"
  - "I feel awkward at the masjid. Any tips?"
  - "How do I keep my non-Muslim friends?"
  - "What happens at a halaqa?"
```

### 12 · do_today
```yaml
pic: icon:MessageCircle
text: "Message your mentor today."
steps:
  - "Send {{mentor.name}} a short note on how your week's going"
  - "Add one question you have. Two lines counts"
log: messaged_mentor
optional_extra: "Ask {{masjid.name}} or your mentor which class or social night is coming up, and put it in your calendar."
```

### 13 · takeaway
```yaml
pic: icon:HeartHandshake
text: "One mentor, one friend, one class. Good company makes faith easier, and kindness keeps your old friendships too."
```

### 14 · closing
Circles are built one message and one dinner at a time.

---

## Prayer phrase
```yaml
arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"
translit: "Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad"
meaning: "He has no child and was not born, and nothing is equal to Him"
audio_id: ikhlas-3-4
when: "This completes al-Ikhlas. From today, in the first two rak'ahs of every prayer, recite al-Fatiha, then Bismillah and al-Ikhlas. In rak'ahs 3 and 4, al-Fatiha only. [Q 112:3–4]"
```

## Check
```yaml
- prompt: "What three people does today's lesson suggest building around you?"
  options:
    - text: "One mentor, one Muslim friend, one class"
      correct: true
      feedback: "Right. Small and steady beats a big crowd."
    - text: "As many online followers as possible"
      correct: false
      feedback: "Not quite. A few real people nearby help far more than a big online circle."
- prompt: "Someone you just met pushes you to marry quickly and stop seeing your family. What should you do?"
  options:
    - text: "Step back and tell your mentor"
      correct: true
      feedback: "Right. Real friends never rush you or isolate you."
    - text: "Go along with it; they seem very religious"
      correct: false
      feedback: "Not quite. Pressure toward marriage, money or isolation is a warning sign. Talk to your mentor."
```

## AI guide context
**Lesson facts**
- Loneliness after the shahada is the most common convert struggle; friends at the masjid and mosque attachment predict better outcomes; about 40% feel lonely at Ramadan or Eid [Yaqeen 2025 (Becoming Muslim); Research Notes - Retention and Convert Voices].
- Good company: the perfume seller and the blacksmith [Bukhari 2101]; people take on their close friends' ways [Abu Dawud 4833, hasan per al-Albani]; keep company that helps you [Revealed Path ch. 17].
- Keep non-Muslim friends with kindness [Q 60:8]; step back only from what pulls you away from your faith [Field Guide ch. 12].
- Warning signs: pressure toward quick marriage, money, a group, or isolation from family; route to the mentor (Spec §6.2 rule 12).
- For under-18s: safeguarding rules (vetted same-gender mentor where possible, no private one-to-one messages, public masjid spaces).
- Today al-Ikhlas is complete; the convert now recites al-Fatiha then al-Ikhlas in the first two rak'ahs of each prayer, al-Fatiha alone in rak'ahs 3–4 [First Instructions on Worship ch. 7].

**Likely questions**
- *"Where do I find other converts?"* Ask the masjid about a new-Muslim class or convert circle; ask the mentor for introductions. Don't name specific online groups.
- *"I feel awkward at the masjid."* Normal. Go at the same time each week, arrive a little early, stay a few minutes after, and say salam to one person.
- *"My old friends drink and party."* Keep the friendship where you can (coffee, sports, a meal); skip what's haram; be honest and kind. Day 13 and Day 56 cover more.
- *"No one replies to me at the masjid / my mentor is slow."* Validate; suggest one more try, then use "Ask my imam" to ask the masjid for a mentor. Never blame the convert.
- *"Can I meet my mentor alone?"* For adults: public places at the masjid are best at first. For under-18s: never one-to-one; a second adult is always included.

**Escalate:** someone pressuring the convert toward marriage, money or isolation; any sign of grooming or exploitation (especially with minors); a convert with no mentor assigned (send to the masjid queue). Danger at home follows the safety rule.

**Don't**
- Don't tell them to drop non-Muslim friends.
- Don't push marriage as the cure for loneliness, especially for teens.
- Don't shame them for not having a circle yet.

## Sources
- [Bukhari 2101](https://sunnah.com/bukhari:2101): the good companion and the perfume seller.
- [Abu Dawud 4833](https://sunnah.com/abudawud:4833) (hasan, al-Albani): a person follows the way of their close friend.
- Qur'an [60:8](https://quran.com/60/8), [112:3–4](https://quran.com/112/3-4).
- [Yaqeen Institute: Becoming Muslim (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam): loneliness, friendships, mosque attachment.
- [[Source - The New Muslims Field Guide]] ch. 12 (the company you keep; keeping non-Muslim friends).
- [[Source - The Revealed Path]] ch. 17 (company and surroundings).
- [[Research Notes - Retention and Convert Voices]] (loneliness and mentoring themes).
