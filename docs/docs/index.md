Hummingbot is a local software client that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols. The Hummingbot architecture features modular components that can be maintained and extended by individual community members.

## Installation

We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase. Check out [Install via Docker](/installation/docker) for the basic process.

If you're a developer looking to customize the software, consider installing Hummingbot from source. Here are detailed instructions for each operating system:

* [Linux](../installation/linux.md)
* [Windows](../installation/windows.md)
* [MacOS](../installation/mac.md)

## [Strategies](/strategies)

The new Hummingbot StrategyV2 framework allows you to mix and match components, offering a modular approach to strategy creation and making the development process faster and more efficient.

- [Architecture](../v2-strategies/index.md): Learn how to use key components like Executors and Controllers

- [Walkthrough](../v2-strategies/walkthrough.md): Detailed walkthroughs of simple and advanced Strategy V2 examples

- [Sample Scripts](../scripts/examples.md): Sample Strategy V2 scripts

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

