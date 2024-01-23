---
date: 2020-11-12
authors:
  - coinalpha
categories:
  - Academy
tags:
  - Running Hummingbot
---


# Commands and Configs - Part 2

![cover](cover.webp)

Welcome back to the Hummingbot Academy and the second part of the series of articles that will help you make the best use of your Hummingbot.

Last article we went through some of the commands that you can use to operate your bot, and how they work.

We have a few more of these commands to talk about, and we will also start to show how to customize your strategy.

<!-- more -->

### Performance commands

After running the bot for a while, you probably want to know how good and profitable your strategy is.

For that, you will need the commands below to evaluate the performance of your Hummingbot.


#### history

With `history` you will be able to see the last 100 trades executed by your Hummingbot and the performance of the current session.

This information is also stored by session and every time you `exit` the bot, this information will be erased (but remember that you can save the executed trades with the command `export trades` before closing your bot)

Let’s go through the information that is shown:

![](./img1.png)

##### Recent trades

This is the list of all trades that were executed by the bot, and by the bot only.

Trades executed manually on your exchange, be it a taker or maker order, won’t be recorded on this trade history.

##### Inventory

Here you can see what is the total value of the inventory of the assets that are being traded.

Inventory value is the main performance indicator for a market maker and is also the main source of risk. Understanding this type of risk is key to being a successful market maker, and you can learn more about it reading the article [What is Inventory Risk?](../what-is-inventory-risk/index.md).

On this part of the `history`, you can see what is the **Starting** and **Current** inventory, and how it changed for the time your bot has been running.

**Net Delta** shows how much of each asset was added to or subtracted from your balance.

**Trade Delta** shows the changes that happened on your inventory due to the trades executed by your Hummingbot.

##### Markets

You can see a quick view how much the price of the pair being traded changed and how many trades your Hummingbot executed since the `start`.

##### Performance

Here is where you can check how your bot is performing.

If you are new to market making, you might notice that how the trading performance is measured is a bit different from traditional trading.

What matters most for a market maker is how much the total inventory value has changed since he started his operations. You can learn more details about what is the logic behind the performance calculation reading the article [Managing Your Bot Performance](../managing-your-bot-performance/index.md).

But as a TL;DR, the performance you see is a comparison between trading with the bot vs not trading at all (HODLing the starting assets).

Another important thing to notice is that the result that appears on the **Return %** is measured based on the quote of the pair that is being traded. In the image above, for example, the bot is showing my **Return %** in BTC.

#### export

With `export` you will be able to visualize and/or save some information stored on your bot instance.

This command will only work when added with one of the following parameters:

`export keys`

Like we said before, the API and Ethereum wallet private keys used by your Hummingbot are stored locally and encrypted, and it isn’t possible to see what are the values stored by taking a peek on the Hummingbot files.

But if you want to check them out, you can use the `export keys` command, and after entering your bot password, Hummingbot will show them.

That is another good reason why you must have a good password on your Hummingbot client. As we all know, whoever owns the private key, owns the crypto.

`export trades`

Want to save the history of all trades executed by your Hummingbot? Then this is the command for you.

With `export trades`, every trade executed by the bot instance on the current section will be saved on a .csv file that you can import to your favorite spreadsheet application.

Remember to use this before `exit`. This command only saves the trades executed on the current session, so if you restart your bot, trades executed on a previous session won’t be saved.

### Configuration commands

When you used the `connect` and `create` command to configure your first bot, you added some starting configurations to it, but **Hummingbot** have a lot of possible options that allows you to customize your strategy in a way that will best fit your trading objectives.

Let’s begin with how to use the main customization command.

#### config

Before hitting `start` you might want to execute the `config` command to further customize the strategy that will be executed by the bot.

Using the `config` command alone will display what is the actual configuration of the bot:

![](./img2.png)

Don’t get discouraged by the amount of configuration options available. On the next articles, we will go through all of them to help you figure out how each parameter works, and how you can use them to customize your strategy.

> To change a configuration parameter use `config $Key`, where $Key is the parameter you want to change. You will be presented with a prompt about what you want to change.

Let’s start with the global configurations.

### Global Configurations

The settings on this section of the `config` menu are related to the general behaviour of the bot, independent of the strategy configuration.

You can also change these configurations by editing the file `conf_global.yml` located on the `\hummingbot\conf\` paste.

#### kill_switch_enabled & kill_switch_rate

This parameter acts as a safety measure that will stop the bot, if the performance reaches the threshold (in %) defined on `kill_switch_rate`.

When `kill_switch_enabled` is activated, the bot will compare the `kill_switch_rate` value with the `Return %` performance value that can be seen using the `history` command:

![](./img3.png)

There is two ways we can use this parameter:

- A negative `kill_switch_rate` value will work as a **Stop Loss**. If the `Return %` is lower, the bot will stop trading.

- A positive `kill_switch_rate` value will work as a **Stop Gain**. If the `Return %` is higher, the bot will stop trading.

#### telegram_enabled, telegram_token & telegram_chat_id

If you are running an automated bot it’s reasonable to assume that you won’t be able to stay at the front of your computer monitoring its activity 24 hours a day.

These settings allow you to configure a telegram account to **receive messages from the bot**, and to **send commands to the bot** from the telegram account. 

If you want to use this functionality, just [follow this guide](../../../global-configs/telegram.md) for a complete explanation.

#### 0x_active_cancels

Some decentralized exchanges are built using the [0x protocol](https://0x.org/), and limit maker orders type on these markets have a Order Expiry value (in seconds), that will automatically cancel the order at the end of this timer.

With `0x_active_cancels` enabled, the bot will send transactions on the Ethereum blockchain to cancel the orders it created.

Be mindful that these active cancelations will incur in transaction gas fees.

#### script_enabled & script_file_path

One of the best things about hummingbot is that it is a flexible tool, with a lot of configuration options to implement the strategy you want.

[Scripts](../../../scripts/index.md) play a big part in this customization, and these two parameters are how you add a script to complement your strategy.

When `script_enabled` is active, whenever you `start` your bot, it will look for the file name you added to `script_file_path`.

> Scripts are created on python (.py files) and are stored by default on the /hummingbot/scripts/ paste. Hummingbot comes with a few example scripts to help you create your own.

If you have an idea for a script but have no coding knowledge, you can always create an issue on our [Github page](https://github.com/hummingbot/hummingbot/issues) with the scripts tag, and any other member of our community might work on it. 

### Join our community!

This is only a fraction of what can be done with your Hummingbot. Be ready to learn even more about market making bot customization on the next articles.

And remember that you can be part of our community by joining us on our [Discord channel](https://discord.com/invite/hummingbot) to talk about the bot, strategies, liquidity mining and anything else related to the cryptocurrency world, and receive direct support from our team.

To keep up with the news and updates make sure to follow us on [Twitter](https://twitter.com/hummingbot_io), and our Community on [Reddit](https://www.reddit.com/r/Hummingbot/).

On our [Youtube Channel](https://www.youtube.com/channel/UCxzzdEnDRbylLMWmaMjywOA?sub_confirmation=1) you can find a lot of content about market making, including interviews with professional traders and cryptocurrency related events.
