# Hummingbot Quickstart

## Introduction

Welcome to the new **Hummingbot Quickstart**! Hummingbot is an open-source software framework that help you to create and run your own trading bots. With Hummingbot, you can create trading high-frequency trading strategies that can run any crypto exchange, and customize them to fit your specific trading style!

In this guide, we will start with a simple "Hello World" example of a Hummingbot script and gradually add more functionality to it with each example. By the end of this guide, you will gain a basic understanding of how to create a market making script and and use real-time order book data to customize its behavior.

Whether you're a beginner or an experienced trader, this guide will help you get started with creating your own custom trading strategies using Hummingbot. So, let's dive in and start building!

!!! Info
    💡 Introduced in version [1.4.0](https://docs.hummingbot.org/release-notes/1.4.0), **Scripts** enable users to build customized strategies and access the full power of Hummingbot exchange connectors without creating a full-blown strategy. Scripts are light Python files that can be run and modified without re-compilation, which let users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface. See [Getting Started](https://docs.hummingbot.org/scripts/getting-started) to start running scripts and [Examples](https://docs.hummingbot.org/scripts/examples) for a list of the current sample scripts in the Hummingbot codebase.

## **What will you learn?**

### [Exercise 1:](Exercise1.md) Create Hello World Script

- How a basic script works
- Fetching real-time prices (best bid, best ask, mid-price, last traded price)
- Emitting custom log messages

### [Exercise 2:](Exercise2.md) Create Market Making Script

- Building the [Pure Market Making strategy](https://docs.hummingbot.org/strategies/pure-market-making/) as a simple script
- Placing orders using exchange API
- Cancelling orders using exchange API
- Handle an order fill event

### [Exercise 3:](Exercise3.md) Customize Status Command

- Overriding the default `status` command with custom output

### [Exercise 4:](Exercise4.md) Add Basic Price Ceiling/Floor

- Motivation for adding this type of logic to a market making strategy
- Adding a price ceiling/floor feature to your script

### [Exercise 5:](Exercise5.md) Add Dynamic Price Ceiling/Floor

- Creating custom OHLCV candles and technical indicators from order book data
- Making the price ceiling/floor feature dynamic with Bollinger Bands
