!!! note
    Since the Foundation is focused on building out the [Strategy V2](../v2-strategies/index.md) framework which offers greater customization and extensibility, we are no longer actively maintaining the V1 strategy templates below.

## What are V1 Strategies?

V1 Strategies are templates for an algorithmic trading strategy that users can configure, extend, and run. The trading strategy itself is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions.

Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each V1 strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

## List of V1 Strategies

These strategies are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

| Strategy                                                      | Description |
|---------------------------------------------------------------|-------------|
| [pure_market_making](../v1-strategies/pure-market-making.md)                    | Hummingbot's original single-pair market making strategy |
| [cross_exchange_market_making](../v1-strategies/cross-exchange-market-making.md)| Market making strategy that mitigates inventory risk by hedging on another exchange |
| [amm_arb](../v1-strategies/amm-arbitrage.md)                                    | Arbitrage strategy that exploits price differences between AMM DEXs and other exchanges |
| [avellaneda_market_making](../v1-strategies/avellaneda-market-making.md)        | Single-pair market making strategy based on the classic Avellaneda-Stoikov paper  |
| [cross_exchange_mining](../v1-strategies/cross-exchange-mining.md)              | Community-maintained mod of Cross Exchange Market Making strategy |
| [hedge](../v1-strategies/hedge.md)                                              | Hedges spot exchange inventory risk using perpetual swaps |
| [liquidity_mining](../v1-strategies/liquidity-mining.md)                        | Provide liquidity on multiple pairs using a single base or quote token |
| [perpetual_market_making](../v1-strategies/perpetual-market-making.md)          | Community| Market-making strategy for perpetual swap markets |
| [spot_perpetual_arbitrage](../v1-strategies/spot-perpetual-arbitrage.md)        | Exploits price differences between spot and perpetual swap exchanges |
| [twap](../v1-strategies/twap.md)                                                | Places a batch of limit orders over a period of time |


## Contributing Strategies

We encourage users to create and extend strategies for their own purposes, and if they so desire, share them with the community.

Developers may submit strategies for review. Please note the [Contribution Guidelines](../../community/contributions.md). For developers interested to create or customize their own strategies, please see [Building V2 Strategies](../v2-strategies/walkthrough.md).
