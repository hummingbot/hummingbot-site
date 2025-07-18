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

## List Available Exchanges

Get a list of all available exchange connectors. Note that spot and perpetual markets are separate connectors (e.g., `hyperliquid` for spot and `hyperliquid_perpetual` for perps).

=== "curl"
    
    ```bash
    curl -u admin:admin -X 'GET' \
      'http://localhost:8000/connectors/' \
      -H 'accept: application/json'
    ```
=== "Python Client"
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    # Create client instance
    client = HummingbotAPIClient(
        base_url="http://localhost:8000",
        username="admin",
        password="admin"
    )

    async def list_exchanges():
        await client.init()
        try:
            connectors = await client.connectors.list_connectors()
            print("\U0001F4CB Available exchanges/connectors:")
            for connector in connectors:
                print(f"  - {connector}")
            return connectors
        finally:
            await client.close()

    def main():
        connectors = asyncio.run(list_exchanges())
        return connectors

    if __name__ == "__main__":
        main()
    ```

**Response:**

=== "curl"
    
    ```json
    [
      "binance",
      "binance_perpetual",
      "hyperliquid",
      "hyperliquid_perpetual",
      "okx",
      "okx_perpetual",
    ]
    ```
=== "Python Client"
    
    ```
    📋 Available exchanges/connectors:
      - binance
      - binance_perpetual
      - hyperliquid
      - hyperliquid_perpetual
      - okx
      - okx_perpetual
    ```

## Get Connector Configuration

Before adding credentials, check what configuration fields are required for your connector:

=== "curl"
    
    ```bash
    curl -u admin:admin -X 'GET' \
      'http://localhost:8000/connectors/hyperliquid/config-map' \
      -H 'accept: application/json'
    ```

=== "Python Client"
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    # Create client instance
    client = HummingbotAPIClient(
        base_url="http://localhost:8000",
        username="admin",
        password="admin"
    )

    async def get_connector_config():
        await client.init()
        try:
            # Get required config fields for hyperliquid
            config_fields = await client.connectors.get_config_map("hyperliquid")
            print("\U0001F4CB Required configuration fields for hyperliquid:")
            for field in config_fields:
                print(f"  - {field}")
            return config_fields
        finally:
            await client.close()

    # Run the async function
    config_fields = asyncio.run(get_connector_config())
    ```

**Response:**

=== "curl"
    
    ```json
    [
      "hyperliquid_api_secret",
      "use_vault",
      "hyperliquid_api_key"
    ]
    ```

=== "Python Client"
    
    ```
    📋 Required configuration fields for hyperliquid:
      - hyperliquid_api_secret
      - use_vault
      - hyperliquid_api_key
    ```

## Add Exchange Credentials

Add your exchange credentials to the API. By default, only the `master_account` is created. You can add multiple accounts with different names if needed.

For Hyperliquid:

- `hyperliquid_api_secret`: Your Hyperliquid public address or vault address
- `hyperliquid_api_key`: Your API private key 
- `use_vault`: Set to `true` if using vault address, `false` for normal account

=== "curl"
    
    ```bash
    curl -X POST http://localhost:8000/accounts/add-credential/master_account/hyperliquid \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "hyperliquid_api_key": "0x1234...abcd",
        "hyperliquid_api_secret": "your-private-key",
        "use_vault": false
      }'
    ```

=== "Python Client"
    
    ```python   
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    # Create client instance
    client = HummingbotAPIClient(
        base_url="http://localhost:8000",
        username="admin",
        password="admin"
    )

    async def add_hyperliquid_credentials():
        await client.init()
        try:
            data = {
                "hyperliquid_api_key": "0x1234....abcde",  # Your public/vault address
                "hyperliquid_api_secret": "your-api-private-key",
                "use_vault": False  # True if using vault address
            }
            # Add credentials for hyperliquid to the 'master_account'
            result = await client.accounts.add_credential("master_account", "hyperliquid", data)
            print("\U0001F511 Added hyperliquid credentials:")
            print(result)
            return result
        finally:
            await client.close()

    # Run the async function
    asyncio.run(add_hyperliquid_credentials())
    ```

**Response:**

=== "curl"
    
    ```json
    {
      "message": "Connector credentials added successfully,
    }
    ```

=== "Python Client"
    
    ```json
    🔑 Added hyperliquid credentials:
    {'message': 'Connector credentials added successfully.'}
    ```

## View Your Portfolio

Check your portfolio balances across all connected exchanges:
 
=== "curl"
    
    ```bash
    curl -u admin:admin -X 'POST' \
      'http://localhost:8000/portfolio/state' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{}'
    ```

=== "Python Client"
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    # Create client instance
    client = HummingbotAPIClient(
        base_url="http://localhost:8000",
        username="admin",
        password="admin"
    )

    async def view_portfolio():
        await client.init()
        try:
            # Get portfolio state
            portfolio = await client.portfolio.get_state()
            print(f"\n\U0001F4CA Portfolio Summary")
            for account_name, exchanges in portfolio.items():
                print(f"\n{account_name}:")
                for exchange, balances in exchanges.items():
                    print(f"  {exchange}:")
                    for balance in balances:
                        print(f"    {balance['token']}:")
                        print(f"      Units: {balance['units']}")
                        print(f"      Price: ${balance['price']:.2f}")
                        print(f"      Value: ${balance['value']:.2f}")
                        print(f"      Available: {balance['available_units']}")
        finally:
            await client.close()

    # Run the async function
    asyncio.run(view_portfolio())
    ```

**Response:**

=== "curl"
    
    ```json
    {
      "master_account": {
        "hyperliquid": [
          {
            "token": "USDC",
            "units": 100.00,
            "price": 1,
            "value": 100.00,
            "available_units": 100.00
          }
        ]
      }
    }
    ```

=== "Python Client"
    
    ```
    📊 Portfolio Summary
    
    master_account:
      hyperliquid:
        USDC:
          Units: 100.00
          Price: $1.00
          Value: $100.00
          Available: 100.00
    ```

## Get Trading Rules

Before placing orders, fetch the trading rules for your intended trading pair to understand order size limits and price increments:

=== "curl"
    
    ```bash
    curl -u admin:admin -X 'GET' \
      'http://localhost:8000/connectors/hyperliquid/trading-rules?trading_pairs=HYPE-USDC' \
      -H 'accept: application/json'
    ```
=== "Python Client"
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    async def get_trading_rules():
        client = HummingbotAPIClient(
            base_url="http://localhost:8000",
            username="admin",
            password="admin"
        )
        await client.init()
        try:
            # Get trading rules for HYPE-USDC
            rules = await client.connectors.get_trading_rules(
                connector_name="hyperliquid",
                trading_pairs=["HYPE-USDC"]
            )
            hype_rules = rules["HYPE-USDC"]
            print("\U0001F4CF Trading Rules for HYPE-USDC:")
            print(f"  Min Order Size: {hype_rules['min_order_size']}")
            print(f"  Max Order Size: {hype_rules['max_order_size']}")
            print(f"  Min Price Increment: {hype_rules['min_price_increment']}")
            print(f"  Min Base Amount Increment: {hype_rules['min_base_amount_increment']}")
            print(f"  Supports Limit Orders: {hype_rules['supports_limit_orders']}")
            print(f"  Supports Market Orders: {hype_rules['supports_market_orders']}")
            return rules
        finally:
            await client.close()

    # Run the async function
    if __name__ == "__main__":
        asyncio.run(get_trading_rules())
    ```
**Response:**

=== "curl"
    
    ```json
    {
      "HYPE-USDC": {
        "min_order_size": 0,
        "max_order_size": 1e+56,
        "min_price_increment": 0.0001,
        "min_base_amount_increment": 0.01,
        "min_quote_amount_increment": 1e-56,
        "min_notional_size": 0,
        "min_order_value": 0,
        "max_price_significant_digits": 1e+56,
        "supports_limit_orders": true,
        "supports_market_orders": true,
        "buy_order_collateral_token": "USDC",
        "sell_order_collateral_token": "USDC"
      }
    }
    ```

=== "Python Client"
    
    ```
    📏 Trading Rules for HYPE-USDC:
      Min Order Size: 0
      Max Order Size: 1e+56
      Min Price Increment: 0.0001
      Min Base Amount Increment: 0.01
      Supports Limit Orders: True
      Supports Market Orders: True
    ```

## Place a Limit Order

Execute a limit sell order for HYPE:

=== "curl"
    
    ```bash
    curl -u admin:admin -X 'POST' \
      'http://localhost:8000/trading/orders' \
      -H 'accept: application/json' \
      -H 'Content-Type: application/json' \
      -d '{
      "account_name": "master_account",
      "connector_name": "hyperliquid",
      "trading_pair": "HYPE-USDC",
      "trade_type": "SELL",
      "amount": 1,
      "order_type": "LIMIT",
      "price": 47.1,
      "position_action": "OPEN"
    }'
    ```
=== "Python Client"
    
    ```python
    import asyncio
    from hummingbot_api_client import HummingbotAPIClient

    # Create client instance
    client = HummingbotAPIClient(
        base_url="http://localhost:8000",
        username="admin",
        password="admin"
    )

    async def place_limit_order():
        await client.init()
        try:
            # Place a limit sell order
            order = await client.trading.place_order(
                account_name="master_account",
                connector_name="hyperliquid",
                trading_pair="HYPE-USDC",
                trade_type="SELL",
                amount=1,
                order_type="LIMIT",
                price=47.1,
                position_action="OPEN"
            )
            print(f"\n✅ Order Placed Successfully!")
            print(f"  Order ID: {order['order_id']}")
            print(f"  Status: {order['status']}")
            print(f"  Connector: {order['connector_name']}")
            print(f"  Trading Pair: {order['trading_pair']}")
            print(f"  Type: {order['order_type']} {order['trade_type']}")
            print(f"  Amount: {order['amount']} HYPE")
            print(f"  Price: ${order['price']}")
            return order
        finally:
            await client.close()

    # Run the async function
    asyncio.run(place_limit_order())
    ```

!!! warning "Geo-Restriction Error"
    If you receive an error like:
    ```json
    {
      "detail": "Failed to place trade: No order book exists for 'HYPE-USDC'."
    }
    ```
    This may indicate you are geo-restricted from trading on the exchange. Check your API logs for more details:
    ```bash
    docker logs hummingbot-api
    ```

## Complete Example

Here's a complete example that performs all three operations:

=== "curl"
    
    ```bash
    echo "🔑 Adding Exchange Account..."
    curl -X POST "http://localhost:8000/accounts/add-account" \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{"account_name": "master_account"}'

    # Step 2: Add credentials for hyperliquid
    curl -X POST "http://localhost:8000/accounts/add-credential/master_account/hyperliquid" \
      -u "admin:admin" \
      -H "Content-Type: application/json" \
      -d '{
        "hyperliquid_api_key": "0x1234...abcd",
        "hyperliquid_api_secret": "your-arbitrum-private-key",
        "use_vault": false
      }'

    # Wait for account sync
    sleep 2

    # Step 3: View portfolio
    echo -e "\n\U0001F4CA Fetching Portfolio..."
    curl -X POST "http://localhost:8000/portfolio/state" \
      -u "admin:admin" \
      -H "accept: application/json" \
      -H "Content-Type: application/json" \
      -d '{}'

    # Step 4: Get trading rules for HYPE-USDC
    echo -e "\n\U0001F4CF Getting Trading Rules..."
    curl -X GET "http://localhost:8000/connectors/hyperliquid/trading-rules?trading_pairs=HYPE-USDC" \
      -u "admin:admin" \
      -H "accept: application/json"

    # Step 5: Place limit order
    echo -e "\n\U0001F4B1 Placing Limit Order..."
    curl -X POST "http://localhost:8000/trading/orders" \
      -u "admin:admin" \
      -H "accept: application/json" \
      -H "Content-Type: application/json" \
      -d '{
        "account_name": "master_account",
        "connector_name": "hyperliquid",
        "trading_pair": "HYPE-USDC",
        "trade_type": "SELL",
        "amount": 1,
        "order_type": "LIMIT",
        "price": 47.1,
        "position_action": "OPEN"
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
        await client.init()
        try:
            # Step 1: Add exchange account
            print("🔑 Adding Exchange Account...")
            try:
                account = await client.accounts.add_account(
                    account_name="master_account"
                )
                print(f"✓ Account '{account['account_name']}' added successfully!")
            except Exception as e:
                if "Account already exists" in str(e):
                    print("ℹ️ Account already exists, continuing...")
                else:
                    raise

            # Step 2: Add credentials for hyperliquid
            print("\n🔑 Adding Hyperliquid Credentials...")
            credentials = {
                "hyperliquid_api_key": "0x1234...abcd",
                "hyperliquid_api_secret": "your-arbitrum-private-key",
                "use_vault": False
            }
            cred_result = await client.accounts.add_credential(
                account_name="master_account",
                connector_name="hyperliquid",
                credentials=credentials
            )
            print(f"✓ Credentials added: {cred_result}")

            # Wait for account sync
            await asyncio.sleep(2)

            # Step 3: View portfolio
            print("\n📊 Fetching Portfolio...")
            portfolio = await client.portfolio.get_state()
            print("Portfolio State:")
            for account, exchanges in portfolio.items():
                for exchange, balances in exchanges.items():
                    for balance in balances:
                        print(f"  {account}/{exchange}: {balance['units']:.2f} {balance['token']} (${balance['value']:.2f})")

            # Step 4: Get trading rules
            print("\n📏 Getting Trading Rules for HYPE-USDC...")
            rules = await client.connectors.get_trading_rules(
                connector_name="hyperliquid",
                trading_pairs=["HYPE-USDC"]
            )
            hype_rules = rules["HYPE-USDC"]
            print(f"  Min Order Size: {hype_rules['min_order_size']}")
            print(f"  Min Price Increment: {hype_rules['min_price_increment']}")

            # Step 5: Place limit order
            print("\n💱 Placing Limit Order...")
            order = await client.trading.place_order(
                account_name="master_account",
                connector_name="hyperliquid",
                trading_pair="HYPE-USDC",
                trade_type="SELL",
                amount=1,
                order_type="LIMIT",
                price=47.1,
                position_action="OPEN"
            )
            print(f"✓ Order {order['order_id']} submitted")
            print(f"  Status: {order['status']}")
            print(f"  Type: {order['order_type']} {order['trade_type']}")
            print(f"  Amount: {order['amount']} HYPE @ ${order['price']}")

        except Exception as e:
            print(f"❌ Error: {e}")
        finally:
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
