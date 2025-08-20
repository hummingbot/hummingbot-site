## How to Run Scripts

In the Hummingbot client, run a script with:

```
start --script [SCRIPT NAME]
```

Scripts can be created both with and without [config files](/client/config-files/). To create a configuration file for your script, execute:

```shell
create --script-config [SCRIPT_FILE]
```

This command auto-completes with scripts from the local `/scripts` directory that are configurable. You'll be prompted to specify strategy parameters, which are then saved in a YAML file within the `conf/scripts` directory. To run the script, use:

```shell
start --script [SCRIPT_FILE] --conf [SCRIPT_CONFIG_FILE]
```

## Starting Scripts

All sample scripts below can be found in the root [/scripts](https://github.com/hummingbot/hummingbot/tree/development/scripts) folder and are available to run from the Hummingbot client by default.

### Simple PMM

* **Code:** [simple_pmm](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_pmm.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: Configurable [1.25.0](../release-notes/1.9.0.md) | [1.9.0](../release-notes/1.9.0.md)
* **Description**: The bot will place two orders around the `price_source` (mid price or last traded price) in a `trading_pair` on exchange, with a distance defined by the `ask_spread` and `bid_spread`. Every `order_refresh_time` in seconds, the bot will cancel and replace the orders.


### Simple VWAP

* **Code**: [simple_vwap](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_vwap.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example lets you create one VWAP in a market using a percentage of the sum volume of the order book until a spread from the mid price. This example demonstrates:
      - How to get the account balance
      - How to get the bids and asks of a market
      - How to code a "utility" strategy

### Simple XEMM

* **Code**: [simple_xemm](https://github.com/hummingbot/hummingbot/blob/development/scripts/simple_xemm.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [1.10.0](../release-notes/1.10.0.md)
* **Description**:  A simplified version of the [Cross Exchange Market Making](/strategies/cross-exchange-market-making/) strategy, this bot makes a market on the maker pair and hedges any filled trades in the taker pair. If the spread (difference between maker order price and taker hedge price) dips below `min_spread`, the bot refreshes the order

### AMM Data Feed
* **Code**: [amm_data_feed_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.4.0](../release-notes/2.4.0.md)
* **Description**: Demonstrates using `AmmGatewayDataFeed` in Hummingbot to fetch real-time price data from decentralized exchanges (DEXs) such as Uniswap (Ethereum) and Jupiter (Solana). The script initializes two AMM data feeds for specified trading pairs and displays their latest price data when ready.

### AMM Trade
* **Code**: [amm_trade_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.5.0](../release-notes/2.5.0.md)
* **Description**: Monitors real-time DEX prices using the Gateway connector and automatically executes swaps once specified price thresholds are reached. The script allows users to configure conditions (price above or below a target) and handles trade execution seamlessly on decentralized exchanges like Jupiter on Solana or Uniswap on Ethereum.

### LP Manage Position
* **Code**: [lp_manage_position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.8.0](../release-notes/2.8.0.md)
* **Description**: Manages liquidity positions on AMM or CLMM pools via Gateway. The script monitors pool prices, opens a position when a target price is reached, and automatically closes the position if the price moves out of range for a specified duration. Supports both traditional AMM pools and concentrated liquidity pools on protocols like Raydium, Uniswap, and Meteora.


### Download Order Book and Trades
* **Code**: [download_order_book_and_trades](https://github.com/hummingbot/hummingbot/blob/development/scripts/download_order_book_and_trades.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [2.3.0](../release-notes/2.3.0.md)
* **Description**: Continuously captures and stores live trade data and order book snapshots for specified trading pairs from a selected exchange. This strategy writes data to daily `.txt` files in JSON format, ideal for market data analysis, backtesting, or creating custom datasets from exchanges like Binance using Hummingbot.

### Wallet Hedge Example
* **Code**: [wallet_hedge_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/wallet_hedge_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.4.0](../release-notes/2.4.0.md)
* **Description**: Uses the `WalletTrackerDataFeed` to monitor on-chain wallet balances and automatically hedges any balance changes by placing market orders on a centralized exchange. Ideal for maintaining a neutral position between a wallet (e.g. on Ethereum Goerli) and an exchange like KuCoin, this strategy triggers buy/sell orders once the balance delta exceeds a defined threshold.


## V2 Scripts

These scripts are more complex and use StrategyV2 components such as Executors and the Market Data Provider.

### V2 Controller Loader

* **Code**:  [v2_with_controllers](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_generic_with_controllers.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This script provides a template for launching [Controllers](/v2-strategies/controllers) that implement specific sub-strategies. This strategy is flexible and can be adapted to various trading scenarios by implementing custom controllers.

### V2 Directional RSI

* **Code**: [v2_directional_rsi](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional_rsi.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This utilizes RSI indicators to generate buy or sell signals based on predefined RSI thresholds. It utilizes [PositionExecutors](/v2-strategies/executors/positionexecutor/) to manage positions with stop-loss and take-profit levels defined by a triple barrier logic.

### V2 Funding Rate Arbitrage

* **Code**: [v2_funding_rate_arb.py](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_funding_rate_arb.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.27.0](../release-notes/1.27.0.md)
* **Description**: This script sets up configurations for trading pairs, leverage, and connectors, and initiates market positions based on funding rate differences between exchanges. The strategy continuously monitors funding rates and calculates potential profitability after fees, creating and managing positions accordingly. It also evaluates conditions to take profits or stop losses based on funding rate differences and trading profitability. The script logs and reports its operations and the status of active arbitrage positions.

### V2 TWAP

* **Code**: [v2_twap_multiple_pairs.py](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_twap_multiple_pairs.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This script utilizes [TWAPExecutors](/v2-strategies/executors/twapexecutor/) to buy/sell a block of assets. 


## Other Scripts

Other example scripts can be found in sub-folders in the [scripts folder](https://github.com/hummingbot/hummingbot/tree/development/scripts):

* Basic: Scripts that peform basic operations (good for beginner script developers)
* Community: Strategies created by Botcamp participants
* Gateway: Scripts that utilize [Gateway](/gateway)
* Utility: Scripts that fetch data, screen markets, and perform other functions

To make a script available to run inside Hummingbot, copy or move the file into the root `/scripts` folder. For example:

```bash
cp scripts/basic/format_status_example.py scripts
```

