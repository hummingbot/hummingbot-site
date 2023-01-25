---
tags:
- amm exchange connector
- ethereum dex
---

# `uniswap` and `uniswapLP`

The Uniswap connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with EVM-based AMMs.

In addition, the `uniswapLP` connector interfaces with the [`GatewayEVMAMMLP`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with liquidity provision-related functions in EVM-based AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/uniswap)

## 📁 [Config template](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/uniswap.yml)

## ℹ️ Exchange Info

**Uniswap**
[Website](https://uniswap.org/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/uniswap-v2/) | [CoinGecko](https://www.coingecko.com/en/exchanges/uniswap_v2)

* API docs: <https://docs.uniswap.org/protocol/V2/introduction>
* SDK: <https://docs.uniswap.org/sdk/introduction>
* Fees: <https://docs.uniswap.org/concepts/protocol/fees>

## 👷 Maintenance

* Maintainer: Hummingbot Foundation

## 🕸️ Supported Chains and Networks

### Ethereum

* [mainnet](/gateway/chains/ethereum/#mainnet-mainnet)
* [kovan](/gateway/chains/ethereum/#kovan-testnet)
* [ropsten](/gateway/chains/ethereum/#ropsten-testnet)
* [arbitrum_one](/gateway/chains/ethereum/#arbitrum)
* [optimism](/gateway/chains/ethereum/#optimism-mainnet)

### Polygon

* [mainnet](/gateway/chains/polygon)
* [mumbai](/gateway/chains/polygon)

## 👷 Developer

* The `uniswap` connector was added by CoinAlpha in [v1.4.0](/release-notes/1.4.0/)
* The `uniswapLP` connector was added by CoinAlpha in [v1.6.0](/release-notes/1.6.0/)

## 🔑 Setup

### Swapping tokens

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect uniswap` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Uniswap and a different exchange.
4. Run `start` to start the strategy!

### Adding and removing concentrated liquidity ranges

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect uniswapLP` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create a [Uniswap-V3 LP](/strategies/uniswap-v3-lp/) strategy to create and dynamically adjust a Uniswap-V3 LP position factoring in market price and volatility.
4. Run `start` to start the strategy!

## No auto-wrapping

Gateway does not auto-wrap tokens by default, so users need to wrap native tokens into ERC-20 tokens before using them with Gateway. As of the `v1.4.0` release, there is no error message that lets you know if the token can't be used when it's not wrapped and instead will just display ``"Markets are not ready"`` but we are working on adding more informative messages within the next few releases.

## 📘 Additional Resources

See [Ethereum](/gateway/chains/ethereum) for more information about the default configuration settings and how to change them.
