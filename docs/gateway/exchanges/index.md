## AMM

Gateway supports the following types of Automatic Market Maker (AMM) DEXs:

- **AMM**: AMMs similar to [Uniswap V2](https://docs.uniswap.org/protocol/V2/introduction)
- **Concentrated Liquidity AMM**: AMMs that support concentrated liquidity ranges, similar to [Uniswap V3](https://docs.uniswap.org/protocol/introduction)
- **Perpetual AMM**: AMMs that trade perpetual futures, similar to Perpetual Protocol

| Exchange   | Website   | Type    | Chain(s)  | Developer | Status  |
| ---------- | --------- | --------| --------- | --------- | ------- |
| [Uniswap V2](./uniswap/)  | [uniswap.org](https://uniswap.org/) | AMM | [Ethereum](/gateway/chains/ethereum) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| [Pangolin](./pangolin/)| [pangolin.exchange](https://pangolin.exchange/) | AMM | [Avalanche](/gateway/chains/avalanche) | CoinAlpha | Released in [v1.4.0](/release-notes/1.4.0/) |
| Trader Joe | [traderjoe.xyz](https://traderjoe.xyz/) | AMM | [Avalanche](/gateway/chains/avalanche) | Hummingbot Foundation | Merged into [development](https://github.com/hummingbot/hummingbot/tree/development) |
| SushiSwap | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | Merged into [development](https://github.com/hummingbot/hummingbot/tree/development) |
| OpenOcean | [openocean.finance](https://openocean.finance/) | AMM | [Avalanche](/gateway/chains/avalanche) | [kanghoulin](https://github.com/kanghoulin) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5271) |
| Curve | [sushi.com](https://sushi.com/) | AMM | [Ethereum](/gateway/chains/ethereum) | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5334) |
| Quickswap | [quickswap.exchange](https://quickswap.exchange/) | AMM | Polygon | [james-hummingbot](https://github.com/james-hummingbot) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5378) |
| Uniswap V3 | [uniswap.org](https://uniswap.org/) | Concentrated Liquidity AMM | [Ethereum](/gateway/chains/ethereum) | CoinAlpha | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5388) |
| Defira | [defira.com](https://defira.com/) | AMM | [Harmony](/gateway/chains/harmony) | [NavneethJayendran](https://github.com/NavneethJayendran) | [Open pull request](https://github.com/hummingbot/hummingbot/pull/5422) |
| PancakeSwap | [pancakeswap.finance](https://pancakeswap.finance/) | AMM | BNB Chain | Hummingbot Foundation | [In progress](https://github.com/hummingbot/hummingbot/pull/5436) |
| Perpetual Protocol | [perp.com](https://perp.com/) | Perpetual AMM | Arbitrum | CoinAlpha| In progress |

## CLOB

Gateway plans to support the following types of Central Limit Order Book (CLOB) DEXs:

- **CLOB**: CLOB DEXs similar to [Serum](https://docs.projectserum.com/)
- **Margin CLOB**: CLOB DEXs that support margin accounts, similar to [Mango Markets](https://docs.mango.markets/)
- **Perpetual CLOB**: CLOB DEXs that support trade perpetual futures 

| Exchange   | Website   | Type    | Chain(s)  | Developer | Status  |
| ---------- | --------- | --------| --------- | --------- | ------- |
| Serum | [projectserum.com](https://portal.projectserum.com/) | CLOB | [Solana](/gateway/chains/solana) | [yourtrading-ai](https://github.com/yourtrading-ai) | [In progress](https://github.com/yourtrading-ai/hummingbot/tree/feat/gateway-v2_clob-serum/gateway/src/connectors/serum) |
| Mango Markets | [mango.markets](https://mango.markets/) | Margin CLOB | [Solana](/gateway/chains/solana) | [yourtrading-ai](https://github.com/yourtrading-ai) | Planned |


!!! note "CLOB DEXs with Python SDKs"
    As an alternative to building a Gateway connector, CLOB DEXs with Python SDKs and centralized exchange-like API interfaces can choose to integrate directly into the standard Hummingbot client. See [dYdX](/exchanges/dydx-perpetual/) for an example of an perpetual futures DEX connector, and [Loopring](/exchanges/loopring/) for an example of a spot DEX connector.


## API Interfaces

See [Developers - Gateway API Interfaces](/developers/gateway/api-interface/) for the standard API endpoints that each DEX type supports.