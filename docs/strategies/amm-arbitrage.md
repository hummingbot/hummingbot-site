# `amm_arb`

## 📁 Strategy Info

* Folder: [/hummingbot/strategy/amm_arb](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/amm_arb)
* Configs: [/hummingbot/strategy/amm_arb/amm_arb_config_map.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb_config_map.py)
* Maintainer: Hummingbot Foundation

## 🏆 Strategy Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=CORE&color=yellow)

Core strategies are maintained and continually improved by Hummingbot Foundation. Foundation staff focuses on testing these strategies and rewards users who answer questions related to these strategies on Discord.

## 📝 Summary

This strategy monitors prices between a trading pair (`market_1`) on a SPOT AMM DEX versus another trading pair (`market_2`) on another SPOT AMM CEX or SPOT CLOB DEX in order to identify arbitrage opportunities. It executes offsetting buy and sell orders in both markets in order to capture arbitrage opportunities with profitability higher than `min_profitability`, net of transaction costs, which include both blockchain transaction fees (gas) and exchange fees.

## 🏦 Supported Exchange Types

* SPOT CLOB CEX
* SPOT AMM DEX

## 🛠️ Strategy configs

| Parameter                    | Type        | Default     | Prompt                                                 |
|------------------------------|-------------|-------------|--------------------------------------------------------|
| `connector_1` | string | | Enter your first spot connector (Exchange/AMM) |
| `market_1` | string | | Enter the token trading pair you would like to trade on [connector_1] |
| `connector_2` | string | | Enter your second spot connector (Exchange/AMM) |
| `market_2` | string | | Enter the token trading pair you would like to trade on [connector_2] |
| `order_amount` | decimal | | What is the amount of [base_asset] per order? |
| `min_profitability` | decimal | 1 | What is the minimum profitability for you to make a trade? |
| `market_1_slippage_buffer` | decimal | 1 | How much buffer do you want to add to the price to account for slippage for orders on the first market |
| `market_2_slippage_buffer` | decimal | 0 | How much buffer do you want to add to the price to account for slippage for orders on the second market |
| `concurrent_orders_submission` | bool | False | Do you want to submit both arb orders concurrently (Yes/No) ? If No, the bot will wait for first connector order filled before submitting the other order |
| `debug_price_shim` | bool | | Do you want to enable the debug price shim for integration tests? If you don't know what it does you should keep it disabled. |
| `gateway_transaction_cancel_interval` | int | 600 | After what time should blockchain transactions be cancelled if they are not included in a block? (this only affects decentralized exchanges) (Enter time in seconds) >>> |

## 📓 Description

See [Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb.py) to understand how the strategy works.

## ℹ️ More Resources

:fontawesome-solid-book: [How to arbitrage AMMs like Uniswap and Balancer](https://blog.hummingbot.org/2020-12-amm-arbitrage-uniswap-balancer/): Learn how you can Arbitrage AMMs with our strategy

:fontawesome-solid-book: [Quickstart Guide for amm_arb (deprecated)](https://docs.hummingbot.org/gateway/setup/): This guide will walk you through the installation and launch of the new `amm_arb` strategy
