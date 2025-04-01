## What are CLOB Connectors?

CLOB (Central Limit Order Book) connectors integrate into a CLOB exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. These connectors work with both centralized exchanges (CEX) and decentralized exchanges (DEX) that utilize a central limit order book model. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

CLOB connectors come in two types:
- **CLOB Spot**: For trading spot markets (direct asset exchange)
- **CLOB Perp**: For trading perpetual futures markets

## CLOB Connector Governance

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Each quarter, the [CLOB Connector Poll](/governance/polls) allocates HBOT bounties toward the top CLOB connectors and determines which connectors should be included in the codebase going forward.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## CLOB Connector Standards

The Notion templates below summarize the file and functionalities needed to build the latest spot and perpetual connectors standards and support V2 Strategies:

* [Spot Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Spot-Connector-v2-1-1cc43830938445c9974f43ef861d59f1): Use this template to build `CLOB spot` connectors that conform 
* [Perp Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Perp-Connector-v2-1-57d8391eb54c40929f77067355fd551e): Use this template to build `CLOB perp` connectors that conform 

See [Building Connectors](/developers/connectors) for more information.

## List of CLOB Connectors

Here are the current CLOB connectors in the codebase:

| Exchange | Spot | Perp | Connector Guide |
|----------|------|------|----------------|
| [AscendEx](../exchanges/ascendex/index.md) | ✓ |  |  |
| [Binance](../exchanges/binance/index.md) | ✓ | ✓ | [Guide](/academy-content/using-binance-with-hummingbot) |
| [BingX](../exchanges/bing_x/index.md) | ✓ |  | |
| [Bitstamp](../exchanges/bitstamp/index.md) | ✓ |  |  |
| [Bitrue](../exchanges/bitrue.md) | ✓ |  |  |
| [Bitget](../exchanges/bitget-perpetual.md) |  | ✓ |  |
| [Bitmart](../exchanges/bitmart/index.md) | ✓ |  |  |
| [Bybit](../exchanges/bybit) | ✓ | ✓ |  |
| [BTC Markets](../exchanges/btc-markets.md) | ✓ |  |  |
| [Coinbase](../exchanges/coinbase) | ✓ |  |  |
| [Cube](../exchanges/cube/index.md) | ✓ |  |  |
| [Derive](../exchanges/derive/index.md) | ✓ | ✓ | [Guide](/blog/running-a-trading-bot-with-hummingbot-on-derive/) |
| [Dexalot](../exchanges/dexalot/index.md) | ✓ | ✓ | [Guide](/blog/using-dexalot-with-hummingbot/) |
| [dYdX](../exchanges/dydx/index.md) | | ✓ | [Guide](/blog/running-a-trading-bot-with-hummingbot-dashboard-on-dydx-v4/) |
| [Gate.io](../exchanges/gate-io/index.md) | ✓ | ✓ |  |
| [Hashkey Global](../exchanges/hashkey/index.md) | ✓ | ✓ |  |
| [HTX](../exchanges/huobi) | ✓ |  |  |
| [Kraken](../exchanges/kraken) | ✓ |  |  |
| [Kucoin](../exchanges/kucoin/index.md) | ✓ | ✓ |  |
| [MEXC](../exchanges/mexc) | ✓ |  |  |
| [NDAX](../exchanges/ndax) | ✓ |  |  |
| [OKX](../exchanges/okx/okx.md) | ✓ |  |  |
| [Tegro](../exchanges/tegro/index.md) | ✓ | ✓ |  |
| [Vertex](../exchanges/vertex.md) | ✓ |  |  |
| [XRPL](../exchanges/xrpl.md) | ✓ |  |  |
