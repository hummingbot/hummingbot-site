Chain connectors integrate a Layer 1 blockchain and their networks into [Gateway](/gateway), enabling wallet access, node RPC interactions, and other support needed by DEXs supported by Gateway. Each connector is customized for a particular blockchain's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

## Chain Connector Governance

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Each quarter, the [Chain Connector Poll](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which connectors should be included in the codebase going forward.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each chain.

## List of DEX Connectors

Here are the current chain connectors in the codebase:

| Exchange | Type |
|----------|------|
| [Ethereum](/chains/ethereum) | EVM |
| [Avalanche](/chains/avalanche) | EVM |
| [BNB Chain](/chains/bnb-chain) | EVM |
| [Polygon](/chains/polygon) | EVM |
| [Algorand](/chains/algorand) | Non-EVM |
| [Cosmos](/chains/cosmos) | Non-EVM |
| [Cronos](/chains/cronos) | Non-EVM |
| [Harmony](/chains/harmony) | EVM |
| [Kujira](/chains/kujira) | Non-EVM |
| [NEAR](/chains/near) | Non-EVM |
| [Tezos](/chains/tezos) | Non-EVM |
| [XDC Chain](/chains/xdc-chain) |
| [XRP Ledger](/chains/xrpl) | Non-EVM |
