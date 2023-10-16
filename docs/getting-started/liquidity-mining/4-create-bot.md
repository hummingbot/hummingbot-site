This is **part 3** of the Hummingbot Liquidity Mining Quickstart Guide:

1. [Create API Keys]
2. [Configure Miner]
3. [Install Hummingbot]
4. **Create Bot**
5. [Earn Rewards]

## The Hummingbot client interface

Once you have installed and run Hummingbot, you should see the interface below.
![](./4-a-client-interface.png)

The Command Line Interface (CLI) is divided into five panes:

Bottom left (1) is the **input pane**, where you enter commands. Upper left (2) is the **output pane**, where your commands and responses are printed. The right pane (3) is the **trade log**, where trade/order notifications and error messages are shown.

The top toolbar shows you descriptive information such as the client version (4a), whether you are in Paper Trading mode (4b), and the active strategy (4c) and strategy configuration file (4d).

The bottom toolbar displays information about your bot's executed trades (5a), profit & loss (5b), and percentage return (5c). In addition, it also displays information about your bot's resource utilization, such as CPU usage (5d), memory usage (5e), number of active threads (5f), and how long the bot has been running (5g).

## Connecting to an exchange

### Enter API keys

Retrieve your **Trade key** from [step 1][Create API Keys].

Enter the command `connect [exchange]` to connect your exchange account to Hummingbot by adding API keys, where `[exchange]`is one of the exchanges supported by Hummingbot. You can hit SPACE or start typing to see available options.

![](./4-b-connect.gif)

The command `connect` shows if API keys have been successfully added.

Note that each exchange has a different format for API keys.

> **Tip:**
  Some users have reported not being able to copy and paste their API keys on some platforms. Our help articles such as [Other ways to copy and paste](https://docs.hummingbot.io/intro/support/#i-cant-copy-and-paste-my-api-keys) and [Paste items from clipboard in PuTTY](https://docs.hummingbot.io/intro/support/#paste-items-from-clipboard-in-putty) may help.

### Check balances

Typing the `connect` command alone will display enabled market connections in the output pane.
![](./4-c-connect-command.png)

The `balance` command can also be run to see the assets available for trade on connected exchanges.

Once you have added your API keys to hummingbot miner and connected a hummingbot to your chosen market, it's time to configure your liquidity mining strategy!

## Create a liquidity mining bot

We'll create a liquidity mining bot using the [liquidity mining strategy](https://docs.hummingbot.io/strategies/liquidity-mining/).

Enter the command `create` to begin creating a strategy config file. This configuration will be saved to a file that can be imported later on.

```
What is your market making strategy?
>>> liquidity_mining
```

Liquidity Mining is a preferred strategy for beginners. Running a liquidity mining strategy, hummingbot will automatically place bid and ask orders, using assets available on linked exchanges. The spread will be adjusted based on market volatility.

## Select bot markets and assets

First, let's define where to run the bot and the assets the bot will be using.

```
Enter the spot connector to use for liquidity mining?
>>>
```

This questions asks you to select the **exchange** where the bot will be running. Hummingbot supports over 20 exchanges. Since you will be running this bot to earn liquidity rewards, select an exchange supported by Hummingbot Miner, such as `binance` or `kucoin`.

```
Enter a list of markets (comma separated, e.g. LTC-USDT,ETH-USDT) >>>

What asset (base or quote) do you want to use to provide liquidity?
>>>
```

Next, enter a list of markets (trading pairs) where your bot will provide liquidity. In the subsequent question, you will set the asset (token) used to provide liquidity to these markets.

Make sure that this asset is a "common denominator" in the list of selected markets. For example, if you intend to use `USDT` as your main mining asset, make sure that `USDT` is in the each market in the list (e.g. `FRONT-USDT, BTC-USDT, ETH-USDT`). However, if you're using a different asset like `AVAX` to provide liquidity, ensure that `AVAX` is in each market (`AVAX-USDT,AVAX-BTC,AVAX-BNB`).

The bot will take your balance of `token` held on the selected `exchange` and divide its budget evenly across each `market`. In effect, you will be running a separate market making bot for each `market`, which increases diversification and smoothes the volatilty of your returns.

## Enter strategy parameters

Hummingbot strategies are not intended to be black boxes, but rather open templates that anyone can configure. Each strategy is defined by parameters that control what orders it creates and how it responds to market conditions. Next, you will configure the order amount, spread, and other key parameters.

```
What asset (base or quote) do you want to use to provide liquidity?
>>>
```

Select the **token** that you will use to provide liquidity. Make sure that you have some balance of your token in the exchange wallet. This will be the unit in which profits and loss will be measured.

The selected token will also be used to place the initial orders. In order to earn liquidity mining rewards, the chosen market pairs should be included in an active campaign.

```
What is the size of each order (in [token] amount)?
>>>
```

This is the **order amount**, denominated in units of the **token**, that will be placed on each side of the order book. Note that if you have insufficient base or quote assets, orders on that side of the book will not be placed.

```
How far away from the mid price do you want to place bid and ask orders? (Enter 1 to indicate 1%)
>>>
```

Here, you set the **spread** of your orders. Your Hummingbot Miner rewards increase if you place smaller spreads (since your orders are closer to the market price and more likely to be filled). Too close of a spread may result in high fees or disadvantageous trades. Too large, and the spread may not result in filling many orders, and lowering rewards earned.

> **What spreads should I set?** Order spread is one of the most important levers that market makers can control. Tighter spreads cause your orders to be filled more often, resulting in more trades, bigger changes in asset balance, and potentially more risk. We recommend that new users start with **wider spreads**, such as 1.00% for each side of the order book or higher.

```
For each pair, what is your target base asset percentage? (Enter 20 to indicate 20%)
>>>
```

To complete the configuration process, enter the target base asset percentage (**target_base_pct**) that you want reach for each market. Your bot will adjust the size and spread of its orders to attempt to reach this target inventory level. Since the main risk that you take as a market maker is **inventory risk** that arises from market volatility, keeping a consistent inventory level helps mitigate losses.

To complete the configuration process, save the strategy configuration file. After you exit Hummingbot, you can run the `import` command later to load it.

## Configuring other options like kill switch

The `config` command can be used to view and further customize your bot's parameters. The parameters are divided into **global** parameters (which affect all strategies) and **strategy** parameters (which are saved in the strategy configuration file.

A useful global parameter that we recommend setting is the [kill switch](https://docs.hummingbot.io/features/kill-switch/), which automatically stops the bot if losses exceed a certain threshold.

To activate the kill switch, run `config kill_switch_enabled`:

```
>>> config kill_switch_enabled

Would you like to Enable the Kill Switch (Yes/No)?
>>> Yes

New configuration saved:
kill_switch_enabled: True
```

Afterwards, run `config kill-switch-rate` to set the loss threshold:

```
>>> config kill_switch_rate

At what profit/loss rate would you like the bot to stop? (e.g. -5 equals 5 percent loss)
>>> -5

New configuration saved:
kill_switch_rate: -5
```

Type in the percentage of loss, measured in your token asset, that will trigger the kill switch on your bot. If your token asset is USDT and you enter -5, then the bot will stop if your assets loses 5% of their value in USDT.

## Start bot

Type `start` and watch your bot in action! You can see the placed orders on the right panel, and monitor how the perceived volatility is affecting your orders.

Proceed to the final part of the Hummingbot quickstart guide: [Earn Rewards][Earn Rewards]

[Create API Keys]: 1-create-keys.md
[Configure Miner]: 2-configure-miner.md
[Install Hummingbot]: 3-install-hummingbot.md
[Earn Rewards]: 5-earn-rewards.md
