CEX connectors integrate into a centralized exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [CEX Connector Poll](/governance/polls) sorts CEX connectors into **Gold, Silver, and Bronze tiers**, which determines whether they are maintained by the Foundation.

Here are the current CEX connectors in the codebase, as of Q3 2023:

| Exchange | Type | Tier | Maintainer | Signup code |
|----------|------|------|------------|-------------|
| [Binance](../exchanges/binance/index.md) | CLOB | 🥇 Gold | Hummingbot Foundation | [spot](https://www.binance.com/en/register?ref=FQQNNGCD) / [futures](https://www.binance.com/en/futures/ref?code=hummingbot)
| [Kucoin](../exchanges/kucoin/index.md) | CLOB | 🥈 Silver | Hummingbot Foundation | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Gate.io](../exchanges/gate-io/index.md) | CLOB | 🥈 Silver | Hummingbot Foundation | [5868285](https://www.gate.io/signup/5868285)
| [AscendEx](../exchanges/ascendex/index.md) | CLOB | 🥈 Silver | Hummingbot Foundation | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| [AltMarkets](../exchanges/altmarkets.md) | CLOB | 🥉 Bronze
| [Binance US](../exchanges/binance-us/index.md) | CLOB | 🥉 Bronze
| [Bitfinex](../exchanges/bitfinex.md) | CLOB | 🥉 Bronze
| [Bitget](../exchanges/bitget-perpetual.md) | CLOB | 🥉 Bronze
| [Bit.com](../exchanges/bit-com-perpetual.md) | CLOB | 🥉 Bronze
| [Bitmart](../exchanges/bitmart/index.md) | CLOB | 🥉 Bronze | | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| [Bitmex](../exchanges/bitmex.md) | CLOB | 🥉 Bronze
| [Bittrex](../exchanges/bittrex.md) | CLOB | 🥉 Bronze
| [BTC Markets](../exchanges/btc-markets.md) | CLOB | 🥉 Bronze
| [Bybit](../exchanges/bybit) | CLOB | 🥉 Bronze
| [Coinbase](../exchanges/coinbase) | CLOB | 🥉 Bronze
| [HitBTC](../exchanges/hitbtc) | CLOB | 🥉 Bronze
| [Hotbit](../exchanges/hotbit) | CLOB | 🥉 Bronze
| [Huobi](../exchanges/huobi) | CLOB | 🥉 Bronze | | [en9k2223](https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=25530615&invite_code=en9k2223)
| [Kraken](../exchanges/kraken) | CLOB | 🥉 Bronze
| [MEXC](../exchanges/mexc) | CLOB | 🥉 Bronze
| [NDAX](../exchanges/ndax) | CLOB | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [OKX](../exchanges/okx) | CLOB | 🥉 Bronze | | [1931920](https://www.okx.com/join/1931920)
| [Phemex](../exchanges/phemex-perpetual) | CLOB | 🥉 Bronze |

