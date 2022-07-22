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

* API docs: <https://docs.sushi.com/api/furo>
* SDK: <https://github.com/sushiswap/sdk>
* FAQ: <https://docs.sushi.com/docs/FAQ/General%20FAQ>
* RPC node providers: [Alchemy](https://www.alchemy.com/), [Infura](https://infura.io/), [Quicknode](https://www.quicknode.com/), and much more [here](https://ethereum.org/en/developers/docs/nodes-and-clients/nodes-as-a-service/#popular-node-services)

## 🔗 Supported Chains

* [Ethereum](/gateway/chains/ethereum)

## 👷 Developer

Added by Faouzijedidi1 in [v1.5.0](/release-notes/1.5.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container.
2. Run `gateway connect sushiswap` and choose your RPC node provider.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Uniswap and a different exchange.
4. Run `start` to start the strategy, and you're trading!

!!! warning
    Run `gateway start` after connecting your RPC node URL of choice to run the gateway container again

## 📘 Additional Resources

* We recommend using Infura for the RPC node link. Here's a quick guide on how to create the project and get the link - <https://blog.infura.io/post/getting-started-with-infura-28e41844cc89>
* If for some reason you prefer to use a different provider instead of Infura here's a list of the top ones - <https://github.com/arddluma/awesome-list-rpc-nodes-providers#ethereum>
* [RPC.Info](https://rpc.info/) has a list that users can use for testnets and other RPC nodes
