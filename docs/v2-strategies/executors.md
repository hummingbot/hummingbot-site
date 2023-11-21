## What are Executors?

Executors are a self-encapsulated pieces of logic that can be created and controlled by [Controllers](./controllers.md). They are part of the [V2 Strategy](/v2-strategies/) framework.

Utilizing these Executors within Hummingbot scripts allows traders to implement complex strategies with ease. The integration involves:

- Configuring each executor according to the desired trading strategy.
- Embedding the executors within Hummingbot's trading logic.
- Leveraging the executors’ capabilities to enhance trading effectiveness and efficiency.

### ArbitrageExecutor:

 The `ArbitrageExecutor` is designed to automate the process of identifying and executing profitable arbitrage opportunities between different exchanges or markets, handling the complexity of order management, price calculations, and profitability analysis.

**Purpose:** Designed to identify and execute arbitrage opportunities between two markets for the same trading pair.

**Key Features:**

- Validates arbitrage opportunities based on profitability.
- Manages buy and sell orders across different markets.
- Incorporates interchangeable tokens and stablecoin conditions.
- Calculates net profit and loss, accounting for transaction costs.
- Includes a retry mechanism for order failures.

**Advantages:**

- Automates complex arbitrage strategies.
- Real-time profitability calculation and decision-making.
- Effective management of order placements and executions.

---

### PositionExecutor:

 In comparison to the `ArbitrageExecutor`, the `PositionExecutor` is more focused on managing a single trading position with various exit strategies, whereas the `ArbitrageExecutor` is designed for executing arbitrage opportunities between two different markets. The `PositionExecutor` includes more complex risk management features like trailing stop loss and handles a wider range of market conditions and order types.

**Purpose:** 

Manages a single trading position with comprehensive rules for opening, closing, and risk management.

**Key Features:**

- Supports stop loss, take profit, and time limit for position management.

- Includes trailing stop loss functionality.

- Manages market and limit orders under various conditions.

- Provides detailed profit and loss calculation.

- Handles budget checking for position opening.


**Advantages:**

- Offers sophisticated risk management tools.
- Enables dynamic adjustment of trading strategies based on market changes.
- Facilitates detailed monitoring and management of trading positions.

---

In summary, the `ArbitrageExecutor` and `PositionExecutor` smart components are essential tools for traders looking to automate sophisticated trading strategies in the cryptocurrency market. Their integration into Hummingbot scripts offers enhanced capability, risk management, and profitability in trading operations.