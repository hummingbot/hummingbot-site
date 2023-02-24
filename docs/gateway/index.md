## What is Gateway?

Hummingbot Gateway, sometimes called Gateway-V2, is standalone API middleware that helps Hummingbot and other trading clients to connect to decentralized exchanges (DEX) on various blockchain networks. Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs.

See the following blog posts from CoinAlpha CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](https://blog.hummingbot.org/gateway-v2-code-architecture/)
* [Hummingbot Gateway V2 Architecture - Part 2](https://blog.hummingbot.org/gateway-architecture-part-2/)

!!! note
    [Gateway-V1](https://github.com/CoinAlpha/gateway-api) is a deprecated version of Gateway compatible with pre-1.0 Hummingbot releases that is no longer supported.

## Using Gateway
- [Installation](./installation)
- [Setup and Configuration](./setup)
- [Testing with Postman](/developers/gateway/testing)
- [Running AMM-ARB](/developers/gateway/running-amm-arb)
- [Adding Connectors](/developers/gateway/building-gateway-connectors)

## Supported Chains

- [Ethereum](./chains/ethereum)
- [Arbitrum](./chains/ethereum#arbitrum_one-mainnet)
- [Optimism](./chains/ethereum#optimism-mainnet)
- [Avalanche](./chains/avalanche)
- [BNB Chain](./chains/bnb-chain)
- [Polygon](./chains/polygon)
- [Cosmos](./chains/cosmos)
- [NEAR](./chains/near)
- [Cronos](./chains/cronos)
- [Harmony](./chains/harmony)
<!-- - [Solana](./chains/solana) (In progress) -->
