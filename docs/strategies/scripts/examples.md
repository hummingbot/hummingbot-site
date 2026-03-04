## How to Run Scripts

In the Hummingbot client, run a script with:

```
start --script [SCRIPT NAME]
```

Scripts can be created both with and without [config files](../../client/config-files.md). To create a configuration file for your script, execute:

```shell
create --script-config [SCRIPT_FILE]
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. To run the script, use:

```shell
start --script [SCRIPT_FILE] --conf [SCRIPT_CONFIG_FILE]
```

## Starting Scripts

All sample scripts below can be found in the root [/scripts](https://github.com/hummingbot/hummingbot/tree/development/scripts) folder and are available to run from the Hummingbot client by default.

### PMM V1 *(new in v2.13.0)*

* **Code:** [pmm_v1](https://github.com/hummingbot/hummingbot/blob/development/scripts/basic/pmm_v1.py)
* **Release Added**: **2.13.0**
* **Description**: A re-implementation of the classic Pure Market Making strategy using the Strategy V2 framework (`StrategyV2Base`). Places bid and ask orders around the mid price with configurable spreads, order amounts, and refresh intervals. Demonstrates how legacy V1 strategies can be rebuilt using the modern V2 architecture with Executors.

### Simple PMM

* **Code:** [simple_pmm](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_pmm.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: Configurable **1.25.0** | **1.9.0**
* **Description**: The bot will place two orders around the `price_source` (mid price or last traded price) in a `trading_pair` on exchange, with a distance defined by the `ask_spread` and `bid_spread`. Every `order_refresh_time` in seconds, the bot will cancel and replace the orders.


### Simple VWAP

* **Code**: [simple_vwap](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_vwap.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: **1.7.0**
* **Description**: This example lets you create one VWAP in a market using a percentage of the sum volume of the order book until a spread from the mid price. This example demonstrates:
      - How to get the account balance
      - How to get the bids and asks of a market
      - How to code a "utility" strategy

### Simple XEMM

* **Code**: [simple_xemm](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_xemm.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: **1.10.0**
* **Description**:  A simplified version of the [Cross Exchange Market Making](../../strategies/v1-strategies/cross-exchange-market-making.md) strategy, this bot makes a market on the maker pair and hedges any filled trades in the taker pair. If the spread (difference between maker order price and taker hedge price) dips below `min_spread`, the bot refreshes the order

### Simple XEMM Gateway

* **Code**: [simple_xemm_gateway](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_xemm_gateway.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.13.0](../../release-notes/2.13.0.md)
* **Description**: A variant of Simple XEMM that uses Gateway to connect to a DEX as the taker/hedge venue. Makes a market on a CEX while hedging filled orders on a DEX (e.g. Jupiter on Solana or Uniswap on Ethereum) via the Gateway connector.

### AMM Data Feed
* **Code**: [amm_data_feed_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.4.0](../../release-notes/2.4.0.md)
* **Description**: Demonstrates using `AmmGatewayDataFeed` in Hummingbot to fetch real-time price data from decentralized exchanges (DEXs) such as Uniswap (Ethereum) and Jupiter (Solana). The script initializes two AMM data feeds for specified trading pairs and displays their latest price data when ready.

### AMM Trade
* **Code**: [amm_trade_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.5.0](../../release-notes/2.5.0.md)
* **Description**: Monitors real-time DEX prices using the Gateway connector and automatically executes swaps once specified price thresholds are reached. The script allows users to configure conditions (price above or below a target) and handles trade execution seamlessly on decentralized exchanges like Jupiter on Solana or Uniswap on Ethereum.

### LP Manage Position
* **Code**: [lp_manage_position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.8.0](../../release-notes/2.8.0.md)
* **Description**: Manages liquidity positions on AMM or CLMM pools via Gateway. The script monitors pool prices, opens a position when a target price is reached, and automatically closes the position if the price moves out of range for a specified duration. Supports both traditional AMM pools and concentrated liquidity pools on protocols like Raydium, Uniswap, and Meteora.


### Download Order Book and Trades
* **Code**: [download_order_book_and_trades](https://github.com/hummingbot/hummingbot/blob/development/scripts/download_order_book_and_trades.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [2.3.0](../../release-notes/2.3.0.md)
* **Description**: Continuously captures and stores live trade data and order book snapshots for specified trading pairs from a selected exchange. This strategy writes data to daily `.txt` files in JSON format, ideal for market data analysis, backtesting, or creating custom datasets from exchanges like Binance using Hummingbot.

### XRPL Arbitrage Example

* **Code**: [xrpl_arb_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/xrpl_arb_example.py)
* **Author**: [mlguys](https://github.com/mlguys)
* **Release Added**: [2.13.0](../../release-notes/2.13.0.md)
* **Description**: Demonstrates arbitrage between the XRP Ledger DEX and a CEX. Monitors price discrepancies between XRPL AMM pools and a centralized exchange, and executes cross-exchange arbitrage trades when the spread exceeds a configured threshold.

### XRPL Liquidity Example

* **Code**: [xrpl_liquidity_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/xrpl_liquidity_example.py)
* **Author**: [mlguys](https://github.com/mlguys)
* **Release Added**: [2.13.0](../../release-notes/2.13.0.md)
* **Description**: Demonstrates automated liquidity management on the XRP Ledger DEX. Adds and removes liquidity from XRPL AMM pools based on configurable conditions, using the XRPL connector's `addLiquidity` and `removeLiquidity` operations.


## V2 Scripts

These scripts are more complex and use StrategyV2 components such as Executors and the Market Data Provider.

### Dynamic Orderbook Demo

* **Code**: [dynamic_orderbook_demo](https://github.com/hummingbot/hummingbot/blob/development/scripts/dynamic_orderbook_demo.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [2.13.0](../../release-notes/2.13.0.md)
* **Description**: A V2 strategy that demonstrates real-time order book interaction, funding rate monitoring, and dynamic position sizing using perpetual connectors. Shows how to create and stop executors based on live order book state and market conditions.

### V2 Controller Loader

* **Code**:  [v2_with_controllers](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_with_controllers.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: **1.26.0**
* **Description**: This script provides a template for launching [Controllers](../../strategies/v2-strategies/controllers/index.md) that implement specific sub-strategies. This strategy is flexible and can be adapted to various trading scenarios by implementing custom controllers.

### V2 Directional RSI

* **Code**: [v2_directional_rsi](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional_rsi.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: **1.26.0**
* **Description**: This utilizes RSI indicators to generate buy or sell signals based on predefined RSI thresholds. It utilizes [PositionExecutors](../../strategies/v2-strategies/executors/positionexecutor.md) to manage positions with stop-loss and take-profit levels defined by a triple barrier logic.

### V2 Funding Rate Arbitrage

* **Code**: [v2_funding_rate_arb.py](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_funding_rate_arb.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: **1.27.0**
* **Description**: This script sets up configurations for trading pairs, leverage, and connectors, and initiates market positions based on funding rate differences between exchanges. The strategy continuously monitors funding rates and calculates potential profitability after fees, creating and managing positions accordingly. It also evaluates conditions to take profits or stop losses based on funding rate differences and trading profitability. The script logs and reports its operations and the status of active arbitrage positions.

### V2 TWAP

* **Code**: [v2_twap_multiple_pairs.py](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_twap_multiple_pairs.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: **1.26.0**
* **Description**: This script utilizes [TWAPExecutors](../v2-strategies/executors/twapexecutor.md) to buy/sell a block of assets. 


## Other Scripts

Other example scripts can be found in sub-folders in the [scripts folder](https://github.com/hummingbot/hummingbot/tree/development/scripts):

* [Basic](https://github.com/hummingbot/hummingbot/tree/development/scripts/basic): Scripts that perform basic operations (good for beginner script developers) — `buy_only_three_times_example`, `format_status_example`, `log_price_example`, `simple_order_example`
* [Community](https://github.com/hummingbot/hummingbot/tree/development/scripts/community): Strategies created by Botcamp participants — includes directional strategies, grid, arbitrage, and portfolio management scripts
* [Utility](https://github.com/hummingbot/hummingbot/tree/development/scripts/utility): Scripts that fetch data, screen markets, and perform other functions — includes `wallet_hedge_example`, `candles_example`, `screener_volatility`, `download_candles`, and more

To make a script available to run inside Hummingbot, copy or move the file into the root `/scripts` folder. For example:

```bash
cp scripts/basic/format_status_example.py scripts
```

