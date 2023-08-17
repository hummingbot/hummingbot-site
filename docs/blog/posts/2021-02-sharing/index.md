---
date: Feb 14, 2021
authors:
  - Thomas Yit
categories:
  - Trader Tips
---

# Sharing is caring: 3 trading pairs I picked


*by Thomas Yit*

Until now, the majority of the articles are about learning and optimizing Hummingbot. Let�s take this to the next level. Is it possible to profit from market making, and does liquidity rewards help mitigate directional risks? I share the following three markets(live) and performance in an attempt to address these concerns.

*****Disclaimer: The content of this article is provided by our blog contributor Thomas Yit and does not represent the views of CoinAlpha Inc./Hummingbot. The content below does NOT constitute investment, financial, legal, or tax advice, nor does any of the information contained on this article constitute a recommendation, solicitation, or offer to buy or sell any digital assets, securities, options, or other financial instruments or other assets, or to provide any investment advice or service.*****

A little bit of intro about myself, been a retail trading in forex for a couple of year till i stumbled on Bitcoin back in 2015 which a buyer accept only BTC as payment back then, bought some using localbitcoins and forget about Bitcoin till 2017 ICO crazy period. Over the next few years start to move into crypto trading space and found Hummingbot in May 2020. Ever since, have been running 4-6 instances but not every instance is performing liquidity mining.

**My choice of a market-making trading pair**
---------------------------------------------

I found a not too volatile trading pair that ranges nicely in a gradual ascent. See the following screenshot.

![firstpair](https://images.ctfassets.net/h07e7qaokuyy/6rTQ58OyuJa8bXb5XsfaSL/bea03c1a8204057b5b1ebbec2b9e9f75/firstpair.png?w=1128&h=736&q=100&fm=png)I did three-day trading using Hummingbot and the performance is as follows:

![firstpair-performance](https://images.ctfassets.net/h07e7qaokuyy/3QweoQCoxN6EAncHkHTIcT/62ea1f4fc31cfc1dee0d52a0bc31d3ee/firstpair-performance.png?w=772&h=730&q=100&fm=png)The return was a ****17.10%****, and an average of 10 trades per day, not exactly high-frequency trading but close enough in terms of market-making where you have a nice proportional in buy and sell trades.

So why did I pick this pair in BTC? Now take a look at the Ethereum Coinmarketcap chart. (Note: This is not the market pair that was traded in the above example.)

![ethereum](https://images.ctfassets.net/h07e7qaokuyy/hjnzd1rhsPqpJa0a4pwOB/5da6f1a5c7db94e852a14de90b361c32/ethereum.png?w=1098&h=724&q=100&fm=png)You can see that the ETH/BTC(Yellow) is relatively calm and range as compared to ETH/USDT(Green). My take on why the USD is volatile, take a look at the USD index.

![USD-index](https://images.ctfassets.net/h07e7qaokuyy/7mOonIXpcd7xH5g6LTICqs/79ac30948a867c503b0eac7385391982/USD-index.png?w=1120&h=652&q=100&fm=png)The USD dollar index(basket of currencies) has been on the downtrend since March 2020, in other words, USD is weakening and other currencies are strengthening. You would prefer markets moving in range for market making. Now, back to the configuration of the trading pair.

![firstpair-config](https://images.ctfassets.net/h07e7qaokuyy/1OwP0ZA9TvSCy0eszJDeVu/f6d470c3724903f4a9104563e169bcf7/firstpair-config.png?w=602&h=904&q=100&fm=png)I set very simple pure market making parameters but the bid/ask orders are dynamic based on TradingView indicators which trigger alerts to Telegram and change the bid/ask orders, for more information, see [here](https://hummingbot.io/blog/2021-01-automate-tradingview-for-hummingbot/?ref=blog.hummingbot.org). If you don�t have a TradingView subscription, you can use Hummingbot scripts to adjust accordingly, see [here](https://github.com/CoinAlpha/hummingbot/tree/master/scripts?ref=blog.hummingbot.org), either using `inventory_skew` or the `spreads_adjusted` to your preference.

**My choice of a liquidity mining trading pair**
------------------------------------------------

Since the previous trading pair was a market making and low in trading frequency, let�s take a look at RLC/USDT results, a liquidity mining trading pair from 13-01-2021 to 19-01-2021.

![RLCUSDT](https://images.ctfassets.net/h07e7qaokuyy/38On0rhGSdxhImtYn1bxPw/fb8ee50f5a6af718fe12f10ad7ca70fd/RLCUSDT.png?w=1130&h=1054&q=100&fm=png)![liquidity-mining-rewards](https://images.ctfassets.net/h07e7qaokuyy/6GBzj1ctJ9QkmTm3F7dZib/004b2137858e4d8b9d2baa32a317501d/liquidity-mining-rewards.png?w=1106&h=388&q=100&fm=png)Over 7 days, 1185 trades are executed, an average of 169 trades per day with a PnL of 60.49. Add the liquidity mining rewards of 12.39, the total Pnl is abt $72.88 and the gain is ****7.1%****. Not too shabby for 7 days of work.

This pair does not have much of a USDT movement as compared to BTC; thus, a good pair for mining, see the following screenshot. Note line in green for USDT.

![RLCUSDT-cmchart](https://images.ctfassets.net/h07e7qaokuyy/76sWRSTSuYZfS3n4zMp3aH/22562b69b8e6d6889ff8d5f654d26fb9/RLCUSDT-cmchart.png?w=1136&h=642&q=100&fm=png)Let�s look into the RLC/USDT chart.

![RLCUSDT-tvchart](https://images.ctfassets.net/h07e7qaokuyy/5vpkkWluk8ZKKWEkKZcJaO/94117379f1de412a2f9e8c7f2c5b0ff5/RLCUSDT-tvchart.png?w=1124&h=362&q=100&fm=png)Similar to the first market-making pair, RLC/USDT has a nice gradual ascent. The Hummingbot configuration is similar to the first pair with dynamic bid/ask orders configured from 0.25 - 1%. During the uptrend, the bid spread was configured to be much tighter in order to fill in faster; thus, the buy orders are much more than the sell orders. �Everyone�s a genius in a bull market� let's take a look at a market that is in a downtrend.

**A liquidity mining trading pair that is trending down?**
----------------------------------------------------------

XEM/ETH has been on a downward trend direction since 13-1-2021, see the following XEM/ETH chart.

![XEMETH-tvchart](https://images.ctfassets.net/h07e7qaokuyy/3QDlOFlS4HVHWtKWhwZbSF/01f5c525c8606b493935bfa2cac05a8e/XEMETH-tvchart.png?w=1122&h=352&q=100&fm=png)How about the results?

![XEMETH-performance](https://images.ctfassets.net/h07e7qaokuyy/4Xu7phR5tvopaIpuEF0d4e/f44714c66a2e3070d0926216c5844c44/XEMETH-performance.png?w=1136&h=1056&q=100&fm=png)Over 7 days, 697 trades are executed, an average of 99 trades per day with a PnL of - 43.80 Add the liquidity mining rewards 19.23, the total Pnl is abt -24.57. With the [trading competition results](https://www.binance.com/en/support/announcement/6eb604a5a1a14b4bb21d317fc6e9a5d0), received abt 44.9 XEM which translate to about10, thus the Pnl is -14.57 and the loss is about ****1.2%****

![XEMETH-trading-competition](https://images.ctfassets.net/h07e7qaokuyy/1sewxu8JW9NsnisUKMO8nZ/5d23acca5daa6168b5ff25540bfc778b/XEMETH-trading-competition.png?w=826&h=264&q=100&fm=png)The Hummingbot configuration is similar to the first pair with dynamic bid/ask orders configured from 0.25 - 0.8% and during the downtrend, the bid was configured to a maximum of 0.4%. Should have increased this bid order to a higher value and with hanging order enabled.

**Conclusion**
--------------

Market making is a fine balancing act between the bulls and the bears and a constant flexing of Hummingbot�s parameters to adjust your inventory, directional, currency risks. I�m sure there are more successful examples than the ones depicted above and hope more community members will share their examples and experience.



---

### **Important notes and disclaimers**

Please review the Liquidity Mining Policy for the full disclaimer, including policies related to the use of Hummingbot.

The content of this Site does not constitute investment, financial, legal, or tax advice: none of the information contained on this Site constitutes a recommendation, solicitation, or offer to buy or sell any digital assets, securities, options, or other financial instruments or other assets, or to provide any investment advice or service.

****No guarantee of profit****: CoinAlpha does not claim that liquidity mining and participation in liquidity mining campaigns will be profitable, however measured, for the user. Liquidity mining yields are a measure of rewards compared to assets used for liquidity mining, excluding any gains or losses incurred from the underlying trading strategy.

****Eligibility requirements****: participation in liquidity mining is subject to eligibility requirements as specified in the liquidity mining policy.

****Campaign terms subject to change****: terms may be modified over the course of the campaign. We will announce any changes, if any, on our discord and reddit; the most up to date terms will also be posted on the liquidity mining campaign terms and the miners app.


