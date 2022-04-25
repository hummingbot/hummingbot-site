---
tags:
- arbitrage
- perp strategy
---

# `spot_perpetual_arbitrage`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/spot_perpetual_arbitrage)

## 📝 Summary

This strategy looks at the price on the spot connector and the price on the derivative connector. Then it calculates the spread between the two connectors. The key features for this strategy are `min_divergence` and `min_convergence`.

When the spread between spot and derivative markets reaches a value above `min_divergence`, the first part of the operation will be executed, creating a buy/sell order on the spot connector, while opening an opposing long/short position on the derivative connector.

With the position open, the bot will scan the prices on both connectors, and once the price spread between them reaches a value below `min_convergence`, the bot will close both positions.

## 🏦 Exchanges supported

[`spot` exchanges](/exchanges/#spot)
[`perp` exchanges](/exchanges/#perp)

## 👷 Maintainer

Open

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/spot_perpetual_arbitrage/spot_perpetual_arbitrage_config_map.py)

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `spot_connector` | string | | True | Enter a spot connector (Exchange/AMM) |
| `spot_market` | string | | True | Enter the token trading pair you would like to trade on [spot_connector] |
| `perpetual_connector` | string | | True | Enter a derivative name (Exchange/AMM) |
| `perpetual_market` | string | | True | Enter the token trading pair you would like to trade on [derivative_connector] |
| `order_amount` | decimal | | True | What is the amount of [base_asset] per order? |
| `perpetual_leverage` | int | 1 | True | How much leverage would you like to use on the derivative exchange? |
| `min_opening_arbitrage_pct` | decimal | 1 | True | What is the minimum spread between the spot and derivative market price before starting an arbitrage? |
| `min_closing_arbitrage_pct` | decimal | 0.1 | True | What is the minimum spread between the spot and derivative market price before closing an existing arbitrage? |
| `maximize_funding_rate` | bool | False | True | Would you like to take advantage of the funding rate on the derivative exchange, even if min convergence is reached during funding time? |
| `spot_market_slippage_buffer` | decimal | 0.05 | True | How much buffer do you want to add to the price to account for slippage for orders on the spot market |
| `perpetual_market_slippage_buffer` | decimal | 0.05 | True | How much buffer do you want to add to the price to account for slippage for orders on the derivative market |
| `next_arbitrage_cycle_delay` | float | 120 | False | How long do you want the strategy to wait to cool off from an arbitrage cycle (in seconds) |

## 📓 Description

## 📓 Blogs / FAQs

* [How to Use the New Spot-perpetual Arbitrage Strategy](https://hummingbot.io/en/blog/2021-03-spot-perpetual-protocol-guide?_ga=2.92539037.1247821620.1649675450-567388704.1647856298)
    * Learn how the spot-perpetual arbitrage strategy works and how you can make use of it.

* [How it works: Spot Perpetual Arbitrage](https://master--docs-hb-v3.netlify.app/strategies/spot-perpetual-arb/)
    * 🎥&emsp;[Spot-Perpetual Arbitrage Strategy Demo | Hummingbot Live](https://www.youtube.com/watch?v=hJPmAy-Ellk)
        * A live demo on how you can set parameters to run the spot-perpetual arbitrage strategy

## 🧑‍🎓 Go-to resources to learn more

* [Find more guides at Hummingbot Academy](https://hummingbot.io/en/academy/)
    * Hummingbot Academy is a comprehensive go-to resource for users to learn everything from installing Hummingbot, setting your own servers, to strategies, trader tips, and building your own custom strategies and connectors. Includes quick start guides, FAQ, video tutorials & case studies, and much more. 

* [Hummingbot Miner Guide](https://support.hummingbot.io/hc/en-us)
    * Check out our latest announcements, campaigns, documentations, handy articles and much more.