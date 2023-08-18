---
title: "Top liquidity bounty hunter interview featuring Dominator008"
author: "Yingdan Liang"
description: ""
date: "2019-09-03"
image: "./cover.png"
tags: ["trader interviews", "liquidity mining"]
featured: false
---
It has been just over two months since we launched $ONE Makers liquidity bounty program. With heated competition, bounty hunters have been working very hard to rank higher and higher in our newly launched, real time leaderboard!  The trading volume of $ONE in July and August totaled **USD$5.98mm**.
 
In this post, we introduce you to Dominator008, who finished **#1** in the August reward period, and has earned **over 10 ETH** in the previous period. He is a software engineer by trade and has a highly technical background. He joined $ONE Makers in mid-July, and is now using hummingbot to trade various pairs, not just ONE.
 
***Disclaimer: Not financial advice. All views expressed in this interview are the interviewee’s and do not represent the opinions of hummingbot.io. Hummingbot does not guarantee nor claim to guarantee profits.***

![](image1.jpeg)
### How did you hear about hummingbot and get started?

I heard about hummingbot from Harmony. I learned that they were trying to partner with hummingbot for the community to be able to market make themselves. Besides hiring professional market makers, they decided to have hobby market makers and test it out how it works in production, so that’s when I learned about hummingbot and started using it. 

### How has your experience been so far using hummingbot?

It’s been very positive. From 1-10, I would rate it 9. I enjoy the experience, very nice UI and very nice intuitive set-up guide, very detailed documentation, and also awesome support team. Your founder Mike and all the team are very supportive. If I have any questions, I just ping them and get answers very quickly. 

### Have you been able to make money so far? 

You mean besides the liquidity bounties? I think I’m about breakeven. Actually I might be slightly profitable. There is a profitability tracker [in hummingbot], but I think it only tracks the inventory not the actual trades, so I have my own script to track the actual performance. (You can find Dominator008’s performance calculator [here](https://github.com/Dominator008/hummingbot-trades-calculator).)

### To participate in $ONE Makers, what strategies do you use to trade? 

I only use pure market making. I tried the cross-exchange market making strategy for a little bit. It wasn’t generating many trades because it depends on market conditions. It doesn’t guarantee that the take orders will end up with profit. I prefer more volume and more number of trades to average profit of individual trades, so I prefer pure market making. 

### Cool, did you come across any issues in the setting up and/or configuration process?

I think it’s very straightforward. There were a few bugs, which the team already fixed during the process, like the one that is not tracking volume and duplicate orders on Binance. 

In terms of the setup, it has been very straightforward. There is good documentation. There is nothing to hack around. 

### Do you think it’s relatively easy because you have a lot of technical background?  

I think my technical background definitely helps, but even for people who are less technical, they should be able to follow the instructions because they are straightforward and it just works. 

### How long did you spend to figure out hummingbot from the very moment you heard about it to the moment you actually got it up and running? How much effort did you put into it?

In total, a few hours. Overall it didn’t cost me a lot of time to set it up. 
 
### Do you think our current strategies are simple enough for people to get started?

I think the documentation is really good. It has examples in it and it explains the strategies very well. 

For pure market making, I guess for the most advanced features such as multiple orders, it’s better to have more documentation on that. For the inventory skew, I like the documentation a lot. It’s very detailed, it has the formula, explanations, and the rationale. 

### Have you tried multiple orders for pure market making?

Yes, I always use it. I normally use 5. I think I tried 3 at one time. Based on how the market moves, it seems like 5 with my spread and increment settings would catch more spikes.

I tried 10 once, but I hit Binance order limit. Basically you can’t place 10 orders within 1 second. So I just gave up 10. I think 5 is a reasonable number. I didn’t lose money. I can breakeven or even generate some profits with current settings. 

### In addition to ONE pairs, have you ever tried to trade other token pairs using hummingbot?

Yes, I did. For example, there’s a Binance Celer trading competition. I used hummingbot for that. I traded using really serious money. For the BNB-CELR pair, **I generated 10 bitcoin worth of trading volume on average everyday**. I kept a very tight spread, so for that I might be losing some money but it was good to test. 

![](image2.jpeg)
### Lastly, do you have any recommendations or trading tips for fellow traders? 

Just experiment with different settings. For each pair, it’s different, and for each time, it’s different. It changes from time to time, so there’s no one-size-fits-all solution. 

If there’s more inventory, I’ll adjust the setting more frequently. I just adjust the order size. For spread, I usually keep it constant unless there’s good news going on. I followed Harmony telegram. Sometimes it announces a partnership or something going on. 
 

------------------------------------------

Earn rewards by [installing hummingbot](https://github.com/coinalpha/hummingbot) and registering for the program.

Join the conversation on [Discord](http://discord.hummingbot.io).

Follow us on [Twitter](https://twitter.com/hummingbot_io).


