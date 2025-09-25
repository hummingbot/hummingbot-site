## What is Gateway?

Hummingbot Gateway is a Typescript-based API server that standardizes interactions with blockchain networks and decentralized exchanges (DEXs). It acts as a middleware layer, providing a unified interface for performing actions like checking balances, executing trades, and managing wallets across different protocols.

Gateway is a companion service to the Python-based [Hummingbot client](https://github.com/hummingbot/hummingbot), exposing standardized REST API endpoints for trading and liquidity-related functionality on DEXs. This enables Hummingbot to run strategies that operate across both centralized (CEX) and decentralized exchanges seamlessly.

## In This Section

- **[Installation & Setup](installation.md)**: Complete installation guide for source and Docker
- **[Configuration](configuration.md)**: How to configure chains, connectors, and settings
- **[Commands](commands.md)**: Comprehensive reference of all Gateway-related Hummingbot commands
- **[Chains](chains.md)**: Detailed information about supported chains
- **[DEX Connectors](connectors.md)**: Guide to all supported DEX in Gateway
- **[Strategies & Scripts](strategies.md)**: Using Gateway with Hummingbot strategies

## Key Features

- **Standardized REST API**: Consistent endpoints for interacting with blockchains (Ethereum, Solana) and DEXs
- **DEX SDK Integration**: Interfaces with TypeScript/JavaScript DEX SDKs to provide standardized endpoints across different protocols
- **Connector Sub-Types**: Router (DEX aggregators), AMM (V2-style pools), and CLMM (V3-style concentrated liquidity)
- **Modular Architecture**: Clear separation of concerns with distinct modules for chains, connectors, configuration, and wallet management
- **Hardware Wallet Support**: Built-in support for hardware wallets and encrypted storage for regular wallets
- **Extensible**: Easily extended with new chains and connectors

### Connector Schemas

- **Router**: DEX aggregators that find optimal swap routes across multiple liquidity sources, maximizing execution quality by splitting trades across multiple pools and protocols
- **AMM** (Automated Market Maker): Traditional V2-style constant product pools using the x*y=k formula, where liquidity is distributed uniformly across the entire price range, making it simpler but less capital efficient
- **CLMM** (Concentrated Liquidity Market Maker): V3-style pools that allow liquidity providers to concentrate their capital within custom price ranges, dramatically improving capital efficiency and enabling better pricing for traders

For detailed implementation guides and examples for each schema, see [DEX Connectors](connectors.md).

## Installation

Gateway can be installed alongside [Hummingbot](https://github.com/hummingbot/hummingbot) to enable trading on AMM DEXs, or as a standalone API server. For detailed installation instructions, see [Installation & Setup](installation.md).

When running Gateway in `DEV` mode, access the interactive Swagger API documentation at: <http://localhost:15888/docs>

## Architecture

Gateway follows a modular architecture with clear separation of concerns:

```
/src
├── chains/               # Blockchain-specific implementations
│   └── {chain}/         # Each blockchain (ethereum, solana, etc.)
├── connectors/           # DEX-specific implementations
│   ├── {dex}/           # Each DEX connector directory
│   │   ├── router-routes/   # DEX aggregator operations
│   │   ├── amm-routes/      # AMM pool operations
│   │   └── clmm-routes/     # Concentrated liquidity operations
├── services/             # Core services (config, logging, tokens)
├── schemas/              # API request/response schemas
├── templates/            # Base classes and interfaces for connectors
├── tokens/               # Token lists and metadata
├── pools/                # Liquidity pool configurations
└── wallet/               # Wallet management
```

## Governance and Maintenance

Like other connectors, Gateway DEX connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

Each quarter, [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which exchange connectors should be included in the codebase going forward. This process also determines which blockchains and networks that Gateway supports.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## Contributing

Gateway is part of the open source Hummingbot project. Ways to contribute:

- **Build new connectors**: See [DEX Connectors](/developers/gateway-connectors/) for implementation guide
- **File issues**: Report bugs at [GitHub Issues](https://github.com/hummingbot/gateway/issues)
- **Submit pull requests**: Contribute code at [GitHub](https://github.com/hummingbot/gateway/pulls)
- **Edit documentation**: Improve docs at [GitHub](https://github.com/hummingbot/hummingbot-site/)
- **Vote in polls**: Participate in [polls](https://snapshot.org/#/hbot.eth) to vote on which DEXs are supported

## History

For more information about Gateway's history and architecture decisions, see:

* [Hummingbot Gateway V2 Architecture - Part 1](/blog/hummingbot-gateway-architecture---part-1/)
* [Hummingbot Gateway V2 Architecture - Part 2](/blog/hummingbot-gateway-architecture---part-2/)