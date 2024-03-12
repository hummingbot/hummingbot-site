
## **Directional Trading Controller Base**

```python

class DirectionalTradingControllerConfigBase(ControllerConfigBase):
    """
    This class represents the configuration required to run a Directional Strategy.
    """
    controller_type = "directional_trading"
    connector_name: str = Field(
        default="binance_perpetual",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the name of the exchange to trade on (e.g., binance_perpetual):"))
    trading_pair: str = Field(
        default="WLD-USDT",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the trading pair to trade on (e.g., WLD-USDT):"))

    executor_amount_quote: Decimal = Field(
        default=100.0,
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the amount of quote asset to use per executor (e.g., 100):"))

    max_executors_per_side: int = Field(
        default=2,
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the maximum number of executors per side (e.g., 2):"))

    cooldown_time: int = Field(
        default=60 * 5, gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=False,
            prompt=lambda mi: "Specify the cooldown time in seconds after executing a signal (e.g., 300 for 5 minutes):"))

    leverage: int = Field(
        default=20,
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Set the leverage to use for trading (e.g., 20 for 20x leverage). Set it to 1 for spot trading:"))
    position_mode: PositionMode = Field(
        default="HEDGE",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the position mode (HEDGE/ONEWAY): ",
            prompt_on_new=False
        )
    )
    # Triple Barrier Configuration
    stop_loss: Optional[Decimal] = Field(
        default=Decimal("0.03"), gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the stop loss (as a decimal, e.g., 0.03 for 3%): ",
            prompt_on_new=True))
    take_profit: Optional[Decimal] = Field(
        default=Decimal("0.02"), gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the take profit (as a decimal, e.g., 0.01 for 1%): ",
            prompt_on_new=True))
    time_limit: Optional[int] = Field(
        default=60 * 45, gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the time limit in seconds (e.g., 2700 for 45 minutes): ",
            prompt_on_new=True))
    take_profit_order_type: OrderType = Field(
        default="LIMIT",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the order type for taking profit (LIMIT/MARKET): ",
            prompt_on_new=True))
    trailing_stop: Optional[TrailingStop] = Field(
        default="0.015,0.003",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the trailing stop as activation_price,trailing_delta (e.g., 0.015,0.003): ",
            prompt_on_new=True))


```


## **Market Making Controller Base**

```python
class MarketMakingControllerConfigBase(ControllerConfigBase):
    """
    This class represents the base configuration for a market making controller.
    """
    controller_type: str = "market_making"
    connector_name: str = Field(
        default="binance_perpetual",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the name of the exchange to trade on (e.g., binance_perpetual):"))
    trading_pair: str = Field(
        default="WLD-USDT",
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Enter the trading pair to trade on (e.g., WLD-USDT):"))
    total_amount_quote: float = Field(
        default=100,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=True,
            prompt=lambda mi: "Enter the total amount in quote asset to use for trading (e.g., 1000):"))
    buy_spreads: List[float] = Field(
        default="0.01,0.02",
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=True,
            prompt=lambda mi: "Enter a comma-separated list of buy spreads (e.g., '0.01, 0.02'):"))
    sell_spreads: List[float] = Field(
        default="0.01,0.02",
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=True,
            prompt=lambda mi: "Enter a comma-separated list of sell spreads (e.g., '0.01, 0.02'):"))
    buy_amounts_pct: Union[List[float], None] = Field(
        default=None,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=False,
            prompt=lambda mi: "Enter a comma-separated list of buy amounts as percentages (e.g., '50, 50'), or leave blank to distribute equally:"))
    sell_amounts_pct: Union[List[float], None] = Field(
        default=None,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=False,
            prompt=lambda mi: "Enter a comma-separated list of sell amounts as percentages (e.g., '50, 50'), or leave blank to distribute equally:"))
    executor_refresh_time: int = Field(
        default=60 * 5,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=True,
            prompt=lambda mi: "Enter the refresh time in seconds for executors (e.g., 300 for 5 minutes):"))
    cooldown_time: int = Field(
        default=15,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=False,
            prompt=lambda mi: "Specify the cooldown time in seconds between after replacing an executor that traded (e.g., 15):"))
    leverage: int = Field(
        default=20,
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda mi: "Set the leverage to use for trading (e.g., 20 for 20x leverage). Set it to 1 for spot trading:"))
    position_mode: PositionMode = Field(
        default="HEDGE",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the position mode (HEDGE/ONEWAY): ",
            prompt_on_new=False
        )
    )
    # Triple Barrier Configuration
    stop_loss: Optional[Decimal] = Field(
        default=Decimal("0.03"), gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the stop loss (as a decimal, e.g., 0.03 for 3%): ",
            prompt_on_new=True))
    take_profit: Optional[Decimal] = Field(
        default=Decimal("0.02"), gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the take profit (as a decimal, e.g., 0.01 for 1%): ",
            prompt_on_new=True))
    time_limit: Optional[int] = Field(
        default=60 * 45, gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda mi: "Enter the time limit in seconds (e.g., 2700 for 45 minutes): ",
            prompt_on_new=True))
    take_profit_order_type: Optional[OrderType] = Field(
        default="LIMIT",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the order type for taking profit (LIMIT/MARKET): ",
            prompt_on_new=True))
    trailing_stop: Optional[TrailingStop] = Field(
        default="0.015,0.003",
        client_data=ClientFieldData(
            prompt=lambda mi: "Enter the trailing stop as activation_price,trailing_delta (e.g., 0.015,0.003): ",
            prompt_on_new=True))

```

