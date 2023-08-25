DEX connectors integrate into a decentralized exchange's WebSocket or REST API, or in the case of DEX connectors via [Gateway](/gateway), into their smart contracts or Javascript-based SDKs. 

DEX connectors enable standardized order placement and data fetching endpoints from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [CEX Connector Poll](/governance/polls) sorts CEX connectors into **Gold, Silver, and Bronze tiers**, which determines whether they are maintained by the Foundation.

Here are the current DEX connectors in the codebase, as of Q3 2023:

| Exchange | Type | Tier | Maintainer |
|----------|------|------|------------|
| [Uniswap](../exchanges/uniswap.md) | AMM | 🥇 Gold | Hummingbot Foundation |
| [dYdX](../exchanges/dydx.md) | CLOB | 🥈 Silver | Hummingbot Foundation |
| [Pancakeswap](../exchanges/pancakeswap.md) | AMM | 🥈 Silver | Hummingbot Foundation |
| [Dexalot](../exchanges/dexalot.md) | CLOB | 🥈 Silver | Hummingbot Foundation |
| [Defira](../exchanges/defira.md) | AMM | 🥉 Bronze
| [Injective](../exchanges/injective.md) | CLOB | 🥉 Bronze
| [Loopring](../exchanges/loopring/index.md) | CLOB | 🥉 Bronze
| [Mad Meerkat](../exchanges/mad-meerkat.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [OpenOcean](../exchanges/openocean.md) | AMM | 🥉 Bronze
| [Pangolin](../exchanges/pangolin.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [Perpetual Protocol](../exchanges/perp.md) | AMM | 🥉 Bronze
| [Polkadex](../exchanges/polkadex.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Quickswap](../exchanges/quickswap.md) | AMM | 🥉 Bronze
| [Ref Finance](../exchanges/ref.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Sushiswap](../exchanges/sushiswap.md) | AMM | 🥉 Bronze
| [Tinyman](../exchanges/tinyman.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [TraderJoe](../exchanges/traderjoe.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Vertex](../exchanges/vertex.md) | AMM | 🥉 Bronze
| [VVS Finance](../exchanges/vvs.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [XSwap](../exchanges/xswap.md) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Plenty](../exchanges/plenty.md) | AMM | 🥉 Bronze
