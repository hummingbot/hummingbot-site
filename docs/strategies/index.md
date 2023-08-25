A Strategy is a template for an algorithmic trading strategy that users can configure, extend, and run. The trading strategy itself is a continual process that monitors trading pairs on one or more exchanges in order to make trading decisions.

Strategies separate **trading logic**, open source code that defines how the strategy behaves, versus **parameters**, user-defined variables like spread and order amount that control how the strategy is deployed against live market conditions. Strategy parameters are stored in a local **config file** that is not exposed externally.

Strategies utilize the standardized trading interfaces exposed by exchange and protocol connectors, enabling developers to write code that can be used across many exchanges. Each Hummingbot strategy is a sub-folder in the [`/hummingbot/strategy`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/strategy) folder.

