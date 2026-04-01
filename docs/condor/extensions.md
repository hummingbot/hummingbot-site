# Extensions

This page outlines how to extend the Trading Agents Standard for additional position types beyond spot, perp, and LP positions. The `PositionHold` class is designed to be extensible via position-type flags that trigger specialized P&L calculations.

---

## Extension Pattern

New position types follow this pattern:

1. **Add a detection flag** (e.g., `vault_position: true`)
2. **Add type-specific fields** to the snapshot
3. **Implement a `_get_<type>_position_summary()` method** in `PositionHold`
4. **Route in `get_position_summary()`** based on the flag

```python
def get_position_summary(self, mid_price: Decimal):
    if self.is_lp_position:
        return self._get_lp_position_summary(mid_price)
    if self.is_vault_position:
        return self._get_vault_position_summary(mid_price)
    if self.is_loan_position:
        return self._get_loan_position_summary(mid_price)
    if self.is_event_position:
        return self._get_event_position_summary(mid_price)
    # Default: spot/perp
    return self._get_standard_position_summary(mid_price)
```

---

## Vault Positions

**Use case**: Deposits into lending protocols (Aave, Compound), staking vaults, or yield aggregators.

### Characteristics

- Single-token deposit (quote asset)
- Earns yield (interest, staking rewards, fees)
- Value grows over time
- No price drift (unlike LP with two tokens)

### Snapshot Fields

```python
{
    "client_order_id": vault_receipt_id,
    "trade_type": "DEPOSIT",  # or "WITHDRAW"
    "vault_position": True,

    # Deposit info
    "vault_address": "0x...",
    "vault_name": "aave-usdc-v3",
    "deposited_amount_quote": 1000.0,  # Principal deposited
    "deposit_timestamp": 1709251200,

    # Current state
    "current_amount_quote": 1025.0,  # Current value (principal + yield)
    "accrued_yield_quote": 25.0,     # Yield earned

    # For receipt tokens (aTokens, stETH, etc.)
    "receipt_token": "aUSDC",
    "receipt_amount": 995.5,  # May differ due to rebase mechanics
}
```

### P&L Calculation

```python
def _get_vault_position_summary(self, mid_price: Decimal):
    """Vault P&L: current_value - deposited_value"""
    unrealized_pnl = self.current_amount_quote - self.deposited_amount_quote

    # Breakeven doesn't apply (single token, no price reference)
    breakeven_price = Decimal("0")

    return PositionSummary(
        amount=self.current_amount_quote,
        side=TradeType.BUY,  # "Long" the vault
        unrealized_pnl_quote=unrealized_pnl,
        realized_pnl_quote=Decimal("0"),  # Until withdrawn
        breakeven_price=breakeven_price,
    )
```

### VaultExecutor Design

```python
class VaultExecutorConfig(ExecutorConfigBase):
    connector_name: str        # e.g., "aave_ethereum"
    vault_address: str         # Vault/pool address
    asset: str                 # Token to deposit (e.g., "USDC")
    amount: Decimal            # Amount to deposit
    keep_position: bool = True # Usually keep vault positions

    # Exit conditions (optional)
    min_apy_threshold: Decimal = None  # Exit if APY drops below
    max_duration_hours: int = None     # Time limit
```

---

## Loan Positions

**Use case**: Borrowing from lending protocols, margin loans, or collateralized debt positions.

### Characteristics

- Creates a **liability** (negative position)
- Accrues interest (debt grows over time)
- Requires collateral management
- P&L is negative when interest accrues

### Snapshot Fields

```python
{
    "client_order_id": loan_id,
    "trade_type": "BORROW",  # or "REPAY"
    "loan_position": True,

    # Loan info
    "protocol": "aave",
    "borrowed_asset": "USDC",
    "borrowed_amount_quote": 1000.0,   # Principal borrowed
    "borrow_timestamp": 1709251200,
    "interest_rate_mode": "variable",  # or "stable"

    # Current state
    "current_owed_quote": 1015.0,      # Current debt (principal + interest)
    "accrued_interest_quote": 15.0,    # Interest accrued

    # Collateral (for health factor tracking)
    "collateral_asset": "ETH",
    "collateral_amount": 0.5,
    "collateral_value_quote": 1500.0,
    "health_factor": 1.48,
    "liquidation_threshold": 0.825,
}
```

### P&L Calculation

```python
def _get_loan_position_summary(self, mid_price: Decimal):
    """Loan P&L: negative of interest accrued (liability)"""
    # Loans are liabilities - interest is a cost
    unrealized_pnl = -self.accrued_interest_quote

    return PositionSummary(
        amount=self.current_owed_quote,
        side=TradeType.SELL,  # "Short" - you owe
        unrealized_pnl_quote=unrealized_pnl,
        realized_pnl_quote=Decimal("0"),  # Until repaid
        breakeven_price=Decimal("0"),
    )
```

### LoanExecutor Design

```python
class LoanExecutorConfig(ExecutorConfigBase):
    connector_name: str         # e.g., "aave_ethereum"
    borrow_asset: str           # Token to borrow
    borrow_amount: Decimal      # Amount to borrow
    collateral_asset: str       # Collateral token
    collateral_amount: Decimal  # Collateral to post

    # Risk management
    min_health_factor: Decimal = Decimal("1.2")  # Auto-repay if below
    max_interest_accrued: Decimal = None         # Cost limit
    keep_position: bool = True
```

---

## Event Positions

**Use case**: Prediction markets, event futures, binary options, and outcome-based derivatives.

References:
- [HIP-4: Event Futures](https://www.bedlamresear.ch/posts/hip-4-event-futures/)
- [Polymarket Markets & Events](https://docs.polymarket.com/concepts/markets-events)

### Characteristics

- Outcome-based (binary or multi-outcome)
- Shares represent claims on outcomes
- Price reflects probability (0 to 1 for binary)
- Resolved at event conclusion
- Full P&L realized on resolution

### Market Types

**Single Market (Binary)**:
- Two outcomes: YES and NO
- Prices sum to ~$1.00 (minus spread)
- Example: "Will ETH be above $5000 on Dec 31, 2025?"
- Polymarket: Single condition token

**Multi-Outcome (Categorical)**:
- Multiple mutually exclusive outcomes
- Prices sum to ~$1.00
- Example: "Who will win the 2024 election?" (Trump, Biden, Other)
- Polymarket: Multiple condition tokens sharing a question

**Scalar (Range)**:
- Numeric outcome with continuous payout
- Example: "What will ETH price be on Dec 31?"
- Payout scales linearly within range

### Snapshot Fields

```python
{
    "client_order_id": position_id,
    "trade_type": "BUY",  # Buying outcome shares
    "event_position": True,

    # Market info
    "connector_name": "polymarket",
    "market_id": "0x...",           # Condition ID or market address
    "market_slug": "eth-above-5000-dec-2025",
    "question": "Will ETH be above $5000 on Dec 31, 2025?",
    "market_type": "binary",        # "binary", "categorical", "scalar"
    "resolution_timestamp": 1735689600,

    # Token info (Polymarket uses ERC-1155 condition tokens)
    "condition_id": "0x...",
    "token_id": "12345",            # Outcome token ID
    "outcome_index": 1,             # 0=No, 1=Yes for binary
    "outcome_name": "Yes",

    # Position
    "shares": 100.0,                # Number of outcome shares
    "cost_basis_quote": 65.0,       # Total cost in USDC
    "avg_entry_price": 0.65,        # Average price per share

    # Current state
    "current_price": 0.72,          # Current market probability/price
    "current_value_quote": 72.0,    # shares × current_price
    "complementary_price": 0.28,    # NO price (for binary: 1 - YES price)

    # Resolution (after event concludes)
    "is_resolved": False,
    "winning_outcome": None,        # Outcome index that won
    "payout_per_share": None,       # 1.0 if won, 0.0 if lost (binary)
    "resolution_source": None,      # Oracle or resolution mechanism
}
```

### P&L Calculation

```python
def _get_event_position_summary(self, mid_price: Decimal):
    """Event P&L: mark-to-market or final resolution"""
    if self.is_resolved:
        # Final P&L based on payout
        payout = self.shares * self.payout_per_share
        realized_pnl = payout - self.cost_basis_quote
        return PositionSummary(
            amount=Decimal("0"),  # Position closed
            unrealized_pnl_quote=Decimal("0"),
            realized_pnl_quote=realized_pnl,
        )
    else:
        # Mark-to-market
        current_value = self.shares * self.current_price
        unrealized_pnl = current_value - self.cost_basis_quote
        return PositionSummary(
            amount=self.shares,
            side=TradeType.BUY,
            breakeven_price=self.avg_entry_price,
            unrealized_pnl_quote=unrealized_pnl,
            realized_pnl_quote=Decimal("0"),
        )
```

### EventExecutor Design

```python
class EventExecutorConfig(ExecutorConfigBase):
    connector_name: str           # e.g., "polymarket", "kalshi"
    market_id: str                # Condition ID or market slug
    outcome_index: int            # Which outcome (0=No, 1=Yes for binary)
    side: TradeType               # BUY or SELL outcome shares

    # Order sizing (one of these)
    amount_quote: Decimal = None  # Amount to spend in USDC
    shares: Decimal = None        # Number of shares to buy/sell

    # Order type
    order_type: str = "market"    # "market" or "limit"
    limit_price: Decimal = None   # Max price per share (for limit orders)

    # Exit conditions
    take_profit_price: Decimal = None  # Exit if price reaches
    stop_loss_price: Decimal = None    # Exit if price drops
    trailing_stop_pct: Decimal = None  # Trailing stop percentage
    hold_until_resolution: bool = True # Wait for event outcome

    keep_position: bool = True    # Usually keep until resolution


class EventExecutorStates(Enum):
    NOT_STARTED = 0
    PLACING_ORDER = 1
    ORDER_FILLED = 2
    MONITORING = 3        # Watching price/resolution
    CLOSING = 4           # Exiting position
    AWAITING_RESOLUTION = 5
    RESOLVED = 6
    COMPLETE = 7
    FAILED = 8
```

### Trading Strategies

**Probability Arbitrage**:
```python
# If YES + NO prices > 1.00, sell both
# If YES + NO prices < 1.00, buy both
if yes_price + no_price > Decimal("1.01"):
    # Sell YES and NO - guaranteed profit
    sell_yes = EventExecutorConfig(outcome_index=1, side=TradeType.SELL)
    sell_no = EventExecutorConfig(outcome_index=0, side=TradeType.SELL)
```

**Market Making**:
```python
# Provide liquidity on both sides
buy_yes_config = EventExecutorConfig(
    outcome_index=1,
    side=TradeType.BUY,
    limit_price=Decimal("0.48"),  # Bid
)
sell_yes_config = EventExecutorConfig(
    outcome_index=1,
    side=TradeType.SELL,
    limit_price=Decimal("0.52"),  # Ask
)
```

---

## Combining Positions: DeFi Strategies

Complex DeFi strategies often combine multiple position types:

### Leveraged Yield Strategy

```
1. VaultExecutor: Deposit ETH as collateral to Aave
2. LoanExecutor: Borrow USDC against collateral
3. VaultExecutor: Deposit borrowed USDC to yield vault
4. Net P&L: vault_yield - loan_interest
```

### Hedged Prediction

```
1. EventExecutor: Buy 100 YES shares at 0.65
2. EventExecutor: Buy 50 NO shares at 0.35
3. Net cost: 65 + 17.5 = 82.5
4. Guaranteed payout: 100 (if YES) or 50 (if NO)
5. P&L depends on outcome
```

---

## Position Type Summary

| Type | Detection Flag | Value Tracking | P&L Formula |
|------|---------------|----------------|-------------|
| Spot | Default | `buy_amount_base/quote` | `(price - breakeven) × amount` |
| Perp | Default + `_perpetual` | `buy_amount_base/quote` | `(price - breakeven) × amount` |
| LP | `lp_position` | Two-token + fees | `current_value - add_value + fees` |
| Vault | `vault_position` | Single-token yield | `current_value - deposited_value` |
| Loan | `loan_position` | Debt + interest | `-accrued_interest` (liability) |
| Event | `event_position` | Shares + outcome | `payout - cost_basis` (resolved) |

---

## Implementation Checklist

When adding a new position type:

- [ ] Define detection flag (e.g., `<type>_position: true`)
- [ ] Define snapshot fields for the executor
- [ ] Add fields to `PositionHold.__init__()`
- [ ] Implement `add_orders_from_executor()` handling
- [ ] Implement `_get_<type>_position_summary()` method
- [ ] Add routing in `get_position_summary()`
- [ ] Create `<Type>Executor` and `<Type>ExecutorConfig`
- [ ] Add connector support for the protocol
- [ ] Write tests for P&L calculation
- [ ] Update documentation
