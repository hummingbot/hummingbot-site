# Hummingbot Quickstart

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/t3Su_F_SY_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Introduction

Welcome to the new **Hummingbot Quickstart Guide**! This will teach you how to build and customize market making strategy using Hummingbot over 5 exercises.

Whether you're a beginner or an experienced trader, this guide should help you get started with creating your own custom trading strategies using Hummingbot. So, let's dive in and start building!

!!! note
    Introduced in version [1.4.0](/release-notes/1.4.0), **Scripts** enable users to build customized strategies and access the full power of Hummingbot exchange connectors without creating a full-blown strategy. Scripts are light Python files that can be run and modified without re-compilation, which let users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. See [Examples](/scripts/examples) for a list of the current sample scripts in the Hummingbot codebase.

## Getting Started

First, check out the [Installation](/installation/) section to install Hummingbot. You may install it using Docker (easiest for new users) or from source (best for developers).

If you have questions or need help, join the [official Hummingbot Discord](https://discord.gg/hummingbot) and ask for help on the **#support** channel from our community.

If you have installed Hummingbot successfully, you should see a welcome screen like the one below:

![](/assets/img/welcome.png)

The Hummingbot CLI helps you manage, configure, and run your bots. Familiarize yourself with the [basic features](/operation/) in Hummingbot, especially the [User Interface](/operation/user-interface/).

## Exercises

We will start with a simple "Hello World" example of a Hummingbot script and gradually add more functionality to it with each exercise. By the end, you should gain a basic understanding of how to create a market making strategy and use market data to customize its behavior.

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

## Additional Resources

- [Scripts Cheatsheet](/scripts/cheatsheet): Check out the cheatsheet or the [PDF version](/scripts/cheatsheet.pdf) that highlights the most commonly used methods available when writing scripts

- [Debugging Scripts with PyCharm](https://www.youtube.com/watch?v=2O6Ge25rsLk): This video shows you how to debug Scripts at runtime with the PyCharm IDE
