Hummingbot is an open source Python-based framework that helps you run trading strategies that automate the execution of orders and trades on various cryptocurrency exchanges and protocols. 

## Installation

We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase. Check out [Install via Docker](/installation/docker) for the basic process.

!!! note
    If you're a developer looking to customize the software, consider installing Hummingbot from source. Here are detailed instructions for each operating system: [Linux](/installation/linux) | [Windows](/installation/windows) | [MacOS](/installation/mac)

## Strategies

A Hummingbot [strategy](/strategies) loads market data directly from centralized and decentralized exchanges, adaptable to the unique features of each trading venue's WebSocket/REST APIs and nodes, and executes logic defined by the strategy creator.

There are 2 current ways that Hummingbot strategies can be defined:

[Scripts](/scripts): Scripts are the entry point for all Hummingbot strategies. A script's `on_tick` method defines the actions taken each clock tick, and it provides access to core Hummingbot components like connectors.

They can range in complexity from a simple Python file that contains all strategy logic to a launcher script launches multiple Controllers, each defining a separate sub-strategy. 

[Controllers](/v2-strategies/controllers): Controllers define a modularized strategy based on the Strategy V2 [architecture](/v2-strategies/), which makes them backtestable, allows them to access market data more efficiently, and lets them be deployable using Dashboard.

In the past, there were legacy strategy templates ([V1 Strategies](/v1-strategies/)), the original Hummingbot strategies that are more rigid and less customizable than those built using the new Strategy V2 framework.

## Connectors

Hummingbot [connectors](/exchanges/) standardize trading logic and order types across different types of exchanges and blockchain networks, so that strategies can access standardized methods that work across all connectors of that type.

Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases:

- [CEXs](/cex-connectors): Connectors to centralized exchanges (CEX)

- [DEX](/dex-connectors): Connectors to decentralized exchanges (DEX)

- [Chains](/chains): Connectors to blockchains where DEXs operate


## Official Code Repositories

All Hummingbot Foundation code is maintained and stored in repositories in the official [Github](https://github.com/hummingbot) and [DockerHub](https://hub.docker.com/r/hummingbot/) organization accounts. These are the only code repositories used to release official versions of Hummingbot.  Please download Hummingbot and Hummingbot-related software from only these official sources.

The Hummingbot framework is comprised of multiple code repositories, hosted on the [Hummingbot Foundation Github](https://github.com/hummingbot), that are maintained by the Foundation alongside individual community members. All code is open sourced under the Apache 2.0 or MIT license.

The main Hummingbot code repositories are:

<div class="grid cards" markdown>

- [__Hummingbot__](/client) Core command line client and exchange connectors
- [__Deploy__](https://github.com/hummingbot/deploy) Docker deployment repo
- [__Dashboard__](/dashboard) Hummingbot 2.0 front-end user interface
- [__Backend API__](https://github.com/hummingbot/deploy): Hummingbot 2.0 back-end API
- [__Gateway__](/gateway) API middleware for DEX connectors
- [__Site__](https://github.com/hummingbot/deploy): This site - contributions welcome!

</div>

## Getting Help

If you encounter issues or have questions, here’s how you can get assistance:

- Consult our [FAQ](../faq.md), [Troubleshooting Guide](../troubleshooting.md), or [Glossary](../glossary.md).

- Explore our [Academy](../academy/index.md) for free resources on algorithmic trading and market making.

- To report bugs or suggest features, submit a [Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose).

- Join our [Discord community](https://discord.gg/hummingbot) and ask questions in the **#support** channel.

We pledge that we will not use the information/data your provide us for trading purposes nor share them with third parties.

## Learn Algo Trading and Market Making

To gain a deeper understanding of Hummingbot strategies along with access to the latest Hummingbot framework updates, check out [Botcamp](https://www.botcamp.xyz), the official training and [certification](/certification) program for Hummingbot.

Operated by the people behind Hummingbot Foundation, Botcamp offers bootcamps and courses that teach you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.