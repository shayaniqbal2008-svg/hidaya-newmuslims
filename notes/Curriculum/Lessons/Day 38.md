---
day: 38
phase: 2
unit: 5
title: "Hijab and modesty"
hook: "Everyone seems to have an opinion about hijab. Here's what Islam actually says, and how real people get there."
minutes: 5
skills: [B4]
pain_points: [hijab-reactions]
logs: []
madhab_sensitive: true
scholar_flags: [Q8, Q27]
status: draft-pending-scholar-review
glossary: [hijab, "haya'", in sha Allah, Allah, ﷺ]
sources: [Q 24:30–31, Q 33:59, Bukhari 9, Muslim 2159, Qibla 35720 (Haddad), IslamOnline (al-Qaradawi, hijab), Field Guide ch. 10, Research Notes - Core Essentials §5 and §9, EEOC (religious garb and grooming), CAIR know-your-rights]
format: 2
---
# Day 38 · Hijab and modesty

### 1 · hook
```yaml
pic: icon:Shirt
text: "{women}For many new Muslim women, hijab is the biggest question of all. Today: what the ruling is, how women actually get there, and how people react.{/women}{men}Modesty is part of the deal for every Muslim, men included. Today: what modesty asks of you, and how to treat sisters on their own path.{/men}"
```

### 2 · learn
```yaml
pic: icon:EyeOff
text: "**Modesty is for everyone.** The Qur'an tells believers to lower their gaze and guard their private parts [Q 24:30–31].{women} For you, it then adds covering.{/women}"
bubbles:
  - "Behind it is **haya'**: a sense of dignity and modesty that the Prophet ﷺ called part of faith [Bukhari 9]. It shows in how you look, speak and dress."
```

### 3 · multi
```yaml
pic: icon:Sparkles
prompt: "Which of these are part of modesty in Islam?"
options:
  - text: "Lowering your gaze"
    correct: true
    feedback: "Yes. It's the first thing the Qur'an asks of every believer [Q 24:30–31]."
  - text: "Loose clothing that covers what it should"
    correct: true
    feedback: "Yes. Modest clothing is part of it for everyone."
  - text: "How you speak and carry yourself"
    correct: true
    feedback: "Yes. Haya' is inner as well as outer: dignity in words and manners too."
  - text: "Only what you wear"
    correct: false
    feedback: "Not quite. It starts with the eyes, words and manners. Clothes are one part, and modesty is everyone's."
```

### 4 · learn
```yaml
audience: women
madhab_variant: true
pic: icon:Scale
default: "**The ruling, plainly.** Mainstream scholars of all four schools hold that hijab is required for a Muslim woman past puberty [Q 24:31; Q 33:59]. `[SCHOLAR: Q8]`"
hanafi: "**The ruling, plainly.** Mainstream scholars of all four schools hold that hijab is required for a Muslim woman past puberty [Q 24:31; Q 33:59]. `[SCHOLAR: Q8]`"
bubbles:
  - "In front of men outside your close family, you cover your hair and body in loose clothes that can't be seen through."
  - "Your face and hands may show. {{masjid.name}} will tell you its view on the feet."
hanafi_bubbles:
  - "In front of men outside your close family, you cover your hair and body in loose clothes that can't be seen through."
  - "In the Hanafi school, your face, hands and feet may show."
```

### 5 · sort
```yaml
audience: women
prompt: "In front of men outside your close family: covered, or may show?"
buckets: ["Covered", "May show"]
items:
  - text: "Your hair"
    bucket: 0
    why: "Covered. That's the heart of hijab [Q 24:31]."
  - text: "Your face"
    bucket: 1
    why: "May show."
  - text: "Your hands"
    bucket: 1
    why: "May show."
  - text: "Your arms and legs"
    bucket: 0
    why: "Covered, in loose clothes that can't be seen through."
variants:
  hanafi:
    items:
      - text: "Your hair"
        bucket: 0
        why: "Covered. That's the heart of hijab [Q 24:31]."
      - text: "Your face"
        bucket: 1
        why: "May show."
      - text: "Your hands"
        bucket: 1
        why: "May show."
      - text: "Your feet"
        bucket: 1
        why: "In the Hanafi school, the feet may show too."
      - text: "Your arms and legs"
        bucket: 0
        why: "Covered, in loose clothes that can't be seen through."
```

### 6 · steps
```yaml
audience: women
title: "A gentle path"
intro: "The ruling doesn't bend, but the road to it can be gradual. Scholars such as Shaykh Gibril Haddad describe helping a new Muslim toward hijab step by step [Qibla 35720]. `[SCHOLAR: Q8]`"
steps:
  - text: "Many women start with looser clothes"
    pic: icon:Shirt
  - text: "Then a scarf at the masjid"
    pic: masjid
  - text: "Then more of the day"
    pic: icon:Sun
done_text: "A step is a path forward, not permission to stop. A sister still working toward it is a Muslim on her way."
```

### 7 · choice
```yaml
audience: women
pic: icon:Sprout
prompt: "Keisha became Muslim two months ago. She hasn't started wearing hijab yet, but she's learning and working toward it. What's true?"
options:
  - text: "She's a Muslim with a goal she's working toward; struggling with it isn't rejecting it"
    correct: true
    feedback: "Yes. She believes it's required and is taking steps. That's very different from denying the ruling."
  - text: "She isn't really Muslim until she covers"
    correct: false
    feedback: "Not quite. Hijab is required, but not wearing it yet doesn't cancel her shahada. She's on her way."
  - text: "Hijab is optional for new Muslims"
    correct: false
    feedback: "Not quite. The ruling applies to her. What's gentle is the pace, not the ruling itself."
```

### 8 · scenario
```yaml
audience: women
pic: icon:Store
situation: "Maria starts wearing hijab at her retail job. Her manager says: \"It's a little much for customers. Could you leave it off at work?\""
options:
  - text: "Calmly explain it's part of her religion and ask, in writing, for a religious accommodation. Talk to her mentor, and to CAIR if it's refused"
    best: true
    feedback: "Yes. In the US, employers generally must accommodate religious dress unless it causes real hardship. Calm, written, and with support."
  - text: "Take it off at work to avoid trouble, without saying anything"
    best: false
    feedback: "Not quite. She may have more protection than she thinks. Ask first, and talk to her mentor before deciding anything."
  - text: "Tell him he's a bigot, in front of customers"
    best: false
    feedback: "Not quite. He may just not know the law. A calm, written request protects her far better."
```

### 9 · reveal
```yaml
audience: women
title: "What people might say, and what you could say back"
cards:
  - front: "A classmate: \"Did someone make you wear that?\""
    back: "\"Nope, it was my choice. I actually had to work up to it.\" Short and true."
    pic: conversation
  - front: "Your mom: \"You're hiding the beautiful girl I raised.\""
    back: "Hear the love in it. \"I'm still me, Mom. This is just how I want to dress now.\" Give her time."
    pic: family
  - front: "A Muslim at the masjid: \"Why aren't you covering yet?\""
    back: "\"I'm working on it, in sha Allah.\" Your path is between you and Allah. You don't owe anyone a timeline."
    pic: masjid
  - front: "Another Muslim: \"Your scarf is wrong. Show less hair.\""
    back: "\"Thanks, I'll ask my teacher.\" Then ask a woman you trust. Unasked-for correction isn't the last word."
    pic: icon:MessageCircle
```

### 10 · learn
```yaml
audience: men
pic: icon:EyeOff
text: "**Brothers, this part is yours.** Modesty for men starts with the eyes: lower your gaze [Q 24:30]. A sudden glance isn't your fault; the Prophet ﷺ told a man to turn his eyes away after one [Muslim 2159]."
bubbles:
  - "That goes for screens too."
  - "Cover at least navel to knee, in loose clothing. Shorts that end above the knee don't do it."
  - "For sisters: mainstream scholars hold hijab is required for a Muslim woman past puberty [Q 24:31]. It's her worship, at her pace; yours is your own modesty. `[SCHOLAR: Q8]`"
```

### 11 · sort
```yaml
audience: men
prompt: "Your modesty: do it, or skip it?"
buckets: ["Do it", "Skip it"]
items:
  - text: "Turning your eyes away after a sudden glance"
    bucket: 0
    why: "Yes. The glance wasn't your fault; turning away is your part [Muslim 2159]."
  - text: "Lowering your gaze on screens and feeds"
    bucket: 0
    why: "Yes. Lowering the gaze goes for screens too."
  - text: "Loose clothes covering at least navel to knee"
    bucket: 0
    why: "Yes. That's your covering."
  - text: "Shorts that end above the knee"
    bucket: 1
    why: "Skip them. They don't cover navel to knee."
  - text: "Telling a sister her hijab is wrong"
    bucket: 1
    why: "Skip it. Don't police sisters' hijab. Their journey isn't your project."
```

### 12 · scenario
```yaml
audience: men
pic: masjid
situation: "At the masjid, Marcus meets a sister who became Muslim recently. She isn't covering yet. A friend nudges him: \"Shouldn't someone say something?\""
options:
  - text: "Keep his own gaze in check, be kind and welcoming like with anyone, and leave her path to her and Allah"
    best: true
    feedback: "Yes. A sister still working toward it is a Muslim on her way. His part is his own modesty."
  - text: "Go tell her that hijab is required"
    best: false
    feedback: "Not quite. Don't police sisters' hijab. Their journey isn't your project, and she can ask a woman she trusts."
  - text: "Avoid her so it doesn't look like he approves"
    best: false
    feedback: "Not quite. Coldness doesn't help anyone. Be kind, and keep your focus on your own eyes."
```

### 13 · learn
```yaml
audience: women
pic: conversation
text: "**Talk to a woman who's been there.** You can ask a female mentor anything about hijab, privately."
bubbles:
  - "{teen}Under 18? This app won't pressure you. Hijab can mean a big moment with your parents.{/teen}"
  - "{teen}Don't turn it into a standoff alone: talk it through with a female mentor and your imam first. `[SCHOLAR: Q27]`{/teen}"
```

### 14 · ask_ai
```yaml
chips:
  - "{women}I'd like to talk to a female mentor about hijab{/women}{men}What does modesty look like for men day to day?{/men}"
  - "{women}How do I start wearing hijab at work or school?{/women}{men}How do I lower my gaze online?{/men}"
  - "{women}My parents are against hijab. What should I do?{/women}{men}How do I support a new sister without policing her?{/men}"
  - "What does haya' look like in everyday life?"
```

### 15 · do_today
```yaml
pic: icon:Sprout
text: "Pick one small modesty step that's yours."
steps:
  - "{women}A looser outfit, a scarf at the masjid, more care with your eyes, or cleaning up your feed{/women}{men}More care with your eyes, looser clothes, or cleaning up your feed{/men}"
  - "Keep it up this week"
log: null
optional_extra: "{women}Send one question about hijab to a female mentor.{/women}{men}Unfollow one account that makes lowering your gaze harder.{/men}"
```

### 16 · takeaway
```yaml
pic: icon:EyeOff
text: "{women}Hijab is required, the road to it can be gradual, and modesty starts with everyone's eyes.{/women}{men}Modesty starts with your eyes: lower your gaze, cover well, and leave sisters' journeys to them.{/men}"
```

### 17 · closing
Nobody gets to rush your journey, and nobody gets to judge it.

---

## Check
```yaml
- prompt: "What do mainstream scholars hold about hijab for Muslim women?"
  options:
    - text: "It's required; the way there can be gradual"
      correct: true
      feedback: "Right. The ruling stands; the pace can be gentle [Qibla 35720]."
    - text: "It's a personal preference"
      correct: false
      feedback: "Not quite. Mainstream scholars hold it's required [Q 24:31; Q 33:59]. The pace is what's gentle."
- prompt: "Who does the Qur'an tell to lower their gaze?"
  options:
    - text: "Both men and women, starting with men"
      correct: true
      feedback: "Right. Men are addressed first, then women [Q 24:30–31]."
    - text: "Only women"
      correct: false
      feedback: "Not quite. The command to men comes first [Q 24:30]."
```

## AI guide context
**Lesson facts**
- Men are told to lower their gaze and guard their private parts; women likewise, and to cover their adornment except what normally shows, drawing their head-coverings over their chests, except before close family listed in the verse [Q 24:30–31]. Women are told to draw their outer garments over themselves [Q 33:59].
- Mainstream scholars hold hijab is obligatory; several advise a gradual approach for converts. Shaykh Gibril Haddad: the ruling stands as prescribed, and a convert may be helped toward it step by step [Qibla 35720]. Al-Qaradawi goes further (tolerating an uncovered head for a time for fear the convert leaves) [IslamOnline]; the app does not adopt that `[SCHOLAR: Q8]`. Never present the ruling as optional.
- 'Awrah: men, navel to knee (Hanafis include the knee); women, all except face and hands, with views differing on the feet (Hanafi: feet may show) [Research Notes - Core Essentials §5].
- In Q 24:30–31 men are addressed first (lower the gaze), then women; the lesson teaches it per gender (men's screens 10–12, women's 4–9 and 13), so if asked, say modesty is everyone's and men are addressed first.
- Haya' is part of faith [Bukhari 9]. A sudden glance: turn the eyes away [Muslim 2159].
- Workplace: US Title VII generally requires employers to accommodate religious dress unless it causes undue hardship [EEOC]; CAIR helps with complaints. Day 24 covered accommodation requests.
- Struggling vs denying (Spec §5): a woman not yet wearing hijab who accepts the ruling is a Muslim working on it; denying the ruling is different.

**Likely questions**
- *"Female mentor."* Offer the female mentor or female staff route (rule 12) and the "Ask my imam" queue with a request for a woman to answer, where the masjid has one.
- *"How do I start at work or school?"* Practical: pick a start date, a simple style, a one-line answer for questions, know your accommodation rights; tell the mentor. Don't push a timeline.
- *"My parents are against hijab."* Don't rule. Acknowledge it's hard; the ruling isn't optional, and kindness to parents still applies [Q 31:15]. For a minor, route to a female mentor and the imam `[SCHOLAR: Q27]`; for an adult, to the imam. Safety rule 6 first if there are threats.
- *"Does modesty mean I can't wear color or style?"* Modest clothing can be colorful and personal; the standard is coverage, looseness and opacity, not a uniform [Field Guide ch. 10].
- *"Men's modesty day to day?"* Lowering the gaze in person and online, covering navel to knee in loose clothes, respectful speech. If asked about the beard: Day 59 covers it; scholars discuss it; ask the imam.
- *"I took it off. Am I a bad Muslim?"* No shaming. Taking it off is a struggle, not leaving Islam. Encourage gentle return and a female mentor conversation.

**Escalate:** a minor whose parents forbid hijab `[SCHOLAR: Q27]`; any request for a personal ruling on removing hijab for safety, a job or a family situation; questions about niqab; any harassment or threat (safety rule 6 and CAIR).

**Don't**
- Don't say hijab is optional, cultural or "only for when you're ready." Don't threaten, shame, or set deadlines.
- Don't let a men's question turn into policing women's dress.
- Don't discuss specific women's bodies or appearance.

## Madhab note
Most scholars of the four schools hold that a woman covers everything except her face and hands in front of men outside her close family; some, notably in the Hanbali school, hold the face should be covered too. The Hanafi school also lets the feet show; the Shafi'i and Hanbali schools generally require covering them; Maliki views vary. For men, the Hanafi school counts the knee itself as part of what must be covered; the others cover from the navel to the knee, not including it.

## Sources
- Qur'an [24:30–31](https://quran.com/24/30-31) (men and women: lower the gaze; women's covering), [33:59](https://quran.com/33/59) (outer garments).
- [Bukhari 9](https://sunnah.com/bukhari:9): haya' is a branch of faith.
- [Muslim 2159](https://sunnah.com/muslim:2159): the sudden glance; turn the eyes away.
- [Qibla 35720, Shaykh Gibril Haddad: Converts, hijab and the question of gradualism](https://islamqa.org/hanafi/qibla-hanafi/35720/converts-hijab-the-question-of-gradualism/).
- [IslamOnline, Shaykh Yusuf al-Qaradawi: New Muslims, should hijab be an obstacle?](https://fiqh.islamonline.net/en/new-muslims-should-hijab-be-an-obstacle/) (AI guide context only).
- [[Research Notes - Core Essentials and Madhab Map]] §5 (modesty, 'awrah, hijab) and §9 (gradualism and its limits).
- [EEOC: Religious garb and grooming in the workplace](https://www.eeoc.gov/laws/guidance/religious-garb-and-grooming-workplace-rights-and-responsibilities); [CAIR: Know your rights](https://www.cair.com/know-your-rights/).
- [[Source - The New Muslims Field Guide]] ch. 10 (modesty for men and women; reactions from both directions; one convert's step-by-step start).

## Scholar flags
- **Screens 4 and 6, the ruling and a gradual path (Q8).** Drafted as: hijab is required for women past puberty (stated plainly), the road to it may be gradual per Shaykh Gibril Haddad (Qibla 35720), and a step is "a path forward, not permission to stop." It does not adopt al-Qaradawi's wider tolerance. A sister not yet covering is described as a Muslim working toward it, never as exempt.
- **Screen 13 (teen bubble) and AI guide context, a minor whose parents oppose hijab (Q27).** Drafted cautiously: the app neither tells a teen to defy her parents nor that the ruling doesn't apply to her; it routes her to a female mentor and the imam before any family standoff.
