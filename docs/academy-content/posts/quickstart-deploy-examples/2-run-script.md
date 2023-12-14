---
date: 2023-12-11
authors:
  - foundation
categories:
  - Quickstart Guides
tags:
  - Docker Installation Guide
---

# Docker Installation Guide - Part 2 - Run Script

## Simple PMM Example

Let's run the `simple_pmm_example.py` script. This script creates orders for the **ETH-USDT** pair in paper trading mode. Here’s how to start the script in the Hummingbot terminal:

```
start --script simple_pmm_example.py
```

When you use the `--script` command and press <kbd>SPACE</kbd> Hummingbot will display available scripts in the scripts folder, as shown below. 

![Alt text](script.png)

If you don't see any scripts under the `/scripts` folder run these commands in the terminal to make them appear: 

```bash
sudo chmod -R a+rw ./hummingbot_files
docker cp hummingbot:/home/hummingbot/scripts-copy/. ./hummingbot_files/scripts/
```

Once the script starts, you'll see activity in the log pane. Use the `status` command for more details. It should resemble the screen below.

![Alt text](simple-pmm.png)


To stop the script from running, type the **stop** command in the Hummingbot terminal

```
stop
```

## Download Order Book Data

Let's try another example and this time we'll try to fetch order book data using the **download_order_book_and_trades.py** script.

This script is pre-configured to download the **"ETH-USDT"** & **"BTC-USDT"** pairs using Binance paper trade. 

Use the following command in the Hummingbot terminal to start the script:

```
start --script download_order_book_and_trades.py
```

![Alt text](order_book.png)

Once you press <kbd>ENTER</kbd>, the script will start running and downloading the order book information. Give this a few minutes as it will take some time to download the data.

Initially, the log pane may display `binance is not ready. Please wait...` while downloading. You can ignore this message.

After a few minutes check the `hummingbot_files/data` folder and you should see the following text files:

```
binance_paper_trade_BTC-USDT_order_book_snapshots_2023-xx-xx.txt
binance_paper_trade_BTC-USDT_trades_2023-xx-xx.txt
binance_paper_trade_ETH-USDT_order_book_snapshots_2023-xx-xx.txt
binance_paper_trade_ETH-USDT_trades_2023-xx-xx.txt
```

Back in the Hummingbot terminal, if the log pane still shows `binance is not ready. Please wait....` just send the `stop` command to halt the bot.

Congratulations! You've successfully run your first two scripts. Next, we'll learn how to connect API keys for live trading.

[Connecting your API Keys](3-api-keys.md){ .md-button .md-button--primary }
