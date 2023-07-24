# Ascendex

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Ascendex that shares some of your fees when you trade on Ascendex using Hummingbot, at no cost to you. To support us, create an account using our [Ascendex referral link](https://ascendex.com/register?inviteCode=UEIXNXKW). Thank you! 🙏

## ℹ️ Exchange Info

- **Type**: CLOB CEX
- **Website**: <https://www.ascendex.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/ascendex/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/ascendex>
- **API docs**: <https://docs.ascendex.com>
- **Fees**: <https://www.ascendex.com/vip/level>
- **Supported countries**: <https://www.ascendex.com/support/10247584234521> 

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

- **Tier**: Silver
- **Maintainer**: Hummingbot Foundation

Currently, Ascendex is a **Silver** exchange, as voted by HBOT holders in each [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ascendex)

### Usage

From inside the Hummingbot client, run `connect ascendex`:

```
>>> connect ascendex

Enter your ascendex API key >>>
Enter your ascendex secret key >>>
```

If connection is successful:

```
You are now connected to ascendex
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect ascendex_paper_trade` instead of `connect ascendex`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*



### Usage



### Order Types



### Position Modes



### Testnet

## 🕯 Spot Candles Feed
*Collect historical OHCLV data from this exchange's spot markets*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/ascendex_spot_candles)
- Supported intervals: 1s | 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 3d | 1w | 1M

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="ascendex",
                                        trading_pair="ETH-USDT",
                                        interval="1m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.

## 🕯 Perp Candles Feed
*Collect historical OHCLV data from this exchange's perp markets*


### Usage

## How to create API keys

Log in to your AscendEX account using your PC and visit profile icon – [API Setting].

   [![Create API](ascendex-api1.png)](ascendex-api1.png)

Click [New API Key] in the upper right corner of the page.

   [![New API](ascendex-api2.png)](ascendex-api2.png)

Create a name for the new API key and set up API permissions and IP address restrictions. Complete a three-step verification by entering your phone, email, and Google verification code. Click [Generate API Key] to complete the process.

   [![Create API name](ascendex-api3.png)](ascendex-api3.png)

A pop-up containing both public and private API keys will appear on your screen. Please keep a copy of both keys, as they will only be viewable to you during this stage of the setup. 
For account security, never share your API keys. In the case of a lost or forgotten API key, it is advised to delete the old API and create new keys immediately.

   [![API text](ascendex-api4.png)](ascendex-api4.png)

After creating an API key, you can Edit or Delete your API keys under the Action tab.

   [![API Done](ascendex-api5.png)](ascendex-api5.png)

### Notes:

- API keys without an IP address will only remain valid for 365 days.
- Up to 20 IP addresses can be bound to one API key.
- For security enhancement, it is recommended that only IP addresses in users API's whitelist make API calls to users' network. An "unrestricted" setting will allow all IPs to access the network, decreasing account security.
- Multiple IP addresses must be separated by half-width commas during the setup.
