---
tags:
- arbitrage
- dex strategy
---

# `amm_arb`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/amm_arb)

## 📝 Summary

This strategy monitors prices between a trading pair on an `amm` exchange versus another trading pair on another `spot` or `amm` exchange in order to identify arbitrage opportunities. Similar to the `arbitrage` strategy, it executes offsetting buy and sell orders in both markets in order to capture arbitrage opportunities with profitability higher than `min_profitability`, net of transaction costs, which include both blockchain transaction fees (gas) and exchange fees.

Hummingbot will be accessing `amm` exchanges via Gateway V2 from v1.4.0. If you are looking for instructions on how to configure `amm` exchanges, refer to the [Gateway V2](/protocols/gateway/) and the [`amm`](/exchanges/#amm) specific setup instructions.

## 🏦 Exchanges supported

* [`amm` exchanges](/exchanges/#amm)
* [`spot` exchanges](/exchanges/#spot)

## 👷 Maintenance

* Release added: [0.34.0](/release-notes/0.34.0/) by CoinAlpha
* Maintainer: CoinAlpha

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb_config_map.py)

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `connector_1` | string | | True | Enter your first spot connector (Exchange/AMM) |
| `market_1` | string | | True | Enter the token trading pair you would like to trade on [connector_1] |
| `connector_2` | string | | True | Enter your second spot connector (Exchange/AMM) |
| `market_2` | string | | True | Enter the token trading pair you would like to trade on [connector_2] |
| `order_amount` | decimal | | True | What is the amount of [base_asset] per order? |
| `min_profitability` | decimal | 1 | True | What is the minimum profitability for you to make a trade? |
| `market_1_slippage_buffer` | decimal | 1 | True | How much buffer do you want to add to the price to account for slippage for orders on the first market |
| `market_2_slippage_buffer` | decimal | 0 | True | How much buffer do you want to add to the price to account for slippage for orders on the second market |
| `concurrent_orders_submission` | bool | False | True | Do you want to submit both arb orders concurrently (Yes/No) ? If No, the bot will wait for first connector order filled before submitting the other order |
| `gateway_transaction_cancel_interval` | int | 600 | True | After what time should blockchain transactions be cancelled if they are not included in a block? (this only affects decentralized exchanges) (Enter time in seconds) >>> |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb.py)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

## 📓 Blogs / FAQs

* [Quickstart Guide for amm_arb](https://hummingbot.io/en/academy/amm-arb)
    * This guide will walk you through the installation and launch of the new amm_arb strategy.

* 🎥&emsp;[How to Spot Market Making and Arbitrage opportunities?](https://www.youtube.com/watch?v=szAm_2ssXCU)
    * Learn how to optimize the arbitrage strategy for different opportunities.

* [How to use AMM arbitrage strategy](https://master--docs-hb-v3.netlify.app/strategies/amm-arb/)
    * Prior to using the AMM arbitration strategy in Hummingbot, you must install and configure the Gateway API server.

## 🧑‍🎓 Go-to resources to learn more

* [Find more guides at Hummingbot Academy](https://hummingbot.io/en/academy/)
    * Hummingbot Academy is a comprehensive go-to resource for users to learn everything from installing Hummingbot, setting your own servers, to strategies, trader tips, and building your own custom strategies and connectors. Includes quick start guides, FAQ, video tutorials & case studies, and much more. 

* [Hummingbot Miner Guide](https://support.hummingbot.io/hc/en-us)
    * Check out our latest announcements, campaigns, documentations, handy articles and much more.