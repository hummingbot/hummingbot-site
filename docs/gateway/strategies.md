Gateway enables sophisticated trading strategies on decentralized exchanges through Hummingbot. This page lists available Gateway-compatible strategies/scripts along with commonly used code snippets.

## Available Scripts and Strategies

The following table lists Gateway-compatible scripts and strategies available in the Hummingbot repository. All links point to the development branch where the latest versions are maintained.

| Name | Type | Description | Supported Schemas |
|------|------|-------------|-------------------|
| [AMM Data Feed Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py) | Script | Fetches real-time price data and monitors pool reserves from AMM pools | Router, AMM, CLMM |
| [AMM Trade Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py) | Script | Executes token swaps on AMM and CLMM pools with configurable parameters | Router, AMM, CLMM |
| [LP Manage Position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py) | Script | Manages liquidity positions including adding, removing, and collecting fees | AMM, CLMM |
| [AMM Arbitrage](https://github.com/hummingbot/hummingbot/tree/development/hummingbot/strategy/amm_arb) | V1 Strategy | Arbitrage between CEX and DEX markets | Router, AMM, CLMMuter |
| [Cross Exchange Market Making](https://github.com/hummingbot/hummingbot/tree/development/hummingbot/strategy/cross_exchange_market_making) | V1 Strategy | Market making with Gateway connector as taker market | Router, AMM, CLMM |
| [Arbitrage Controller](https://github.com/hummingbot/hummingbot/blob/development/controllers/generic/arbitrage_controller.py) | V2 Controller | Creates ArbitrageExecutors between two markets | Router, AMM, CLMM |
| [XEMM Controller](https://github.com/hummingbot/hummingbot/blob/development/controllers/generic/xemm_controller.py) | V2 Controller | Creates XEMMExecutors between two markets | Router, AMM, CLMM |

## Code Snippets

The following code snippets demonstrate common Gateway operations in Hummingbot scripts and strategies.

### Data Feed

```python
amm_data_feed = AmmGatewayDataFeed(
            connector="jupiter/router",
            trading_pairs={"SOL-USDC","JUP-USDC"}
            order_amount_in_base=Decimal("1.0")
        )
```

### Connect Market

```python
@classmethod
def init_markets(cls):
        cls.markets = {"jupiter/router": {"SOL-USDC"}}

def __init__(self, connectors: Dict[str, ConnectorBase]):
        super().__init__(connectors)
```

### Get Price

```python
current_price = await self.connectors["jupiter/router"].get_quote_price(
                    trading_pair="SOL-USDC",
                    is_buy=True,
                    amount=Decimal("1.0"),
                )
```

### Get Balance
```python
connector = self.connectors["jupiter/router"]
await connector.update_balances(on_interval=False)
balance = connector.get_balance("SOL")
```

### Place Order

```python
connector = self.connectors["jupiter/router"]
order_id = connector.place_order(
                    is_buy=True,
                    trading_pair="SOL-USDC",
                    amount=Decimal("1.0"),
                    price=current_price,
                )
```

### Get LP Position Info

```python
position_info = await self.connectors["jupiter/router"].get_position_info(
                    trading_pair="SOL-USDC",
                    position_address="<position-address>"
                )
```

### Add Liquidity

```python
order_id = self.connectors["meteora/clmm"].add_liquidity(
                    trading_pair="SOL-USDC",
                    price=current_price,
                    upper_width_pct=10.0,
                    lower_width_pct=10.0,
                    base_token_amount=0.1,
                    quote_token_amount=20,
                )
```

### Remove Liquidity

```python
order_id = self.connectors["meteora/clmm"].remove_liquidity(
                    trading_pair="SOL-USDC",
                    position_address="<position-address>"
                )
```

