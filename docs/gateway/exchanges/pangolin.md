---
tags:
- amm exchange connector
- avalanche dex
---

# `pangolin`

The Pangolin connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/pangolin)

## ℹ️ Exchange Info

**Pangolin**
[Website](https://pangolin.exchange/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/pangolin/) | [CoinGecko](https://www.coingecko.com/en/exchanges/pangolin)

* API docs: https://github.com/pangolindex/pangolin-api
* SDK: https://github.com/pangolindex/sdk
* FAQ: https://pangolin.exchange/faq/

## 🔗 Supported Chains

* [Avalanche](/gateway/chains/ethereum/#avalanche)

## 👷 Developer

Added by CoinAlpha in [v1.4.0](/release-notes/1.4.0/) 

## 🔑 Setup

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect pangolin` and add your Avalanche wallet to Gateway V2 for trading on Pangolin.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Pangolin and a different exchange.
4. Run `start` to start the strategy, and you're trading!
