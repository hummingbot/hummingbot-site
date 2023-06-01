## Exchange Types

Hummingbot connectors standardize trading logic and order types across different exchange types. All code related to each connector is housed in a folder located in the Hummingbot codebase.

We classify connectors using the following labels:

* **SPOT**: An exchange that trades spot markets
* **PERP**: An exchange that trades perpetual swap markets
* **CEX**: A centralized exchange that takes custody of user assets
* **DEX**: A decentralized exchange in which user assets are stored non-custodially in smart contracts
* **CLOB**: An exchange that uses a Central Limit Order Book to match makers and takers
* **AMM**: A DEX that uses Automatic Market Maker (AMM) smart contracts, popularized by Uniswap-V2
* **AMM-RANGE**: A DEX that uses Automatic Market Maker (AMM) smart contracts that let liquidity providers specify a range, popularized by Uniswap-V3

## Connector Maintenance

Exchange connectors may have a maintainer who is responsible for ongoing maintenance: fixing bugs, addressing user issues, and keeping up with exchange API and Hummingbot connector standard updates. Specifically, maintainer responsibilities include:

* Addressing user Github issues and pull requests related to the connector
* Keeping the connector updated for changes to the exchange API and Hummingbot connector standard for that exchange type
* Keeping the connector's documentation page updated

Hummingbot Foundation is the maintainer for the Gold and Silver exchange connectors, while community members may maintain other connectors. For instance, [CoinAlpha](https://coinalpha.com) maintains a number of Bronze connectors in the codebase. Individual developers and exchanges may register with us to be assigned the maintainer role for other Bronze connectors.

## Connector Tiers

Quarterly [Polls](/governance/polls) allow the Hummingbot community to vote using HBOT tokens to rank the exchanges in the codebase. This decides which connectors should be included going forward, and how they are maintained:

### Gold

![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)

The two Gold exchanges are the top CEX and DEX selected by HBOT voters in the latest Poll. Their connectors are maintained by Hummingbot Foundation and are continually improved, serving as the "gold standard" template for all other connectors of that type.

| Exchange | Type | Maintainer | Signup code |
|----------|------|------------|-------------|
| [Binance](./binance) | SPOT CLOB CEX | Hummingbot Foundation | [FQQNNGCD](https://www.binance.com/en/register?ref=FQQNNGCD)
| [Binance (perp)](./binance-perpetual) | PERP CLOB CEX |  Hummingbot Foundation | [hummingbot](https://www.binance.com/en/futures/ref?code=hummingbot)
| [Uniswap](./uniswap) | SPOT AMM-RANGE DEX | Hummingbot Foundation |

### Silver

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

| Exchange | Type | Maintainer | Signup code |
|----------|------|------------|-------------|
| [Kucoin](./kucoin) | SPOT CLOB CEX | Hummingbot Foundation | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Kucoin (perp)](./kucoin-perpetual) | PERP CLOB CEX | Hummingbot Foundation | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Gate.io](./gate-io) | SPOT CLOB CEX | Hummingbot Foundation | [5868285](https://www.gate.io/signup/5868285)
| [Gate.io (perp)](./gate-io-perpetual) | PERP CLOB CEX | Hummingbot Foundation | [5868285](https://www.gate.io/signup/5868285)
| [AscendEx](./ascend-ex) | SPOT CLOB CEX | Hummingbot Foundation | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| [Quickswap](./quickswap) | SPOT AMM DEX | Hummingbot Foundation | 
| [TraderJoe](./traderjoe) | SPOT AMM DEX | Hummingbot Foundation | [CoinAlpha](https://coinalpha.com) | 
| [dYdX](./dydx-perpetual) | PERP CLOB DEX | Hummingbot Foundation | 

### Bronze

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

| Exchange | Type | Maintainer | Signup code |
|----------|------|------------|-------------|
| [AltMarkets](./altmarkets) | SPOT CLOB CEX |
| [BTC-Markets](./btc-markets) | SPOT CLOB CEX |
| [Binance US](./binance-us) | SPOT CLOB CEX |
| [BitGet](./bitget-perpetual) | PERP CLOB CEX | [CoinAlpha](https://coinalpha.com) | 
| [Bit.com](./bit-com-perpetual) | PERP CLOB CEX |
| [Bitmart](./bitmart) | SPOT CLOB CEX | [CoinAlpha](https://coinalpha.com) | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| [Bitfinex](./bitfinex) | SPOT CLOB CEX |
| [Bitmex](./bitmex) | SPOT CLOB CEX |
| [Bitmex (perp)](./bitmex-perpetual) | PERP CLOB CEX |
| [Bittrex](./bittrex) | SPOT CLOB CEX |
| [Bybit](./bybit) | SPOT CLOB CEX |
| [Bybit (perp)](./bybit) | PERP CLOB CEX |
| [Coinbase](./coinbase) | SPOT CLOB CEX |
| [Crypto.com](./crypto-com) | SPOT CLOB CEX |
| [DeFi Kingdoms](./defikingdoms) | SPOT AMM DEX |
| [Defira](./defira) | SPOT AMM DEX |
| [Dexalot](./dexalot) | SPOT CLOB DEX | [CoinAlpha](https://coinalpha.com) |
| [Foxbit](./foxbit) | SPOT CLOB CEX |
| [HitBTC](./hitbtc) | SPOT CLOB CEX |
| [Hotbit](./hotbit) | SPOT CLOB CEX |
| [Huobi](./huobi) | SPOT CLOB CEX | | [en9k2223](https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=25530615&invite_code=en9k2223)
| [Injective](./injective) | SPOT CLOB DEX |
| [Injective (perp)](./injective-perpetual) | PERP CLOB DEX |
| [Kraken](./kraken) | SPOT CLOB CEX |
| [LBank](./lbank) | SPOT CLOB DEX |
| [Loopring](./loopring) | SPOT CLOB DEX |
| [MEXC](./mexc) | SPOT CLOB CEX |
| [Mad Meerkat](./mad-meerkat) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [NDAX](./ndax) | SPOT CLOB DEX | [CoinAlpha](https://coinalpha.com) | 
| [OKX](./okx) | SPOT CLOB CEX | | [1931920](https://www.okx.com/join/1931920)
| [OpenOcean](./openocean) | SPOT AMM DEX |
| [Pancakeswap](./pancakeswap) | SPOT AMM DEX |
| [Pangolin](./pangolin) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [Perpetual Protocol](./perp) | PERP AMM DEX |
| [Phemex Perpetual](./phemex-perpetual) | PERP CLOB CEX | [CoinAlpha](https://coinalpha.com) | 
| [ProBit](./probit) | SPOT CLOB CEX |
| [Ref Finance](./ref) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [Sushiswap](./sushiswap) | SPOT AMM DEX |
| [Tinyman](./tinyman) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [VVS Finance](./vvs) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [WhiteBit](./whitebit) | SPOT CLOB CEX |
| [XSwap](./xswap) | SPOT AMM DEX | [CoinAlpha](https://coinalpha.com) | 
| [ZigZag](./zigzag) | SPOT AMM DEX |



## Contributing Connectors

Developers may submit connectors as pull requests. See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
