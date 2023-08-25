### **Overview**

In Hummingbot's strategy framework, the **Controller** serves as a central component that drives the strategy's actions and decisions. It is primarily responsible for three critical tasks:

1. Fetching data from Candles.
2. Computing signals based on the fetched data.
3. Communicating with ExecutorHandlers to instruct them on how to respond to the computed signals.

---

### **Controller Base**

Every specific controller is built upon the `ControllerBase` class. This abstract class provides foundational methods and properties that are commonly used by all controllers. Let's break down its key components:

#### **Initialization**:

- `__init__(self, config, mode, excluded_parameters)`: Initializes the ControllerBase with a configuration, mode, and an optional list of excluded parameters.

#### **Data Handling**:

- `get_processed_data(self)`: Abstract method to obtain processed data. It needs to be implemented by the derived classes.
- `initialize_candles(self, candles_config)`: Initializes candle data based on the given configuration.
- `get_close_price(self, connector, trading_pair)`: Retrieves the close price of the last candlestick for a given connector and trading pair.
- `get_candles_by_connector_trading_pair(self, connector, trading_pair)`: Fetches all the candlesticks data associated with a specified connector and trading pair.
- `get_candle(self, connector, trading_pair, interval)`: Retrieves the candlestick data for a given connector, trading pair, and interval.
- `get_candles_dict(self)`: Returns a dictionary of all available candle data.

#### **Controller State**:

- `all_candles_ready`: A property that checks if all candle data is ready and fully loaded.
- `start(self)`: Starts the controller. Depending on the mode, it either starts fetching live candle data or loads it from CSV.
- `stop(self)`: Stops the controller and all its associated tasks.

#### **Status and Formatting**:

- `get_csv_prefix(self)`: Returns a CSV prefix based on the strategy's name.
- `to_format_status(self)`: Formats and returns the current status of the controller.

---

### **Strategy Controller Templates**

For users looking to quickly get started, Hummingbot offers pre-built templates for various controllers such as:

- **Directional**: Ideal for strategies that follow market trends and make decisions based on directional shifts in the market.
- **Market Making**: Suited for strategies that aim to provide liquidity to the market by continuously placing buy and sell orders.

These templates are designed to provide a solid starting point, and users can further customize them to better fit their specific requirements.

---

### **Conclusion**

The Controller is a pivotal component in Hummingbot's strategy framework. It acts as the brain of the strategy, making decisions based on data and ensuring those decisions are executed correctly. Whether you're building from scratch or leveraging one of our templates, understanding the controller's role and capabilities is essential for creating effective trading strategies.

---