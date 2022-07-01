---
tags:
- amm exchange connector
- ethereum dex
---

# `sushiswap`

The SushiSwap connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/sushiswap)

## ℹ️ Exchange Info

**Sushiswap**
[Website](https://app.sushi.com/swap/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/sushiswap/) | [CoinGecko](https://www.coingecko.com/en/exchanges/sushiswap)

* API docs: https://docs.sushi.com/api/furo
* SDK: https://github.com/sushiswap/sdk
* FAQ: https://docs.sushi.com/docs/FAQ/General%20FAQ

## 🔗 Supported Chains

* [Ethereum](/gateway/chains/ethereum)

## 👷 Developer

Added by Faouzijedidi1 in [v1.5.0](/release-notes/1.5.0/) 

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect sushiswap` and add your Ethereum wallet to Gateway V2 for trading on Sushiswap.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy, and you're trading!
