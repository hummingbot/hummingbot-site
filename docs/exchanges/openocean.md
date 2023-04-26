# `openocean`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/openocean](https://github.com/hummingbot/gateway/tree/main/src/connectors/openocean)
* Configs: [/gateway/src/templates/openocean.yml](https://github.com/hummingbot/gateway/tree/main/src/templates/openocean.yml)
* Maintainer: [kanghoulin](https://github.com/kanghoulin)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://openocean.finance/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/openocean/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/openocean_finance>
* API docs: <https://github.com/openocean-finance/openocean-api>
* SDK: <https://github.com/openocean-finance/OpenOcean-SDK-API>

## 🕸️ Supported Chains and Networks

* [Avalanche](/chains/avalanche): `avalanche`
* [Ethereum](/chains/ethereum): `mainnet`
* [Polygon](/chains/polygon): `mainnet`
* [Harmony](/chains/harmony): `mainnet`
* [BNB Chain](/chains/bnb-chain): `mainnet`
* [Cronos](/chains/cronos): `mainnet`

## 🔑 Setup

Run `gateway connect openocean` in order to connect your wallet:

```
Which chain do you want openocean to connect to? (avalanche, ethereum, polygon, harmony) >>>
Which network do you want openocean to connect to? (mainnet) >>>
Enter your polygon-mainnet private key >>>>
```

If connection is successful:

```
The openocean connector now uses wallet [pubKey] on polygon-mainnet
```
