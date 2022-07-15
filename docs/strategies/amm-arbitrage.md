---
tags:
- arbitrage
- dex strategy
---

# `amm_arb`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/amm_arb)

## 📝 Summary

This strategy monitors prices between a trading pair on an `amm` exchange versus another trading pair on another `spot` or `amm` exchange in order to identify arbitrage opportunities. Similar to the `arbitrage` strategy, it executes offsetting buy and sell orders in both markets in order to capture arbitrage opportunities with profitability higher than `min_profitability`, net of transaction costs, which include both blockchain transaction fees (gas) and exchange fees.

Hummingbot will be accessing `amm` exchanges via Gateway V2 from v1.4.0. If you are looking for instructions on how to configure `amm` exchanges, refer to the [Gateway V2](/gateway/) and the [`amm`](/exchanges/#amm) specific setup instructions.

## 🏦 Exchanges supported

* [`amm` exchanges](/gateway/exchanges/amm)
* [`spot` exchanges](/exchanges/spot)

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
| `debug_price_shim` | bool | Do you want to enable the debug price shim for integration tests? If you don't know what it does you should keep it disabled. |
| `gateway_transaction_cancel_interval` | int | 600 | True | After what time should blockchain transactions be cancelled if they are not included in a block? (this only affects decentralized exchanges) (Enter time in seconds) >>> |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb.py)

!!! note "Approximation only"
    The description below is a general approximation of this strategy. Please inspect the strategy code in **Trading Logic** above to understand exactly how it works.

## ℹ️ More Resources

:fontawesome-solid-book: [How to arbitrage AMMs like Uniswap and Balancer](https://hummingbot.io/blog/2020-12-amm-arbitrage-uniswap-balancer): Learn how you can Arbitrage AMMs with our strategy

:fontawesome-solid-book: [Quickstart Guide for amm_arb (deprecated)](https://hummingbot.io/en/academy/amm-arb): This guide will walk you through the installation and launch of the new `amm_arb` strategy

*Check out [Hummingbot Academy](https://hummingbot.io/en/academy) for more resources related to this strategy and others!*
