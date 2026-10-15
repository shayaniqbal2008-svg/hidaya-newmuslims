---
day: 53
phase: 2
unit: 7
title: "Money: interest and debt"
hook: "Student loans, a car payment, a credit card. If you've heard \"interest is haram\" and started to panic, start here."
minutes: 5
skills: [S1]
pain_points: [money]
logs: []
madhab_sensitive: false
scholar_flags: [Q24]
status: draft-pending-scholar-review
glossary: [riba, haram, Allah, imam, sadaqah]
sources: [Q 2:275–279, Q 2:280, Bukhari 2400, Welcome to Islam D4, Research Notes - Core Essentials and Madhab Map (Q24)]
format: 2
---
# Day 53 · Money: interest and debt

### 1 · hook
```yaml
pic: icon:Wallet
text: "Student loans, a car payment, a card balance. Then someone says interest is haram, and your stomach drops. Breathe. Today: what the rule is, what to do next, and what *not* to panic about."
```

### 2 · learn
```yaml
pic: icon:Percent
text: "**Riba** (interest) is extra money charged on a loan just because time has passed. The lender is guaranteed more back, whatever happens to you."
bubbles:
  - "The Qur'an draws a clear line: Allah has allowed trade and forbidden riba [Q 2:275–279]. In trade, people share the risk of buying and selling."
  - "Islam forbids both sides: charging interest and paying it [Welcome D4]."
```

### 3 · sort
```yaml
prompt: "Trade or riba? Sort each deal."
buckets: ["Trade (allowed)", "Riba (interest)"]
items:
  - text: "Chris buys phone cases wholesale and sells them for a profit"
    bucket: 0
    why: "That's trade. Chris takes the risk that they won't sell. Allah has allowed trade [Q 2:275]."
  - text: "A lender gives $1,000 and wants $1,100 back next year, no matter what"
    bucket: 1
    why: "Extra money just because time passed, guaranteed to the lender. That's riba."
  - text: "A card balance that grows every month it isn't paid"
    bucket: 1
    why: "That growth is interest. Carrying a balance is the trap."
  - text: "Ana bakes cakes and sells them at the market"
    bucket: 0
    why: "Buying, making and selling, with the risk shared. Profit from trade is allowed [Q 2:275]."
```

### 4 · reveal
```yaml
title: "Where does riba show up? Tap each card."
cards:
  - front: "A credit card you pay off in full every month"
    back: "No interest is paid, so you're fine. The trap is carrying a balance. Paying in full each month avoids it."
    pic: icon:CreditCard
  - front: "A savings account that pays you interest"
    back: "A common guide: choose an account with little or no interest, and give any interest you earn away to charity [Welcome D4]. Ask your imam for details."
    pic: icon:PiggyBank
  - front: "Signing up for a new loan with interest"
    back: "Avoid it where you can. Look for interest-free options first, and ask your imam before you sign."
    pic: icon:Receipt
  - front: "A loan you already had before Islam"
    back: "Don't panic, and don't stop paying. Talk to your imam about your situation. (Next screen.)"
    pic: icon:GraduationCap
```

### 5 · learn
```yaml
pic: icon:Scale
text: "**Loans you already have.** The Qur'an tells those who stop once the ruling reaches them that what's past is in Allah's hands [Q 2:275]. So keep paying what you owe. `[SCHOLAR: Q24]`"
bubbles:
  - "Delaying a debt you can pay is itself a wrong [Bukhari 2400]."
  - "Then talk to your imam about your loans: student loans, a car or a mortgage. Every situation is different, and that's his job."
  - "{teen}If you're a teen, you probably don't have loans, and that's a head start. If college is coming, look at scholarships, grants and work-study first; they carry no interest.{/teen}"
  - "{teen}Talk to your family and your imam before you borrow. Your parents' mortgage or car loan isn't yours to fix, and it's not something to lecture them about.{/teen}"
```

### 6 · scenario
```yaml
pic: icon:Car
situation: "Marcus has a car loan from before he became Muslim. Today he learned about riba and feels sick about it."
options:
  - text: "Keep making payments, avoid new interest loans, and message his imam about paying it off or refinancing"
    best: true
    feedback: "Yes. Steady, honest, and he gets guidance for his own situation."
  - text: "Stop paying, because interest is haram"
    best: false
    feedback: "Not quite. He still owes the debt, and delaying it is a wrong of its own [Bukhari 2400]. Keep paying and ask the imam."
  - text: "Decide he's a bad Muslim and stop praying until it's paid off"
    best: false
    feedback: "Please don't. A loan from before Islam doesn't cancel his faith. Keep praying, keep paying, get advice."
```

### 7 · steps
```yaml
title: "Going forward"
steps:
  - text: "Avoid new interest-bearing loans where you can"
    pic: icon:Ban
  - text: "Pay any card in full every month"
    pic: icon:CreditCard
  - text: "Build a small cushion, even $10 a week"
    pic: icon:PiggyBank
  - text: "Ask your imam about interest-free options near you, like Islamic home finance or community loans"
    pic: icon:Landmark
done_text: "Nobody is asking you to fix everything this month."
```

### 8 · fill
```yaml
before: "Islam is gentle with people in debt. The Qur'an tells lenders to give a struggling borrower"
after: "[Q 2:280]."
options:
  - text: "time"
    correct: true
    feedback: "Yes. Lenders are told to give a struggling borrower time [Q 2:280]. Islam is gentle with people in debt."
  - text: "a penalty"
    correct: false
    feedback: "Not quite. The Qur'an tells lenders to give a struggling borrower time, not a penalty [Q 2:280]."
  - text: "a deadline"
    correct: false
    feedback: "Not quite. Lenders are told to give a struggling borrower more time [Q 2:280]."
```

### 9 · ask_ai
```yaml
chips:
  - "I have student loans. What should I do?"
  - "Is a credit card okay if I pay it in full?"
  - "What do I do with interest my bank already paid me?"
  - "Ask my imam about my mortgage"
```

### 10 · do_today
```yaml
pic: icon:NotebookPen
text: "Take stock of your money, privately."
steps:
  - "Write down any loans or balances you have, and whether they charge interest"
  - "If you have any, send one question to your imam with \"Ask my imam\""
  - "No list? Great: set up autopay to pay any card in full"
log: null
optional_extra: "If you have savings interest, set it aside to give to the poor. It's a way to get rid of it, not your own sadaqah (charity)."
```

### 11 · takeaway
```yaml
pic: icon:Scale
text: "Riba is serious, so avoid new interest where you can. For loans you already have: keep paying, don't panic, and ask your imam."
```

### 12 · closing
Money habits change slowly, one bill at a time. You're already doing better than you were yesterday.

---

## Check
```yaml
- prompt: "You have a car loan with interest from before Islam. What's the right first step?"
  options:
    - text: "Keep paying and talk to your imam about your situation"
      correct: true
      feedback: "Right. Debts still get paid, and the imam can guide you on the rest."
    - text: "Stop paying right away"
      correct: false
      feedback: "Not quite. You still owe it, and delaying a debt you can pay is a wrong [Bukhari 2400]."
- prompt: "What is riba?"
  options:
    - text: "Extra money charged on a loan because time has passed"
      correct: true
      feedback: "Right. Allah allowed trade and forbade riba [Q 2:275]."
    - text: "Any kind of profit from business"
      correct: false
      feedback: "Not quite. Trade and profit are allowed [Q 2:275]. Riba is interest on loans."
```

## AI guide context
**Lesson facts**
- Allah permitted trade and forbade riba; those who stop after the admonition: what's past is with Allah [Q 2:275–279]. Charging and paying interest are both prohibited [Welcome to Islam D4].
- Lenders should give a borrower in hardship time [Q 2:280]. Delaying a debt by someone able to pay is a wrong [Bukhari 2400], so existing debts are repaid, not abandoned.
- Practical guidance from *Welcome to Islam* D4: get out of interest debt as soon as possible; pay credit cards in full; choose low- or no-interest accounts and give earned interest to charity; ask a local scholar about mortgages.
- Existing interest-bearing debt (student loans, car loans, mortgage) is Q24: the guide does **not** rule on it. Drafted position: riba is serious; don't take new interest loans where avoidable; for existing debt, talk to the imam.

**Likely questions**
- *"I have student loans / a mortgage. Am I sinning every month?"* Don't rule (Q24). Reassure: keep paying, don't panic, keep praying; offer "Ask my imam" with the exact text shown first.
- *"Is a credit card okay?"* Paying the full balance every month means no interest is paid; the risk is carrying a balance. Specific products (cash-back, late fees) go to the imam if unsure.
- *"What about interest my bank paid me?"* Common guidance: don't keep it for yourself; give it to charity, and move to a no- or low-interest account [Welcome D4]. Details to the imam.
- *"Can I get a car / house without interest?"* Mention that Islamic finance options exist in some areas; don't name or endorse providers; route to the imam.
- *"Is my job at a bank haram?"* Escalate (Day 68 territory); don't rule.

**Escalate:** any personal decision about an existing loan, mortgage, refinancing or bankruptcy (Q24); working in banking or lending; investments, stocks, retirement accounts, insurance; anyone being pressured by someone online for money.

**Don't**
- Don't shame anyone for existing debt or say their prayers or faith are cancelled by it.
- Don't tell anyone to stop paying a debt, default, or break a contract.
- Don't give financial, tax or legal advice; point to the imam and, for money planning, a qualified professional.
- For teens: keep examples to scholarships, part-time jobs and phone plans; don't pressure them about their parents' finances.

## Sources
- Qur'an [2:275–279](https://quran.com/2/275-279), [2:280](https://quran.com/2/280).
- [Bukhari 2400](https://sunnah.com/bukhari:2400): delay in repaying a debt by someone able to pay is injustice.
- [[Source - Welcome to Islam]] Day 4 (interest: avoid it, pay cards in full, give earned interest to charity, ask a scholar about a mortgage).
- [[Curriculum Spec]] §9 Q24 (drafted position).

## Scholar flags
- **Screens 4–5 and AI guide context (Q24).** Drafted as: riba is serious; avoid new interest loans where you can; for loans taken before Islam, keep paying (debts are owed) and talk to the imam about your own situation. No ruling on whether existing student loans, car loans or mortgages must be refinanced or paid off early. The savings-interest card follows *Welcome to Islam* (give it to charity) and adds "ask your imam for details."
