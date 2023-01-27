---
tags:
- amm exchange connector
- ethereum dex
---

# `Ref Finance`

The Ref Finance connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/ref)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/ref.yml)

## ℹ️ Exchange Info

**Ref Finance** [Website](https://www.ref.finance/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/ref-finance/) | [CoinGecko](https://www.coingecko.com/en/exchanges/ref_finance)

* API docs:
* SDK: <https://github.com/ref-finance/ref-sdk>
* FAQ: <https://guide.ref.finance/>

## 🕸️ Supported Chains and Networks

### Near Protocol

* [mainnet](/gateway/chains/near)
* [testnet](/gateway/chains/near)

## 👷 Developer

Added by CoinAlpha in [v1.10.0](/release-notes/1.10.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect ref` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Near Protocol](/gateway/chains/near) for more information about the default configuration settings and how to change them.
