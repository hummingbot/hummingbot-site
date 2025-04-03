## What are Gateway Connectors?

Gateway is API middleware that enables Hummingbot to send and receive data from different blockchain protocols and provides a standard interface for community developers to add connectors for common DeFi protocols.

Gateway connectors establish and maintain connections to automated market maker (AMM) DEXs and other protocols on various blockchain networks, using the [Hummingbot Gateway](https://github.com/hummingbot/gateway) Typescript-based codebase, which interfaces with Javascript SDKs offered by various DEXs and exposes standard REST API endpoints for trading and liquidity provision-related actions on these DEXs.

## Gateway Connector Types

The new Gateway connectors and Hummingbot clients (after release v2.5+) expose standard API endpoints for the following types of DEX trading types:

- **Swap**: Endpoints for fetching quote prices and executing swaps on taker-only DEXs and DEX aggregators, like [Jupiter](https://jup.ag/).
- **AMM**: Endpoints for quoting, swapping, and adding/removing liquidity on AMM (Automated Market Maker) DEXs, like [Raydium Standard](https://raydium.io/liquidity-pools/?tab=standard) and Uniswap V2 pools.
- **CLMM**: Endpoints for quoting, swapping, and adding/removing liquidity on CLMM (Concentrated Liquidity Market Maker) DEXs, like [Raydium Concentrated](https://raydium.io/liquidity-pools/?tab=concentrated) and Uniswap V3/V4 pools.

The legacy Gateway connectors (release v2.2) had the following trading types:

- **AMM**: Endpoints for fetching quote prices and executing swaps on DEXs and DEX aggregators
- **AMM_LP**: Endpoints for adding and removing liquidity on Uniswap V3 pools

See [Gateway](/gateway) for more information about installing and using new vs legacy versions of Gateway.

## Gateway Connector Maintenance and Governance

Like other connectors, Gateway DEX connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

Each quarter, [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which exchange connectors should be included in the codebase going forward. This process also determines which [blockchains and networks](/gateway/chains) that Gateway supports.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## Adding New Gateway Connectors

New Gateway connectors may be contributed by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create. We recommend that only connectors compatible with the new Gateway architecture be submitted.

## Current Gateway Connectors

Here are the Gateway connectors in the codebase for the current [Epoch](/governance/epochs/).

| Exchange | Chain Type | Legacy | New | Connector Types | Guide |
|----------|-------|--------|-----|------|
| [Jupiter](./jupiter.md) | `solana` | | ✓ | `swap` | |
| [Meteora](./meteora.md) | `solana` | | ✓ | `clmm` | |
| [Raydium](./raydium.md) | `solana` | | ✓ | `clmm`, `amm` | |
| [Uniswap](./uniswap.md) | `ethereum` | | ✓ | `amm`, `amm_lp` | |
| [Pancakeswap](./pancakeswap.md) | `binance-smart-chain` | ✓ |  | `amm`, `amm_lp` | |
| [Balancer](./balancer.md) | `ethereum` | ✓ |  | `amm` | |
| [Carbon](./carbon.md) | `ethereum` | ✓ |  | `amm` | |
| [Curve](./curve.md) | `ethereum` | ✓ |  | `amm` | |
| [ETCSwap](./etcSwap.md) | `ethereum` | ✓ |  | `amm`, `amm_lp` | |
| [Mad Meerkat](./mad-meerkat.md) | `cronos` | ✓ |  | `amm` | |
| [Osmosis](./osmosis.md) | `osmosis` | ✓ |  | `amm` | [Guide](/blog/using-osmosis-with-hummingbot/) |
| [Quickswap](./quickswap.md) | `polygon` | ✓ |  | `amm` | |
| [Sushiswap](./sushiswap.md) | `ethereum` | ✓ |  | `amm` | |
| [Tinyman](./tinyman.md) | `algorand` | ✓ |  | `amm` | |
| [TraderJoe](./traderjoe.md) | `avalanche` | ✓ |  | `amm` | |
| [VVS](./vvs.md) | `cronos` | ✓ |  | `amm` | |