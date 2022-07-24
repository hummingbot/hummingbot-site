---
tags:
- amm exchange connector
- avalanche dex
---

# `pangolin`

The Pangolin connector in [Gateway](/gateway) is responsible for all on-chain operations (e.g. fetching prices and creating swap transactions).

It interfaces with the [`GatewayEVMAMM`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/gateway_EVM_AMM.py) class in the Hummingbot client, which is responsible for interfacing with all EVM-based Gateway AMMs.

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/pangolin)

## ℹ️ Exchange Info

**Pangolin**
[Website](https://pangolin.exchange/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/pangolin/) | [CoinGecko](https://www.coingecko.com/en/exchanges/pangolin)

* API docs: <https://github.com/pangolindex/pangolin-api>
* SDK: <https://github.com/pangolindex/sdk>
* FAQ: <https://pangolin.exchange/faq/>

## 🔗 Supported Chains

* [Avalanche](/gateway/chains/ethereum/#avalanche)

## 👷 Developer

Added by CoinAlpha in [v1.4.0](/release-notes/1.4.0/)

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container, but **DO NOT** run `gateway connect pangolin` yet.
2. Run `gateway config avalanche.networks.avalanche.nodeURL` and enter your desired Node RPC provider or use the default. If using fuji, run `gateway config avalanche.networks.fuji.nodeURL` and enter your desired Node RPC provider.
3. Now, run `gateway connect pangolin` and add your Avalanche wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
4. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Pangolin and a different exchange.
5. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

### Using the Public API nodes

The public API server is at `api.avax.network` for **Avalanche Mainnet** and `api.avax-test.network` for **Avalanche Fuji Testnet**.
Use the following end points for each chain respectively:

### HTTP

* For C-Chain API, the URL is <https://api.avax.network/ext/bc/C/rpc>.
* For X-Chain API, the URL is <https://api.avax.network/ext/bc/X>.
* For P-Chain API, the URL is <https://api.avax.network/ext/bc/P>.

Note: on Fuji Testnet, use <https://api.avax-test.network/> instead of <https://api.avax.network/>.

### WebSocket

* For C-Chain API, the URL is wss://api.avax.network/ext/bc/C/ws.

Note: on Fuji Testnet, the URL is wss://api.avax-test.network/ext/bc/C/ws.
