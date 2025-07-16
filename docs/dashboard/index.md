## Overview

[Hummingbot Dashboard](https://github.com/hummingbot/dashboard) is an open-source graphical interface designed to help users manage their portfolios across multiple exchanges, configure and backtest strategies, and deploy and manage multiple Hummingbot instances efficiently.

Starting with v2.7.0, Dashboard is powered by the new [Hummingbot API](../hummingbot-api/index.md) and [Hummingbot API Client](https://github.com/hummingbot/hummingbot-api-client), providing a robust and scalable architecture for managing trading operations at scale.

Dashboard simplifies bot management and is fully compatible with [Controllers](../v2-strategies/controllers/index.md), allowing users to configure and backtest strategies before deploying them live.

!!! note "Documentation Update"
    All dashboard pages have been updated to work with the new API architecture. Detailed documentation for each page will be added soon.

## Highlights

* **Accessible Framework**: Uses the [Streamlit](https://streamlit.io/) open source data visualization framework
* **Backtestable Strategies**: Configure and [backtest](./backtest.md) strategy controllers
* **Multi-Bot Deployment**: [Deploy](./deploy.md) and [manage](./instances.md) multiple bot instances and monitor their real-time performance
* **API-Powered**: Built on top of the new Hummingbot API for reliable bot management

## Getting Started

To get started, check out the [Hummingbot Dashboard Quickstart](../blog/posts/quickstart-dashboard/index.md) guide, or the links below with a short explanation of each page (also in the sidebar).

- [Adding Credentials:](credentials.md)

- [Viewing Portfolio:](portfolio.md)

- [Configuring Strategies:](config.md)

- [Backtesting Strategies:](backtest.md)

- [Deploying Instances:](deploy.md)

- [Managing Instances:](instances.md)