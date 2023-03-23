# Hummingbot Quickstart

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/t3Su_F_SY_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction

Welcome to the new **Hummingbot Quickstart**! With Hummingbot, you can create trading high-frequency trading strategies that can run any crypto exchange and customize them to fit your specific trading style!

In this guide, we will start with a simple "Hello World" example of a Hummingbot script and gradually add more functionality to it with each example. By the end of this guide, you will gain a basic understanding of how to create a market making script and and use real-time order book data to customize its behavior.

Whether you're a beginner or an experienced trader, this guide will help you get started with creating your own custom trading strategies using Hummingbot. So, let's dive in and start building!

!!! note
    Introduced in version [1.4.0](/release-notes/1.4.0), **Scripts** enable users to build customized strategies and access the full power of Hummingbot exchange connectors without creating a full-blown strategy. Scripts are light Python files that can be run and modified without re-compilation, which let users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. See [Examples](/scripts/examples) for a list of the current sample scripts in the Hummingbot codebase.

## Installation and Setup

Before we begin coding, let’s ensure that you are set up properly.

### Installation

First, check out the [Installation](/installation/) section to install Hummingbot. You may install it using Docker (easiest for new users) or from source (best for developers).

If you have questions or need help, join the [official Hummingbot Discord](https://discord.gg/hummingbot) and ask for help on the **#support** channel from our community.

### Folder structure

Note that Hummingbot is **local client software** that you run on your own machine, so you have full control over how it’s configured and where you save your files. No one else can access your data and secrets!

```
hummingbot
    ┣ conf
    ┣ data
    ┣ logs
    ┣ hummingbot
    ┣ scripts
```

- **conf:** Here you will find the configuration files of api_keys, strategies, password, client, logs, and fees.

- **data:** Databases and CSV files of trades.

- **logs:** Log files of your running scripts are stored here.

- **hummingbot:** All the components that we are going to use are inside this folder. Read the API Reference guide to learn more about each component.

- **scripts:** This folder stores the code of the sample scripts, as well as new scripts that we create.

### Resources

- **Scripts Cheatsheet**: We created this [cheatsheet](/scripts/cheatsheet.pdf) highlighting the most commonly used methods available when writing scripts.

- **Debugging Scripts with PyCharm**: Watch [this video](https://www.loom.com/share/6612ffd03199432c94338bcd18567831) to learn how you can debug Scripts at runtime with the PyCharm IDE.

## Exercises

### [Exercise 1:](custom-pmm-1.md) Create Hello World Script

- How a basic script works
- Fetching real-time prices (best bid, best ask, mid-price, last traded price)
- Emitting custom log messages

### [Exercise 2:](custom-pmm-2.md) Create Market Making Script

- Building the [Pure Market Making strategy](https://docs.hummingbot.org/strategies/pure-market-making/) as a simple script
- Placing orders using exchange API
- Cancelling orders using exchange API
- Handle an order fill event

### [Exercise 3:](custom-pmm-3.md) Customize Status Command

- Overriding the default `status` command with custom output

### [Exercise 4:](custom-pmm-4.md) Add Basic Price Ceiling/Floor

- Motivation for adding this type of logic to a market making strategy
- Adding a price ceiling/floor feature to your script

### [Exercise 5:](custom-pmm-5.md) Add Dynamic Price Ceiling/Floor

- Creating custom OHLCV candles and technical indicators from order book data
- Making the price ceiling/floor feature dynamic with Bollinger Bands