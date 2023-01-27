# `sushiswap`

## 📁 Connector info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/sushiswap](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/sushiswap)
* Configs: [/gateway/src/templates/sushiswap.yml](/gateway/src/templates/sushiswap.yml)
* Maintainer: Hummingbot Foundation

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

## ℹ️ Exchange Info

* Website: https://sushi.com/
* CoinMarketCap: https://coinmarketcap.com/exchanges/sushiswap/
* CoinGecko: https://www.coingecko.com/en/exchanges/sushiswap
* API docs: <https://docs.sushi.com/>
* SDK: https://github.com/sushiswap/sdk

## 🕸️ Supported Chains and Networks

* Ethereum: `mainnet`
* BNB Chain: `mainnet`, `testnet`

## 🔑 Connection

Run `gateway connect sushiswap` in order to connect your wallet:

```
Which chain do you want sushiswap to connect to? (ethereum, binance-smart-chain) >>>
Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful:
```
The uniswap connector now uses wallet [pubKey] on ethereum-mainnet
```
