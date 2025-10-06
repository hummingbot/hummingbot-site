# Strategy Guide: Grid Strike 

The **Grid Strike** strategy is a trading method in Hummingbot's V2 framework that automatically places a series of buy or sell orders within a set price range, creating what’s called a “grid.” 

Unlike traditional grid trading that works best in sideways markets, Grid Strike is designed to move with the market trend—either up or down. It utilizes position executors, which dynamically manage each trade with configurable take profit and stop loss settings. This means every position opened by the strategy is automatically monitored and closed according to your risk parameters, adapting to changing market conditions for improved control and flexibility.

This guide explains how the Grid Strike strategy works and helps you decide when to use it. You'll learn the key concepts and how to set it up for trending markets — so you can run it confidently when you expect a strong price move up or down.

## Summary

- **Grid-based order placement.** The strategy places a series of buy or sell orders across a defined price range, creating a trading grid that activates as the market moves.
- **Automated risk management.** Each filled order creates a Position Executor that automatically manages the trade with configurable take profit, stop loss, and time limits via the Triple Barrier system.
- **Exchange flexibility.** Works on both spot and perpetual exchanges, including support for one-way position mode on futures markets.
- **Adaptable configuration.** Can be tailored for various market scenarios—whether trending up, trending down, or consolidating—by adjusting price ranges, order spacing, and risk parameters.

In short: Grid Strike systematically enters positions as the market moves through your grid, with each position automatically managed for risk—giving you a hands-free approach to trend trading while protecting your capital.

!!! tip "Recommendations for New Users"

        If you're new to Grid Strike, it's highly recommended to review the **Strategy Fundamentals** and **Strategy Configuration** sections below before running the strategy. These sections explain the essential concepts, parameters, and setup steps that will help you understand how the strategy works and how to configure it safely for your trading goals. Taking time to learn these basics will help you avoid common mistakes and get the most out of the strategy.

## Running the Strategy

### Prerequisites

Before you run Grid Strike, make sure you have Hummingbot installed, either:
 
* **Hummingbot Client**: See [Docker Installation](/installation/docker) | [Source Installation](/installation/source) for more information
* **Hummingbot Dashboard and API**: See the [Hummingbot Dashboard Quickstart Guide](../../blog/posts/quickstart-dashboard/index.md) for a guide with step-by-step setup instructions

### Create Controller Config 

In Hummingbot client, run the following command:

```
create --controller-config generic.grid_strike
```

![1.png](1.png)

Afterwards, a file `conf_generic.grid_strike_1.yml` in `/conf/controllers` will be saved with the default starting configuration.

See [Strategy Configuration](#strategy-configuration) below for an in-depth guide to adjusting these parameters.

### Create Script Config 

Once you have a configuration file that you want to run, add the name of the file to the [V2 Controller Loader](/scripts/examples/#v2-controller-loader) script:

```
create --script-config v2_with_controllers
```

Add the controller configuration you just made (e.g `conf_generic.grid_strike_1.yml`) to the loader script config file: `conf_v2_with_controllers_1.yml`

![image.png](image.png)

### Running Grid Strike

Start the loader script with this config file:

```
start --script v2_with_controllers.py --conf conf_v2_with_controllers_1.yml
```

When you start the Grid Strike strategy, it first looks at your configuration to figure out how to set up your trading grid. Once the grid is set up, the strategy begins placing orders based on the set `side` (buy or sell) within your specified price range. It places order and waits for it to fill. Whenever `order_frequency` is reached, it checks if it needs to place a new order.

![image.png](image%201.png)

When an order gets filled and opens a position, the Triple Barrier system immediately takes over to manage that specific trade. This system acts like your personal risk manager - it will automatically close the position if it reaches the `take_profit` or if it moves from the set `stop_loss` against you. This happens automatically without you having to watch the screen. The strategy then continues this cycle: place a sell order, wait for it to fill, let the Triple Barrier manage the position until it closes, then place another sell order. This creates a continuous trading loop that tries to capture small profits repeatedly while keeping your risk controlled.

## Strategy Configuration

After you run `create --controller-config generic.grid_strike`, an initial config file in `/conf/controllers` will be saved with the starting configuration below:

```
id: <controller-id>
controller_name: grid_strike
controller_type: generic
total_amount_quote: '1000'
manual_kill_switch: false
candles_config: []
initial_positions: []
leverage: 20
position_mode: HEDGE
connector_name: binance_perpetual
trading_pair: WLD-USDT
side: 1
start_price: '0.58'
end_price: '0.95'
limit_price: '0.55'
min_spread_between_orders: '0.001'
min_order_amount_quote: '5'
max_open_orders: 2
max_orders_per_batch: 1
order_frequency: 3
activation_bounds: null
keep_position: false
triple_barrier_config:
  open_order_type: 3
  stop_loss: null
  stop_loss_order_type: 1
  take_profit: '0.001'
  take_profit_order_type: 3
  time_limit: null
  time_limit_order_type: 1
  trailing_stop: null

```

### Key Configuration Parameters

Here are some of the most important settings:

| Parameter | Meaning |
| --- | --- |
| **total_amount_quote** | Your budget for the bot (e.g., 1000 USDT) |
| **connector_name** | The exchange to trade on (e.g., `binance_perpetual`) |
| **trading_pair** | Market you want to trade (e.g., `WLD-USDT`) |
| **side** | 1 = Buy (long), 2 = Sell (short) |
| **start_price** | The price at which your grid starts placing orders |
| **end_price** | The price at which your grid stops placing orders |
| **limit_price** | If price crosses this, the bot stops trading |
| **min_spread_between_orders** | Minimum spacing between orders (e.g., 0.001 = 0.1%) |
| **min_order_amount_quote** | Smallest order size allowed by exchange |
| **order_frequency** | How often the bot checks for new orders (in seconds) |


Make sure to set the most important parameters like:

- Exchange (`connector_name`): Use any Hummingbot CLOB connector, such as `hyperliquid` or `hyperliquid_perpetual`
- Trading Pair (`trading_pair`): Use a valid trading pair supporte by the exchange, e.g. `BTC-USDT`
- Budget (`total_amount_quote`): Total amount allocated to the strategy, expressed in the quote asset
- Direction (`side` = buy or sell): Place buy/long or sell/short orders
- Start price and end price

### Triple Barrier Parameters

Since Grid Strike creates [Position Executors](/v2-strategies/executors/positionexecutor/) for each filled order level, these parameters set how each executor risk manages the position:

| Setting | Meaning |
| --- | --- |
| **stop_loss** | Automatically close the trade if it moves against you |
| **take_profit** | Close the trade once profit target is reached |
| **time_limit** | Close the trade after a set time, win or lose |
| **order_type** | Choose between Market, Limit, or Limit-Maker orders |


## Strategy Fundamentals

To set up Grid Strike effectively, you need to balance these three foundational considerations:

### 1. Price Range

This is the zone where your orders will be placed, defined by **start_price** and **end_price**.

- Narrow range: Best for calm markets with little movement.

- Wide range: Better for volatile assets but spreads orders out more thinly.

Example:

```
Price Range = end_price - start_price
Your case: $6.8 - $5.5 = $1.3
Price Range % = ($1.3 / $5.5) × 100 = 23.6%
```
    
### 2. Budget

How much money you set aside determines how many orders the bot can place, defined by **total_amount_quote**. Note that this is expressed in units of the quote asset, the second symbol in the trading pair. We utilize this convention across V2 strategies to help you manage budgets across multiple bot instances.

- The bot divides your budget by the minimum allowed order size from the exchange.
- Each order level requires money reserved upfront. If you don’t have enough funds for all orders, the bot won’t place them.

Example:

```
# capital support
Max Orders by Budget = total_amount_quote ÷ min_order_amount_quote
Your case: $100 ÷ $7 = 14.28 ≈ 14 orders maximum
```
    

### 3. Spread Levels

This is how far apart your orders are from each other, controlled by the **min_spread_between_orders**.

- **Small spread (e.g., 0.5%)** = more orders close together → captures small moves but needs more funds.
- **Large spread (e.g., 2%)** = fewer, wider orders → targets bigger moves and uses less capital.

Example:

```python
Max Levels = Price Range % ÷ min_spread_between_orders
Your case: 23.6% ÷ 0.7% = 33.7 levels (theoretical max)
```
    
Your final grid will be a balance of these three factors. The bot will create the maximum number of orders it can, respecting both your capital limit and the minimum spread you've set within your chosen price range.

## Running Grid Strike in Different Markets

Think of Grid Strike as a way to “ride the wave” of a trend:

**Going Short (Betting on Price Going Down)**

If you expect the price to fall, Grid Strike places sell (short) orders at gradually lower prices. As the market moves downward, these orders are triggered one by one, building up your short position and letting you profit from the downtrend.

- If you are anticipating for continuing downtrend movement, you can setup the Grid Strike with `start_price` above the `end_price` as shown below.
        
![Gridstrike for Short.png](Gridstrike_for_Short.png)
        

**Going Long (Betting on Price Going Up)**

If you think the price will rise, Grid Strike places buy (long) orders at gradually higher prices. As the price climbs, your orders are triggered, adding to your long position and helping you profit from the uptrend.

- Conversely, if you are anticipating for price reversal at support level or continuing uptrend, you can setup the Grid Strike with `start_price` below the `end_price` as shown below.
        
![GridStrike for Long.png](GridStrike_for_Long.png)
        

This "averaging into a trend" approach is the key difference. A traditional grid buys low and sells high in a sideways range (fighting the momentum), whereas Grid Strike joins the momentum, adding to a winning long or short position as the trend develops in your favor.

**Key difference from a normal grid**: A regular grid tries to “fight the market” by buying low and selling high in sideways movement. Grid Strike instead follows the trend, adding more to your winning position as the market confirms your prediction.

