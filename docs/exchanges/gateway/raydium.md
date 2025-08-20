# Raydium

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM) & Concentrated Liquidity Market Maker (CLMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ | Standard V2 Pools |
| [3️⃣ CLMM Connector](#3-clmm-connector) | ✅ | Concentrated Liquidity |

## ℹ️ Exchange Info

- **Website**: <https://raydium.io>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/raydium/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/raydium>
- **Fees**: <https://docs.raydium.io/raydium/trading/trade-and-swap>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet`

From inside the Hummingbot client, run `gateway connect raydium` in order to connect your wallet:

```
Which chain do you want raydium to connect to? (solana) >>> 
Which network do you want raydium to connect to? (mainnet-beta, devnet) >>>
Enter your solana-mainnet-beta private key >>>>
```

If connection is successful:
```
The raydium connector now uses wallet [pubKey] on solana-mainnet-beta
```

## Configuration

Configure Raydium settings in `/conf/connectors/raydium.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 500000
ttl: 30
programIds:
  amm: "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"
  clmm: "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated compute units for transactions
- **ttl**: Time-to-live for quotes in seconds
- **programIds**: Raydium program IDs for AMM and CLMM

## 2️⃣ AMM Connector
*Integration to Raydium's Standard AMM pools*

- **ID**: `raydium`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.raydium.io/raydium/trading/trade-and-swap>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/raydium>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/raydium.yml>

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`
- `/amm/pool-info`

### Features
- Traditional x*y=k constant product pools
- Simple LP token mechanism
- Automatic 50/50 rebalancing
- Pool-wide fee distribution
- Single-click liquidity provision

## 3️⃣ CLMM Connector
*Integration to Raydium's Concentrated Liquidity pools*

### Endpoints

- `/clmm/pool-info`
- `/clmm/pool-price`
- `/clmm/pool-position`
- `/clmm/add-liquidity`
- `/clmm/remove-liquidity`
- `/clmm/collect-fees`

### Features
- Custom price ranges for liquidity
- Up to 500x capital efficiency
- Position NFTs for tracking
- Individual fee collection
- Multiple positions per pool

For more info, run Gateway and go to <https:localhost:15888> in your browser to see detailed documentation for each endpoint.