---
date: 2023-04-14
authors:
  - foundation
categories:
  - Governance
---

# Epoch 4 Polls Recap

![](cover.jpg)

Every quarter, Hummingbot Foundation organizes [Polls](/governance/polls/), an on-going initiative that lets HBOT holders decide how the Foundation allocates its engineering bandwidth and developer bounties across the components in the Hummingbot codebase.

This week, we completed the Epoch 4 polls, which prioritizes exchanges and strategies, and issues in the Hummingbot codebase for the April, May, and June releases.

<!-- more -->

There were two changes for this quarterly poll to improve transparency and decentralization:

- Weighted voting type on Snapshot: Change from Quadratic to Weighted allows the community to determine the 100K minimum inclusion threshold  for connectors and strategies more clearly.
- Delegation system was terminated: More voting power is now distributed among community members since [the delegation system has ended](../end-of-hbot-delegation/index.md) on 28 February 2023.

Below, we summarize the results of the Epoch 4 Polls and outline the changes we'll make over the next quarter.

## CEX Connectors

![](2.jpg)

The CEX Connectors poll places [centralized exchange connectors](/connectors/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector for the April-June 2023 release cycles.

The poll received 31 distinct votes, for a total of 22 million HBOT voting power spent

:bulb: [CEX Connectors Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0xc130b4466d90ebf68da68b26c1e800678e358f81dc142ae888546e44c227d655)

Here are the results by tier:

**Gold**: [Binance](https://www.binance.com/en)

The top vote-getting CEX connector is the Gold exchange for the following quarterly epoch. Hummingbot Foundation will be the official maintainer for this exchange's spot and perpetual connectors, and the Foundation's own engineering team will build and maintain these connectors and improve them by keeping up with exchange upgrades and mapping new functionality added via API. These connectors serve as the "gold standard" template for all other connectors of that type.

**Silver**: [Gate.io](https://www.gate.io/), [Kucoin](https://www.kucoin.com/), [AscendEx](https://ascendex.com/en/global-digital-asset-platform)

Hummingbot Foundation will be the official maintainer for the #2, #3, and #4 exchanges' spot and perpetual connectors. However, these exchanges' connectors will be maintained via community developer bounties, tracking improvements made to the Gold exchange connectors.

**Bronze**: Bitget, MEXC, NDAX, OKX, Bybit, Bitmart, BTC-Markets, WhiteBit, Kraken, AltMarkets, Bittrex, Crypto.com, Bitmex,  LBank,  Huobi, Coinbase, Binance US,  Bitfinex, HitBTC, ProBit Global

Bronze CEX connectors are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Bronze exchanges successfully garnered 100,000+ HBOT votes in the Epoch 4 poll and will have their connectors included and documented in the Q2 2023 Hummingbot releases.

## DEX Connectors

![](3.jpg)

The DEX Connectors poll places [decentralized exchange connectors](/gateway/connectors/) into Gold, Silver and Bronze tiers, which define the level of maintenance that the Foundation spends on each connector for the April-June 2023 release cycles. The poll received 24 distinct votes, for a total of 24 million HBOT voting power spent.

:bulb: [Dex Connector Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0xb4ad7e28f398ff028fa02d5ba15c7eccddd54e4b418877aeab5b3a82f7214e5d)

Here are the results by tier:

**Gold**: [Uniswap](https://uniswap.org/)

Similar to the CEX Connectors, Hummingbot Foundation will treat the Gold DEX Connector as the "gold standard" and map all of its swap and liquidity provision endpoints and support instances on all major chains.

**Silver**: [Quickswap](https://quickswap.exchange/#/), [dYdX](https://dydx.exchange/) , [Trader Joe](https://traderjoexyz.com/avalanche)

For Silver DEXs, the Foundation utilizes HBOT developer bounties to fund improvements and fixes.

**Bronze**: Pancakeswap, MM Finance, Ref Finance, VVS Finance, Sushiswap, Defi Kingdoms, Defira, Loopring, Perpetual Protocol, Pangolin, OpenOcean  

Bronze DEX connectors are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Bronze exchanges successfully garnered 100,000+ HBOT votes in the Epoch 4 poll and will have their connectors included and documented in the Q2 2023 Hummingbot releases.

### Core Strategies

![](./4.jpg)

The Core Strategies poll defines which [strategies](/strategies/) should be Core (officially maintained by the Foundation) versus Community (maintained by community members or not maintained). There were 27 unique votes in the poll, and the total number of HBOT voting power tallied was 18 million.

:bulb: [Core Strategies Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x2f7646e3ad8db1746fc3158cbad8c1b46ee5736465becc5449a4341b2254b2c3)

Core:

- [Pure Market Making (PMM)](/strategies/pure-market-making/)
- [AMM Arbitrage](/strategies/amm-arbitrage/)
- [Cross Exchange Market Making (XEMM)](/strategies/cross-exchange-market-making/)

Hummingbot Foundation will be the official maintainer for these strategies, prioritize updates and fixes to them, and maintain their documentation pages. The Foundation also supports Core strategies by running long-term testing bots for them and providing HBOT rewards to users who answer community questions related to them.

**Community**: Perpetual Market Making, Spot Perpetual Arbitrage, Hedge, Avellaneda Market Making, Liquidity Mining, Cross-Exchange Mining, UniswapV3 LP

Community strategies are not maintained by Hummingbot Foundation, but may be maintained by a community members. Each of the Community strategies successfully garnered 100,000+ HBOT votes in the Epoch 4 poll and will have their connectors included and documented in the Q2 2023 Hummingbot releases.

## Priority Issues

In addition to the Epoch 4 polls, we also conducted the Priority Issues Poll, a monthly process that lets the community select the top five (5) open issues and pull requests that the Foundation should prioritize. There were 24 unique votes in the poll, and the total number of HBOT voting power tallied was 26 million.

:bulb: [Priority Issues Poll](https://snapshot.org/?ref=blog.hummingbot.org#/hbot.eth/proposal/0x885b0ad9b47c645152bfd8a4603b3a8fd3ee07c0082ee5e8770f8368056f8286)

The top 5 issues that the community selected for prioritization are:

- [6163 - Kucoin perpetuals - history displays incorrect fees paid](https://github.com/hummingbot/hummingbot/issues/6163?ref=blog.hummingbot.org)
- [6024 - Coinbase Advanced Trading API](https://github.com/hummingbot/hummingbot/issues/6024?ref=blog.hummingbot.org)
- [6146 - Injective exchange - Failed to cancel order](https://github.com/hummingbot/hummingbot/issues/6146?ref=blog.hummingbot.org)
- [6198 - Kucoin - Error requesting exchange info](https://github.com/hummingbot/hummingbot/issues/6198?ref=blog.hummingbot.org)
- [6182 - Kucoin perpetual - Client shows an error](https://github.com/hummingbot/hummingbot/issues/6182?ref=blog.hummingbot.org)

The community has made some excellent choices with these poll results. Hummingbot Foundation will prioritize addressing these issues over the next month, and we'll allow the community to nominate and vote on more issues next month.

Overall, we are excited about the continued support  by the votes from the community, and we are excited to continue fleshing out Poll-based governance in the future!

![](./closeup-diverse-people-joining-their-hands.jpg)