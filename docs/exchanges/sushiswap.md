# `sushiswap`

## 📁 Connector info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/sushiswap](https://github.com/hummingbot/gateway/tree/main/src/connectors/sushiswap)
* Configs: [/gateway/src/templates/sushiswap.yml](https://github.com/hummingbot/gateway/tree/main/src/templates/sushiswap.yml)
* Maintainer: Hummingbot Foundation

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://sushi.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/sushiswap/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/sushiswap>
* API docs: <https://docs.sushi.com/>
* SDK: <https://github.com/sushiswap/sdk>

## 🕸️ Supported Chains and Networks

* [Ethereum](/chains/ethereum): `mainnet`, `arbitrum_one`, `goerli`
* [Avalanche](/chains/avalanche): `avalanche`, `fuji`
* [Binance Smart Chain](/chains/bnb-chain): `mainnet`, `testnet`
* [Harmony](/chains/harmony): `mainnet`
* [Polygon](/chains/polygon): `mainnet`, `mumbai`

## 🔑 Connection

Run `gateway connect sushiswap` in order to connect your wallet:

```
Which chain do you want sushiswap to connect to? (ethereum, binance-smart-chain, polygon) >>>
Which network do you want sushiswap to connect to? (mainnet, goerli) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful:

```
The sushiswap connector now uses wallet [pubKey] on ethereum-mainnet
```
