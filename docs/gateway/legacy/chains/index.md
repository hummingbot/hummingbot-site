Chain connectors integrate a Layer 1 blockchain and their networks into [Gateway](/gateway), enabling wallet access, node RPC interactions, and other support needed by DEXs supported by Gateway. Each connector is customized for a particular blockchain's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

## Connector Governance

Each quarter, [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward top exchanges and determines which exchanges should be included in the codebase going forward. Exchange connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create. 

Chain connector support is determined by the exchanges included in the current [Epoch](/governance/epochs). Each exchange's trading types and supported networks are included in each subsequent release of Hummingbot and Gateway.

## Chain Types

Hummingbot Gateway supports three main types of blockchain architectures:

1. **EVM (Ethereum Virtual Machine)**: Chains that are compatible with Ethereum's virtual machine, allowing for easy porting of Ethereum smart contracts and DApps. These chains share similar development tools and standards.

2. **Non-EVM**: Chains with their own unique architecture and virtual machines, requiring specialized development tools and standards.

3. **Solana**: A unique blockchain architecture known for its high performance and low transaction costs, with its own programming model and development ecosystem.

## List of Chain Connectors

Here are the current chain connectors in the codebase:

| Chain | Type | Exchange Supported |
|----------|------|-----------|
| [Ethereum](/chains/ethereum) | EVM | Uniswap, Balancer, Carbon, Curve, Sushiswap |
| [Algorand](/chains/algorand) | Non-EVM | Tinyman |
| [Avalanche](/chains/avalanche) | EVM | TraderJoe |
| [BNB Chain](/chains/bnb-chain) | EVM | Pancakeswap |
| [Cosmos](/chains/cosmos) | Non-EVM | Osmosis |
| [Cronos](/chains/cronos) | Non-EVM | Mad Meerkat, VVS |
| [Ethereum Classic](/chains/ethereum-classic) | EVM | ETCSwap |
| [Osmosis](/chains/osmosis-chain) | Non-EVM | Osmosis |
| [Polygon](/chains/polygon) | EVM | Quickswap |
| [Solana](/chains/solana) | Solana | Jupiter |

## Chain Details

### EVM Chains

#### Ethereum
- The original smart contract platform
- Home to major DeFi protocols like Uniswap and Sushiswap
- Supports multiple networks: mainnet, arbitrum_one, optimism, goerli
- High gas fees on mainnet, but layer 2 solutions available

#### Avalanche
- High-performance EVM chain with sub-second finality
- Supports networks: avalanche, fuji (testnet)
- Home to TraderJoe, a leading DEX on Avalanche

#### BNB Chain
- Formerly Binance Smart Chain
- Supports networks: mainnet, testnet
- Home to Pancakeswap, one of the largest DEXs by volume

#### Polygon
- Layer 2 scaling solution for Ethereum
- Supports networks: mainnet, mumbai (testnet)
- Home to Quickswap, a leading DEX on Polygon

### Non-EVM Chains

#### Algorand
- Pure proof-of-stake blockchain
- Home to Tinyman, a leading AMM on Algorand
- Known for high performance and low transaction costs

#### Cosmos
- Interoperable blockchain ecosystem
- Supports the Osmosis DEX
- Uses the Cosmos SDK and IBC protocol

#### Cronos
- EVM-compatible chain built on Cosmos
- Home to Mad Meerkat and VVS Finance
- Bridges Ethereum and Cosmos ecosystems

#### Osmosis
- Specialized Cosmos chain for DEX operations
- Home to the Osmosis DEX
- Focused on AMM and concentrated liquidity features

### Solana

#### Solana
- High-performance blockchain with sub-second finality
- Supports networks: mainnet-beta, devnet
- Home to Jupiter, a leading DEX aggregator
- Known for extremely low transaction costs

## Getting Started

To use these chain connectors:

1. Install [Gateway](/gateway/installation)
2. Generate certificates and connect Gateway to Hummingbot
3. Connect your wallet using the appropriate chain connector
4. Start trading on supported DEXs

For detailed instructions on connecting to specific chains and DEXs, see the individual chain documentation pages linked in the table above.
