V1 strategies are templates for an algorithmic trading strategy that users can configure, extend, and run. The trading strategy itself is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions.

Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each V1 strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

## List of V1 Strategies

Strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

| Strategy                                                      | Type | Description |
|---------------------------------------------------------------|------|-------------|
| [pure_market_making](../strategies/pure-market-making.md)                    | Core | Hummingbot's original single-pair market making strategy |
| [cross_exchange_market_making](../strategies/cross-exchange-market-making)| Core | Market making strategy that mitigates inventory risk by hedging on another exchange |
| [amm_arb](../strategies/amm-arbitrage)                                    | Core | Arbitrage strategy that exploits price differences between AMM DEXs and other exchanges |
| [avellaneda_market_making](../strategies/avellaneda-market-making)        | Community| Single-pair market making strategy based on the classic Avellaneda-Stoikov paper  |
| [cross_exchange_mining](../strategies/cross-exchange-mining)              | Community | Community-maintained mod of Cross Exchange Market Making strategy |
| [hedge](../strategies/hedge)                                              | Community | Hedges spot exchange inventory risk using perpetual swaps |
| [liquidity_mining](../strategies/liquidity-mining)                        | Community | Provide liquidity on multiple pairs using a single base or quote token |
| [perpetual_market_making](../strategies/perpetual-market-making)          | Community| Market-making strategy for perpetual swap markets |
| [spot_perpetual_arbitrage](../strategies/spot-perpetual-arbitrage)        | Community | Exploits price differences between spot and perpetual swap exchanges |
| [twap](../strategies/twap)                                                | Community | Places a batch of limit orders over a period of time |
| [uniswap-v3-lp](../strategies/uniswap-v3-lp)                              | Community | Dynamically maintains a ranged liquidity position in a Uniswap V3-style AMM DEX |

## Core vs Community Strategies

Core strategies are used by Hummingbot Foundation for monitoring and on-going testing of connectors. Foundation staff focuses on testing these strategies and rewards users who answer questions related to these strategies on Discord.

Community strategies are included in the codebase as a reference for users. They are not maintained by Hummingbot Foundation and community members may propose changes and fixes via pull requests.

## Contributing Strategies

We encourage users to create and extend strategies for their own purposes, and if they so desire, share them with the community.

Developers may submit strategies for review. Please note the [Contribution Guidelines](../developers/contributions.md). For developers interested to create or customize their own strategies, please see [Building V1 Strategies](../developers/strategies/index.md).
