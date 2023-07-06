![](/assets/img/market-data-table.png)

Hummingbot can collect real-time market data in the background for the trading pairs that are initialized in the running strategy.

Users can configure this feature by setting the new config variables in the `conf_client.yml` file:

- `market_data_collection_enabled`: Enable/disable the Market Data Collection feature.
- `market_data_collection_interval`: Set the market data collection interval in seconds (Default=60)
- `market_data_collection_depth`: Set the order book collection depth (Default=20)

The data is stored in a SQLite DB table `MarketData` and includes:

- Exchange
- Trading Pair
- Timestamp
- Mid Price
- Best Ask
- Best Bid
- Order Book
