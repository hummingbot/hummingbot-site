---
tags:
- amm exchange connector
- ethereum dex
---

# `uniswap`

The Uniswap protocol connector is now managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewayEVMAMM` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

!!! note
    Gateway V2 is currently living on CoinAlpha's `feat/gateway-v2` branch at the moment - it will be merged to Hummingbot master within a month or two.

* [Hummingbot - GatewayEVMAMM](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/hummingbot/strategy/amm_arb/amm_arb.py)
* [Gateway V2 - AMM Routes](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/amm/amm.routes.ts)
* [Gateway V2 - Uniswap-Like Controller](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/uniswap/uniswap.controllers.ts)
* [Gateway V2 - Uniswap Class](https://github.com/CoinAlpha/hummingbot/blob/feat/gateway-v2/gateway/src/connectors/uniswap/uniswap.ts)

## ℹ️ Exchange Info

**Uniswap**
[Website](https://uniswap.org/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/uniswap-v2/) | [CoinGecko](https://www.coingecko.com/en/exchanges/uniswap_v2)

* API docs: https://docs.uniswap.org/protocol/V2/introduction
* SDK: https://docs.uniswap.org/sdk/introduction
* Fees: https://docs.uniswap.org/protocol/V2/concepts/advanced-topics/fees

## 👷 Maintenance

* TBA
* Maintainer: CoinAlpha

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/protocols/gateway/).
2. Run `gateway connect uniswap` and add your Ethereum wallet to Gateway V2 for trading on Uniswap.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Uniswap and a different exchange.
4. Run `start` to start the strategy, and you're trading!
