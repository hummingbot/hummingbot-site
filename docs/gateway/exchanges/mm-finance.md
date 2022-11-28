---
tags:
- amm exchange connector
- ethereum dex
---

# `Mad Meerkat Finance`

The Mad Meerkat Finance connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/mad_meerkat)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/mad_meerkat.yml)

## ℹ️ Exchange Info

**Mad Meerkat Finance** [Website](https://mm.finance) | [CoinMarketCap](https://coinmarketcap.com/exchanges/mm-finance/) | [CoinGecko](https://www.coingecko.com/en/exchanges/mm_finance)

* API docs:
* SDK: 
* FAQ: https://mmfinance.gitbook.io/docs/troubleshooting-errors

## 🕸️ Supported Chains and Networks

### Cronos

* [mainnet](/gateway/chains/cronos)
* [testnet](/gateway/chains/cronos)

## 👷 Developer

Added by CoinAlpha in [v1.10.0](/release-notes/1.10.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect mad-meerkat` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Cronos](/gateway/chains/cronos) for more information about the default configuration settings and how to change them.
