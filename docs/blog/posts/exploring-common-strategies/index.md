---
date: 2022-01-02
authors:
  - foundation
categories:
  - Academy
tags:
  - Market Making Basics
---

# Exploring Common Strategies

![cover](cover.jpg)

In this guide, we will delve into various strategies and configurations you can employ using Hummingbot:

1. **Strategies:**

   Discover the range of strategies available in Hummingbot by visiting the Hummingbot Foundation’s documentation site: [Hummingbot Strategies](../../../strategies/index.md)

2. **Global Configurations:**

   Learn about the global configurations applicable to most strategies: [Global Configurations](../../../global-configs/index.md)

<!-- more -->

## Live vs Paper Trading

For testing strategies, we recommend using small amounts of actual cryptocurrency rather than paper trading. This approach provides a more realistic experience, allowing you to simultaneously observe Hummingbot's performance and exchange interactions. This is crucial for understanding how strategies and configurations function in a live environment. Note that paper trading, acting as a virtual "connector" in our codebase, might present unique errors or issues not encountered in live trading.

## Pure Market Making

The Pure Market Making strategy is highly popular among Hummingbot users. During the Quickstart Guide's initial setup, you'll encounter prompts for basic parameters necessary to run this strategy.

This strategy, which involves placing maker orders in the order book to buy and sell assets at specified prices, is straightforward. However, users who invest time in learning about the parameters, and who periodically adjust their settings, tend to achieve higher profitability than those using default settings.

It's essential to thoroughly understand the advanced parameters, their compatibility, and specific use cases.

For more information, visit: [Strategy Configurations](../../../strategy-configs/index.md) and [Global Configurations](../../../global-configs/index.md)

## Cross-Exchange Market Making

Another available strategy in Hummingbot is Cross-Exchange Market Making. This strategy requires maintaining inventory on two exchanges: one for market making (maker exchange) and another for sourcing and hedging filled orders (taker exchange).

This maker-taker strategy is detailed in the following resources:

- [Cross-Exchange Market Making Blog](../what-is-cross-exchange-market-making/index.md)
- [Cross-Exchange Market Making Strategy](../../../strategies/cross-exchange-market-making.md)

Our video tutorial, although featuring an outdated Hummingbot UI, effectively explains the concept of this strategy: [Hummingbot School: Cross-Exchange Market Making](https://www.youtube.com/embed/jVIagFbQnmo?feature=oembed)

## Perpetual Market Making

Similar to the Pure Market Making strategy, the Perpetual Market Making approach involves Hummingbot continually posting limit bids and asks on a market. This strategy incorporates position management features, like Trailing Stop and Take Profit, to facilitate position handling and remove the need for manual intervention on the derivative exchange.

Each feature has distinct parameters used by the bot to determine position closure timings. Notably, only the Trailing Stop feature can execute a stop-loss immediately upon detecting a loss, even before trailing begins.

Learn more about this strategy: [Perpetual Market Making](../../../strategies/perpetual-market-making.md)

## Avellaneda Market Making

The Avellaneda Market Making strategy, based on the seminal paper by Marco Avellaneda and Sasha Stoikov, allows users to adjust the risk factor (gamma) and incorporates an order book liquidity estimator. This strategy dynamically alters bid and ask spreads based on market volatility, making it suitable for those with limited time for bot management.

While less control over spreads may impact consistency in liquidity mining campaigns, it remains a valuable strategy for many users.

Further details can be found here: [Avellaneda Market Making](../../../strategies/avellaneda-market-making.md)

## AMM Arbitrage

The AMM Arbitrage strategy is a variant of the typical arbitrage strategy, allowing for arbitrage between Protocol connectors (via the gateway) and a spot connector.

Discover more about this strategy: [AMM Arbitrage](../../../strategies/amm-arbitrage.md)

## Spot Perpetual Arbitrage

In the Spot Perpetual Arbitrage strategy, arbitrage occurs between a futures connector (like Binance Futures) and a spot connector. Simulated trading is possible using binance_perpetual_testnet and paper_trade for spot connectors.

Learn more here: [Spot Perpetual Arbitrage](../../../strategies/spot-perpetual-arbitrage.md)

## Liquidity Mining Strategy

This strategy is designed for users interested in liquidity mining across different pairs with the same base or quote (e.g., FIRO-USDT, AVAX-USDT). It also offers the capability to adjust spreads based on market volatility.

More information is available at: 

[Liquidity Mining Strategy](../../../strategies/liquidity-mining.md)

[https://www.youtube.com/watch?v=7LQxaE3NtLA](https://www.youtube.com/watch?v=7LQxaE3NtLA&ref=blog.hummingbot.org)
