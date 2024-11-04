Hummingbot is an community-driven, open source Python framework for building automated market making and algorithmic trading bots, maintained by [Hummingbot Foundation](../about/index.md).

It is designed to be modular and extensible, allowing users to automate any trading strategy on any exchange and blockchain.

## Getting Started

We recommend installing Hummingbot using Docker if you want the simplest, easiest installation method and don't need to modify the Hummingbot codebase. Check out [Install via Docker](/installation/docker) for the basic process.

!!! note
    If you're a developer looking to customize the software, consider installing Hummingbot from source. Here are detailed instructions for each operating system: [Linux](/installation/linux) | [Windows](/installation/windows) | [MacOS](/installation/mac)

Afterwards, check out [Hummingbot Academy](/academy) for step-by-step tutorials on how to use Hummingbot.

## Ways to use Hummingbot

Hummingbot started as a command line interface (CLI) tool, and the [Hummingbot Client](/client) is still the basic way to interact with the framework. 

Today, there are also other ways to use Hummingbot:

* [Dashboard](/dashboard): A web-based user interface for deploying multi-bot trading strategies
* [Back-End API](https://github.com/hummingbot/backend-api): Backend API that exposes bot management endpoints for Dashboard and other  to interact with
* [Quants Lab](https://github.com/hummingbot/quants-lab): A sandbox for users to test their trading ideas and strategies

## Strategies

A Hummingbot [strategy](/strategies) automates an algorithmic trading strategy based on a configuration file, allowing the template containing the strategy logic to be defined publicly, while users can keep their configurations private.

As of the 2.0 release, the framework offers two ways to create Hummingbot strategies:

* [Scripts](/scripts): Scripts are the entry point for all Hummingbot strategies. A script's `on_tick` method defines the actions taken each clock tick, and it provides access to core Hummingbot components like connectors. They can range in complexity from a simple Python file that contains all strategy logic to a launcher script launches multiple Controllers, each defining a separate sub-strategy. 

* [Controllers](/v2-strategies/controllers): Controllers define a modularized strategy using components such as Executors, enabling backtesting and faciliates multi-bot deployment using Dashboard.

In the past, there were legacy strategy templates ([V1 Strategies](/v1-strategies/)), the original Hummingbot strategies that are more rigid and less customizable than those built using the new Strategy V2 framework.

## Connectors

Hummingbot connectors standardize trading logic and order types across different types of exchanges and blockchain networks, so that strategies can access standardized methods that work across all connectors of that type.

Each connector's code is contained in modularized folders in the Hummingbot and/or Gateway codebases:

- [CLOB Connectors](/exchanges/): Connectors to central limit order book (CLOB) centralized and decentralized exchanges
- [AMM Connectors](/dex-connectors): Connectors to automated market maker (AMM) decentralized exchanges

## Official Code Repositories

All Hummingbot Foundation code is maintained and stored in repositories in the official [Github](https://github.com/hummingbot) and [DockerHub](https://hub.docker.com/r/hummingbot/) organization accounts. These are the only code repositories used to release official versions of Hummingbot.  Please download Hummingbot and Hummingbot-related software from only these official sources.

The Hummingbot framework is comprised of multiple code repositories, hosted on the [Hummingbot Foundation Github](https://github.com/hummingbot), that are maintained by the Foundation alongside individual community members. All code is open sourced under the Apache 2.0 or MIT license.

## Getting Help

If you encounter issues or have questions, here’s how you can get assistance:

- Consult our [FAQ](../faq.md), [Troubleshooting Guide](../troubleshooting.md), or [Glossary](../glossary.md).

- Explore our [Academy](../academy/index.md) for free resources on algorithmic trading and market making.

- To report bugs or suggest features, submit a [Github issue](https://github.com/hummingbot/hummingbot/issues/new/choose).

- Join our [Discord community](https://discord.gg/hummingbot) and ask questions in the **#support** channel.

We pledge that we will not use the information/data your provide us for trading purposes nor share them with third parties.

## Learn Market Making in Botcamp

To gain a deeper understanding of Hummingbot strategies along with access to the latest Hummingbot framework updates, check out [Botcamp](https://www.botcamp.xyz), the official training and [certification](/certification) program for Hummingbot.

Operated by the people behind Hummingbot Foundation, Botcamp offers bootcamps and courses that teach you how to design and deploy advanced algo trading and market making strategies using Hummingbot's Strategy V2 framework.