---
date: 2023-01-01
authors:
  - foundation
categories:
  - Academy
tags:
  - Level 1
---

# Top Beginner Misconceptions about Market Making

![cover](image_0.jpg)

**by Kyle Mizui**

Trading is a rewarding and risky activity. If you’re new to hummingbot, welcome! You’re in the midst of a mature community that has found market making to be both exciting and profitable in the long term. That might be you, but before you go all-in and mortgage your house in crypto trading, here are top seven pitfalls and misconceptions that all Hummingbot beginners face. This article works best if you’ve at least spent some time taking Hummingbot on a test drive, but it’s by no means a requirement. Read it well, as they say, prevention is better than cure, and a dollar saved is a dollar earned.

<!-- more -->

### **Common misconceptions:**

1. Hummingbot is a money printer.
2. Market making works best when markets are volatile or stable.
3. There exists the optimal configuration that prints money.
4. The higher the yield on the Hummingbot miner platform, the higher the returns.
5. Fees are negligible.
6. “It’s been profitable for the past week/month, time to go all in.”
7. More bots, more strategies, more rewards, more profits.




#### **❌ “Look at the leaderboard page. Hummingbot is a money printer.”**

My definition of money printing is “doing something effortless that results in a high return.” Hummingbot campaigns might look like they give off the wildest return, and they do, assuming you mine them without losing money. I’ve seen miners who profit 100% in a few months. Conversely, I have also personally experienced [losing 20% in 20 minutes](https://andrewsiah.medium.com/how-i-lost-20-in-20-minutes-764595459ed2?ref=blog.hummingbot.org). One thing is for sure, hummingbot is extremely rewarding for those who put in the time to understand, learn, and experiment. By no means does this mean you need to be able to code an Algo-trading bot from the ground up or be able to do external alternative data analysis. But it requires you to understand most of the parameters in hummingbot and experiment thoroughly on how to optimize rewards over risk.

#### **❌ “Markets are going up! Time to run more bots! ”**

Market makers earn the spread from the difference in the bid (other’s offer to buy) and ask (other’s offer to sell). Since market makers bear the inventory risk, which is harmful when a market takes a directional run (up or down), it is best to operate bots when the market fluctuates between a range, such as the image below.

![graph_example](image_1.jpg)

There’s [an article on hummingbot](../2020-09-what-is-market-making/index.md) that describes the mechanisms of market-making more, and in essence, it is most wise to search for markets that are operating like those above and be able to make a lot of small profits through small volumes.

#### **❌ “There exists a configuration that is perfect for making money in all market conditions.”**

Far more often than not, you’ll find beginners come into the hummingbot community and ask for configs from other profitable traders. Some traders even share it, but it doesn’t work the same. Why? Because every market pair requires different configurations at different market conditions to be profitable. For example, let’s just hone in on bid/ask spreads. If the markets are volatile, increasing the bid/ask spread might be wise so your orders are not taken as much, vice versa. By simply fixing on a bid/ask spread, you might be exposing yourself to buying or selling too much in unfavorable market conditions. In essence, it takes some time and effort to learn about trading in different market structures. Who knows, you might be the one that discovers the most profitable strategy of them all.

#### **❌ “1000% APY yield, well, let’s mine those before everyone else figures out.”**

The yield displayed on Hummingbot miner reflects the rewards over risk you get for mining on that pair. Far likelier than not, a higher yield correlates with increased risk when trading the pair. These risks often come in the form of sudden price movements of more than 5-10% in a few seconds, thus taking out all the market makers who were buying or selling. Another risk is [inventory risk](../2020-10-inventory-risk/index.md), which all market makers have to bear. High yield pairs tend to be newer ICOs that haven’t gotten the community’s trust yet, thus a reluctance of market makers to hold inventory of those coins. But of course, the rewards just might overcome the risk, and it’s up to your risk appetite.

#### **❌ “0.02% fees? That’s $0.02 for my $100 order sizes, no big deal.”**

As a market maker, you’ll be dealing in a lot of volume. It’s not bizarre for an account of $10,000 to be trading millions in volume in a month. Market-making firms even trade billions in a day. When you consider it’s 0.02% of $1,000,000, it comes to $200 a month. Out of an initial capital of $10,000, $200 is 2% of your profits. So if you can ever find a way to obtain discounts, such as using other’s kickback on referral codes, or through picking coins that are lower in fees, or even picking cheaper exchanges. Remember that every basis point (financial lingo for 0.01%) lower in trading fees make a huge difference.

#### **❌ “I’ve earned 5% on this pair for the last week! Time to pour all my money in!”**

I know the rush. It’s exhilarating. When all you’ve heard from traditional markets is that 10% for a hedge fund is a brilliant performance, and here you are earning 5% in a week, we all feel like a financial whiz. This is too easy. But here’s the bummer, and I don’t like being the bad guy here, but you just might have been lucky in the past week. Here I define luck as an event that turned out well, but you didn’t plan for it or know why it happened. In crypto, it’s not surprising to see rises of 5% a day, and that might be one of the reasons why your PnL was brimming.

**Example:**

- You had an inventory of a coin that you were market-making, which was pumped by someone out there, and it grew by 20% overnight. Luck.
- Your bot crashed after selling out all your inventory when the market crashed by 5%, and you woke up to an inventory that profited 5% as compared to everyone else. Luck.

Luck isn’t a bad thing, I am glad it worked for you, but it works both ways

 as well. It’ll be wiser to slowly up your capital in the bot over a few days instead of going all in at once. I wrote a personal article on [how I once lost 20% in 20 minutes](https://andrewsiah.medium.com/how-i-lost-20-in-20-minutes-764595459ed2?ref=blog.hummingbot.org) by being too impatient, and it has taught me to be patient amidst all.

#### **❌ “If one bot earns me $5 an hour, then 50 bots earns me $250 an hour, right?”**

That might be true to a certain extent, and some miners on Hummingbot tend to operate between 10-40 bots. But one thing that’s often overlooked is the time, energy, and anxiety it takes to manage each extra bot. As you market make and operate on more bots, more exchanges, and more strategies, it gets hard to assess your current portfolio conditions at times. As some market conditions might inevitably cause losses, it might drain you in trying to figure out which bot to keep operating and which to shut down. The advice here is simple. Scale-up, but do it one at a time, and make sure you can assess the bot’s performance and stability before ramping more up. Market making on hummingbot is a marathon, not a sprint. Run it well, and it will profit you a lot more in the long run.

