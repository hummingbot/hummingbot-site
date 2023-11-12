---
date: 2020-06-18
authors:
  - community
categories:
  - Academy
tags:
  - Market Making Basics
  - Community Posts
---

# My Take on Market Making: Understanding Profits and Risks

![cover](cover.png)

*By phgnomo*

The essence of a market making strategy hinges on the prompt fulfillment of both buy and sell orders. Typically, the price movement of an asset follows a pattern where it oscillates within a certain price range, occasionally deviating from this range to begin an upward or downward trend, before eventually settling into a new range at a different price level.

## Optimal Spread in Market Making

Market making profits primarily occur when prices fluctuate within a range. To capitalize on this, market makers must identify the optimal spread— the difference between the buy and sell prices—where the market price oscillates from the lowest to the highest points as illustrated here:

![](https://www.tradingview.com/x/6lb6ZcHq/)

<!-- more -->

## Impact of Spread Size

### Small vs. Large Spreads

The size of the spread impacts the trading frequency and profit margin. Large spreads result in fewer transactions but higher profits per trade, whereas small spreads lead to more frequent trades with smaller margins. However, larger spreads can increase inventory risk due to the extended time required for the opposite order to be filled.

![](https://www.tradingview.com/x/ZmkdRRum/)

- Small spread (blue line): the opposing order was filled in 4 hours.
- Large spread (green line): it took 6 hours and 30 minutes to fill the opposing order.

### Inventory Risk and Trade Duration

With larger spreads, market makers may be stuck with short inventory for an additional 2.5 hours compared to smaller spreads. This duration can be critical in volatile markets, as exemplified here:

![](https://www.tradingview.com/x/OnO6Av1U/)

If the price does not reach the desired point and moves in the opposite direction, the market maker may be stuck for even longer until the opposing orders are fulfilled.

## Inventory Risk Explained

Inventory risk is not merely about trading frequency; it involves the danger of not completing the opposing trade. Market makers must decide whether to close the trade at a loss or hold the position longer, which can result in various costs, especially for larger market makers.

## Market Volatility and Spread Adjustment

### Adjusting to Volatility

High volatility suggests that prices are more likely to move within a wider range, justifying larger spreads for quicker order fulfillment. In contrast, low volatility requires tighter spreads to ensure both orders are filled.

### Inventory Risk vs. Directional Risk

Traders may confuse inventory risk with directional risk, which arises when prices start trending in one direction. Directional risk can exacerbate inventory risk, especially if one side of the orders begins filling faster than the other, as occurred with RLCETH today:

![](https://www.tradingview.com/x/ge8cncua/)

### Managing a Trend

When a price trend starts, market makers have two options: halt trades until the price returns to the desired range, or adjust spreads according to the trend direction.

## Conclusion

Ultimately, inventory risk pertains to the duration required to close both sides of a trade, not just the time taken to fill one side. It's about securing the anticipated profit by effectively managing both the spread and the market's volatility.

Join the discussion and learn more on [Discord](https://discord.hummingbot.io) or [Reddit](https://www.reddit.com/r/Hummingbot/).