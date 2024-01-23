---
date: 2021-02-18
authors:
  - coinalpha
categories:
  - Academy
tags:
  - Running Hummingbot
---

# Order Management Configurations

![](cover.webp)

Welcome to our series where we delve into all possible configurations of Hummingbot, exploring the underlying concepts. In this installment, we focus on Order Management, covering:

* The essentials of order management for market makers;
* Managing orders using the Hummingbot Client;
* The rationale behind traders' frequent offer adjustments in order books;
* Understanding and implementing order optimization;
* Enhancing order management with scripts.

Missed our previous articles? Catch up here:

<!-- more -->

[Title](../commands-and-configs-part-1/index.md)

* [Hummingbot Commands - Part 1](../commands-and-configs-part-1/index.md)
* [Hummingbot Commands and Configurations - Part 2](../commands-and-configs-part-2/index.md)
* [Price Sources and Price Types](../commands-and-configs-price-source/index.md)

## Order Management: The Market Maker's Survival Toolkit

You've installed Hummingbot, initiated a `pure_market_making` strategy, and started it. Perhaps you’re now anticipating profits with minimal further intervention. While automation is a key feature (and there are ways to enhance it), it's unwise to entirely disregard ongoing bot management.

As discussed in our [introduction article](../what-is-market-making/index.md), market-making profits primarily derive from capturing the market spread, optimally in a sideways-moving market.

![Market Sideways](./sideway.png)

However, markets are dynamic. Successfully capturing market spreads involves discerning whether current order flows originate from informed or uninformed traders.

## Informed vs. Uninformed Traders: A Critical Distinction

Market participants have varied motives for trading specific assets, but fundamentally, these motives are either informed or uninformed. 

An **uninformed trade** ignores the anticipated market price direction in the near or distant future. Conversely, an **informed trade** leverages available information (such as insider insights, fundamental, or technical analysis) to align with the predicted price movement.

**Market makers** thrive on **uninformed trades**, which suggest no clear price direction and potentially longer periods of sideways movement, enabling more spread capture.

## Adaptation Equals Survival

In a market dominated by **uninformed traders**, **market makers** could simply set their desired spread and activate their bots. However, the entrance of **informed traders** often signals an imminent directional shift, posing a risk, as discussed in our [inventory risk article](../what-is-inventory-risk/index.md). In response, market makers may adjust spreads differently for uptrends and downtrends to mitigate risk.

Adapting to these dynamics is essential, and **order management** is the primary tool for this.

## Managing Orders with Hummingbot

Hummingbot users can tailor their order management strategy using the `config` command. Key strategy parameters related to order management include:

#### **bid_spread & ask_spread**

Adjusting bid and ask spreads is central to market-making strategies. This parameter sets the percentage from the `price_type` for order creation. Spreads may be modified in response to changing market conditions or volatility. For further details on price configurations, see [this article](../commands-and-configs-price-source/index.md).

#### **order_amount**

The size of each order is critical. Incorrect sizing could deplete your inventory, limiting trading ability. The chosen `order_amount` must align with your overall strategy and account for factors like existing inventory and market conditions.

#### **order_refresh_time & filled_order_delay**

These settings control the frequency of order creation and cancellation, distinguishing between High Frequency and Low Frequency trading strategies. Finding a balance is crucial to avoid missing opportunities or making undesirable trades.

#### **order_refresh_tolerance_pct**

This setting helps maintain order priority in the order book. A non-zero `order_refresh_tolerance_pct` prevents order cancellation and recreation for minor price changes, thus retaining your position in the order queue.

#### **minimum_spread**

Setting a `minimum_spread` ensures your orders maintain a minimum distance from the market price, adjusting dynamically to market movements.

## Sample Configuration

```json
- bid_spread : 0.50
- ask_spread : 0.50
- minimum_spread : 0.49
- order_refresh_time : 60.0
```

With the configuration above, buy and sell orders are set at a 0.5% spread from the mid-price.

```
00:28:31 - Creating 1 bid orders at (Size, Price): ['0.05 ETH, 227.41USDC']
00:28:31 - Creating 1 ask orders at (Size, Price): ['0.05 ETH, 229.69USDC']
00:28:31 - Created LIMIT_MAKER BUY order x-XEKWYICX-BEHUC1593217711001924 for 0.05000000 ETHUSDC.
00:28:31 - Created LIMIT_MAKER SELL order x-XEKWYICX-SEHUC1593217711002203 for 0.05000000 ETHUSDC.
```

```
Orders:
   Level  Type  Price Spread Amount (Orig)  Amount (Adj)       Age
       1  sell 229.69  0.49%          0.05          0.05  00:00:00
       1   buy 227.41  0.50%          0.05          0.05  00:00:00
```

Even before the 60 seconds refresh time was up, the sell order was cancelled when its spread went below the minimum.

```
00:28:40 - Order is below minimum spread (0.0049). Cancelling Order: (Sell) ID - x-XEKWYICX-SEHUC1593217711002203
00:28:40 - Cancelling the limit order x-XEKWYICX-SEHUC1593217711002203.
```

```
Orders:
   Level Type  Price Spread Amount (Orig)  Amount (Adj)       Age
       1  buy 227.41  0.52%          0.05          0.05  00:00:12
```

In the next order refresh new buy and sell orders with 0.5% spreads will be created.

## Conclusion

Your market-making strategy might be straightforward or use a hundred different indicators to make calculations and decisions of what must be done.

But keep in mind that, at the end of this process, a fundamental question must be asked (and answered):

**What must be done with the orders?**

How and when the orders must be created (or canceled) on the market is the final decision that your strategy must answer. Understanding how orders are managed is a crucial piece of finding a profitable strategy.


## Join our community

Our community is full of market makers and arbitrageurs who are willing to help each other make the best use of Hummingbot. You can join our [Discord channel](https://discord.com/invite/hummingbot) to talk about the hummingbot, strategies, liquidity mining, and anything else related to the cryptocurrency world and receive direct support from our team.

To keep up with the news and updates, make sure to follow us on [Twitter](https://twitter.com/hummingbot_io) and our Community on [Reddit](https://www.reddit.com/r/Hummingbot/).

On our[Youtube Channel](https://www.youtube.com/channel/UCxzzdEnDRbylLMWmaMjywOA?sub_confirmation=1), you can find a lot of content about market making, including interviews with professional traders and cryptocurrency-related events.
