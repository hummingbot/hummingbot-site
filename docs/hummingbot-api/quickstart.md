This guide demonstrates how to use Hummingbot API to add exchange credentials, view your portfolio, and place a market order.

## Prerequisites

- Hummingbot API installed and running (see [Installation Guide](/hummingbot-api/installation))
- Exchange API keys (e.g., Binance)
- Python 3.7+ with `hummingbot-api-client` installed (optional)

## Setup Python Client (Optional)

If you want to use the Python client for the examples below:

1. Install the [Hummingbot API Client](https://github.com/hummingbot/hummingbot-api-client):
```bash
pip install hummingbot-api-client
```

2. Create a new Python file (e.g., `hummingbot_api_demo.py`):
```bash
touch hummingbot_api_demo.py
```

3. Add the following code to initialize the client:
```python
import asyncio
from hummingbot_api_client import HummingbotAPIClient

# Create client instance
client = HummingbotAPIClient(
    base_url="http://localhost:8000",
    username="admin",
    password="admin"
)
```

4. To run any of the examples below, use:
```bash
python hummingbot_api_demo.py
```

## Add Exchange Credentials

Add your exchange credentials to the API:

=== "curl"
    
    ```bash
    curl -X POST http://localhost:8000/accounts \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "binance_main",
        "exchange": "binance",
        "api_key": "your-binance-api-key",
        "api_secret": "your-binance-api-secret"
      }'
    ```

=== "Python Client"
    
    ```python
    import asyncio
    
    async def add_exchange_account():
        # Add a Binance account
        account = await client.add_account(
            name="binance_main",
            exchange="binance",
            api_key="your-binance-api-key",
            api_secret="your-binance-api-secret"
        )
        
        print(f"✓ Account added: {account['name']}")
        print(f"  ID: {account['id']}")
        print(f"  Exchange: {account['exchange']}")
        
        return account
    
    # Run the async function
    account = asyncio.run(add_exchange_account())
    ```

**Response:**

=== "curl"
    
    ```json
    {
      "id": 1,
      "name": "binance_main",
      "exchange": "binance",
      "created_at": "2025-07-16T10:30:00Z"
    }
    ```

=== "Python Client"
    
    ```
    ✓ Account added: binance_main
      ID: 1
      Exchange: binance
    ```

## View Your Portfolio

Check your portfolio balances across all connected exchanges:

=== "curl"
    
    ```bash
    curl -X GET http://localhost:8000/portfolio/balances \
      -u "admin:admin"
    ```

=== "Python Client"
    
    ```python
    async def view_portfolio():
        # Get portfolio balances
        portfolio = await client.get_portfolio()
        
        print(f"\n📊 Portfolio Summary")
        print(f"Total Value: ${portfolio['total_usd_value']:,.2f}")
        print(f"\nToken Balances:")
        
        for token, data in portfolio['token_balances'].items():
            print(f"  {token}:")
            print(f"    Amount: {data['total']}")
            print(f"    USD Value: ${data['usd_value']:,.2f}")
            print(f"    Percentage: {data['percentage']:.1f}%")
    
    # Run the async function
    asyncio.run(view_portfolio())
    ```

**Response:**

=== "curl"
    
    ```json
    {
      "total_usd_value": 10000.50,
      "token_balances": {
        "BTC": {
          "total": 0.15,
          "usd_value": 7500.00,
          "percentage": 75.0
        },
        "USDT": {
          "total": 2500.50,
          "usd_value": 2500.50,
          "percentage": 25.0
        }
      }
    }
    ```

=== "Python Client"
    
    ```
    📊 Portfolio Summary
    Total Value: $10,000.50
    
    Token Balances:
      BTC:
        Amount: 0.15
        USD Value: $7,500.00
        Percentage: 75.0%
      USDT:
        Amount: 2500.5
        USD Value: $2,500.50
        Percentage: 25.0%
    ```

## Place a Market Order

Execute a market buy order for BTC:

=== "curl"
    
    ```bash
    curl -X POST http://localhost:8000/trading/orders \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "account_name": "binance_main",
        "trading_pair": "BTC-USDT",
        "order_type": "market",
        "side": "buy",
        "amount": 0.001
      }'
    ```

=== "Python Client"
    
    ```python
    async def place_market_order():
        # Place a market buy order
        order = await client.create_order(
            account_name="binance_main",
            trading_pair="BTC-USDT",
            order_type="market",
            side="buy",
            amount=0.001  # Buy 0.001 BTC
        )
        
        print(f"\n✅ Order Placed Successfully!")
        print(f"  Order ID: {order['order_id']}")
        print(f"  Status: {order['status']}")
        print(f"  Side: {order['side']}")
        print(f"  Amount: {order['amount']} BTC")
        print(f"  Executed Price: ${order['executed_price']:,.2f}")
        
        return order
    
    # Run the async function
    order = asyncio.run(place_market_order())
    ```

**Response:**

=== "curl"
    
    ```json
    {
      "order_id": "123456789",
      "status": "filled",
      "side": "buy",
      "trading_pair": "BTC-USDT",
      "order_type": "market",
      "amount": 0.001,
      "executed_amount": 0.001,
      "executed_price": 50000.00,
      "created_at": "2025-07-16T10:31:00Z"
    }
    ```

=== "Python Client"
    
    ```
    ✅ Order Placed Successfully!
      Order ID: 123456789
      Status: filled
      Side: buy
      Amount: 0.001 BTC
      Executed Price: $50,000.00
    ```

## Complete Example

Here's a complete example that performs all three operations:

=== "curl"
    
    ```bash
    # Step 1: Add exchange account
    echo "🔑 Adding Exchange Account..."
    curl -X POST http://localhost:8000/accounts \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "name": "binance_main",
        "exchange": "binance",
        "api_key": "your-binance-api-key",
        "api_secret": "your-binance-api-secret"
      }'
    
    # Wait for account sync
    sleep 2
    
    # Step 2: View portfolio
    echo -e "\n📊 Fetching Portfolio..."
    curl -X GET http://localhost:8000/portfolio/balances \
      -u "admin:admin"
    
    # Step 3: Place market order
    echo -e "\n💱 Placing Market Order..."
    curl -X POST http://localhost:8000/trading/orders \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "account_name": "binance_main",
        "trading_pair": "BTC-USDT",
        "order_type": "market",
        "side": "buy",
        "amount": 0.001
      }'
    ```

=== "Python Client"
    
    Save this code to `hummingbot_api_demo.py`:
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient
    
    async def main():
        # Initialize client
        client = HummingbotAPIClient(
            base_url="http://localhost:8000",
            username="admin",
            password="admin"
        )
        
        try:
            # Step 1: Add exchange account
            print("🔑 Adding Exchange Account...")
            account = await client.add_account(
                name="binance_main",
                exchange="binance",
                api_key="your-binance-api-key",
                api_secret="your-binance-api-secret"
            )
            print(f"✓ Account '{account['name']}' added successfully!")
            
            # Wait for account sync
            await asyncio.sleep(2)
            
            # Step 2: View portfolio
            print("\n📊 Fetching Portfolio...")
            portfolio = await client.get_portfolio()
            print(f"Total Portfolio Value: ${portfolio['total_usd_value']:,.2f}")
            
            # Step 3: Place market order
            print("\n💱 Placing Market Order...")
            order = await client.create_order(
                account_name="binance_main",
                trading_pair="BTC-USDT",
                order_type="market",
                side="buy",
                amount=0.001
            )
            print(f"✓ Order {order['order_id']} executed at ${order['executed_price']:,.2f}")
            
        except Exception as e:
            print(f"❌ Error: {e}")
        
        finally:
            # Clean up
            await client.close()
    
    # Run the complete example
    if __name__ == "__main__":
        asyncio.run(main())
    ```
    
    Run the script:
    ```bash
    python hummingbot_api_demo.py
    ```

## Next Steps

Now that you've completed the quickstart, explore more advanced features:

- **[Bot Management](/hummingbot-api/#bot-orchestration)**: Deploy and manage multiple trading bots
- **[Strategy Configuration](/hummingbot-api/#strategy-management)**: Configure and deploy trading strategies
- **[Market Data](/hummingbot-api/#market-data)**: Access real-time and historical market data
- **[Backtesting](/hummingbot-api/#backtesting)**: Test your strategies with historical data

For the complete API reference, visit the [API documentation](http://localhost:8000/docs) when your API is running.