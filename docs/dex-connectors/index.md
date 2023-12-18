DEX connectors integrate into a decentralized exchange's WebSocket or REST API directly from the Hummingbot client (Client), or in the case of AMM and other exchanges, via [Gateway](/gateway) into their smart contracts or Javascript-based SDKs. 

DEX connectors enable standardized order placement and data fetching endpoints from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [DEX Connector Poll](/governance/polls) which determines which connectors are included in future releases and their level of priority.

Here are the current DEX connectors in the codebase, as of the latest release:

| Exchange | Type | Connection | Tier | Maintainer |
|----------|------|------------|------|------------|
| [dYdX](../exchanges/dydx.md) | CLOB | Client | 🥇 Gold | Hummingbot Foundation |
| [Dexalot](../exchanges/dexalot.md) | CLOB | Gateway | 🥈 Silver | Hummingbot Foundation |
| [Polkadex](../exchanges/polkadex.md) | CLOB | Client | 🥈 Silver | Hummingbot Foundation |
| [Injective Helix](../exchanges/injective.md) | CLOB | Client | 🥈 Silver | Hummingbot Foundation |
| [Mad Meerkat](../exchanges/mad-meerkat.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [Curve](../exchanges/curve.md) | AMM | Gateway | 🥉 Bronze
| [OpenOcean](../exchanges/openocean.md) | AMM | Gateway | 🥉 Bronze
| [Osmosis](../exchanges/osmosis.md) | AMM | Gateway | 🥉 Bronze | [Pecunia.Finance](https://pecuniafinance.com) | 
| [Pancakeswap](../exchanges/pancakeswap.md) | AMM | Gateway | 🥉 Bronze |  |
| [Pangolin](../exchanges/pangolin.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [Plenty](../exchanges/plenty.md) | AMM | Gateway | 🥉 Bronze
| [Perpetual Protocol](../exchanges/perp.md) | AMM | Gateway | 🥉 Bronze
| [Quickswap](../exchanges/quickswap.md) | AMM | Gateway | 🥉 Bronze
| [Ref Finance](../exchanges/ref.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Sushiswap](../exchanges/sushiswap.md) | AMM | Gateway | 🥉 Bronze
| [Tinyman](../exchanges/tinyman.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [TraderJoe](../exchanges/traderjoe.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Uniswap](../exchanges/uniswap.md) | AMM | Gateway | 🥉 Bronze |  |
| [VVS Finance](../exchanges/vvs.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Vertex](../exchanges/vertex.md) | CLOB | Client | 🥉 Bronze
| [XSwap](../exchanges/xswap.md) | AMM | Gateway | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |





