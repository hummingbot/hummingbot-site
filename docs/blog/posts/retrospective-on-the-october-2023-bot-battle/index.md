---
date: 2023-11-13
authors:
  - mike
categories:
  - Competitions
  - Botcamp
---

# Retrospective on the October 2023 Bot Battle

![cover](./cover.webp)

October 2023 was a particularly notable month since it marked the official Bot Battle, an exclusive monthly bot trading competition for Botcamp members. With eyes set on the prize and minds focused on performance, we embarked on a journey that tested both our strategic prowess and our bots' capabilities.

## Diving into the October Bot Battle

Commencing on October 27th and running through to October 30th, I, alongside my fellow active Botcamp members, took part in a vibrant competition designed to pit our automated trading strategies against one another. As per the rules, our arsenal included any Hummingbot strategy or script, with a starting capital of no more than 200 USDT and the mandate that no additional top-ups were allowed post-competition commencement.

<!-- more -->

## Beta Battle Recap

In the [Beta Bot Battle](../beta-bot-battle-results-and-roundup/index.md), I used a modified version of the [PMM with Shifted Dynamic Mid Spreads script](https://github.com/hummingbot/hummingbot/blob/master/scripts/archived_scripts/examples_using_smart_components/pmm_with_shifted_mid_dynamic_spreads.py), a strategy designed to provide liquidity to a trading pair in a single market. 

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/3cWoS3Yk6EE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here's [my version](https://github.com/fengtality/hummingbot/blob/master/scripts/bot_battle.py). I chose the SEI-USDT trading pair on Binance, since it was relatively newly listed and had exhibited volatile performance recently.

!!! note
    It's difficult to make money from spot market making without rewards or rebates, and not having a high VIP tier and paying standard fees makes it extra challenging. Therefore, my expectation was that the strategy would lose money net of fees, but I was hoping to break even from a trade P&L perspective. 

With 392 trades executed over two days, my bot was pretty active and aggressive! My average buy price was an impressive 0.1245 USDT versus an average sell price of 0.1244 USDT. Given the volatile market conditions, this narrow margin demonstrated the bot's capability to adjust spreads dynamically based on market volatility.

Mostly due to fees, the result was total P&L of -4.84 USDT. While not the outcome I had hoped for, it was a valuable learning experience, providing insights into the nuances of market dynamics and bot behavior.

![history-sept](history-sept.png)

## What Changed in October: Using a V2 Strategy

Fast forward to October, and I wanted to test out the new V2 strategy framework, notable for creating [Executors](../../../v2-strategies/executors.md) instead of orders. This innovative approach is based on the [triple barrier method](https://www.mlfinlab.com/en/latest/labeling/tb_meta_labeling.html), a concept from [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) by Martin Prado.

V2 Strategies differ from their predecessors in several key ways:

- **Composable**: They allow for a modular approach to strategy construction, permitting quick modifications and enhancements.
- **Backtestable**: They can be thoroughly tested against historical data to evaluate performance.
- **Accessible**: They can be deployed via a user-friendly Dashboard, catering to both non-technical and technical users.

In terms of architecture, V2 strategies are constituted of components that can be defined in a Script:

- **Candles**: These create a structured approach to market data, allowing for refined trading signals.
- **Controllers**: They orchestrate the strategy in response to the signals, determining the course of action for Executors.
- **Executors**: These are self-managing components that execute trades, manage orders, and adapt to market changes.

I used [a modified version] of the [base DManV2 script](https://github.com/hummingbot/hummingbot/blob/master/scripts/v2_market-making_dman_v2.py). My modifications, mainly reducing the order levels and widening spreads, were designed to make the strategy more conservative.

## October Performance

![history](history.png)

I decided to use the strategy on the SEI-USDT pair again, albeit on Binance Futures.

With a slightly altered approach and fine-tuned parameters, my bot carried out an equal number of buy and sell trades totaling 186, maintaining balance and agility. This time, the realized P&L was a positive 0.85 USDT, and the total volume soared to 4,071.0092 USDT.

The performance was remarkable, with an accuracy rate of 32.26% and a profit factor of 1.11. The price change over the three-day period was 5.67%.

Notably, the bot's average buy price was 0.1101 USDT versus an average sell price of 0.1103 USDT, clearly demonstrating successful trade execution within tight market spreads.

Despite a seemingly modest realized P&L, the total volume generated painted a different picture of success. The total buy volume was 2034.62 USDT against a sell volume of 2036.8 USDT, displaying a remarkable consistency and balance in trade execution.

## Comparative Analysis

When juxtaposing the performance in the two consecutive months, October's strategy marked a definitive improvement over September's. Not only did the P&L swing from a negative to a positive, but the efficiency and volume of trades also increased significantly.

In September, the bot's activities concluded with a total P&L of -4.84 USDT, a figure that reflected the high cost of fees despite the bot's active engagement in the market. In contrast, October saw a complete turnaround with a realized P&L of 0.85 USDT, an indication that the strategic adjustments and the transition to the V2 framework paid off.

The average prices at which buys and sells were executed remained tight in both months, reflecting my bot's ability to navigate through market volatility. However, the October bot battle showed an improvement in the average selling price over the buying price, albeit by a small margin, illustrating a more efficient execution of trades.

## Other Thoughts on My Experience

### Analyzing Performance in Dashboard

![Dashboard Performance](dashboard.png)

Throughout the Bot Battle, I relied heavily on the Hummingbot Dashboard to track my performance. The Dashboard's Strategy Performance page was instrumental, allowing me to upload the sqlite database directly and zoom in on the intricacies of my trades. This feature enabled me to drill down into the details of what worked and what didn't, providing a granular view of my strategy's execution.

While the Dashboard UI is a fantastic tool, I found it more efficient to use Docker to connect to my instance directly. This approach offered me the flexibility of starting and stopping bots without navigating away from the command-line interface, streamlining the entire process.

### Executors Allow for Easy Win/Loss Analysis

![Executor Status](status.png)

One significant advantage of the V2 executors is their transparent lifecycle, which clearly indicates how each executor is closed and in what state. This level of clarity is not just convenient for real-time analysis but also makes backtesting a breeze. By evaluating the performance of each executor, I can refine my strategy with precise adjustments, optimizing for better win/loss ratios in future trades.

For instance, seeing the number of executors that expired versus those that hit their stop loss or trailing stop provides a direct feedback loop for tweaking strategy parameters. By analyzing the executors that closed at a take-profit compared to those that didn't, I can adjust my take-profit thresholds to better capture market movements.

The lifecycle of a V2 PositionExecutor is a core aspect of Hummingbot's V2 strategies, offering a level of transparency and control that significantly enhances the strategic decision-making process.

![Lifecycle of a V2 PositionExecutor](lifecycle.png)

Understanding the lifecycle of an Executor is essential for optimizing V2 strategies:

1. **Inactive (Order)**: The journey begins with the creation of an order, which remains inactive until certain market conditions are met. This phase is crucial for setting up the strategy parameters that will define how the executor will engage with the market.

2. **Active (Position)**: Once the order is activated, it becomes a position that the executor will manage. This transition is the critical point where the market conditions have aligned with the strategy's entry rules, and the executor takes control.

3. **Closed**: The position can be closed based on several predefined conditions:
    - **Take_Profit**: The executor secures profits by closing the position once the price reaches a set profit target.
    - **Stop_Loss**: To mitigate risks, the executor will close the position at a predetermined loss threshold.
    - **Time_Limit**: Positions can be closed after a certain time, preventing exposure during unfavorable market conditions.
    - **Trailing_Stop**: This allows the position to benefit from price movements by adjusting the stop loss level as the price moves favorably.

4. **Expired**: If none of the closing conditions are met within a specified timeframe, the executor will expire the position. This state ensures that positions are not left open indefinitely, which could lead to unnecessary risks.

This structured approach provides several benefits. It allows for a clear understanding of why positions are opened and closed, making it easier to fine-tune strategies. The distinct states also facilitate backtesting, as each executor's outcome can be analyzed to understand the strategy's effectiveness under different market conditions.

The introduction of Executors in V2 strategies is more than just a technical update; it represents a shift towards a more disciplined and data-driven approach to algorithmic trading. By offering a clear path from the inception of an order to its closure, traders are equipped with the tools needed to execute more informed and strategic trades, paving the way for improved performance in the dynamic world of trading.

This granular level of analysis is what sets the V2 framework apart. It empowers traders like me to dissect and comprehend every aspect of our strategy's performance, translating these insights into actionable improvements. As I look forward to future competitions, I'm excited to leverage this powerful feature to its fullest potential, striving for even greater success in the Bot Battles to come.

## Moving Forward

With every battle, my understanding of the market's complexities deepens, enhancing my ability to finely tune my bots to these dynamics. The continuous exchange of ideas within the Botcamp community, especially in the #bot-battle Discord channel, has proven to be an indispensable resource. The camaraderie and shared learning experienced here are just as valuable as the trading itself.

As we gear up for future competitions, I remain committed to the iterative process of strategy development. The progress made from September to October serves as a motivating force, driving home the importance of adaptability and continuous learning in the fast-paced world of algorithmic trading. Stay tuned for my next update, where I'll delve into the intricacies of my V2 strategy performance in the upcoming Bot Battle.

For the next Bot Battle, I plan to deploy a V2 strategy in a spot exchange. market, since the goal of the V2 framework is to allow traders to run the same strategies on both spot and perpetual exchanges. I'll be sure to share my strategy and results, continuing the tradition of transparency and collective growth within the Hummingbot community.

To get involved and learn how to master V2 strategies, sign up for [Botcamp](/botcamp)!
