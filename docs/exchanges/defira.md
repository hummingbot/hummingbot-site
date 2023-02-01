# `defira`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/defira](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/defira)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://defira.com>
* CoinMarketCap: <https://coinmarketcap.com/currencies/defira/>
* CoinGecko: <https://www.coingecko.com/en/coins/fira>
* API docs: <https://docs.defira.com/>

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect defira` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Defira and a different exchange.
4. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

See [Harmony](/gateway/chains/ethereum/#harmony) for more information about the default configuration settings and how to change them.
