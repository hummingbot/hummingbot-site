**ArbitrageExecutor:** Specialized in controlling profitability between two markets, such as between centralized exchanges (CEX) and decentralized exchanges (DEX), optimizing for arbitrage opportunities.

The [ArbitrageExecutor](https://github.com/hummingbot/hummingbot/blob/13aab912ea297a70e52f560cc7239400a1204aa6/hummingbot/smart_components/executors/arbitrage_executor/arbitrage_executor.py) class is a specialized component within Hummingbot designed for capitalizing on price discrepancies between different markets or exchanges by automating the process of simultaneously executes buy and sell orders on two distinct markets, aiming to exploit arbitrage opportunities for profit.

- **Efficiency**: Automates the complex process of identifying and executing arbitrage opportunities.
- **Speed**: Executes buy and sell orders simultaneously to capture fleeting arbitrage opportunities.
- **Risk Management**: Calculates transaction costs to ensure profitable trades post-fees.
- **Flexibility**: Can be configured for various arbitrage strategies across different markets and exchanges.

### Workflow

Upon initialization, the `ArbitrageExecutor` performs the following actions:

1. **Validation**: Ensures that the proposed arbitrage is valid, with interchangeable trading pairs.
2. **Order Tracking**: Maintains `TrackedOrder` instances for buy and sell orders to monitor their statuses.
3. **Profitability Calculation**: Assesses potential profit, accounting for transaction costs, and executes trades if profitability exceeds the minimum threshold.

### Sample Script

Below, we show code snippets from the [Arbitrage with Smart Component](https://github.com/hummingbot/hummingbot/blob/13aab912ea297a70e52f560cc7239400a1204aa6/scripts/archived_scripts/examples_using_smart_components/arbitrage_with_smart_component.py) script, which provides an example of how to use the ArbitrageExecutor.

You can define the two markets to arbitrage, the order amount, and the arbitrage profitability threshold.

```python
class ArbitrageWithSmartComponent(ScriptStrategyBase):
    # Parameters
    exchange_pair_1 = ExchangePair(exchange="binance", trading_pair="MATIC-USDT")
    exchange_pair_2 = ExchangePair(exchange="uniswap_polygon_mainnet", trading_pair="WMATIC-USDT")
    order_amount = Decimal("50")  # in base asset
    min_profitability = Decimal("0.004")
```

The `create_arbitrage_executor` method is responsible for creating a new `ArbitrageExecutor`. First, it checks available balances on the buying and selling exchanges to ensure there's enough capital to execute the arbitrage. If so, it creates `ArbitrageExecutor` instances based on the settings above. 

```python
def create_arbitrage_executor(self, buying_exchange_pair: ExchangePair, selling_exchange_pair: ExchangePair):
    ...
    arbitrage_config = ArbitrageConfig(
        buying_market=buying_exchange_pair,
        selling_market=selling_exchange_pair,
        order_amount=self.order_amount,
        min_profitability=self.min_profitability,
    )
```
