Chain integrations add support for a Layer 1 blockchain and their Layer 2 networks into [Gateway](/gateway), enabling wallet access, node RPC interactions, and other support needed by DEXs supported by Gateway. Each chain integration is customized for a particular blockchain's idiosyncrasies to enable this level of standardization.

See the chain section in [Route Schemas](/gateway/schemas) for detailed information about the standardized endpoints that each chain integration should define.

## New vs Legacy

[Legacy Gateway](/gateway/legacy) (v2.2 and before) supported a wide range of chains and their networks including Ethereum, Algorand, Avalanche, BNB Chain, Cosmos, Cronos, Ethereum Classic, Osmosis, Polygon, and Solana. However, its inflexible route architecture tight coupling with the Hummingbot client made it difficult to support more types of trading interactions.

The [new version](/gateway/new) of Gateway (v2.5+) is more flexible but initially supports only a few base chain architectures (Solana and Ethereum). The Ethereum chain integration now supports any EVM-compatible network, including other Layer 1 networks such as Avalanche, BNB Chain, and Polygon.

## What Determines Chain Inclusion?

Chain support is determined by the decentralized exchanges (DEX) that HBOT holders vote to be included in the Hummingbot codebase in quarterly [Exchange Connector Polls](/governance/polls). The main chains and networks where each DEX is deployed will be supported in subsequent releases of Hummingbot and Gateway.

New DEX connectors and their chains may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Here are the chains supported in the Gateway codebase for current [Epoch](/governance/epochs), and whether or not they have been upgraded to the new Gateway architecture.

## Current Chains Supported

| Base Chain | Networks | Legacy/New | DEXs Supported |
|----------|----------|------------|-----------|
| [Solana](solana.md) | mainnet-beta, devnet | New | [Jupiter](/exchanges/gateway/jupiter), [Meteora](/exchanges/gateway/meteora), [Raydium](/exchanges/gateway/raydium) |
| [Ethereum](ethereum.md) | mainnet, arbitrum, optimism, base, sepolia, bsc, avalanche, celo, polygon | New | [Uniswap](/exchanges/gateway/uniswap), [Balancer](/exchanges/gateway/balancer), [Carbon](/exchanges/gateway/carbon), [Curve](/exchanges/gateway/curve), [Sushiswap](/exchanges/gateway/sushiswap) |
| [Algorand](algorand.md) | mainnet, testnet | Legacy | [Tinyman](/exchanges/gateway/tinyman) |
| [Avalanche](avalanche.md) | avalanche, fuji | Legacy | [Trader Joe](/exchanges/gateway/traderjoe) |
| [BNB Chain](bnb-chain.md) | mainnet, testnet | Legacy | [Pancakeswap](/exchanges/gateway/pancakeswap), [Uniswap](/exchanges/gateway/uniswap) |
| Celo | celo, celo-alfajores | Legacy | [Uniswap](/exchanges/gateway/uniswap) |
| [Cronos](cronos.md) | mainnet | Legacy | [Mad Meerkat](/exchanges/gateway/mad-meerkat), [VVS](/exchanges/gateway/vvs) |
| [Ethereum Classic](ethereum-classic.md) | mainnet | Legacy | [ETCSwap](/exchanges/gateway/etcSwap) |
| [Osmosis](osmosis-chain.md) | mainnet, testnet | Legacy | [Osmosis](/exchanges/gateway/osmosis) |
| [Polygon](polygon.md) | mainnet, mumbai | Legacy | [Quickswap](/exchanges/gateway/quickswap) | 
