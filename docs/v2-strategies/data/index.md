
The [Market Data Provider](https://github.com/hummingbot/hummingbot/blob/development/hummingbot/data_feed/market_data_provider.py) service simplifies access to real-time market data with the following methods. 

Any scripts can instantiate the Market Data Provider:

```python
from hummingbot.data_feed.market_data_provider import MarketDataProvider
```

Below are a some methods that it contains. Each method receives the connector name, trading pair, and other arguments that can be defined as config parameters.


## Price

```python
    def get_price_by_type(self, connector_name: str, trading_pair: str, price_type: PriceType):
        """
        Retrieves the price for a trading pair from the specified connector.
        :param connector_name: str
        :param trading_pair: str
        :param price_type: str
        :return: Price instance.
        """
        connector = self.get_connector(connector_name)
        return connector.get_price_by_type(trading_pair, price_type)
```

**Example:**

```python
price = self.market_data_provider.get_price_by_type('binance', 'BTC-USDT', PriceType.MidPrice)
```

---

```python
    def get_price_for_volume(self, connector_name: str, trading_pair: str, volume: float,
                             is_buy: bool) -> OrderBookQueryResult:
        """
        Gets the price for a specified volume on the order book.

        :param connector_name: The name of the connector.
        :param trading_pair: The trading pair for which to retrieve the data.
        :param volume: The volume for which to find the price.
        :param is_buy: True if buying, False if selling.
        :return: OrderBookQueryResult containing the result of the query.
        """

        order_book = self.get_order_book(connector_name, trading_pair)
        return order_book.get_price_for_volume(is_buy, volume)
```

**Example:**

```python
price = self.market_data_provider.get_price_by_volume('binance', 'BTC-USDT', volume: 10000, True)
```


## Volume

```python
    def get_volume_for_price(self, connector_name: str, trading_pair: str, price: float, is_buy: bool) -> OrderBookQueryResult:
        """
        Gets the volume for a specified price on the order book.

        :param connector_name: The name of the connector.
        :param trading_pair: The trading pair for which to retrieve the data.
        :param price: The price for which to find the volume.
        :param is_buy: True if buying, False if selling.
        :return: OrderBookQueryResult containing the result of the query.
        """
        order_book = self.get_order_book(connector_name, trading_pair)
        return order_book.get_volume_for_price(is_buy, price)
```

**Example:**

```python
price = self.market_data_provider.get_volume_for_price('binance', 'BTC-USDT', 70000, True)
```

## Order Book

```python
    def get_order_book_snapshot(self, connector_name, trading_pair) -> Tuple[pd.DataFrame, pd.DataFrame]:
        """
        Retrieves the order book snapshot for a trading pair from the specified connector, as a tuple of bid and ask in
        DataFrame format.
        :param connector_name: str
        :param trading_pair: str
        :return: Tuple of bid and ask in DataFrame format.
        """
        order_book = self.get_order_book(connector_name, trading_pair)
        return order_book.snapshot
```

**Example:**

```python
price = self.market_data_provider.get_order_book_snapshot('binance', 'BTC-USDT')
```

## Candles

[Candles](../candles/index.md) are trailing intervals of OHCLV data that can be used to generate custom indicators.

```python
    def get_candles_df(self, connector_name: str, trading_pair: str, interval: str, max_records: int = 500):
        """
        Retrieves the candles for a trading pair from the specified connector.
        :param connector_name: str
        :param trading_pair: str
        :param interval: str
        :param max_records: int
        :return: Candles dataframe.
        """
        candles = self.get_candles_feed(CandlesConfig(
            connector=connector_name,
            trading_pair=trading_pair,
            interval=interval,
            max_records=max_records,
        ))
        return candles.candles_df.iloc[-max_records:]
```

**Example:**

```python
price = self.market_data_provider.get_candles_df('binance', 'BTC-USDT', '3m', 1000)
```
