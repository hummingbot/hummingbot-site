---
tags:
- amm exchange connector
- harmony dex
---

# `defira`

The Defira connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/defira)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/defira.yml)

## ℹ️ Exchange Info

**Defira**
[Website](https://defira.com/) | [CoinMarketCap](https://coinmarketcap.com/currencies/defira/) | [CoinGecko](https://www.coingecko.com/en/coins/fira)

* API docs: <https://docs.defira.com/>

## 🕸️ Supported Chains and Networks

### Harmony

* [mainnet](/gateway/chains/harmony)
* [testnet](/gateway/chains/harmony)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect defira` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Defira and a different exchange.
4. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

See [Harmony](/gateway/chains/ethereum/#harmony) for more information about the default configuration settings and how to change them.
