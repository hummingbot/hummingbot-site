# Gate.io

!!! tip "Support Hummingbot"
    Hummingbot Foundation has a partnership with Gate.io that shares some of your fees when you trade on Gate.io using Hummingbot, at no cost to you. To support us, create an account using our [Gate.io referral link](https://www.gate.io/signup/5868285). Thank you! 🙏

## ℹ️ Info

- **Type**: CLOB CEX
- **Website**: <https://www.gate.io>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/gate-io/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/gate-io>
- **API docs**: <https://www.gate.io/docs/apiv4/en/index.html>
- **Fees**: <https://www.gate.io/fee?>
- **Supported countries**: <https://www.gate.io/help/c2c/c2ctrade/21130/Which-Counties-Regions-are-supported-by-our-OTC-Services>


## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

- **Tier**: Silver
- **Maintainer**: Hummingbot Foundation

Currently, Gate.io is a **Silver** exchange, as voted by HBOT holders in each [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/gate_io)

### Usage

From inside the Hummingbot client, run `connect gate_io`:

```
>>> connect gate_io

Enter your gate_io API key >>>
Enter your gate_io secret key >>>
```

If connection is successful:

```
You are now connected to gate_io
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect gate_io_paper_trade` instead of `connect gate_io`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- **Connection type**: WebSocket
- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

### Usage

From inside the Hummingbot client, run `connect gate_io_perpetual`:

```
>>> connect gate_io_perpetual

Enter your gate_io_perpetual API key >>>
Enter your gate_io_perpetual secret key >>>
Enter your gate_io_perpetual user id >>>
```

If connection is successful:

```
You are now connected to gate_io_perpetual
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Testnet

No testnet currently available for Gate.io

## 🕯 Spot Candles Feed
*Collect historical OHCLV data from this exchange's spot markets*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_spot_candles)
- Supported intervals: 1s | 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 3d | 1w | 1M

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="gate_io",
                                        trading_pair="ETH-USDT",
                                        interval="1m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.

## 🕯 Perp Candles Feed
*Collect historical OHCLV data from this exchange's perp markets*

- [📁 Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_perpetual_candles)
-  Supported Intervals: 1s | 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 3d | 1w | 1M

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="gate_io_perpetual",
                                        trading_pair=trading_pair,
                                        interval="3m", max_records=50)
```

See [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py) for more details.

## How to create API keys

1. Go to Gate.io
Log in or create a new account at https://www.gate.io/.

2. Open the API Management page
Hover over the profile icon on the top right corner and go to the [API Management](https://www.gate.io/myaccount/api_key_manage) page:
   
3. Click on the Create API Key button

    ![Create API](gate.io-api1.png)

4. Name your API keys

5. Add IP whitelist (optional)
Enable `Bind IP` and input the IP addresses, separated by a comma. You'll need to find the public IP address of the machine you are running Hummingbot 
If you don't want to whitelist your IP then select `Later` instead but the API keys you create will only be valid for 90 days.

6. Choose API v4 Key and a Classic Account type

    ![API Trading](gate.io-api4.png)

7. Select Permissions
Please select the following permissions and then click on the Submit button.

- [Spot/Margin Trade] -> [Read And Write] - it allows trading Spot and Margin
- [Perpetual Contract] -> [Read And Write] - this will allow trading Futures. 
- [Wallet ] -> [Read Only] -> this is necessary to display the balances correctly.


8. Carefully read the **Risk Reminder**, tick both paragraphs, and click **I Accept**

    ![accept](gate.io-api2.png)

9. Enter **Fund Password**, choose **2FA Authentication** method and enter its code

    ![fund password](gate.io-api3.png)

10. Copy your API keys and store them somewhere safe. 

11. Now, you have created API keys for your Gate.io exchange!