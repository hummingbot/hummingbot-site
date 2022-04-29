---
tags:
- market making
- ⛏️ Miner strategy
---

# `liquidity_mining`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/liquidity_mining)

## 📝 Summary

This strategy allows market making across multiple pairs on an exchange on a single Hummingbot instance. This is achieved by enabling users to configure the markets they would like to participate in and other market-making configurations. Volatility-Spread adjustment is another key feature of this strategy, where the spreads are dynamically adjusted based on the volatility of the markets.

## 🏦 Exchanges supported

[`spot` exchanges](/exchanges/#spot)

## 👷 Maintenance

* Release added: [0.37.0](/release-notes/0.37.0/) by CoinAlpha
* Maintainer: CoinAlpha

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/liquidity_mining/liquidity_mining_config_map.py)

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

## 📓 Blogs / FAQs

* [Liquidity Mining Blogs](https://hummingbot.io/en/blog/tag/liquidity-mining/)
    * Checkout our blog to learn more about Hummingbot Liquidity Mining

* 🎥&emsp;[Liquidity Mining Explained | For New Users](https://www.youtube.com/watch?v=ME5osB8sX_s)
    * Learn about Liquidity Mining and how to set up a market-making bot to earn rewards in an exchange.

## 🧑‍🎓 Go-to resources to learn more

* [Find more guides at Hummingbot Academy](https://hummingbot.io/en/academy/)
    * Hummingbot Academy is a comprehensive go-to resource for users to learn everything from installing Hummingbot, setting your own servers, to strategies, trader tips, and building your own custom strategies and connectors. Includes quick start guides, FAQ, video tutorials & case studies, and much more. 

* [Hummingbot Miner Guide](https://support.hummingbot.io/hc/en-us)
    * Check out our latest announcements, campaigns, documentations, handy articles and much more.