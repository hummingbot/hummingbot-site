Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingobt exchange connectors in a few lines of Python code. There are two types of Scripts in the codebase:

## Scripts

Introduced in version [1.4.0](/release-notes/1.4.0), scripts offer users an alternative to creating a full-blown strategy. They are light, Python snippets that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. 

Scripts do not have configuration files, and can be run with the following command:

```
start --scripts <script-name>
```

* [Getting Started with Scripts](getting-started)
* [Script Examples](examples)

## PMM Scripts

Introduced in version [0.29.0](/release-notes/0.29.0), PMM Scripts were an early experiment in letting users customize the behavior of the [Pure Market Making](/strategies/pure-market-making) strategy with snippets of Python code.

Since PMM Scripts run in another process, it has limited access to variables and events in the main Hummingbot process. For this reason, we decided to deprecate this feature and focus on expanding the general form of Scripts.

* [Getting Started with PMM Scripts](pmm-scripts)