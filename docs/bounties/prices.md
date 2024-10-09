## Bounty Types

Bounties can be classified into one of the following types:

* 🐞 **Bug Fix**: Fix to a bug in the Hummingbot codebase
* 🚀 **Enhancement**: Update or improvement to a component in the Hummingbot codebase
* 📺 **Content**: Documentation, videos, guides, and other content that explains how to use an aspect of Hummingbot
* 🔬 **Research**: Investigation into possible work and recommendation on how to proceed
* 🏦 **New Connector**: A new [connector](/exchanges/) in the Hummingbot or the Hummingbot Gateway codebases
* 📈 **New Strategy/Script**: A new Hummingbot [strategy](/strategies/) or [script](/scripts/)

In addition, bounties may be:

* **Open Source**: merged into the official Hummingbot codebase, or 
* **Closed Source**: delivered as a private fork to the Sponsor

## Bounty Examples in Detail

### Bug Fix (Priority 3)

- Task for research, simple improvements and fixes
- Mostly UI or cosmetic bug
- Does not affect Hummingbot UX or performance
- Examples:
    - https://github.com/hummingbot/hummingbot/issues/6293
    - https://github.com/hummingbot/hummingbot/issues/6298
    - https://github.com/hummingbot/hummingbot/issues/5800

### Bug Fix (Priority 2)

- Task for research, improvements and fixes
- Issues/bugs that almost render Hummingbot or connector unusable
- Affects overall UX
- Tasks requiring refactor on some parts of a connector, feature and workflows
- Examples:
    - https://github.com/hummingbot/hummingbot/issues/6767
    - https://github.com/hummingbot/hummingbot/issues/6574
    - https://github.com/hummingbot/gateway/issues/107

### Bug Fix (Priority 1)

- Critical issues requiring urgent fix
- Not commonly occurring but need immediate attention
- Hummingbot or connector is rendered unusable

## Connector Pots

Every epoch, community voting determines the top 4 connectors sharing a 1m HBOT pot based on pro-rate voting share.

### Usage of Connector Pots

1. **QA for Ongoing Issues:**
    - Confirm ongoing issues reported to the connector then add bounty based on priority
2. **Content Creation:**
    - Team discussion on whether to create content, starts at 100k HBOT
    - Examples:
        - https://github.com/hummingbot/hummingbot/issues/6661
        - https://github.com/hummingbot/hummingbot/issues/6818
        - https://github.com/hummingbot/hummingbot/issues/6660
3. **Feature Addition:**
    - Team discussion on features to be added to existing connectors, starts at 100k HBOT
4. **Connector Refactor to 2.1 Standards**


## Suggested Bounty Amounts

| Task                            | Sponsor Price (includes 20% Handing Fees) |
|---------------------------------|------------------|
| Candles Feed                    | 625 USDC         |
| Custom Data Feed                | 750 USDC         |
| CEX Spot Connector              | 3750 USDC        |
| CEX Perp Connector              | 5000 USDC        |
| DEX AMM V2                      | 3750 USDC        |
| DEX AMM V3                      | 5000 USDC        |
| DEX CLOB Spot                   | 5000 USDC        |
| DEX CLOB Perp                   | 6250 USDC        |
| Upgrade DEX CLOB from mix of Gateway + client to full client | 1250-3000 USDC |
| Existing connector update       | 1250 USDC        |
| Custom Script                   | 625-3125 USDC   |
| Custom Controller               | 625-3125 USDC   |
| Custom Screener                 | 375-750 USDC    |
| Fix bug                         | 125-625 USDC    |

!!! tip
    Sponsor pricing may be lower if sponsors pay using HBOT

## Bounty Handling Fee

Hummingbot Foundation charges Sponsors a Handling Fee for overseeing the entire lifecycle of a bounty: scoping the bounty, finding and assigning the bounty to a qualified contributor, performing engineering/QA review, and conducting payments. This saves you a lot of time and effort.

The standard Handling Fee is **20%**. If a Sponsor submits a 1000 USDT total bounty, the Handling Fee is 200 USDT and the Contributor receives 800 USDT.

If the bounty is denominated in [HBOT](https://etherscan.io/token/0xe5097d9baeafb89f9bcb78c9290d545db5f9e9cb), the Handling Fee is **10%**. If a Sponsor submits a 100,000 HBOT total bounty, the Handling Fee is 10,000 HBOT and the Contributor receives 90,000 HBOT.

## Payment Process

After the bounty fix has been verified and published, we schedule the bounty for payment, and the Foundation will include the bounty payment in its monthly bounty payout process. 

Afterwards, we will mark the bounty as Paid in both [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1) and [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing).

## Pricing Considerations

Starting prices are subject to team discussion considering:
- Task scope feasibility within suggested bounty amount
- Developer's experience for the task
- Current HBOT token price or equivalent in different tokens
    
!!! note
    All decisions regarding priority, voting, and pricing are subject to team consensus and may be revised based on project needs and market conditions.*