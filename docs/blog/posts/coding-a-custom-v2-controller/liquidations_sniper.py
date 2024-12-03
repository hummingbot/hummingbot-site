import time
from decimal import Decimal
from typing import Dict, List, Set

from pydantic import Field, validator

from hummingbot.client.config.config_data_types import ClientFieldData
from hummingbot.core.data_type.common import PositionMode, PriceType, TradeType
from hummingbot.data_feed.candles_feed.candles_factory import CandlesConfig
from hummingbot.data_feed.liquidations_feed.liquidations_base import LiquidationSide
from hummingbot.data_feed.liquidations_feed.liquidations_factory import LiquidationsConfig, LiquidationsFactory
from hummingbot.strategy_v2.controllers.controller_base import ControllerBase, ControllerConfigBase
from hummingbot.strategy_v2.executors.dca_executor.data_types import DCAExecutorConfig, DCAMode
from hummingbot.strategy_v2.models.executor_actions import CreateExecutorAction, ExecutorAction


class LiquidationSniperConfig(ControllerConfigBase):
    """
    This controller executes a strategy that listens for liquidations on Binance for the given pair
    and executes a DCA trade to profit from the rebound. The profitability is highly dependent on the
    settings you make.

    Docs: https://www.notion.so/hummingbot-foundation/Liquidation-Sniper-V2-Framework-739dadb04eac4aa6a082067e06ddf7db
    """

    controller_name: str = "liquidations_sniper"
    candles_config: List[CandlesConfig] = []  # do not need any candles for that

    # ---------------------------------------------------------------------------------------
    # Liquidations Config
    # ---------------------------------------------------------------------------------------

    trading_connector: str = Field(
        default="kucoin_perpetual",
        client_data=ClientFieldData(
            prompt=lambda msg: "Enter the trading connector (where the execution of the order shall take place): ",
            prompt_on_new=True
        ))
    trading_pair: str = Field(
        default="XBT-USDT",
        client_data=ClientFieldData(
            prompt=lambda msg: "Enter the trading pair which you want to use for trading: ",
            prompt_on_new=True
        ))
    liquidation_side: LiquidationSide = Field(
        default="LONG",
        client_data=ClientFieldData(
            prompt=lambda msg: "Enter which liquidations you want to trade on (SHORT/LONG). Trading long liquidations "
                               "means price is going down and over-leveraged long positions get forcefully liquidated. "
                               "The strategy would then DCA-Buy into that liquidation and waiting for the rebound: ",
            prompt_on_new=True
        ))
    liquidations_pair: str = Field(
        default="BTC-USDT",
        client_data=ClientFieldData(
            prompt=lambda msg: "Enter the liquidations pair to monitor on Binance: ",
            prompt_on_new=True
        ))
    liquidations_interval_seconds: int = Field(
        default=15,
        client_data=ClientFieldData(
            prompt=lambda msg: "The amount of seconds to accumulate liquidations (e.g. if more than 10Mio USDT "
                               "[=liquidations_trigger_usd_amount] is liquidated in 15s, then place the orders): ",
            prompt_on_new=True
        ))
    liquidations_trigger_usd_amount: int = Field(
        default=10_000_000,  # 10 Mio USDT
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda msg: "The amount of USD that was liquidated in the liquidations-interval to "
                               "actually place the trade: ",
            prompt_on_new=True
        ))

    # ---------------------------------------------------------------------------------------
    # DCA Config
    # ---------------------------------------------------------------------------------------

    total_amount_quote: Decimal = Field(
        default=100,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt_on_new=True,
            prompt=lambda mi: "Enter the total amount in quote asset to use for trading (e.g., 100):"))
    dca_levels_percent: List[Decimal] = Field(
        default="0.01,0.02,0.03,0.05",
        client_data=ClientFieldData(
            prompt_on_new=True,
            is_updatable=True,
            prompt=lambda msg: "Enter a comma-separated list of percentage values where each DCA level should be "
                               "placed (as a decimal, e.g., 0.01 for 1%): "))
    dca_amounts_percent: List[Decimal] = Field(
        default="0.1,0.2,0.3,0.4",
        client_data=ClientFieldData(
            prompt_on_new=True,
            is_updatable=True,
            prompt=lambda msg: "Enter a comma-separated list of percentage values of the total quote amount that "
                               "should be placed at each DCA level (as a decimal, e.g., 0.1 for 10%): "))
    stop_loss: Decimal = Field(
        default=Decimal("0.03"), gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda msg: "Enter the stop loss (as a decimal, e.g., 0.03 for 3%): ",
            prompt_on_new=True))
    take_profit: Decimal = Field(
        default=Decimal("0.01"), gte=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda msg: "Enter the take profit (as a decimal, e.g., 0.01 for 1%): ",
            prompt_on_new=True))
    time_limit: int = Field(
        default=60 * 30, gt=0,
        client_data=ClientFieldData(
            is_updatable=True,
            prompt=lambda msg: "Enter the time limit in seconds (e.g., 1800 for 30 minutes): ",
            prompt_on_new=True))

    # ---------------------------------------------------------------------------------------
    # Perp Config
    # ---------------------------------------------------------------------------------------

    leverage: int = Field(
        default=5,
        client_data=ClientFieldData(
            prompt_on_new=True,
            prompt=lambda msg: "Set the leverage to use for trading (e.g., 5 for 5x leverage). "
                               "Set it to 1 for spot trading:"))
    position_mode: PositionMode = Field(
        default="HEDGE",
        client_data=ClientFieldData(
            prompt=lambda msg: "Enter the position mode (HEDGE/ONEWAY): ",
            prompt_on_new=False
        )
    )

    # ---------------------------------------------------------------------------------------
    # Validators
    # ---------------------------------------------------------------------------------------

    @validator('liquidations_pair', pre=True, always=True)
    def validate_usdm_pair(cls, value):
        if "usd" in value.lower():
            return value
        raise ValueError("Liquidations pair must be a USDⓈ-M Future contract!")

    @validator("time_limit", "stop_loss", "take_profit", pre=True, always=True)
    def validate_target(cls, value):
        if isinstance(value, str):
            if value == "":
                return None
            return Decimal(value)
        return value

    @validator('dca_levels_percent', pre=True, always=True)
    def parse_levels(cls, value) -> List[Decimal]:
        if value is None:
            return []
        if isinstance(value, str):
            if value == "":
                return []
            return [Decimal(x.strip()) for x in value.split(',')]
        return value

    @validator('dca_amounts_percent', pre=True, always=True)
    def parse_and_validate_amounts(cls, value, values, field) -> List[Decimal]:
        if value is None or value == "":
            return [Decimal(1) for _ in values[values['dca_levels_percent']]]
        if isinstance(value, str):
            return [Decimal(x.strip()) for x in value.split(',')]
        elif isinstance(value, list) and len(value) != len(values['dca_levels_percent']):
            raise ValueError(
                f"The number of {field.name} must match the number of levels ({len(values['dca_levels_percent'])}).")
        elif isinstance(value, list):
            return [Decimal(amount) for amount in value]
        raise ValueError("DCA amounts per level is invalid!")

    @validator('position_mode', pre=True, allow_reuse=True)
    def validate_position_mode(cls, value: str) -> PositionMode:
        if isinstance(value, str) and value.upper() in PositionMode.__members__:
            return PositionMode[value.upper()]
        raise ValueError(f"Invalid position mode: {value}. Valid options are: {', '.join(PositionMode.__members__)}")

    @validator('liquidation_side', pre=True, always=True)
    def validate_liquidation_side(cls, value: str) -> LiquidationSide:
        if isinstance(value, str) and value.upper() in LiquidationSide.__members__:
            return LiquidationSide[value.upper()]
        raise ValueError(
            f"Invalid liquidation side: {value}. Valid options are: {', '.join(LiquidationSide.__members__)}")

    # ---------------------------------------------------------------------------------------
    # Market Config
    # ---------------------------------------------------------------------------------------

    def update_markets(self, markets: Dict[str, Set[str]]) -> Dict[str, Set[str]]:
        if self.trading_connector not in markets:
            markets[self.trading_connector] = set()
        markets[self.trading_connector].add(self.trading_pair)
        return markets


class LiquidationSniper(ControllerBase):

    def __init__(self, config: LiquidationSniperConfig, *args, **kwargs):
        super().__init__(config, *args, **kwargs)
        self.config = config  # only for type check in IDE
        self.liquidations_feed = None
        self.initialize_liquidations_feed()
        # Make the configuration more forgiving, by calculating the real percentages if not done already
        self.dca_amounts_pct = [Decimal(amount) / sum(self.config.dca_amounts_percent) for amount in
                                self.config.dca_amounts_percent]

    def initialize_liquidations_feed(self):
        liquidations_config = LiquidationsConfig(
            connector="binance",  # use Binance as the most liquid exchange (currently the only feed supported!)
            max_retention_seconds=self.config.liquidations_interval_seconds,
            trading_pairs=[self.config.liquidations_pair]
        )
        self.liquidations_feed = LiquidationsFactory.get_liquidations_feed(liquidations_config)

    def on_start(self):
        self.liquidations_feed.start()
        self.logger().info("Watching for {} liquidations happening on {} (Binance) within {}s to exceed {} USD"
                           .format(self.config.liquidation_side,
                                   self.config.liquidations_pair,
                                   self.config.liquidations_interval_seconds,
                                   self.config.liquidations_trigger_usd_amount))

    def on_stop(self):
        self.liquidations_feed.stop()

    async def update_processed_data(self):
        df = self.liquidations_feed.liquidations_df(self.config.liquidations_pair)
        df['usd_amount'] = df['quantity'] * df['price']
        df = df[df['side'] == self.config.liquidation_side]
        self.processed_data['liquidated_usd_amount'] = df['usd_amount'].sum()

    def determine_executor_actions(self) -> List[ExecutorAction]:
        executor_actions = []
        liquidated_usd_amount = self.processed_data['liquidated_usd_amount']
        trading_executors = self.filter_executors(
            executors=self.executors_info,
            filter_func=lambda executor: executor.is_active and executor.controller_id == self.config.id
        )

        # Only initiate a trade when both criteria is met
        if liquidated_usd_amount >= self.config.liquidations_trigger_usd_amount and len(trading_executors) == 0:
            self.logger().info("The current liquidation-amount ({} USD) in the last {}s is above threshold "
                               "of {} USD => entering trade!".format(liquidated_usd_amount,
                                                                     self.config.liquidations_interval_seconds,
                                                                     self.config.liquidations_trigger_usd_amount))
            executor_actions.append(CreateExecutorAction(
                executor_config=self.get_dca_executor_config(),
                controller_id=self.config.id))
        return executor_actions

    def get_dca_executor_config(self) -> DCAExecutorConfig:
        trade_type = TradeType.BUY if self.config.liquidation_side == LiquidationSide.LONG else TradeType.SELL

        # Use the mid-price to calculate the levels, sl and tp
        price = self.market_data_provider.get_price_by_type(self.config.trading_connector,
                                                            self.config.trading_pair,
                                                            PriceType.MidPrice)
        if trade_type == TradeType.BUY:
            prices = [price * (1 - level) for level in self.config.dca_levels_percent]
        else:
            prices = [price * (1 + level) for level in self.config.dca_levels_percent]

        amounts_quote = [self.config.total_amount_quote * pct for pct in self.dca_amounts_pct]

        return DCAExecutorConfig(
            controller_id=self.config.id,
            timestamp=time.time(),
            connector_name=self.config.trading_connector,
            trading_pair=self.config.trading_pair,
            mode=DCAMode.MAKER,
            leverage=self.config.leverage,
            side=trade_type,
            amounts_quote=amounts_quote,
            prices=prices,
            take_profit=self.config.take_profit,
            stop_loss=self.config.stop_loss,
            time_limit=self.config.time_limit,
        )

    def to_format_status(self) -> List[str]:
        return ["Currently liquidated {} of pair {} in the last {} seconds: {} USD".format(
            self.config.liquidation_side,
            self.config.liquidations_pair,
            self.config.liquidations_interval_seconds,
            self.processed_data['liquidated_usd_amount'])]