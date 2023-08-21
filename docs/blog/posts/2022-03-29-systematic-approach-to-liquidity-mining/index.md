---
date: 2022-03-29
authors:
  - foundation
categories:
  - Trader Tips
---

# Systematic approach to Liquidity Mining -  ROI based analytics and simple experiments

![cover](image_1.jpg)


*by Diego C*

## How to make 10% monthly passive income from your crypto Assets 

### Systematic approach to Liquidity Mining - �ROI based analytics

**INTRODUCTION** (Skip it if you are a pro and go to data collection & strategies below):

The end goal for Liquidity Mining strategies would be to beat traditional staking and farming yields in DEFI/CEFI using your crypto assets.

So if you HODL crypto assets in Exchanges like Binance, Kucoin, Gate.io or Ascendex and you are not using it for trading, staking or yield farming on these platforms, then you are missing on potential passive income from these assets.

That is when Liquidity Mining comes in place:

<!-- more -->

**Advantages:**

- Higher ROI

- No lockup period for your assets

**Disadvantages (or so)**

* You need a trading bot

For this, Hummingbot have already create a ready to use trading bot for the special proposes of liquidity mining, pure market making, arbitrage, etc.

<!-- more -->


Alternatively, you can still run liquidity mining using any other trading bot.

The Hummingbot Miner platform has plenty of data for you to understand better where to put to work your money, but understanding implications of each particular set of data on you final Return On Investment (ROI) is not as easy as it looks.

When you try to decide which pair to use to participate in liquidity mining you go to �Markets� [https://miner.hummingbot.io/markets](https://miner.hummingbot.io/markets?ref=blog.hummingbot.org) then filter out the Exchange where you have your assets and then filter by higher yield.

While this is a good approach when you start running liquidity mining, there are still some risks involved in this decision, for example higher yields usually correlates to:

* Lower liquidity pairs
* New pairs on the exchange
* Bigger spreads on the trading platform

All of which translate into higher risks

Also you have to understand that the �yield� mentioned in the Hummingbot Miner platform is not necessarily going to be your final ROI.

These yield metrics only include reward payments versus order volumes. They are not your ROI.

For calculating your personal ROI you must compute the mining rewards, the PnL for the occasional trades incurred during liquidity mining, the exchange fees and the money you invested in the liquidity mining trading.

So finally your personal Return On Investment (ROI) is calculated as:

ROI = (Liquidity Mining Rewards +/- Trading PnL - Exchange Fees + Rebate Fees) / (Money Invested)

Our goal here is to get to a ROI of 10% monthly or 120% Annual Return (AR)

Now lets see how to approach this task



---

### **DATA COLLECTION**

**Stage 1 - Working out the spread**

#### **Day 1**

Run Liquidity mining bot, as many pairs as possible, same invested amount in USD value (for example $100), same spread @ 0.5%, same order refresh time....

- Collect data:

* Revenue generated per pair.
* Rewards generated
* Amount invested per pair
* ROI
* Operating Cost
* How many filled orders did you have
* How much money in USD value was filled per pair
* Fees paid
* PnL generated from filled orders �(+/-)

#### **Day 2**

* Run exactly the same method but now at spread 0.75% and compute ALL same data again

#### **Day 3**

* Run exactly the same method but now at spread 1% and compute ALL same data again

**Stage 2 - Working out the invested amount**

#### **Day 4**

Run exactly the same method but now double the invested amount to $200, at a spread 0.5% and. Compute ALL the same data again.

#### **Day 5**

Run exactly the same method but now double the invested amount to $200, at a spread 0.75% and. compute ALL the same data again.

#### **Day 6**

Run exactly the same method but now double the invested amount to $200, at spread 1% and compute ALL the same data again.

#### **Day 7**

Sit back and enjoy your glory.

---

### **DATA ANALYTICS**

#### **Compare performance**

In theory, tighter spreads will lead to bigger rewards, but more filled orders and trading fees, which affect your final PnL and ROI

On the other hand bigger spreads will lead to smaller rewards, but less filled orders and less trading fees.

But you need to put the theory in your back pocket and put ALL this collected data into an Excel sheet to compute the results and compare.

So create a spreadsheet with the data for each day and then reorder it by ROI.

The method that achieves the highest ROI should be your final selection to move to the last step which is to scale up the process to bigger investment amounts.

**Note 1:** The reason to test different invested amounts is pretty obvious. There is a �Spread Density Function" described in the liquidity mining whitepaper [https://hummingbot.io/en/liquidity-mining-whitepaper/](https://hummingbot.io/en/liquidity-mining-whitepaper/?ref=blog.hummingbot.org) that exponentially favor miners with tighter spread

**Note 2:** The reason to test different spreads is not so obvious. But encoded in the reward allocation mechanism, the invested amount from the miner affects the rewards calculation as it is considered proportional to the total liquidity amount provided by ALL other miners [https://hummingbot.io/en/blog/2019-12-liquidity-mining-rewards](https://hummingbot.io/en/blog/2019-12-liquidity-mining-rewards?ref=blog.hummingbot.org)

Miner reward allocation % = miner order weight / Total snapshot order weight

#### **Optimization process**

Select better spreads per coin based on ROI and or PnL

#### **Scale Up**

Then, scale up investment



---

### **TRADING STRATEGIES**

Here are some popular trading strategies:

**1- D-CALM (Dollar Cost Averaging Liquidity Mining):** Only send orders for BUY (bid side) at a spread of 0.5%. If the order is filled, wait 1 hour and check the current price. If the price is above the last filled price then send a SELL (ask side) to lock into profits and restart the liquidity mining bot.

If after 1 hour the price goes down more than 1% then reduce the spread to 0% to force the limit order to be taken again and so start the DCA process.

Now you have 2 filled orders. For example, first one at price 1.25 and second one at 1.15, meaning that your average BUY price is at 1.20, so in order to lock into profits from a DCA session you need the price to come back up to 1.20, instead of the original 1.25. Then, this increases your chances of locking in profit or at least breaking even from your filled orders.

While you take care of filled orders, your Hummingbot bot keeps generating liquidity mining rewards.

Note 1: working on Python code for this one :)

**2- Pure Market Making Bot**

**3- Liquidity Mining**

**4- Hedge Mode**

Note 2: Strategies 2, 3 and 4 currently available in Hummingbot

**BONUS - Crypto Loans:**

If you are a HODLER of BTC, ETH, BNB or any of the major cryptos, do not sell it to run liquidity mining�. Instead get a Crypto Loan, like those available in Binance for 0.04% per day (no referral incentives from my side) so if you can get even better rates in any other platform then do it.

The point is to keep your main crypto assets but run liquidity mining rewards using loans on stable coins like USDC, USDT, BUSD, etc. This way you can still benefit from your long holding assets appreciation as well as from liquidity mining. Only consideration is to do some simple math to guarantee that your daily ROI is higher than your interest from the loan. And usually it is!!!


