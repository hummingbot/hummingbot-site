Chain connectors integrate a Layer 1 blockchain and their networks into [Gateway](/gateway), enabling wallet access, node RPC interactions, and other support needed by DEXs supported by Gateway. Each connector is customized for a particular blockchain's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Here are the current chain connectors in the codebase:

| Exchange | Type | Tier | Maintainer |
|----------|------|------|------------|
| [Ethereum](/chains/ethereum) | EVM | 🥇 Gold | Hummingbot Foundation
| [Avalanche](/chains/avalanche) | EVM | 🥈 Silver | Hummingbot Foundation
| [BNB Chain](/chains/bnb-chain) | EVM | 🥈 Silver | Hummingbot Foundation
| [Polygon](/chains/polygon) | EVM | 🥈 Silver | Hummingbot Foundation
| [Injective](/chains/injective) | Non-EVM | 🥉 Bronze |
| [Harmony](/chains/harmony) | EVM | 🥉 Bronze |
| [Tezos](/chains/tezos) | Non-EVM | 🥉 Bronze |
| [XDC Chain](/chains/xdc-chain) | Non-EVM | 🥉 Bronze |
| [Algorand](/chains/algorand) | Non-EVM | 🥉 Bronze |
| [Cosmos](/chains/cosmos) | Non-EVM | 🥉 Bronze |
| [Cronos](/chains/cronos) | Non-EVM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com)
| [NEAR](/chains/near) | Non-EVM |🥉 Bronze |
| [XRP Ledger](/chains/xrpl) | Non-EVM |🥉 Bronze | [wojak](https://github.com/mlguys)

