---
tags:
- amm exchange connector
- avalanche dex
---

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.


# `pangolin`

The Pangolin protocol connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewayEVMAMM` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

** TBA: Update the links after feat/gateway-v2 has been merged. **

* [Hummingbot - GatewayEVMAMM](https://github.com/)
* [Gateway V2 - Pangolin Routes](https://github.com/)
* [Gateway V2 - Pangolin Controller](https://github.com/)
* [Gateway V2 - Pangolin Class](https://github.com/)

## ℹ️ Exchange Info

**Pangolin**
[Website](https://pangolin.exchange/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/pangolin/) | [CoinGecko](https://www.coingecko.com/en/exchanges/pangolin)

* API docs: https://github.com/pangolindex/pangolin-api
* SDK: https://github.com/pangolindex/sdk
* FAQ: https://pangolin.exchange/faq/

## 👷 Maintenance

* TBA
* Maintainer: CoinAlpha

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/protocols/gateway/).
2. Run `gateway connect pangolin` and add your Avalanche wallet to Gateway V2 for trading on Pangolin.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Pangolin and a different exchange.
4. Run `start` to start the strategy, and you're trading!
