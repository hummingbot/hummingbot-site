# Kucoin

**Support Hummingbot by creating an account using our [referral link](https://www.kucoin.com/ucenter/signup?rcode=272KvRf)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.kucoin.com>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/kucoin/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/kucoin>
- API docs: <https://docs.kucoin.com>
- API version: 2
- Fees: <https://www.kucoin.com/vip/level>
- Supported countries: https://www.kucoin.com/support/10247584234521 

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

HBOT holders voted this exchange into the Silver tier for the current [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

**Maintainer:** Hummingbot Foundation

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**

Kucoin is supported on [Hummingbot Miner](https://miner.hummingbot.io/), a platform that rewards users for providing liquidity on specific trading pairs.

**Past**

[API Trading Carnival with Kucoin](https://www.kucoin.com/news/en-kucoin-api-trading-carnival-042823?source=broker)

## 📺 Content

<iframe width="560" height="315" src="https://www.youtube.com/embed/8z7YSxcMrFI" title="Hummingbot demo and AMA for Kucoin community
" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How to create API keys

### Step 1

Log in to [Kucoin](https://www.kucoin.com), click the avatar, in the drop-down menu, select **API Management** > **Create API**.

![API](kucoin-api1.png)

### Step 2

A window will pop up where you can choose either **API Trading** or **Link Third-Party Applications**. 

For API trading, enter the API name and API passphrase.

![API Trading](kucoin-api2.PNG)

For linking to a third-party application, first select the name of the third-party app you wish to link. Then, enter the API name and API passphrase, and select API permissions.

For account security purposes, withdrawals are not supported by linking a third-party application, and there is no need to link an IP address. During transactions, the platform will use the configured third-party IP addresses.

![API Trading](kucoin-api3.PNG)

During the creation process, pay attention to the relevant prompts and rules on the API creation page. Here are some points for your special attention:

- The API passphrase is crucial. It is highly recommended to write it down and store it in a secure location. You will need the API passphrase for verification when using the API. Additionally, do not disclose your API key to prevent any potential loss of assets.

- To ensure the security of your funds, API keys that are enabled for spot, margin, or futures trading but not linked to an IP address will be automatically deleted or have their trade permissions disabled after 30 days of inactivity. However, there is no expiration limit for API keys that 
only have the General permissions.

- To enable access to permissions, you must add your IP address to the whitelist.

### Step 3

A security verification will pop up. Enter your trading password, email verification code, and Google verification code.

### Step 4

Click the button to confirm and complete the creation.

![API Trading](kucoin-api4.PNG)

![API Trading](kucoin-api5.PNG)


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/kucoin)

### How to Connect

From inside the Hummingbot client, run `connect kucoin`:

```
>>> connect kucoin

Enter your kucoin API key >>>
Enter your kucoin secret key >>>
Enter your kucoin passphrase >>>
```

If connection is successful:

```
You are now connected to kucoin
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`


The following is an example script that buys & sells using `market orders`

```python
from decimal import Decimal

from hummingbot.client.hummingbot_application import HummingbotApplication
from hummingbot.core.data_type.common import OrderType
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase


class TestMarketOrders(ScriptStrategyBase):
    
    trading_pair = "ETH-USDT"
    order_amount = Decimal("0.004")
    markets = {"kucoin": {trading_pair}}
    buy_order_id = None
    sell_order_id = None

    def on_tick(self):
        if not self.buy_order_id:
            self.buy_order_id = self.connectors["kucoin"].buy(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_buy_order(self, order_completed_event):
        if order_completed_event.order_id == self.buy_order_id:
            self.sell_order_id = self.connectors["kucoin"].sell(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_sell_order(self, order_completed_event):
        if order_completed_event.order_id == self.sell_order_id:
            self.logger().info("TestMarketOrders completed.")
            HummingbotApplication.main_application().stop()
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/kucoin_spot_candles)

[Candles Feed](/scripts/candles-feed) allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair on this exchange, the following candle intervals are supported:

- `1m`
- `3m`
- `5m`
- `15m`
- `30m`
- `1h`
- `2h`
- `4h`
- `6h`
- `8h`
- `12h`
- `1d`
- `1w`

To use Kucoin spot candles in scripts, users just need to replace the connector variable with "kucoin"

```python
)
    trading_pair = "ETH-USDT"
    exchange = "kucoin"

    candles_1m = CandlesFactory.get_candle(connector=exchange,
                                           trading_pair=trading_pair,
                                           interval="1m", max_records=50)
    candles_3m = CandlesFactory.get_candle(connector=exchange,
                                           trading_pair=trading_pair,
                                           interval="3m", max_records=50)
    candles = {
        f"{trading_pair}_1m": candles_1m,
        f"{trading_pair}_3m": candles_3m,
    }
)    
```

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect kucoin_paper_trade` instead of `connect kucoin`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/kucoin_perpetual)

### How to Connect

From inside the Hummingbot client, run `connect kucoin_perpetual`:

```
>>> connect kucoin_perpetual

Enter your kucoin_perpetual API key >>>
Enter your kucoin_perpetual secret key >>>
Enter your kucoin_perpetual passphrase >>>
```

If connection is successful:

```
You are now connected to kucoin_perpetual
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

### Candles Feed

### Testnets



