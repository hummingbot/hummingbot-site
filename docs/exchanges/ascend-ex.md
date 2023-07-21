# AscendEX

**Support Hummingbot by creating an account using our [referral link](https://ascendex.com/register?inviteCode=UEIXNXKW)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://ascendex.com>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/ascendex/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/ascendex>
- API docs: <https://ascendex.github.io/ascendex-pro-api/#ascendex-pro-api-documentation>
- API version: v1
- Fees: https://ascendex.com/en/feerate/transactionfee-traderate
- Supported countries: Global

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

HBOT holders voted this exchange into the Silver tier for the current [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

**Maintainer:** Hummingbot Foundation

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**

Ascendex is supported on [Hummingbot Miner](https://miner.hummingbot.io/), a platform that rewards users for providing liquidity on specific trading pairs.

**Past**



## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*

<iframe width="560" height="315" src="https://www.youtube.com/embed/yMqBu0sGkdc" title="AscendEx Liquidity Mining Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/mDPz7CCBKF8" title="How the Spot Connectors Work in Hummingbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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


## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/ascendex)

### How to Connect

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

The following is an example script that buys & sells using `market orders`

```python
from decimal import Decimal

from hummingbot.client.hummingbot_application import HummingbotApplication
from hummingbot.core.data_type.common import OrderType
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase


class TestMarketOrders(ScriptStrategyBase):
    
    trading_pair = "ETH-USDT"
    order_amount = Decimal("0.004")
    markets = {"ascendex": {trading_pair}}
    buy_order_id = None
    sell_order_id = None

    def on_tick(self):
        if not self.buy_order_id:
            self.buy_order_id = self.connectors["ascendex"].buy(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_buy_order(self, order_completed_event):
        if order_completed_event.order_id == self.buy_order_id:
            self.sell_order_id = self.connectors["ascendex"].sell(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_sell_order(self, order_completed_event):
        if order_completed_event.order_id == self.sell_order_id:
            self.logger().info("TestMarketOrders completed.")
            HummingbotApplication.main_application().stop()
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/ascend_ex_spot_candles)

[Candles Feed](/scripts/candles-feed) allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair on this exchange, the following candle intervals are supported:

- `10s`
- `1m`
- `5m`
- `5m`
- `15m`
- `30m`
- `1h`
- `4h`
- `8h`
- `1d`
- `7d`
- `30d`

To use Ascendex spot candles in scripts, users just need to replace the connector variable with `ascend_ex`

```python
)
    trading_pair = "ETH-USDT"
    exchange = "ascend_ex"

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

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect ascendex_paper_trade` instead of `connect ascendex`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*


### How to Connect



### Order Types


### Position Modes



### Candles Feed


### Testnets

