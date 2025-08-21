!!! note
    This connector need to be migrated to the new Gateway architecture. See [Legacy Connectors](/gateway/connectors/) for more information.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |

## ℹ️ Exchange Info

- **Website**: <https://www.sushi.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/sushiswap/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/sushiswap>
- **Fees**: https://docs.sushiswap.fi/products/limit-order#is-there-any-transaction-fee

## Configuration

Configure SushiSwap settings in your Gateway configuration files.

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `arbitrum_one`, `goerli` 
| `avalanche` | `avalanche`, `fuji` 
| `binance-smart-chain` | `mainnet`, `testnet` 
| `harmony` | `mainnet` 
| `polygon` | `mainnet`, `mumbai`