CLOB (Central Limit Order Book) connectors integrate into a CLOB exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. These connectors work with both centralized exchanges (CEX) and decentralized exchanges (DEX) that utilize a central limit order book model. 

Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

### CLOB Connector Types

Currently, Hummingbot supports two CLOB connector standards, each which define how the code encapsulated in a connector folder should offer standardized API endpoints and hook into the Hummingbot client.

* **CLOB Spot**: WebSocket-based connectors to an exchange's spot order book-based markets. Each connector is a folder in the [`hummingbot/connector/exchange`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange) folder.

* **CLOB Perp**: WebSocket-based connectors to an exchange's perpetual futures order book-based markets. Each connector is a folder in the [`hummingbot/connector/derivative`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative) folder. By convention, these connector names end in `_perpetual`.

These connector standards allow users to create [Strategies](../strategies/index.md) and [Scripts](../strategies/scripts/index.md) that can operate on different spot and perpetual markets without modification.

### Current CLOB Connectors

Here are the CLOB connectors in the codebase for the current [Epoch](../about/epochs.md). Note that the Foundation prioritizes fixes for connectors from exchanges that are [sponsors or partners](../about/sponsors.md), so they tend to be more reliable and better maintained.

| Exchange                                | Foundation Partner | Spot | Perp | Connector Guide |
|-----------------------------------------|-------------------|------|------|----------------|
| [Binance](../exchanges/binance/index.md)           | ✓ | ✓ | ✓ | [Guide](../blog/posts/using-binance-with-hummingbot/index.md) |
| [Bitmart](../exchanges/bitmart/index.md)           | ✓ | ✓ | ✓ |  |
| [Derive](../exchanges/derive/index.md)             | ✓ | ✓ | ✓ | [Guide](../blog/posts/using-derive-with-hummingbot/index.md) |
| [dYdX](../exchanges/dydx.md)                 | ✓ | | ✓ | [Guide](../blog/posts/dydx-v4-connector/index.md) |
| [Gate.io](../exchanges/gate-io/index.md)           | ✓ | ✓ | ✓ |  |
| [HTX](../exchanges/htx/index.md)                 | ✓ | ✓ |  |  |
| [Kucoin](../exchanges/kucoin/index.md)             | ✓ | ✓ | ✓ |  |
| [OKX](../exchanges/okx/index.md)                   | ✓ | ✓ | ✓ |  |
| [XRPL](../exchanges/xrpl.md)                       | ✓ | ✓ |  | [Guide](../blog/posts/using-xrpl-with-hummingbot/index.md) |
| [AscendEx](../exchanges/ascendex/index.md)         |  | ✓ |  |  |
| [BingX](../exchanges/bing_x/index.md)              | | ✓ |  | |
| [Bitstamp](../exchanges/bitstamp/index.md)         |  | ✓ |  |  |
| [Bitrue](../exchanges/bitrue.md)                   |  | ✓ |  |  |
| [Bitget](../exchanges/bitget/index.md)         | ✓ | ✓ | ✓ |  |
| [Bybit](../exchanges/bybit.md)                     | | ✓ | ✓ |  |
| [BTC Markets](../exchanges/btc-markets.md)         |  | ✓ |  |  |
| [Coinbase](../exchanges/coinbase.md)               |  | ✓ |  |  |
| [Cube](../exchanges/cube/index.md)                 | | ✓ |  |  |
| [Dexalot](../exchanges/dexalot.md)           | | ✓ | ✓ | [Guide](../blog/posts/using-dexalot-with-hummingbot/index.md) |
| [Kraken](../exchanges/kraken/index.md)             |  | ✓ |  |  |
| [MEXC](../exchanges/mexc/index.md)                 |  | ✓ |  |  |
| [NDAX](../exchanges/ndax.md)                       |  | ✓ |  |  |
| [Vertex](../exchanges/vertex.md)                   | | ✓ |  |  |
| [Foxbit](../exchanges/foxbit/index.md) | | ✓ |  |  |

### Building CLOB Connectors

The Notion templates below summarize the file and functionalities needed to build the latest spot and perpetual connectors standards and support V2 Strategies:

* [Spot Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Spot-Connector-v2-1-1cc43830938445c9974f43ef861d59f1): Use this template to build `CLOB spot` connectors that conform 
* [Perp Connector v2.1 Notion Template](https://hummingbot-foundation.notion.site/Perp-Connector-v2-1-57d8391eb54c40929f77067355fd551e): Use this template to build `CLOB perp` connectors that conform 

See [Building Connectors](../connectors/connectors/build.md) for more information.

If the exchange is not yet supported by Hummingbot, you can submit a governance proposal for it to be included. New connectors may be contributed by community members via [New Connector Proposals](../about/proposals.md), which require a pull request with the connector code to the Hummingbot Github repo, along with a minimum HBOT balance to create.
