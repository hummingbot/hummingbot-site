## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports testnet
| 🔀 Perp Connector | Not available
|| 🕯 Spot Candles Feed | Not available | 
| 🕯 Perp Candles Feed | Not available | 
| [📓 Connector Guide](../blog/posts/using-dexalot-with-hummingbot/index.md) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://dexalot.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/dexalot/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/dexalot>
- **API Docs**: <https://docs.dexalot.com/en/apiv2/>
- **Fees**: 

## 🔑 How to Connect

!!! tip
    See the [Dexalot Connector Guide](../blog/posts/using-dexalot-with-hummingbot/index.md) for step-by-step instructions.

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `avalanche` | `dexalot`

From inside the Hummingbot client, run `connect dexalot` in order to connect your wallet:

```
Enter your Dexalot private key >>>
Enter your Dexalot wallet address >>>

```

If connection is successful:

```
You are now connected to Dexalot!
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `dexalot`
- **Connection Type**: Websocket
- **API Docs**: <https://docs.dexalot.com/en/apiv2/>
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/dexalot>


### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

This perp exchange offers a paper trading mode: 

Afer you create an account and create the API keys, you can enter them by using the `connect dexalot_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available spot strategies / scripts. 