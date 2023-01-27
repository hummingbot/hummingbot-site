# `traderjoe`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/traderjoe](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/traderjoe)
* Configs: [/gateway/src/templates/traderjoe.yml](https://github.com/hummingbot/hummingbot/blob/master/gateway/src/templates/traderjoe.yml)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: https://traderjoexyz.com/
* CoinMarketCap: https://coinmarketcap.com/exchanges/traderjoe/
* CoinGecko: https://www.coingecko.com/en/exchanges/traderjoe
* API docs: <https://docs.traderjoexyz.com/>
* SDK: <https://github.com/traderjoe-xyz/joe-sdk>

## 🕸️ Supported Chains and Networks

* Avalanche: `avalanche`, `fuji`

## 👷 Developer

Added by CoinAlpha in [v1.5.0](/release-notes/1.5.0/)

## 🔑 Connection

Run `gateway connect traderjoe` in order to connect your wallet:

```
Which chain do you want traderjoe to connect to? (avalanche) >>>
Which network do you want uniswap to connect to? (avalanche, fuji) >>>
Enter your avalanche-mainnet private key >>>>
```

If connection is successful:
```
The uniswap connector now uses wallet [pubKey] on avalanche-mainnet
```



## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect traderjoe` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Trader Joe and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Avalanche](/gateway/chains/ethereum/#avalanche) for more information about the default configuration settings and how to change them.
