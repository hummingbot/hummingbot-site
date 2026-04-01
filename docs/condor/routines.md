# Routines

**Routines** are deterministic workflows that can be shared across agents. Unlike [Skills](/mcp/skills.md) which involve LLM reasoning, Routines are fully deterministic—they execute the same way every time given the same inputs.

## Overview

Routines complement Skills:

| Aspect | Skills | Routines |
|--------|--------|----------|
| Execution | Probabilistic (LLM-powered) | Deterministic |
| Purpose | Reasoning and decision-making | Automation and data processing |
| Variability | May produce different outputs | Same input → same output |
| Examples | Strategy analysis, trade decisions | Indicators, webhooks, reports |

## Use Cases

### Custom Indicators

Define technical indicators not built into exchanges:

```python
# routines/indicators/vwap.py
from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory

async def calculate_vwap(connector: str, trading_pair: str, interval: str = "1m", periods: int = 20):
    """Calculate Volume-Weighted Average Price."""
    candles = await CandlesFactory.get_candles(
        connector=connector,
        trading_pair=trading_pair,
        interval=interval,
        max_records=periods
    )

    total_volume = sum(c.volume for c in candles)
    vwap = sum(c.close * c.volume for c in candles) / total_volume

    return {
        "vwap": vwap,
        "periods": periods,
        "total_volume": total_volume,
    }
```

Available indicators can be called by agents:

```python
# Agent uses the VWAP routine
vwap_data = await routines.indicators.vwap(
    connector="binance",
    trading_pair="BTC-USDT",
    periods=50
)

if current_price < vwap_data["vwap"]:
    # Price below VWAP - potential buy signal
    pass
```

### TradingView Webhooks

Receive alerts from TradingView and trigger agent actions:

```python
# routines/webhooks/tradingview.py
from fastapi import Request

async def handle_tradingview_alert(request: Request):
    """Process TradingView webhook alerts."""
    payload = await request.json()

    alert = {
        "symbol": payload.get("ticker"),
        "action": payload.get("action"),  # "buy" or "sell"
        "price": float(payload.get("price", 0)),
        "message": payload.get("message"),
        "timestamp": payload.get("time"),
    }

    # Route to appropriate agent based on symbol
    agent_id = get_agent_for_symbol(alert["symbol"])
    await notify_agent(agent_id, alert)

    return {"status": "received", "alert": alert}
```

Configure in your agent to react to TradingView signals:

```yaml
# In agent.md
webhooks:
  tradingview:
    enabled: true
    symbols: ["BTCUSDT", "ETHUSDT", "SOLUSDT"]
    actions:
      buy: "create_long_position"
      sell: "close_position"
```

### Daily Performance Reports

Generate scheduled reports aggregating executor and position data:

```python
# routines/reports/daily_performance.py
from datetime import datetime, timedelta

async def generate_daily_report(agent_id: str):
    """Generate daily performance report for an agent."""

    # Get executor data from last 24 hours
    cutoff = datetime.utcnow() - timedelta(days=1)
    executors = await get_executors(
        controller_id=agent_id,
        since=cutoff
    )

    # Aggregate metrics
    report = {
        "agent_id": agent_id,
        "period": "24h",
        "generated_at": datetime.utcnow().isoformat(),
        "summary": {
            "total_executors": len(executors),
            "win_rate": calculate_win_rate(executors),
            "net_pnl_quote": sum(e.net_pnl_quote for e in executors),
            "fees_paid_quote": sum(e.fees_paid_quote for e in executors),
            "volume_quote": sum(e.volume_quote for e in executors),
        },
        "by_type": aggregate_by_type(executors),
        "by_hour": aggregate_by_hour(executors),
        "top_performers": get_top_performers(executors, n=5),
        "worst_performers": get_worst_performers(executors, n=5),
    }

    return report
```

Schedule reports via configuration:

```yaml
# In config.yml
routines:
  daily_report:
    schedule: "0 0 * * *"  # Midnight UTC daily
    notify: ["telegram", "email"]
```

### Custom Alerts

Monitor conditions and trigger notifications:

```python
# routines/alerts/price_alerts.py
from typing import List, Dict

class PriceAlertMonitor:
    def __init__(self, alerts: List[Dict]):
        self.alerts = alerts
        self.triggered = set()

    async def check_alerts(self, prices: Dict[str, float]):
        """Check price conditions and trigger alerts."""
        notifications = []

        for alert in self.alerts:
            key = f"{alert['symbol']}_{alert['condition']}_{alert['price']}"

            if key in self.triggered:
                continue

            current_price = prices.get(alert["symbol"])
            if current_price is None:
                continue

            triggered = False
            if alert["condition"] == "above" and current_price > alert["price"]:
                triggered = True
            elif alert["condition"] == "below" and current_price < alert["price"]:
                triggered = True

            if triggered:
                self.triggered.add(key)
                notifications.append({
                    "type": "price_alert",
                    "symbol": alert["symbol"],
                    "condition": alert["condition"],
                    "target_price": alert["price"],
                    "current_price": current_price,
                    "message": alert.get("message", f"{alert['symbol']} {alert['condition']} {alert['price']}"),
                })

        return notifications
```

Additional alert types:

```python
# Volume spike detection
async def check_volume_spike(symbol: str, threshold: float = 2.0):
    """Alert when volume exceeds N times the average."""
    pass

# Funding rate monitoring
async def check_funding_rate(symbol: str, threshold: float = 0.01):
    """Alert when funding rate exceeds threshold."""
    pass

# Liquidation monitoring
async def check_liquidation_risk(position: Dict, threshold: float = 0.8):
    """Alert when position approaches liquidation."""
    pass
```

## Creating Routines

### Directory Structure

```
~/condor/routines/
├── indicators/
│   ├── __init__.py
│   ├── vwap.py
│   ├── bollinger.py
│   └── custom_oscillator.py
├── webhooks/
│   ├── __init__.py
│   ├── tradingview.py
│   └── custom_webhook.py
├── reports/
│   ├── __init__.py
│   ├── daily_performance.py
│   └── weekly_summary.py
└── alerts/
    ├── __init__.py
    ├── price_alerts.py
    ├── volume_alerts.py
    └── funding_alerts.py
```

### Registration

Routines are registered in configuration:

```yaml
# config.yml
routines:
  # Indicator routines
  indicators:
    vwap:
      module: routines.indicators.vwap
      function: calculate_vwap

  # Webhook handlers
  webhooks:
    tradingview:
      module: routines.webhooks.tradingview
      function: handle_tradingview_alert
      endpoint: /webhooks/tradingview

  # Scheduled routines
  scheduled:
    daily_report:
      module: routines.reports.daily_performance
      function: generate_daily_report
      schedule: "0 0 * * *"

  # Alert monitors
  alerts:
    price:
      module: routines.alerts.price_alerts
      class: PriceAlertMonitor
      check_interval: 5  # seconds
```

### Calling from Agents

Agents can invoke routines via MCP tools:

```python
# Agent calls a routine
vwap = await mcp_tools.run_routine(
    routine="indicators.vwap",
    params={
        "connector": "binance",
        "trading_pair": "BTC-USDT",
        "periods": 50
    }
)

# Use routine output in decision making
if current_price < vwap["vwap"] * 0.98:
    # Price 2% below VWAP - consider buying
    pass
```

## Best Practices

1. **Keep routines deterministic**: Same inputs should always produce same outputs
2. **Handle errors gracefully**: Return error objects rather than raising exceptions
3. **Include metadata**: Timestamp, version, parameters used
4. **Document parameters**: Clear docstrings with types and defaults
5. **Test thoroughly**: Unit tests for all calculation logic
