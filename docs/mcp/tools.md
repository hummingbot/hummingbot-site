# MCP Tools Reference

The Hummingbot MCP Server exposes the following tools to AI assistants for automated trading and portfolio management.

## Account Tools

### `get_accounts`
List all connected exchange accounts and their status.

**Returns:** Array of account objects with connection details

**Example Usage:**
```
AI: "Show me all my connected exchange accounts"
```

### `get_account_balance` 
Get balance for a specific exchange account.

**Parameters:**
- `account_name` (string): Name of the exchange account

**Returns:** Balance details for the specified account

**Example Usage:**
```
AI: "What's my balance on Binance?"
```

## Portfolio Tools  

### `get_portfolio_balances`
View aggregated portfolio across all connected exchanges.

**Returns:** Consolidated view of all assets across exchanges

**Example Usage:**
```
AI: "Show me my total portfolio balances"
```

### `get_portfolio_performance`
Analyze portfolio performance metrics including P&L.

**Returns:** Performance metrics, returns, and analysis

**Example Usage:**
```
AI: "How has my portfolio performed this month?"
```

## Trading Tools

### `place_order`
Execute buy/sell orders on supported exchanges.

**Parameters:**
- `exchange` (string): Target exchange
- `trading_pair` (string): Trading pair (e.g., "BTC-USDT")
- `side` (string): "buy" or "sell"
- `amount` (number): Order amount
- `order_type` (string): "market" or "limit"
- `price` (number, optional): Price for limit orders

**Returns:** Order confirmation with order ID

**Example Usage:**
```
AI: "Buy 0.1 BTC at market price on Binance"
```

### `cancel_order`
Cancel existing orders.

**Parameters:**
- `order_id` (string): ID of order to cancel
- `exchange` (string): Exchange where order was placed

**Returns:** Cancellation confirmation

**Example Usage:**
```
AI: "Cancel order 12345 on OKX"
```

### `get_open_orders`
View all active orders across exchanges.

**Parameters:**
- `exchange` (string, optional): Filter by specific exchange

**Returns:** List of open orders with details

**Example Usage:**
```
AI: "Show me all my open orders"
```

### `get_order_history`
Review past order execution history.

**Parameters:**
- `exchange` (string, optional): Filter by exchange
- `trading_pair` (string, optional): Filter by trading pair
- `limit` (number, optional): Number of results to return

**Returns:** Historical order data

**Example Usage:**
```
AI: "Show my last 10 BTC orders"
```

## Position Tools

### `get_positions`
View open positions for derivatives trading.

**Parameters:**
- `exchange` (string, optional): Filter by exchange

**Returns:** List of open positions with P&L data

**Example Usage:**
```
AI: "What positions do I have open on Hyperliquid?"
```

### `close_position`
Close a specific position programmatically.

**Parameters:**
- `exchange` (string): Exchange where position is held
- `symbol` (string): Position symbol
- `amount` (number, optional): Partial close amount

**Returns:** Position close confirmation

**Example Usage:**
```
AI: "Close my ETH position on Hyperliquid"
```

### `get_position_history`
Review historical position data and performance.

**Parameters:**
- `exchange` (string, optional): Filter by exchange
- `limit` (number, optional): Number of results

**Returns:** Historical position data with P&L

**Example Usage:**
```
AI: "Show my position history for the last month"
```

## Market Data Tools

### `get_ticker`
Get current price data for trading pairs.

**Parameters:**
- `exchange` (string): Target exchange
- `symbol` (string): Trading pair symbol

**Returns:** Current price, volume, and 24h statistics

**Example Usage:**
```
AI: "What's the current BTC price on Binance?"
```

### `get_orderbook`
Access order book depth data.

**Parameters:**
- `exchange` (string): Target exchange
- `symbol` (string): Trading pair symbol
- `depth` (number, optional): Order book depth level

**Returns:** Current bid/ask orders with quantities

**Example Usage:**
```
AI: "Show me the BTC orderbook on OKX"
```

### `get_funding_rates`
Monitor perpetual funding rates across exchanges.

**Parameters:**
- `exchange` (string, optional): Filter by exchange
- `symbol` (string, optional): Filter by symbol

**Returns:** Current funding rates and next funding time

**Example Usage:**
```
AI: "What are the funding rates for BTC perpetuals?"
```

## Tool Usage Examples

### Complex Workflows

**Portfolio Rebalancing:**
```
AI: "Analyze my portfolio and rebalance to 60% BTC, 30% ETH, 10% SOL"
1. Uses get_portfolio_balances to assess current allocation
2. Calculates required trades using market data tools
3. Executes rebalancing orders with place_order
4. Confirms new allocation with updated portfolio data
```

**Risk Management:**
```
AI: "Close any positions with more than 10% unrealized loss"
1. Uses get_positions to analyze all open positions
2. Identifies positions exceeding loss threshold
3. Uses close_position for each position meeting criteria
4. Reports actions taken and updated risk exposure
```

**Funding Rate Arbitrage:**
```
AI: "Find negative funding rate opportunities for BTC"
1. Uses get_funding_rates across multiple exchanges
2. Identifies profitable funding rate spreads
3. Opens positions to capture funding payments
4. Monitors and manages positions automatically
```

## Tool Response Formats

All tools return structured JSON responses that AI assistants can parse and present to users in natural language. The MCP server handles the technical API interactions while the AI provides user-friendly explanations and recommendations.

## Error Handling

Tools include comprehensive error handling for:
- Invalid parameters
- Exchange connectivity issues  
- Insufficient balance errors
- Rate limiting
- Authentication failures

Error responses include descriptive messages that AI assistants can interpret and explain to users in plain language.

## Security Notes

- All trading operations require proper authentication
- Position sizes and risk limits should be configured appropriately
- Monitor AI trading activity regularly
- Set up alerts for unusual trading behavior
- Never share API credentials in conversations