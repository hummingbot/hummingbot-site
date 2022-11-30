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

## Supported Decentralized Exchanges

Gateway supports the following types of decentralized exchanges (DEX):

- **AMM**: Automatic Market Maker (AMM) DEXs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMM DEXs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMM DEXs that trade perpetual futures, similar to [Perpetual Protocol](https://docs.perp.fi/)

See [Exchanges](./exchanges) for a list of currently supported venues.

## Supported Blockchains

**Ethereum and EVM Layer 2 networks**

- [Ethereum](./chains/ethereum)
- [Arbitrum](./chains/ethereum#arbitrum_one-mainnet)
- [Optimism](./chains/ethereum#optimism-mainnet)

**Other chains**

- [Avalanche](./chains/avalanche)
- [BNB Chain](./chains/bnb-chain)
- [Cronos](./chains/cronos)
- [Harmony](./chains/harmony)
- [NEAR](./chains/near)
- [Polygon](./chains/polygon)

<!-- - [Solana](./chains/solana) (In progress) -->

## Building Gateway Connectors

- [Setup](/developers/gateway/setup): Install and configure Gateway from a developer's standpoint
- [Testing](/developers/gateway/testing): How to test Gateway connectors
- [Gateway API Interfaces](/developers/gateway/api-interface): API interfaces for different DEX types supported by Gateway
- [Building Gateway Connectors](/developers/gateway/building-gateway-connectors): Step-by-step guide to adding DEX connectors to Gateway
- [Running AMM-ARB with Gateway](/developers/gateway/running-amm-arb): Developer-oriented tutorial that shows you how to test out the [`amm-arb`](/strategies/amm-arbitrage) strategy with Gateway
