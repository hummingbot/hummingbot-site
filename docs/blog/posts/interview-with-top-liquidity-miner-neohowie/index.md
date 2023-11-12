---
date: 2020-05-27
authors:
  - coinalpha
categories:
  - Academy
tags:
  - Market Maker Interviews
---


# Interview with Top Liquidity Miner Neohowie

![cover](cover.png)

It has been almost three months since we launched [Miner](https://miner.hummingbot.io). We are glad to see many miners join liquidity mining and compete with each other fiercely.  

In this post, we introduce you to Neohowie, who ranked into Weekly Top 10 a few times in the past. He started to dip his toe in crypto in 2015, and has learned a bunch about market making from participating in our liquidity mining program. Let’s dive into his journey! 

<!-- more -->

**Disclaimer: Not financial advice. All views expressed in this interview are the interviewee’s and do not represent the opinions of hummingbot.io. Hummingbot does not guarantee nor claim to guarantee profits.**

### Can you tell us how you got into crypto trading? 

I first learned about crypto in 2015. At that time, I was a non-believer. It looked like a cyberpunk trading instrument. Then between 2015 and 2017, when I started to look into this a little bit more, I was like “WOW the technology makes a lot of sense”! The decentralization aspect of it and the need for it all make a lot of sense. I think that’s the time more funds are dedicated for Bitcoin trading. 

I’m from the traditional finance industry. What crypto trading allows is a much more sophisticated trading environment. In some sense, it has outmatched traditional finance.  

In crypto, you have near instant settlement. You can potentially get rid of a lot of middlemen that are ever-present in the traditional finance world. And also with exchange APIs, now a lot of people can make markets on their own. In traditional equity markets for instance, you cannot make markets on your own. You have no access to the order book, you have to pay for it, but only the big brokers do. But crypto markets are more open, which allows for a lot of new possibilities in terms of trading. That’s how I started to get into learning about the trading aspect of crypto.

![](journey.jpeg)

### When you started, what tokens did you trade?

I started with Bitcoin. I actually invested in a fund that focuses on just trading Bitcoin because one, I wanted to have a professional manager doing the trades and two, just learn from these guys. I figured when it comes to a new asset class, learning how other people are doing it and having more powerful minds thinking about it is the better way to go. 

Besides that, I started looking into Ethereum and a little bit of altcoins especially back in the 2017 boom. I basically touched upon various altcoins as well, and just tried to learn as much as I could.  

### When did you start using Hummingbot? 

I was really drawn into it before your liquidity mining campaigns started. I think around February, because one, I want to be an active market maker and see how it feels, and two, I want to earn some of the rewards when you launch liquidity mining. I can do outright lending on BlockFi or other lending platforms, or I can do staking for some coins that offer staking rewards. But I wanted to also use Hummingbot to make some money off of my holdings that I don’t intend to sell. To me, it was another way to potentially generate income from my holdings.  

### How has your experience been so far with hummingbot?

Honestly, with each release that you guys put up, I’m more and more impressed. I think there are still a lot of things to do in terms of how Hummingbot can help us become better market makers. I think you guys are the first one who does decentralized market making, I actually see a path toward mass adoption. You guys actually listen to the community, making it easier to use for miners with each release. 

I remember that when I started with using v0.23.0, there were still some performance issues, and when liquidity mining campaigns started, immediately there were better features to see your market making performance, to stack your orders, etc., and over time there is a more informed community on Discord where traders discuss and learn from each other, which I found very helpful. 

### How long did you spend to figure out Hummingbot? How much effort did you put into it?

If you ask my wife, she’ll say “way too long” as I was quite hooked to it at the beginning! When I first knew there wasn’t a binary and easy installer yet, there is a lot of inertia on my part. I don’t want to set up all the things myself, like set the environment, compile the code myself, etc. 

But then when you guys release the binary, the installation process got a lot quicker. As for setting up the actual bot, it took me some time, like a day or two. 

At the very beginning for instance, you don’t know what strategy to start with. Say you have chosen the cross-exchange strategy, you have to figure out how to setup APIs to each exchange, you have to store your API key and secret securely, and put them into the bot and make sure it doesn’t crash your computer. And later in the process I found that when I was running hummingbot and my computer went to sleep, my bot just killed itself because you know initially I didn’t run it in the cloud. So I figured I have to change my computer settings to make sure it doesn’t go to sleep in order for the bot to continue to run. 

All in all, it took like 2 weeks for me. The initial hump is the hardest part - getting the API keys, getting the bot up and running, and having enough courage and putting enough work to place some level of inventory. I think setting up the strategy, parameters and configuration file is not a lot of work, you can try with a fairly small amount or you can do paper trading mode, which is good by the way. But the initial hump is very difficult. For me, it was the determination, the catalyst that kicked the butt to try the bot before the liquidity mining campaign started because that would be the time I can earn real rewards.  

### You are one of our top liquidity miners. How has your experience been so far with liquidity mining?

I started liquidity mining with Zilliqa and Harmony pairs. It has been quite a bit of learning experience. I have been able to earn rewards but I also learned some hard lessons like during the March sell-off. Because I didn’t set up certain parameters such as inventory skew and kill switch, when the market gapped one way, my inventory level massively skewed. Suddenly I owned a lot of coins that I didn’t intend to. It took some time for me to learn how to tweak the bot to mitigate these sort of situations. Mike and the team also talked about making features to protect market makers in this kind of volatile market environment.

> **Because of hummingbot, I learned a lot more about market making than I knew before, even though I have been involved in traditional finance for 15 years. This is really great!**

### You mentioned that you mainly traded ONE and ZIL pairs, why did you choose these pairs?

Yeah, this is a good question. I am market making for the tokens that I’m comfortable holding and I also look at the yield. For example, I think ZIL/BNB has a better yield than ZIL/USDT even though the former has less liquidity. I’m happy to do more market making for less liquid pairs, I’m happy to hold some level of ZIL and obviously BNB even when there’s a market downturn or higher market volatility, and the yield is higher. That’s my decision making process. 

### Have you been able to make money so far? 

Yes, in US dollar terms, I think overall I made some money. Even in the ETH terms, I ended up with a little bit more ETH. If I set my parameters a little bit more wisely, I could have made even more. 

In traditional finance, measuring the success of market making is really simple because you make more US dollars, then you make more money. In the case of crypto, it really depends on what each miner’s base is. If their base is BNN or ETH or USD or other cryptocurrency, they have to make the call and set the performance goal based on that currency. 

### What strategies do you use to participate in liquidity mining?

I only do pure market making, and play around with the kill switch and the spread to the mid depending on how you feel the volatility is. If you feel the market is very volatile, maybe widen up the bid offer spread depending on how much inventory that you have. If you feel the market is quite calm, you make a tighter bid offer. Or if your inventory skew is ok, you make a tighter bid offer so that you can earn a bigger piece of the reward pie. 

It was pretty cool that the Eagle Club membership is based on the rewards you earn. When you know that you earn 15% of the reward pool, it feels kind of cool. 

![](liquid.jpeg)

### Have you tried multiple orders for pure market making? 

I have not done multiple orders for the same pair.  

### Have you tried to set up different instances of the bot?

What I was ultimately doing is running multiple instances. At one point, I was running one bot for ZIL/BNB, one for ZIL/USDT and one for ONE pair when Harmony ONE is still in the program. 

### Do you think our current strategies are simple enough for miners to get started?

Yes and no. I think it’s simple for people who have some technical background or financial knowledge. 

Normal people need to put in some time. It’s still not like the traditional crypto mining where you just click a button, and sit there and wait. By default, market making is just more complicated. I think there is a lot more room that you can do to learn how to make it easier for people to use, and to make more features for the power users.

### Did you change your bots’ settings often based on the trends and signals, and how often did you change them?

Depends on how volatile the market is. When all of sudden I saw my inventory level become 90:10 from 50:50 because I didn’t use inventory skew, I was like SHIT! The moment drove me to learn a lot more of other features, the kill switch and all the other stuff. 

I changed the settings everyday or every other day sometimes. Somedays if there’s nothing that happens, I’ll just leave it out there. Totally depends. You respond to the market.

Frankly for me, I tried to follow the news of the specific pair. But that’s really a small part of the equation. **When your inventory level really starts to skew to one way or the other within your predetermined band, I think that’s when you start to react. Or when you read the news that there will be a fork of one token, then I’ll really pay attention.** I might switch off my bot, or set up my kill switch in a much more narrow band.  

### What important lessons or insights have you learned while trading using hummingbot?

One thing that I learned is not being shy or afraid. Chat with people in the community to see how they are dealing with it. I think the biggest thing we are dealing with as the Hummingbot community was that March selloff. Everyone experienced a big inventory skew. So how to use certain features to protect against that was something we are discussing on Discord. 

Another lesson to be learned is what those new things/features can do to make money on top of just earning liquidity mining rewards, i.e. become a better market maker. It takes a long time to learn and has a steep learning curve, but the more you learn, the better market maker you’ll become. 

### Lastly, do you have any recommendations or trading tips for fellow miners?

For early-stage users, don’t worry and just try it. You can try with a very small inventory level. Having some skin in the game is really important. 

For the more seasoned traders, share more insight and trading strategy. Let’s just keep talking in the Discord channel. Just don’t be shy. This is all new and it’s a collective learning experience together. I think this is really the most important thing for all of us to grow and make some money making markets. 

### Learn More

- [Hummingbot Miner’s app](https://miners.hummingbot.io): current liquidity mining campaigns
- [Hummingbot Help Center](https://support.hummingbot.io/)
- [Liquidity mining free trainings](https://www.eventbrite.com/e/learn-to-use-hummingbot-crypto-market-making-live-training-session-tickets-100968806418)
- [Liquidity mining whitepaper](https://coinalpha.com/liquidity-mining-policy)
- [Getting started](../2022-01-level-1-b-introduction-to-hummingbot-and-hummingbot-liquidity-mining/index.md)

For exchanges and projects who would like to learn more about liquidity mining, please contact us at [partnerships@hummingbot.io](mailto:partnerships@hummingbot.io).