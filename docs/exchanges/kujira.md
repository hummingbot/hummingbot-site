
## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed) |  |

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


## 2️⃣ AMM Connector
*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `kujira_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/gateway/tree/development/src/connectors/kujira>

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*
