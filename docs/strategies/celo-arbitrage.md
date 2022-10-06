---
tags:
- arbitrage
- dex strategy
- celo
---

# `celo_arb`

## 📁 [Strategy folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/celo_arb)

## 📝 Summary

This strategy is a predecessor to the `amm_arb` strategy built specifically to help [Celo Protocol](https://celo.org/) maintain price stability for its stablecoin pairs. Like `amm_arb`, this strategy monitors prices between AMM-based exchanges on the Celo blockchain versus another trading pair on another `spot` or `amm` exchange in order to identify arbitrage opportunities.

It executes offsetting buy and sell orders in both markets in order to capture arbitrage opportunities with profitability higher than `min_profitability`, net of transaction costs, which include both blockchain transaction fees (gas) and exchange fees.

!!! note
    Currently, this strategy requires users to install the `celo-cli` tool alongside Hummingbot. In the future, CoinAlpha plans to add a Celo connector to [Gateway](/gateway) so that the generic `amm_arb` strategy works with Celo.

## 🏦 Exchanges supported

* Celo protocol
* [`spot` exchanges](/exchanges/#spot)

## 👷 Maintenance

* Release added: [0.28.0](/release-notes/0.28.0/) by CoinAlpha
* Maintainer: CoinAlpha

## 🛠️ Strategy configs

[Config map](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/celo_arb/celo_arb_config_map.py)

| Parameter                    | Type        | Default     | Prompt New? | Prompt                                                 |
|------------------------------|-------------|-------------|-------------|--------------------------------------------------------|
| `secondary_exchange` | string | | True | Enter your secondary spot connector |
| `secondary_market` | string | | True | Enter the token trading pair you would like to trade on [secondary_exchange] |
| `order_amount` | decimal | | True | What is the amount of [base_asset] per order? |
| `min_profitability` | decimal | 0.3 | True | What is the minimum profitability for you to make a trade? |
| `celo_slippage_buffer` | decimal | 0.01 | True | How much buffer do you want to add to the Celo price to account for slippage? |

## 📓 Description

[Trading logic](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/celo_arb/celo_arb.pyx)

## ℹ️ More Resources

:fontawesome-solid-book: [Quickstart Guide for celo-arb](https://hummingbot.io/academy/celo-arb/?_ga=2.247744654.866973443.1649059002-567388704.1647856298): We have created this guide to help users of the new celo-arb strategy install and run the strategy on a cloud instance.

:fontawesome-solid-book: [How celo-arb works](https://blog.hummingbot.org/2020-06-celo-arbitrage/): This article guides you in running the `celo-arb` strategy.

:fontawesome-solid-book: [New arbitrage opportunity: Wrapped CELO](https://blog.hummingbot.org/2020-12-wrapped-celo-uniswap-arbitrage/): This article introduces a new arbitration strategy known as Wrapped Celo arbitration.

*Check out [Hummingbot Academy](https://hummingbot.io/academy) for more resources related to this strategy and others!*
