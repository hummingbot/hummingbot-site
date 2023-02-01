# `crypto_com`

## 📁 Connector Info

* Type: SPOT CLOB CEX
* Folder: [hummingbot/connector/exchange/crypto_com](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/crypto_com)
* Maintainer:

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://crypto.com/>
* CoinMarketCap: <https://coinmarketcap.com/exchanges/crypto-com-exchange/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/crypto_com>
* API docs: <https://exchange-docs.crypto.com/spot/index.html#introduction>
* Transaction fees: <https://crypto.com/exchange/document/fees-limits>

## 🔑 Connection

Run `connect crypto_com` in order to enter your API keys:

```
Enter your Crypto_com API key >>>
Enter your Crypto_com secret API key >>>
```

If connection is successful:

```
You are now connected to crypto_com.
```

## 🪙 Fees

Hummingbot assumes 0.1% maker fees and 0.1% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/crypto_com/crypto_com_utils.py#L15)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
