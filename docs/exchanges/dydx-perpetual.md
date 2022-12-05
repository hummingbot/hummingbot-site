---
tags:
- perp exchange connector
- ethereum dex
---

# `dydx_perpetual`

## 📁 [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_perpetual)

## ℹ️ Exchange Info

**dydx (perpetual)**
[Website](https://dydx.exchange/) | [CoinMarketCap](https://coinmarketcap.com/exchanges/dydx/) | [CoinGecko](https://www.coingecko.com/en/exchanges/dydx-margin)

* API docs: <https://docs.dydx.exchange/#perpetual-contracts>
* Transaction fees: <https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx>
* Minimum order size: <https://help.dydx.exchange/en/articles/4800587-l2-perpetual-contract-specs>
* Creating API keys: <https://docs.dydx.exchange/#get-api-keys>

## 👷 Maintenance

* Release added: [0.39.0](/release-notes/0.39.0/) by [MerkleHedge](https://merklehedge.com/)
* Maintainer: [CoinAlpha](https://coinalpha.com)

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
* [Derive StarkKey](https://docs.dydx.exchange/?python#derive-starkkey)

Alternatively, you can follow these steps to get the required credentials:

1. From the dydx Perpetuals exchange, right-click anywhere on your web browser, and select **Inspect** to open Developer Tools
2. Go to Application > Local Storage > <https://trade.dydx.exchange>
3. Select **STARK_KEY_PAIRS** and click the drop-down next to your wallet address to get the stark private key
4. Select **API_KEY_PAIRS** and click the drop-down next to your wallet address to get the API key, secret key, and passphrase

### Deposit assets

Follow the instructions below to deposit assets onto dYdX's Layer 2 side-chain:

* [How to deposit USDC or any ERC-20 token into your L2 Perpetual account](https://help.dydx.exchange/en/articles/5108497-how-to-deposit-usdc-or-any-erc-20-token-into-your-l2-perpetual-account?utm_content=article_5108497)

## 🪙 Fees

Hummingbot assumes 0.05% maker fees and 0.20% taker fees ([source](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/dydx/dydx_utils.py#L11)).

Users can override these assumptions with [Override Fees](/global-configs/override-fees/).
