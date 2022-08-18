---
tags:
- amm exchange connector
- avalanche dex
---

# `traderjoe`

The TraderJoe connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/traderjoe)

## ℹ️ Exchange Info

**TraderJoe**
[Website](https://traderjoexyz.com/trade/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/traderjoe/) | [CoinGecko](https://www.coingecko.com/en/exchanges/traderjoe)

* API docs: <https://docs.traderjoexyz.com/en/security-and-contracts/api-beta>
* SDK: <https://github.com/traderjoe-xyz/joe-sdk>
* FAQ: <https://docs.traderjoexyz.com/en/welcome/faq-and-help>

## 🔗 Supported Chains

* [Avalanche](/gateway/chains/ethereum/#avalanche)

## 👷 Developer

Added by CoinAlpha in [v1.5.0](/release-notes/1.5.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect traderjoe` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Trader Joe and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Avalanche](/gateway/chains/ethereum/#avalanche) for more information about the default configuration settings and how to change them.
