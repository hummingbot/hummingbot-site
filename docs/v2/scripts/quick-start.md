# Introduction

Scripts enable Hummingbot users to build customized strategies and access the full power of Hummingbot exchange connectors in a few lines of Python code.

Introduced in version [1.4.0](../../release-notes/1.4.0.md), **Scripts** offer users an easier alternative to creating a full-blown strategy. They are light Python files, that can be run and modified without re-compilation, so users can `stop` a script, adjust the code, and `start` it without leaving the Hummingbot client interface.

Unlike strategies, scripts can be created without configuration files, so only a single file is needed. However, scripts can access all the raw data, events, and methods in Hummingbot connectors, as well as other features such as the Rate Oracle.

**What we are going to learn?**

- Log messages
- Get prices (best bid, best ask, mid-price, last traded price)
- Place orders
- Cancel orders
- Code a simple pure market-making strategy
- Add a fixed price ceiling/floor feature
- How to use Candles and add technical indicators
- Improve the price ceiling/floor feature by using the Bollinger Bands

## Let’s code

**Important**: Before you begin, ensure that you have installed Hummingbot. If you haven't, follow this guide to do so.

## Understanding the structure
