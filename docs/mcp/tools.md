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

## Gateway Tools

### `manage_gateway_container`
Start, stop, or check Gateway container status.

```python
# Start Gateway
manage_gateway_container(
    action="start",
    config={
        "passphrase": "admin",
        "image": "hummingbot/gateway:latest",
        "port": 15888
    }
)

# Check status
manage_gateway_container(action="get_status")

# View logs
manage_gateway_container(action="get_logs", tail=100)

# Restart
manage_gateway_container(action="restart")

# Stop
manage_gateway_container(action="stop")
```

### `manage_gateway_config`
Manage chains, networks, tokens, connectors, pools, and wallets.

```python
# List supported chains
manage_gateway_config(resource_type="chains", action="list")

# List networks
manage_gateway_config(resource_type="networks", action="list")

# Get specific network
manage_gateway_config(
    resource_type="networks",
    action="get",
    network_id="solana-mainnet-beta"
)

# List tokens on network
manage_gateway_config(
    resource_type="tokens",
    action="list",
    network_id="solana-mainnet-beta",
    search="USDC"  # Optional search filter
)

# Add token
manage_gateway_config(
    resource_type="tokens",
    action="add",
    network_id="solana-mainnet-beta",
    token_address="EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    token_symbol="USDC",
    token_decimals=6,
    token_name="USD Coin"
)

# Add wallet
manage_gateway_config(
    resource_type="wallets",
    action="add",
    chain="solana",
    private_key="your_private_key"
)

# List DEX connectors
manage_gateway_config(resource_type="connectors", action="list")

# List pools
manage_gateway_config(
    resource_type="pools",
    action="list",
    connector_name="meteora",
    network="mainnet-beta"
)
```

### `manage_gateway_swaps`

Quote and execute swaps on DEX routers like [Jupiter](/exchanges/gateway/jupiter/).

```python
# Get quote
manage_gateway_swaps(
    action="quote",
    connector="jupiter",
    network="solana-mainnet-beta",
    trading_pair="SOL-USDC",
    side="BUY",  # or "SELL"
    amount="1.0",  # Amount of base token
    slippage_pct="1.0"
)

# Execute swap
manage_gateway_swaps(
    action="execute",
    connector="jupiter",
    network="solana-mainnet-beta",
    trading_pair="SOL-USDC",
    side="BUY",
    amount="1.0",
    slippage_pct="1.0",
    wallet_address="your_wallet_address"  # Optional
)

# Search swap history
manage_gateway_swaps(
    action="search",
    search_connector="jupiter",
    search_network="solana-mainnet-beta",
    status="CONFIRMED",  # SUBMITTED, CONFIRMED, FAILED
    limit=50
)

# Check transaction status
manage_gateway_swaps(
    action="get_status",
    transaction_hash="your_tx_hash"
)
```

### `explore_gateway_clmm_pools`
Browse concentrated liquidity pools.

```python
# List pools
explore_gateway_clmm_pools(
    action="list_pools",
    connector="meteora",
    page=0,
    limit=50,
    search_term="SOL",  # Optional filter
    sort_key="volume",  # volume, tvl, feetvlratio
    order_by="desc",
    include_unknown=True,
    detailed=False  # Set True for more columns
)

# Get specific pool info
explore_gateway_clmm_pools(
    action="get_pool_info",
    connector="meteora",
    network="solana-mainnet-beta",
    pool_address="pool_address_here"
)
```

### `manage_gateway_clmm_positions`
Open, close, collect fees from concentrated liquidity positions.

```python
# Open position
manage_gateway_clmm_positions(
    action="open_position",
    connector="meteora",
    network="solana-mainnet-beta",
    pool_address="pool_address",
    lower_price="150",
    upper_price="250",
    base_token_amount="1.0",  # Optional
    quote_token_amount="200",  # Optional
    slippage_pct="1.0",
    wallet_address="your_wallet",  # Optional
    extra_params={"strategyType": 0}  # Connector-specific
)

# Get positions for wallet/pool
manage_gateway_clmm_positions(
    action="get_positions",
    connector="meteora",
    network="solana-mainnet-beta",
    pool_address="pool_address",
    wallet_address="your_wallet"
)

# Collect fees
manage_gateway_clmm_positions(
    action="collect_fees",
    connector="meteora",
    network="solana-mainnet-beta",
    position_address="position_nft_address",
    wallet_address="your_wallet"
)

# Close position
manage_gateway_clmm_positions(
    action="close_position",
    connector="meteora",
    network="solana-mainnet-beta",
    position_address="position_nft_address",
    wallet_address="your_wallet"
)
```

---

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