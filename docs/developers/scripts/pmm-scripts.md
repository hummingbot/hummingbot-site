# PMM Scripts (DEPRECATED)

Snippets of Python code that let users customize the [Pure Market Making](/strategies/pure-market-making) strategy.

!!! warning
    PMM Scripts were an early experiment to let users customize Hummingbot, but it can only be used with the PMM strategy. In the 1.4.0 release, we introduced a generalized form of [Scripts](./index.md)

## How it works

After configured, the PMMScript will start automatically once the Pure Market Making strategy starts and stops when the strategy stops.
A PMMScript is run on a new dedicated process, in case where the script fails or has a bug, your main Hummingbot
application can still function.

## Create your own PMMScript

1. Create a new script file, you can see examples in the Examples section below, and save it into the [`/pmm_scripts` folder](https://github.com/hummingbot/hummingbot/tree/development/pmm_scripts)
2. Configure your Hummingbot
    * Inside Hummingbot run command `config pmm_script_mode` and/or `config pmm_script_mode.pmm_script_file_path`.
    * Editing the `conf_client.yml` file located inside the `hummingbot_conf` folder using a text editor.

        ```json
        pmm_script_enabled: true
        pmm_script_file_path: spreads_adjusted_on_volatility_script.py

        ```

3. Start running a strategy

!!! Note
    In past versions of Hummingbot (1.5.0 and below), the `conf_client.yml` file is named `conf_global.yml`

## Examples

The following examples can be found in the [`/pmm_scripts` folder](https://github.com/hummingbot/hummingbot/tree/development/pmm_scripts):

### hello_world_script.py

The most basic example only a few lines of code.

### ping_pong_script.py

Replicates our current ping pong strategy using script.

### price_band_script.py

Replicates our current price band strategy using script.

### dynamic_price_band_script.py

Demonstrates how to set the band around mid price moving average, the band moves as the average moves.

### spreads_adjusted_on_volatility_script.py

Demonstrates how to adjust bid and ask spreads dynamically based on price volatility.

### script_template.py

Provides you a base template to start using the scripts functions.

## PMMScriptBase class

`PMMScriptBase` is the base class for PMM Scripts.

At every tick, the script gets current market price (`mid_price`), strategy configuration (`pmm_parameters`) and
total balances (`all_total_balances`). The `mid_price` is stored in a list (`mid_prices`) where a new `mid_price`
is added to the end of the list, whereas strategy configuration and total balances are replaced every time.

### pmm_parameters

To set a pure market making strategy parameter to a new value, simply assign a new value to it.

Usage Example: `self.pmm_parameters.bid_spread = Decimal("0.03")` - to update bid spread to 3%

These below are configurable parameters:

* buy_levels (a number of buy orders to place, initially set to `order_levels` when the strategy starts)
* sell_levels (a number of sell orders to place, initially set to `order_levels` when the strategy starts)
* order_levels
* bid_spread
* ask_spread
* order_amount
* order_level_spread
* order_level_amount
* order_refresh_time
* order_refresh_tolerance_pct
* filled_order_delay
* hanging_orders_enabled
* hanging_orders_cancel_pct

### Events

#### `on_tick`

  The code here will be executed on every tick which is every second on a default Hummingbot configuration.

#### `on_buy_order_completed`

  The script will be notified every time a buy order of yours is fully filled. Put in your code logic here to handle such
  situation if needed.

#### `on_sell_order_completed`

  The script will be notified every time a sell order of yours is fully filled. Put in your code logic here to handle such
  situation if needed.

#### `on_status`

  This is called upon `status` command issued on the Hummingbot application. You can provide your custom status message
  here.

### Functions

#### `notify`

  Notifies the user, the message will appear on top left panel of HB application.
  If Telegram integration enabled, the message will also be sent to the telegram user.

  Usage Example: `self.notify("Hello world")`

#### `log`

  Logs message to the strategy log file and display it on Running Logs section of HB.

  Usage Example: `self.log("Hello world")`

#### `avg_mid_price`

  Calculates average (mean) of the stored mid prices.

  Usage Example: `avg_value = self.avg_mid_price(60, 30)` - to calculate average mid price at a minute interval for the
  last 30 minutes

#### `avg_price_volatility`

  Calculates average (mean) price volatility, volatility is a price change compared to the previous cycle regardless of
  its direction, e.g. if price changes -3% (or 3%), the volatility is 3%.

  Usage Example: `avg_value = self.avg_price_volatility(60, 30)` - to calculate average price volatility at a minute
  interval for the last 30 minutes

#### `median_price_volatility`

  Calculates median (middle value) price volatility.

  Usage Example: `median_value = self.median_price_volatility(60, 30)` - to calculate median price volatility at
  a minute interval for the last 30 minutes

#### `locate_central_price_volatility`

  Calculates central located price volatility based on a given mean function. The mean function can be one
  that is supported by `statistics` library e.g. mean, median, geometric_mean and many more.

  Usage Example: `median_value = self.locate_central_price_volatility(60, 30, median)` - to calculate median price
  volatility at a minute interval for the last 30 minutes

##### `round_by_step`

  Rounds a given number down by a given step size.

  Usage Example: `rounded_value = self.round_by_step(1.8, 0.25)` will give you 1.75

##### `take_samples`

  Takes samples out of a given list where the last item is the most recent.
  Example List `a_list = [1, 2, 3, 4, 5, 6, 7]`

  Usage Example: `samples = self.take_samples(a_list, 3, 2)` will give you `[4, 7]`
