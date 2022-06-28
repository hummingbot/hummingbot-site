---
tags:
- amm exchange connector
- avalanche dex
---

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.


# `traderjoe`

The TraderJoe protocol connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewayEVMAMM` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

* [Hummingbot - GatewayEVMAMM](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/hummingbot/strategy/amm_arb/amm_arb.py)
* [Gateway V2 - AMM Routes](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/amm/amm.routes.ts)
* [Gateway V2 - Uniswap-Like Controller](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/uniswap/uniswap.controllers.ts)
* [Gateway V2 - TraderJoe Class](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/traderjoe/traderjoe.ts)

## ℹ️ Exchange Info

**TraderJoe**
[Website](https://traderjoexyz.com/trade/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/traderjoe/) | [CoinGecko](https://www.coingecko.com/en/exchanges/traderjoe)

* API docs: https://docs.traderjoexyz.com/en/security-and-contracts/api-beta
* SDK: https://github.com/traderjoe-xyz/joe-sdk
* FAQ: https://docs.traderjoexyz.com/en/welcome/faq-and-help

## 👷 Maintenance

* TBA
* Maintainer: [james-hummingbot](https://github.com/james-hummingbot) 

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect traderjoe` and add your Avalanche wallet to Gateway V2 for trading on TraderJoe.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between TraderJoe and a different exchange.
4. Run `start` to start the strategy, and you're trading!
