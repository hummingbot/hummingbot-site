# `hedge`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/hedge](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/hedge)
* Configs: [hedge_config_map_pydantic.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/hedge/hedge_config_map_pydantic.py)
* Maintainer: [leastchaos](https://github.com/leastchaos)

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green)

Community strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## 📝 Summary

This strategy allows you to hedge a market making strategy by automatically opening an opposite positions on another `perp` exchange or `spot` exchange. Configs like `hedge_ratio` allow you to customize how much to hedge. Users are expected to run this strategy alongside another market making strategy.

This strategy was the winning submission in the [dYdX hackathon](https://blog.hummingbot.org/dydx-bounty-winner-announcement/).

## 🏦 Exchanges supported

* SPOT CLOB CEX
* PERP CLOB CEX

## 🛠️ Strategy configs

| Parameter                        | Type                 | Default     | Prompt New? | Prompt                                                 |
|----------------------------------|----------------------|-------------|-------------|--------------------------------------------------------|
| `value_mode`                     | bool                 | True        | True        | Do you want to hedge by asset value [y] or asset amount[n] (y/n)? |
| `hedge_ratio`                    | decimal              | 1           | True        | Enter ratio of asset to hedge, e.g 0.5 means 50 percent of the total asset value will be hedged. |
| `hedge_interval`                 | decimal              | 60          | True        | Enter the interval in seconds to check for hedge |
| `min_trade_size`                 | decimal              | 0           | True        | Enter the minimum trade size in quote asset |
| `slippage`                       | decimal              | 0.02        | True        | Enter max slippage in decimal, e.g 0.1 -> 10% |
| `hedge_connector`                | Union[None, ExchangeEnum] | None   | True        | The name of the exchange connector.|
| `hedge_markets`                  | List[str]            | None        | True        | The name of the trading pairs. (For Value Mode, only one market can be entered)|
| `hedge_offsets`                  | List[Decimal]        | [0.0]       | True        | Enter the offsets to use to hedge the markets comma seperated|
| `hedge_leverage`                 | decimal              | 1           | True        | Enter the leverage to use for the hedge market|
| `hedge_position_mode`            | Literal["ONEWAY", "HEDGE"]| ONEWAY | True        | Enter the position mode to use for the hedge market. (Ensure that the perp connector position mode matches the position mode here)|
| `connector_0`                    | MarketConfigMap      |             | True        | Do you want to monitor connector 0?|
| `connector_1`                    | MarketConfigMap      |             | True        | Do you want to monitor connector 1?|
| `connector_2`                    | MarketConfigMap      |             | True        | Do you want to monitor connector 2?|
| `connector_3`                    | MarketConfigMap      |             | True        | Do you want to monitor connector 3?|
| `connector_4`                    | MarketConfigMap      |             | True        | Do you want to monitor connector 4?|
| `MarketConfigMap`:               |                      |             |             |  for connector_0 to connector_4? |
| `connector`                      | Union[None, ExchangeEnum] | None   | True        | The name of the exchange connector.|
| `markets`                        | List[str]           | None         | True        | The name of the trading pairs. |
| `offsets`                        | List[Decimal]       | [0.0]        | True        | Enter the offsets to use to hedge the markets comma seperated|

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/hedge/hedge.py)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

*By [leastchaos](https://github.com/leastchaos) - see original [pull request](https://github.com/hummingbot/hummingbot/pull/5628)*

**Summary**

This strategy contains 2 mode of hedging.

1. Hedge by amount

The strategy will hedge by amount by calculating the amount to hedge by each asset.
The amount of asset to hedge is calculated by the following formula:
for each asset in the hedge market pair,
    amount_to_hedge = sum of asset amount with the same base asset * hedge_ratio + hedge asset amount
The amount of asset to hedge must be greater than the minimum trade size to be traded.

2. Hedge by value

The strategy will hedge by value by calculating the amount of asset to hedge.
The amount of asset to hedge is calculated by the following formula:
amount_to_hedge = sum of asset value of all market pairs * hedge_ratio + hedge asset value
The amount of asset to hedge must be greater than the minimum trade size to be traded.

**Code Logic:**

On every hedge_interval seconds,

1. Checks that all markets are ready.
2. Check and cancel any previous active orders that were not executed
3. Calculates the direction and amount to hedge according to the mode selected (by amount or by value)
4. Places order if the amount meets the min_trade_size

**Sample Use Case Examples**

* Perform proxy hedging for unshort-able assets with hedge by value mode by hedging the value of multiple different markets using a short-able market which may be correlated.

For E.g, there might be some correlation for some basket of tokens (FEAR, ODDZ, DAFI (random examples only)) with ETH prices. So you can choose to hedge the value of this basket token you hold with a short position on ETH to reduce the inventory risk on the basket of tokens. So when you are market making with this position, it will help you to automatically short a defined ratio on the perpetual market so that if the overall market goes down, part of the loss can be mitigated by the short position in ETH.

* Fixed amount of offset/ hedging of asset

You can set a fixed offset value/amount and the bot will maintain the amount of asset/position you hold at the offset level at every interval.

## ℹ️ More Resources

!!! note
    The videos below may be obsolete since they are based on the v0.45.0 version of the strategy

:fontawesome-brands-youtube: [Hedge in Market Making | Trader Strategies | Part 01](https://www.youtube.com/watch?v=vO79P7ROwtA)

:fontawesome-brands-youtube: [Hedge & Risk Management | Trader Strategies | Part 02](https://www.youtube.com/watch?v=YQ6vwJOD1Go)

:fontawesome-brands-youtube: [Hedge in Market Making using dYdX Perpetuals | Trader Strategies | Part 03](https://www.youtube.com/watch?v=E_M_SUAP3Zo&t=8s)
