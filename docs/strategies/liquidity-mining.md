# `liquidity_mining`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/liquidity_mining](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/liquidity_mining)
* Configs: [liquidity_mining_config_map.py](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/liquidity_mining/liquidity_mining_config_map.py)
* Maintainer: 

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green)

Community strategies have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## 📝 Summary

This strategy allows market making across multiple pairs on an exchange on a single Hummingbot instance. This is achieved by enabling users to configure the markets they would like to participate in and other market-making configurations. Volatility-Spread adjustment is another key feature of this strategy, where the spreads are dynamically adjusted based on the volatility of the markets.

## 🏦 Exchanges supported

* SPOT CLOB CEX

## 🛠️ Strategy configs

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `exchange` | string | | True | Enter the spot connector to use for liquidity mining) |
| `markets` | string | | True | Enter a list of markets |
| `token` | string | | True | What asset (base or quote) do you want to use to provide liquidity? |
| `order_amount` | decimal | | True | What is the size of each order (in [token] amount)? |
| `spread` | decimal | | True | How far away from the mid price do you want to place bid and ask orders? |
| `inventory_skew_enabled` | bool | True | False | Would you like to enable inventory skew? (Yes/No) |
| `target_base_pct` | decimal | | True | For each pair, what is your target base asset percentage? |
| `order_refresh_time` | float | 10 | False | How often do you want to cancel and replace bids and asks |
| `order_refresh_tolerance_pct` | deciimal | 0.2 | False | Enter the percent change in price needed to refresh orders at each cycle |
| `inventory_range_multiplier` | decimal | 1 | False | What is your tolerable range of inventory around the target, expressed in multiples of your total order size? |
| `volatility_interval` | int | 300 | False | What is an interval, in second, in which to pick historical mid price data from to calculate market volatility? |
| `avg_volatility_period` | int | 10 | False | How many interval does it take to calculate average market volatility? |
| `volatility_to_spread_multiplier` | decimal | 1 | False | Enter a multiplier used to convert average volatility to spread |
| `max_spread` | decimal | -1 | False | What is the maximum spread? |
| `max_order_age` | float | 3600 | False | What is the maximum life time of your orders (in seconds)? |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/liquidity_mining/liquidity_mining.py)

## ℹ️ More Resources

:fontawesome-solid-globe: [Hummingbot Miner Help Center](https://support.hummingbot.io): Check out our latest announcements, campaigns, documentations, handy articles and much more.

:fontawesome-solid-book: [Demystifying liquidity mining rewards](https://hummingbot.io/blog/2019-12-liquidity-mining-rewards)

:fontawesome-brands-youtube: [Liquidity Mining Explained | For New Users](https://www.youtube.com/watch?v=ME5osB8sX_s): Learn about Liquidity Mining and how to set up a market-making bot to earn rewards in an exchange.

*Check out [Hummingbot Academy](https://hummingbot.io/academy) for more resources related to this strategy and others!*
