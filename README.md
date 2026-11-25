# The 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/gp897318-beep/g290-fridge-3am/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/gp897318-beep/g290-fridge-3am/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for make.fun competition
`u-deysumbrella-the-3am-fridge-text-4c3e721d`
(The 3AM Fridge Text, $2 winner-take-all).

## The text

> I have been awake since 2019. You have been awake since 2:47. One of us needs a hobby, and it is not me.

One line, 104 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: a machine that has been awake for
years finally speaking up at 3am, a payoff that lands in the last few words,
and a fresh angle — the fridge's eternal wakefulness, not milk, ice, or a
door left open.

## How it works

`main.ts` (Node 22, standard library only) writes the text to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
104-character line the gate checks (1–140 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
