---
date: 2024-05-21
authors:
  - mike
categories:
  - Botcamp
---

# Hummingbot Botcamp Cohort 7 Demo Day Recap

The seventh edition of Hummingbot Botcamp Demo Day was a milestone event, showcasing the innovative strategies developed by our talented participants. Here’s a detailed recap of the exciting strategies presented and the valuable insights shared.

### Opening Remarks and Certification Details

The session began with an introduction to the demo day agenda, highlighting that eight strategies were to be presented. The speaker explained the new certification process, which includes a PDF certificate and a list of certified developers on the Hummingbot website. Participants have three months post-cohort to submit their strategies and get certified. Additionally, an NFT initiative was introduced to create a unique memento for each cohort, with a special NFT awarded to the most valuable strategy.

### Strategy Presentations

**1. Spot Perpetual Arbitrage by Propit:**
   - This strategy capitalizes on price differences between spot and futures markets. It begins by buying on the spot market and selling on the futures market when a price divergence is detected. The strategy aims to lock in profits when conditions are favorable, also benefiting from positive funding rates.

**2. Cross-Sectional Momentum by John:**
   - John presented a sophisticated strategy that uses a rebalance executor and EMA crossover controller. It rebalances a portfolio into top-performing assets based on recent performance, utilizing both short-term and long-term EMA indicators. The strategy adapts dynamically, making it a robust tool for different market conditions.

**3. Liquidation Sniper by Patrick:**
   - This strategy listens to liquidation events in crypto markets. When significant liquidations occur, it places buy orders to catch rebounds, taking advantage of the temporary market imbalance caused by liquidations. The strategy has potential for further enhancements with high block and other integrations.

**4. Multi-Indicator Directional Strategy by Vlad:**
   - Vlad’s strategy is based on a time-series model that identifies short-term reversion and medium-term trends. Using linear regression and different moving averages, it adjusts positions dynamically to capture profitable trades while managing risks associated with inventory.

**5. Dynamic Liquidity Management by Nuix and Melted Blocks:**
   - This team strategy manages liquidity provision in Uniswap V3 pools. It adds liquidity within specified price ranges and rebalances positions when prices move outside these ranges. The strategy aims to minimize impermanent loss and maximize fee earnings by keeping positions always within active ranges.

**6. Aladana and Stoof Strategy by Ding Sing:**
   - Ding Sing revisited the classical Aladana and Stoof market-making model, focusing on inventory risk management. The strategy adjusts reserve prices and optimal spreads based on current and target inventories, aiming to mitigate losses during market trends.

**7. VWAP Scalping by Linus:**
   - Linus’ strategy uses VWAP with standard deviation bands to execute mean reversion trades. By placing limit orders based on VWAP deviations, it aims to capture small market movements. The strategy incorporates DCA executors to spread out entries and exits, enhancing its efficiency.

**8. Perpetual Mean Reversion with Bollinger Bands by Alex:**
   - Alex's "Chop Catcher" strategy uses Bollinger Bands to identify reversion points in perpetual markets. It places leveraged limit orders at the bands' edges and avoids trading during high volatility periods. This strategy leverages the DCA executor and triple barrier config for better risk management.

### Voting and Results

The audience, including Hummingbot Foundation staff, participated in voting to rank the strategies. The winner was John’s Cross-Sectional Momentum strategy, which was awarded the Most Valuable Strategy NFT for Cohort 7. All participants who presented a strategy received the Cohort 7 NFT as a token of recognition.

### Closing Remarks

The session concluded with expressions of gratitude towards all participants for their hard work and dedication. The organizers emphasized the continuous support available through the Hummingbot community and encouraged alumni to stay engaged and participate in future cohorts.

Hummingbot Botcamp Demo Day 7 was a resounding success, showcasing advanced trading strategies and fostering a collaborative environment for algo traders and developers. Stay tuned for the next cohort to further hone your trading skills and join a growing community of innovators.

---

For more information on Hummingbot Botcamp and to explore the strategies mentioned, visit [Hummingbot Botcamp](https://botcamp.hummingbot.org).