A Strategy is a template for an algorithmic trading strategy that users can configure, extend, and run. The trading strategy itself is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions.

Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each Hummingbot strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

## Maintainer

The maintainer for a strategy is responsible for responding to user-submitted Github issues, keeping the strategy updated and well-documented, and may even push improvements. Hummingbot Foundation is the maintainer for the three (3) Core Strategies, which are selected by the community through quarterly [Polls](/governance/polls). 

Community Strategies may be maintained by individual community members or not maintained at all. Community members interested in becoming the maintainer for unmaintained strategies should contact Hummingbot Foundation via Discord.

## Core Strategies

  | Name                                                          | Valid Exchanges     | Maintainer    | Description                                                                       |
|-----------------------------------------------------------------|---------------------|---------------|-----------------------------------------------------------------------------------|
| [`pure_market_making`](./pure-market-making)                    | `spot`              | Hummingbot Foundation | Our original single-pair market making strategy                                  |
| [`cross_exchange_market_making`](./cross-exchange-market-making)| `spot`              | Hummingbot Foundation | Provide liquidity while hedging filled orders on another exchange                |
| [`amm_arb`](./amm-arbitrage)                                    | `spot`, `amm`       | Hummingbot Foundation | Exploits price differences between AMM and spot exchanges                                 |

## Community Strategies

  | Name                                                          | Valid Exchanges     | Maintainer    | Description                                                                       |
|-----------------------------------------------------------------|---------------------|---------------|-----------------------------------------------------------------------------------|
| [`avellaneda_market_making`](./avellaneda-market-making)        | `spot`              | None          | Single-pair market making strategy based on the classic Avellaneda-Stoikov paper  |
| [`aroon_oscillator`](./aroon-oscillator)                        | `spot`              | None          | Modified version of Pure Market Making that uses Aroon technical indicator |
| [`cross_exchange_mining`](./cross-exchange-mining)              | `spot`              | [bsmeaton](https://github.com/bsmeaton)      | Community-maintained mod of Cross Exchange Market Making strategy                |
| [`hedge`](./hedge)                                              | `perp`              | [leastchaos](https://github.com/leastchaos) | Hedges spot exchange inventory risk using perpetual swaps |
| [`liquidity_mining`](./liquidity-mining)                        | `spot`              | None          | Provide liquidity on multiple pairs using a single base or quote token            |
| [`perpetual_market_making`](./perpetual-market-making)          | `perp`              | None          | Market-making strategy for perpetual swap markets                                 |
| [`spot_perpetual_arbitrage`](./spot-perpetual-arbitrage)        | `spot`, `perp`      | None          | Exploits price differences between spot and perpetual swap exchanges                      |
| [`twap`](./twap)                                                | `spot`              | None          | Places a batch of limit orders over a period of time                                      |

## Contributing Strategies

We encourage users to create and extend Strategy templates for their own purposes, and if they so desire, share them with the community.

Developers may submit strategies for review. Please note the [Contribution Guidelines](/developers/contributions/). For developers interested to create or customize their own strategies, please see [Strategies](/developers/strategies) in the Developers section.

## More Resources

* :fontawesome-brands-youtube: [What is Market Making? Interview with Hummingbot CEO Michael Feng](https://www.youtube.com/watch?v=HfHaQS-nWHw)
* :fontawesome-solid-book: [HBOT 101 : What Is Market Making?](https://blog.hummingbot.org/2020-09-what-is-market-making/)
* :fontawesome-solid-book: [Beginner’s Top misconceptions on market making](https://blog.hummingbot.org/2022-03-02-beginners-top-misconceptions/)
* :fontawesome-brands-youtube: [Trader Sharing: Pure Market Making with cgambit](https://www.youtube.com/watch?v=3RKMlCWzRhw)
* :fontawesome-brands-youtube: [How to Spot Market Making and Arbitrage opportunities?](https://www.youtube.com/watch?v=szAm_2ssXCU)
* :fontawesome-solid-book: [Strategy coding for dummies](https://blog.hummingbot.org/2022-03-26-strategy-coding-for-dummies/): This article is a blog post submission from our of our users. It is not directly related to TWAP strategy, but it demos how you can write a custom script for cross exchange market making strategy
* :fontawesome-brands-youtube: [Create a Custom Strategy | Hummingbot Live](https://www.youtube.com/watch?v=td-E3M0qRsA&list=PLDwlNkL_4MMfdo3Vax5HUwvaduSu33-Mk): Learn about creating custom strategies with Paulo. Hummingbot lets you customize your strategies by configuring your bots to optimize its maximum potential in liquidity providing.
