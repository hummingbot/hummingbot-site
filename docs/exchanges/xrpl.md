!!! tip "Foundation Sponsor"
    XRP Ledger (XRPL) is a [sponsor](/about/sponsors) of Hummingbot Foundation, so when you use Hummingbot to run bots on XRPL, you're supporting the Foundation and our mission to democratize algo trading with open source software.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

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

### Create and fund a XRPL Wallet

* Please follow the steps in this guide to create a XRPL wallet: [Ripple - Create wallet](https://xrpl.org/)
* Make sure you fund your wallet with enough XRP and tokens for trading

| Chain    | Networks             |
|----------|----------------------|
| `xrpl` | `mainnet`, `testnet`, `devnet` |


### Add XRP Credentials to Hummingbot

From inside the Hummingbot client, run `connect xrpl` in order to connect your wallet:

```
Enter your XRPL wallet secret key >>>  *****************************
***********************************
```

Enter the `seed` from the account creation script, which starts with "s".

Afterwards, run `balance` If your keys are correct and the node is online, you should see your XRPL balances:


### Modify the XRPL configuration file

Open the newly created `/conf/connectors/xrpl.yml` file:

[![](../assets/img/xrpl.png)](../assets/img/xrpl.png)

```bash
connector: xrpl

xrpl_secret_key: 7b2263727970746f223a207b226363125532223a20226165732d3132382d637472222876434586572706172616d73223a207b226976223a20226231613939313361626139353237393664623637373864653735346339653734234265547368657274657874223a20223766646530343233616361303036306430653437653461643539336563393337336434326534313334376239656534663637383733316261363130323332222c20226b6466223a202270626b646632222c20226b68534565478172616d73223a207b2263223a20313030303030302c2022646b6c656e223a2033322c2022707266223a2022686d61632d736861323536222c202273616c74223a20223866373731303365383935363765303937666663653330646134313063346436227d2c20226d6163223a2022666331373163653132363435646665353939616565306265646161343238626162625464564332326466303936623930626663663231613634646538346339316437227d2c202276657273696f6e223a20332c2112616c696173223a2022227d

custom_markets:
  SOLO-XRP:
    base: SOLO
    quote: XRP
    base_issuer: rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz
    quote_issuer: ''

wss_node_url: wss://s1.ripple.com/

wss_second_node_url: wss://s1.ripple.com/


```

- Please check if your trading pairs can be found in these lists (most of them are from <https://gatehub.net/markets>):

<details>
  <summary>Default trading pairs with token issuer address:</summary>
  
  ```bash
  MARKETS = {
      "XRP-USD": {
          "base": "XRP",
          "quote": "USD",
          "base_issuer": "",
          "quote_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
      },
      "XRP-EUR": {
          "base": "XRP",
          "quote": "EUR",
          "base_issuer": "",
          "quote_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
      },
      "XRP-GBP": {
          "base": "XRP",
          "quote": "GBP",
          "base_issuer": "",
          "quote_issuer": "r4GN9eEoz9K4BhMQXe4H1eYNtvtkwGdt8g",
      },
      "XRP-BTC": {
          "base": "XRP",
          "quote": "BTC",
          "base_issuer": "",
          "quote_issuer": "rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL",
      },
      "XRP-ETH": {
          "base": "XRP",
          "quote": "ETH",
          "base_issuer": "",
          "quote_issuer": "rcA8X3TVMST1n3CJeAdGk1RdRCHii7N2h",
      },
      "XRP-LTC": {
          "base": "XRP",
          "quote": "LTC",
          "base_issuer": "",
          "quote_issuer": "rcRzGWq6Ng3jeYhqnmM4zcWcUh69hrQ8V",
      },
      "XRP-CNY": {
          "base": "XRP",
          "quote": "CNY",
          "base_issuer": "",
          "quote_issuer": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y",
      },
      "XRP-BCH": {
          "base": "XRP",
          "quote": "BCH",
          "base_issuer": "",
          "quote_issuer": "rcyS4CeCZVYvTiKcxj6Sx32ibKwcDHLds",
      },
      "XRP-ETC": {
          "base": "XRP",
          "quote": "ETC",
          "base_issuer": "",
          "quote_issuer": "rDAN8tzydyNfnNf2bfUQY6iR96UbpvNsze",
      },
      "XRP-DSH": {
          "base": "XRP",
          "quote": "DSH",
          "base_issuer": "",
          "quote_issuer": "rcXY84C4g14iFp6taFXjjQGVeHqSCh9RX",
      },
      "XRP-XAU": {
          "base": "XRP",
          "quote": "XAU",
          "base_issuer": "",
          "quote_issuer": "rcoef87SYMJ58NAFx7fNM5frVknmvHsvJ",
      },
      "XRP-SGB": {
          "base": "XRP",
          "quote": "SGB",
          "base_issuer": "",
          "quote_issuer": "rctArjqVvTHihekzDeecKo6mkTYTUSBNc",
      },
      "XRP-USDT": {
          "base": "XRP",
          "quote": "USDT",
          "base_issuer": "",
          "quote_issuer": "rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq",
      },
      "XRP-USDC": {
          "base": "XRP",
          "quote": "USDC",
          "base_issuer": "",
          "quote_issuer": "rcEGREd8NmkKRE8GE424sksyt1tJVFZwu",
      },
      "XRP-WXRP": {
          "base": "XRP",
          "quote": "WXRP",
          "base_issuer": "",
          "quote_issuer": "rEa5QY8tdbjgitLyfKF1E5Qx3VGgvbUhB3",
      },
      "XRP-GALA": {
          "base": "XRP",
          "quote": "GALA",
          "base_issuer": "",
          "quote_issuer": "rf5YPb9y9P3fTjhxNaZqmrwaj5ar8PG1gM",
      },
      "XRP-FLR": {
          "base": "XRP",
          "quote": "FLR",
          "base_issuer": "",
          "quote_issuer": "rcxJwVnftZzXqyH9YheB8TgeiZUhNo1Eu",
      },
      "XRP-XAH": {
          "base": "XRP",
          "quote": "XAH",
          "base_issuer": "",
          "quote_issuer": "rswh1fvyLqHizBS2awu1vs6QcmwTBd9qiv",
      },
      "USD-XRP": {
          "base": "USD",
          "quote": "XRP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "",
      },
      "USD-EUR": {
          "base": "USD",
          "quote": "EUR",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
      },
      "USD-GBP": {
          "base": "USD",
          "quote": "GBP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "r4GN9eEoz9K4BhMQXe4H1eYNtvtkwGdt8g",
      },
      "USD-BTC": {
          "base": "USD",
          "quote": "BTC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL",
      },
      "USD-BCH": {
          "base": "USD",
          "quote": "BCH",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcyS4CeCZVYvTiKcxj6Sx32ibKwcDHLds",
      },
      "USD-LTC": {
          "base": "USD",
          "quote": "LTC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcRzGWq6Ng3jeYhqnmM4zcWcUh69hrQ8V",
      },
      "USD.b-XRP": {
          "base": "USD",
          "quote": "XRP",
          "base_issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
          "quote_issuer": "",
      },
      "USD-USDT": {
          "base": "USD",
          "quote": "USDT",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq",
      },
      "USD-USDC": {
          "base": "USD",
          "quote": "USDC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcEGREd8NmkKRE8GE424sksyt1tJVFZwu",
      },
      "USD-WXRP": {
          "base": "USD",
          "quote": "WXRP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rEa5QY8tdbjgitLyfKF1E5Qx3VGgvbUhB3",
      },
      "USD-GALA": {
          "base": "USD",
          "quote": "GALA",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rf5YPb9y9P3fTjhxNaZqmrwaj5ar8PG1gM",
      },
      "USD-FLR": {
          "base": "USD",
          "quote": "FLR",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcxJwVnftZzXqyH9YheB8TgeiZUhNo1Eu",
      },
      "EUR-XRP": {
          "base": "EUR",
          "quote": "XRP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "",
      },
      "EUR-USD": {
          "base": "EUR",
          "quote": "USD",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
      },
      "EUR-GBP": {
          "base": "EUR",
          "quote": "GBP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "r4GN9eEoz9K4BhMQXe4H1eYNtvtkwGdt8g",
      },
      "EUR-USD.b": {
          "base": "EUR",
          "quote": "USD",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
      },
      "EUR-BTC": {
          "base": "EUR",
          "quote": "BTC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rchGBxcD1A1C2tdxF6papQYZ8kjRKMYcL",
      },
      "EUR-BCH": {
          "base": "EUR",
          "quote": "BCH",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcyS4CeCZVYvTiKcxj6Sx32ibKwcDHLds",
      },
      "EUR-LTC": {
          "base": "EUR",
          "quote": "LTC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcRzGWq6Ng3jeYhqnmM4zcWcUh69hrQ8V",
      },
      "EUR-USDT": {
          "base": "EUR",
          "quote": "USDT",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq",
      },
      "EUR-USDC": {
          "base": "EUR",
          "quote": "USDC",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcEGREd8NmkKRE8GE424sksyt1tJVFZwu",
      },
      "EUR-WXRP": {
          "base": "EUR",
          "quote": "WXRP",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rEa5QY8tdbjgitLyfKF1E5Qx3VGgvbUhB3",
      },
      "EUR-GALA": {
          "base": "EUR",
          "quote": "GALA",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rf5YPb9y9P3fTjhxNaZqmrwaj5ar8PG1gM",
      },
      "EUR-FLR": {
          "base": "EUR",
          "quote": "FLR",
          "base_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
          "quote_issuer": "rcxJwVnftZzXqyH9YheB8TgeiZUhNo1Eu",
      },
      "SGB-XRP": {
          "base": "SGB",
          "quote": "XRP",
          "base_issuer": "rctArjqVvTHihekzDeecKo6mkTYTUSBNc",
          "quote_issuer": "",
      },
      "ELS-XRP": {
          "base": "ELS",
          "quote": "XRP",
          "base_issuer": "rHXuEaRYnnJHbDeuBH5w8yPh5uwNVh5zAg",
          "quote_issuer": "",
      },
      "USDT-XRP": {
          "base": "USDT",
          "quote": "XRP",
          "base_issuer": "rcvxE9PS9YBwxtGg1qNeewV6ZB3wGubZq",
          "quote_issuer": "",
      },
      "USDC-XRP": {
          "base": "USDC",
          "quote": "XRP",
          "base_issuer": "rcEGREd8NmkKRE8GE424sksyt1tJVFZwu",
          "quote_issuer": "",
      },
      "SOLO-XRP": {
          "base": "SOLO",
          "quote": "XRP",
          "base_issuer": "rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz",
          "quote_issuer": "",
      },
      "WXRP-XRP": {
          "base": "WXRP",
          "quote": "XRP",
          "base_issuer": "rEa5QY8tdbjgitLyfKF1E5Qx3VGgvbUhB3",
          "quote_issuer": "",
      },
      "GALA-XRP": {
          "base": "GALA",
          "quote": "XRP",
          "base_issuer": "rf5YPb9y9P3fTjhxNaZqmrwaj5ar8PG1gM",
          "quote_issuer": "",
      },
      "FLR-XRP": {
          "base": "FLR",
          "quote": "XRP",
          "base_issuer": "rcxJwVnftZzXqyH9YheB8TgeiZUhNo1Eu",
          "quote_issuer": "",
      },
      "SOLO-USD": {
          "base": "SOLO",
          "quote": "USD",
          "base_issuer": "rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz",
          "quote_issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
      },
      "SOLO-USD.b": {
          "base": "SOLO",
          "quote": "USD",
          "base_issuer": "rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz",
          "quote_issuer": "rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B",
      },
      "ICOIN-XRP": {
          "base": "icoin",
          "quote": "XRP",
          "base_issuer": "rJSTh1VLk52tFC3VRXkNWu7Q4nYmfZv7BZ",
          "quote_issuer": "",
      },
      "CORE-XRP": {
          "base": "CORE",
          "quote": "XRP",
          "base_issuer": "rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D",
          "quote_issuer": "",
      },
      "XMEME-XRP":

 {
          "base": "XMEME",
          "quote": "XRP",
          "base_issuer": "r4UPddYeGeZgDhSGPkooURsQtmGda4oYQW",
          "quote_issuer": "",
      },
      "CSC-XRP": {
          "base": "CSC",
          "quote": "XRP",
          "base_issuer": "rCSCManTZ8ME9EoLrSHHYKW8PPwWMgkwr",
          "quote_issuer": "",
      },
      "FURY-XRP": {
          "base": "FURY",
          "quote": "XRP",
          "base_issuer": "rnoKi9s9b6WYaNGWQy4qVdnKo6Lj2eHE1D",
          "quote_issuer": "",
      },
      "XSPECTAR-XRP": {
          "base": "xSPECTAR",
          "quote": "XRP",
          "base_issuer": "rh5jzTCdMRCVjQ7LT6zucjezC47KATkuvv",
          "quote_issuer": "",
      },
      "RPR-XRP": {
          "base": "RPR",
          "quote": "XRP",
          "base_issuer": "r3qWgpz2ry3BhcRJ8JE6rxM8esrfhuKp4R",
          "quote_issuer": "",
      },
      "XRDOGE-XRP": {
          "base": "XRdoge",
          "quote": "XRP",
          "base_issuer": "rLqUC2eCPohYvJCEBJ77eCCqVL2uEiczjA",
          "quote_issuer": "",
      },
      "EQUILIBRIUM-XRP": {
          "base": "Equilibrium",
          "quote": "XRP",
          "base_issuer": "rpakCr61Q92abPXJnVboKENmpKssWyHpwu",
          "quote_issuer": "",
      },
  }
  ```
</details>

        
- If you can’t find your trading pairs, add them as an entry in `custom_markets` in the connector config file at `/conf/connectors/xrpl.yml`, please note that `custom_markets` will overwrite the default trading pairs. Example:



```python
custom_markets:
  SOLO-XRP:
    base: SOLO
    quote: XRP
    base_issuer: rsoLo2S1kiGeCcn6hCUXVrCpGMWLrRrLZz
    quote_issuer: ''
  CORE-XRP:
    base: CORE
    quote: XRP
    base_issuer: rcoreNywaoz2ZCQ8Lg2EbSLnGuRBmun6D
    quote_issuer: ''
```

- You can find token information like issuer or currency code at <https://xrpl.services/tokens>
- See more pairs on Gatehub: <https://gatehub.net/markets>
- Top 10 traded pairs on Sologenics: <https://sologenic.org/market-index>
    - SOLO/XRP
    - CORE/XRP
    - RPR/XRP
    - FURY/XRP
    - CSC/XRP
    - XSPECTAR/XRP
    - EQUILIBRIUM/XRP
    - RLS/XRP
    - XRDOGE/XRP
    - XMEME/XRP


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `xrpl`
- **Connection Type**: Websocket via gRPC
- **Folder**: <<https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/xrpl.md>>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`