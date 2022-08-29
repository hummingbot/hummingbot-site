Gateway supports the following types of Automatic Market Maker (AMM) DEXs:

- **AMM**: AMMs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMMs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMMs that trade perpetual futures, similar to [Perpetual Protocol](https://docs.perp.fi/)

| Exchange   | Website   | Type    | Chain(s)  | Developer | Status  |
| ---------- | --------- | --------| --------- | --------- | ------- |
| [Uniswap](/gateway/exchanges/uniswap/)  | [uniswap.org](https://uniswap.org/) | AMM | [Ethereum](/gateway/chains/ethereum), [Polygon](/gateway/chains/ethereum#polygon) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| [Uniswap LP](/gateway/exchanges/uniswap/) | [uniswap.org](https://uniswap.org/) | Concentrated Liquidity AMM | [Ethereum](/gateway/chains/ethereum), [Polygon](/gateway/chains/ethereum#polygon) | CoinAlpha | Released in [v1.6.0](/release-notes/1.6.0/) |
| [Pangolin](/gateway/exchanges/pangolin/)| [pangolin.exchange](https://pangolin.exchange/) | AMM | [Avalanche](/gateway/chains/ethereum#avalanche) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| [Trader Joe](/gateway/exchanges/traderjoe/) | [traderjoe.xyz](https://traderjoe.xyz/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.5.0](/release-notes/1.5.0/) |
| [SushiSwap](/gateway/exchanges/sushiswap/) | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum), [Polygon](/gateway/chains/ethereum#polygon) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.5.0](/release-notes/1.5.0/) |
| [QuickSwap](/gateway/exchanges/quickswap/) | [quickswap.exchange](https://quickswap.exchange/) | AMM | [Polygon](/gateway/chains/ethereum#polygon) | [james-hummingbot](https://github.com/james-hummingbot) | Released in [v1.6.0](/release-notes/1.6.0/) |
| OpenOcean | [openocean.finance](https://openocean.finance/) | AMM | [Avalanche](/gateway/chains/ethereum/#avalanche) | [kanghoulin](https://github.com/kanghoulin) | Released in [v1.7.0](/release-notes/1.7.0/) |
| Curve | [curve.fi](https://curve.fi/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5334) |
| Defira | [defira.com](https://defira.com/) | AMM | [Harmony](/gateway/chains/ethereum#harmony) | [NavneethJayendran](https://github.com/NavneethJayendran) | Released in [v1.7.0](/release-notes/1.7.0/) |
| Perpetual Protocol | [perp.com](https://perp.com/) | Perpetual AMM | [Arbitrum](/gateway/chains/ethereum#arbitrum) | CoinAlpha| [Open pull request](https://github.com/hummingbot/hummingbot/pull/5520) |
| Balancer | [balancer.fi](https://balancer.fi/) | AMM | [Ethereum](/gateway/chains/ethereum) | [williamstarkro](https://github.com/williamstarkro) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5535) |
| PancakeSwap | [pancakeswap.finance](https://pancakeswap.finance/) | AMM | [BNB Chain](/gateway/chains/ethereum#bnb-chain) | CoinAlpha | [In progress](https://github.com/hummingbot/hummingbot/pull/5436) |

!!! tip "API Interfaces"
    See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.
