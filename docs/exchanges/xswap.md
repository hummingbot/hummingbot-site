# `xswap`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/xswap](https://github.com/hummingbot/gateway/tree/main/src/connectors/xsswap)
* Configs: [/gateway/src/templates/xswap.yml](https://github.com/hummingbot/gateway/blob/main/src/templates/xsswap.yml)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://xspswap.finance/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/xswap-protocol/>
* CoinGecko: <https://www.coingecko.com/en/coins/xswap-protocol>
* API docs: <https://docs.xspswap.finance/xswap-protocol/>
* SDK: <https://github.com/Carry-So/xsswap-sdk>

## 🕸️ Supported Chains and Networks

* [XDC Chain](/chains/xdc-chain): `xinfin`, `apothem`

## 🔑 Connection

Run `gateway connect xswap` in order to connect your wallet:

```
Which chain do you want xswap to connect to? (xdc-chain) >>>
Which network do you want xswap to connect to? (xinfin, apothem) >>>
Enter your xdc-chain-xinfin private key >>>>
```

If connection is successful:

```
The xswap connector now uses wallet [pubKey] on xdc-chain-xinfin
```