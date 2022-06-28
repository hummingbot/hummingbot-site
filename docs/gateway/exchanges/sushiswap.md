---
tags:
- amm exchange connector
- ethereum dex
---

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.


# `sushiswap`

The Sushiswap protocol connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewayEVMAMM` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

* [Hummingbot - GatewayEVMAMM](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/hummingbot/strategy/amm_arb/amm_arb.py)
* [Gateway V2 - AMM Routes](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/amm/amm.routes.ts)
* [Gateway V2 - Uniswap-Like Controller](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/uniswap/uniswap.controllers.ts)
* [Gateway V2 - Sushiswap Class](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/sushiswap/sushiswap.ts)

## ℹ️ Exchange Info

**Sushiswap**
[Website](https://app.sushi.com/swap/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/sushiswap/) | [CoinGecko](https://www.coingecko.com/en/exchanges/sushiswap)

* API docs: https://docs.sushi.com/api/furo
* SDK: https://github.com/sushiswap/sdk
* FAQ: https://docs.sushi.com/docs/FAQ/General%20FAQ

## 👷 Maintenance

* TBA
* Maintainer: [james-hummingbot](https://github.com/james-hummingbot)

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect sushiswap` and add your Ethereum wallet to Gateway V2 for trading on Sushiswap.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy, and you're trading!
