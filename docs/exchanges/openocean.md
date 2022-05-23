---
tags:
- amm exchange connector
- avalanche dex
---

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.


# `openocean`

The Openocean protocol connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewayEVMAMM` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

!!! note
    Gateway V2 is currently living on kanghoulin's `feat/gateway-v2_openocean` branch at the moment - it will be merged to Hummingbot master within a month or two.

* [Hummingbot - GatewayEVMAMM](https://github.com/kanghoulin/hummingbot/blob/feat/gateway-v2_openocean/hummingbot/strategy/amm_arb/amm_arb.py)
* [Gateway V2 - AMM Routes](https://github.com/CoinAlpha/kanghoulin/blob/feat/gateway-v2_openocean/gateway/src/amm/amm.routes.ts)
* [Gateway V2 - Uniswap-Like Controller](https://github.com/kanghoulin/hummingbot/blob/feat/gateway-v2_openocean/gateway/src/connectors/uniswap/uniswap.controllers.ts)
* [Gateway V2 - Openocean Class](https://github.com/kanghoulin/hummingbot/blob/feat/gateway-v2_openocean/gateway/src/connectors/openocean/openocean.ts)

## ℹ️ Exchange Info

**Openocean**
[Website](https://openocean.finance/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/openocean/) | [CoinGecko](https://www.coingecko.com/en/exchanges/openocean_finance)

* API docs: https://github.com/openocean-finance/openocean-api
* SDK: https://github.com/openocean-finance/openocean-api-sdk
* DOC: https://docs.openocean.finance/

## 👷 Maintenance

* Release added:
* Maintainer: 

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/protocols/gateway/).
2. Run `gateway connect openocean` and add your Avalanche wallet to Gateway V2 for trading on Openocean.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Openocean and a different exchange.
4. Run `start` to start the strategy, and you're trading!
