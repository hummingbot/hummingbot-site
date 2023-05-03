# `dydx_perpetual`

## 📁 Connector Info

* Type: PERP CLOB DEX
* Folder: [/hummingbot/connector/derivative/dydx_perpetual](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_perpetual)
* Maintainer: Hummingbot Foundation

## 🏆 Exchange Tier

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

## ℹ️ Exchange Info

* Website: https://dydx.exchange/
* CoinMarketCap: https://coinmarketcap.com/exchanges/dydx/
* CoinGecko: https://www.coingecko.com/en/exchanges/dydx-margin
* API docs: <https://docs.dydx.exchange>
* Fees: <https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx>

## 🔑 Connection

Run `connect dydx_perpetual` in Hummingbot in order to add your API keys.

You will need the following to connect Hummingbot to `dydx_perpetual`:

* API key
* API secret key
* Passphrase
* Account number: set this value to `0`
* Stark private key

API credentials and a stark private key can be obtained programmatically using their documentation:

* [Recover Default API Credentials](https://dydxprotocol.github.io/v3-teacher/#recover-default-api-credentials)
* [Derive StarkKey](https://help.dydx.exchange/en/articles/4797307-what-is-a-stark-key)

Alternatively, you can follow these steps to get the required credentials:

1. From the dydx Perpetuals exchange, right-click anywhere on your web browser, and select **Inspect** to open Developer Tools
2. Go to Application > Local Storage > <https://trade.dydx.exchange>
3. Select **STARK_KEY_PAIRS** and click the drop-down next to your wallet address to get the stark private key
4. Select **API_KEY_PAIRS** and click the drop-down next to your wallet address to get the API key, secret key, and passphrase

**Depositing assets:**

Follow the instructions below to deposit assets onto dYdX's Layer 2 side-chain:

* [How to deposit USDC or any ERC-20 token into your L2 Perpetual account](https://help.dydx.exchange/en/articles/5108497-how-to-deposit-usdc-or-any-erc-20-token-into-your-l2-perpetual-account?utm_content=article_5108497)
