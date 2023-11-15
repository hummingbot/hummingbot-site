---
date: 2019-01-18
authors:
  - coinalpha
categories:
  - Academy
tags:
  - Market Making Basics
---

# FAQ for New Crypto Algo Traders

![cover](cover.jpeg)

In this post, we put together some helpful Q&A resources for **developers** who want to dip their toes into crypto algo trading, as well as **traders** who have trading experience but little to no programming skills.

<!-- more -->

### What is algo trading?

Algo trading is the process of using computer programs to automatically execute trades based on a predefined set of rules, called algorithms, with the goal to generate profits at high speed and high frequency.

Due to its low barrier to entry from easily accessible exchange APIs, sufficient supplies of free tutorials and documents, reasonable hardware requirements, and an around-the-clock market, algo trading in crypto is attracting more people than ever who are interested in and curious about how this all works.

### What are the advantages of algo trading?

One of the major advantages of algo trading is that it can execute orders 24/7, non-stop. Bots won’t get tired, and the crypto market never closes. That being said, it doesn’t mean you can let your bot run completely without human intervention.  If you have a bug in the program or setup your rules incorrectly, the computer program will not know and it will continue to obediently and tirelessly trade away your assets in accordance with the flawed instructions while you sleep.  You need to constantly monitor and re-adjust your parameters from time to time.

Another advantage is high speed. Stock algo trading systems used by today’s institutions are able to place orders at a speed that’s more than 20 times faster than a blink of the eye (FYI, human eyeblink normally takes 300-400 milliseconds). Although not as fast as its BIG brother used for stock trading, crypto trading bots can still capture short-lived profit-making opportunities at a speed that humans can’t achieve without technological assistance.

In addition, backtesting ability is also one of the unique benefits that algo trading can provide. Since rules are predefined, users can validate their strategies through simulations based on historical data before they invest a single cent.

More important, computers lack emotions, which is typically a source of weakness and leads to irrational investments from their human counterparts.

### What are the disadvantages of algo trading?

**Crypto algo trading is NOT for everyone.**

One of the biggest disadvantages of crypto algo trading is its relatively high technical barriers, which might not be beginner-friendly. It requires programming skills (or at least an understanding of certain programming languages) and a deep understanding of trading strategies and financial concepts. Thus, an ideal algo trading beginner would be someone who has either strong programming skills, or trading experience as well as finance knowledge, or both.

Another disadvantage of algo trading is that users cannot avoid risks introduced by mechanical failures, system glitches or bugs. Your bots may contain bugs that have not been previously identified. Your computer may crash and miss important orders. Your neighborhood may experience a sudden blackout, and you cannot even turn on the computer. So it’s generally a good idea to start small and be super careful.

And last but not least, algo trading might incur higher costs than manual trading. Increased trade frequency leads to increased trading fees and costs.  You will also need to invest in infrastructure: high-quality hardware as well as fast and stable internet connection are part of the minimal requirement. For increased reliability and to avoid your computer taking on a side hustle of acting as an oven in your house, you may eventually want to host your trading on the cloud, leading to additional recurring costs.  In addition, you may want to purchase data feeds at some point in order to improve your strategies and backtesting. In algorithmic trading, data is gold, and it’s not free.


### How to choose which pairs to trade?

Less experienced traders may also wonder how to pick cryptocurrency pairs to trade. This is very subjective. You can trade your favorite coins with a goal to gain more of your favorite coins, you can observe price movements at a few different exchanges and try to spot opportunities, and you can also trade the coins you dislike in order to profit from shorting. It involves a lot of patience, and trials and errors. The key is to always have a goal and certain strategies in mind.


### Should I create my own bots?

Equipped with an in-depth understanding of their favorite trading strategies, developers can build their own trading bots in their favorite languages.

However, writing a bot is time-consuming and not easy. While creating the strategy itself may be straight forward, the challenge may come in creating reliability when the sector's infrastructure is unstable (exchange feeds/APIs go down all the time, trading on DEXs is subject to creating and handling blockchain transactions).  A lot of developers have told us that they were trying to create a bot themselves but couldn't make it work. Therefore, whether to write your own bot or try an existing one involves a cost-benefit analysis.

Here is a list of useful resources to get you started with bot building:

* [Let’s write a cryptocurrency bot](../what-is-market-making/index.md): This is a detailed walkthrough of how the author built his crypto trading bot.

* [How to build a bot in R?](https://towardsdatascience.com/build-a-cryptocurrency-trading-bot-with-r-1445c429e1b1): Be careful that the strategy demonstrated in this article using RSI might not be working due to oversimplification.

* [Get historical data from coinmarketcap](https://github.com/Alescontrela/coinmarketcap-history)

### Should I use an existing bot?

An existing bot, especially an open-source one, can be a great alternative for developers who want to try algo trading. It definitely saves developer time and provides a base from which developers can tweak and customize.

In addition to user experience considerations, using existing bots entails various risks. You might easily lose money if you make a wrong bet, set wrong parameters, or even do not truly understand the algorithms employed by the bot.

Since we're designing Hummingbot to enable anyone to run a crypto market making bot, a simple, intuitive user experience is one of our core goals. More important, by focusing on a relatively low-risk strategy called **cross-exchange market making**, we believe that Hummingbot will be an easy start even for novice traders.

### How much do I need to get started?

Given the current market environment, the barrier to entry is particularly low for new crypto traders. If you are not comfortable investing a load of hard-earned money at first, starting with $100 will work.

Having said that, transaction and withdrawal fees may eat into profits (as %) and might materially impact results given smaller and smaller trading amounts.