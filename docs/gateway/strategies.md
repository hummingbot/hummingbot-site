# Sample Strategies Using Gateway Connectors

This page provides examples of strategies and scripts you can run in Hummingbot that utilize the new Gateway connectors. These examples demonstrate how to interact with various DEX protocols through Gateway.

## AMM Arbitrage Strategy

The AMM Arbitrage strategy (`amm_arb`) is one of the most popular strategies for testing Gateway functionality. It monitors prices between a trading pair on a DEX versus another trading pair on a CEX or another DEX to identify arbitrage opportunities.

### Example Configuration

```yaml
template_version: 5
strategy: amm_arb
connector_1: uniswap_ethereum_goerli
market_1: WETH-DAI
connector_2: binance_paper_trade
market_2: ETH-USDT
min_profitability: 1.0
market_1_slippage_buffer: 1.0
market_2_slippage_buffer: 0.0
concurrent_orders_submission: false
debug_price_shim: false
gateway_transaction_cancel_interval: 600
```

## Sample Gateway Scripts

You can also run the following sample Gateway scripts in the `/scripts/` folder of the Hummingbot repo:

### AMM Price Example

The `amm_price_example.py` script demonstrates how to fetch and print prices from an AMM connector:

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
from decimal import Decimal

# Initialize the data feed
prices = AmmGatewayDataFeed(
    connector_chain_network="uniswap_polygon_mainnet",
    trading_pairs={"WETH-USDC", "WETH-DAI"},
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
    connector_chain_network="raydium_solana_mainnet-beta",
    trading_pairs={"SOL-USDC"},
    order_amount_in_base=Decimal("1"),
)

# Start the data feed
prices.start()
```

### CLMM Position Management

The `clmm_manage_position.py` script (work in progress) will demonstrate how to manage concentrated liquidity positions on DEXs that support CLMM (Concentrated Liquidity Market Maker) like Raydium Concentrated and Uniswap V3.

## V2 Strategies

### Arbitrage Controller

The V2 Arbitrage Controller uses the Swap schema in Gateway to execute arbitrage trades between different exchanges. It's more flexible and powerful than the V1 `amm_arb` strategy.

Example configuration:

```python
class ArbitrageWithSmartComponent(ScriptStrategyBase):
    # Parameters
    exchange_pair_1 = ExchangePair(exchange="binance", trading_pair="MATIC-USDT")
    exchange_pair_2 = ExchangePair(exchange="uniswap_polygon_mainnet", trading_pair="WMATIC-USDT")
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
connector_1: uniswap_ethereum_goerli
market_1: WETH-DAI
connector_2: binance_paper_trade
market_2: ETH-USDT
min_profitability: 1.0
market_1_slippage_buffer: 1.0
market_2_slippage_buffer: 0.0
concurrent_orders_submission: false
```

### `cross_exchange_market_making`

The Cross Exchange Market Making strategy has also been updated to use the Swap schema in Gateway. It uses a taker exchange for hedging positions.

## Best Practices

1. **Always approve tokens before running strategies**: Use `gateway approve-tokens [connector] [TOKENS]` to approve tokens for trading.

2. **Test on testnets first**: Use testnet DEX connectors (like Uniswap Goerli) and paper trading CEX connectors for initial testing.

3. **Monitor gas costs**: Be aware of gas costs when trading on DEXs, especially during high network congestion.

4. **Check token allowances**: If your strategy is stuck with a message like `"[connector] is not ready. Please wait..."`, it likely needs token approvals.

5. **Use appropriate slippage buffers**: Set higher slippage buffers for less liquid markets to account for price movement.

## Troubleshooting

If you encounter issues with your strategies:

1. Check that your wallet is properly connected: `gateway list`
2. Verify token approvals: `gateway approve-tokens [connector] [TOKENS]`
3. Check your balances: `balance`
4. Ensure you have sufficient native tokens (ETH, SOL, etc.) for gas fees
5. Review the logs for specific error messages
