The **GridExecutor:** is a sophisticated trading executor that implements a grid trading strategy. 

## Key Concepts:

1. **Grid Trading**: A strategy that places multiple buy and sell orders at regular price intervals (forming a grid), attempting to profit from price oscillations within a range.

2. **Grid Levels**: The executor creates multiple price levels between a start and end price, where each level represents a potential trading opportunity.

## Main Features:

### 1. **Grid Generation**:

- Creates evenly spaced price levels between start_price and end_price

- Each level has an associated order amount and take-profit target

- Supports both spot and perpetual futures trading

### 2. **Order Management**:

- Places and monitors orders at different grid levels

- Manages both open (entry) and close (exit) orders

- Automatically cancels orders that move outside activation bounds

- Implements batch order processing to avoid overwhelming the exchange


### 3. **Risk Management**:

- Triple Barrier System:

  - Stop Loss

  - Take Profit

  - Time Limit

- Trailing Stop functionality

- Position size limits

- Maximum open orders control

### 4. **State Management**:

Grid levels can be in different states:

- **NOT_ACTIVE**: No orders placed

- **OPEN_ORDER_PLACED**: Entry order active

- **OPEN_ORDER_FILLED**: Entry order completed

- **CLOSE_ORDER_PLACED**: Exit order active

- **COMPLETE**: Both entry and exit orders filled

### 5. **Performance Tracking**:

- Tracks realized and unrealized PnL

- Monitors fees and execution costs

- Calculates position metrics

- Records filled and failed orders

Example Usage:
```python
config = GridExecutorConfig(
    connector_name="binance",
    trading_pair="BTC-USDT",
    start_price=30000,
    end_price=40000,
    total_amount_quote=1000,  # Total USDT to deploy
    min_spread_between_orders=0.01,  # 1% minimum spread
    activation_bounds=0.02,  # 2% activation bounds
)
executor = GridExecutor(strategy=my_strategy, config=config)
```

The executor will:

1. Create grid levels between $30,000 and $40,000

2. Deploy $1000 USDT across these levels

3. Maintain minimum 1% spread between orders

4. Only keep active orders within 2% of current price

5. Automatically manage entry and exit orders

This is particularly useful for:

- Range-bound markets

- Market making strategies

- Automated rebalancing

- Risk-managed trading execution
