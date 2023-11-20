---
date: 2023-03-04
authors:
  - community
categories:
  - Academy
tags:
  - Community Posts
---

# Common Hallmarks of Successful Miners

![cover](cover.jpg)

*by Kyle Mizui*

Hummingbot Miner has a [leaderboard](https://miner.hummingbot.io/leaderboard) that tracks the highest-paid miners on the platform. You might be wondering what the top miners are doing to earn thousands of dollars a week. This piece, resulting from discussions with some of the miners in the Eagle Club, aims to unveil what profitable miners do.

**1. Picking Pairs**

**2. Managing Inventory Risks**

**3. Setting Up Guardrails**

**4. Constant Experimentation**

**5. Joining a Community**


<!-- more -->

### **1. Picking Pairs**

Fundamentally, there are two approaches to picking a pair to mine: the conservative way and the riskier way. If you're new to Hummingbot, I recommend starting with the former.

#### **a. Conservative Way**

The risks associated with market-making can mostly be attributed to inventory risks (to learn more about inventory risk for market makers, see [this article]). Ideally, you'll want to pick assets you're comfortable holding. Common characteristics of these coins include:

- High Liquidity: These campaigns, generally favored by the Hummingbot community for their low-risk returns, are often mined by many miners. Use the [factor score](https://support.hummingbot.io/miner/factor-score-what-is-it-and-how-should-i-use-it) and try those in the stable or growth factor.
- High Market Cap: Check this at [Coingecko](https://www.coingecko.com/?ref=blog.hummingbot.org). Generally, coins in the top #100 in Market Cap ranking exhibit lower volatility and are less likely to be subject to price manipulation or rug pulls. A larger market cap means more holders, traders, exchange listings, and overall less volatility.
- Low Volatility: Assess a coin's volatility by examining its price and volume charts on [TradingView](https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP&ref=blog.hummingbot.org) or your preferred exchange. Ideally, these coins would have less than a 2% movement in a 1-minute span.

#### **b. Riskier Way**

Once you've safely traded the conservative way, understood your strategy's parameters, and want to grow your profits, consider higher yield pairs. If you haven't read our previous article on common pitfalls of traders, do so before proceeding.

In essence, for higher-risk pairs, you should:

1. **Try Them Out in Paper Mode**
      - Before investing all your capital, test your intended strategy in [paper mode](../how-to-use-advanced-market-making-features/index.md). Run it for a few days - or at least a few hours - to ensure profitability.
2. **Use Real but Lower Capital**
      - Paper and real markets differ, especially regarding slippage issues and latency. Test your strategy in real markets with smaller capital to verify its effectiveness.
3. **Grow Your Bot's Capital**
      - If everything is going well, increase your trading assets gradually.
4. **Monitor and Tweak**
      - Trading requires constant vigilance as market conditions change. Set fail-safes, optimize your bots, and be prepared for unforeseen events like exchange API downtimes.

### **2. Managing Inventory Risks**

Inventory risk occurs when the value of assets held for market-making or other strategies decreases. For example, as a market maker for BTC-USDT, you'd hold BTC and USDT. During a dip, your bot may buy BTC, and during a rise, it might sell, which is counterintuitive to the standard strategy of buying low and selling high. Here's a scenario: you set BTC bids at $10 around a mid-price of $11. A sudden dip to $9 triggers your bids and persists. This results in a temporary loss of $1 for each BTC bought. This loss is realized only if you sell your BTC below $10. Prices might recover or worsen. This is the risk market makers bear, and how they profit in horizontal markets. But in long-term directional price movements, you might end up holding less valuable tokens. Here’s a more detailed article on [inventory risks](../what-is-inventory-risk/index.md).

To manage inventory risks:

1. **Hedging**
      - Run a hedging strategy on another bot simultaneously with your trading bot. This approach aims to make your strategy market-neutral, unaffected by asset price movements. However, over-hedging can lead to increased fees.
2. **Run Arbitrage or Cross-Exchange Market Making**
      - These strategies typically maintain constant inventory over time, unlike pure market making. You can also hedge the inventory on the perpetuals market. Additionally, setting the maker market of the [cross-exchange market-making strategy](../../../strategies/cross-exchange-market-making.md) in line with a pair listed on Hummingbot rewards can earn you rewards for your limit orders.

### **3. Setting Up Guardrails**

Crypto markets can be volatile, posing risks for market makers. Setting up safety measures can minimize losses during volatile events. This typically involves using a kill switch and setting price floors and ceilings in pure market making.

#### **a. [Kill Switch](../../../global-configs/kill-switch.md)**

The kill switch is particularly useful for beginners. Setting a kill switch rate of -10% can prevent substantial overnight losses. However, setting it too low can lead to missed recovery gains. Learn more about the kill switch [here](../../../global-configs/kill-switch.md).

#### **b. Price Floors and Ceilings**

Review the coin's price chart and set your [price floors and ceilings](https://hummingbot.org/strategies/pure-market-making/?ref=blog.hummingbot.org) within a comfortable range to avoid buying above the ceiling or selling below the floor.

### **4. Constant Analysis and Experimentation**

Being a Hummingbot miner is like being a scientist. You hypothesize, experiment, tweak parameters, and gradually increase capital. Regularly documenting Profit and Loss (PnL) of each strategy, setting up Telegram bots for updates, and thoroughly researching coin charts are key practices.

### **5. Joining the Community**

While trading may seem like a zero-sum game, collaboration in the community can be more beneficial than solitary trading. My experience of mentoring and being mentored, and the collective support and solidarity within the community have significantly enhanced my trading skills. Engage in public channels, connect with others, and contribute your strengths. You'll likely find reciprocal value and a more meaningful, enjoyable trading experience. Start by asking questions in the [Discord](https://discord.com/invite/hummingbot?ref=blog.hummingbot.org) channels!


**Disclaimer:** The content of this article is provided by a community contributor and does not represent the views of Hummingbot Foundation. The content above does NOT constitute investment, financial, legal, or tax advice, nor does any of the information contained in this article constitute a recommendation, solicitation, or offer to buy or sell any digital assets, securities, options, or other financial instruments or other assets, or to provide any investment advice or service.
