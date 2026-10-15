---
day: 56
phase: 2
unit: 7
title: "Men, women and boundaries"
hook: "Coworkers, classmates, the person in your DMs. Islam doesn't ask you to avoid half the world. It asks for some clear lines."
minutes: 5
skills: [B4]
pain_points: [gender-at-work]
logs: []
madhab_sensitive: false
scholar_flags: [Q9]
status: draft-pending-scholar-review
glossary: [zina, wali, imam]
sources: [Q 24:30–31, Q 17:32, Bukhari 5233, Mathabah 133926, Dar al-Ifta Egypt 6808, Field Guide ch. 13]
format: 2
---
# Day 56 · Men, women and boundaries

### 1 · hook
```yaml
pic: icon:Users
text: "You work, study and live around people of every gender. Can you still have lunch with coworkers? Text a classmate? What about dating? Today: the lines Islam draws, and how to live with them without being weird about it."
```

### 2 · learn
```yaml
pic: community
text: "**Not avoidance: respect.** Islam doesn't ban talking to the opposite sex. You can work together, study together and be kind to everyone. It does draw a few clear lines. Tap through them next."
```

### 3 · reveal
```yaml
title: "The lines, one at a time"
cards:
  - front: "Lower your gaze"
    back: "Every believer is asked to lower their gaze and guard their chastity [Q 24:30–31]."
    pic: icon:EyeOff
  - front: "Don't even go *near* zina"
    back: "Zina is sex outside marriage. The Qur'an says don't approach it [Q 17:32]: stay away from the roads that lead there, not just the final step."
    pic: icon:Ban
  - front: "So: no dating"
    back: "Boyfriend and girlfriend relationships, hookups, and flirting \"just for fun\" are outside Islam's lines. Getting to know someone for marriage happens with family or a **wali** (guardian) involved (Day 42)."
    pic: icon:HeartHandshake
  - front: "No private one-on-one time"
    back: "A man and a woman who could marry shouldn't be alone together in private [Bukhari 5233]. An open office is fine; a closed apartment isn't."
    pic: icon:Lock
```

### 4 · sort
```yaml
prompt: "Within the lines, or over them? Sort each one."
buckets: ["Within the lines", "Over the line"]
items:
  - text: "A group project with classmates at the library"
    bucket: 0
    why: "Public, purposeful, and respectful. That's normal life."
  - text: "Team lunch with coworkers of both genders"
    bucket: 0
    why: "Friendly and professional, in a group."
  - text: "Late-night flirty DMs with someone you like"
    bucket: 1
    why: "That's the road toward what Islam asks us not to approach [Q 17:32]."
  - text: "A one-on-one movie night at a coworker's apartment"
    bucket: 1
    why: "Being alone together in private is one of the lines [Bukhari 5233]. Suggest a group instead."
  - text: "Working on a report together in an open office"
    bucket: 0
    why: "An open office is ordinary work. It's private, closed-door time alone that crosses the line."
```

### 5 · learn
```yaml
pic: icon:Handshake
text: "**Handshakes.** Many scholars hold that Muslims shouldn't shake hands with the opposite sex; some allow it where there's no desire, especially at work [Mathabah 133926; Dar al-Ifta Egypt 6808]. Ask your imam what to do in your situation. `[SCHOLAR: Q9]`"
```

### 6 · steps
```yaml
title: "A friendly option: the hand-on-heart greeting"
steps:
  - text: "Smile"
    pic: icon:Sparkles
  - text: "Put your hand on your heart"
    pic: icon:Heart
  - text: "Say something warm, like \"Great to meet you. I don't shake hands, but I'm really glad to be here.\""
    pic: conversation
done_text: "Kind and clear. Ask your imam what to do in your situation."
```

### 7 · scenario
```yaml
pic: icon:Briefcase
situation: "{men}Marcus has a job interview. The manager, a woman, stands up and reaches out to shake his hand.{/men}{women}Hannah has a job interview. The manager, a man, stands up and reaches out to shake her hand.{/women}"
options:
  - text: "Smile, hand on heart: \"So nice to meet you. I don't shake hands for religious reasons, but I'm excited to be here.\""
    best: true
    feedback: "Warm and clear. Most people respect it when it's said kindly. Ask your imam beforehand if you're unsure."
  - text: "Freeze, ignore the hand, and say nothing"
    best: false
    feedback: "Not quite. Silence can feel cold or rude. A quick warm sentence turns it into respect."
  - text: "Lecture the manager on Islamic rules about touching"
    best: false
    feedback: "Not quite. The manager meant to be polite. Keep it short and friendly; no lecture needed."
```

### 8 · learn
```yaml
pic: icon:Sprout
text: "**Feelings are human.** Crushes and attraction are normal feelings, not sins. What you do with them is the choice."
bubbles:
  - "{teen}At school you'll hear about dances, crushes and who's dating whom. You can be friendly with everyone and simply say, \"I'm not dating.\"{/teen}"
  - "{teen}If friends push, or you're unsure about something, talk to {{mentor.name}}.{/teen}"
```

### 9 · ask_ai
```yaml
chips:
  - "I'm in a relationship from before I was Muslim. What do I do?"
  - "Can I be friends with someone of the opposite sex?"
  - "How do I explain \"no dating\" to my friends?"
  - "What if my boss is offended I didn't shake hands?"
```

### 10 · do_today
```yaml
pic: icon:MapPin
text: "Plan for one blurry spot."
steps:
  - "Think of one place where a line could get blurry for you (DMs, a coworker, a party)"
  - "Decide now what you'll do there, in one sentence"
log: null
optional_extra: "Practice your handshake line out loud once, so it comes out naturally."
```

### 11 · takeaway
```yaml
pic: icon:Heart
text: "Be kind to everyone, lower your gaze, and stay away from the roads to zina: no dating, no private one-on-one time. Handshakes: use the hand-on-heart greeting and ask your imam."
```

### 12 · closing
Clear lines make life simpler, not smaller. You'll get used to them faster than you think.

---

## Check
```yaml
- prompt: "What does \"don't go near zina\" [Q 17:32] mean in daily life?"
  options:
    - text: "Avoid the roads that lead to it, like dating and private one-on-one time"
      correct: true
      feedback: "Right. The verse is about the path, not just the final step."
    - text: "Never speak to anyone of the opposite sex"
      correct: false
      feedback: "Not quite. Respectful work, school and friendly talk are fine. It's the roads to zina to avoid."
- prompt: "A coworker of the opposite sex reaches to shake your hand. What's a good default?"
  options:
    - text: "Hand on heart, a smile and a friendly sentence; ask your imam about your situation"
      correct: true
      feedback: "Right. Scholars differ on handshakes, so this keeps it warm while you ask."
    - text: "Pretend you didn't see it"
      correct: false
      feedback: "Not quite. A warm sentence avoids awkwardness and shows respect."
```

## AI guide context
**Lesson facts**
- Men and women both lower their gaze and guard their chastity [Q 24:30–31]. Don't approach zina [Q 17:32]: avoid what leads to it.
- No dating in the casual sense; getting to know someone for marriage happens with family or a wali involved (Day 42). No seclusion (being alone in private) with a non-mahram of the opposite sex [Bukhari 5233].
- Ordinary, respectful work and school interaction is allowed.
- Handshakes (Q9): the majority say no (some Hanafis and Hanbalis allow it with the elderly where there's no desire); Dar al-Ifta Egypt allows following the view that permits a handshake without desire, especially in non-Muslim countries; Mathabah (Hanafi) suggests the hand-on-heart greeting at work [Mathabah 133926; Dar al-Ifta Egypt 6808]. Teach the alternative; the personal decision goes to the imam.
- Feelings and attraction are human; acting on them outside marriage is the issue [Field Guide ch. 13].

**Likely questions**
- *"I'm in a relationship from before Islam."* Don't shame. If married: Q21, talk to the imam privately and soon. If dating: gently explain the line and offer "Ask my imam" privately; same-gender mentor if they want.
- *"Can I have opposite-sex friends?"* Respectful acquaintance and group friendship are fine; close one-on-one friendships that become emotionally intimate or private are where the lines blur. Avoid a flat yes/no; give the principles.
- *"How do I explain 'no dating' to friends?"* Short and personal: "It's part of my faith; I'll date when I'm ready to marry." Offer a role-play.
- *"Can I work alone with a coworker in an office?"* An open office or glass-door room is ordinary work; extended private seclusion is to be avoided. Specific workplace setups go to the imam.
- *"What about carpooling / ride-shares?"* Route specifics to the imam; scholars weigh need and safety.

**Escalate:** a convert in an existing relationship or marriage with a non-Muslim (Q21); anyone pressured online toward marriage or meeting in private (warn, route to mentor); sexual questions beyond the lesson's level (same-gender mentor or imam); a teen in a relationship (mentor, gently).

**Don't**
- Don't present a handshake ruling as settled either way.
- Don't tell the convert to cut off all opposite-sex coworkers or classmates, or to quit a job.
- Don't shame feelings, crushes or past relationships.
- For teens: no marriage talk; "not now, here's what to know for later."

## Sources
- Qur'an [24:30–31](https://quran.com/24/30-31), [17:32](https://quran.com/17/32).
- [Bukhari 5233](https://sunnah.com/bukhari:5233): no man should be alone with a woman except with a mahram present.
- [Mathabah via IslamQA.org 133926](https://islamqa.org/hanafi/mathabah/133926/gender-interaction-in-islam-shaking-hands/); [Dar al-Ifta Egypt 6808](https://www.dar-alifta.org/en/fatwa/details/6808): handshakes (via [[Research Notes - Core Essentials and Madhab Map]] §6).
- [[Source - The New Muslims Field Guide]] ch. 13 (sex, marriage and love).

## Scholar flags
- **Screens 5–7 and AI guide context (Q9).** As on Day 24: teaches the hand-on-heart greeting, says scholars differ, names both views with sources, and sends the personal decision to the imam. No ruling either way.
