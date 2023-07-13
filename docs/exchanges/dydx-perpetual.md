# dYdX

**Support Hummingbot by creating an account using our [referral link](https://trade.dydx.exchange/r/2P8N)!** 🙏🙏🙏

## ℹ️ Info

- Type: Decentralized
- Website: <https://dydx.exchange/>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/dydx/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/dydx>
- API docs: <https://docs.dydx.exchange/>
- API version: 3
- Fees: <https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx>
- Supported countries: Global with some exceptions (Check [here](https://dydx.exchange/terms) for more details)

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

HBOT holders voted this exchange into the Silver tier for the current [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

**Maintainer:** Hummingbot Foundation

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**

dYdX is supported on [Hummingbot Miner](https://miner.hummingbot.io/), a platform that rewards users for providing liquidity on specific trading pairs.

**Past**

* [dYdX Bounty Hunt](https://blog.hummingbot.org/2021-07-dydx-perpetual-strategy-bounty-hunt/)

## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1rsNcFD5Cw" title="HOW TO BECOME A CRYPTO MARKET MAKER IN LESS THAN 30 MINUTES - on dYdX using Hummingbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/zkoxtnZ0KvE" title="dYdX + Hummingbot Development Bounty AMA w/ Corey Miller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_M_SUAP3Zo" title="Hedge in Market Making using dYdX Perpetuals | Trader Strategies |" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_perpetual)


## How to create API keys

API credentials and a stark private key can be obtained programmatically using their documentation:

* [Recover Default API Credentials](https://dydxprotocol.github.io/v3-teacher/#recover-default-api-credentials)
* [Derive StarkKey](https://help.dydx.exchange/en/articles/4797307-what-is-a-stark-key)

Alternatively, you can follow these steps to get the required credentials:

1. From the dydx Perpetuals exchange, right-click anywhere on your web browser, and select **Inspect** to open Developer Tools
2. Go to Application > Local Storage > <https://trade.dydx.exchange>
3. Select **STARK_KEY_PAIRS** and click the drop-down next to your wallet address to get the stark private key
4. Select **API_KEY_PAIRS** and click the drop-down next to your wallet address to get the API key, secret key, and passphrase


### How to Connect

Run `connect dydx_perpetual` in Hummingbot in order to add your API keys.

You will need the following to connect Hummingbot to `dydx_perpetual`:

* API key
* API secret key
* Passphrase
* Account number: set this value to `0`
* Stark private key

### Order Types

### Candles Feed

### Paper Trading


### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Candles Feed

### Testnets
