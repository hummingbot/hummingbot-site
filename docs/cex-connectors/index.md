CEX connectors integrate into a centralized exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [CEX Connector Poll](/governance/polls) sorts CEX connectors into **Gold, Silver, and Bronze tiers**, which determines whether they are maintained by the Foundation.

Here are the current CEX connectors in the codebase, as of Q3 2023:

| Exchange | Type | Spot Connector version | Perp Connector version | V2 Strategies Compatible |
|----------|------|------|------------|-------------|
| [Binance](../exchanges/binance/index.md) | CLOB | v2.1 | v2.1 | Yes
| [Gate.io](../exchanges/gate-io/index.md) | CLOB | v2.1 | v2.1 | Yes
| [Kucoin](../exchanges/kucoin/index.md) | CLOB | v2.1 | v2.1 | Yes
| [Huobi](../exchanges/huobi) | CLOB | v2.0 |  | No - market order type not supported
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
| [Bitmex](../exchanges/bitmex.md) | CLOB | v1.0 | v1.0 | No
| [Bit.com](../exchanges/bit-com-perpetual.md) | CLOB |  | v2.0 | Yes - perp only
| [MEXC](../exchanges/mexc) | CLOB | v2.0 |  | Yes - spot only |
| [Bybit](../exchanges/bybit) | CLOB | v2.1 | v2.1 | Yes - but API needs update to v5
| [Bitmart](../exchanges/bitmart/index.md) | CLOB | v2.1 |  | Yes - spot only 
| [NDAX](../exchanges/ndax) | CLOB | v1.0 |  | No
| [Woo X](../exchanges/woo-x.md) | CLOB | v2.0 |  | Yes - spot only






