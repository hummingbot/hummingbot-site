DEX connectors integrate into a decentralized exchange's WebSocket or REST API, or in the case of DEX connectors via [Gateway](/gateway), into their smart contracts or Javascript-based SDKs. 

DEX connectors enable standardized order placement and data fetching endpoints from the perspective of Hummingbot strategies. Each connector is customized for a particular exchange's idiosyncrasies to enable this level of standardization, so they may should ideally have a maintainer, whose role is to ensure consistent performance by fixing bugs, incorporating API updates, and other ongoing work.

Connectors may be added by community members via [New Connector Proposals](/governance/proposals). Each quarter, the [CEX Connector Poll](/governance/polls) sorts CEX connectors into **Gold, Silver, and Bronze tiers**, which determines whether they are maintained by the Foundation.

Here are the current DEX connectors in the codebase, as of Q3 2023:

| Exchange | Type | Tier | Maintainer |
|----------|------|------|------------|
| [Uniswap](./uniswap) | AMM | 🥇 Gold | Hummingbot Foundation |
| [dYdX](./dydx) | CLOB | 🥈 Silver | Hummingbot Foundation |
| [Pancakeswap](./pancakeswap) | AMM | 🥈 Silver | Hummingbot Foundation |
| [Dexalot](./dexalot) | CLOB | 🥈 Silver | Hummingbot Foundation |
| [Defira](./defira) | AMM | 🥉 Bronze
| [Injective](./injective) | CLOB | 🥉 Bronze
| [Loopring](./loopring) | CLOB | 🥉 Bronze
| [Mad Meerkat](./mad-meerkat) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [OpenOcean](./openocean) | AMM | 🥉 Bronze
| [Pangolin](./pangolin) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) | 
| [Perpetual Protocol](./perp) | AMM | 🥉 Bronze
| [Polkadex](./polkadex) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Quickswap](./quickswap) | AMM | 🥉 Bronze
| [Ref Finance](./ref) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Sushiswap](./sushiswap) | AMM | 🥉 Bronze
| [Tinyman](./tinyman) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [TraderJoe](./traderjoe) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [Vertex](./vertex) | AMM | 🥉 Bronze
| [VVS Finance](./vvs) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
| [XSwap](./xswap) | AMM | 🥉 Bronze | [CoinAlpha](https://coinalpha.com) |
