In Hummingbot's V2 strategy framework, the **Controller** serves as a central component that drives the strategy's actions and decisions. It is primarily responsible for three critical tasks:

1. Fetching data from [Candles](./candles-feed.md)
2. Computing signals and based on the fetched data
3. Instructing [Executors](./executors.md) on how to respond to signals

## DMan Controllers

 The three versions of the DMan Hummingbot controllers, namely DManV1, DManV2, and DManV3, each present unique strategies for market making. 

- [dman_v1](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v1.py)

- [dman_v2](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v2.py)

- [dman_v3](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/controllers/dman_v3.py)

Below is a breakdown of each controller and the differences between each


## DMan v1 

The `DManV1` Hummingbot controller, is a market-making controller that uses the `NATR` (Normalized Average True Range) indicator to dynamically adjust spreads. Here's a breakdown of its key functionalities and characteristics:

### **Configuration:** 

The controller uses a configurable parameter `natr_length` (defaulted to 14) to set the length of the NATR calculation.

### **Market Making Strategy:** 

This controller is designed for market making, meaning it's intended to provide liquidity to the market by placing buy and sell orders.

### **Dynamic Spread Adjustment:** 

It uses the NATR indicator to adjust spreads. NATR is calculated from the last candlestick's high, low, and close prices, and is used to determine the `spread_multiplier`.

### **Order Conditions and Execution:**

- Refresh Order Condition: It decides whether to refresh an order based on a time condition related to the order's refresh time.

- Early Stop Condition: It includes a method to determine if an active position should be closed early, although the default implementation always returns False.

- Cooldown Condition: After completing an order, the controller enforces a cooldown period to prevent immediate creation of a new order.

### **Position Configuration:** 

The controller involves creating a `PositionConfig` object from an `OrderLevel` object. This configuration includes details like trading pair, exchange, order side, amount, entry price, and various order types. It also allows for the use of a trailing stop mechanism.

### **Price Adjustment:** 

The strategy involves adjusting the order price based on the calculated price multiplier and the spread multiplier derived from NATR.

In summary, DManV1 is a market-making controller that utilizes the NATR indicator for dynamic spread adjustments in its trading strategy. It includes features for order refreshing, early stop conditions, and cooldown after trades, along with the ability to configure order types and use trailing stops.

---

## DMan v2

The DManV2 Hummingbot controller is an evolution of the DManV1, with additional features and a more complex strategy. Here's an overview of its key aspects:

### **Strategy Configuration:** 

This controller introduces additional parameters for the `MACD` (Moving Average Convergence Divergence) calculation: `macd_fast`, `macd_slow`, and `macd_signal`, in addition to the `natr_length` used in DManV1.

### **Enhanced Market Making:** 

Like DManV1, DManV2 is a market-making strategy. However, it incorporates both the NATR indicator and the MACD to make dynamic adjustments to spreads and to shift the mid-price.

### **Use of NATR and MACD Indicators:**

- NATR: Similar to DManV1, it calculates the NATR (Normalized Average True Range) to determine the `spread_multiplier`.

- MACD: DManV2 uses the MACD indicator to generate a price_multiplier. It calculates the MACD value, the MACD histogram (MACDh), and signals based on these to influence the price adjustment.

### **Order Conditions:** 

The conditions for refreshing orders, early stopping, and cooldown are similar to DManV1, focusing on time-based checks and cooldown periods post-order execution.

### **Position Configuration:** 

The process of creating a `PositionConfig` object from an `OrderLevel` object is largely similar to DManV1, with the main difference being the use of both price and spread multipliers derived from NATR and MACD for price adjustments.

### **Price Adjustment:** 

DManV2 adjusts the order price more comprehensively, considering both the spread and price multipliers, which are influenced by NATR and MACD indicators.

In summary, DManV2 expands upon the functionalities of DManV1 by incorporating MACD indicators into its market-making strategy, allowing for more nuanced control over order pricing and spreads. This makes it a more sophisticated tool for dynamic market making.

---

## Dman v3

The DManV3 Hummingbot controller represents a further evolution in the DMan series, introducing new features and strategies. Here's an analysis of its key aspects:

### **Strategy Configuration:** 

This version introduces `Bollinger Bands` (BB) into the strategy with configurable parameters `bb_length` and `bb_std` for the length and standard deviation settings of the Bollinger Bands.

`Bollinger Bands`, is a popular technical analysis tool, which is used to determine both the `spread_multiplier` and the `price_multiplier`. This marks a significant shift from the previous versions which relied on NATR and MACD.

### **Market Making:** 

As with the previous versions, DManV3 is designed for market making, but it now leverages Bollinger Bands to make dynamic adjustments.

### **Order Conditions:**

-  Refresh Order Condition: The logic for refreshing orders remains similar to the previous versions, focusing on time-based conditions.

-  Early Stop and Cooldown Conditions: These also follow the same approach as DManV1 and DManV2, with early stop condition always returning False and a cooldown period enforced after order execution.

### **Position Configuration:** 

The process for creating a `PositionConfig` object from an `OrderLevel` object is consistent with the earlier versions. However, the price and spread multipliers are now derived from the Bollinger Bands, which can lead to different trading behaviors.

### **Price Adjustment:** 

The order price is adjusted based on the Bollinger Bands, which can provide more nuanced and responsive adjustments to market conditions compared to the earlier versions.

In summary, DManV3 is an advanced market-making controller that incorporates Bollinger Bands for dynamic spread and price adjustments, distinguishing it from its predecessors. This makes it potentially more responsive to market volatility and price trends, offering a different approach to market making compared to DManV1 and DManV2.