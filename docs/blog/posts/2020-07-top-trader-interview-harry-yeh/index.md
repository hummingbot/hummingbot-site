---
title: "Top trader interview with Harry Yeh of Binary Fintech Group"
author: "coinalpha"
description: ""
date: "2020-07-01"
image: "./cover.png"
level: "Beginner"
tags: ["market making", "trader interviews"]
featured: false
---

We recently interviewed Harry Yeh, Managing Partner of Binary Fintech Group, who has been working in the crypto trading industry for the past 7 years. *Disclosure: Harry is an advisor to and investor in Hummingbot.*

Binary started as an OTC trading desk serving an exclusive set of crypto traders. Recently, using Hummingbot, they have started to run high frequency market making strategies. 

Below, we highlight a few excerpts from [the video interview](https://www.youtube.com/watch?v=PqKkfe9ZV6g), where Harry shared a bunch of important insights in crypto algo trading and market making. 

### What made you get into high frequency market making?

Humans are limited by time. For us, we can only think in terms of hours or minutes, but computers can handle seconds, microseconds or even milliseconds, so we are able to compress time and have computers execute trades. This is one of the reasons why we got into electronic market making.

For us, electronic trading is the frontier of trading because if you look at the traditional markets, Renaissance Capital at one point accounted for 30% of the NASDAQ volume. Electronic market making has been a big part of their trading strategy for those hedge funds.

My first exposure to electronic trading was in 2008. One of my friends who ran a hedge fund told me about it. I knew that this is the future. 

### How do you use Hummingbot at your firm?

I think **it’s really important to understand trading** before you run Hummingbot. One of the reasons I have success running Hummingbot is that I understand trading. 

> The best way to think about Hummingbot in our organization is that it’s just another trader on our team. 

For us, Hummingbot is a tool. At the end of the day, it’s like saying “OK, here’s a Lamborghini, and you don’t know how to drive it.” It’s exactly the same with Hummingbot. You really need to understand the mechanics of trading: limit orders, bid-ask, other parameters, order cancellations and even order level. 

### You inspired us to add the "hanging orders" parameter - how do you use this feature?

When I am running Hummingbot, I have one strategy where I might leave the orders on the book for days, because I think the market is bell shaped. It’s better to have limit orders that are open than that are cancelled because if you cancel them, you are not letting the market do its thing.

What most people don’t realize is that the market moves in waves, so if you have limit orders placed on the order book at all time, you can profit while the market moves. Now you can refresh them if you want but I think if you refresh the orders too frequently, what happens is when an order gets filled then the market moves, what ends up happening is you have now only one side of the order that’s filled so you are either trying to replace the order or end up doing a fill and take a loss. 

So I think what’s important for a lot of new users is maybe even running Hummingbot with a setting where it doesn’t cancel the orders. For example, I have one where I set the refresh time to four million seconds or something like that. The reason I do that is because I want these limit orders to be filled, and when the limit orders get filled, the bot will delay and wait till the market refreshes the new order book data and then it places new orders. I think when you see how that works, **you will understand how the market comes to you versus you trying to chase the market**. 

Now when you are doing proprietary trading and you think there’s a market breakup, you can chase that because you are human, you understand how that works. But when you are running a market making bot, you need a very different strategy. 

### How do you handle market volatility?

> I love volatility.

It’s definitely good to be able to pick the tops and the bottoms, but you can only really do that if you are constantly trading all the time.

**Market making works best when the market is trading in a range**. So if there’s a lot of volatility in the market, you just have to have a configuration that’s set up with much wider spreads. 

But I would say the only way to really kind of handle volatility is to scale in and scale out of positions. Of course, you can hedge with futures, but that’s a bit more of an advanced topic. Having wide spreads is important, and probably invest or trade with only what you can afford to lose. I think this is very important. 

We have a lot of instances running right now. It is market making between $9,200 and $9,300 for Bitcoin. When our limit orders are filled outside of $9,200, we can leave the bot running and right now we’ve got limit orders that are going to be filled at $9,300 or above but I have to wait because it’s already filled all the buy orders. 

Now if Bitcoin continues to drop, then I’m essentially a holder of all the Bitcoin. Then you have to make a conscious decision: "Should I stop Hummingbot now and execute (sell) all the Bitcoin that I just bought with a market order or limit order?" Sometimes we do that, and this is the human part because sometimes the bot doesn’t go back into the wave.

For example, Bitcoin was trading in the range of $9200-9300 for about 36 hours, and now it is trading at $9000-9,100. I have a bunch of sell orders above. In this situation, you have to be a trader and say “OK, do I think the market is going to recover, or do I think it’s going to drop?”

By the same token, if you think the market is going to go up, and you don’t want to have your market makers execute all the sells for you, stop your market maker and wait for the price to go up, and do some math. If it is going up, set very clearly defined exits. Don’t be greedy. 

---
- Check out the [full interview video](https://www.youtube.com/watch?v=PqKkfe9ZV6g)
- For more trading advice from Harry, check out his [keynote speech at the 2018 North American Bitcoin Conference](https://www.youtube.com/watch?v=HVbKe_778-8)