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

## Main Scripts

The scripts below can be found in the root [/scripts](https://github.com/hummingbot/hummingbot/tree/master/scripts) folder and are available to run from the Hummingbot client by default.

### Simple Strategies

#### Simple PMM

* **Code:** [simple_pmm](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_pmm.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: Configurable [1.25.0](../release-notes/1.9.0.md) | [1.9.0](../release-notes/1.9.0.md)
* **Description**: The bot will place two orders around the `price_source` (mid price or last traded price) in a `trading_pair` on exchange, with a distance defined by the `ask_spread` and `bid_spread`. Every `order_refresh_time` in seconds, the bot will cancel and replace the orders.


#### Simple VWAP

* **Code**: [simple_vwap](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_vwap.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.7.0](../release-notes/1.7.0.md)
* **Description**: This example lets you create one VWAP in a market using a percentage of the sum volume of the order book until a spread from the mid price. This example demonstrates:
      - How to get the account balance
      - How to get the bids and asks of a market
      - How to code a "utility" strategy


#### Simple XEMM

* **Code**: [simple_xemm](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_xemm.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [1.10.0](../release-notes/1.10.0.md)
* **Description**:  A simplified version of Hummingbot `cross-exchange market making` strategy, this bot makes a market on the maker pair and hedges any filled trades in the taker pair. If the spread (difference between maker order price and taker hedge price) dips below `min_spread`, the bot refreshes the order


### V2 Strategies

#### V2 Directional RSI

* **Code**: [v2_directional_rsi](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_directional_rsi.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This utilizes RSI indicators to generate buy or sell signals based on predefined RSI thresholds. It utilizes PositionExecutor to manage positions with stop-loss and take-profit levels defined by a triple barrier logic.

#### V2 Funding Rate Arbitrage

* **Code**: [v2_funding_rate_arb.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_funding_rate_arb.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.27.0](../release-notes/1.27.0.md)
* **Description**: This script arbitrages funding rates across perpetual exchanges


#### V2 TWAP Multiple Pairs

* **Code**: [v2_twap_multiple_pairs.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_twap_multiple_pairs.py)
* **Author**: [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This script utilizes [TWAPExecutors](/v2-strategies/executors/twapexecutor/) to buy/sell a block of assets.


#### V2 XEMM with Executors

* **Code**: [v2_xemm.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_xemm.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.27.0](../release-notes/1.27.0.md)
* **Description**: This script utilizes [XEMMExecutors](/v2-strategies/executors/xemm-executor/) to implement a cross-exchange market making (XEMM) strategy

### Controller Loaders

#### V2 Generic

* **Code**:  [v2_with_controllers](https://github.com/hummingbot/hummingbot/blob/development/scripts/v2_generic_with_controllers.py)
* **Author**:  [cardosofede](https://github.com/cardosofede)
* **Release Added**: [1.26.0](../release-notes/1.26.0.md)
* **Description**: This script provides a template for launching Strategy V2 controllers that implement specific sub-strategies. This strategy is flexible and can be adapted to various trading scenarios by implementing custom controllers.


## Archived Scripts

If you are looking for an older script not listed above or was mentioned in any of our previous blogs or videos these scripts may be found in the [community](https://github.com/hummingbot/hummingbot/tree/master/scripts/community) or [utility](https://github.com/hummingbot/hummingbot/tree/master/scripts/utility) folders in the Github repo.

To make a script available to run inside Hummingbot, move the file into the root `/scripts` folder.

