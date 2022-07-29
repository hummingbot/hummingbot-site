---
tags:
- clob exchange connector
- solana dex
---

!!! note
    Gateway V2 comes with Solana's public RPC URL by default, which is good enough for short-term testing. But for real trading bots, you should configure your own node URL (e.g. via Moralis Speedy Nodes) which gives you higher API request rate limits.


# `serum`

The Serum protocol connector is managed by Gateway V2 - where the Gateway is now responsible for all on-chain operations (e.g. fetching prices and creating trade transactions), and the `GatewaySOLCLOB` class on Hummingbot side is responsible for interfacing with Gateway V2.

## 📁 Folders

* [Hummingbot - AMM ARB](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/strategy/amm_arb/amm_arb.py)
  * Although Serum is CLOB compatible, initially it will be supported by the AMM ARB strategy.
* [Hummingbot - GatewaySOLCLOB](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/connector/gateway/clob/gateway_sol_clob.py)
* [Gateway V2 - CLOB Routes](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/clob/clob.routes.ts)
* [Gateway V2 - Serum-Like Controller](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/serum/serum.controllers.ts)
* [Gateway V2 - Serum Class](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/serum/serum.ts)

## ℹ️ Exchange Info

**Serum**
[Website](https://www.projectserum.com/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/serum/) | [CoinGecko](https://www.coingecko.com/en/exchanges/serum/)

* API docs: https://github.com/project-serum/serum-ts/tree/master/packages/serum
* SDK: https://github.com/project-serum/serum-ts/tree/master/packages/serum
* FAQ: https://docs.projectserum.com/serum-ecosystem/help

## 👷 Maintenance

* Maintainer: Hummingbot

## 🔑 Setup

1. Follow the instructions to install and run [Hummingbot Gateway V2](/gateway/).
2. Run `gateway connect serum` and add your Solana wallet to Gateway V2 for trading on Serum.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Serum and a different exchange.
4. Run `start` to start the strategy, and you're trading!
