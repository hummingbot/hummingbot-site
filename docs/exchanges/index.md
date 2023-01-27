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

## Connector Tiers

Quarterly [Polls](/governance/polls) allow the Hummingbot community to vote using HBOT tokens to rank the exchanges in the codebase. This decides which connectors should be included going forward, and how they are maintained:

### Gold

![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)

The two Gold exchanges are the top CEX and DEX selected by HBOT voters in the latest Poll. Their connectors are maintained by Hummingbot Foundation and are continually improved, serving as the "gold standard" template for all other connectors of that type.

| Exchange | Type | Signup code |
|----------|------|-------------|
| [Binance](./binance) | SPOT CLOB CEX | [FQQNNGCD](https://www.binance.com/en/register?ref=FQQNNGCD)
| [Binance (perp)](./binance-perpetual) | PERP CLOB CEX | [hummingbot](https://www.binance.com/en/futures/ref?code=hummingbot)
| [Uniswap](./uniswap) | SPOT AMM-RANGE DEX |

### Silver

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.


| Exchange | Type | Signup code |
|----------|------|-------------|
| [Kucoin](./kucoin) | SPOT CLOB CEX | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| [Gate.io](./gate-io) | SPOT CLOB CEX | [5868285](https://www.gate.io/signup/5868285)
| [Gate.io (perp)](./gate-io-perpetual) | PERP CLOB CEX | [5868285](https://www.gate.io/signup/5868285)
| [AscendEx](./ascendex) | SPOT CLOB CEX | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| [Pancakeswap](./pancakeswap) | SPOT AMM DEX |
| [Sushiswap](./sushiswap) | SPOT AMM DEX |
| [dYdX](./dydx-perpetual) | PERP CLOB DEX |

### Bronze

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## Connector Maintenance

Exchange connectors may have a maintainer who is responsible for ongoing maintenance: fixing bugs, addressing user issues, and keeping up with exchange API and Hummingbot connector standard updates. Specifically, maintainer responsibilities include:

* Addressing user Github issues and pull requests related to the connector
* Keeping the connector updated for changes to the exchange API and Hummingbot connector standard for that exchange type
* Keeping the connector's documentation page updated

Hummingbot Foundation is the maintainer for the GOLD and SILVER exchange connectors.

Our sister company [CoinAlpha](https://coinalpha.com) maintains the following BRONZE connectors:

| Exchange | Type | Signup code |
|----------|------|-------------|
| [Bitget](./bitget-perpetual) | PERP CLOB CEX |
| [Bitmart](./bitmart) | SPOT CLOB CEX | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| [CI-EX](./ci-ex) | SPOT CLOB CEX |
| [Himalaya](./Himalaya) | SPOT CLOB CEX |
| [NDAX](./ndax) | SPOT CLOB CEX |
| [LBank](./lbank) | SPOT CLOB CEX |
| [MM Finance](./mm-finance) | SPOT AMM DEX |
| [Pangolin](./pangolin) | SPOT AMM DEX |
| [Ref Finance](./ref-finance) | SPOT AMM DEX |
| [Trader Joe](./traderjoe) | SPOT AMM DEX |
| [VVS Finance](./vvs-finance) | SPOT AMM DEX |

## Contributing Connectors

Developers may submit connectors as pull requests. See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
