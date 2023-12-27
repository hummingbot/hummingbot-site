
## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green	)
- **Maintainer:** [wojak](https://github.com/mlguys)

Currently, XRPL is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component                                  | Status        | Notes            |
|--------------------------------------------|---------------|------------------|
| [🔀 Spot Connector](#spot-connector)       | ✅             | Supports testnet |
| [🔀 Perp Connector](#perp-connector)       | Not available |                  |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available |                  |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available |                  |

## ℹ️ Exchange Info
- **Website**: <https://xrpl.org/>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/xrp/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/xrp>
- **API Docs**: <https://xrpl.org/docs.html>
- **Fees**: <https://xrpl.org/transfer-fees.html>

## 🔑 How to Connect

Create a XRPL wallet to use the supported networks below:

| Chain    | Networks             |
|----------|----------------------|
| `xrpl` | `mainnet`, `testnet`, `devnet` |

From inside the Hummingbot client, run `gateway connect xrpl` in order to connect your wallet:

In the private key field you have to put your seed key.

```  
Which chain do you want xrpl to connect to? (xrpl) >>> xrpl

Which network do you want xrpl to connect to? (mainnet, testnet) >>> mainnet

Do you want to continue to use node url 'None' for xrpl-mainnet? (Yes/No) >>> Yes

Enter your xrpl-mainnet wallet private key >>>  *****************************
***********************************
```

If connection is successful:

```  
The xrpl connector now uses wallet [pubKey] on xrpl-mainnet  
```  

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `xrpl`
- **Connection Type**: Websocket via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/xrpl>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`