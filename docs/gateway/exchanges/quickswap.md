---
tags:
- amm exchange connector
- polygon dex
---

# `quickswap`

The Pangolin connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/chains/polygon)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/quickswap.yml)

## ℹ️ Exchange Info

**Quickswap**
[Website](https://quickswap.exchange/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/quickswap/) | [CoinGecko](https://www.coingecko.com/en/exchanges/quickswap)

* API docs: <https://docs.quickswap.exchange/reference/>
* SDK: <https://docs.quickswap.exchange/guides/javascript-sdk/01-quick-start>
* FAQ: <https://docs.quickswap.exchange/>

## 🕸️ Supported Chains and Networks

### Polygon
* [mainnet](/gateway/chains/ethereum/#mainnet-polygon-mainnet)
* [mumbai](/gateway/chains/ethereum/#mumbai-testnet)

## 👷 Developer

Added by james-hummingbot in [v1.6.0](/release-notes/1.6.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect quickswap` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Quickswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Polygon](/gateway/chains/ethereum/#polygon) for more information about the default configuration settings and how to change them.
