# Exercise 5: Add Dynamic Price Ceiling/Floor

Finally, let’s learn how to customize our script by utilizing order book data, leveraging Hummingbot’s ability to synchronously stream real-time Level 2 order book data from multiple exchanges simultaneously.

We will improve the last exercise by adding a dynamic calculation of the price ceiling/floor feature based on the Bollinger Bands.

To do so, we will:

- Use the `CandlesFactory` object that will create an instance of the candles of the trading pair and interval that we want. Is important to notice that we can create as many candles as we want and they are not related to the markets that you define on the class variable `markets`. This is handy for example if you want to trade on KuCoin with the information of Binance.
- Once we get the class of the candles, we need to start them. The start will initialize the WebSocket connection to receive the most updated information on the current candle, and also request the historical candles needed to complete the records requested. We are going to do this on the `__init__`.
- Also we need to add a method to stop the candle when the script is stopped. We can override the method `on_stop` which let’s us code a custom shutdown when the bot is stopped via the stop command.
- To calculate the bounds we are going to create a method that will add the Bollinger Bands using as a value 100 periods and 2 std. Then the upper bound will be `price_ceiling` and the lower bound will be `price_floor`.

Now, let’s implement the solution, extending the same file as the last example: `quickstart_script_2.py`.

---

## Create candle instance

First, we will create an candle instance:

```python
import logging
from decimal import Decimal
from typing import List, Dict
import pandas as pd
import pandas_ta as ta  # noqa: F401

from hummingbot.core.data_type.common import OrderType, PriceType, TradeType
from hummingbot.core.data_type.order_candidate import OrderCandidate
from hummingbot.core.event.events import OrderFilledEvent
from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase

class QuickstartScript2(ScriptStrategyBase):
    bid_spread = 0.008
    ask_spread = 0.008
    order_refresh_time = 15
    order_amount = 0.01
    create_timestamp = 0
    trading_pair = "ETH-USDT"
    exchange = "binance_paper_trade"
    # Here you can use for example the LastTrade price to use in your strategy
    price_source = PriceType.MidPrice

    price_ceiling = 1700
    price_floor = 1600

    eth_1m_candles = CandlesFactory.get_candle(connector="binance",
                                               trading_pair="ETH-USDT",
                                               interval="1m")

    markets = {exchange: {trading_pair}}
```

!!! Explanation
    As shown above, we import the `CandlesFactory` class and call the `get_candle` method to create a candle instance in the variable `eth_1m_candles`.

    Note that we are importing `pandas_ta`, a library that we will use to generate technical indicators from the candle data.

    While we still define initial values for `price_ceiling` and `price_floor`, we will override them later in the `on_tick` method.

---

Add functions that override the `__init__` and `on_close` methods:

```python
def __init__(self, connectors: Dict[str, ConnectorBase]):
    # Is necessary to start the Candles Feed.
    super().__init__(connectors)
    self.eth_1m_candles.start()
```

This method starts collecting data when the script starts.

```python
def on_stop(self):
    """
    Without this functionality, the network iterator will continue running forever after stopping the strategy
    That's why is necessary to introduce this new feature to make a custom stop with the strategy.
    :return:
    """
    self.eth_1m_candles.stop()
```

This method stop collecting data when the user runs the `stop` command.

## ==calculate_pricing_ceiling_floor==

Add a method that uses the data in `eth_1m_candles` to calculate moving price ceiling/floor using [Bollinger Bands](https://www.investopedia.com/terms/b/bollingerbands.asp) and update the values of the `price_ceiling` and `price_floor`.

```python
def calculate_price_ceiling_floor(self):
    candles_df = self.eth_1m_candles.candles_df
    candles_df.ta.bbands(length=100, std=2, append=True)
    last_row = candles_df.iloc[-1]
    self.price_ceiling = last_row['BBU_100_2.0'].item()
    self.price_floor = last_row['BBL_100_2.0'].item()
```

Now, let’s add it to `on_tick`:

```python
def on_tick(self):
    if self.create_timestamp <= self.current_timestamp and self.eth_1m_candles.is_ready:
        self.cancel_all_orders()
    self.calculate_price_ceiling_floor()
        proposal: List[OrderCandidate] = self.create_proposal()
    proposal_filtered = self.apply_price_ceiling_floor_filter(proposal)
        proposal_adjusted: List[OrderCandidate] = self.adjust_proposal_to_budget(proposal_filtered)
        self.place_orders(proposal_adjusted)
        self.create_timestamp = self.order_refresh_time + self.current_timestamp
```

!!! Explanation
    - We are adding a new condition that will block the execution if the candles are not ready.
    - Then we are adding the method `calculate_price_ceiling_floor` and the implementation is accessing to the dataframe of the Candles object by using the method `self.eth_1m_candles.candles_df`
    - Lastly, we are getting the last row and assigning the upper and lower bound to `price_ceiling` and `price_floor`

!!! tip
    💡 Check out the [pandas-ta documentation](https://github.com/twopirllc/pandas-ta) to learn how to generate other types of technical indicators.

## Customize `status`

Before we run the script, let’s improve the `status` command and show the candles data, as well as the current values for the `price_ceiling` and `price_floor`.

```python
def format_status(self) -> str:
    if not self.ready_to_trade:
        return "Market connectors are not ready."
    lines = []
    mid_price = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.MidPrice)
    best_ask = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.BestAsk)
    best_bid = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.BestBid)
    last_trade_price = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.LastTrade)
    custom_format_status = f"""
| Mid price: {mid_price:.2f}| Last trade price: {last_trade_price:.2f}
| Best ask: {best_ask:.2f} | Best bid: {best_bid:.2f} 
| Price ceiling {self.price_ceiling:.2f} | Price floor {self.price_floor:.2f}
"""
    lines.extend([custom_format_status])
    if self.eth_1m_candles.is_ready:
        lines.extend([
            "\n############################################ Market Data ############################################\n"])
        candles_df = self.eth_1m_candles.candles_df
        # Let's add some technical indicators
        candles_df.ta.bbands(length=100, std=2, append=True)
        candles_df["timestamp"] = pd.to_datetime(candles_df["timestamp"], unit="ms")
        lines.extend([f"Candles: {self.eth_1m_candles.name} | Interval: {self.eth_1m_candles.interval}\n"])
        lines.extend(["    " + line for line in candles_df.tail().to_string(index=False).split("\n")])
        lines.extend(["\n-----------------------------------------------------------------------------------------------------------\n"])
    else:
        lines.extend(["", "  No data collected."])
    return "\n".join(lines)
```

!!! Explanation
    - We are using the list approach to add strings and then show all of them
    - First, we are adding to our original text the price ceiling and price floor
    - Then we are logging the information of the candles.
    - Check that when you run the code, the last candle is updated in real-time ;)

---

## Running the script

Run the script with `start` again.

After it’s running, run `status --live` to see your dynamic price ceiling/floor along with the candles data streaming in real-time!

![Alt text](Untitled%209.png)

Remember that you can show any variable here so use it to analyze what is happening with your bot.

!!! tip "**Optional Exercise:** "
    💡 Try to extend the `format_status` function instead of overriding it, so that it shows the orders you’re placing!

## Complete script

!!! Code
    <https://gist.github.com/cardosofede/4be977ad21a68de0b117387652b85626>

---

**Congratulations on successfully building your own custom market making script!**

If you’d like to learn more about how to build custom strategies using Hummingbot, check out our [Botcamp](https://hummingbot.org/botcamp)!
