---
date: 2020-01-02
authors:
  - coinalpha
categories:
   - Roadmap
---

# Hummingbot 2020 Roadmap

![cover](cover.jpg)

### 2019 recap
**At Hummingbot, our mission is to democratize high-frequency trading (HFT).**

Before, only hedge funds had the technology to run lucrative HFT strategies like market making and arbitrage. After we [launched Hummingbot](../hummingbot-is-live/index.md) in April 2019, ten thousand people around the world have installed our open source HFT software. Currently, Hummingbot's weekly install rate is growing at an 18% clip.

<!-- more -->

Before, crypto projects and exchanges were held hostage by hedge funds who charged ludicrous fees and required millions in token inventory for market making services. We [announced liquidity mining](../liquidity-mining-launch/index.md) in November 2019, which gives projects and exchanges the ability to source liquidity from a decentralized network of both individual and professional liquidity miners, resulting in significant cost savings and transparency gains. Moreover, we project that liquidity miners can [earn 10%+ per year](../liquidity-mining-launch/index.md) from running Hummingbot and providing liquidity.

In 2020, our main focus is to prove that liquidity mining offers a better liquidity solution for projects and exchanges while enabling anyone to earn a healthy yield on their crypto holdings. In addition, we plan to make Hummingbot easier to use for our non-technical users and more customizable and extensible for our technical users.

Please see below for a detailed breakdown of what we plan to ship on a quarter-by-quarter basis.

### Q1 2020


#### Launch liquidity mining

In early 2020, we will launch the first liquidity mining campaigns alongside our 8 launch partners:

* Projects: [Harmony](https://harmony.one/), [Solana](https://solana.com/), [Zilliqa](https://zilliqa.com/), [Zcoin](https://zcoin.io/), [iExec](https://iex.ec/)
* Exchanges: [0x](https://0x.org/), [Liquid](https://www.liquid.com/), [Loopring](https://loopring.org/#/)

Each of these partners has committed to provide approximately $8,000 per month in token-based rewards available for liquidity miners to earn.

![Mockup of the upcoming Hummingbot Miners web app](hummingbot-miners.png)

Concurrently, we will launch the new Hummingbot Miners web app, which helps liquidity miners sign up for the program, discover which markets pay the highest rewards, and track their earnings and payouts.

Starting in mid-January, we will conduct 4 weeks of testing. The first 2 weeks will be an internal alpha for us and our partners, and the second 2 weeks will be an open beta in which anyone can participate and earn testnet ETH or DAI. We will use this testing period to iron out kinks and ensure that liquidity mining launches smoothly for our launch partners as well as participating miners. 

After this 4-week test period, we expect to go live with the first wave of liquidity mining campaigns. Since liquidity mining requires custom data infrastructure that collects, stores and transforms real-time order book data for each supported exchange, we plan to expand exchange coverage in waves, starting with Binance and 0x in Wave 1 along with Liquid and other exchanges in Wave 2. Please see this [blog post](../liquidity-mining-launch/index.md) for more details.

#### Improve maintenance of exchange connectors

Building and maintaining exchange connectors is one of the most time-consuming aspects of our project. Hummingbot's architectural philosophy is to decouple exchange connectors from trading strategies, which allows us and our community to develop strategies without worrying about the idiosyncrasies of how they will run on different exchanges. To enable this level of abstraction, Hummingbot exchange connectors do a lot of heavy lifting (see this [forum post](https://forum.hummingbot.io/t/pure-market-making/84/7?u=fengtality) for more details).

In late 2019, we started a program to reward external developers for building connectors. Today, developers from all over the world in places such as Cyprus, Nigeria, Russia, and Silicon Valley are building Hummingbot connectors for gate.io, Kucoin, Bitfinex, and HitBTC, respectively. This model enables our core team to focus on larger-scale changes to the codebase, while our extended team of external developers can earn meaningful bounties for building and maintaining exchange connectors. We plan on utilizing this model going forward for all future Hummingbot connectors.

In 2020, we aim to improve the process of adding exchange connectors to Hummingbot, both to allow for liquidity mining campaigns on these exchanges as well as to give our users access to more trading venues. To streamline this process, we are working on two initiatives for Q1 2020:

##### Mock connector testing framework

Existing Hummingbot exchange connectors are often unreliable across releases because there’s no consistent process for testing them over time. Since exchange APIs often change, coupled with the fact that we are continually improving and refactoring the Hummingbot codebase, running tests consistently is the best early detection system for bugs and other issues.

In practice, however, testing exchange connectors can be expensive and time-consuming, given the need to place and submit orders with real crypto. This makes automated unit testing with every pull request, which we have for other parts of the Hummingbot codebase, impractical for connector-related code. 

To get around this, we are building a mock testing framework that simulates API responses for each exchange. We believe that this framework will greatly speed up connector development.

##### Connector certification program

Hummingbot now supports 9 different exchanges with many more that we plan to add in 2020. Given that exchange connectors often have issues due to the reasons laid out above, we need a system to communicate the status of each exchange connector so that users know the current status of each one.

Early next year, we will launch a certification program for our supported exchanges. We will utilize the mock connector testing framework along with live testing bots in order to continually assess each exchange connector. In addition, we will publish a table in our Github repository of the current status of each exchange, which will be updated with every release.

### Q2 2020

#### Scale liquidity mining

After Q1 2020, we will have successfully launched liquidity mining campaigns for our first 8 project and exchange customers. Hopefully, we will have ironed out most of the kinks with the user experience for both liquidity miners and our customers.

In Q2, we plan to expand the number of customers as well as the number of supported exchanges. Because we work closely with all of our customers to host AMAs, create training videos, and train their communities to run Hummingbot, we are limiting the number of new liquidity mining engagements until we ensure the success of our first set of customers. Similarly, we will extend the data infrastructure that powers liquidity mining to all of our exchanges after we ensure that it runs smoothly on the first few exchanges.

#### Publish real-time liquidity metrics

From speaking with many projects, exchanges, and market makers, we've learned that **how to measure liquidity** is a direly needed topic of conversation in crypto. Currently, many market participants utilize traded volume to measure liquidity, in large part because data providers such as CoinMarketCap have historically ranked exchanges and trading pairs using traded volume by default.

While volume is certainly correlated with liquidity, it's also an imperfect measure because volume shows what happened in the past, while order book-based measures of liquidity indicate what will impact your trades in the future. More importantly, using volume as a ranking tool creates an implicit incentive to engage into wash trading and other types of market manipulation, while order book-based measures of liquidity are much harder to game.

Recently, crypto data providers have built the necessary data infrastructure to collect/store order book data and have begun to publish better liquidity metrics. In November, CoinMarketCap released a new Liquidity Metric based on order book data that will be used to rank exchanges and trading pairs. In addition, Kaiko now [makes available slippage metrics via API](https://blog.kaiko.com/leveraging-order-book-data-to-execute-better-trades-f38d931e0601).

Because we have to collect and publish order book data in order to power liquidity mining anyway, we plan to do our part to educate the market about using order book data instead of traded volume to measure liquidity. Initially, we will publish real-time liquidity dashboards for our liquidity mining campaigns. After we work with them to determine how we should present and visualize the data, we plan to create a public website with free, real-time liquidity metrics derived from order book data for all of our supported markets. 

We believe that measuring liquidity based on order book data is vital to solving the fake volume problem and to create orderly, fair markets in crypto, so we plan to help other data providers like CoinMarketCap and Kaiko educate the market on how to measure liquidity. This will be an extension of the Crypto Liquidity Report that we released in October.

#### Make Hummingbot more configurable and powerful

While Hummingbot is much easier to install and use than the first version that we open sourced in April 2019, we recognize that we still have a long way to go to make Hummingbot easier to use for external developers.

Since liquidity mining is how our company makes money, most of our team is focused on building and scaling the infrastructure needed to support it in Q1 2020. As soon as we have bandwidth, we plan to continue improving the open source Hummingbot codebase, starting with the initiatives below.

#####  Add documentation to developer tutorial

In late 2019, a team of students from Cornell University built a 7-step tutorial that shows you how to write a custom Hummingbot strategy, starting with a *Hello World* strategy that just reads an exchange account balance and culminating with TWAP and VWAP smart order routing strategies.

Next year, we will add more documentation for this developer tutorial so that it's more intuitive and accessible for new developers.

##### 'pip install hummingbot'

Currently, there is no way for a developer to customize and modify Hummingbot without installing it from source, changing Hummingbot’s source code, and re-compiling. This is an annoying barrier to entry for developers who want to build their own algorithmic trading strategies while using Hummingbot's exchange connectors.

We plan to refactor the codebase so that developers can import Hummingbot as a Python module and write new strategies from there. Afterwards, developers can configure Hummingbot to detect the developer’s compiled strategy plugins and use those in the standard Hummingbot configuration UI.

##### Triangular arbitrage

In 2020, we plan to extend the current `arbitrage` strategy so that it supports [triangular arbitrage](https://www.investopedia.com/terms/t/triangulararbitrage.asp), an often-requested feature from our community which is a more advanced arbitrage strategy using three trading pairs instead of two. The ability to run triangular arbitrage on a single exchange, with less inventory requirements, setup and configuration, makes Hummingbot much more powerful and versatile for running arbitrage, as well as potentially provides a simpler on-ramping strategy for users new to Hummingbot.

### Q3-Q4 2020

Given the rapidly changing crypto markets and our company size, our slated initiatives for the second half of 2020 are a bit more general.

#### Launch the Hummingbot app

To accomplish our mission of making high-frequency trading available to everyone, we have to make Hummingbot a lot easier to use than it is today. Thus far, we have focused our engineering efforts on lower-level core infrastructure, such as the components that handle exchange connectivity and manage order state.

Next year, we plan to release a significantly more user-friendly interface for Hummingbot that will allow users to easily run a market making bot and track how much they earn from liquidity mining rewards within a single interface.

In the first half of 2020, we will conduct user research to determine the best format for this app (desktop client, hosted web app, browser extension, mobile app, etc), and we plan to build and launch it in the second half of 2020.

#### Support more market types

One of Hummingbot's design goals is to be **market-agnostic**: a single client that can support algorithmic trading on all types of financial markets. Thus far, we have concentrated on integrating with order book-based spot exchanges, both centralized and decentralized.

In 2020, we plan to add more diverse market types. As we wrote in this [blog post](../../../academy-content/posts/exchange-types-explained-clob-rfq-amm/index.md), there are other exchange models such as RFQ and AMM markets. In addition, we plan to integrate with exchanges that offer margin trading, futures, and perpetual swap products.

#### Support data science workflows

In addition to the open source Hummingbot codebase, we also maintain a proprietary Cython-based backtesting engine that is much faster than open source backtesters, along with a large dataset of historical exchange and token price data. Internally, we utilize this infrastructure to test Hummingbot strategies in order to design safer strategies for new users.

In the future, we believe that this infrastucture may also be useful for both individual and professional algorithmic traders who want to backtest machine learning-based strategies and improve their trading performance. In the second half of 2020, we plan to make available these closed source modules and support both individual developers and hedge funds in using them.
