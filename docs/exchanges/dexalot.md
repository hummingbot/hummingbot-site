# `dexalot`

## 📁 Connector Info

* Type: SPOT CLOB DEX
* Folder: [/gateway/src/connectors/dexalot](https://github.com/hummingbot/gateway/blob/main/src/connectors/dexalot)
* Configs: [/gateway/src/templates/dexalot.yml](https://github.com/hummingbot/gateway/blob/main/src/templates/dexalot.yml)
* Maintainer: [CoinAlpha](https://coinalpha.com)

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)

Bronze exchange connectors have passed the Minimum Voting Power Threshold in the latest Poll and are included in each monthly release. They are not maintained by Hummingbot Foundation but may be maintained by a community member.

## ℹ️ Exchange Info

* Website: <https://dexalot.com/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/dexalot/markets/>
* CoinGecko: <https://www.coingecko.com/en/exchanges/dexalot>
* API docs: <https://docs.dexalot-test.com/apiv2>

## 🕸️ Supported Chains and Networks

* [Avalanche](/chains/avalanche): `dexalot` (subnet)

## 🔑 Connection

Run `gateway connect dexalot` in order to connect to your wallet:

```
Which chain do you want dexalot to connect to? (avalanche) >>>
Which network do you want dexalot to connect to? (dexalot)

Enter your dexalot-avalanche-dexalot wallet private key >>>

Enter your Dexalot API Key (you can request one from the Dexalot team) >>> 
```

If connection is successful:
```
The dexalot connector now uses wallet [pubKey] on avalanche-dexalot
```

!!! note "Getting Dexalot API Keys"
    A Dexalot API key is not necessary to use the connector, but having an API key allows more bot instances per IP address. You can request an API key by contacting the Dexalot team at support@dexalot.com.

!!! tip "Accessing Dexalot"
    Since Dexalot is hosted on its own [Avalanche subnet](https://docs.avax.network/subnets), you need to deposit assets from the Avalanche C-Chain into the Dexalot subnet. Consult the [Dexalot blog](https://medium.com/dexalot) for articles and guides on how to use Dexalot.
