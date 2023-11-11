---
date: 2023-01-01
authors:
  - foundation
categories:
  - Academy
tags:
  - Arbitrage and Cross-Exchange Market Making Strategies
---

# How to Use the New Spot-perpetual Arbitrage Strategy

![cover](cover.png)

Welcome back to the Hummingbot Academy!

There is always something new to explore with a Hummingbot release, and 0.37 is no exception.

There are two significant improvements to our favorite algorithm trading robot in this new version:

*   Perpetual Protocol connector: a new decentralized AMM protocol for derivatives markets running on the Ethereum’s layer 2 xDai
*   Spot-perpetual markets arbitrage strategy: a brand new strategy that allows our traders to take advantage of price differences between these types of markets.

In today’s article, we will explore what is behind the new spot-perpetual arbitrage strategy, help you understand the logic behind it, and discuss how to find good trading opportunities.


<!-- more -->

## What Exactly is a Futures Market?

Spot markets are pretty simple: you set a price at which you want to buy or sell an asset, and when the deal happens, buyers and sellers settle the exchange.

Futures markets are slightly different: you aren't trading the actual asset but rather a contractual promise to deliver the underlying asset on a future date.

Although future contracts are one of the main instruments used by traders looking to profit from price movement speculation due to the high leverage possibilities, the reason these markets exist is a bit more practical: they are a way for commodities production chain participants (producers, exporters, miners, etc.) to reduce the risk of price fluctuation.

For example, a rice farmer that just started his cultivation for the next season (fun fact: rice takes around 130 days to be ready for harvest) could sell a future rice contract at the current price if he isn’t sure what the price will be at harvest.


![Rice plantation](./rice-plantation1.jpg)
_Rice plantation at Itigi Tanzania. Source: [Wikimedia commons](https://commons.wikimedia.org/wiki/File:Rice_at_plantation_at_Itigi_Tanzania.jpg)_

If the price goes down in the future, he will have assured his profit margin and avoided a loss. If the rice price goes up, he could have had a more significant profit, but at least he was protected from uncertainty.

On the other side of the trade, we could have a food processing industry that wanted to make sure that the rice products he plans to manufacture after the harvest will have the exact raw material cost as today.


## Contract Expiration Dates

Futures contracts are traded independently from the underlying asset price. Their market price reflects the expectation for that asset in the future: If market participants expect the asset price to rise, the futures contract will usually be priced higher than the asset.

Historically, every futures contract has an expiration date. As the expiration date gets closer, the futures contract’s price difference and the underlying asset spot market price will be zero (or very close to it).

This convergence can be seen comparing their prices over time. For example, take a look at the price difference between the BTCUSDT spot market (blue line) and the Bitcoin futures contract that expires on 03-26 (orange line):


![](./market-start.png)
**2.49% difference on the first day of trading.**




![](./market-end.png)

**1.25% difference 15 days before the expiration date.**

As explained on [Investopedia.com](https://www.investopedia.com/terms/c/convergence.asp#:~:text=What%20Is%20Convergence%3F,as%20the%20delivery%20date%20approaches.&text=The%20two%20prices%20must%20converge,for%20a%20risk%2Dfree%20profit.), *“convergence happens because the market will not allow the same commodity to trade at two different prices at the same place at the same time. For example, you rarely see two gasoline stations on the same block with two very different gas prices at the pump. Car owners will simply drive to the place with the lower price.”*


## Perpetual Contracts: Futures Markets Without Expiration Date

Although the idea of future contracts without an expiration date has existed since 1992 (proposed by the economist [Robert Shiller](https://en.wikipedia.org/wiki/Robert_J._Shiller)), it was only in 2016 that the world saw an actual use case for them on the BitMEX Bitcoin perpetual futures.

“How is the price going to converge if there isn’t an expiration date?” you might wonder.

This is where the funding rate payments enter the game. Usually, every eight hours (the timing can differ depending on the exchange. Perpetual protocol uses a one-hour timer), a funding payment round happens, where traders pay each other depending on the positions they have opened at that time.

You can read [this detailed article about how funding rates work](https://medium.com/derivadex/what-is-the-funding-rate-for-perpetual-swaps-a0335c4228a9), but in short, the signal of the funding rate reflects the difference between spot and perpetual prices:

```
if perpetual price > spot price => funding_rate is positive
if perpetual price < spot price => funding_rate is negative
```

also,

*   If the funding rate is positive, long traders pay short traders
*   If it is negative, short traders pay long traders

The expected result is that due to leverage, some liquidation will happen, and the perpetual market price will be pushed closer to the spot market price.


## So, Where is the Arbitrage Opportunity?

It’s all about price convergence.

As we have discussed, futures and spot markets’ prices will always tend to move towards the same value over time.

Let’s do some quick math to see how this arbitrage would work (not considering fees):

On day 1, we have the following prices:

**BTC perpetual price: $51000**

**BTC spot price: $50000**

The arbitrage starts by opening a short position on the perpetual market and buying the exact BTC amount on the spot market. Let’s use the order size of 1 BTC here.

On day 2, the prices converge:

**BTC perpetual price: $52000**

**BTC spot price: $52000**

In that situation, we close the arbitrage and calculate the results of the operation:

Perpetual result: **- $1000**

Spot result: **+ $2000**

**Final profit: + $1000**

Yes, it is that simple.

There are, however, a few risks that must be considered.


## What are the Risks?

While this strategy can be considered low risk, there are still some dangers we should talk about:

Note: we will only cover spot-perpetual arbitrage risks because this is the strategy you can use with hummingbot. Traditional futures contracts have their kinds of arbitrage risks. 

**Liquidation:** Future markets are traded with leverage. In the case of price convergence taking too long to happen, the trader has the risk of being liquidated if the leverage used is too big. Use leverage with care.

**Execution:** It takes some time between the detection of an opportunity and the execution. If the execution happens too long after the detection, prices might have moved, and the opportunity will be gone, or even be executed at worse prices.

**Liquidity:** Markets with low liquidity usually have thin order books. Depending on the size of your order, you might end up moving the price with it. Also, if many other High-Frequency bots are participating in that market, you can have a case of “fake liquidity.”


## How to Start Arbitraging with Hummingbot

With version 0.37 of Hummingbot, we launched a new strategy called `spot_perpetual_arbitrage` that can be configured using the `create` command.



![](./hbot-config.png "image_tooltip")


You will then be asked the following questions:

`Enter a spot connector`

Pick what spot exchange your want to trade on the spot side.

`Enter the token trading pair you would like to trade on &lt;spot connector>`

What is the trading pair you will trade on the spot market?

`Enter a derivative name`

Choose the perpetual exchange you want to trade against.

`Enter the token trading pair you would like to trade on &lt;perpetual connector>`

What perpetual market trading pair you will be arbitraging against on the perpetual contract side?

`What is the amount of BTC per order?`

This is the size of the orders that will be created on both sides. Note that on the perpetual side, the position value will depend on the leverage you will be using.

`How much leverage would you like to use on the derivative exchange?`

Again, be careful with the value you input here because a high leverage value might cause your positions to be liquidated if the market moves against your perpetual market position.

`What is the minimum spread between the spot and derivative market price before starting an arbitrage?`

Here you will define the value `min_divergence` value. When the price difference between both markets is above this value, the bot will execute a trade on the spot market and open an opposing position on the perpetual market.

`What is the minimum spread between the spot and derivative market price before closing and existing arbitrage?`

This is the price difference between the markets where you want the bot to close the arbitrage. You usually want this value to be 0, meaning that prices would be the same. But since it might take a long time for this to happen (if ever), which could increase the risk of liquidation, you might want to set this value above zero (but below `min_divergence`).

`Would you like to take advantage of the funding rate on the derivative exchange, even if min convergence is reached during funding time?`

If `False`, the bot will ignore the funding payment time and close the arbitrage any time the `min_convergence` value is reached. If set to `True`, when the funding payment is near, two things will happen:



*   If there are no arbitrage positions opened, the bot will wait until after the funding is paid to look for opportunities;
*   The bot won’t close the arbitrage if you will be receiving the funding payment, even if the prices converge.

`How much buffer do you want to add to the price to account for slippage for orders on the spot/derivative market?`

The market prices might change a bit between the moment the opportunity is detected and when orders are sent to the exchanges. The slippage value you set here works as an execution margin to ensure that your orders will be executed. However, be careful setting these values too high, or you might have them completed at a bad price.

`Enter a new file name for your configuration`

As with any other strategy, name the strategy file so you can use `import` to load it again if you restart the bot.

And there you go. All you have to do now is enter `start` and watch the bot look for arbitrage opportunities!


## Join our community



Our community is full of market makers and arbitrageurs who are willing to help each other make the best use of Hummingbot. You can join our [Discord channel](https://discord.com/invite/2MN3UWg) to talk about the hummingbot, strategies, liquidity mining, and anything else related to the cryptocurrency world and receive direct support from our team.

To keep up with the news and updates, make sure to follow us on [Twitter](https://twitter.com/hummingbot_io) and our Community on [Reddit](https://www.reddit.com/r/Hummingbot/).

You can find a lot of content about market making on our [Youtube Channel](https://www.youtube.com/channel/UCxzzdEnDRbylLMWmaMjywOA?sub_confirmation=1),  including interviews with professional traders and news about cryptocurrency-related events.
