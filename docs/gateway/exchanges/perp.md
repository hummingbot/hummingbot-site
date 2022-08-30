---
tags:
- amm exchange connector
- perp amm dex
---

# `Perpetual Protocol`

The Defi Kingdoms connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/perp)

## ℹ️ Exchange Info

**Perpetual Protocol**
[Website](https://perp.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/perpetual-protocol/) | [CoinGecko](https://www.coingecko.com/en/exchanges/perpetual_protocol)

* API docs: <https://perp.com/developers>
* SDK: <https://github.com/perpetual-protocol/sdk-curie>
* DOC: <https://support.perp.com/hc/en-us>

## 🕸️ Supported Chains and Networks

### Ethereum

* [optimism](/gateway/chains/ethereum/#optimism-mainnet)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect perp` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Run `create` to create a [Spot-Perp Arbitrage](/strategies/spot-perpetual-arbitrage/) strategy between Perpetual Protocol and a spot exchange.
4. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

See [Ethereum](/gateway/chains/ethereum/) for more information about the default configuration settings and how to change them.
