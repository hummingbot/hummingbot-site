---
date: 2019-03-22
authors:
  - mike
categories:
  - Academy
tags:
  - Podcast Appearances
---


# How to Think about Liquidity - BlockCrunch

![Alt text](cover.jpg)

This post is adapted from a [BlockCrunch podcast](https://blockcrunch.libsyn.com/dissecting-liquidity-market-making-in-crypto-michael-feng-hummingbot) with Michael Feng, co-founder of Hummingbot.

### Why is liquidity beneficial for exchanges and token projects?
One of the major benefits of liquidity is **price discovery**: knowing that the market price is fair. When you buy shares of a liquid asset like Apple shares from Robinhood or E*TRADE, you know that if you change your mind, you can sell it back without incurring a lot of losses. On the other hand, when the market is very illiquid such as in long-tail crypto markets, you often see situations where the buy price is 20% higher than the sell price, where the gap is called the bid-ask spread.


<!-- more -->

This hurts issuers in different ways:
1. It’s hard for issuers to raise new capital if there is a gigantic big-ask spread in the secondary market.
2. If their users need to buy the asset in order to use it, it raises the price they need to pay because there is not much supply.

These benefits of liquidity apply to every market. For newly listed tokens, it’s especially difficult because a lot of people are looking to transact; existing investors are looking to sell and new investors are looking to buy. If the market is illiquid, it reduces market confidence that the current price is fair. Furthermore, with a 20% bid-ask spread, it means that immediately after you buy an asset, you're already down 20% because your sell price is 20% lower. These factors discourage market participants from trading the asset.

### What are the negative effects of illiquidity?
When you list an asset but you don't set up the market making infrastructure needed to make it liquid, it creates a non-functioning market and depresses the asset price. I experienced this firsthand when I worked in finance and wrote about it in a prior [blog post](../2019-01-thin-crust-of-liquidity/index.md#what-happens-when-you-list-an-illiquid-asset).

Markets can get liquid on their own once there are established fundamental frameworks for evaluating new assets, like valuing stocks based on price-to-earnings ratio. However, in today’s crypto landscape where assets trade based on technical factors (supply and demand) rather than fundamental ones, having market makers is very helpful for narrowing bid-ask spreads and enabling efficient price discovery.

### How much money can you earn with Hummingbot?
Hummingbot's market making and arbitrage strategies are a lot like fishing. If you're in the right markets at the right time, you can make a lot of money, but you have to constantly look for new spots.

After a while, other people find out about it and the trade gets crowded, just like a good fishing hole that gets over-fished. However, good traders, just like good fishermen, are always on the lookout for new opportunities.

For example, huge arbitrage opportunities like the Korea to non-Korea exchange arbitrage that was present at the end of 2017 are unlikely to appear again because people have developed infrastructure to close that gap.

But in today's market where the explosion of **#DeFi** (decentralized finance) has led to the creation of all types of new instruments such as stablecoins and decentralized loans, market inefficiencies appear that are begging to be exploited via programmatic trading strategies. Not too long ago, you could borrow DAI for 2% from MakerDAO and then lend it on Compound for about 10%.

As long as we have more and more decentralized financial assets and a fragmented exchange landscape, that will give rise to a lot of inefficiencies and arbitrage opportunities.

![](./image1.jpg)

### What types of markets are best for Hummingbot users?
There are some large market makers in crypto, like Jump Trading and DRW Cumberland. However, these large firm are really concentrated on the most liquid trading pairs on the largest exchanges, like the BTC/USDT pair on Binance or the ETH/USD pair on Coinbase.

On the other hand, there is the **long tail of markets**, such as the WETH/DAI trading pair on Radar Relay, that is currently underserved because there's a dearth of smaller market makers. Right now, long tail markets are ideal for Hummingbot users, because we see a congruence of two factors:

1. Individuals can actually trade on these markets because they don’t have to go through intermediaries like brokers. In crypto, we have something unique called **direct market access**: all exchanges offer APIs that allow anyone to trade directly on the exchange. This opens up strategies like market making and arbitrage that are harder in equities markets because you have to go through brokers and other intermediaries that snap up those opportunities before the average trader sees them.

2. Crypto exchanges and protocols need to compete globally. Fiat exchanges have something akin to an oligopoly because they only compete with other exchanges in the same country. But anyone, no matter where you're based, can create a crypto-to-crypto exchange and start competing with Binance. Similarly, anyone can create a decentralized lending protocol and start competing with Maker and Compound.

You have this **unfettered competitive landscape** where new entrants have the ability to challenge incumbents, but they still need to generate liquidity to compete effectively. That’s why we think a tool that can be used by almost anyone to provide liquidity is the best way for smaller markets to reach a critical mass of liquidity.

### Does integrating with both centralized and decentralized exchanges make Hummingbot hard to use?

It certainly adds to the upfront setup because our users need a wallet, an Ethereum node, as well as API keys on centralized exchanges.

However, that's precisely why there are market inefficiencies to exploit. From a technical perspective, trading on centralized exchanges is very different from trading on a DEX. To run a trading bot effectively on a DEX, you have to take into account gas costs, node reliability and speed, the impact of blockchain congestion, as well as the risk of being front-run.

We try to abstract as much of that as possible for users, but ultimately we hope that by providing open infrastructure that users can customize and build on top of, they can experiment with various combinations of exchanges and strategies and eventually figure out something that works.

### As more people use Hummingbot, will that lead to diminishing returns for users?
Saturation is definitely a risk that we are actively watching out for. However, we believe that if we continually add support for new exchanges and new protocols, and if we make it easy for users to configure strategies and create their own, the number of opportunities will be limited only by the imagination and creativity of our users.

While we intend on making it trivially simple to use in the future, Hummingbot is currently designed for users who want to discover the best opportunities out there, not the ones that everyone else is looking at.

### What is Hummingbot’s business model?
We’ll monetize Hummingbot in a very similar way to other open-source projects. We utilize an **open core** model, in which the base software is open source and free for individuals, and we create premium modules that are suited for institutions.

These premium modules, targeted at crypto funds, market makers, and projects, will address needs such as security, and OMS/EMS (order management system/execution management system) integrations. In addition, we have fine-grained, sub-second order book data and a proprietary Cython-based backtesting framework, which is much faster than off-the-shelf backtesting suites. This combination allows us to develop more sophisticated, machine learning-based strategies.
