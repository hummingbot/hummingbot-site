## What are Gateway DEX Connectors?

Gateway is API middleware that enables Hummingbot to send and receive data from different blockchain protocols and provides a standard interface for community developers to add connectors for common DeFi protocols.

Gateway connectors establish and maintain connections to automated market maker (AMM) DEXs and other protocols on various blockchain networks, interfaces with their Javascript SDKs, and exposes standard REST API endpoints for trading and liquidity provision-related actions on these DEXs.

See [Gateway](/gateway) for more information.

## Gateway DEX Connector Maintenance and Governance

Like other connectors, Gateway DEX connectors require ongoing maintenance: fixing bugs, addressing user issues, and keeping up with updates to both the exchange/blockchain API as well as improvements to the Hummingbot connector standard.

Hummingbot Foundation maintains certain reference connectors as the standard and utilizes a community-based maintenance process. We assign [Bounties](/bounties) to community developers to upgrade and fix bugs for each exchange's connectors in the codebase.

Each quarter, [Exchange Connector Polls](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which exchange connectors should be included in the codebase going forward. This process also determines which [blockchains and networks](/gateway/chains) that Gateway supports.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## Adding New Gateway DEX Connectors

New Gateway connectors may be contributed by community members via [New Connector Proposals](/governance/proposals), which require a pull request with the connector code to the Hummingbot Gateway Github repo, along with a minimum HBOT balance along to create.

If you're interested in contributing a new Gateway DEX connector, see the [DEX Connectors](/gateway/connectors#adding-custom-connectors) documentation which provides guidance on implementing the standardized trading types and creating compatible connectors.

## Current Gateway DEX Connectors

!!! note
    Gateway is currently undergoing a large multi-release codebase refactoring, approved in proposal [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c). During this refactoring process, not all connectors are available in the new version, as they are being gradually migrated from the legacy architecture.

Here are the Gateway connectors in the codebase for the current [Epoch](/governance/epochs/).

| Exchange | Chain Type | Legacy | New | Connector Types | Guide |
|----------|------------|--------|-----|----------------|-------|
| [Jupiter](./jupiter.md) | `solana` | | ✓ | `swap` | |
| [Meteora](./meteora.md) | `solana` | | ✓ | `clmm` | |
| [Raydium](./raydium.md) | `solana` | | ✓ | `clmm`, `amm` | |
| [Balancer](./balancer.md) | `ethereum` | ✓ |  | `amm` | |
| [Curve](./curve.md) | `ethereum` | ✓ |  | `amm` | |
| [ETCSwap](./etcSwap.md) | `ethereum` | ✓ |  | `amm`, `amm_lp` | |
| [Mad Meerkat](./mad-meerkat.md) | `cronos` | ✓ |  | `amm` | |
| [Osmosis](./osmosis.md) | `osmosis` | ✓ |  | `amm` | [Guide](/blog/using-osmosis-with-hummingbot/) |
| [Pancakeswap](./pancakeswap.md) | `binance-smart-chain` | ✓ |  | `amm`, `amm_lp` | |
| [Quickswap](./quickswap.md) | `polygon` | ✓ |  | `amm` | |
| [Sushiswap](./sushiswap.md) | `ethereum` | ✓ |  | `amm` | |
| [Tinyman](./tinyman.md) | `algorand` | ✓ |  | `amm` | |
| [TraderJoe](./traderjoe.md) | `avalanche` | ✓ |  | `amm` | |
| [Uniswap](./uniswap.md) | `ethereum` | ✓ | | `amm`, `amm_lp` | |
| [VVS](./vvs.md) | `cronos` | ✓ |  | `amm` | |