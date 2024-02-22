Centralized exchange (CEX) connectors integrate into a centralized exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

## CEX Connector Governance

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Each quarter, the [CEX Connector Poll](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which connectors should be included in the codebase going forward.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## CEX Connector Standards

The Notion templates below summarize the file and functionalities needed to build the latest spot and perpetual connectors standards and support V2 Strategies:

* [Spot Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Spot-Connector-v2-1-1cc43830938445c9974f43ef861d59f1): Use this template to build `spot` connectors that conform 
* [Perp Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Perp-Connector-v2-1-57d8391eb54c40929f77067355fd551e): Use this template to build `perp` connectors that conform 

See [Building Connectors](/developers/connectors) for more information.

## List of CEX Connectors

Here are the current CEX connectors in the codebase:

| Exchange | Type | Spot Connector Standard | Perp Connector Standard | V2 Strategies Compatible |
|----------|------|------|------------|-------------|
| [Binance](../exchanges/binance/index.md) | CLOB | v2.1 | v2.1 | Yes
| [Gate.io](../exchanges/gate-io/index.md) | CLOB | v2.1 | v2.1 | Yes
| [Kucoin](../exchanges/kucoin/index.md) | CLOB | v2.1 | v2.1 | Yes
| [HTX](../exchanges/huobi) | CLOB | v2.0 |  | No - market order type not supported
| [AscendEx](../exchanges/ascendex/index.md) | CLOB | v2.0 |  | Yes - spot only
| [OKX](../exchanges/okx) | CLOB | v2.1 |  | Yes - spot only
| [Coinbase](../exchanges/coinbase) | CLOB | v1.0 | | No
| [Kraken](../exchanges/kraken) | CLOB | v1.0 |  | No
| [BTC Markets](../exchanges/btc-markets.md) | CLOB | v2.0 |  | Yes - spot only
| [Phemex](../exchanges/phemex-perpetual) | CLOB |  | v2.0 | Yes - perp only
| [FoxBit](../exchanges/foxbit) | CLOB | v2.0 |  | Yes - spot only
| [HitBTC](../exchanges/hitbtc) | CLOB | v1.0 |  | No
| [Bitfinex](../exchanges/bitfinex.md) | CLOB | v1.0 | | no
| [Bitget](../exchanges/bitget-perpetual.md) | CLOB |  | v2.0 | Yes - perp only
| [Bit.com](../exchanges/bit-com-perpetual.md) | CLOB |  | v2.0 | Yes - perp only
| [MEXC](../exchanges/mexc) | CLOB | v2.0 |  | Yes - spot only |
| [Bybit](../exchanges/bybit) | CLOB | v2.1 | v2.1 | Yes - but API needs update to v5
| [Bitmart](../exchanges/bitmart/index.md) | CLOB | v2.1 |  | Yes - spot only 
| [NDAX](../exchanges/ndax) | CLOB | v1.0 |  | No
