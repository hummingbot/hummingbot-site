---
date: 2023-01-01
authors:
  - foundation
categories:
  - Academy
tags:
  - Level 2
---

# Fundamental Philosophies for Success with Hummingbot

![cover](cover.jpg)

Trading is a rewarding and risky activity. If you’re new to Hummingbot, you’re in the midst of a mature community that has found market making to be both exciting and profitable in the long term. That might be you, but before you go all-in and mortgage your house in crypto trading, here are the top seven pitfalls and misconceptions that all Hummingbot beginners face. This article works best if you’ve at least spent some time taking Hummingbot on a test drive, but it’s by no means a requirement.

<!-- more -->

**Common misconceptions:**

1. ❌ Hummingbot is a money printer.
2. ❌ Market making works best when markets are volatile or stable.
3. ❌ There exists the optimal configuration that prints money.
4. ❌ The higher the yield on the Hummingbot miner platform, the higher the returns.
5. ❌ Fees are negligible.
6. ❌ “It’s been profitable for the past week/month, time to go all in.”
7. ❌ More bots, more strategies, more rewards, more profits.

It is highly recommended that you read the following article to learn more: [https://hummingbot.io/en/blog/2022-03-02-beginners-top-misconceptions/](../2022-03-beginners-top-misconceptions/index.md)

# Common hallmarks of successful users - Fundamental philosophies for success

You must be wondering, what are the top miners doing that is earning them thousands of dollars a week? This piece is a result of discussions with some of the miners who are in the Eagle Club (Hummingbot’s VIP club), and we hope it unveils some of the things profitable miners do. We will cover the following points:

1. Picking Pairs
2. Managing Inventory Risks
3. Setting up guardrails
4. Constant experimentation
5. Joining a community

For more information you can check out this link: [https://hummingbot.io/en/blog/2022-03-04-common-hallmarks-of-successful-miners](../2022-03-common-hallmarks-of-successful-miners/index.md)

# Helpful Hummingbot features & configs

Here are some helpful Hummingbot features and configs. For all features and configs, visit Hummingbot documentation.

### Paper Trade

This feature allows users to test Hummingbot and simulate trading strategies without risking any actual assets. Enter the command paper_trade to enable this feature.

[https://hummingbot.org/global-configs/paper-trade/](/global-configs/paper-trade.md)

### Balance Limit

Sets the amount limit on how many assets Hummingbot can use in an exchange or wallet. This can be useful when running multiple bots on different trading pairs with the same tokens e.g. running a BTC-USDT pair and another bot on ETH-USDT using the same account.

[https://hummingbot.org/global-configs/balance-limit/](/global-configs/balance-limit.md)

### Minimum order size

By default, we set the minimum to an equivalent of $11 which is defined under min_quote_order_amount in the global config file. The market_mid_price is the average of the order book's best bid and best ask.

(Can't find link for `minimum_order_size`)

### Performance History

Run the history command in Hummingbot to display the current duration of total past trades, assets inventory, and value, market trading pair performance.

[https://hummingbot.org/client/history/](/client/history.md)

### Kill Switch

Kill switch is a global parameter in the Hummingbot client. This stops your strategy when it reaches or exceeds the kill_switch_rate value, which can be either positive or negative. This means if you set it to 10% after you've profited at 10% the bot will stop. If you set it to -10% then the bot will stop at a 10% loss.

[https://hummingbot.org/global-configs/kill-switch/](/global-configs/kill-switch.md)

### Integrate Telegram

If you haven't used Telegram before, it's a messaging app that can be installed on mobile and laptop/desktop computers. You can set up your Hummingbot to integrate with Telegram so you can send selected commands and view your bot status from the app.

[https://hummingbot.org/global-configs/telegram/](/global-configs/telegram.md)

# How to ensure that you are capturing liquidity mining rewards

How can you ensure that you are capturing liquidity mining rewards while running your bot? Trader and community member mobiwan’s article provides a good beginners guide to make sure your bots are set up to get the rewards going:

[Trader tips] The orders must flow from Trader Mobiwan

# A systematic approach to running experiments

In the beginning process of your learning journey, it is important that you maintain a good feedback loop and constantly run experiments before doubling down your capital.

Here are some tips from Trader Diego on how you can:

* set up experiments
* record your performance
* run data analysis
* iterate

[Trader tips] Systematic approach to Liquidity Mining - ROI based analytics and simple experiments by trader Diego

# Strategy hacks & tips from traders

### Strategy Hacks 101

[https://hummingbot.io/en/blog/2019-09-strategy-hacks/?_ga=2.237710344.920167866.1635749025-1486649827.1628237708](../2019-09-strategy-hacks/index.md)

Strategy tips for new users on using Pure Market Making Strategy and Cross Exchange Market Making dealing with thin order books.

### A beginner’s guide

Here’s a beginners guide from trader and community member Wojak on how to be good at market making:

[https://www.notion.so/hummingbot/Trader-tips-How-To-Get-Good-At-Market-Making-On-Hummingbot-Miner-Platform-A-beginner-s-guide-de5c11e416d94d709f5a9e73cdfc7e1c](https://www.notion.so/hummingbot/Trader-tips-How-To-Get-Good-At-Market-Making-On-Hummingbot-Miner-Platform-A-beginner-s-guide-de5c11e416d94d709f5a9e73cdfc7e1c?ref=blog.hummingbot.org)

### Tips from Traders

**Manuel Zeiler** [https://hummingbot.io/en/blog/2019-05-crypto-trader-interview3/](../2020-07-top-liquidity-miner-interview3/index.md)

Manuel Zeiler explains how he uses cross-exchange market making strategy with 10% profit per month. This interview covers how he manages his strategies, inventory, inventory risk, and profits.

**Harry Yeh** [https://hummingbot.io/en/blog/2020-07-top-trader-interview-harry-yeh/](../2020-07-top-trader-interview-harry-yeh/index.md) [https://www.youtube.com/watch?v=QKZSvEcqdvg](https://www.youtube.com/watch?v=QKZSvEcqdvg&ref=blog.hummingbot.org)

The video and blog post shares how Harry Yeh got into trading, approaches his trading strategies, and how he handles market volatility.

**MrBig1964** [https://hummingbot.io/en/blog/2020-12-top-liquidity-miner-interview4/](../2020-12-top-liquidity-miner-interview4/index.md)

Practical tips on how he manages multiple bots, changing configurations, managing PnL, making money with compounding, and mitigating risks.

**David Salter** [https://hummingbot.io/en/blog/2019-07-top-bounty-hunter-interview1/](../2019-07-top-bounty-hunter-interview1/index.md)

**Neohowie** [https://hummingbot.io/en/blog/2020-05-top-liquidity-miner-interview2/](../2020-05-top-liquidity-miner-interview2/index.md)

