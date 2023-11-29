---
date: 2019-05-02
authors:
  - coinalpha
categories:
  - Academy
tags:
  - User Interviews
---

# How I Started Crypto Trading - Manuel

![cover](cover.webp)

Welcome to the third interview in our series! Today, we're excited to introduce Manuel Zeiler, an experienced crypto trader and co-founder of the DApp discovery platform, [Token Valley](https://www.tokenvalley.com/).

Manuel once developed a crypto market-making bot that operated on IDEX, Bittrex, and HitBTC, achieving an impressive 10% monthly profit! He is currently pursuing his master's thesis in blockchain at the Munich School of Management.

Let's get to know Manuel!

![Manuel Zeiler](./image1.png)

*Disclaimer: All views expressed in this interview are solely those of the interviewee and do not represent the opinions of hummingbot.io.*

### How did you get into crypto trading? Have you traded other assets before?

I began trading cryptocurrencies in 2017, and interestingly, it was my first foray into trading of any kind. I hadn't dealt in stocks prior to this. My background in technology, particularly in blockchain, led me to explore trading. I started with classic arbitrage between EtherDelta and centralized exchanges in 2017, followed by market-making on both centralized and decentralized exchanges in 2018.

<!-- more -->

### How did you start in market making?

My intuition told me there were arbitrage opportunities between centralized exchanges and DEXs like IDEX. I developed a data scraping tool that used APIs to fetch prices every minute, discovering numerous "spread arbitrage" opportunities. My strategy involved quoting on IDEX and completing the counterfill on a centralized exchange. Initially, I didn't realize this was essentially market making.

The [cross-exchange market making strategy](../../../strategies/cross-exchange-market-making.md) used by Hummingbot mirrors what I did. I was thrilled to see a team with more resources tackling this challenge. My efforts were self-funded, and I encountered issues with the immature APIs of DEXs, including mislabeled buy and sell signals, which required code adjustments.

It was an exciting journey, and I did make a profit. Once my bot was operational, I let it run on AWS and maintained it remotely.

> The ideal scenario involves legitimate coins, good spreads, and minimal competition!

Unfortunately, a significant drop in Ethereum's price in late 2018 rendered the bot unprofitable due to insufficient fills to offset the ETH price drop, leading me to pause its operation.

### How did you manage your inventory?

Initially, I maintained inventories of altcoins and ETH on both CEX and DEX. As you execute a bid on IDEX and it fills, you need to counterfill on a CEX. I mainly used Bittrex and HitBTC. Over time, I noticed high spreads on IDEX, which allowed me to focus solely on market making there without needing a CEX inventory.

### Were you able to capture profits? How did you benchmark your success?

Overall, I was profitable, earning about 10% per month. However, the volume was limited as I focused on long-tail markets with minimal altcoin volume. I measured my profits in USD, as my AWS costs were in this currency.

![Image](./image2.jpeg)

### What are the three most important lessons from your trading experience?

First, managing inventory risk is crucial, as my goal was market making rather than going long on assets.

Second, theoretical analysis can be deceptive. Real-world trading reveals challenges like competition and bidding wars, making market entry difficult.

Lastly, the immaturity of DEXs, including code errors, presents significant challenges. It's important to be prepared for these issues.

### How did you tackle inventory risk?

The key was to limit my altcoin inventory. Given the small average trade size, approximately 0.2 ETH, there wasn't a need for substantial holdings. I quickly learned to convert profits into ETH or DAI rather than accumulating altcoins.

### What tools did you find useful for crypto trading?

I primarily relied on my own coding skills, using NodeJS and MySQL. For calculations, I sometimes used Google Sheets. I didn't use TradingView for charting, preferring to visualize the order book and trade history in my mind.

### Do you follow any crypto media, and which ones would you recommend?

Most of my information comes from Telegram, Reddit, and Twitter. I'm active in one of Crypto Valley's telegram groups and have attended their conference in Switzerland, which was excellent. On Twitter, I follow [Zhu Su](https://twitter.com/zhusu) from Three Arrows Capital and [Kyle](https://twitter.com/kylesamani) from Multicoin Capital for insightful perspectives.

---
