# Gateway Strategies and Scripts

Gateway enables sophisticated trading strategies on decentralized exchanges through Hummingbot. This page lists available Gateway-compatible strategies and scripts.

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
# Code snippet for connecting to Gateway data feeds
# and receiving real-time price updates from DEX pools
```

### Connect Market

```python
# Code snippet for establishing connection to a Gateway market
# and initializing the connector
```

### Get Price

```python
# Code snippet for fetching current prices from Gateway
# including mid price, best bid/ask, and pool reserves
```

### Place Order

```python
# Code snippet for executing swaps through Gateway
# including quote fetching and transaction submission
```

### Add Liquidity

```python
# Code snippet for adding liquidity to AMM or CLMM pools
# including position creation and token approval
```

### Remove Liquidity

```python
# Code snippet for removing liquidity from existing positions
# including partial and full withdrawals
```
