Gateway supports the following types of Automatic Market Maker (AMM) DEXs:

- **AMM**: AMMs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMMs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMMs that trade perpetual futures, similar to [Perpetual Protocol](https://docs.perp.fi/)

| Exchange   | Website   | Type    | Chain(s)  | Developer | Status  |
| ---------- | --------- | --------| --------- | --------- | ------- |
| [Uniswap V2](./uniswap/)  | [uniswap.org](https://uniswap.org/) | AMM | [Ethereum](/gateway/chains/ethereum) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| [Pangolin](./pangolin/)| [pangolin.exchange](https://pangolin.exchange/) | AMM | [Avalanche](/gateway/chains/ethereum#avalanche) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| Trader Joe | [traderjoe.xyz](https://traderjoe.xyz/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | Hummingbot Foundation | Merged into [development](https://github.com/hummingbot/hummingbot/tree/development) |
| SushiSwap | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | Merged into [development](https://github.com/hummingbot/hummingbot/tree/development) |
| OpenOcean | [openocean.finance](https://openocean.finance/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | [kanghoulin](https://github.com/kanghoulin) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5271) |
| Curve | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5334) |
| QuickSwap | [quickswap.exchange](https://quickswap.exchange/) | AMM | [Polygon](/gateway/chains/ethereum#polygon) | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5378) |
| Uniswap V3 | [uniswap.org](https://uniswap.org/) | Concentrated Liquidity AMM | [Ethereum](/gateway/chains/ethereum) | CoinAlpha | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5388) |
| Defira | [defira.com](https://defira.com/) | AMM | [Harmony](/gateway/chains/ethereum#harmony) | [NavneethJayendran](https://github.com/NavneethJayendran) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5422) |
| PancakeSwap | [pancakeswap.finance](https://pancakeswap.finance/) | AMM | [BNB Chain](/gateway/chains/ethereum#bnb-chain) | CoinAlpha | [In progress](https://github.com/hummingbot/hummingbot/pull/5436) |
| Perpetual Protocol | [perp.com](https://perp.com/) | Perpetual AMM | [Arbitrum](/gateway/chains/ethereum#arbitrum) | CoinAlpha| In progress |

!!! tip "API Interfaces"
    See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.
