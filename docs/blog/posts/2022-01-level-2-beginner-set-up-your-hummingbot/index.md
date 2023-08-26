---
date: 2022-01-01
authors:
  - foundation
categories:
  - Guides
  - Level 2
---

# Set up your Hummingbot
![cover](cover.jpg)


### Welcome to **Level 2**!
In this level, we will teach you how to set up Hummingbot client and a Hummingbot miner account to start earning liquidity mining rewards. We will walk you through different common strategies and teach you two basic strategies (pure market making and cross exchange-market making) to get you started with your bot. We will also provide tips on selecting markets, dealing with different market situations, and beginner level tips to reduce inventory risk.

The goal of this level is to help you earn your first $10 in Miner rewards!

<!-- more -->

### **Set up Hummingbot**

The online Test Drive and the Client app are essentially the same product. The Test Drive allows you to try out our product online without installing anything on your laptop but there is a time quota per instance. You can also download our Client desktop app directly so that your bots can run on your computer with no time restrictions.

**Test Drive**

[Running Hummingbot](https://hummingbot.io/en/academy/quickstart/?ref=blog.hummingbot.org)

**Client (Desktop App)**


[Running Hummingbot](https://hummingbot.io/en/academy/quickstart/?ref=blog.hummingbot.org)

### **Set up a Miner account for liquidity mining rewards**

To qualify for liquidity mining rewards in the [Hummingbot miner platform](https://miner.hummingbot.io/?ref=blog.hummingbot.org), you will have to set up a miner account. Here’s a quick start guide:

[Quickstart | Configure Hummingbot Miner](https://hummingbot.io/en/academy/quickstart/2-configure-miner/?ref=blog.hummingbot.org)

### **Reading for Level 2: Exploring Strategies**

[Academy Level 2] A. Beginner — Exploring Common strategies

- Exploring strategies and configurations
- Overview of all common strategies
- (To save time, focus on the strategies in **)
- **Pure market making
- **Advanced market making
- **Cross-exchange market making
- **Other strategies (don’t have to read in beginner stage):
- Perpetual market making
- Arbitrage
- Missing some trades
- Avellaneda market making
- Celo Arbitrage
- Spot perpetual Arbitrage
- Liquidity mining strategy
- Advanced TWAP
- The two most common strategies for beginners
- Pure market making
- Cross exchange market making

[Academy Level 2] B. Beginner — Selecting markets, identifying trends, and reducing inventory risk

- Tips for selecting markets
- Tips for selecting markets
- Volatility Risk Factor score
- Identifying Trends
- Beginner Guides to hedging / reducing inventory risk
- What is inventory risk?

[Academy Level 2] C. **Strategy #1: Pure Market Making (PMM) Strategy**

- Trying out pure market making strategy
- TradingView indicators
- Set up a kill switch
- Tips for choosing the right spread
- Market is uptrend
- Market is downtrend
- Understanding volatility to help us pick the right spread
- [Helpful tips for setting basic parameters](../2022-03-favorite-hummingbot-parameters-from-trader-jazzy/index.md)

[Academy Level 2] D. Beginner — Strategy #2: Use cross-exchange market making (XEMM) strategy to lower risk

- What is cross-exchange market making?
- Cross-exchange market making reduces inventory risk
- The concept behind cross-exchange market making strategy
- Creating sell order in maker, executing a buy order from taker market
- Creating buy order in maker, executing a sell order from taker market
- Setting price source configurations

[Academy Level 2] E. Beginner — Fundamental philosophies for success, tips, hacks, and advice

- Top misconceptions and fundamental philosophies for success
- Top misconceptions
- Common hallmarks of successful users - Fundamental philosophies for success
- Helpful Hummingbot features & configs
- Paper Trade
- Balance Limit
- Minimum order size
- Performance History
- Kill Switch
- Integrate Telegram
- [How to ensure that you are capturing liquidity mining rewards](../2022-03-orders-must-flow/index.md)
- [Systematic approach to running simple experiments](../2022-03-systematic-approach-to-liquidity-mining/index.md)
- Strategy hacks & tips from traders
- Strategy Hacks 101
- [A beginner’s guide](../2022-03-how-to-get-good-at-market-making-on-hummingbot-miner/index.md)
- Tips from Traders

### **Missions**

**Install Hummingbot**

- **Mission 2.1**: Install Hummingbot with the instructions in this article. If you have any questions, reach out to #miner-support channel in our Discord group:
- [Hummingbot Discord Server](https://discord.com/invite/hummingbot?ref=blog.hummingbot.org)

**Try Pure Market Making Strategy (PMM)**

- **Mission 2.2**: Run a PMM trading bot with a stable-coin pair. Adjust different factors to see how it affects your bot's performance. Understand your performance in relation to the market and trading fees
- **Mission 2.3**: Run a PMM trading bot and adjust different factors to see how it affects your bot's performance. Understand your performance in relation to the market and trading fees. Some factors to dive deeper into include:
  - bid-ask spreads
  - inventory skew
  - time-sensitive settings
  - frequency of updating open orders: order refresh time
  - reducing your bot's trading frequency: filled order delay etc

<iframe width="200" height="113" src="https://www.youtube.com/embed/CtbyvZ1J-xU?list=PLDwlNkL_4MMekihXq7C-Nzx9YkivaZZ6r" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="200" height="113" src="https://www.youtube.com/embed/l5fJQndl9BI?list=PLDwlNkL_4MMekihXq7C-Nzx9YkivaZZ6r" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Try Cross-exchange market making strategy**

- **Mission 2.4**: Run a cross-exchange market making bot on a pair and experiment with different pairs, different exchanges, and different price sources. **Rate Oracle

** is also a very helpful feature to experiment with when working on the price source:
- [Home - Hummingbot Foundation](/strategy-configs/rate-oracle.md)

**Earn $10 rewards**

- **Mission 2.5**: earn $10 rewards from cross-exchange market making or PMM
- Expectations: don't expect profits from the beginning. Focus on learning

**Post more questions!**

- **Mission 2.6**: read Discord channels #trader-chat and #liquidity-mining. Now that you’ve tried more strategies, post a question related to the strategies in the group. Reach out to #miner-support if you have any issues with the set up.