Hummingbot connectors standardize trading logic and order types across different exchange types. Exchanges may be centralized (**CEX**), or decentralized (**DEX**), in which case user assets are stored on the blockchain and trading is performed via wallet addresses.

Currently, we support the following exchange types:

 * **SPOT**: Connectors to central limit order book (CLOB) exchanges that trade spot markets
 * **PERP**: Connectors to central limit order book (CLOB) exchanges that trade perpetual swap markets
 * **AMM**: Connectors to decentralized exchanges that use the Automatic Market Maker (AMM) methodology


| Tier | Exchange | Type | Signup code |
|------|----------|------|-------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Binance](./binance) | SPOT CEX | [FQQNNGCD](https://www.binance.com/en/register?ref=FQQNNGCD)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Binance Futures](./binance-perpetual) | PERP CEX | [hummingbot](https://www.binance.com/en/futures/ref?code=hummingbot)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow) | [Uniswap](./uniswap) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [KuCoin](./kucoin) | SPOT CEX | [272KvRf](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [Gate.io](https://www.gate.io/signup/5868285) | SPOT CEX | [5868285](https://www.gate.io/signup/5868285)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [AscendEx](https://ascendex.com/register?inviteCode=UEIXNXKW) | SPOT CEX | [UEIXNXKW](https://ascendex.com/register?inviteCode=UEIXNXKW)
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [PancakeSwap](https://pancakeswap.finance/) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [Sushiswap](https://sushi.com/) | AMM DEX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=silver) | [dYdX](https://dydx.exchange/) | PERP DEX |

## Adding and Removing Exchanges

Quarterly [Polls](https://hummingbot.org/maintenance/certification/) allow the Hummingbot community to vote using HBOT tokens to decide which exchanges should be certified GOLD or SILVER, which means that they are maintained and continually improved by Hummingbot Foundation.  In addition, the codebase includes BRONZE exchange connectors that are maintained by community members. 

Developers may submit connectors as pull requests. See [Contribution Guidelines](/developers/contributions/) for the process to get pull requests merged into the codebase.
