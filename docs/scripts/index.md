Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingbot exchange connectors in a few lines of Python code.

Introduced in version [1.4.0](/release-notes/1.4.0), **Scripts** offer users an easier alternative to creating a full-blown [Strategy](/strategies). Scripts are light Python files that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface**.

!!! note Restart Hummingbot
     Should your script run into an error, it's crucial that you exit Hummingbot entirely, correct or debug the faulty script, and then restart Hummingbot. The stop command won't rectify the issue in case of an error. To get back on track, a complete shutdown and subsequent relaunch of Hummingbot is required.

Unlike strategies, scripts can be created without configuration files, so only a single file is needed. However, scripts can access all the raw data, events, and methods in Hummingbot connectors, as well as other features such as the Rate Oracle.

## Script Examples

See [Script Examples](examples) for a list of the current sample scripts in the Hummingbot codebase. These examples show you how to:

- Place orders
- Listen to order book events
- Use the rate oracle
- Call exchange APIs
- Process the events produced by the connectors related to the orders lifecycle
- And much more!

We regularly add new sample scripts developed by Botcamp students and Hummingbot Foundation staff, and we also welcome new sample script contributions from users! To do so, follow the [Contribution Guidelines](/developers/contributions).

## Learning Scripts

If you'd like to learn how to build custom quant trading using Scripts, check out [Hummingbot Botcamp](https://hummingbot.org/botcamp), an intensive, small-batch bootcamp that teaches you **how to build your own custom algo trading strategy in only 6 weeks**. Each cohort of Botcamp culminates in a Demo Day where students present their custom scripts and compete for HBOT rewards and the glory of victory!

## Candles Feed
Introduced in version [1.13.0](/release-notes/1.13.0/#custom-ohlcv-candles), the Candles Feed helps users to generate custom OHLCV candles using both historical and live Websocket data, allowing traders to create real-time custom technical indicators using [pandas_ta](https://github.com/twopirllc/pandas-ta) that can be used in a variety of ways.

See [Candles Feed](./candles-feed.md) for docs on this feature.

## Additional Resources

- [Quickstart Guide](/quickstart) to learn how to create and customize a market making strategy using Scripts

- [Scripts Cheatsheet](/scripts/cheatsheet): Check out the cheatsheet or the [PDF version](/scripts/cheatsheet.pdf) that highlights the most commonly used methods available when writing scripts

- [Debugging Scripts with PyCharm](https://www.youtube.com/watch?v=2O6Ge25rsLk): This video shows you how to debug Scripts at runtime with the PyCharm IDE

## PMM Scripts (deprecated)

Introduced in version [0.29.0](/release-notes/0.29.0), **PMM Scripts** are an earlier component that allows users customize the behavior of the [Pure Market Making](/strategies/pure-market-making) strategy with snippets of Python code.

Since PMM Scripts run in a separate Python process, they have limited access to variables and events in the main Hummingbot process. For this reason, we advise the community to contribute to the generalized Scripts module rather than PMM Scripts going forward.

- [Getting Started with PMM Scripts](pmm-scripts)
- [📁 PMM Script Examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts)
