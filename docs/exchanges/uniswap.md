# `uniswap`

## 📁 Connector Info

* Type: SPOT AMM-RANGE DEX
* Folder: [/gateway/src/connectors/uniswap](https://github.com/hummingbot/gateway/blob/main/src/connectors/uniswap)
* Configs: [/gateway/src/templates/uniswap.yml](https://github.com/hummingbot/gateway/blob/main/src/templates/uniswap.yml)
* Maintainer: Hummingbot Foundation

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)

The Gold exchange is the top CEX or DEX selected by HBOT voters in the latest Poll. Their connectors are maintained by Hummingbot Foundation and are continually improved, serving as the "gold standard" template for all other connectors of that type.

## ℹ️ Exchange Info

* Website: https://uniswap.org/
* CoinMarketCap: https://coinmarketcap.com/exchanges/uniswap-v2/
* CoinGecko: https://www.coingecko.com/en/exchanges/uniswap_v2
* API docs: https://docs.uniswap.org/
* SDK: https://docs.uniswap.org/sdk/v3/overview

## 🕸️ Supported Chains and Networks

* [Ethereum](/chains/ethereum): `mainnet`, `goerli`, `arbitrum_one`, `optimism`
* [Polygon](/chains/polygon): `mainnet`, `mumbai`

## 🔑 Connection

The `uniswap` connector fetches prices and creates swaps. Run `gateway connect uniswap` in order to connect your wallet:

```
Which chain do you want uniswap to connect to? (ethereum, polygon) >>>
Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful:
```
The uniswap connector now uses wallet [pubKey] on ethereum-mainnet
```

**Liquidity provision:** The  `uniswapLP` connector interfaces with liquidity provision-related functions. Run `gateway connect uniswapLP` in order to connect your wallet to perform LP functions.