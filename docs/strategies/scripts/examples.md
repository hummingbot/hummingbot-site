## How to Run Scripts

Configurable V2 scripts use a YAML file in `conf/scripts/`:

```shell
create --v2-config [SCRIPT_NAME]
start --v2 [CONFIG_FILE_NAME.yml]
```

See [Configuration Files](../../client/config-files.md) and [Start and Stop Strategy](../../client/start-stop.md).

## Scripts in `/scripts`

Sample scripts ship in the repository root [`/scripts`](https://github.com/hummingbot/hummingbot/tree/master/scripts) folder. Only files in that **root** directory are picked up by the client autocomplete for `create --v2-config` and `start --v2`.

The following scripts are present in current releases (names without `.py` for `create --v2-config`):

### Data and screening

* **download_order_book_and_trades** — [download_order_book_and_trades.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/download_order_book_and_trades.py): Captures trades and order book snapshots to files.
* **candles_example** — [candles_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/candles_example.py): Candle data usage example.
* **screener_volatility** — [screener_volatility.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/screener_volatility.py): Volatility screening example.
* **amm_data_feed_example** — [amm_data_feed_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/amm_data_feed_example.py): AMM / Gateway price feeds.

### Execution and PMM

* **simple_pmm** — [simple_pmm.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_pmm.py): Simple two-sided PMM using `StrategyV2Base` (good starting point for V2 scripts).
* **simple_vwap** — [simple_vwap.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_vwap.py): VWAP-style example.
* **simple_xemm** — [simple_xemm.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/simple_xemm.py): Simplified cross-exchange market making.

### V2 orchestration

* **v2_with_controllers** — [v2_with_controllers.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_with_controllers.py): Loads one or more [Controllers](../../strategies/v2-strategies/controllers/index.md). See [Controller Walkthrough](../../strategies/v2-strategies/walkthrough-controller.md).
* **v2_funding_rate_arb** — [v2_funding_rate_arb.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_funding_rate_arb.py): Funding-rate arbitrage workflow.

### XRPL

* **xrpl_arb_example** — [xrpl_arb_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/xrpl_arb_example.py): XRPL vs CEX arbitrage example.
* **xrpl_liquidity_example** — [xrpl_liquidity_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/xrpl_liquidity_example.py): XRPL liquidity example.

### Utilities and demos

* **format_status_example** — [format_status_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/format_status_example.py)
* **log_price_example** — [log_price_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/log_price_example.py)
* **external_events_example** — [external_events_example.py](https://github.com/hummingbot/hummingbot/blob/master/scripts/external_events_example.py): External event handling demo.

Additional teaching examples may live under [`controllers/generic/examples/`](https://github.com/hummingbot/hummingbot/tree/master/controllers/generic/examples) as controllers, not as top-level scripts.

To use a new script in the client, place the `.py` file in the instance `scripts/` directory (or the repo `scripts/` folder when developing from source).
