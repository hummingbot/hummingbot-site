---
date: 2023-07-06
authors:
  - foundation
categories:
  - Governance
---

# Epoch 5 Polls Recap

![](cover.png)

Every quarter, Hummingbot Foundation organizes [Polls](/governance/polls/), an on-going initiative that lets HBOT holders decide how the Foundation allocates its engineering bandwidth and developer bounties across the components in the Hummingbot codebase.

This week, we completed the Epoch 5 polls, which prioritize exchanges and strategies, in the Hummingbot codebase for the July, August, and September releases.

<!-- more -->

Starting from Epoch 5, we will be implementing two changes as outlined in the approved [HGP-43](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x63958a27907ef6efa072fc92566f91bcf5df7491523ffcc64ecb47f270df9bcd) proposal. Here are the summarized details:

- **HBOT Allocation for Epoch 5 Bounties**: We will allocate 7 million HBOT for Epoch 5 bounties. This allocation ensures sufficient funding for currently designated bounties and accommodates the introduction of new bounties throughout Epoch 5.
- **Introduction of a New Connector Proposal Type**: We're adding a new proposal type for pull requests that aim to introduce new CEX or DEX connectors to the Hummingbot or Hummingbot Gateway codebases. The proposal also stipulates a minimum balance of 200,000 HBOT for creators of new connectors.

These changes aim to sustain our bounties program and facilitate further development of our codebases. We trust that they will aid in fostering a collaborative, productive, and beneficial environment for our community.

Below, we summarize the results of the Epoch 5 Polls and outline the changes we'll make over the next quarter.

## CEX Connectors

![](./CEX-Connectors-Epoch-5.png)

The CEX Connectors poll places [centralized exchange connectors](/connectors/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector for the July-September 2023 release cycles.

The poll received 30 distinct votes, for a total of 90 million HBOT voting power spent.

[CEX Connectors Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x231e942b5f23b406d409f2b12319891ab3c92605e367f75e56015061e905d56e)

Here are the results by tier:

**Gold:** [Binance](https://www.binance.com/en/register?ref=FQQNNGCD)

The top vote-getting CEX connector is the Gold exchange for the following quarterly epoch. Hummingbot Foundation will be the official maintainer for this exchange's spot and perpetual connectors, and the Foundation's own engineering team will build and maintain these connectors and improve them by keeping up with exchange upgrades and mapping new functionality added via API. These connectors serve as the "gold standard" template for all other connectors of that type.

**Silver:** [Kucoin](https://www.kucoin.com/ucenter/signup?rcode=272KvRf), [AscendEx](https://ascendex.com/register?inviteCode=UEIXNXKW), [Gate.io](https://www.gate.io/signup/5868285)

Hummingbot Foundation will be the official maintainer for the #2, #3, and #4 exchanges' spot and perpetual connectors. However, these exchanges' connectors will be maintained via community developer bounties, tracking improvements made to the Gold exchange connectors.

**Bronze:** OKX, Huobi, AltMarkets, , Phemex, BIT, Kraken, Bybit, Bitmart, NDAX, Coinbase, Bitfinex, HitBTC, Binance US, MEXC, BTC-Markets, Bitget, Bitmex

Bronze CEX connectors are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Bronze exchanges successfully garnered 100,000+ HBOT votes in the Epoch 5 poll and will have their connectors included and documented in the Q3 2023 Hummingbot releases.

## DEX Connectors

![](./3.png)

The DEX Connectors poll places [decentralized exchange connectors](/gateway/connectors/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector for the July-September 2023 release cycles. The poll received 23 distinct votes, for a total of 77 million HBOT voting power spent.

[DEX Connectors Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x70299258a513ab4fb7ad4dd106947fd017848470fc8ce63ba4eb41b91d0d755c)

Here are the results by tier:

**Gold:** [Uniswap](https://uniswap.org/?ref=hummingbot.org)

Similar to the CEX Connectors, Hummingbot Foundation will treat the Gold DEX Connector as the "gold standard" and map all of its swap and liquidity provision endpoints and support instances on all major chains.

**Silver:** [dYdX](https://dydx.exchange/?ref=blog.hummingbot.org), [Pancakeswap](https://pancakeswap.finance/?ref=blog.hummingbot.org), [Dexalot](https://app.dexalot.com/trade/?ref=blog.hummingbot.org)

For Silver DEXs, the Foundation utilizes HBOT developer bounties to fund improvements and fixes.

**Bronze:** TraderJoe, Sushiswap, Pangolin, Tinyman, Injective, Quickswap, Mad Meerkat Finance, Ref Finance, VVS Finance,  XSwap, Defira, OpenOcean, Loopring

Bronze DEX connectors are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Bronze exchanges successfully garnered 100,000+ HBOT votes in the Epoch 5 poll and will have their connectors included and documented in the Q3 2023 Hummingbot releases.

## Core Strategies

![](./4.png)

The Core Strategies poll defines which [strategies](/strategies/) should be Core (officially maintained by the Foundation) versus Community (maintained by community members or not maintained). There were 22 unique votes in the poll, and the total number of HBOT voting power tallied was 75 million.

[Core Strategies Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x65f6af77e8731827c0f19251b2c6e0346230205fe3c6e34294b3981dfb0f3f77)

**Core:**

[AMM Arbitrage](/strategies/amm-arbitrage/)

[Pure Market Making (PMM)](/strategies/pure-market-making/)

[Cross Exchange Market Making (XEMM)](/strategies/cross-exchange-market-making/)

Hummingbot Foundation will be the official maintainer for these strategies, prioritize updates and fixes to them, and maintain their documentation pages. The Foundation also supports Core strategies by running long-term testing bots for them and providing HBOT rewards to users who answer community questions related to them.

**Community:** Avellaneda Market Making, Liquidity Mining, Perpetual Market Making, Spot Perpetual Arbitrage, UniswapV3 LP, Cross-Exchange Mining, TWAP, Hedge

Community strategies are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Community strategies successfully garnered 100,000+ HBOT votes in the Epoch 5 poll and will have their connectors included and documented in the Q3 2023 Hummingbot releases.

## Discontinuation of Priority Issues Poll

In addition to our regular Epoch quarterly polls, the Foundation formerly held the Priority Issues Poll on a monthly basis. This process permitted the community to select the top five most critical open issues and pull requests, which the Foundation would then prioritize.

However, we have observed a decline in issue nominations by our community members over the past few months. In the June nomination thread, only Foundation team members nominated issues. As such, the Foundation has decided to discontinue the monthly Priority Issues Poll, effective from start of Epoch 5. Community members can continue to flag issues on Discord and submit Pull Request Proposals to propose changes that they wish the Foundation to review.

Nevertheless, we wish to underscore our ongoing commitment to community engagement and interaction. We encourage all members of our community to continue reporting and creating issues directly on GitHub. Additionally, we would like to encourage our developers to actively engage in resolving the open issues listed on GitHub and those highlighted on our Bounties Board.

We appreciate your understanding and continued support in this decision. Our goal is to continue nurturing a collaborative environment for issue reporting and resolution, as well as to strengthen overall community participation. Your involvement is crucial to our ongoing success, and we are grateful for your commitment.

Overall, we are excited about the continued support by the votes from the community, and we are excited to continue fleshing out Poll-based governance in the future!

![](./teamwork-business-human-resources-2.jpg)