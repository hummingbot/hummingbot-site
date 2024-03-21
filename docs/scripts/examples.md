In the Hummingbot client, run a script with:

```
start --script [SCRIPT NAME]
```


## Main Scripts

The scripts below can be found in the root [/scripts](https://github.com/hummingbot/hummingbot/tree/master/scripts) folder and are available to run from the Hummingbot client by default.

### V2 Simple Directional RSI

* **Code**:  [v2_simple_directional_rsi](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_simple_directional_rsi.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This Strategy V2 script utilizes RSI indicators to generate buy or sell signals based on predefined RSI thresholds.  It utilizes PositionExecutor to manage positions with stop-loss and take-profit levels defined by a triple barrier logic.

### V2 PMM Single Level

* **Code**:  [v2_pmm_single_level](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_pmm_single_level.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This Strategy V2 script maintain liquidity by placing buy and sell orders based on predefined spread and order amount and utilizes PositionExecutor triple barrier logic for risk management, allowing setting stop-loss and take-profit levels.

### V2 Generic with Controllers

* **Code**:  [v2_generic_with_controllers](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_generic_with_controllers.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This script provides a template for launching Strategy V2 controllers that implement specific sub-strategies. This strategy is flexible and can be adapted to various trading scenarios by implementing custom controllers.

### Volatility Screener

* **Code**: [screener_volatility](https://github.com/hummingbot/hummingbot/blob/development/scripts/screener_volatility.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.25.0](../release-notes/1.25.0.md)
* **Description**: This strategy screens for volatile trading pairs, utilizing candles to calculate various volatility metrics such as Bollinger Bands width percentage, normalized average true range (NATR), and percentage change. It periodically reports the top volatile trading pairs based on predefined criteria, and it provides a formatted market analysis for monitoring.

### Download Candles

* **Code**:  [download_candles](https://github.com/hummingbot/hummingbot/tree/master/scripts/download_candles.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.15.0](../release-notes/1.15.0.md)
* **Description**: This script provides an example of how to use the Candles Feed to download and store historical data. It downloads 3-minute candles for 3 Binance trading pairs ["APE-USDT", "BTC-USDT", "BNB-USDT"] and stores them in CSV files in the /data directory. The script stops after it has downloaded 175,000 max_records records for each pair

### Download Order Book and Trades

* **Code**:  [download_order_book_and_trades](https://github.com/hummingbot/hummingbot/tree/master/scripts/download_order_book_and_trades.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.15.0](../release-notes/1.15.0.md)
* **Description**: This script provides an example of how to download trades and order book snapshots for specified trading pairs from an exchange into a text file in the `data` folder. 

### Simple PMM

* **Code**: [simple_pmm_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_pmm_example.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.9.0](../release-notes/1.9.0.md)
* **Description**: The bot will place two orders around the `price_source` (mid price or last traded price) in a `trading_pair` on exchange, with a distance defined by the `ask_spread` and `bid_spread`. Every `order_refresh_time` in seconds, the bot will cancel and replace the orders.

### Simple XEMM

* **Code**: [simple_xemm_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_xemm_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [1.10.0](../release-notes/1.10.0.md)
* **Description**:  A simplified version of Hummingbot `cross-exchange market making` strategy, this bot makes a market on the maker pair and hedges any filled trades in the taker pair. If the spread (difference between maker order price and taker hedge price) dips below `min_spread`, the bot refreshes the order

### Simple Arbitrage

* **Code**: [simple_arbitrage_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_arbitrage_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [1.20.0](../release-notes/1.20.0.md)
* **Description**:  A simplified version of Hummingbot arbitrage strategy, this bot checks the Volume Weighted Average Price for bid and ask in two exchanges and if it finds a profitable opportunity, it will trade the tokens.

### Simple Directional

* **Code**: [simple_directional_strategy_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_directional_strategy_example.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)
* **Description**: A simple trading strategy that uses RSI in one timeframe to determine whether to go long or short.

### Simple VWAP

* **Code**: [simple_vwap_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_vwap_example.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example lets you create one VWAP in a market using a percentage of the sum volume of the order book until a spread from the mid price. This example demonstrates:
      - How to get the account balance
      - How to get the bids and asks of a market
      - How to code a "utility" strategy

### Simple Grid

* **Code**:  [fixed_grid](https://github.com/hummingbot/hummingbot/tree/master/scripts/fixed_grid.py)
* **Author**: [rkc2000](https://github.com/rkc2000)
* **Release Added**: [1.15.0](../release-notes/1.15.0.md)
* **Description**: The script implements a fixed grid trading strategy, placing buy and sell orders at predetermined price levels, rebalancing assets if required, and providing status updates on trades and balances.

## Archived Scripts

The scripts below can be found in the [archived_scripts](https://github.com/hummingbot/hummingbot/tree/master/scripts/archived_scripts) folder in the Github repo.

To make a script available to run inside Hummingbog, move the file into the root `/scripts` folder.

### Simple Tasks

#### Buy Three times

* **Code**: [buy_only_three_times_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_simple_tasks/buy_only_three_times_example.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example places shows how to add a logic to only place three buy orders in the market, use an event to increase the counter and stop the strategy once the task is done.

#### Format Status

* **Code**: [format_status_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_simple_tasks/format_status_example.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example shows how to add a custom `format_status` to a strategy and query the order book.

#### Log Price

* **Code**: [log_price_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_simple_tasks/log_price_example.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example shows how to get the ask and bid of a market and log it to the console.


### Using Data Feeds

#### AMM Data Feed

* **Code**: [amm_data_feed_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_data_feeds/amm_data_feed_example.py)

#### Candles Example

* **Code**: [candles_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_data_feeds/candles_example.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)
* **Description**: This is a strategy that shows how to use the new Candlestick component. It acquires data from both Binance spot and Binance perpetuals to initialize three different timeframes of candlesticks. The candlesticks are then displayed in the status, which is coded using a custom format status that includes technical indicators.


### Using Smart Components

#### Advanced Directional

* **Code**: [advanced_directional_strategy_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_smart_components/directional_strategy_bb_rsi_multi_timeframe.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)
* **Description**: A directional trading strategy that uses two timeframes of the same trading pair `(ETH-USDT)` and based on the RSI and Bollinger Bands is going long or short. The weigths of the indicators are the same, that means that `0.5 * RSI + 0.5 * BBANDS = signal_value`, but we are going to prioritize 1m timeframe so after calculating the signal for 1m and 3m, we are going to multiply the value of 1m by 0.7 and 3m by 0.3.

#### DCA Example

* **Code**: [dca_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/dca_example.py)
* **Author**: [aarmoa](https://github.com/aarmoa)
* **Release Added**: [1.4.0](../release-notes/1.4.0.md)
* **Description**: This example shows how to set up a simple strategy to buy a token on fixed (dollar) amount on a regular basis

#### PMM with shifted mid dynamic spreads

* **Code**:  [pmm_with_shifted_mid_dynamic_spreads](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_smart_components/pmm_with_shifted_mid_dynamic_spreads.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.15.0](../release-notes/1.15.0.md)
* **Description**: This script will demonstrate how to extend the simple mmm example to shift the mid-price and make the spreads dynamic by using the candles component and applying technical indicators.

### Community Scripts

#### 1-N Portfolio

* **Code**: [1overN_portfolio](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/1overN_portfolio.py)
* **Author**: [rolandkofler](https://github.com/rolandkofler)
* **Release Added**: [1.16.0](../release-notes/1.16.0.md)
* **Description**: This strategy aims to create a 1/N cryptocurrency portfolio, providing perfect diversification without parametrization and giving a reasonable baseline performance.

#### Adjusted Mid Price

* **Code**: [adjusted_mid_price](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/adjusted_mid_price.py)
* **Author**: [cmichaeltimmons](https://github.com/cmichaeltimmons)
* **Release Added**: [1.9.0](../release-notes/1.9.0.md)
* **Description**: This is an example of a pure market making strategy with an adjusted mid price.  The mid price is adjusted to the midpoint of a hypothetical buy and sell of a user defined {test_volume}.

#### AMM Price

* **Code**: [amm_price_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/amm_price_example.py)
* **Author**: [fengtality](https://github.com/fengtality)  
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)
* **Description**: This example shows how to call the /amm/price Gateway endpoint to fetch price for a swap

#### AMM Trade

* **Code**: [amm_trade_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/amm_trade_example.py)
* **Author**: [fengtality](https://github.com/fengtality)  
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)  
* **Description**: This example shows how to call the /amm/trade Gateway endpoint to execute a swap transaction

#### Buy dip

* **Code**: [buy_dip_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/buy_dip_example.py)
* **Author**: [aarmoa](https://github.com/aarmoa)
* **Release Added**: [1.4.0](../release-notes/1.4.0.md)
* **Description**: This strategy buys ETH (with BTC) when the ETH-BTC drops 5% below 50 days moving average (of a previous candle)
    This example demonstrates:
      - How to call Binance REST API for candle stick data
      - How to incorporate external pricing source (Coingecko) into the strategy
      - How to listen to order filled event
      - How to structure order execution on a more complex strategy

#### Buy low sell high

* **Code**: [buy_low_sell_high](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/buy_low_sell_high.py)
* **Author**: [Alkhalifah-blockchain](https://github.com/Alkhalifah-blockchain)
* **Release Added**: [1.9.0](../release-notes/index.md)
* **Description**: The script will be calculating the MA for a certain pair, and will execute a buy_order at the golden cross and a sell_order at the death cross.

#### Microprice Calculator

* **Code**:  [microprice_calculator](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/microprice_calculator.py)
* **Author**: [ntnle](https://github.com/ntnle)
* **Release Added**: [1.13.0](../release-notes/1.13.0.md)
* **Description**: A script that can compute the microprice adjusted midprice of token pairs and display that midprice adjusted for the imbalance of the order book, and other information.

#### Simple RSI

* **Code**: [simple_rsi_example](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/simple_rsi_example.py)
* **Author**: [shibanovp](https://github.com/shibanovp)
* **Release Added**: [1.10.0](../release-notes/1.10.0.md)
* **Description**: The strategy is to buy on overbought signal and sell on oversold.

#### Spot Perp Arbitrage

* **Code**: [spot_perp_arb](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/spot_perp_arb.py)
* **Author**: [riven314](https://github.com/riven314)
* **Release Added**: [1.16.0](../release-notes/1.16.0.md)
* **Description**: This script improves upon and addresses problems with the current `spot perp arbitrage` strategy. It is designed to simultaneously initiate a long position in the spot market and a short position in the perpetual market when the opening signal is triggered. These positions are then closed upon receiving the closing signal. The profit is generated from the corrective motion between the spot price and the perpetual price.

#### Triangular Arbitrage

* **Code**: [triangular_arbitrage](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/community_scripts/triangular_arbitrage.py)
* **Author**: [supervik](https://github.com/supervik)
* **Release Added**: [1.10.0](../release-notes/1.10.0.md)
* **Description**:  This script executes arbitrage trades on 3 markets of the same exchange when a price discrepancy among those markets is found.
