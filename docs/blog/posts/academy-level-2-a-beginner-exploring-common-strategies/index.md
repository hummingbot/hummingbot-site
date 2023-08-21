---
date: 2022-01-01
authors:
  - foundation
categories:
  - Academy
---

# Exploring strategies and configurations

The following pages will help you to explore how you can set up your bot with different strategies and configurations:

1. **Strategies:**
   - To explore all the different strategies provided by Hummingbot, you can visit Hummingbot Foundation’s documentation site:
     [https://hummingbot.org/strategies/](https://hummingbot.org/strategies/?ref=blog.hummingbot.org)
2. **Global Configurations:**
   - There are global configurations that apply to most strategies. Learn more about them here:
     [https://hummingbot.org/global-configs/](https://hummingbot.org/global-configs/?ref=blog.hummingbot.org)

# Overview of all common strategies

We recommend that you use small amounts of real crypto instead of paper trade to try out the strategies. It is better to run tests this way than paper trade so you get to look at Hummingbot and the exchange side-by-side, understanding better how the strategy and your configuration works. Paper trade is also like another "market" in our codebase, so you may run into errors or problems when paper trading but not when using a live connector.

To save time, only focus on the top three strategies in ** (pure market making, advanced market making, cross-exchange market making)

<!-- more -->

## Pure Market Making

This is the most commonly used strategy by Hummingbot users. The prompts in the configuration walkthrough during the initial setup in Quickstart Guide are the basic parameters to run the strategy.

This is the simplest of all the strategies. Like in normal trading, you buy and sell assets at a certain price by placing maker orders in the order book.

[https://hummingbot.org/strategies/pure-market-making/](https://hummingbot.org/strategies/pure-market-making/?ref=blog.hummingbot.org)

## Advanced market making

This is still `pure_market_making` strategy but we call it advanced market making because of the list of advanced strategies Hummingbot users can utilize and play around with.

Over time, we found out that users who put more time and effort into learning the parameters, adjusting their settings from time to time are more profitable compared to when using it out of the box.

Please make sure to fully understand how each advanced parameter works, which parameters don't work well together, their use cases, etc.

[https://hummingbot.org/strategy-configs/](https://hummingbot.org/strategy-configs/?ref=blog.hummingbot.org)
[https://hummingbot.org/global-configs/](https://hummingbot.org/global-configs/?ref=blog.hummingbot.org)

## Cross-exchange market making

This is another strategy available to use with Hummingbot. You will need to hold inventory on two exchanges or markets, one where the bot will make a market (maker exchange) and another where the bot will source tand hedge any filled orders (taker exchange).

Cross exchange is a **maker-taker** strategy. Read more through the docs link and blog below :

[https://hummingbot.io/blog/2020-09-what-is-cross-exchange-market-making/](https://hummingbot.io/blog/2020-09-what-is-cross-exchange-market-making/?ref=blog.hummingbot.org)
[https://hummingbot.org/strategies/cross-exchange-market-making/](https://hummingbot.org/strategies/cross-exchange-market-making/?ref=blog.hummingbot.org)

Our video is outdated in terms of Hummingbot UI but explains the idea of cross exchange market making strategy.

[![Hummingbot School] Lesson 1 - Cross-exchange market making strategy | Crypto high frequency trading](https://www.youtube.com/embed/jVIagFbQnmo?feature=oembed)](https://www.youtube.com/embed/jVIagFbQnmo?feature=oembed)
[![Hummingbot School] Lesson 1 - Cross-exchange market making strategy | Crypto high frequency trading](https://www.youtube.com/embed/jVIagFbQnmo?feature=oembed)](https://www.youtube.com/embed/jVIagFbQnmo?feature=oembed)

## Perpetual Market Making

Similar to pure market making strategy, Hummingbot continually posts limit bid and ask offers on a market and waits for other market participants ("takers") to fill their orders. In addition to that, position management features are introduced to let users further configure the bot to make managing positions easier and remove the need to manually interact with the derivative exchange through other available platforms to close position. Two(2) position management features are currently available which are the Trailing_stop and Take_profit features. Each feature has different parameters which the bot uses to logically determine when positions would be closed when using that particular feature. In all, both features(Trailing stop and take profit) have the capability of securing profits. It should also be noted that only the trailing stop feature can stop-loss immediately when loss is detected even when trailing hasn’t begun. Unlike trailing stop, take profit feature places a limit order at a profitable price from position entry price which is determined by the spreads for each take profit sides.

You can click the link below on how it works and to know more.

[https://hummingbot.org/strategies/perpetual-market-making/](https://hummingbot.org/strategies/perpetual-market-making/?ref=blog.hummingbot.org)

## Arbitrage

Similar to cross-exchange market making, you will need to hold inventory on two exchanges (a primary and secondary exchange), in order to be able to trade and capture price differentials (i.e. buy low on one exchange, sell high on the other).

Read more in our blog post below.

[https://hummingbot.io/blog/2020-09-what-is-arbitrage/](https://hummingbot.io/blog/2020-09-what-is-arbitrage/?ref=blog.hummingbot.org)

Arbitrage is a taker-taker strategy because it sits around waiting for an opportunity to "take" orders from both exchanges based on the specified min_profitability value.

[https://hummingbot.org/strategies/arbitrage/](https://hummingbot.org/strategies/arbitrage/?ref=blog.hummingbot.org)

## Missing some trades

You will sometimes encounter scenarios where you might "miss" a trade. In our [example](https://www.notion.so/Hummingbot-Strategies-f6be3f0fd69846939edff76ff900ee8c?ref=blog.hummingbot.org) in cross exchange strategy, you may have sold the item but can no longer buy the same one because:

1. Someone else took the order from STORE B and
2. The price went up and is no longer profitable

## Avellaneda market making

[https://hummingbot.io/en/blog/2021-04-avellaneda-stoikov-market-making-strategy/](https://hummingbot.io/en/blog/2021-04-avellaneda-stoikov-market-making-strategy/?ref=blog.hummingbot.org)

This strategy implements a market making strategy described in the classic paper High-frequency Trading in a Limit Order Book  written by Marco Avellaneda and Sasha Stoik

ov. It allows users to directly adjust the risk_factor  (gamma) parameter described in the paper. It also features an order book liquidity estimator calculating the trading intensity parameters (alpha and kappa) automatically. Additionally, the strategy implements an order size adjustment algorithm and its order_amount_shape_factor (eta) parameter as described in Optimal High-Frequency Market Making. The strategy is implemented to be used either in fixed timeframes or to be ran indefinitely.

This strategies dynamically changes the bid and ask spreads based on the market volatility and is great for people who do not have that much time to manage their bots. However, if you are participating in liquidity mining campaigns, it provides less control over the spreads so the rewards earned may be less consistent.

[https://hummingbot.org/strategies/avellaneda-market-making/](https://hummingbot.org/strategies/avellaneda-market-making/?ref=blog.hummingbot.org)

## Celo Arbitrage

The celo_arb strategy is a special case of the normal arbitrage strategy. User can attempt to arbitrage profit between Celo and other exchanges supported by Hummingbot.

[https://hummingbot.org/strategies/celo-arbitrage/](https://hummingbot.org/strategies/celo-arbitrage/?ref=blog.hummingbot.org)

## AMM Arbitrage

The amm_arb strategy is another special case of the normal arbitrage strategy. In which you can arbitrage with Protocol connectors through gateway and a spot connector.

[https://hummingbot.org/strategies/amm-arbitrage/](https://hummingbot.org/strategies/amm-arbitrage/?ref=blog.hummingbot.org)
[https://hummingbot.io/en/blog/2021-01-terra-amm-arbitrage-trade](https://hummingbot.io/en/blog/2021-01-terra-amm-arbitrage-trade?ref=blog.hummingbot.org)

## Spot Perpetual Arbitrage

The Spot Perpetual Arbitrage strategy, arbitrages through a futures connector like Binance Futures and a spot connector. You can also simulate trading here by using binance_perpetual_testnet and paper_trade for spot connectors.

[https://hummingbot.org/strategies/spot-perpetual-arbitrage/](https://hummingbot.org/strategies/spot-perpetual-arbitrage/?ref=blog.hummingbot.org)
[https://hummingbot.io/en/blog/2021-03-spot-perpetual-protocol-guide](https://hummingbot.io/en/blog/2021-03-spot-perpetual-protocol-guide?ref=blog.hummingbot.org)
[https://www.youtube.com/watch?v=hJPmAy-Ellk](https://www.youtube.com/watch?v=hJPmAy-Ellk&ref=blog.hummingbot.org)

## Liquidity Mining Strategy

This strategy's focus is on users who want to do liquidity mining on different pairs, the pairs have to be on the same base or quote. For example FIRO-USDT, AVAX-USDT. It also can adjust the spreads based on the volatility of that certain market.

[https://hummingbot.org/strategies/liquidity-mining/](https://hummingbot.org/strategies/liquidity-mining/?ref=blog.hummingbot.org)
[https://www.youtube.com/watch?v=7LQxaE3NtLA](https://www.youtube.com/watch?v=7LQxaE3NtLA&ref=blog.hummingbot.org)

# The two most common strategies for beginners

The most common strategies for beginners include the following. We will explain each of the strategies in the coming sections.

## [Pure Market Making Strategy](https://hummingbot.org/strategies/pure-market-making/?ref=blog.hummingbot.org)

Pure Market Making Strategy gives you most control over the bot’s certain configurations such as bid and ask spreads and is simple to understand. It is one of the most popular strategies.

## [Cross exchange market making strategy](https://hummingbot.org/strategies/cross-exchange-market-making/?ref=blog.hummingbot.org)

Cross exchange market making strategy is a strategy that we recommend to beginners because it significantly reduces the risk of market making by greatly reducing miners’ [inventory risk](https://hummingbot.io/en/blog/2020-10-inventory-risk?ref=blog.hummingbot.org), giving users more protection when the tokens drop in value significantly.