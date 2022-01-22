!!! note
    Originally buried in the FAQ, we converted this answer into a separate article to help users gain more intuition about the theory of market making, as well as the risks entailed. Note that this is for educational purposes only and is not financial or investment advice.

## Ideal case

Market making strategies work best when you have a relatively calm market, but with sufficient trading activity. What that means for pure market makers is that he would be able to get both of his bid and ask offers traded regularly; the price of his inventory doesn't change by a lot, so there's no risk of him ending up on the wrong side a trend. Thus he would be able to repeatedly capture small profits via the bid/ask spread over time.

![A calm market with regular trading activity](/assets/img/pure-mm-calm.png)

In the figure above, the period between 25 Feb and 12 Mar would be an example of the ideal case. The asset price stayed within a relatively small range, and there was sufficient trading activity for a market maker's offers to be taken regularly.

In this scenario, the market maker needs to be sure that the trading spread he sets is larger than the trading fees given to the exchange.

## Risk: Low trading activity

Markets with low trading activity higher risk for pure market-making strategies. Here's an example:

![A market with low trading activity](/assets/img/pure-mm-low-volume.png)

There's a risk in any market with low trading activity. The market maker may need to hold onto inventory for a long time without a chance to trade it back. During that time, the prices of the traded assets may rise or drop dramatically despite seeing no or little trading activity on the exchange. This exposes the market maker to inventory risk, even after mitigating some of this risk using wider bid spreads.

Other strategies may be more suitable from a risk perspective in this type of market, e.g. [cross-exchange market making](/strategies/cross-exchange-market-making).

## Risk: Volatile and trending markets

Another common risk that market makers need to be aware of is trending markets. Here's one example:

![A trending market](/assets/img/pure-mm-trending.png)

Suppose a pure market maker sets his spreads naively in such a market, e.g. equidistant bid/ask spread. In that case, there's a risk of the market maker's bid consistently being filled as prices trend down, while at the same time the market continues to move away from the market maker's ask, decreasing the probability of sells. This would result in an accumulation of inventory at precisely the time where this would reduce inventory value, which is a "wrong-way" risk.

However, it is still possible to improve the probability of generating profits in this kind of market by skewing bid asks, i.e., setting a wider bid spread (e.g., -4%) than ask spread (e.g., +0.5%). In this way, the market maker is trying to catch price spikes in the direction of the trend and buy additional inventory only in the event of larger moves, but sell more quickly when there is an opportunity to minimize the duration of the inventory is held. This approach also has a mean reversion bias, i.e. buy only when there is a larger move downwards, in the hopes of stabilization or recovery after such a large move.

Market making in volatile or trending markets is more advanced and risky for new traders. It's recommended that a trader looking to market make in this kind of environment to get mentally familiar with it (e.g. via paper trading) before committing meaningful capital to the strategy.

