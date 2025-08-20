# Uniswap

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM) & Concentrated Liquidity Market Maker (CLMM)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Router Connector](#router-connector) | ✅ | Universal Router |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ | V2 Pools |
| [3️⃣ CLMM Connector](#3-clmm-connector) | ✅ | V3 Pools |

## ℹ️ Exchange Info

- **Website**: <https://app.uniswap.org>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/uniswap-v3/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/uniswap>
- **Fees**: <https://docs.uniswap.org/protocol/V2/concepts/advanced-topics/fees>

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `arbitrum`, `optimism`, `base`, `polygon`, `avalanche`, `bsc`, `celo`

From inside the Hummingbot client, run `gateway connect uniswap` in order to connect your wallet:

```
Which chain do you want uniswap to connect to? (ethereum) >>> 
Which network do you want uniswap to connect to? (mainnet, arbitrum, optimism, base, polygon, avalanche, bsc, celo) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful:
```
The uniswap connector now uses wallet [pubKey] on ethereum-mainnet
```

## Configuration

Configure Uniswap settings in `/conf/connectors/uniswap.yml`:

```yaml
allowedSlippage: 1.0
gasLimitEstimate: 300000
ttl: 600
contractAddresses:
  mainnet:
    uniswapV2RouterAddress: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
    uniswapV3RouterAddress: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
    uniswapV3NftManagerAddress: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"
    universalRouterAddress: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD"
```

### Configuration Parameters

- **allowedSlippage**: Maximum acceptable price slippage percentage
- **gasLimitEstimate**: Estimated gas limit for transactions
- **ttl**: Time-to-live for quotes in seconds
- **contractAddresses**: Network-specific contract addresses

## 🔀 Router Connector
*Integration to Uniswap's Universal Router for optimal trade execution*

- **ID**: `uniswap`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.uniswap.org/sdk/v3/overview>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/uniswap>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/uniswap.yml>

### Endpoints

- `/router/quote`
- `/router/trade`
- `/router/estimateGas`

## 2️⃣ AMM Connector
*Integration to Uniswap V2 classic AMM pools*

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

### Features
- Classic constant product (x*y=k) pools
- ERC-20 LP tokens
- 0.3% default fee tier
- Simple liquidity provision
- Automatic rebalancing

## 3️⃣ CLMM Connector
*Integration to Uniswap V3 concentrated liquidity pools*

### Endpoints

- `/clmm/pool-info`
- `/clmm/pool-price`
- `/clmm/pool-position` 
- `/clmm/add-liquidity`
- `/clmm/remove-liquidity`
- `/clmm/collect-fees`

### Features
- Concentrated liquidity positions
- Multiple fee tiers (0.01%, 0.05%, 0.3%, 1%)
- Position NFTs (ERC-721)
- Range orders capability
- Up to 4000x capital efficiency

For more info, run Gateway and go to <https:localhost:15888> in your browser to see detailed documentation for each endpoint.