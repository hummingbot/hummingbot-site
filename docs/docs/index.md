Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols. The Hummingbot architecture features modular components that can be maintained and extended by individual community members.

## Installation

We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase. Check out [Install via Docker](/installation/docker) for the basic process.

!!! note
    If you're a developer looking to customize the software, consider installing Hummingbot from source. Here are detailed instructions for each operating system: [Linux](/installation/linux) | [Windows](/installation/windows) | [MacOS](/installation/mac)

## [Strategies](/strategies)

A Hummingbot strategy loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes, and executes logic defined by the strategy creator.

To run a strategy, a user selects a script or strategy template, defines its input parameters in a [Config File](../client/config-files.md), and starts it with the `start` command in the Hummingbot client or via the command line.

- [Sample Scripts](../scripts/examples.md): Examples of basic and advanced strategy templates in the official codebase

- [Walkthrough](../v2-strategies/walkthrough.md): Learn how to run a simple directional strategy using Hummingbot

The new Hummingbot **StrategyV2** framework allows you to mix and match components, offering a modular approach to strategy creation and making the development process faster and more efficient.
See [StrategyV2 Architecture](../v2-strategies/index.md) to learn how V2 components like Executors and Controllers work together.

## [Connectors](/exchanges/)

Hummingbot connectors standardize trading logic and order types across different types of exchanges and blockchain networks, so that strategies can access standardized methods that work across all connectors of that type.

Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases:

- [CEXs](/cex-connectors): Connectors to centralized exchanges (CEX)

- [DEX](/dex-connectors): Connectors to decentralized exchanges (DEX)

- [Chains](/chains): Connectors to Layer 1 blockchain networks

## Getting Help

If you encounter issues or have questions, here’s how you can get assistance:

- Consult our [FAQ](../faq.md), [Troubleshooting Guide](../troubleshooting.md), or [Glossary](../glossary.md).

- Explore our [Academy](../academy/index.md) for free resources on algorithmic trading and market making.

- To report bugs or suggest features, submit a [Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose).

- Join our [Discord community](https://discord.gg/hummingbot) and ask questions in the **#support** channel.

We pledge that we will not use the information/data your provide us for trading purposes nor share them with third parties.

## Advanced Learning

Enhance your trading skills with [Botcamp](https://www.botcamp.xyz/), where you can learn professional-grade market making and algorithmic trading strategies.

