---
date: 2019-03-22
authors:
  - mike
categories:
  - Podcasts
---

# How to Think about Liquidity - BlockCrunch

![Alt text](cover.webp)

This post is adapted from a [BlockCrunch podcast](https://blockcrunch.libsyn.com/dissecting-liquidity-market-making-in-crypto-michael-feng-hummingbot) featuring Michael Feng, co-founder of Hummingbot.

### Why is Liquidity Beneficial for Exchanges and Token Projects?
Liquidity offers a major benefit of **price discovery**: ensuring market prices are fair. When purchasing liquid assets like Apple shares from platforms like Robinhood or E*TRADE, you're assured that reselling them won't lead to significant losses. Conversely, in less liquid markets, such as certain crypto markets, you might encounter a situation where the buying price is 20% higher than the selling price, a phenomenon known as the bid-ask spread.

<!-- more -->

This discrepancy impacts issuers in various ways:
1. Raising new capital becomes challenging due to the vast bid-ask spread in secondary markets.
2. If users require the asset for usage, they face higher costs due to limited supply.

Liquidity's advantages are universal. For new tokens, liquidity is crucial as investors seek to buy or sell. Illiquidity undermines market confidence in fair pricing. A 20% bid-ask spread, for instance, means a loss of 20% in value immediately upon purchase. This situation deters trading activity.

### What are the Negative Effects of Illiquidity?
Launching an asset without sufficient market-making infrastructure leads to a dysfunctional market and depressed asset prices. My experience in finance, which I detailed in a previous [blog post](../../../academy-content/posts/the-thin-crust-of-liquidity/index.md), supports this view.

While markets can become liquid independently, especially when fundamental frameworks for asset evaluation exist, today’s crypto market, driven by technical factors like supply and demand, benefits significantly from market makers. They play a vital role in reducing bid-ask spreads and facilitating efficient price discovery.

### How Much Money Can You Earn with Hummingbot?
Earning through Hummingbot, via market making and arbitrage strategies, is akin to fishing: success depends on being in the right markets at the right time. Like a popular fishing spot, crowded trades eventually lose their profitability. Nevertheless, adept traders continually seek fresh opportunities.

For instance, the significant arbitrage opportunities seen in the Korea to non-Korea exchange arbitrage towards the end of 2017 are unlikely to recur, as infrastructures have evolved to eliminate such discrepancies.

However, the burgeoning **#DeFi** (decentralized finance) space, with new instruments like stablecoins and decentralized loans, presents market inefficiencies ripe for exploitation through programmatic trading strategies. For example, there was a time when you could borrow DAI at 2% from MakerDAO and lend it on Compound for around 10%.

The continuous emergence of decentralized financial assets and a fragmented exchange landscape will perpetuate inefficiencies and arbitrage opportunities.

![](./image1.jpg)

### What Types of Markets are Best for Hummingbot Users?
Major market makers in crypto, such as Jump Trading and DRW Cumberland, focus on highly liquid pairs on large exchanges, like BTC/USDT on Binance or ETH/USD on Coinbase. Conversely, **long tail markets**, like WETH/DAI on Radar Relay, remain underserved due to a lack of smaller market makers. These markets present ideal opportunities for Hummingbot users for two reasons:

1. Direct Market Access: Crypto markets uniquely allow individuals to trade without intermediaries like brokers, opening up strategies like market making and arbitrage that are less accessible in equity markets.

2. Global Competition: Unlike fiat exchanges that largely compete within national boundaries, crypto exchanges and protocols operate in a global competitive landscape. This competition necessitates liquidity to be effective, making tools like Hummingbot invaluable for smaller markets seeking to achieve critical liquidity levels.

### Does Integrating with Both Centralized and Decentralized Exchanges Make Hummingbot Difficult to Use?
Integrating with both centralized and decentralized exchanges complicates initial setup, requiring users to manage wallets, Ethereum nodes, and API keys. However, these complexities create market inefficiencies that can be exploited.

Trading on centralized exchanges differs markedly from decentralized exchanges (DEXs). Effective trading on a DEX requires considering factors like gas costs, node reliability, blockchain congestion, and front-running risks.

We aim to simplify these complexities for users, providing an open infrastructure that enables experimentation with various exchanges and strategies to discover effective trading methods.

### As More People Use Hummingbot, Will That Lead to Diminishing Returns for Users?
Saturation remains a concern, but we mitigate this risk by continually supporting new exchanges and protocols and facilitating user-configured strategies. The scope of opportunities is limited only by the creativity and resourcefulness of our users.

While future versions of Hummingbot aim for simplicity, the current design caters to users eager to explore untapped opportunities rather than those easily accessible to all.

### What is Hummingbot’s Business Model?
Our monetization strategy aligns with common practices in open-source projects. We use an **open core** model, where the base software is free and open source, supplemented by premium modules for institutional use.

These premium modules, tailored for crypto funds, market makers, and projects, focus on aspects like security and OMS/EMS (order management system/execution management system) integrations. Our advanced, Cython-based backtesting framework and sub-second order book data allow us to develop sophisticated, machine learning-based strategies.
