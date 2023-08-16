CEX connectors integrate into a centralized exchange's WebSocket API, enabling standardized order placement/cancellation and order book data fetching from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [CEX Connector Poll](/governance/polls) sorts CEX connectors into **Gold, Silver, and Bronze tiers**, which determines whether they are maintained by the Foundation.

Here are the current CEX connectors in the codebase, as of Q3 2023:

| Exchange | Type | Tier | Maintainer | Signup code |
|----------|------|------|------------|-------------|
| [Binance](./binance) | CLOB | 🥇 Gold | Hummingbot Foundation | [spot](https://www.binance.com/en/register?ref=FQQNNGCD) / [futures](https://www.binance.com/en/futures/ref?code=hummingbot)
| [Kucoin](./kucoin) | CLOB | 🥈 Silver | Hummingbot Foundation | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Gate.io](./gate-io) | CLOB | 🥈 Silver | Hummingbot Foundation | [5868285](https://www.gate.io/signup/5868285)
| [AscendEx](./ascend-ex) | CLOB | 🥈 Silver | Hummingbot Foundation | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| [AltMarkets](./altmarkets) | CLOB | 🥉 Bronze
| [Binance US](./binance-us) | CLOB | 🥉 Bronze
| [Bitfinex](./bitfinex) | CLOB | 🥉 Bronze
| [Bitget](./bitget-perpetual) | CLOB | 🥉 Bronze
| [Bit.com](./bit-com-perpetual) | CLOB | 🥉 Bronze
| [Bitmart](./bitmart) | CLOB | 🥉 Bronze | | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| [Bitmex](./bitmex) | CLOB | 🥉 Bronze
| [Bittrex](./bittrex) | CLOB | 🥉 Bronze
| [BTC Markets](./btc-markets) | CLOB | 🥉 Bronze
| [Bybit](./bybit) | CLOB | 🥉 Bronze
| [Coinbase](./coinbase) | CLOB | 🥉 Bronze
| [HitBTC](./hitbtc) | CLOB | 🥉 Bronze
| [Hotbit](./hotbit) | CLOB | 🥉 Bronze
| [Huobi](./huobi) | CLOB | 🥉 Bronze | | [en9k2223](https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=25530615&invite_code=en9k2223)
| [Kraken](./kraken) | CLOB | 🥉 Bronze
| [MEXC](./mexc) | CLOB | 🥉 Bronze
| [NDAX](./ndax) | CLOB | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [OKX](./okx) | CLOB | 🥉 Bronze | | [1931920](https://www.okx.com/join/1931920)
| [Phemex](./phemex-perpetual) | CLOB | 🥉 Bronze |
