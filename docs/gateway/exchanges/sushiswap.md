---
tags:
- amm exchange connector
- ethereum dex
---

# `sushiswap`

The SushiSwap connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/sushiswap)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/sushiswap.yml)


## ℹ️ Exchange Info

**Sushiswap**
[Website](https://app.sushi.com/swap/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/sushiswap/) | [CoinGecko](https://www.coingecko.com/en/exchanges/sushiswap)

* API docs: <https://docs.sushi.com/api/furo>
* SDK: <https://github.com/sushiswap/sdk>
* FAQ: <https://docs.sushi.com/docs/FAQ/General%20FAQ>

## 🕸️ Supported Chains and Networks

### Ethereum
* [mainnet](/gateway/chains/ethereum/#mainnet-mainnet)
* [kovan](/gateway/chains/ethereum/#kovan-testnet)
* [ropsten](/gateway/chains/ethereum/#ropsten-testnet)

## 👷 Developer

Added by Faouzijedidi1 in [v1.5.0](/release-notes/1.5.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect sushiswap` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Ethereum](/gateway/chains/ethereum) for more information about the default configuration settings and how to change them.
