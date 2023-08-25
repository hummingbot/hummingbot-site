V1 strategies are templates for an algorithmic trading strategy that users can configure, extend, and run. The trading strategy itself is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions.

Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each Hummingbot strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

## List of V1 Strategies

Strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

| Strategy                                                          | Type    | Description                                                                       |
|-----------------------------------------------------------------|---------------------|---------------|
| [pure_market_making](./pure-market-making)                    | Core | Our original single-pair market making strategy                                  |
| [cross_exchange_market_making](./cross-exchange-market-making)| Core | Provide liquidity while hedging filled orders on another exchange                |
| [amm_arb](./amm-arbitrage)                                    | Core | Exploits price differences between AMM and spot exchanges                                 |
| [avellaneda_market_making](./avellaneda-market-making)        | Community| Single-pair market making strategy based on the classic Avellaneda-Stoikov paper  |
| [aroon_oscillator](./aroon-oscillator)                        | Community | Modified version of Pure Market Making that uses Aroon technical indicator |
| [cross_exchange_mining](./cross-exchange-mining)              | Community | Community-maintained mod of Cross Exchange Market Making strategy                |
| [hedge](./hedge)                                              | Community | Hedges spot exchange inventory risk using perpetual swaps |
| [liquidity_mining](./liquidity-mining)                        | Community | Provide liquidity on multiple pairs using a single base or quote token            |
| [perpetual_market_making](./perpetual-market-making)          | Community| Market-making strategy for perpetual swap markets                                 |
| [spot_perpetual_arbitrage](./spot-perpetual-arbitrage)        | Community | Exploits price differences between spot and perpetual swap exchanges                      |
| [twap](./twap)                                                | Community | Places a batch of limit orders over a period of time                                      |

## Core vs Community Strategies

Core strategies are used by Hummingbot Foundation for monitoring and on-going testing of connectors. Foundation staff focuses on testing these strategies and rewards users who answer questions related to these strategies on Discord.

Community strategies are included in the codebase as a reference for users. They are not maintained by Hummingbot Foundation and community members may propose changes and fixes via pull requests.

## Contributing Strategies

We encourage users to create and extend strategies for their own purposes, and if they so desire, share them with the community.

Developers may submit strategies for review. Please note the [Contribution Guidelines](/developers/contributions/). For developers interested to create or customize their own strategies, please see [Building V1 Strategies](/developers/strategies).
