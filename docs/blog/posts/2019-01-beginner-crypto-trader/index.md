---
type: "blog"
title: "A developer's guide to crypto algo trading"
description: ""
author: "coinalpha"
date: 2019-01-18
image: "./cover.jpeg"
tags: ["trading concepts"]
level: "Developer"
rank: 10
---

Algorithmic trading is the process of using computers programmed to follow a pre-defined set of rules for automatically placing trades in order to generate profits at high speed and high frequency. The pre-defined sets of rules, called an algorithm, can range from quantitative strategies to machine learning models that can reference any data or combination thereof, e.g. prices, volume, or tweets/news feeds for sentiment analysis. Algo trading makes markets more liquid by introducing a large volume of trades and orders; unlike human traders, computers don't need to rest or sleep, are much faster at calculating and sending instructions, and don't suffer from emotions ([at least, not yet??](https://www.psychologytoday.com/us/blog/hot-thought/201712/will-robots-ever-have-emotions)).

In established markets such as equities and commodities, algorithmic trading has been dominated by highly sophisticated institutions that have invested heavily in developing proprietary strategies and infrastructure.  However, in the nascent cryptocurrency markets, algorithmic trading is becoming more accessible to individual traders and retail investors.  Exponential growth in the number of cryptocurrency exchanges has far outpaced the growth in market participants and trading activity.  As a result, a unique dynamic has arisen: (1) opportunities to capture profits using even comparatively primitive algorithmic strategies are possible, (2) the lack of a market close coupled with high market volatility makes automation and the ability to trade 24/7 essential, (3) some bots have been make open source or available to the public to encourage adoption and market participation.

Through our user interviews, we found one obstacle for developers to step their foot in crypto algo trading is a lack of understanding of trading strategies and financial concepts. This article will leverage useful external resources to answer the questions that might be lingering on your mind.  This post is intended to be a "live" document, that we will regularly update regularly with thoughtfully-selected readings and learning resources that we come across.

If you are completely new to this arena, the following two tutorials will lay a good foundation for you:

<!-- more -->

* [Coursera: Princeton University course on Cryptocurrencies](https://www.coursera.org/learn/cryptocurrency):
This course provides good overviews and explanations of blockchain technology and cryptocurrencies. Each week, it will upload around an hour of lecture content. You can control your own pace of learning and have a deeper dive into the topics that are most relevant to you.

* [Berkeley Blockchain: Intro to Crypto Trading](https://bab.teachable.com/):
This course presents a practical introduction to crypto trading. Its content includes mechanics of how to start trading, basic trading strategies, and various security as well as operational issues.

If you already have some experience with crypto trading, please skip the above section and read on!


### Mental prep
1. You have to **understand** the algorithms and strategies you will use or copy from elsewhere.
2. You have to spend some real effort to **do your own research** rather than rely on external sources or so-called expert opinions to make decisions.
3. For other important psychological and personality traits, you can check out this article - [5 Traits New Traders Should Embrace](https://medium.com/@cryptocreddy/5-traits-new-traders-should-embrace-983ff9fa5165).

![](./image2.jpeg)


### Overview of trading strategies
The strategies routinely used in traditional equity trading can also generally be applied to crypto trading. The strategies employed by most algo traders can be classified into three categories:

#### Technical analysis
Technical analysis (TA) is a trading strategy based on statistical trends gathered from historical data such as trading volume and price movement. One of the underlying assumptions of technical analysis is that the future price movement of a security follows a certain pattern, for which the historical data of trading activity acts as a useful indicator.

Commonly used technical indicators include moving averages such as Exponential Moving Average (EMA) and momentum indicators such as Moving Average Convergence Divergence (MACD) and Relative Strength Index (RSI). Many traders employ one or multiple indicators to generate buy and sell signals.

To grasp the basic idea behind different technical indicators, you can refer to this [List of Technical Indicators](https://www.tradingtechnologies.com/help/x-study/technical-indicator-definitions/list-of-technical-indicators/).

To learn more through free video lectures, click here: [CryptoCred Technical Analysis Lessons](https://docs.google.com/document/d/15c3rN15rkXldY8Te3GDG4NG7noaaoikydOoZQlElwXw/edit?usp=sharing).

Technical analysis works best for normalized and highly liquid markets. The challenge for applying TA to trading crypto is that the market is (1) still relatively new and (2) extremely volatile.  Since the market is new, there is limited data and pricing histories to analyze, making it difficult to identify any normalized or expected behaviors under different market conditions.  And since the market has limited liquidity and market participants, it is vulnerable to violent, unpredictable price swings.  TA analysis may be most effective during short-term "normalized" periods; but in the crypto world, this strategy must be carefully monitored since a material and rapid change in trading patterns may occur at an instant and at any given point in time.

#### Arbitrage
The concept of arbitrage is simple: buy low and sell high. These opportunities occasionally arise due to some type of market dislocation or inefficiency.  Some trading bots in the market are dedicated in spotting these opportunities and acting on them.

Examples of arbitrage strategies:

1. *Simple arbitrage*: buy low at one exchange and sell high at another when there exists price dislocation between different exchanges.

2. *Triangular arbitrage*: exchange the initial currency for a second, the second currency for a third, and the third currency for the initial. For instance if you hold ETH and are trying to arbitrage ZRX: (1) buy ZRX with ETH, (2) sell the ZRX for BTC, and (3) sell the BTC for ETH. This triangular arb turns what would be a (a) `ZRX-ETH` trade into a (a) `ZRX-ETH` + (b) `ETH-BTC` + (c) `BTC-ZRX` trade.  By introducing a seemingly unrelated variable (BTC), this strategy creates additional potential for price dislocations, since the three currency pairs (a, b, and c) are independently traded.

With increasing number of players participating in crypto trading, the arbitrage opportunities are scarce and hard to capture by individuals. Even when an opportunity arises once in a while, it tends to be short-lived as traders immediately take advantage of these imperfections until no spread exists anymore.

Here is an interesting article on `USDT(Tether)-USD` arbitrage - [Tether Arbitrage & The Dollar Peg](https://medium.com/@alexkruger/tether-arbitrage-the-dollar-peg-7da405f13ffc).

For more guides in cryptocurrency arbitrage, check out these two articles:
* [Cryptocurrency arbitrage made easy: A beginner’s guide](https://www.finder.com/cryptocurrency-arbitrage)
* [How to make money on arbitrage with cryptocurrencies](https://hackernoon.com/how-to-make-money-on-arbitrage-with-cryptocurrencies-6618bdad3ce1)

#### Market making
At many exchanges, you'll find takers and makers pay different transaction fees. Sometimes, makers can even get rebates or pay zero fees. Why? What is a taker, and what is a maker? Basically, takers *accept* existing buy or sell orders available in the market and are guaranteed execution, while makers *place* limit buy or sell orders at specified prices and sizes and wait for another party (the *taker*) to accept ("fill") their order.

![https://www.fidelity.com/learning-center/trading-investing/trading/market-limit-orders-video](./image1.png)

**Market making** involves simultaneously quoting bid (offers to buy) and ask (offers to sell) prices for the same assets on an exchange. By quoting prices at which market makers stand ready to buy and sell assets, they enable price discovery and liquid trading by other market participants.

Algo trading that employs market making strategies will automatically and continuously place both buy and sell limit orders with the goal of trying to profit from the difference between the bid and ask prices (the "*bid-ask spread*") over time.

This blog post demonstrates [a basic method of market making](https://medium.com/@CryptoKong123/market-making-strategy-example-staggered-orders-a8cd098889ee).

For more information on different market making strategies, please refer to [our whitepaper](https://hummingbot.io/hummingbot.pdf).


### How to choose which pairs to trade?
Less experienced traders may also wonder how to pick cryptocurrency pairs to trade. This is very subjective. You can trade your favorite coins with a goal to gain more of your favorite coins, you can observe price movements at a few different exchanges and try to spot opportunities, and you can also trade the coins you dislike in order to profit from shorting. It involves a lot of patience, and trials and errors. The key is to always have a goal and certain strategies in mind.


### Should I create my own bots?
Equipped with an in-depth understanding of their favorite trading strategies, developers can build their own trading bots in their favorite languages.

However, writing a bot is time-consuming and not easy. While creating the strategy itself may be straight forward, the challenge may come in creating reliability when the sector's infrastructure is unstable (exchange feeds/APIs go down all the time, trading on DEXs is subject to creating and handling blockchain transactions).  A lot of developers have told us that they were trying to create a bot themselves but couldn't make it work. Therefore, whether to write your own bot or try an existing one involves a cost-benefit analysis.

Here is a list of useful resources to get you started with bot building:

* [Let’s write a cryptocurrency bot](https://hummingbot.io/blog/2020-09-what-is-market-making/): This is a detailed walkthrough of how the author built his crypto trading bot.

* [How to build a bot in R?](https://towardsdatascience.com/build-a-cryptocurrency-trading-bot-with-r-1445c429e1b1): Be careful that the strategy demonstrated in this article using RSI might not be working due to oversimplification.

* [Get historical data from coinmarketcap](https://github.com/Alescontrela/coinmarketcap-history)


### Shall I use an existing bot?

An existing bot, especially an open-source one, can be a great alternative for developers who want to try algo trading. It definitely saves developer time and provides a base from which developers can tweak and customize.

That being said, it doesn't mean every bot is created equal. We recently posted [a crypto trading bot review about their ease of use](https://www.hummingbot.io/blog/2019-01-crypto-bot-reviews/). In that post, we shared with you what we found out after trying out 7 crypto trading bots available in the market.

In addition to user experience considerations, using existing bots entails various risks. You might easily lose money if you make a wrong bet, set wrong parameters, or even do not truly understand the algorithms employed by the bot.

Since we're designing Hummingbot to enable anyone to run a crypto market making bot, a simple, intuitive user experience is one of our core goals. More important, by focusing on a relatively low-risk strategy called **cross-exchange market making**, we believe that Hummingbot will be an easy start even for novice traders.


### Last question: How much do I need to get started?

Given the current market environment, the barrier to entry is particularly low for new crypto traders. If you are not comfortable investing a load of hard-earned money at first, starting with 1 or 2 ether (~$250) will do the work. FYI, we tested out 3commas with as little as 0.5 ether, and we earned 3 cents in 3 days. Having said that, transaction and withdrawal fees may eat into profits (as %) and might materially impact results given smaller and smaller trading amounts.
