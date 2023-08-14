## What are Connectors?

Hummingbot connectors standardize trading logic and order types across different types of exchanges and blockchain networks. Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases. We classify connectors using the following categories:

### Exchange Type

* **CEX**: A centralized exchange that takes custody of user assets
* **DEX**: A decentralized exchange in which user assets are stored non-custodially in smart contracts

### Market Type

* **CLOB**: An exchange that uses a Central Limit Order Book (CLOB) model to match makers and takers
* **AMM**: An exchange that uses Automatic Market Maker (AMM) model to match makers and takers, popularized by Uniswap

### Connector Type

* **Spot**: Connector to an exchange's spot markets
* **Perp**: Connector to an exchange's perpetual swap markets

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
| [Binance](./binance) | CEX-CLOB | Hummingbot Foundation | [Spot Referral Link](https://www.binance.com/en/register?ref=FQQNNGCD) | [Futures Referral Link](https://www.binance.com/en/futures/ref?code=hummingbot)
| [Uniswap](./uniswap) | DEX-AMM | Hummingbot Foundation |

### Silver

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

| Exchange | Type | Maintainer | Signup code |
|----------|------|------------|-------------|
| [Kucoin](./kucoin) | CEX-CLOB | Hummingbot Foundation | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Gate.io](./gate-io) | CEX-CLOB | Hummingbot Foundation | [5868285](https://www.gate.io/signup/5868285)
| [AscendEx](./ascend-ex) | CEX-CLOB | Hummingbot Foundation | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| [dYdX](./dydx) | DEX-CLOB | Hummingbot Foundation |
| [Pancakeswap](./pancakeswap) | DEX-AMM | Hummingbot Foundation |
| [Dexalot](./dexalot) | DEX-CLOB | Hummingbot Foundation |

### Bronze

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

| Exchange | Type | Maintainer | Signup code |
|----------|------|------------|-------------|
| [AltMarkets](./altmarkets) | CEX-CLOB |
| [BTC-Markets](./btc-markets) | CEX-CLOB |
| [Binance US](./binance-us) | CEX-CLOB |
| [BitGet](./bitget-perpetual) | CEX-CLOB | [CoinAlpha](https://coinalpha.com) | 
| [Bit.com](./bit-com-perpetual) | CEX-CLOB |
| [Bitmart](./bitmart) | CEX-CLOB | [CoinAlpha](https://coinalpha.com) | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| [Bitfinex](./bitfinex) | CEX-CLOB |
| [Bitmex](./bitmex) | CEX-CLOB |
| [Bittrex](./bittrex) | CEX-CLOB |
| [Bybit](./bybit) | CEX-CLOB |
| [Bybit (perp)](./bybit) | CEX-CLOB |
| [Coinbase](./coinbase) | CEX-CLOB |
| [Defira](./defira) | DEX-AMM |
| [HitBTC](./hitbtc) | CEX-CLOB |
| [Hotbit](./hotbit) | CEX-CLOB |
| [Huobi](./huobi) | CEX-CLOB | | [en9k2223](https://www.huobi.com/en-us/v/register/double-invite/?inviter_id=25530615&invite_code=en9k2223)
| [Injective](./injective) | DEX-CLOB |
| [Kraken](./kraken) | CEX-CLOB |
| [Loopring](./loopring) | DEX-CLOB |
| [MEXC](./mexc) | CEX-CLOB |
| [Mad Meerkat](./mad-meerkat) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 
| [NDAX](./ndax) | CEX-CLOB | [CoinAlpha](https://coinalpha.com) | 
| [OKX](./okx) | CEX-CLOB | | [1931920](https://www.okx.com/join/1931920)
| [OpenOcean](./openocean) | DEX-AMM |
| [Quickswap](./quickswap) | DEX-AMM |
| [Pangolin](./pangolin) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 
| [Perpetual Protocol](./perp) | PERP AMM DEX |
| [Phemex Perpetual](./phemex-perpetual) | PERP CLOB CEX | [CoinAlpha](https://coinalpha.com) | 
| [Polkadex](./polkadex) | DEX-AMM | [CoinAlpha](https://coinalpha.com)
| [Ref Finance](./ref) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 
| [Sushiswap](./sushiswap) | DEX-AMM |
| [Tinyman](./tinyman) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 
| [TraderJoe](./traderjoe) | DEX-AMM | Hummingbot Foundation | [CoinAlpha](https://coinalpha.com) | 
| [VVS Finance](./vvs) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 
| [XSwap](./xswap) | DEX-AMM | [CoinAlpha](https://coinalpha.com) | 


## Contributing Connectors

Developers may submit connectors as pull requests. See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
