Hummingbot connectors standardize trading logic and order types across different exchange types. 

Exchanges may be centralized (**CEX**), or decentralized (**DEX**), in which case user assets are stored on the blockchain and trading is performed via wallet addresses.

Currently, we support the following exchange types:

 * **SPOT**: Connectors to central limit order book (CLOB) exchanges that trade spot markets
 * **PERP**: Connectors to central limit order book (CLOB) exchanges that trade perpetual swap markets
 * **AMM**: Connectors to decentralized exchanges that use the Automatic Market Maker (AMM) methodology

## Connector Tiers

[Polls](/governance/polls) allow the Hummingbot community to vote using HBOT tokens to decide how the exchange connectors in the codebase are maintained:

* **GOLD**: Hummingbot Foundation maintains these connectors, keeps up with exchange upgrades and strives to continually improve them. These connectors serve as the "gold standard" template for all other connectors of that type.
* **SILVER**: The Foundation maintains these connectors via community developer bounties, tracking improvements made to the Gold connectors.
* **BRONZE**: Connectors that meet the Minimum Voting Power threshold will be included in each monthly release as Bronze connectors. They are not maintained by the Foundation but may be maintained by our sister company [CoinAlpha](https://coinalpha.com) or another member of the community.

## Connector Maintenance

Each exchange connector should have a maintainer who is responsible for fixing bugs, addressing user issues, and keeping up with exchange API and Hummingbot connector standard updates. Maintainer responsibilities include:

* Addressing user Github issues and pull requests related to the component
* Keeping the component updated for changes to the exchange API and Hummingbot connector standard
* Keeping the component’s documentation updated

Hummingbot Foundation currently maintains the following connectors:

| Tier | Exchange | Type | Signup code |
|------|----------|------|-------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Binance](./binance) | SPOT CEX | [FQQNNGCD](https://www.binance.com/en/register?ref=FQQNNGCD)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Binance (perp)](./binance-perpetual) | PERP CEX | [hummingbot](https://www.binance.com/en/futures/ref?code=hummingbot)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Uniswap](./uniswap) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [Kucoin](./kucoin) | SPOT CEX | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [Gate.io](./gate-io) | SPOT CEX | [5868285](https://www.gate.io/signup/5868285)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [Gate.io (perp)](./gate-io-perpetual) | PERP CEX | [5868285](https://www.gate.io/signup/5868285)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [AscendEx](./ascendex) | SPOT CEX | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [PancakeSwap](./pancakeswap) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [Sushiswap](./sushiswap) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | [dYdX](./dydx-perpetual) | PERP DEX |

Our sister company CoinAlpha maintains the following connectors:

| Tier | Exchange | Type | Signup code |
|------|----------|------|-------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Bitmart](./bitmart) | SPOT CEX | [UM6fQV](https://www.bitmart.com/en?r=UM6fQV)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [CI-EX](./ci-ex) | SPOT CEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Himalaya](./Himalaya) | SPOT CEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [NDAX](./ndax) | SPOT CEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Bitget](./bitget-perpetual) | PERP CEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [LBank](./lbank) | SPOT CEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [MM Finance](./mm-finance) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Pangolin](./pangolin) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Trader Joe](./traderjoe) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [Ref Finance](./ref-finance) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | [VVS Finance](./vvs-finance) | AMM DEX |

## Contributing Connectors

Developers may submit connectors as pull requests. See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
