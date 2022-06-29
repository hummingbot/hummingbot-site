---
tags:
- gateway
- gateway-v2
---

!!! note
    Gateway-V2 takes an exchange-first approach that makes building DEX connectors much easier for developers. There exists [an earlier version of Gateway](https://github.com/CoinAlpha/gateway-api) compatible with pre-1.0 Hummingbot releases that has been deprecated and is no longer supported.

## What is Gateway-V2?

Hummingbot Gateway-V2, henceforth called **Gateway**, is API middleware that allows Hummingbot to connect to decentralized exchanges
on various blockchain protocols. Gateway lets you run a single trading bot that can operate on both CEXs and DEXs, enabling more creative and powerful strategies.

See [History](./history) for more information about Gateway's history, background, and intended developer experience.

## Using Gateway

See [Setting up Gateway](./setup) for instructions on how to use Gateway from a non-technical trader's perspective.

See [Developers - Gateway](/developers/gateway) for how to set up Gateway from source, add DEX connectors, configure custom tokens, and other developer-oriented tasks.

## DEXs and chains supported

Gateway supports multiple blockchains and multiple decentralized exchange models

Currently, it supports the following blockchains:

* [Ethereum and EVM Chains](./ethereum)
* [Solana](./solana)

Currently, it supports the following DEX types:

 * [AMM](./exchanges): Automated Market Maker exchanges similar to Uniswap V2, Uniswap V3, and Perpetual Protocol
 * [CLOB](./exchanges): Automated Market Maker exchanges similar to Serum and Mango Markets

!!! note "CLOB DEXs with Python SDKs"
    As an alternative to building a Gateway connector, CLOB DEXs with Python SDKs and centralized exchange-like API interfaces can choose to integrate directly into the standard Hummingbot client. See [dYdX](/exchanges/dydx-perpetual/) for an example of an perpetual futures DEX connector, and [Loopring](/exchanges/loopring/) for an example of a spot DEX connector.

## Adding connectors

### Developer Tutorial

See [Building Gateway Connectors](/developers/gateway/building-gateway-connectors/) for a step-by-step guide for adding a connector to a Uniswap-like AMM on an EVM-compatible chain).

## API Interfaces

See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.