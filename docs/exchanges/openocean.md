# `openocean`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [/gateway/src/connectors/openocean](https://github.com/hummingbot/hummingbot/tree/master/gateway/src/connectors/openocean)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://openocean.finance/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/openocean/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/openocean_finance>
* API docs: <https://github.com/openocean-finance/openocean-api>
* SDK: <https://github.com/openocean-finance/OpenOcean-SDK-API>

## 🔑 Setup

1. Follow the instructions on [Setting up Gateway](https://github.com/hummingbot/hummingbot/tree/master/gateway/setup) to install the Gateway Docker container
2. Run `gateway connect openocean` and follow the prompts to add your wallet private key. Like all API and private keys in Hummingbot, this key is encrypted with your Hummingbot password.
3. Run `create` to create an [AMM Arbitrage](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy/amm_arb) strategy between Openocean and a different exchange.
4. Run `start` to start the strategy, and you're trading!

## 📘 Additional Resources

See [Avalanche](/gateway/chains/ethereum#avalanche) for more information about the default configuration settings and how to change them.
