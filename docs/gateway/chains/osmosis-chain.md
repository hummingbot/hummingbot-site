`osmosis` is a [Chain](./index.md) connector in Hummingbot Gateway that helps users connect to Osmosis DEX on the Osmosis Blockchain.

!!! note
    This chain is available in **Gateway Legacy (v2.2)**. For installation instructions, refer to the [Installation Guide](../legacy/installation.md).

## 📁 Connector Info

- Folder: [/gateway/src/chains/osmosis](https://github.com/hummingbot/gateway/tree/v2.2.0/src/chains/osmosis)
- Configs: [/gateway/src/templates/osmosis.yml](https://github.com/hummingbot/gateway/tree/v2.2.0/src/templates/osmosis.yml)

!!! note "Osmosis utilizes Cosmos chain elements"
The Osmosis chain was built using the Cosmos SDK as a base, though has evolved so far as to require a native chain connector instead of using the [Cosmos Chain](/chains/cosmos). Some Cosmos elements are still used.

## ℹ️ Chain Info

- Website: <https://osmosis.zone/>
- Docs: <https://docs.osmosis.zone/>
- Block Explorer: <https://www.mintscan.io/osmosis>
- CoinMarketCap: <https://coinmarketcap.com/currencies/osmosis/>
- CoinGecko: <https://www.coingecko.com/en/coins/osmosis>

## 🕸️ Supported Networks

| Network   | ChainId     | Type    |
| --------- | ----------- | ------- |
| `mainnet` | osmosis-1   | mainnet |
| `testnet` | osmo-test-5 | testnet |

## 🚰 Faucets

- <https://faucet.testnet.osmosis.zone/>
