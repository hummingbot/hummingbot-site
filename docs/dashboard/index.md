## Overview

In 2019, Hummingbot was introduced as a command-line based market-making bot.

Now, we are excited to introduce [Hummingbot Dashboard](https://github.com/hummingbot/dashboard), an open-source graphical interface designed to help users deploy and manage multiple Hummingbot instances efficiently. Not only does Dashboard simplify the process of managing bots at scale, but it also is designed to be compatible with [V2 Strategies](../v2-strategies/index.md), which users can use Dashboard to create and backtest before deploying live.

* **Accessible Framework**: Uses the [Streamlit](https://streamlit.io/) open source data visualization framework
* **Multi-Bot Deployment**: Deploy strategies as [Docker](https://docker.io/) instances managed using the [Brokers](../installation/broker.md) module
* **Backtestable Strategies**: Helps users create, backtest, and optimize [V2 Strategies](../v2-strategies/index.md)

## Featured Pages

* **Bot Orchestration** enables you to effortlessly deploy and manage multiple instances of Hummingbot.
* **Backtest Manager** help you test your trading strategies using historical data and perform hyper-paramter optimization using the built-in [Optuna](https://optuna.org/) integration.
* **Strategy Performance** helps you analyze the performance of a Hummingbot script or strategy configuration using its SQLite database file.

## Getting Started

To get started, check out the [Intro to Dashboard](/academy-content/using-dashboard-to-deploy-and-backtest-strategies/) Quickstart guide.
