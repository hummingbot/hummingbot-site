---
hide:
- toc
tags:
- 👨‍👩‍👧‍👦 community contribution
---

# `fixed_grid`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/fixed_grid)

## 📝 Summary

The `fixed_grid` strategy is similar to "Grid Trading Bot" strategies available on popular exchanges such as Binance and Kucoin, which are often the entry point of users to algorithmic trading in crypto. The strategy may provide a useful tool for market making in consolidating or range-bound markets, as well as for stablecoin pairs.

The main parameters needed to set up this strategy are `grid_price_ceiling`, `grid_price_floor`, `n_levels` (the number of grid levels).

This strategy was submitted to Hummingbot by a community developer as part of the Developer Grant of the [HGP-4](https://snapshot.org/#/hbot.eth/proposal/0xd0c5b54badfd631d7433da0f76795a9dc0d82fc66596d547cda2f3537f903e3f) proposal.

## 🏦 Exchanges supported

[`spot` exchanges](/exchanges/spot)

## 👷 Maintenance

* Release added: [1.5.0](/release-notes/1.5.0/) by [rkc2000](https://github.com/rkc2000)
* Maintainer: [rkc2000](https://github.com/rkc2000)

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/fixed_grid/fixed_grid.py)

| Parameter                        | Type        | Default     | Prompt New? | Prompt                                                 |
|----------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `exchange`                       | string      |             | True        | Enter your maker spot connector                        |
| `market`                         | string      |             | True        | Enter the token trading pair you would like to trade on [exchange] |
| `n_levels`                       | decimal     |             | True        | How many levels do you want on the fixed_grid? |
| `grid_price_ceiling`             | decimal     |             | True        | Enter the ceiling price for the grid (top most order) |
| `grid_price_floor`               | int         |             | True        | Enter the floor price for the grid (bottom most order) |
| `start_order_spread`             | float       | 0.2         | False       | How far away from the mid price do you want to place the first order used to rebalance grid? |
| `order_refresh_time`             | decimal     | 1800        | False       | How often do you want to cancel and replace bids (in seconds)? |
| `max_order_age`                  | decimal     | 1800        | False       | How long do you want to cancel and replace bids and asks with the same price (in seconds)? |
| `order_refresh_tolerance_pct`    | decimal     | 0           | False       | Enter the percent change in price needed to refresh orders at each cycle |
| `order_amount`                   | decimal     |             | True        | What is the amount of [base_asset] per order? |
| `order_optimization_enabled`     | bool        | False       | False       | Do you want to enable best bid ask jumping? |
| `ask_order_optimization_depth`   | decimal     | 0           | False       | How deep do you want to go into the order book for calculating the top ask, ignoring dust orders on the top (expressed in base asset amount)?|
| `bid_order_optimization_depth`   | decimal     | 0           | False       | How deep do you want to go into the order book for calculating the top bid, ignoring dust orders on the top (expressed in base asset amount)?|
| `take_if_crossed`                | bool        | True       | False       | Do you want to take the best order if orders cross the orderbook? |
| `should_wait_order_cancel_confirmation`        | bool        | True       | False       | Do you want to take the best order if orders cross the orderbook? |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/fixed_grid/fixed_grid.pyx)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

*By [rkc2000](https://github.com/rkc2000) - see original [pull request](https://github.com/hummingbot/hummingbot/pull/5249)*

The grid strategy is probably the most common way in which people are introduced to algorithmic trading. It is available free to use on exchanges like Binance and Kucoin, and also offered as a paid service on Bitsgap etc. It is an excellent tool for market making stablecoin pairs and consolidating / range-bound markets. A non-stablecoin example where the grid could be used is shown below

[![Sample application for Fixed Grid Strategy](/strategies/fixed_grid1.png)](/strategies/fixed_grid1.png)

## Fixed Grid Algorithm

[![Illustration of Fixed Grid strategy in Hummingbot](/strategies/fixed_grid2.png)](/strategies/fixed_grid2.png)

The grid consists of `N levels` as illustrated above

Lowest level is the grid floor and the highest level is the grid ceiling.

*Grid_spread = (ceiling_price -floor_price)/(N-1)*

*Price at i-th level = floor_price + (i-1)*grid_spread*

At each level, there is an associated base and quote inventory requirement. These are for the buy orders that will be placed at levels 1 to i-1, and for the sell orders that will be placed at levels i+1 to N .

*Base inventory at i-th level = (N-i)*order_amount*

*Quote inventory at i-th level = Sum(prices at levels 1 to i-1)*order_amount**

When started, the bot will find the closest grid level and check if the corresponding inventory requirements are met. If not, it will attempt to rebalance with a limit order by either buying or selling the required amount of base asset. Once the inventory requirements are met, the grid will be set up.

(Binance has 3 types of grid bots — Long, Short and Neutral. All 3 of these can be done by the HB fixed grid bot. When the starting price is in between the grid levels it is a Neutral bot, when it is below the grid floor it is a Long bot, and when it is above the grid ceiling it is a Short bot)

## Bot Parameters

[![Sample config for the Fixed Grid strategy](/strategies/fixed_grid3.png)](/strategies/fixed_grid3.png)

A sample config file for the Fixed Grid strategy is shown above. The required fields are highlighted. Except these and `order_amount`, all other fields are optional.

The `start_order_spread` is the spread for the limit order that is placed to rebalance inventory (if required) at start of the bot operation.

The `order_optimization` and depth options are only for the starting rebalance order.

## ℹ️ More Resources

*Check out [Hummingbot Academy](https://hummingbot.io/academy) for more resources related to this strategy and others!*
