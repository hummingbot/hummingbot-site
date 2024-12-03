---
date: 2019-01-30
authors:
  - mike
categories:
  - Academy
tags:
  - Crypto Exchange Landscape
---

# The Thin Crust of Liquidity

### The role of market makers and importance of liquidity in the crypto industry

![](./cover.webp)


**Eric Noll** was getting frustrated. It was November 2011, and the senior Nasdaq executive was struggling to explain to a mostly disinterested House of Representatives panel why the changing stock exchange landscape was wreaking havoc for smaller public companies:

> Today's US markets are increasingly fragmented and volatile. Liquidity in US stocks is dispersed across 13 exchanges and over 40 other execution venues. The declining cost of launching and operating electronic order crossing systems has led to a proliferation of decentralized pools of liquidity. However, the unintended consequences of that market fragmentation have been a lack of liquidity and price discovery in listed securities outside of the top 100 traded names. Such fragmentation of trading creates a **thin crust of liquidity** that is easily ruptured, as occurred on May 6th [*(i.e. the 2010 Flash Crash)*](https://en.wikipedia.org/wiki/2010_Flash_Crash)

Stifled yawns from Congressional onlookers aside, Noll was describing an unintuitive but important phenomenon that would make Milton Friedman roll over in his grave: **more competition from exchanges leads to less liquidity for small issuers and greater systemic risk**.

<!-- more -->

Understanding why this happened is crucial for the crypto industry, where exchange fragmentation is prevalent. The ability to irrevocably send blockchain-based assets to anyone in the world, without permission, means that to start a global crypto exchange, all you need is a server and some marketing hustle. It's no wonder that CoinMarketCap lists [234 exchanges](https://coinmarketcap.com/rankings/exchanges/), and the top exchange (Binance) only has 5% market share of daily volume.

Moreover, one of the primary espoused benefits of tokenization is the ability to inject liquidity into formerly illiquid assets, making them freely tradable and accessible to anyone in the world. While the ICO boom of 2017-2018 may be over, it has been replaced by a looming tidal wave of security token offerings from issuers like Harbor and security token exchanges like tZero, all launching under the assumption that tokenization equals liquidity.

But while tokenization enables an asset to be freely tradeable, it does not automatically create a liquid market for that asset. Liquid markets are supported by market makers who stand ready to buy and sell an asset. **From personal experience, listing an illiquid asset on a trading venue without dedicated market making is a recipe for disaster.**

## What happens when you list an illiquid asset?

![Forest owned by Phaunos Timber Fund](./forest.jpg)

It happens that I'm intimately familiar with what transpires after an illiquid asset becomes freely tradable. In 2009, I worked for [Phaunos Timber Fund](http://www.phaunostimber.com/), a private equity fund that invested in timberland. Timberland is a niche asset class favored by endowments and pension funds because of its stable, bond-like return profile, but deals are typically $100 million+ with a 20-year duration (trees take a long time to grow).

To make investing in timber liquid and accessible to smaller investors, we decided to list our fund on [AIM](https://www.londonstockexchange.com/companies-and-advisors/aim/aim/aim.htm), the newly formed small-cap arm of the London Stock Exchange. While we didn't use the phrase *tokenization*, our marketing materials were filled with the same verbiage as today's STOs: *"fractional ownership"*, *"lowering the illiquidity discount"*, and *"democratized investing*."

Initially, the offering was a success. We raised $600 million for Phaunos, albeit mostly from traditional institutional investors like European pension funds. While these institutional investors didn't need on-exchange liquidity per se, the ability to sell whenever they wanted was a big reason why they invested in the fund.

But while our shares were freely tradable on the AIM exchange, the reality was that there was very little trading activity. Our investors were long-term institutional investors, not active traders. While $600 million is certainly a lot of money, we were much smaller than most other timber funds and REITs, so we struggled to attract coverage by research analysts. Most importantly, there were **no professional market makers** who provided liquidity to our shares, in large part because AIM was a newer trading venue.

This resulted in a market where our shares traded sporadically in small lots, the bid-ask spread was over 20%, and the mid-market price was 40% lower than our fund's NAV.

The negative externalities imposed by illiquidity on issuers (lower price discovery and higher costs of capital) are well-trodden areas of [academic research](http://people.stern.nyu.edu/adamodar/pdfiles/papers/liquidity.pdf). But this impacted me in a more visceral way, since my job was to raise capital for the fund.

> "Why would I pay full price for something that trades at a 40% discount in the secondary market?" *Door slams shut.*
>
> -- Typical response from prospective investors

Not only did having freely tradable yet illiquid shares prevent me from raising new primary capital, but it also negatively impacted our company in other ways. Instead of performing due diligence on new timber investments, our portfolio managers had to spend time explaining to our existing investors why the share price didn't reflect the actual quality of the portfolio. The low share price also diminished company morale and contributed to employee turnover. It felt like we had all the disadvantages of being a public company but none of the good parts.

## The role of market makers

My experience at Phaunos taught me that listing an asset on an exchange is only half the battle. To generate a liquid, active market, you also need a market maker to provide liquidity. If exchanges provide the venue where traders congregate, market makers provide the liquidity that traders need to trade with efficient price discovery, a tight bid-ask spread, and the ability to transact in larger sizes.

This symbiotic relationship between exchanges and market makers explains why the proliferation of US stock exchanges starting in the 2000s has actually hurt small-cap issuers and introduced greater systemic risks. While the number of exchanges and non-exchange trading venues increased, the number of market makers did not.

Modern market makers are typically high-frequency trading firms and quantitative hedge funds that integrate deeply into an exchange's technical architecture to gain incremental speed advantages over their competitors. Famously, Spread Networks [spent $300 million](https://www.forbes.com/forbes/2010/0927/outfront-netscape-jim-barksdale-daniel-spivey-wall-street-speed-war.html#d5081f2741ad) to build a cable between Chicago and New York for their hedge fund clients, just for a mere 3 millisecond speed boost. For market makers, integrating into new trading venues requires a substantial investment in technical integration: data collection, trade execution, and order management.

In addition, since market makers stand ready to buy and sell assets at all times, they need to maintain a substantial inventory of assets at an exchange in order to perform this function. Not only do large-cap stocks offer greater profits for market makers due to higher trading volume, but they also carry lower inventory risk because hedging and liquidating in size are easier.

For a top market making firm, focusing on the largest and most liquid

 stocks at the expense of smaller stocks is a natural choice. At the 2011 House of Representatives hearing, NYSE's Jeffrey Mecane explained this conundrum to the panel:

> A lot of the spread compression and increased competition that we have seen has been in the very large liquid stocks where you have seen a lot of algorithmic type trading, high-frequency type trading, which tends to narrow the spread and make it very cheap and efficient and fast for the large-cap stocks to trade. The unfortunate reality is those same trends haven’t occurred in the small- and mid-cap part of the market. Those stocks don’t have sufficient liquidity for the high-frequency type automated traders to traffic in those names, and as a result, you have not seen a commensurate level of volume or liquidity or spread compression that you have seen in some of the large-cap names.

## Crypto's liquidity desert

![](./bone-dry.jpg)

The fragmented crypto exchange landscape and lack of market standards like [FIX protocol](https://en.wikipedia.org/wiki/Financial_Information_eXchange) has created an even more extreme version of the small-cap liquidity crisis experienced in equities.

For Bitcoin and the other top-10 coins, where over-the-counter (OTC) trading desks and algorithmic market makers exclusively focus, there is a lush oasis of liquidity where you can trade millions of dollars without moving the market. Liquidity dries up sharply afterwards: a $100k block trade of a top-50 coin would likely incur a 10% loss due to **slippage**, the difference between the observed market price and the actual execution price.

For the long tail of coins, as well as newly launched exchanges, their markets are barren, desolate wastelands unless they pay hefty sums to professional market making firms to provide liquidity. In a typical market making arrangement, a project pays a market making firm $50k per month, provides the market maker with millions worth of inventory, and splits any profits earned. Similarly, professional market makers charge exchanges thousands of dollars per month to make a market on a single trading pair.

Fragmentation of liquidity across exchanges also increases risk of a **flash crash**, which occurs when a large market sell order clears out all the top buy offers in the order book and significantly moves the price downward. On exchanges which allow for margin trading, these price resets may trigger margin calls that force further selling, creating a cascading effect that pushes price toward zero. The 2017 Coinbase Pro flash crash led the exchange to refund millions in losses for affected traders, terminate their margin trading program, and implement additional circuit breakers.

![GDAX flash crash in real time](./gdax.gif)
*The Coinbase Pro flash crash in real-time, July 2017*

Just as in equities, the crypto liquidity crisis stems from **a dearth of market makers**. Professional market making firms seek markets where they can earn the highest profits while incurring the least inventory risk. Firms like DRW Cumberland and Jump Trading focus on top markets like the BTC/USD trading pair on BitMex, where $1 billion in volume changes hands in a single day. They have little incentive to perform the deep technical integration and maintain the requisite inventory of illiquid assets required to provide liquidity to niche markets such as the [ZRX/ETH trading pair on Radar Relay](https://app.radarrelay.com/ZRX/WETH) or the Ethereum gas futures market on Veil.

While tools like the 0x Launch Kit and white label exchange solutions from AlphaPoint and Modulus have made it much easier to start a new exchange, being a good market maker involves meeting steep technical requirements that make it inaccessible to most individuals and small firms. To avoid losing money in the dynamic, unpredictable crypto markets, market makers need to collect and handle streaming real-time order book data, build sophisticated machine learning-based models, and engineer high-speed, automated trade execution engines. Since professional market making firms who have already built this stack enjoy lucrative, oligopoly-like profits from providing a rare and valuable service, they have little incentive to share their technology with the general public.

### Decentralized market making

What brought me and many others into the blockchain industry was its potential to build a more open and inclusive financial system, a future where anyone in the world can take out a loan, access global investment opportunities, and create new markets for anything (even digital cats).

**For this future to happen, we need more market makers in the system.** Just as there exists a diverse landscape of crypto exchanges both large and small, there should be a diverse population of market makers with the proper incentive structure and tooling to support these markets.

The long tail of markets is a poor fit for large, professional market making firms. The high cost of capital for hedge funds and trading firms (typically 20%+) means that it may be unprofitable to provide liquidity to thinly traded markets, not to mention the heightened inventory risk of holding illiquid assets. Finally, regulatory uncertainty and Know Your Customer (KYC) requirements may prevent US broker-dealers and registered money transmitters (e.g. some OTC brokers) from participating in crypto-native markets like decentralized exchanges.

In contrast, individuals and smaller global firms have structural advantages in serving the long tail of markets. Most of us #HODL our coins without earning interest or other income, so any ability to generate incremental returns from making more productive use of those assets is attractive. In addition, since existing holders of an asset are more likely than professional market makers to have deep, fundamental conviction on the value of an asset, they are better equipped to be buyers of last resort and provide liquidity in times of market distress.


By lowering the steep technical barriers to market making and designing new incentive mechanisms, we can enable a globally distributed and decentralized community of market makers to serve a wide range of markets: large and small, centralized and decentralized, fungible and non-fungible assets.

That's why we're building Hummingbot, a free and source available software client that allows anyone to be a market maker. Like clients that help you run a mining node or staking node, Hummingbot helps you create and run automated, high-frequency market making bots on multiple exchanges.

Since we used to manage a quantitative crypto hedge fund that significantly outperformed the broader crypto markets, we are uniquely positioned to build Hummingbot. While we could keep our infrastructure to ourselves and focus on generating short-term profits, we believe that making it publicly available unlocks a much bigger long-term opportunity for us and makes a more meaningful impact on the crypto industry: **open infrastructure that allows anyone to provide liquidity for any market**.


## References

- [How Roadblocks in Public Markets Prevent Job Creation on Main Street](https://www.govinfo.gov/content/pkg/CHRG-112hhrg73616/pdf/CHRG-112hhrg73616.pdf), Committee on Oversight and Government Reform, House of Representatives, November 15, 2011.
- Aswath Damodaran, [Marketability and Value: Measuring the Illiquidity Discount](http://people.stern.nyu.edu/adamodar/pdfiles/papers/liquidity.pdf), July 2005.


