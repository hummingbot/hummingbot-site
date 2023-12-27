---
date: 2023-12-11
authors:
  - foundation
categories:
  - Quickstart Guides
tags:
  - Docker Installation Guide
---

# Docker Installation Guide - Part 3 - Add API Keys

While paper trading in Hummingbot doesn't require API keys, live trading does. This guide will help you connect your exchange API keys to Hummingbot for real-time trading.

## Generate API Keys
 
First, you need to generate API keys from the exchange you wish to connect. Each exchange has its own setup process.

In this example, we'll connect **Binance API** keys. Head over to the [Binance Connector Docs](https://docs.hummingbot.org/exchanges/binance/#generate-api-keys) for instructions on how to generate API keys for [Binance](../../../exchanges/binance/index.md).

Check the [Connectors list](../../../exchanges/index.md) for a list of exchanges that are currently integrated with Hummingbot

!!! Warning
    Please always keep your API keys secure and do not share them. 

## Connect API keys to Hummingbot

In the Hummingbot run the `connect` command for the exchange we want to connect to. In this case for Binance use the command below - 

```
connect binance
```

![Alt text](connect.png)

You should get a prompt to enter in your API keys - you can use the following commands below to paste them into the Hummingbot terminal. Note that `CTRL + V` doesn't work and you'll get a `Pyperclip error` in the log panel if you try to use it. 

  - <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd>

  - <kbd>SHIFT</kbd> + RMB (right-mouse button)

  - <kbd>SHIFT</kbd> + <kbd>INS</kbd>

![Alt text](binance.png)

After entering your API keys you should get a success message if everything went through okay. You can also confirm by running the `connect` command again and check that both columns next to Binance are showing `Yes`. 

![Alt text](connected.png)


Now your Binance API keys are connected to Hummingbot. Repeat these steps for other exchanges as needed.

## What's Next?

![](botcamp-live-session.png)

If you're serious about delving deeper and enhancing your trading bot capabilities, consider [Botcamp](/botcamp/), a professional training program for market makers and algo traders. This comprehensive program combines new content modules and live sessions each month to help you understand the intricacies of the market. You'll learn to create and backtest market making strategies, directional trading, and other strategies using Dashboard. 

Most importantly, you'll gain hands-on experience with Bot Battles, Botcamp's monthly bot trading competitions. It's a great opportunity to measure your progress and learn from others. In addition, joining the Botcamp community allows you to expand your professional network, form teams to compete together, and share insights.

--- 
Thank you once again for joining us on this journey. I hope the knowledge you've gained here serves you well in your trading endeavors. All the best with your future trading bot projects!