---
tags:
- amm exchange connector
- ethereum dex
---

# `uniswap`

The Uniswap connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/uniswap)

## ℹ️ Exchange Info

**Uniswap**
[Website](https://uniswap.org/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/uniswap-v2/) | [CoinGecko](https://www.coingecko.com/en/exchanges/uniswap_v2)

* API docs: https://docs.uniswap.org/protocol/V2/introduction
* SDK: https://docs.uniswap.org/sdk/introduction
* Fees: https://docs.uniswap.org/protocol/V2/concepts/advanced-topics/fees
* RPC node providers: [Alchemy](https://www.alchemy.com/), [Infura](https://infura.io/), [Quicknode](https://www.quicknode.com/), and much more [here](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/#popular-node-services)

## 🔗 Supported Chains

* [Ethereum](/gateway/chains/ethereum)

## 👷 Developer

Added by CoinAlpha in [v1.4.0](/release-notes/1.4.0/) 

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect uniswap` and choose your RPC node provider. 
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Uniswap and a different exchange.
4. Run `start` to start the strategy, and you're trading!

!!! warning
    Run `gateway start` after connecting your RPC node URL of choice to run the gateway container again