# `injective`

## 📁 Connector Info

* Type: SPOT CLOB DEX

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://helixapp.com/markets?type=spot>
* CoinMarketCap: <https://coinmarketcap.com/currencies/injective>
* CoinGecko: <https://www.coingecko.com/en/coins/injective>
* API docs: <https://api.injective.exchange>
* SDK: <https://github.com/InjectiveLabs/sdk-python>

## 🕸️ Supported Chains and Networks

* [Injective](/chains/injective): `mainnet` `testnet` `devnet`

## 🔑 Connection

Run `connect injective` in order to enter your API keys:

```
Enter your injective API key >>>
Enter your injective secret key >>>
```

If connection is successful:

```
You are now connected to injective.
```

## 🪙 Fees

Hummingbot assumes 0.75% maker fees and 0.75% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/ciex/ciex_utils.py#L9)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
