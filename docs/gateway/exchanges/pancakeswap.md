---
tags:
- amm exchange connector
- ethereum dex
---

# `pancakeswap`

The PancakeSwap connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/pancakeswap)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/pancakeswap.yml)

## ℹ️ Exchange Info

**PancakeSwap** [Website](https://pancakeswap.finance/) | [CoinMarketCap](https://coinmarketcap.com/currencies/pancakeswap/) | [CoinGecko](https://www.coingecko.com/en/exchanges/pancakeswap)

* API docs: https://github.com/pancakeswap/pancake-info-api/blob/develop/v2-documentation.md
* SDK: https://github.com/pancakeswap/pancake-frontend/tree/develop/packages/swap-sdk
* FAQ: https://docs.pancakeswap.finance/help/faq

## 🕸️ Supported Chains and Networks

### Binance Smart Chain

* [mainnet](/gateway/chains/binance-smart-chain)
* [testnet](/gateway/chains/binance-smart-chain)

## 👷 Developer

Added by vic-en in [v1.10.0](/release-notes/1.10.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect pancakeswap` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Binance Smart Chain](/gateway/chains/binance-smart-chain) for more information about the default configuration settings and how to change them.