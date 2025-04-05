Chain connectors integrate a Layer 1 blockchain and their mainnet, testnet, and Layer 2 networks into [Gateway](/gateway), enabling wallet access, node RPC interactions, and other support needed by DEXs supported by Gateway. 

Each chain connector is customized for a particular blockchain's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

## New vs Legacy

Legacy Gateway (v2.2 and before) supported a wide range of chains and their networks including Ethereum, Algorand, Avalanche, BNB Chain, Cosmos, Cronos, Ethereum Classic, Osmosis, Polygon, and Solana. However, its inflexible route architecture tight coupling with the Hummingbot client made it difficult to support more types of trading interactions.

The new version of Gateway (v2.5+) is more flexible and chain-agnostic and initially supports only a few base chain architectures (Solana and Ethereum). It aims to support any network that is compatible with these chain-specific virtual machines, including both Layer 1 and Layer 2 networks. 

## What Determines Chain Inclusion?

Chain support is determined by the decentralized exchanges (DEX) that HBOT holders vote to be included in the Hummingbot codebase in quarterly [Exchange Connector Polls](/governance/polls). The main chains and networks where each DEX is deployed will be supported in subsequent releases of Hummingbot and Gateway.

New DEX connectors and their chains may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Here are the chains supported in the Gateway codebase for current [Epoch](/governance/epochs), and whether or not they have been upgraded to the new Gateway architecture.

| Layer 1 Chain | Networks | Legacy/New | Exchanges Supported |
|----------|----------|------------|-----------|
| [Solana](solana.md) | mainnet-beta, devnet | New | [Jupiter](/exchanges/gateway/jupiter), [Meteora](/exchanges/gateway/meteora), [Raydium](/exchanges/gateway/raydium) |
| [Ethereum](ethereum.md) | mainnet, arbitrum, base, optimism, sepolia | Legacy | [Uniswap](/exchanges/gateway/uniswap), [Balancer](/exchanges/gateway/balancer), [Carbon](/exchanges/gateway/carbon), [Curve](/exchanges/gateway/curve), [Sushiswap](/exchanges/gateway/sushiswap) |
| [Algorand](algorand.md) | mainnet, testnet | Legacy | [Tinyman](/exchanges/gateway/tinyman) |
| [Avalanche](avalanche.md) | avalanche, fuji | Legacy | [Trader Joe](/exchanges/gateway/traderjoe) |
| [BNB Chain](bnb-chain.md) | mainnet, testnet | Legacy | [Pancakeswap](/exchanges/gateway/pancakeswap), [Uniswap](/exchanges/gateway/uniswap) |
| Celo | celo, celo-alfajores | Legacy | [Uniswap](/exchanges/gateway/uniswap) |
| [Cosmos](cosmos.md) | mainnet | Legacy | [Osmosis](/exchanges/gateway/osmosis) |
| [Cronos](cronos.md) | mainnet | Legacy | [Mad Meerkat](/exchanges/gateway/mad-meerkat), [VVS](/exchanges/gateway/vvs) |
| [Ethereum Classic](ethereum-classic.md) | mainnet | Legacy | [ETCSwap](/exchanges/gateway/etcSwap) |
| [Osmosis](osmosis-chain.md) | mainnet, testnet | Legacy | [Osmosis](/exchanges/gateway/osmosis) |
| [Polygon](polygon.md) | mainnet, mumbai | Legacy | [Quickswap](/exchanges/gateway/quickswap) | 
