# Gate.io

**Support Hummingbot by creating an account using our [referral link](https://www.gate.io/signup/5868285)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.gate.io>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/gate-io/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/gate-io>
- API docs: <https://www.gate.io/docs/apiv4/en/index.html>
- API version: 4
- Fees: <https://www.gate.io/fee?>
- Supported countries: <https://www.gate.io/help/c2c/c2ctrade/21130/Which-Counties-Regions-are-supported-by-our-OTC-Services>

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

Silver exchanges are prioritized by HBOT holders in the latest Poll. Their connectors are maintained by Hummingbot Foundation via community developer bounties, tracking improvements made to the Gold connectors.

## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/gate_io)

### How to Connect

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

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_spot_candles)

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

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect gate_io_paper_trade` instead of `connect gate_io`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

### How to Connect

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

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_perpetual_candles)

Candles Feed allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair, you can fetch candles using the following intervals:

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

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Testnets

If testnets are supported, show how to connect to them:

```
CODE EXAMPLE SHOWING HOW TO CONNECT
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_spot_candles)

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

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect gate_io_paper_trade` instead of `connect gate_io`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

### How to Connect

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

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_perpetual_candles)

Candles Feed allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair, you can fetch candles using the following intervals:

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

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Testnets

If testnets are supported, show how to connect to them:

```
CODE EXAMPLE SHOWING HOW TO CONNECT
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
    markets = {"gate_io": {trading_pair}}
    buy_order_id = None
    sell_order_id = None

    def on_tick(self):
        if not self.buy_order_id:
            self.buy_order_id = self.connectors["gate_io"].buy(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_buy_order(self, order_completed_event):
        if order_completed_event.order_id == self.buy_order_id:
            self.sell_order_id = self.connectors["gate_io"].sell(
                trading_pair=self.trading_pair,
                amount=self.order_amount,
                order_type=OrderType.MARKET)

    def did_complete_sell_order(self, order_completed_event):
        if order_completed_event.order_id == self.sell_order_id:
            self.logger().info("TestMarketOrders completed.")
            HummingbotApplication.main_application().stop()
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_spot_candles)

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

To use Gate.io spot candles in scripts, users just need to replace the connector variable with "gate_io"

```python
)
    trading_pair = "ETH-USDT"
    exchange = "gate_io"

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

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect gate_io_paper_trade` instead of `connect gate_io`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

### How to Connect

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

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_perpetual_candles)

Candles Feed allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair, you can fetch candles using the following intervals:

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

To use Gate.io Perpetual candles in scripts, users just need to replace the connector variable with "gate_io_perpetual"

```python
    candles = CandlesFactory.get_candle(connector="gate_io_perpetual",
                                        trading_pair=trading_pair,
                                        interval="3m", max_records=150)
```

### Testnets

