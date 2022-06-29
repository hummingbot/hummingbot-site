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
