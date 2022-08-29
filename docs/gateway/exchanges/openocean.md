---
tags:
- amm exchange connector
- avalanche dex
---

# `openocean`

The Openocean connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/openocean)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/openocean.yml)

## ℹ️ Exchange Info

**Openocean**
[Website](https://openocean.finance/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/openocean/) | [CoinGecko](https://www.coingecko.com/en/exchanges/openocean_finance)

* API docs: <https://github.com/openocean-finance/openocean-api>
* SDK: <https://github.com/openocean-finance/openocean-api-sdk>
* DOC: <https://docs.openocean.finance/>

## 🕸️ Supported Chains and Networks

### Avalanche
* [avalanche](/gateway/chains/ethereum/#avalanche-mainnet)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect openocean` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Openocean and a different exchange.
4. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

See [Avalanche](/gateway/chains/ethereum/#avalanche) for more information about the default configuration settings and how to change them.
