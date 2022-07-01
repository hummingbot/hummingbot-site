---
tags:
- gateway
- gateway-v2
---

!!! note
    Gateway-V2 takes an exchange-first approach that makes building DEX connectors much easier for developers. There exists [an earlier version of Gateway](https://github.com/CoinAlpha/gateway-api) compatible with pre-1.0 Hummingbot releases that has been deprecated and is no longer supported.

## What is Gateway-V2?

Hummingbot Gateway-V2, henceforth called **Gateway**, is API middleware that allows Hummingbot to connect to decentralized exchanges (DEX) on various blockchain protocols. 

Gateway lets you create a trading bot that can operate on both DEXs as well as centralized exchanges (CEXs), enabling users to access cross-exchange liquidity provision and arbitrage opportunities, as well as to create their own customized strategies and scripts.

See [History](./history) for more information about Gateway's history, background, and intended developer experience.

## Using Gateway

See [Setting up Gateway](./setup) for instructions on how to launch and use Gateway from the Hummingbot client interface.

See [Setting up Gateway - Developers](/developers/gateway/setup) for instructions on how to install Gateway from source so that you can add DEX connectors, configure custom tokens, and perform other developer-oriented tasks.

## Supported DEXs

### AMM

Gateway supports the following types of Automatic Market Maker (AMM) DEXs:

- **AMM**: AMMs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMMs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMMs that trade perpetual futures, similar to [Perpetual Protocol](https://docs.perp.fi/)

See [AMM DEXs](./exchanges/amm) for a list of currently supported venues.

### CLOB

Gateway plans to support the following types of Central Limit Order Book (CLOB) DEXs:

- **CLOB**: CLOB DEXs similar to [Serum](https://docs.projectserum.com/)
- **Margin CLOB**: CLOB DEXs that support margin accounts, similar to [Mango Markets](https://docs.mango.markets/)
- **Perpetual CLOB**: CLOB DEXs that support trade perpetual futures 

See [CLOB DEXs](./exchanges/clob) for a list of currently supported venues.

## Supported Blockchains

* [Ethereum and EVM Chains](./chains/ethereum)
* [Solana](./chains/solana) (In progress)

## Adding Gateway Connectors

### Developer Tutorial

See [Building Gateway Connectors](/developers/gateway/building-gateway-connectors/) for a step-by-step guide for adding a connector to a Uniswap-like AMM on an EVM-compatible chain).

### API Interfaces

See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.