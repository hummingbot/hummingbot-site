---
title: "Top liquidity bounty hunter interview featuring David Salter"
author: "Yingdan Liang"
description: ""
date: "2019-07-25"
image: "./cover.png"
tags: ["trader interviews", "liquidity mining"]
level: "Beginner"
featured: false
---

It has been three weeks since we launched $ONE Makers liquidity bounty program with Harmony Protocol. The total trading volume of $ONE has surpassed 130 million. Bounty hunters are fiercely competing with each other to move up our leaderboard.

In this post, we introduce you to David Salter, who ranks #6 (as of July 22, 2019) and has pocketed ~1ETH bounty rewards. He has a relatively strong technical background and has been working in the telecommunications and finance industry for a long time. He fell down the crypto trading rabbit hole in July 2017, and is now able to consistently generate 0.5%-3% profit [per trade] during his trading sessions running hummingbot.

Let's learn David’s experience and trading tips!

***Disclaimer: Not Financial Advice. All views expressed in this interview are the interviewee’s and do not represent the opinions of hummingbot.io. Hummingbot does not guarantee nor claim to guarantee profits for all users.***


### How has your experience been so far using hummingbot?

Very good. As a project, the community is great. The developers are very good. You’ve also got a product release cadence. You release [a new version] every couple of weeks or so. That gives us a lot of confidence in the product itself. From that point of view, you could see the project is evolving quickly. It’s working well, which is great. The stability of it is very important. Bugs got fixed very quickly. I think all of these things make people like me very happy.

### Since you started using hummingbot a little while ago, have you been able to make money so far?

(Laughing) Some, not much. Given where hummingbot is, I wasn’t expecting to make money. I’ve used various trading bots previously. When [it comes to] software developing, you are going to expect a bumpy ride especially early days. So I don’t have much expectation, it’s more about learning. Just wanted to see if it’s going to be a good product for the future. Does it fit what I want to do for the future?

### So you didn’t lose money by running hummingbot, right?

No. I’m fairly cautious. I’ve got the kill switch. Also from inventory point of view, I haven’t put a lot of money in. I've been keeping the inventory small deliberately just so I can learn and understand how it works.

### What strategies do you use to trade?
I use pure market making and cross-exchange market making. I’ve tried out a few different things. I’ve noticed with stable coins are not so great on cross-exchange market making, they seem ok with pure market making.

I’ve also tried different coins and tokens; so far I found reasonable success with BAT-ETH. I think as the product progresses, you’ll introduce more flexibility and custom strategies, that’s going to have a really good impact on the whole thing.

I’ve been running between 0.5% and 3% profit according to both the profitability calculations from the history command and manual tracking. I look at trends on the hourly chart and stop the bot if market is dropping rapidly. I also trade any profits in USDT to USDC when the market is up to lock in profitability in case I miss or overshoot a dip.

### How do you like the hummingbot community?

I’ve noticed on Discord for instance, there’s probably a 50/50 split of people who are highly technical and who are less technical. And the community is great. The amount of help your staff gave on Discord is phenomenal.

![](./club.jpg)

### Did you come across any issues in the setting up and/or configuration process?

I use Docker myself for work, and I found that relatively straightforward once you understand how it sets up in terms of where the files go and where the logs are, etc.  It’s relatively straightforward if you know just a little bit about the technology to run the commands, how to update, and so on.

### Do you think our current strategies are simple enough for people to understand?

Yes, when I first started, I installed 0.6.0. The advice at that time was the cross-exchange [market making strategy] would probably be the simplest for new users.

Having used hummingbot for a while, I’m not sure if that’s correct, I think pure market making is actually far more straightforward. When you are dealing with a single exchange and two currencies, it’s easier to figure out what it’s actually doing in your mind. Cross-exchange has more complexity because you have to keep four different types of inventory and you have to balance that out. So pure market making is the go-to for me as a starting point.

One of the things I did prior to finding hummingbot was that I tried to create my own strategy trading [bot]. I was using Node-RED. I was feeding signals from TradingView and another project called CryptoSignal into Node-RED. When you start creating strategies and making logic decisions and so on, it becomes very complex very quickly. I think keeping things simple is really important.

### So far have you tried multiple order for pure market making strategy?

Yes, I have. Interestingly I found that if I was setting up a low number of multiple like 2-3, allowing the inventory to actually run out so it couldn’t place buys or sells, that would actually reach a better balance for the overall strategy than having more inventory and letting it run with itself. Again, little by little, test and learn, ramp up. Don’t go from 0 to 60 in a day.

### You mentioned TradingView and CryptoSignal, what other tools beside these and hummingbot do you use to help you trade?

There is another one called Cryptowatch. For news feed, I use feedly as my aggregator, and also News Now, which has a specific crypto section. And Twitter is a good source as well.

### Did the news affect your trading?

No. When I followed everybody else down the rabbit hole back in July 2017, I was on the hype cycle. I think I’ve learned some hard lessons through that. I got too attached to a project that didn’t go anywhere. For me, it’s getting rid of the emotions, getting rid of the noise and looking into it from a more technical analysis point of view, or from a point of view where you have something very specific you truly believe in and help them out with liquidity or something similar.

![](./wave.jpeg)

### What important lessons or insights have you learned while trading using hummingbot?

Sure. One of the first things is don’t get greedy. Most people started crypto trading at the 2017 boom. Everybody was like “YAY great, I’m gonna get my lambo!” or “to the moon!” All these memes came out. Of course it’s not like that. Crypto is just like any other assets. Slow and steady, you have to learn how to trade properly, learn from people who’ve been there and done that, understand what it is you are getting yourself into, and read. There are great books and reads on trading in general. It is not different from any other types of trading. It’s a lot faster of course.

One of the things is dealing with the 24/7 of crypto. Do I stay out through the night? Always watch what’s going one? Get no sleep? And then finding what works for you is important. [So do] not stretch yourself too much, [do] not invest too much money, and treat it like any other trading or investment.

------------------------------------------

Earn rewards by [installing hummingbot](https://github.com/coinalpha/hummingbot) and registering for the program.

Join the conversation on [Discord](http://discord.hummingbot.io).

Follow us on [Twitter](https://twitter.com/hummingbot_io).
