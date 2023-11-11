---
date: 2023-01-01
authors:
  - foundation
categories:
  - Academy
tags:
  - Market Making and Algo Trading Basics
---

# Getting Started with Algo Trading

![](./image0.jpg)

Algorithmic trading is the process of using computers programmed to follow a pre-defined set of rules for automatically placing trades in order to generate profits at high speed and high frequency. These are called **bots**.

The pre-defined sets of rules, called an algorithm, can range from quantitative strategies to machine learning models that can reference any data or combination thereof, e.g. prices, volume, or tweets/news feeds for sentiment analysis. 

Algo trading makes markets more liquid by introducing a large volume of trades and orders. Unlike human traders, computers don't need to rest or sleep, are much faster at calculating and sending instructions, and don't suffer from emotions ([at least, not yet??](https://www.psychologytoday.com/us/blog/hot-thought/201712/will-robots-ever-have-emotions)).

<!-- more -->

## Algo Trading for Individuals

In established markets such as equities and commodities, algorithmic trading has been dominated by highly sophisticated institutions that have invested heavily in developing proprietary strategies and infrastructure.  

However, in the nascent cryptocurrency markets, algorithmic trading is becoming more accessible to individual traders and retail investors.  Exponential growth in the number of cryptocurrency exchanges has far outpaced the growth in market participants and trading activity.  As a result, a unique dynamic has arisen: 

1. Opportunities to capture profits using even comparatively primitive algorithmic strategies are possible.
2. The lack of a market close coupled with high market volatility makes automation and the ability to trade 24/7 essential
3. Some bots have been make open source or available to the public to encourage adoption and market participation.

## Getting Started

Through our user interviews, we found one obstacle for developers to step their foot in crypto algo trading is a lack of understanding of trading strategies and financial concepts. This article will leverage useful external resources to answer the questions that might be lingering on your mind.

If you are completely new to this arena, the following tutorials may lay a good foundation for you:

* [Whiteboard Crypto](https://www.youtube.com/c/whiteboardcrypto)
* [Binance Academy](https://academy.binance.com/)
* [Coinbase Learn](https://www.coinbase.com/learn)

If you already have some experience with crypto trading, please skip the above section and read on!

## Mental Preparation

1. You have to **understand** the algorithms and strategies you will use or copy from elsewhere.
2. You have to spend some real effort to **do your own research** rather than rely on external sources or so-called expert opinions to make decisions.
3. For other important psychological and personality traits, you can check out this article - [5 Traits New Traders Should Embrace](https://medium.com/@cryptocreddy/5-traits-new-traders-should-embrace-983ff9fa5165).

![](./image2.jpeg)


## Basic Strategies

The strategies routinely used in traditional equity trading can also generally be applied to crypto trading. The strategies employed by most algo traders can be classified into three categories:

### Technical analysis

Technical analysis (TA) is a trading strategy based on statistical trends gathered from historical data such as trading volume and price movement. One of the underlying assumptions of technical analysis is that the future price movement of a security follows a certain pattern, for which the historical data of trading activity acts as a useful indicator.

Commonly used technical indicators include moving averages such as Exponential Moving Average (EMA) and momentum indicators such as Moving Average Convergence Divergence (MACD) and Relative Strength Index (RSI). Many traders employ one or multiple indicators to generate buy and sell signals.

To grasp the basic idea behind different technical indicators, you can refer to this [List of Technical Indicators](https://www.tradingtechnologies.com/help/x-study/technical-indicator-definitions/list-of-technical-indicators/).

To learn more through free video lectures, click here: [CryptoCred Technical Analysis Lessons](https://docs.google.com/document/d/15c3rN15rkXldY8Te3GDG4NG7noaaoikydOoZQlElwXw/edit?usp=sharing).

Technical analysis works best for normalized and highly liquid markets. The challenge for applying TA to trading crypto is that the market is (1) still relatively new and (2) extremely volatile.  Since the market is new, there is limited data and pricing histories to analyze, making it difficult to identify any normalized or expected behaviors under different market conditions.  And since the market has limited liquidity and market participants, it is vulnerable to violent, unpredictable price swings.  TA analysis may be most effective during short-term "normalized" periods; but in the crypto world, this strategy must be carefully monitored since a material and rapid change in trading patterns may occur at an instant and at any given point in time.

### Arbitrage

The concept of arbitrage is simple: buy low and sell high. These opportunities occasionally arise due to some type of market dislocation or inefficiency.  Some trading bots in the market are dedicated in spotting these opportunities and acting on them.

Here are some examples of arbitrage strategies:

1. *Simple arbitrage*: buy low at one exchange and sell high at another when there exists price dislocation between different exchanges.

2. *Triangular arbitrage*: exchange the initial currency for a second, the second currency for a third, and the third currency for the initial. For instance if you hold ETH and are trying to arbitrage ZRX: (1) buy ZRX with ETH, (2) sell the ZRX for BTC, and (3) sell the BTC for ETH. This triangular arb turns what would be a (a) `ZRX-ETH` trade into a (a) `ZRX-ETH` + (b) `ETH-BTC` + (c) `BTC-ZRX` trade.  By introducing a seemingly unrelated variable (BTC), this strategy creates additional potential for price dislocations, since the three currency pairs (a, b, and c) are independently traded.

3. *AMM arbitrage*: leverage the price differences between automated market makers (AMMs) and other types of exchanges. In essence, an AMM is a type of decentralized exchange that relies on a mathematical formula to price assets. Rather than using a traditional order book like centralized exchanges, prices on an AMM are determined by the ratio of two assets in a liquidity pool. Arbitrageurs can profit when the price of an asset on an AMM diverges from its price on traditional exchanges. The process involves:

   - Identifying a price discrepancy where an asset is cheaper on an AMM compared to a centralized exchange or another AMM.
   - Purchasing the undervalued asset on the AMM.
   - Simultaneously selling the same asset at the higher price on the other exchange.
   - Repeating this process in reverse if a discrepancy is found in the opposite direction.

This arbitrage strategy exploits the unique way AMMs respond to market dynamics, often reacting more slowly to price changes than order book-based exchanges. It contributes to the efficiency of the market by correcting these price disparities, ensuring that the prices on AMMs reflect those on centralized exchanges or other liquidity sources.

With increasing number of players participating in crypto trading, the arbitrage opportunities are scarce and hard to capture by individuals. Even when an opportunity arises once in a while, it tends to be short-lived as traders immediately take advantage of these imperfections until no spread exists anymore. 

For this reason, Hummingbot supports many decentralized exchanges and centralized exchanges, so that users can find longer-tail arbitrage corridors.

For more guides in cryptocurrency arbitrage, check out these articles:
* [Tether Arbitrage & The Dollar Peg](https://medium.com/@alexkruger/tether-arbitrage-the-dollar-peg-7da405f13ffc)
* [Cryptocurrency arbitrage made easy: A beginner’s guide](https://www.finder.com/cryptocurrency-arbitrage)
* [How to make money on arbitrage with cryptocurrencies](https://hackernoon.com/how-to-make-money-on-arbitrage-with-cryptocurrencies-6618bdad3ce1)

### Market making

At many exchanges, you'll find takers and makers pay different transaction fees. Sometimes, makers can even get rebates or pay zero fees. Why? What is a taker, and what is a maker? Basically, takers *accept* existing buy or sell orders available in the market and are guaranteed execution, while makers *place* limit buy or sell orders at specified prices and sizes and wait for another party (the *taker*) to accept ("fill") their order.

![https://www.fidelity.com/learning-center/trading-investing/trading/market-limit-orders-video](./image1.png)

**Market making** involves simultaneously quoting bid (offers to buy) and ask (offers to sell) prices for the same assets on an exchange. By quoting prices at which market makers stand ready to buy and sell assets, they enable price discovery and liquid trading by other market participants.

Algo trading that employs market making strategies will automatically and continuously place both buy and sell limit orders with the goal of trying to profit from the difference between the bid and ask prices (the "*bid-ask spread*") over time.

For more information on different market making strategies, please refer to the [Humminbot whitepaper](/hummingbot.pdf).

