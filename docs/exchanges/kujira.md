
## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green	)
- **Maintainer:**   

Currently, Kujira is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component                                  | Status        | Notes            |
|--------------------------------------------|---------------|------------------|
| [🔀 Spot Connector](#spot-connector)       | ✅             | Supports testnet |
| [🔀 Perp Connector](#perp-connector)       | Not available |                  |
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available |                  |
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available |                  |

## ℹ️ Exchange Info

- **Website**: <https://fin.kujira.network/>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/kujira/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/kujira>
- **API Docs**: <https://docs.kujira.app/dapps-and-infrastructure/fin>
- **Fees**: <https://docs.kujira.app/dapps-and-infrastructure/fin/how-to-use-fin/spot-and-margin-trade-ui#spot-trading>

## 🔑 How to Connect

Create a Keplr wallet to use the supported networks below:

| Chain    | Networks             |
|----------|----------------------|
| `kujira` | `mainnet`, `testnet` |

From inside the Hummingbot client, run `gateway connect kujira` in order to connect your wallet:

In the private key field you have to put your mnemonic.

```  
Which chain do you want kujira to connect to? (kujira) >>> kujira

Which network do you want kujira to connect to? (mainnet, testnet) >>> mainnet

Do you want to continue to use node url 'None' for kujira-mainnet? (Yes/No) >>> Yes

Enter your kujira-mainnet wallet private key >>>  *****************************
***********************************

Enter your kujira account number (input 0 if unsure) >>> 0
```

If connection is successful:

```  
The kujira connector now uses wallet [pubKey] on kujira-mainnet  
```  

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `kujira`
- **Connection Type**: REST API
- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/kujira>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`