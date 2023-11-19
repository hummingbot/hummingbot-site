---
date: 2022-01-02
authors:
  - foundation
categories:
  - Academy
tags:
  - Strategy Guides
---

# How to Use the Cross-Exchange Market Making Strategy

![cover](cover.webp)

Cross-exchange market making is a **maker-taker** strategy that involves conducting market-making trades between two markets: it involves placing limit orders in a market with lower liquidity and larger spreads, and placing market orders in a market with higher liquidity and smaller spreads whenever the limit orders are filled.

**Arbitrage** and **cross-exchange market making** are often considered "risk-free" because these strategies significantly reduce the main risk associated with market making: inventory risk. This characteristic makes these strategies more beginner-friendly. However, the primary risk that persists is execution risk.

This article will cover:
1. The fundamental principles of cross-exchange market making
2. The distinctions between cross-exchange market making, arbitrage, and pure market making strategies
3. The appropriate circumstances for employing this strategy

<!-- more -->

## Minimizing Inventory Risk with Cross-Exchange Market Making

While arbitrage and cross-exchange market making are frequently deemed "risk-free" due to their substantial reduction of the primary risk in market making—inventory risk—the predominant remaining risk is that of execution. For further details, please refer to the following blog post:

[What is Cross-Exchange Market Making?](../what-is-cross-exchange-market-making/index.md)

> **What is Cross-Exchange Market Making?**  
> by Paulo Henrique Welcome back to our Educational Center, where we aim to enhance your understanding of market making, arbitrage, and all facets of algorithmic trading. In today's discussion, we delve into one of the key strategies applicable in hummingbot: cross-exchange market making.

## Conceptualizing the Cross-Exchange Market Making Strategy

Although our video is somewhat outdated in terms of the Hummingbot UI, it effectively explains the concept of the cross-exchange market making strategy.

[Cross-exchange market making strategy](https://www.youtube.com/embed/jVIagFbQnmo)

In essence, this strategy involves market making on a less liquid exchange or pair while taking positions from a more liquid market. Your pricing decisions for orders are based on the cost implications of buying or selling the asset in the alternative market.

Imagine living in a remote area with a fair population but limited shopping options, characterizing an illiquid market.

![Illiquid Market](image_5.jpg)

Conversely, a liquid market is akin to a bustling city's commercial district, brimming with shopping centers and stores offering similar goods and services.

![Liquid Market](image_6.jpg)

Due to intense competition in urban areas, stores frequently adjust their prices to attract customers. However, in less accessible areas, prices are often higher due to additional expenses such as taxes (analogous to fees) and transportation costs. This economic dynamic also impacts the resale value of used items.

Consider you establish STORE A in your area to buy and sell various goods, thereby enhancing market liquidity. Let's refer to the urban stores as STORE B. You would also need an initial inventory, including cash for purchasing items and merchandise for sale.

### Implementing a Sell Order in the Maker Market and Executing a Buy Order in the Taker Market

Suppose you intend to sell an item with a 20% profit margin. You find that STORE B offers the same item for $100 (excluding tax).

Initially, you consider a selling price of $120, but you must account for taxes (fees) incurred during the transactions. With taxes at 0.1% and two trades involved (selling and buying), your selling price needs to be adjusted to $120.22:


```
$120 + $0.12 tax ( 0.1% for selling at $120 ) + $0.1 tax ( 0.1% for buying at $100 )
```


Once your item sells, you purchase the same item from STORE B for $100.1, including tax, thus netting a $20 profit from the transaction.

### Initiating a Buy Order in the Maker Market and Executing a Sell Order in the Taker Market

This process is essentially the reverse of the previous example. Here, your buying price is determined by the potential profit from selling the item in a more liquid market.

## Cross-Exchange Market Making in Practice

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/gwLjSe0t8K8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
