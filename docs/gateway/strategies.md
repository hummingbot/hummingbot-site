# Sample Strategies Using Gateway Connectors

> **Note**: This documentation is a work in progress and will be updated frequently as the Gateway connectors and strategies evolve. The examples shown here may change as new features are added or existing ones are modified.

This page provides examples of strategies and scripts you can run in Hummingbot that utilize the new Gateway connectors. These examples demonstrate how to interact with various DEX protocols through Gateway.

## Sample Gateway Scripts

You can also run the following sample Gateway scripts in the `/scripts/` folder of the Hummingbot repo:

### AMM Price Example

The `amm_price_example.py` script demonstrates how to fetch and print prices from an AMM connector:

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
from decimal import Decimal

# Initialize the data feed
prices = AmmGatewayDataFeed(
    connector_chain_network="raydium/clmm_solana_mainnet_beta",
    trading_pairs={"SOL-USDC", "SOL-USDT"},
    order_amount_in_base=Decimal("1"),
)

# Start the data feed
prices.start()
```

### AMM Trade Example

The `amm_trade_example.py` script shows how to fetch prices and execute trades using an AMM connector:

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
from decimal import Decimal

# Initialize the data feed
prices = AmmGatewayDataFeed(
    connector_chain_network="raydium/clmm_solana_mainnet_beta",
    trading_pairs={"SOL-USDC"},
    order_amount_in_base=Decimal("1"),
)

# Start the data feed
prices.start()
```

### CLMM Position Management

The `clmm_manage_position.py` script (work in progress) will demonstrate how to manage concentrated liquidity positions on Raydium Concentrated.

## V2 Strategies

### Arbitrage Controller

The V2 Arbitrage Controller uses the Swap schema in Gateway to execute arbitrage trades between different exchanges. It's more flexible and powerful than the V1 `amm_arb` strategy.

Example configuration:

```python
class ArbitrageWithSmartComponent(ScriptStrategyBase):
    # Parameters
    exchange_pair_1 = ExchangePair(exchange="okx", trading_pair="SOL-USDT")
    exchange_pair_2 = ExchangePair(exchange="raydium/clmm_solana_mainnet_beta", trading_pair="SOL-USDC")
    order_amount = Decimal("50")  # in base asset
    min_profitability = Decimal("0.004")
```

## V1 Strategies

### `amm-arb`

The V1 AMM Arbitrage strategy has been updated to use the Swap schema in Gateway. It's a good way to safely test Gateway by running between a testnet DEX connector and a CEX connector in paper trading mode.

Example configuration:

```yaml
template_version: 5
strategy: amm_arb
connector_1: raydium/clmm_solana_mainnet_beta
market_1: SOL-USDC
connector_2: okx
market_2: SOL-USDT
min_profitability: 1.0
market_1_slippage_buffer: 1.0
market_2_slippage_buffer: 0.0
concurrent_orders_submission: false
```

### `cross_exchange_market_making`

The Cross Exchange Market Making strategy has also been updated to use the Swap schema in Gateway. It uses a taker exchange for hedging positions.

## Best Practices

1. **Check node connectivity**: Ensure your node provider is properly configured. Using a node provider with an API key is recommended for better reliability and performance.

2. **Start with small amounts**: Test strategies with small amounts of capital first to verify functionality before scaling up.

3. **Verify token symbols**: Make sure to use the correct token symbols and add them to your token list if they're not already included.

4. **Monitor gas costs**: Be aware of gas costs when trading on DEXs, especially during high network congestion.

5. **Use appropriate slippage buffers**: Set higher slippage buffers for less liquid markets to account for price movement.
