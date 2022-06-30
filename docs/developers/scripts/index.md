Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingbot exchange connectors in a few lines of Python code. 

There are two types of Scripts in the codebase:

## Scripts

Introduced in version [1.4.0](/release-notes/1.4.0), **Scripts** offer users an easier alternative to creating a full-blown strategy. They are light Python files that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. 

Unlike strategies, scripts can be created without configuration files, so only a single file is needed. However, scripts can access all the raw data, events, and methods in Hummingbot connectors, as well as other features such as the Rate Oracle.

* [Getting Started](getting-started)
* [Examples](examples)
* Reference (coming soon)

## PMM Scripts

Introduced in version [0.29.0](/release-notes/0.29.0), **PMM Scripts** let users customize the behavior of the [Pure Market Making](/strategies/pure-market-making) strategy with snippets of Python code.

Since PMM Scripts run in separate process, they have limited access to variables and events in the main Hummingbot process. For this reason, the Foundation advises the community to contribute to the generalized Scripts module rather than PMM Scripts going forward.

* [Getting Started with PMM Scripts](pmm-scripts)
* [📁 Examples](https://github.com/hummingbot/hummingbot/tree/master/pmm_scripts)
