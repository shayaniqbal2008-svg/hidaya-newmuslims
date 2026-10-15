---
day: 42
phase: 2
unit: 6
title: "Marriage: no rush"
hook: "Marriage is a beautiful part of Islam. It isn't a deadline, and nobody gets to rush you."
minutes: 5
skills: [B3]
pain_points: [marriage-pressure]
logs: []
madhab_sensitive: true
scholar_flags: [Q21]
status: draft-pending-scholar-review
glossary: [nikah, mahr, wali, imam, masjid, Allah]
sources: [Q 30:21, Q 4:4, Bukhari 5136, Bukhari 5090, Darul Iftaa 8324, Field Guide ch. 13–15, Research Notes - Retention and Convert Voices (V2, V16, V17), Yaqeen 2025]
format: 2
---
# Day 42 · Marriage: no rush

### 1 · hook
```yaml
pic: icon:HeartHandshake
text: "Has anyone asked when you're getting married yet? For a lot of new Muslims, the questions start within weeks. Today: how Muslim marriage works, and why you get to take your time."
```

### 2 · learn
```yaml
pic: family
text: "In Islam, marriage is a gift. The Qur'an calls spouses a sign of Allah: *\"that you may find tranquility in them; and He placed between you affection and mercy\"* [Q 30:21, Saheeh Intl.]."
bubbles:
  - "It's also not a race. Your Islam is complete today, single or married. Marrying well matters far more than marrying fast."
```

### 3 · reveal
```yaml
title: "Things people may tell you"
cards:
  - front: "\"Your faith isn't complete until you're married.\""
    back: "Marriage is a great good, but your Islam isn't on hold. You're a full Muslim right now."
    pic: icon:CircleCheck
  - front: "\"A good Muslim says yes to a good proposal.\""
    back: "You can always say no. Nobody can be married without agreeing to it [Bukhari 5136]."
    pic: icon:Hand
  - front: "\"He's a sheikh, so he must be safe.\""
    back: "A title isn't a background check. One convert author married a 'sheikh' who turned out to be lying about almost everything [Field Guide ch. 14]."
    pic: icon:Search
  - front: "\"Marry soon so you won't be lonely.\""
    back: "Loneliness is real, but friends and community fix it better. A rushed marriage can make you lonelier."
    pic: community
```

### 4 · steps
```yaml
title: "How a Muslim marriage (nikah) works"
steps:
  - text: "**Look for faith and character** above money or looks [Bukhari 5090]"
    pic: icon:Heart
  - text: "**Both people freely agree.** No one can be married against their will [Bukhari 5136]"
    pic: icon:Handshake
  - text: "**The groom gives a mahr,** a gift to the bride that is hers alone [Q 4:4]"
    pic: icon:Gift
  - text: "**Two witnesses** are present"
    pic: icon:UsersRound
  - text: "An imam often leads it, and it's usually registered legally too"
    pic: masjid
```

### 5 · learn
```yaml
madhab_variant: true
audience: women
pic: icon:Shield
default: "**A wali for you.** Most scholars say a woman's marriage needs a **wali**: a Muslim guardian who looks out for you, checks out a suitor, and has your back afterwards. {{masjid.name}} will show you how it works."
hanafi: "**A wali for you.** In the Hanafi school, an adult woman can agree to her own marriage. But scholars strongly advise having a **wali**: a Muslim guardian who looks out for you, checks out a suitor, and has your back afterwards."
bubbles:
  - "If your family isn't Muslim, you're not stuck. Your imam can help you find a wali or stand in that role."
hanafi_bubbles:
  - "If your family isn't Muslim, you're not stuck. Your imam can help you find one."
```

### 6 · scenario
```yaml
pic: icon:Smartphone
situation: "Ana posted about her shahada. Within a week, a man she's never met messages her: he's \"ready to marry a sincere revert,\" wants to video-call tonight, and asks her not to tell anyone at the masjid yet."
options:
  - text: "Don't reply alone. Tell her mentor, and let the imam or a wali check him out if she's ever interested"
    best: true
    feedback: "Yes. Secrecy plus speed is a warning sign. A sincere man is happy to be checked out."
  - text: "Video-call once, just to see if he seems nice"
    best: false
    feedback: "Not quite. Charm is easy over a screen. Bring in a mentor or wali before any one-on-one contact."
  - text: "Agree, since turning down a Muslim might be rude"
    best: false
    feedback: "Not quite. Saying no is never rude. Rushing a stranger into marriage is the rude part."
```

### 7 · sort
```yaml
prompt: "Online or in person: warning sign, or a good sign?"
buckets: ["Warning sign", "Good sign"]
items:
  - text: "Rushes you, or wants it kept secret"
    bucket: 0
    why: "Warning sign. Speed and secrecy are the classic red flags."
  - text: "Asks for money, photos or your address early"
    bucket: 0
    why: "Warning sign. Don't share any of them. Step back and tell your mentor."
  - text: "Wants you away from your family, friends or mentor"
    bucket: 0
    why: "Warning sign. Cutting you off from support is a red flag."
  - text: "Says your faith depends on saying yes"
    bucket: 0
    why: "Warning sign. Your faith is complete right now, and you can always say no."
  - text: "Is happy for your mentor, imam or a wali to check them out"
    bucket: 1
    why: "Good sign. A sincere person welcomes being checked out."
```

### 8 · learn
```yaml
pic: icon:LifeBuoy
text: "**See any warning sign?** Step back and tell {{mentor.name}}. This goes for brothers too: pressure to \"marry into the community\" fast is common.{teen} **Under 18?** Marriage isn't for now. Focus on school, prayer and friends.{/teen}"
bubbles:
  - "{teen}For later: you'll never have to marry anyone you don't want to; a wali and your imam will help. If anyone online raises marriage with you, tell a trusted adult.{/teen}"
  - "**Already married to someone who isn't Muslim?** Don't make any big decision alone. Talk to your imam privately, soon. `[SCHOLAR: Q21]`"
```

### 9 · roleplay
```yaml
character: "Auntie Rosa, a warm, chatty regular at the masjid who loves matchmaking. She means well but pushes hard."
setup: "After the prayer, Auntie Rosa tells you she has 'the perfect person' for you and wants to set up a meeting this weekend."
goal: "Thank her kindly and say no for now, without feeling guilty or getting into an argument."
success_looks_like: "The convert thanks her, says clearly they're focusing on learning their faith first, and keeps the relationship warm (maybe offers to help her with something else)."
coach_notes: "Auntie Rosa pushes twice ('You're not getting any younger!', 'Marriage is half the religion, you know'), then accepts a kind, firm answer. She's never rude or mean. In the debrief, praise clear, warm wording; point out that a calm 'not right now, thank you' is enough and needs no long explanation. If the convert is under 18, she drops the topic as soon as they mention their age."
```

### 10 · ask_ai
```yaml
chips:
  - "What is a wali, and how do I find one?"
  - "What's the mahr, and how much is it?"
  - "Can I marry someone who isn't Muslim?"
  - "Someone online keeps asking to marry me"
```

### 11 · do_today
```yaml
pic: icon:PenLine
text: "Have your \"not now\" line ready."
steps:
  - "Write one sentence for when someone brings up marriage before you're ready"
  - "Something like: \"Thank you, I'm focusing on learning my faith right now.\""
log: null
optional_extra: "{men}Thinking about marriage one day? Ask {{mentor.name}} how {{masjid.name}} helps converts with it. Just to know, not to start.{/men}{women}Thinking about marriage one day? Ask {{mentor.name}} how {{masjid.name}} helps converts find a wali. Just to know, not to start.{/women}"
```

### 12 · takeaway
```yaml
pic: icon:HeartHandshake
text: "Marriage is a blessing, not a deadline. Both people must freely agree, and you can always say no. Rushing and secrecy are red flags."
```

### 13 · closing
The right marriage, at the right time, is worth waiting for.

---

## Check
```yaml
- prompt: "Can a Muslim be married to someone without agreeing to it?"
  options:
    - text: "No. Both people must freely agree"
      correct: true
      feedback: "Right. The Prophet ﷺ made a woman's own agreement a condition [Bukhari 5136]. You can always say no."
    - text: "Yes, if the family or imam decides"
      correct: false
      feedback: "Not quite. Nobody can be married against their will [Bukhari 5136]."
- prompt: "Someone you just met online wants to marry quickly and keep it secret from your masjid. What is that?"
  options:
    - text: "A warning sign. Tell your mentor before going further"
      correct: true
      feedback: "Right. Speed plus secrecy is a red flag. Sincere people are happy to be checked out."
    - text: "A sign he's very sincere"
      correct: false
      feedback: "Not quite. Sincerity welcomes a wali and the imam. Secrecy and rushing are red flags."
```

## AI guide context
**Lesson facts**
- Marriage is a sign of Allah, a source of tranquility, affection and mercy [Q 30:21]. It's encouraged, but a convert's Islam is complete without it; nobody should be rushed.
- Basics of the nikah: free agreement of both parties [Bukhari 5136], a mahr given to the bride [Q 4:4], two witnesses, offer and acceptance. An imam often officiates; US couples usually register a civil marriage too.
- Choose for faith and character [Bukhari 5090].
- Wali: most schools require a wali for a woman's marriage; the Hanafi school allows an adult woman to contract her own marriage to a suitable match, but calls marrying without a wali blameworthy except in need and strongly advises involving one [Darul Iftaa 8324]. Converts whose families aren't Muslim get help from the imam.
- Convert evidence: proposals within weeks of the shahada, being told faith is incomplete until marriage, no wali to vet, abusive outcomes (V16); marrying to escape loneliness (V2); early engagement as a teen (V17); a convert author's own abusive marriage to a man met online who claimed to be a sheikh [Field Guide ch. 14]. Among never-married single converts, about half say they can't find a suitable spouse [Yaqeen 2025]. So acknowledge the wish to marry is real and good.

**Likely questions**
- *"How do I find a wali?"* Ask the imam or mentor; many masjids help converts. A wali should be a trustworthy, practicing Muslim man.
- *"How much is the mahr?"* No fixed amount; agreed between the couple, given to the bride. Details to the imam.
- *"Can I marry a non-Muslim?"* General picture only: a Muslim woman marries a Muslim man; a Muslim man may marry a chaste Christian or Jewish woman [Q 5:5], though many scholars advise caution in practice. Personal cases go to the imam (Spec §6.2 rule 2).
- *"Someone online wants to marry me."* Warn gently (Spec §6.2 rule 12): don't share money, photos or address; involve the mentor and a wali; you can say no. Offer to route it to the mentor. If there's coercion or threats, follow the safety rule.
- *"What about dating?"* Briefly: Islam has no dating in the casual sense; getting to know someone happens with family or a wali involved. Day 56 covers boundaries.

**Escalate:** a convert already married to a non-Muslim spouse (Q21): don't rule on it; say "talk to your imam privately, soon" and offer "Ask my imam"; never tell them to leave their spouse. Any specific proposal, mahr dispute, divorce, or a marriage that feels unsafe. **Safety first:** abuse, threats or someone isolating the convert: crisis resources (National Domestic Violence Hotline 1-800-799-7233; 911 in danger) and the alert flow.

**Don't**
- Don't encourage marriage as a fix for loneliness or as proof of faith.
- **Teens (under 18):** no marriage talk beyond "not now; here's what to know for later." Point them to their family and the imam (Spec §6.2 rule 12). If an adult is contacting a minor about marriage, treat it as a safeguarding concern and route it to the mentor or a trusted adult.
- Don't rule on Q21 or any personal marriage question.
- Don't play a scholar, imam or sheikh in the role-play.

**Role-play brief:** Auntie Rosa is affectionate and persistent, never insulting. She pushes twice with common lines ("you're not getting younger," "half the religion"), then gracefully accepts a clear answer. Debrief: name what worked (warmth, a clear "not now"), suggest one shorter phrasing, and remind them they owe no one an explanation. Under-18 users: she drops the topic immediately.

## Madhab note
- **Wali:** Maliki, Shafi'i and Hanbali scholars hold that a woman's marriage isn't valid without a wali. The Hanafi school allows an adult woman to marry a suitable match herself, while strongly discouraging it without a wali's involvement. Every school wants converts to have a trustworthy guardian; your imam can help.

## Sources
- Qur'an [30:21](https://quran.com/30/21), [4:4](https://quran.com/4/4) (the mahr); [5:5](https://quran.com/5/5) (AI guide only).
- [Bukhari 5136](https://sunnah.com/bukhari:5136): a woman is not married without her consent.
- [Bukhari 5090](https://sunnah.com/bukhari:5090): choose a spouse for their religion.
- [Darul Iftaa (Leicester), Shaykh Muhammad ibn Adam, "Does the Hanafi school encourage marriage without a guardian's approval?" (islamqa.org 8324)](https://islamqa.org/hanafi/daruliftaa/8324/hanafi-marriage-guardian/); [SeekersGuidance: minimum steps for a valid marriage](https://seekersguidance.org/answers/hanafi-fiqh/minimum-steps-must-taken-marriage-valid/).
- [[Source - The New Muslims Field Guide]] ch. 13–15 (marriage; the wali as protector; a convert author's warning about rushed marriage and marriage websites).
- [[Research Notes - Retention and Convert Voices]] V2, V16, V17 and recommendation 8 (address marriage pressure directly); [Yaqeen Institute, *Becoming Muslim* (2025)](https://yaqeeninstitute.org/read/data/reports/becoming-muslim-lives-of-american-converts-to-islam).

## Scholar flags
- **Screen 8 (Q21), second bubble.** "Already married to someone who isn't Muslim? Don't make any big decision alone. Talk to your imam privately, soon." Drafted as in Spec §9: no ruling given in the app; the AI guide escalates.
