---
tags:
- amm exchange connector
- avalanche dex
---

# `traderjoe`

The TraderJoe connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/traderjoe)

## ℹ️ Exchange Info

**TraderJoe**
[Website](https://traderjoexyz.com/trade/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/traderjoe/) | [CoinGecko](https://www.coingecko.com/en/exchanges/traderjoe)

* API docs: https://docs.traderjoexyz.com/en/security-and-contracts/api-beta
* SDK: https://github.com/traderjoe-xyz/joe-sdk
* FAQ: https://docs.traderjoexyz.com/en/welcome/faq-and-help

## 🔗 Supported Chains

* [Avalanche](/gateway/chains/ethereum/#avalanche)

## 👷 Developer

Added by CoinAlpha in [v1.5.0](/release-notes/1.5.0/) 

## 🔑 Setup

!!! note
    Gateway V2 comes with Avalanche's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect traderjoe` and add your Avalanche wallet to Gateway V2 for trading on TraderJoe.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between TraderJoe and a different exchange.
4. Run `start` to start the strategy, and you're trading!
