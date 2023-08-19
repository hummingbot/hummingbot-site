## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Injective is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://helixapp.com/markets?type=spot>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/injective>
- **CoinGecko**: <https://www.coingecko.com/en/coins/injective>
- **API Docs**: <https://api.injective.exchange>
- **Fees**: <https://help.injective.exchange/en/articles/4800191-are-there-fees-to-using-injective>
- **Supported Countries**: <https://help.injective.exchange/en/articles/4798063-location-restrictions> 

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `injective` | `mainnet`, `testnet`, `devnet`

From inside the Hummingbot client, run `gateway connect injective` in order to connect your wallet:

```
Which chain do you want injective to connect to? (injective) >>>
Which network do you want injective to connect to? (mainnet, testnet)

Enter your injective-mainnet wallet private key >>>

Enter your injective-mainnet sub account id wallet key (input 0 if unsure) >>>
```

If connection is successful:

```
The injective connector now uses wallet [pubKey] on injective-mainnet
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `injective`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/injective>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `injective_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/injective_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect injective` to `injective-testnet` instead of `injective-mainnet`.