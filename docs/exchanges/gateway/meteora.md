# Meteora

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Concentrated Liquidity Market Maker (CLMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [3️⃣ CLMM Connector](#3-clmm-connector) | ✅ | Dynamic Liquidity Market Maker (DLMM) |

## ℹ️ Exchange Info

- **Website**: <https://meteora.ag>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/meteora/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/meteora>
- **Fees**: <https://docs.meteora.ag/dlmm/fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `solana` | `mainnet-beta`, `devnet`

From inside the Hummingbot client, run `gateway connect meteora` in order to connect your wallet:

```
Which chain do you want meteora to connect to? (solana) >>> 
Which network do you want meteora to connect to? (mainnet-beta, devnet) >>>
Enter your solana-mainnet-beta private key >>>>
```

If connection is successful:
```
The meteora connector now uses wallet [pubKey] on solana-mainnet-beta
```

## Configuration

Configure Meteora settings in `/conf/connectors/meteora.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 400000
ttl: 30
programId: "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated compute units for transactions
- **ttl**: Time-to-live for quotes in seconds
- **programId**: Meteora DLMM program ID (chain-specific)

## 3️⃣ CLMM Connector
*Integration to Meteora's Dynamic Liquidity Market Maker (DLMM)*

- **ID**: `meteora`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.meteora.ag/dlmm/overview>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/meteora>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/meteora.yml>

### Endpoints

- `/clmm/pool-info`
- `/clmm/pool-price`
- `/clmm/pool-position`
- `/clmm/add-liquidity`
- `/clmm/remove-liquidity`
- `/clmm/collect-fees`

### Features

- Bin-based liquidity concentration for precise pricing
- Dynamic fee tiers that adjust with market volatility
- Zero slippage within active bins
- Flexible liquidity distribution strategies
- Volatility-adjusted fee mechanism
- Multiple position management per pool

### DLMM Model

Meteora's Dynamic Liquidity Market Maker uses a bin-based approach:

1. **Price Bins**: Liquidity is organized into discrete price bins rather than continuous ranges
2. **Zero Slippage**: Trades within a single bin experience zero price impact
3. **Dynamic Fees**: Fees automatically adjust based on market volatility
4. **Flexible Shapes**: LPs can create various liquidity distribution patterns

For more info, run Gateway and go to <https:localhost:15888> in your browser to see detailed documentation for each endpoint.