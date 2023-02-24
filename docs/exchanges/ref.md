# `ref`

## 📁 Connector Info

* Type: SPOT AMM DEX
* Folder: [/gateway/src/connectors/ref](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/ref)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://www.ref.finance/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/ref-finance/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/ref_finance>
* API docs: <https://guide.ref.finance/>
* SDK: <https://github.com/ref-finance/ref-sdk>

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect ref` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Afterwards, run `create` to create an [AMM Arbitrage](/strategies/amm-arbitrage/) strategy between Sushiswap and a different exchange.
4. Run `start` to start the strategy!

## 📘 Additional Resources

See [Near Protocol](/gateway/chains/near) for more information about the default configuration settings and how to change them.
