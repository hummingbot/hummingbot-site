# Base Classes

Both the **DirectionalTradingControllerBase** and **MarketMakingControllerBase** classes serve as base classes for specific trading strategies within a larger trading system. However, they cater to fundamentally different trading strategies and have distinct operational focuses. 

While both controllers are designed to manage trades within a trading system, they cater to different strategies and offer distinct points of customization to suit various trading objectives and market conditions.

### Strategy Focus

- **Directional Trading**: Aims to profit from predicting the market's direction (up or down). It involves taking positions based on signals indicating the future price movement.

- **Market Making**: Focuses on providing liquidity by placing both buy and sell orders near the current market price, aiming to profit from the spread between these orders.

### Core Operations

- **Directional Trading Controller**: Decides on buying or selling based on signals, with a focus on timing and direction.

- **Market Making Controller**: Manages multiple buy and sell orders at different price levels, focusing on spread and order management.

### Customization Points

- **Directional Trading Controller**: Customization mainly revolves around signal generation (`get_signal`) and determining the conditions under which trades should be executed or stopped.

- **Market Making Controller**: Customization involves defining how price levels are selected (`get_levels_to_execute`), how orders are priced and sized (`get_price_and_amount`), and when orders should be refreshed or stopped early.

### Use Scenario Customization

- **Directional Trading**: Suitable for strategies that rely on market trends, momentum, or other indicators predicting price movements. Customization allows for the implementation of various analytical models to generate trade signals.

- **Market Making**: Best for scenarios where the goal is to profit from the bid-ask spread while providing liquidity. Customization can include adjusting the strategy based on market depth, volatility, and other market conditions to optimize spread and order placement.


---

## Directional Trading Controller Base Class

- **DirectionalTradingControllerBase**: Inherits from `ControllerBase`, indicating it is a specialized form of a more generic controller. This base class is designed to be extended by more specific directional trading strategies.

### Constructor

- **`__init__`**: Initializes the controller with a configuration object (`DirectionalTradingControllerConfigBase`) and any additional arguments. It stores the configuration in an instance variable for later use.

### Core Methods

- **`determine_executor_actions`**: This method determines the actions to be taken by the executor, which are operations to execute trades. It combines proposals from two separate methods: one for creating new actions and another for stopping actions, returning a list of actions to be executed.

- **`update_processed_data`**: An asynchronous method that updates the processed data based on the current state of the strategy. It involves getting a signal (directional prediction) and updating the processed data accordingly.

- **`get_signal`**: This is an abstract method meant to be implemented by subclasses. It should return a signal indicating the direction of the trade: positive for buy, negative for sell, and zero for no action.

- **`create_actions_proposal`**: Proposes actions to create new trades based on the current market signal and conditions. It checks if a new executor (trade executor) can be created based on the signal, active executors, and cooldown conditions. If conditions are met, it constructs a `CreateExecutorAction` with the necessary trade parameters.

- **`can_create_executor`**: Determines whether a new executor can be created based on the current signal, the number of active executors, and a cooldown period to prevent too frequent trading.

- **`stop_actions_proposal`**: Proposes actions to stop existing trades. In the provided code, this method does not implement any logic and returns an empty list, indicating no stop actions are proposed by default.

- **`get_executor_config`**: Constructs and returns a configuration for the executor based on the trade type, price, and amount. This method can be overridden in subclasses to customize the executor configuration.


### Key Concepts and Customization Points

- **Signal-Based Trading**: The core of the directional trading strategy is signal generation (`get_signal`), which must be implemented by subclasses. The signal dictates whether to buy, sell, or hold.

- **Executor Actions**: The class decides on creating or stopping trades based on signals and conditions. This involves calculating the amount to trade and determining the trade type (buy or sell).

- **Configurability and Extensibility**: The class is designed to be extended, allowing for customization of signal generation, action proposals, and executor configuration. Subclasses can override methods to implement specific trading logic.

- **Cooldown and Execution Limits**: The controller includes mechanisms to limit trading frequency (`cooldown_time`) and the number of concurrent trades (`max_executors_per_side`), which are important for risk management.



---


## Market Making Controller Base Class 

The `MarketMakingControllerBase` class is designed as a foundational component for implementing market making strategies. Market making involves providing liquidity to the market by placing buy and sell orders simultaneously in an attempt to profit from the spread between the buy and sell prices.

It defines the structure for creating and managing orders but leaves specific strategy details, such as the calculation of price levels and amounts, to be implemented by subclasses.

#### Class Definition

- **MarketMakingControllerBase**: Inherits from `ControllerBase`, indicating it is a type of controller but specialized for market making strategies.

#### Constructor

- **`__init__`**: Initializes the controller with a specific configuration object (`MarketMakingControllerConfigBase`) and any additional arguments, storing the configuration for later use.

#### Core Methods

- **`determine_executor_actions`**: Determines the actions to be executed by the market maker, combining proposals for creating new actions and stopping existing ones.

- **`create_actions_proposal`**: Proposes actions to create new orders based on the current state of the market and the controller's strategy. It involves determining which levels (price points) to execute trades at and generating the appropriate `CreateExecutorAction` for each.

- **`get_levels_to_execute`**: Identifies which levels are currently active or need to be executed based on the controller's logic, including cooldown considerations.

- **`stop_actions_proposal`**: Proposes actions to stop or refresh existing orders based on certain conditions, such as order refresh times and early stop criteria.

- **`executors_to_refresh`**: Identifies which executors (orders) need to be refreshed based on their age and trading status.

- **`executors_to_early_stop`**: Identifies executors that should be stopped early, potentially based on market conditions or other strategy-specific criteria. This method is designed to be overridden with custom behavior.

- **`update_processed_data`**: Asynchronously updates the processed data for the controller, such as reference prices and spread multipliers, based on market data.

- **`get_executor_config`**: Abstract method intended to be implemented by subclasses to define the configuration for executors based on level ID.

- **`get_price_and_amount`**: Calculates the price and amount for orders at a given level ID, adjusting for spreads and market conditions.




