---
hide:
- toc
---

Gateway supports the following types of DEX connectors:

- **AMM**: Automatic Market Maker (AMM) DEXs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMMs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMMs that trade perpetual futures, similar to [Perpetual Protocol](https://docs.perp.fi/)
- **CLOB**: CLOB DEXs similar to [Serum](https://docs.projectserum.com/)

| Exchange   | Website   | Type    | Chain(s)  | Developer | Status  |
| ---------- | --------- | --------| --------- | --------- | ------- |
| [Uniswap](/gateway/exchanges/uniswap/) | [uniswap.org](https://uniswap.org/) | Concentrated Liquidity AMM | [Ethereum](/gateway/chains/ethereum), [Polygon](/gateway/chains/ethereum#polygon) | [CoinAlpha](https://github.com/coinalpha)  | Released in [v1.6.0](/release-notes/1.6.0/) |
| [Pangolin](/gateway/exchanges/pangolin/)| [pangolin.exchange](https://pangolin.exchange/) | AMM | [Avalanche](/gateway/chains/ethereum#avalanche) | [CoinAlpha](https://github.com/coinalpha)  | Released in [v1.4.0](/release-notes/1.4.0/) |
| [Trader Joe](/gateway/exchanges/traderjoe/) | [traderjoe.xyz](https://traderjoe.xyz/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.5.0](/release-notes/1.5.0/) |
| [SushiSwap](/gateway/exchanges/sushiswap/) | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum), [BNB Chain](/gateway/chains/binance-smart-chain) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.5.0](/release-notes/1.5.0/) |
| [QuickSwap](/gateway/exchanges/quickswap/) | [quickswap.exchange](https://quickswap.exchange/) | AMM | [Polygon](/gateway/chains/ethereum#polygon) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.6.0](/release-notes/1.6.0/) |
| [OpenOcean](/gateway/exchanges/openocean/) | [openocean.finance](https://openocean.finance/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | [kanghoulin](https://github.com/kanghoulin) | Released in [v1.7.0](/release-notes/1.7.0/) |
| [Defira](/gateway/exchanges/defira/) | [defira.com](https://defira.com/) | AMM | [Harmony](/gateway/chains/ethereum#harmony) | [NavneethJayendran](https://github.com/NavneethJayendran) | Released in [v1.7.0](/release-notes/1.7.0/)  |
| [Defi Kingdoms](/gateway/exchanges/defikingdoms/) | [defikingdoms.com](https://defikingdoms.com/) | AMM | [Harmony](/gateway/chains/ethereum#harmony) | [NavneethJayendran](https://github.com/NavneethJayendran) | Released in [v1.7.0](/release-notes/1.7.0/)  |
| [Perpetual Protocol](/gateway/exchanges/perp/) | [perp.com](https://perp.com/) | Perpetual AMM | [Optimism](/gateway/chains/ethereum/#optimism-mainnet) | [CoinAlpha](https://github.com/coinalpha) | Released in [v1.7.0](/release-notes/1.7.0/) |
<!-- | [Serum](/gateway/exchanges/serum/) | [serum.exchange](https://www.projectserum.com/) | CLOB | [Solana](/gateway/chains/solana) | [yourtrading-ai](https://github.com/yourtrading-ai) | In progress
| Curve | [curve.fi](https://curve.fi/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5334) |
| Balancer | [balancer.fi](https://balancer.fi/) | AMM | [Ethereum](/gateway/chains/ethereum) | [williamstarkro](https://github.com/williamstarkro) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5535) | -->
| [PancakeSwap](https://pancakeswap.finance/) | [pancakeswap.finance](https://pancakeswap.finance/) | AMM | [BNB Chain](/gateway/chains/ethereum#bnb-chain) | [CoinAlpha](https://github.com/coinalpha) | Released in [v1.10.0](/release-notes/1.10.0/) |
| [Ref.Finance](/gateway/exchanges/ref-finance/) | [Ref.Finance](https://www.ref.finance/) | AMM | [NEAR](/gateway/chains/near-protocol) | [CoinAlpha](https://github.com/coinalpha) | Released in [v1.10.0](/release-notes/1.10.0/) |
| [VVS Finance](https://vvs.finance/swap) | [VVS Finance](https://vvs.finance/swap) | AMM | [Cronos](/gateway/chains/cronos) | [CoinAlpha](https://github.com/coinalpha) | Released in [v1.10.0](/release-notes/1.10.0/) |
| [MM Finance](https://mm.finance/swap) | [MM Finance](https://mm.finance/swap) | AMM | [Cronos](/gateway/chains/cronos) | [CoinAlpha](https://github.com/coinalpha) | Released in [v1.10.0](/release-notes/1.10.0/) |

!!! tip "API Interfaces"
    See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.

!!! note "CLOB DEXs with Python SDKs"
    As an alternative to building a Gateway connector, CLOB DEXs with Python SDKs and centralized exchange-like API interfaces can choose to integrate directly into the standard Hummingbot client. See [dYdX](/exchanges/dydx-perpetual/) for an example of an perpetual futures DEX connector, and [Loopring](/exchanges/loopring/) for an example of a spot DEX connector.
