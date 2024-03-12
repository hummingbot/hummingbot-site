
![executors](../diagrams/13.png)

**Executors** in Hummingbot are integral components that handle the execution of orders according to predefined conditions set by **Controllers**, which, in turn, utilize data from the **MarketDataProvider** (Candles, Orderbook, Trades). Specifically, Executors are tasked with managing the state of orders—this involves initiating, refreshing, and canceling orders, as well as halting their own operation when certain conditions are met.


**Benefits of Executors**

* Autonomy: Executors independently manage order states, offloading complex logic from the user.
* Simplicity: They simplify strategy code, enabling users to create powerful strategies with ease.
* Flexibility: By dynamically adjusting to market data, Executors can set spreads and shift prices, offering greater strategy adaptability.

Currently, there are three examples in the codebase: 

[**PositionExecutor**](positionexecutor.md)

[**DCAExecutor**](dcaexecutor.md)

[**ArbitrageExecutor**](arbitrage-executor.md)



