# Using and Customizing v2 Scripts in Hummingbot

Hummingbot's `v2 scripts` offer advanced capabilities for market making strategies. These scripts allow users to define specific parameters and methods to tailor their trading strategies. Below is an explanation of the key elements in the example script from Hummingbot's GitHub repository, aiming to make them understandable even for those without a technical background.

Example script:

[v2_market-making_dman_v3_multiple_pairs.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_market-making_dman_v3_multiple_pairs.py)


Here we'll break down the entire script into sections with a quick explanation of the parameters you can configure: 

### Exchange / Trading Pairs

```Python
class DManV3MultiplePairs(ScriptStrategyBase):
    trading_pairs = ["RUNE-USDT", "AGLD-USDT"]
    exchange = "binance_perpetual"
```

- `trading_pairs:` This list defines which currency pairs you want to trade. For example, "RUNE-USDT" means trading RUNE against USDT.

- `exchange:` Here, you specify the trading platform. In this case, "binance_perpetual" refers to the Binance Perpetual Futures market.

### Leverage

```Python
    # This is only for the perpetual markets
    leverage_by_trading_pair = {
        "HBAR-USDT": 25,
        "CYBER-USDT": 20,
        "ETH-USDT": 100,
        "LPT-USDT": 10,
        "UNFI-USDT": 20,
        "BAKE-USDT": 20,
        "YGG-USDT": 20,
        "SUI-USDT": 50,
        "TOMO-USDT": 25,
        "RUNE-USDT": 25,
        "STX-USDT": 25,
        "API3-USDT": 20,
        "LIT-USDT": 20,
        "PERP-USDT": 16,
        "HOOK-USDT": 20,
        "AMB-USDT": 20,
        "ARKM-USDT": 20,
        "TRB-USDT": 10,
        "OMG-USDT": 25,
        "WLD-USDT": 50,
        "PEOPLE-USDT": 25,
        "AGLD-USDT": 20,
        "BAT-USDT": 20
    }
```
- `leverage_by_trading_pair:` This section allows you to set different leverage levels for different trading pairs. Leverage is a tool that lets you trade with more money than you have in your account, increasing both potential profits and risks.


### Triple Barrier Config

```Python
    triple_barrier_conf = TripleBarrierConf(
        stop_loss=Decimal("0.15"), take_profit=Decimal("0.02"),
        time_limit=60 * 60 * 12,
        take_profit_order_type=OrderType.LIMIT,
        trailing_stop_activation_price_delta=Decimal("0.005"),
        trailing_stop_trailing_delta=Decimal("0.002"),
    )

```

`TripleBarrierConf:` This configuration sets up three crucial points for your trades: a stop-loss to limit losses, a take-profit to secure gains, and a time limit to close the trade. These barriers help manage risks and lock in profits.

For more info, see [Executors](executors.md)

### Controller 

```Python
    for trading_pair in trading_pairs:
        config = DManV3Config(
            exchange=exchange,
            trading_pair=trading_pair,
            order_levels=order_levels,
            candles_config=[
                CandlesConfig(connector=exchange, trading_pair=trading_pair, interval="15m", max_records=300),
            ],
            bb_length=200,
            bb_std=3.0,
            leverage=leverage_by_trading_pair.get(trading_pair, 1),
        )
```

- `DManV3Config:` This part of the script configures how the bot will trade for each pair. It includes settings for candlestick chart intervals, Bollinger Bands parameters (a type of statistical chart characterizing price and volatility over time), and leverage.


For more info on the different controllers available, see [Controllers](controllers.md)

### Additional Methods

#### `close_open_positions`

```Python
    def close_open_positions(self):
        # we are going to close all the open positions when the bot stops
        for connector_name, connector in self.connectors.items():
            for trading_pair, position in connector.account_positions.items():
                if trading_pair in self.markets[connector_name]:
                    if position.position_side == PositionSide.LONG:
                        self.sell(connector_name=connector_name,
                                  trading_pair=position.trading_pair,
                                  amount=abs(position.amount),
                                  order_type=OrderType.MARKET,
                                  price=connector.get_mid_price(position.trading_pair),
                                  position_action=PositionAction.CLOSE)
                    elif position.position_side == PositionSide.SHORT:
                        self.buy(connector_name=connector_name,
                                 trading_pair=position.trading_pair,
                                 amount=abs(position.amount),
                                 order_type=OrderType.MARKET,
                                 price=connector.get_mid_price(position.trading_pair),
                                 position_action=PositionAction.CLOSE)
```

- `close_open_positions:` This method is designed to automatically close all open trading positions when the bot stops, ensuring you don't leave any trades open accidentally.

#### `on_tick`

```Python
    def on_tick(self):
        """
        This shows you how you can start meta controllers. You can run more than one at the same time and based on the
        market conditions, you can orchestrate from this script when to stop or start them.
        """
        for executor_handler in self.executor_handlers.values():
            if executor_handler.status == ExecutorHandlerStatus.NOT_STARTED:
                executor_handler.start()
```

- `on_tick:` This method is like a regular check-up, where the script decides whether to start or stop certain trading strategies based on current market conditions.

#### `format_status`

```Python
    def format_status(self) -> str:
        if not self.ready_to_trade:
            return "Market connectors are not ready."
        lines = []
        for trading_pair, executor_handler in self.executor_handlers.items():
            lines.extend(
                [f"Strategy: {executor_handler.controller.config.strategy_name} | Trading Pair: {trading_pair}",
                 executor_handler.to_format_status()])
        return "\n".join(lines)
```

- `format_status:` This method provides a formatted text output showing the status of your trading strategy, such as which pairs are being traded and the current state of the bot.

For more advanced features and a deeper understanding of v2 strategies in Hummingbot, including using multiple controllers in a script, you can explore the resources available at [Botcamp](../botcamp/index.md)
