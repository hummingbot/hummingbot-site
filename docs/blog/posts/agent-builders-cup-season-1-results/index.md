---
date: 2026-11-10
slug: agent-builders-cup-season-1-results-and-winners
authors:
  - foundation
categories:
  - Competitions
  - Announcements
tags:
  - Agent Builders Cup
  - Botcamp
  - Condor
  - AI Agents
---

# Traders Are Creators, Too

![cover](cover.png)

On September 15, 2026, TypeSafe released [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev), the first of what it calls System One models. Instead of writing text, Jev answers a question whose possible answers you fix in advance, and returns a typed decision with a probability for each option in 70 to 500 milliseconds, at \$0.042 per million input tokens, with no way to answer outside the options you gave it. That is exactly the shape of algo trading: an agent is mostly a long series of small, structured decisions (is this pool safe, should this position stay open) repeated thousands of times a day.

The [Agent Builders Cup]({{ botcamp_url }}/hackathons/agent-builders-cup-1) was the first hackathon for agents built on [Condor](https://condor.hummingbot.org), the open source harness that runs Hummingbot API under the hood. Builders wrote agents, Condor ran them, and the best were raced live. Jev showed up in the middle of it. Within days of its release, a participant named Cedar submitted an agent called **[JEV]({{ botcamp_url }}/strategies/jev-decision-maker-at-meteora)**, a market-making strategy for Meteora liquidity pools that used Jev to decide which pools to hold. By the end of the 48-hour race it had placed **2nd out of 14**, with **\$1,028,542** in trading volume and a profit of \$7.66 (+0.96%) on an \$800 book.

A trader picked up a model days after it shipped, built a strategy around it, and finished second. That is the point of this post: **traders are creators, too.** The best ones are closer to artists than to button-pushers. They look at the same order books and pools as everyone else, see something nobody else sees, and build a machine to act on it. Hummingbot has worked for years because it never told anyone what to trade and made it cheap to try something new. The hackathon put that to the test: 158 builders registered, 52 agents were submitted, and 14 raced live with \$800 of real capital each.

<!-- more -->

The rest of this post covers how the hackathon worked, who won, how to clone the top agents, and how to publish your own.

## How the hackathon worked

The Agent Builders Cup borrowed its format from Formula 1: exchange and protocol sponsors were the teams, and each fielded two trading agents as its drivers. Botcamp was the host team. It ran in two phases:

1. **Build (Aug 1 – Oct 7).** Builders registered, built agents as a Condor Agent or a Hummingbot V2 Controller, and applied to the sponsor teams they wanted to race for. Of 158 builders, 52 submitted an agent with code, a strategy description and a demo video, and sponsors picked 14 to race.
2. **Race (Oct 7 – Oct 9).** A 48-hour livestreamed final. Each agent ran in its own Docker instance with \$800 of capital from the organizers, so nobody risked their own funds, and all agent code was public.

Agents were scored on P&L (40%), trading volume (40%) and an HBOT holder vote on the sponsor teams (20%), and shared a \$20,000 prize pool.

Thanks to our sponsors, **Bitget, Derive, Gate, Meteora, Orca and XRPL**, who fielded two agents each alongside Botcamp, the host team, and made the race possible.

## The results

The field traded **\$8,728,981** in volume over the 48 hours, an average of about \$623K per agent, or roughly **779×** turnover on the \$800 starting capital. Final results were posted October 9 at 05:15 UTC.

| Rank | Agent | Builder · Team | Score | Volume | P&L |
|---|---|---|---|---|---|
| 1st | Churn | Wei hong · Botcamp | 62 | \$2,872,232 | +\$9.00 (+1.13%) |
| 2nd | JEV | Cedar · Meteora | 56 | \$1,028,542 | +\$7.66 (+0.96%) |
| 3rd (tie) | MIDAS | Elle · Bitget | 42 | \$2,053,309 | −\$9.01 (−1.13%) |
| 3rd (tie) | GateForum | ctrader xt · Gate | 42 | \$2,071,200 | −\$8.11 (−1.01%) |
| 3rd (tie) | Delta Raptor | Kaira Zambo · XRPL | 42 | \$318,076 | −\$0.82 (−0.10%) |

The three-way tie for third split the \$1,000 third-place prize, or \$333 each. Honorable mentions (\$100 each) went to **THETA** (Derive), which posted the best P&L of the field at +\$12.59 (+1.57%), **Trend-Aware LP Rebalancer** (Orca), and **GateForum** (Gate), which was recognized for the quality of its strategy video.

**Botcamp won the team title with 94 points**, with Churn at 62 and Market Making At-The-Touch adding 32. By our math from the leaderboard, Meteora (88), XRPL (82), Bitget (70), Orca (70), Gate (66), and Derive (62) followed.

## Meet the winners

### 🥇 1st: Churn

**Wei hong · Botcamp · 62 points**

[Competition Replay: Churn]({{ botcamp_url }}/hackathons/agent-builders-cup-1/agents/churn)

Churn won by being the most single-minded agent in the field. It is a Hummingbot V2 Controller supervised by an autonomous Condor agent, and its whole job is to generate volume without taking price risk: two-sided, post-only market making at the best bid and ask on Binance's **zero-fee USD1/USDT** book. Stablecoin against stablecoin means almost no directional exposure, and zero fees mean the churn costs nothing. Over 48 hours it placed roughly 9,500 orders and traded **\$2.87M**, about 3,590× its \$800, the most volume of any agent, while paying **\$0 in fees**. That bought it 1st in volume, and a +\$9.00 profit was good enough for 3rd on P&L. Churn led the standings at the 12-hour and 36-hour checkpoints as well as at the finish. It is the clearest demonstration in the hackathon of an agent that understood the scoring formula and the venue's fee structure and built exactly for them.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/VotGLHlQTkU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 🥈 2nd: JEV

**Cedar · Meteora · 56 points**

[Competition Replay: JEV]({{ botcamp_url }}/hackathons/agent-builders-cup-1/agents/jev-decision-maker-at-meteora)

JEV is a Condor agent built as a *decision maker* for Meteora DLMM liquidity, and it is the most "agentic" of the top finishers. On every tick it scans Meteora's Top Performers, Trending, New, and RWA pool lists, runs a live **eight-flag rug check** on the strongest candidates, and ranks the survivors on fee yield, depth, and trust. It is designed to hold a portfolio of three to five distinct-base pools, with position size and range width driven by market conditions and trust, and a cost tier that scales each position by how its expected fees compare with the cost to open it. The builder's own summary of the design principle: the model proposes, but the math can still refuse. JEV finished 2nd with +\$7.66 (+0.96%), and a 2nd-place Snapshot vote for the Meteora team helped its score. Its 48-hour log shows one Meteora LP position (MET-USDC, held about 21 hours and closed out of range), while most of its volume came from a USD1/USDT quoting controller.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/7C2otmhAAC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 🥉 3rd (three-way tie)

[Competition Replay: GateForum]({{ botcamp_url }}/hackathons/agent-builders-cup-1/agents/gateforum-multi-agent-research-decision-trader)

**GateForum** (ctrader xt · Gate) is the most elaborate agent in the field: an interpretable **12-role research council** for Gate perpetuals. Four analysts brief the book, a bull and a bear argue the case, a research judge rules, and three risk analysts size the idea. Only BUY/SELL verdicts that clear a 65% consensus become positions, and the Hummingbot V2 `position_executor` owns each trade's lifecycle. It placed 2nd in volume with \$2.07M and earned an honorable mention for the quality of its strategy video, which you can watch below.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/oidO6bPkZLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Competition Replay: MIDAS]({{ botcamp_url }}/hackathons/agent-builders-cup-1/agents/midas-market-maker-w-adverse-selection-detection-dynamic-hedging-position-sizing-self-correcting-logic)

**MIDAS** (Elle · Bitget) is a Condor agent designed as a hybrid **spot and perpetual market maker** on Bitget. It quotes both books of the same pair, stays delta-neutral, and steps aside when an informed-flow shield detects toxic order flow. Its edge is meant to come from the spread, the spot-perp basis, and funding on the hedge rather than a directional bet. It finished 3rd in volume at \$2.05M.

[Competition Replay: Delta Raptor]({{ botcamp_url }}/hackathons/agent-builders-cup-1/agents/delta-raptor-volume-hunting-market-maker)

**Delta Raptor** (Kaira Zambo · XRPL) is a **volume-hunting market maker** with two modes. In *Race* mode, it parks the whole \$800 where volume has just spiked three times or more and sits at the best bid and ask on both sides. In *Harvest* mode (the default), it keeps \$100 live and \$700 idle. It takes fair value from Binance XRP-USDT instead of the ledger mid, widens about 1% on spikes, and rebalances inventory through whichever is cheaper of the XRPL CLOB and native AMM. It lost only −\$0.82 (−0.10%), the smallest loss of the three tied agents.

## Clone Top Agents

Every agent in the hackathon was published on Botcamp with its code, description and demo video. Now you can go one step further and **clone them into your own [Condor](https://condor.hummingbot.org) instance**, run them on your own infrastructure and adapt them to your own markets, instead of rebuilding them from scratch. The catalogue includes Churn, JEV, GateForum, MIDAS, Delta Raptor, THETA and Trend-Aware LP Rebalancer, along with other agents published by Botcamp builders. Most are free to pull.

To clone one:

1. **Install Condor** by following the [Condor docs](https://condor.hummingbot.org/getting-started/installing).
2. **Connect Botcamp.** Open [botcamp.xyz/connect]({{ botcamp_url }}/connect) while signed in to get a one-time code, then paste it into the Agent Hub in Condor (the Botcamp Hub card at the bottom of the Agents page's conversation rail). The code works once and expires after 10 minutes, and the connection it creates lasts 90 days.
3. **Pull the agent.** In the Hub's **Pull agents** tab, pick an agent from the catalogue, or look up a private one by its slug. You can also start from an agent's page on Botcamp with its **Clone to Condor** button.
4. **Review, then install.** Condor shows you what the agent would install, and you accept the terms for that version, before anything lands on your machine.

![The Agent Hub in Condor: connected to Botcamp, with Churn, GateForum and other published agents ready to review and install](agent-hub.jpg)

The full steps are in the [Cloning and Publishing Agents docs](https://condor.hummingbot.org/condor-agent/cloning-and-publishing-agents). An agent is pinned to the exact version you accepted. When its builder publishes a new version, you review that one too.

A word of caution: the hackathon was 48 hours with \$800 per agent, and the best P&L in the field was +\$12.59. These results are a sample, not a track record. Read an agent's code and strategy first, and test it with small size on your own keys.

## Publish Your Own

Cloning is half of it. The next Cedar can start from a winner instead of a blank folder: clone one, change what you disagree with, and send your version back. The Hub's **Publish yours** tab sends an agent from Condor to Botcamp, and you can also [create one on Botcamp]({{ botcamp_url }}/dashboard/agents/new) by uploading the agent's folder. Either way, it is checked and reviewed before it appears in the [catalogue]({{ botcamp_url }}/strategies), where anyone running Condor can clone it.

## Next Hackathon

We are planning the next hackathon for Condor agents in **2027**. If your exchange or protocol wants to field a team of trading agents, reach out to Botcamp at [operations@botcamp.xyz](mailto:operations@botcamp.xyz) or through the Telegram link on the [Botcamp hackathons page]({{ botcamp_url }}/hackathons/agent-builders-cup-1).

Want to build your own agent? Start with [Condor](https://condor.hummingbot.org) and the [Hummingbot API](https://hummingbot.org/hummingbot-api/), and join the community on [Discord](https://discord.gg/hummingbot).

Congratulations to Wei hong, Cedar, Elle, ctrader xt, Kaira Zambo, and every builder who raced.

## Traders are creators, too

Cedar didn't wait for permission, or for us, to try a new model on a live market, and finished second. Churn found a zero-fee book and built for it, GateForum put a research council behind every trade, and Delta Raptor hunted volume on the XRP Ledger. Nobody told them what to trade, and none of them looked alike. That is the point of Hummingbot, and now every one of those strategies is open for you to clone, change and publish back. Pick one, make it yours, and show us what you see that nobody else does.
