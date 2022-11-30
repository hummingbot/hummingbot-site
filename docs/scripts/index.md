Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingbot exchange connectors in a few lines of Python code. 

Introduced in version [1.4.0](/release-notes/1.4.0), **Scripts** offer users an easier alternative to creating a full-blown strategy. They are light Python files that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. 

Unlike strategies, scripts can be created without configuration files, so only a single file is needed. However, scripts can access all the raw data, events, and methods in Hummingbot connectors, as well as other features such as the Rate Oracle.

See [Getting Started](getting-started) to start running scripts.

See [Examples](examples) for a list of the current sample scripts in the Hummingbot codebase. These examples show you how to:

- Place orders
- Listen to order book events
- Use the rate oracle
- Call exchange APIs
- Process the events produced by the connectors related to the orders lifecycle

## PMM Scripts (deprecated)

Introduced in version [0.29.0](/release-notes/0.29.0), **PMM Scripts** are an earlier component that allows users customize the behavior of the [Pure Market Making](/strategies/pure-market-making) strategy with snippets of Python code.

Since PMM Scripts run in a separate process, they have limited access to variables and events in the main Hummingbot process. For this reason, Hummingbot Foundation advises the community to contribute to the generalized Scripts module rather than PMM Scripts going forward.

* [Getting Started with PMM Scripts](pmm-scripts)
* [📁 PMM Script Examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts)

## 📺 Videos and Guides

:fontawesome-brands-youtube: [Scripts Demo | How to build custom trading scripts with Hummingbot](https://www.youtube.com/watch?v=R4i6MhLvXHY)
