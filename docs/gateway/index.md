# Hummingbot Gateway

## What is Gateway?

Hummingbot Gateway is a versatile API server that standardizes interactions with blockchain networks and decentralized exchanges (DEXs). It acts as a middleware layer, providing a unified interface for performing actions like checking balances, executing trades, and managing wallets across different protocols.

Gateway is a companion service to the [Hummingbot client](https://github.com/hummingbot/hummingbot), exposing standardized REST API endpoints for trading and liquidity-related functionality on DEXs. This enables Hummingbot to run strategies that operate across both centralized (CEX) and decentralized exchanges seamlessly.

## Key Features

- **Standardized REST API**: Consistent endpoints for interacting with blockchains (Ethereum, Solana) and DEXs
- **Three Trading Types**: Router (DEX aggregators), AMM (V2-style pools), and CLMM (V3-style concentrated liquidity)
- **Modular Architecture**: Clear separation of concerns with distinct modules for chains, connectors, configuration, and wallet management
- **TypeScript-based**: Leverages the TypeScript ecosystem and popular libraries like Fastify, Ethers.js, and Solana/web3.js
- **Security**: Built-in rate limiting and encrypted wallet storage
- **Extensible**: Easily extended with new chains and connectors

## Core Technologies

- **Backend**: Node.js, TypeScript, Fastify
- **Blockchain Interaction**: Ethers.js (Ethereum), @solana/web3.js (Solana)
- **Package Manager**: pnpm
- **Testing**: Jest (75% minimum coverage requirement)
- **API Documentation**: Swagger/OpenAPI

## Supported Networks and DEXs

### Blockchain Networks

| Chain | Networks | Description |
|-------|----------|-------------|
| **Ethereum/EVM** | mainnet, arbitrum, optimism, base, sepolia, bsc, avalanche, celo, polygon | Ethereum and EVM-compatible chains |
| **Solana** | mainnet-beta, devnet | High-performance blockchain with sub-second finality |

### DEX Protocols

| Protocol | Chain | Router | AMM | CLMM | Description |
|----------|-------|--------|-----|------|-------------|
| **Jupiter** | Solana | ✅ | ❌ | ❌ | Leading DEX aggregator on Solana |
| **Meteora** | Solana | ❌ | ❌ | ✅ | Dynamic Liquidity Market Maker (DLMM) |
| **Raydium** | Solana | ❌ | ✅ | ✅ | Full-featured DEX with V2 AMM and V3 CLMM |
| **Uniswap** | Ethereum/EVM | ✅ | ✅ | ✅ | Complete V2, V3, and Smart Order Router |
| **0x** | Ethereum/EVM | ✅ | ❌ | ❌ | Professional DEX aggregator with RFQ system |

### Trading Types Explained

- **Router**: DEX aggregators that find optimal swap routes across multiple liquidity sources
- **AMM**: Traditional V2-style constant product pools (x*y=k) with simple liquidity provision
- **CLMM**: V3-style concentrated liquidity pools with capital efficiency through custom price ranges

## Quick Start

### Installation

Gateway can be installed from source or using Docker:

```bash
# Clone the repository
git clone https://github.com/hummingbot/gateway.git
cd gateway

# Install with pnpm
pnpm install
pnpm build

# Start Gateway (development mode)
pnpm start --passphrase=<PASSPHRASE> --dev
```

For detailed installation instructions, see [Installation & Setup](installation.md).

### API Documentation

When running Gateway, access the interactive Swagger API documentation at:
- Development mode: <http://localhost:15888/docs>
- Production mode: <https://localhost:15888/docs>

## Architecture Overview

Gateway follows a modular architecture with clear separation of concerns:

```
/src
├── chains/               # Blockchain-specific implementations
├── connectors/           # DEX-specific implementations
│   ├── {dex}/           # Each DEX connector directory
│   │   ├── router-routes/   # DEX aggregator operations
│   │   ├── amm-routes/      # AMM pool operations
│   │   └── clmm-routes/     # Concentrated liquidity operations
├── services/             # Core services (config, logging, tokens)
├── schemas/              # API request/response schemas
└── wallet/               # Wallet management
```

## Documentation Guide

- **[Installation & Setup](installation.md)**: Complete installation guide for source and Docker
- **[Configuration](configuration.md)**: How to configure chains, connectors, and settings
- **[API Commands](commands.md)**: Comprehensive reference of all API endpoints
- **[Blockchain Support](chains.md)**: Detailed information about supported chains
- **[DEX Connectors](connectors.md)**: Guide to all supported DEX protocols
- **[Strategies & Scripts](strategies.md)**: Using Gateway with Hummingbot strategies

## Version History

Gateway is currently on version 2.8.0, featuring:
- Refactored architecture with flexible route schemas
- Support for Solana and EVM chains
- Five major DEX connectors (Jupiter, Meteora, Raydium, Uniswap, 0x)
- Improved performance and reliability

The [Gateway repository](https://github.com/hummingbot/gateway) is open sourced under the Apache 2.0 license and follows the same [release cycle](/release-notes) as the main Hummingbot client.

## Governance and Maintenance

### Connector Maintenance

Like other connectors, Gateway DEX connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

Each quarter, [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which exchange connectors should be included in the codebase going forward. This process also determines which blockchains and networks that Gateway supports.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

### Refactoring Status

!!! note
    Gateway is currently undergoing a large multi-release codebase refactoring, approved in proposal [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c). During this refactoring process, not all connectors are available in the new version, as they are being gradually migrated from the legacy architecture.

## Contributing

Gateway is part of the open source Hummingbot project. Ways to contribute:

- **Add new connectors**: See [DEX Connectors](/gateway/connectors#adding-custom-connectors) for implementation guide
- **Submit proposals**: New connectors may be contributed via [New Connector Proposals](/governance/proposals)
- **File issues**: Report bugs at [GitHub Issues](https://github.com/hummingbot/gateway/issues)
- **Submit pull requests**: Contribute code at [GitHub](https://github.com/hummingbot/gateway/pulls)
- **Edit documentation**: Improve docs at [GitHub](https://github.com/hummingbot/hummingbot-site/)
- **Vote in polls**: Participate in quarterly [polls](https://snapshot.org/#/hbot.eth) for new DEX support

## Resources

- [Gateway GitHub Repository](https://github.com/hummingbot/gateway)
- [Hummingbot Documentation](https://docs.hummingbot.org)
- [Discord Community](https://discord.gg/hummingbot)
- [YouTube Channel](https://www.youtube.com/c/hummingbot)

## History

For more information about Gateway's history and architecture decisions, see:

* [Hummingbot Gateway V2 Architecture - Part 1](/blog/hummingbot-gateway-architecture---part-1/)
* [Hummingbot Gateway V2 Architecture - Part 2](/blog/hummingbot-gateway-architecture---part-2/)