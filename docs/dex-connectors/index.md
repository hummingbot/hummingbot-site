Decentralized exchange (DEX) connectors integrate into a decentralized or non-custodial exchange's WebSocket API, enabling standardized order placement/cancellation and order book/blockchain data fetching from the perspective of Hummingbot strategies.

There are two types of DEX connectors in Hummingbot:

* **Client**: Connectors that integrate to a DEX's WebSocket/REST API directly from the Hummingbot client
* **Gateway**: Connectors that integrateto a DEX's smart contract or Javascript/Typescript SDK the [Gateway](/gateway) module (REST)

We recommend that Central Limit Order Book (CLOB) exchanges utilize direct client connectors for improved speed and simplicity, while Automated Market Maker (AMM) exchanges should use Gateway as it is designed to interface with smart contracts.

## DEX Connector Governance

Connectors may be added by community members via [New Connector Proposals](/governance/proposals), which require a minimum HBOT balance to create.

Each quarter, the [DEX Connector Poll](/governance/polls) allocates HBOT bounties toward the top CEX connectors and determines which connectors should be included in the codebase going forward.

See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## DEX Connector Standards

Client DEX connectors should conform to the latest `spot` and `perp` connector standards. See [Building Connectors](/developers/connectors) for more information.

For Gateway DEX connectors to be compatible with Hummingbot strategies, they need to support the API endpoints required by the connector classes listed in [`/hummingbot/hummingbot/connector/gateway`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/gateway):

* `amm`
* `amm_lp`
* `amm_perpetual`
* `clob_perp`
* `clob_spot`

## List of DEX Connectors

Here are the current DEX connectors in the codebase:

| Exchange | Type | Connection | Connector Guide |
|----------|------|------------|---|
| [dYdX](../exchanges/dydx.md) | CLOB | Client |
| [Hyperliquid](../exchanges/hyperliquid.md) | CLOB | Client | [Guide](/academy-content/using-hyperliquid-vaults-with-hummingbot)
| [Injective Helix](../exchanges/injective.md) | CLOB | Client |
| [Polkadex](../exchanges/polkadex.md) | CLOB | Client | [Guide](/academy-content/using-polkadex-with-hummingbot)
| [Vega](../exchanges/vega.md) | CLOB | Client | [Guide](/academy-content/using-vega-protocol-with-hummingbot)
| [Vertex](../exchanges/vertex.md) | CLOB | Client |
| [Dexalot](../exchanges/dexalot.md) | CLOB | Gateway | [Guide](/academy-content/using-dexalot-with-hummingbot)
| [XRP Ledger](../exchanges/xrpl.md) | CLOB | Gateway |
| [Curve](../exchanges/curve.md) | AMM | Gateway |
| [Balancer](../exchanges/balancer.md) | AMM | Gateway |
| [Mad Meerkat](../exchanges/mad-meerkat.md) | AMM | Gateway |
| [OpenOcean](../exchanges/openocean.md) | AMM | Gateway |
| [Osmosis](../exchanges/osmosis.md) | AMM | Gateway | [Guide](/academy-content/using-osmosis-with-hummingbot)
| [Pancakeswap](../exchanges/pancakeswap.md) | AMM | Gateway |
| [Pangolin](../exchanges/pangolin.md) | AMM | Gateway |
| [Plenty](../exchanges/plenty.md) | AMM | Gateway |
| [Perpetual Protocol](../exchanges/perp.md) | AMM | Gateway |
| [Quickswap](../exchanges/quickswap.md) | AMM | Gateway |
| [Ref Finance](../exchanges/ref.md) | AMM | Gateway |
| [Sushiswap](../exchanges/sushiswap.md) | AMM | Gateway |
| [Tinyman](../exchanges/tinyman.md) | AMM | Gateway |
| [TraderJoe](../exchanges/traderjoe.md) | AMM | Gateway |
| [Uniswap](../exchanges/uniswap.md) | AMM | Gateway |
| [VVS Finance](../exchanges/vvs.md) | AMM | Gateway |
| [XSwap](../exchanges/xswap.md) | AMM | Gateway |
| [Carbon](../exchanges/carbon.md) | AMM | Gateway |

