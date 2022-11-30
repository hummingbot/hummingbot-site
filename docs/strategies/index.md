A Hummingbot strategy is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions. Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each Hummingbot strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

## Strategy types

Hummingbot offers the following automated trading strategies, each with its own set of configurable parameters.

* **Market making**: strategies that provide liquidity to a market
* **Arbitrage**: strategies that exploit differences between markets
* **Utility**: other strategies

## Maintainer

Strategy maintainers are responsible for responding to community feedback, fixing bugs, and actively improving the strategy over time.

As the creator of Hummingbot, CoinAlpha maintains for most strategies, particularly the market making strategies. As the number of strategies grows, however, CoinAlpha will enable other community members to contribute and maintain strategies.

## Customizing strategies

These strategies are meant to be basic templates. We encourage users to extend these templates for their own purposes, and if they so desire, share them with the community.

Developers may submit strategies for review. Please note the [Contribution Guidelines](/developers/contributions/). For developers interested to create or customize their own strategies, please see [Strategies](/developers/strategies) in the Developers section.

## List of strategies

### Market making

Market making strategies help you provide liquidity to an exchange while mitigating risk by dynamically repositioning and/or hedging your orders.

  | Name                                                          | Valid Exchanges     | Maintainer    | Description                                                                       |
|-----------------------------------------------------------------|---------------------|---------------|-----------------------------------------------------------------------------------|
| [`avellaneda_market_making`](./avellaneda-market-making)        | `spot`              | CoinAlpha     | Single-pair market making strategy based on the classic Avellaneda-Stoikov paper  |
| [`aroon_oscillator`](./aroon-oscillator)                        | `spot`              |               | Modified version of Pure Market Making that uses Aroon technical indicator (Open DeFi hackathon winner) |
| [`cross_exchange_market_making`](./cross-exchange-market-making)| `spot`              | CoinAlpha     | Provide liquidity while hedging filled orders on another exchange                |
| [`cross_exchange_mining`](./cross-exchange-mining)              | `spot`              | bsmeaton      | Community-maintained mod of Cross Exchange Market Making strategy                |
| [`liquidity_mining`](./liquidity-mining)                        | `spot`              | CoinAlpha     | Provide liquidity on multiple pairs using a single base or quote token            |
| [`perpetual_market_making`](./perpetual-market-making)          | `perp`              | CoinAlpha     | Market-making strategy for perpetual swap markets                                 |
| [`pure_market_making`](./pure-market-making)                    | `spot`              | CoinAlpha      | Our original single-pair market making strategy                                  |

## Useful Links

:fontawesome-brands-youtube: [What is Market Making? Interview with Hummingbot CEO Michael Feng](https://www.youtube.com/watch?v=HfHaQS-nWHw)
:fontawesome-brands-youtube: [Trader Sharing: Pure Market Making with cgambit](https://www.youtube.com/watch?v=3RKMlCWzRhw)
* [HBOT 101 : What Is Market Making?](https://blog.hummingbot.org/2020-09-what-is-market-making/)
* [Basic concepts of Crypto Trading](https://hummingbot.io/academy/basic-concepts-of-crypto-trading/#market-makers-and-market-takers)
* [How does Market Making work?](https://hummingbot.org/news/market-making/)
* [Beginner’s Top misconceptions on market making](https://blog.hummingbot.org/2022-03-02-beginners-top-misconceptions/)
* [Common hallmarks of successful miners](https://blog.hummingbot.org/2022-03-04-common-hallmarks-of-successful-miners/)

### Arbitrage

Arbitrage strategies help you monitor different markets for opportunities to realize an arbitrage profit and capture them when they arise.

| Name                                                            | Valid Exchanges     | Maintainer    | Description                                                                               |
|-----------------------------------------------------------------|---------------------|---------------|-------------------------------------------------------------------------------------------|
| [`amm_arb`](./amm-arbitrage)                                    | `spot`, `amm`       | CoinAlpha     | Exploits price differences between AMM and spot exchanges                                 |
| [`arbitrage`](./arbitrage)                                      | `spot`              |               | Exploits price differences between two different spot exchanges                           |
| [`spot_perpetual_arbitrage`](./spot-perpetual-arbitrage)        | `spot`, `perp`      | CoinAlpha     | Exploits price differences between spot and perpetual swap exchanges                      |

Arbitrage is the buying and selling of an asset in order to benefit from a difference in the price of the asset between markets. To explore arbitration further, here are a few helpful links.

## Useful Links

* [What is Arbitrage?](https://blog.hummingbot.org/2020-09-what-is-arbitrage/)
* [Introducing the new Balancer connector and arbitrage strategy!](https://blog.hummingbot.org/2020-11-balancer-arbitrage/)
:fontawesome-brands-youtube: [How to Spot Market Making and Arbitrage opportunities?](https://www.youtube.com/watch?v=szAm_2ssXCU)

### Utility

| Name                                                            | Valid Exchanges     | Maintainer    | Description                                                                               |
|-----------------------------------------------------------------|---------------------|---------------|-------------------------------------------------------------------------------------------|
| [`fixed grid`](./fixed-grid)                                    | `spot`              |               | Place orders above and below a set price (dev grant proposal under HGP-4)      |
| [`hedge`](./hedge)                                              | `perp`              |               | Hedges spot exchange inventory risk using perpetual swaps (dYdX hackathon winner)         |
| [`twap`](./twap)                                                | `spot`              |               | Places a batch of limit orders over a period of time                                      |

## ℹ️ More Resources

:fontawesome-solid-book: [Strategy coding for dummies](https://blog.hummingbot.org/2022-03-26-strategy-coding-for-dummies/): This article is a blog post submission from our of our users. It is not directly related to TWAP strategy, but it demos how you can write a custom script for cross exchange market making strategy

:fontawesome-brands-youtube: [Create a Custom Strategy | Hummingbot Live](https://www.youtube.com/watch?v=td-E3M0qRsA&list=PLDwlNkL_4MMfdo3Vax5HUwvaduSu33-Mk): Learn about creating custom strategies with Paulo. Hummingbot lets you customize your strategies by configuring your bots to optimize its maximum potential in liquidity providing.

*Check out [Hummingbot Academy](https://hummingbot.io/academy) for more resources related to this strategy and others!*
