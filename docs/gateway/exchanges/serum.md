---
tags:
- clob exchange connector
- solana dex
---

# `serum`

The Serum connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewaySOLCLOB` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

* [Hummingbot - GatewaySOLCLOB](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/connector/gateway/clob/gateway_sol_clob.py)
* [Gateway V2 - CLOB Routes](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/clob/clob.routes.ts)
* [Gateway V2 - Serum-Like Controller](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/serum/serum.controllers.ts)
* [Gateway V2 - Serum Class](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/serum/serum.ts)

## ℹ️ Exchange Info

**Serum**
[Website](https://www.projectserum.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/serum-dex/) | [CoinGecko](https://www.coingecko.com/en/exchanges/serum_dex)

* API docs: <https://github.com/project-serum/serum-ts/tree/master/packages/serum>
* SDK: <https://github.com/project-serum/serum-ts/tree/master/packages/serum>
* FAQ: <https://docs.projectserum.com/serum-ecosystem/help>

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect serum` and add your Solana wallet to Gateway V2 for trading on Serum.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Serum and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Solana](/gateway/chains/solana) for more information about configuring the Solana blockchain.
