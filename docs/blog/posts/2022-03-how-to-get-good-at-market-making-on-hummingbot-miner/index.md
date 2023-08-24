---
date: 2022-03-29
authors:
  - foundation
categories:
  - Trader Tips
---

# How To Get Good At Market Making On Hummingbot Miner Platform


*by Lã Minh Hoàng*

Hey guys, **Wojak** here!

I hope you guys have a good day! Today let's dive into the topic of how to get good at market making on the Hummingbot Miner platform.

So a little bit of introduction first! I am Wojak, an active member of Hummingbot miner's community, and I have been competitive market making on the platform for the past year.

As we all know, market making is not simple. It is even harder to compete on the Hummingbot Miner platform. Getting good at market making requires the knowledge of market dynamics and technical skills to scale up the business. In addition, your funds could be in grave danger if you don't have a good strategy that can counter adverse market conditions.

Therefore, It would be great if a beginner could begin their market making journey with a bag full of tips and tricks! Say no more; I'm here to help!

<!-- more -->

**The Five Pillars Of Success**
===============================

![image 2022-03-29 212320](image_1.jpg)

So what is the "secret sauce" for success? Of course, you will need a magic glass ball to foresee the market.

Nope, that is just a fantasy! In my experience, the best way for a beginner to be successful is a system of routines that can help you to improve your performance over time.

I call it "The Five Pillars of Success"; sounds good, right? Each pillar is a routine that focuses on improving a skill that should help you get good at market making.

Those pillars are Learning, Watching, Coding, Tracking, and Community.


**Learning**
============

![image 2022-03-29 212439](image_2.jpg)

It is crucial to arm yourself with knowledge. The more you understand, the better you are at figuring out the solution for every situation.

Like, what should I do with this parameter? Should I set the spread big or small for this market condition? What strategy should I use, Pure Market, Making, or Cross Exchange Market Making?

Or, how to improve liquidity mining rewards? Should I tighten the spreads or increase my funds? Which token should I put more funds into to increase return?

If this is your first time using Hummingbot, those questions usually are very tough to answer. But don't worry, I will share with you some of my sources that if you spend some time each day learning, your knowledge will become a pretty sharp knife to "peel" any tricky question in no time!

For a quick rundown of market making and how to configure the Hummingbot client, Hummingbot's academy articles, documentation, Youtube videos, and GitHub repository are good places to study:

* Hummingbot Academy articles: [https://hummingbot.io/en/academy](https://hummingbot.io/en/academy?ref=blog.hummingbot.org)
* Hummingbot client documentation: [https://hummingbot.org/docs/](https://hummingbot.org/docs/?ref=blog.hummingbot.org)
* Hummingbot Youtube channel: [https://www.youtube.com/c/Hummingbot](https://www.youtube.com/c/Hummingbot?ref=blog.hummingbot.org)
* Hummingbot GitHub: [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot?ref=blog.hummingbot.org)

For more advanced traders, scientific papers and books would be the places to dig out the nature of market making. Here are some of my favorites:

* "[High-frequency trading in a limit order book](https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf?ref=blog.hummingbot.org)" by **Marco Avellaneda** and **Sasha Stoikov**.
* "[Optimal High-Frequency Market Making](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf?ref=blog.hummingbot.org)" by **Takahiro Fushimi, Christian Gonz'alez Rojas,** and **Molly Herman**.
* Any papers from [Sanmay Das](https://cs.gmu.edu/~sanmay/?ref=blog.hummingbot.org).
* Not related to crypto but also a good source on market making in general: "[High-frequency trading: a practical guide to algorithmic strategies and trading systems](https://ahmetbeyefendi.com/wp-content/uploads/2020/07/High-Frequency-Trading-Irene-Aldridge.pdf?ref=blog.hummingbot.org)" by **Irene Aldridge**.

Hummingbot client source code is mainly in Python, so learning Python is always recommended for understanding the bot logic and customization. Here are some excellent sources for learning Python:

* Python crash course: [https://github.com/srebalaji/python-crash-course](https://github.com/srebalaji/python-crash-course?ref=blog.hummingbot.org)
* Another Python crash course: [https://www.youtube.com/watch?v=rfscVS0vtbw](https://www.youtube.com/watch?v=rfscVS0vtbw&ref=blog.hummingbot.org)
* Another other Python crash course: [https://www.youtube.com/watch?v=\_uQrJ0TkZlc](https://www.youtube.com/watch?v=_uQrJ0TkZlc&ref=blog.hummingbot.org)


**Watching**
============

![image 2022-03-29 212605](image_3.jpg)

Watching the news and looking out for market crashes is what you should do daily to protect your funds.

Crypto markets by nature are very volatile; a small Bitcoin dump in the magnitude of 1% to 5% could translate into a significant drop on other altcoins, especially the one with low liquidity.

The immediate effect of such drops is that your hard-earned profit or even your funds could get wiped out instantly. It is even worse if the declines continue for several days.

So what can you do to mitigate such risk? For me, assessing the market first thing in the morning and fine-tuning my strategy depending on the assessment are what I do to protect my funds daily.

Whenever I wake up, I always take a glance at:

* TradingView Bitcoin chart in 1-hour time frame with simple trend indicators like EMA or Bollinger Band
* CryptoPanic Trending section

Also, I would look for any price alert that got triggered overnight to see if there is any losing pair or not. You should set a price alert on any pair you are market making on; it could be your lifesaving buoy before an imminent market downfall.

Those are usually enough signals to assess if today is a green day or a red day.

**Green day** means that the price is slightly uptrend or sideways, few to no price alert, and most of the news is bullish.

**Red day** means that the price is in a strong downtrend, there is a lot of price alert, and most news is bearish.

For a green day, I am confident that market making will make a good profit, and I could leave my bots running all day long without worrying that my funds could get rekt.

However, if it is a red day, then I would limit my exposure to the market:

* Reduce my funds for market making
* Use Inventory Skew feature and set ratio between inventory and cash to something like 30:70
* Reduce order amount size
* Turn off the bots
* Sell off all inventory to recover funds



**Coding**
==========

![image 2022-03-29 212739](image_4.jpg)

Hummingbot client is in Python and open source. Tinkering the source code and making customizations are always the better ways to have an edge on your trades.

You can find the source code of the Hummingbot client here:

* [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot?ref=blog.hummingbot.org)

By default, the Hummingbot client is an excellent tool for market making. However, you could add much more value to it if you know Python, for example:

* Improve or add new features to the current strategies like Pure Market Making or Avellaneda Market Making so that they can work as you want
* Fix annoying bugs that prevent your bots from running stably
* Create your custom trading strategy
* Use the script feature of the Pure Market Making strategy to change parameters on the flight

If you compete on the Hummingbot Miner platform, customizing your bot could bring you a massive advantage over other miners. In my case, I have made a custom script on the Pure Market Making strategy to dynamically change the spreads according to the market conditions to have optimized spreads that could reduce my losses and increase my mining rewards hugely. It is the main reason I could maintain my top position on the miner leaderboard for so long.

So if you have some ideas on how to beat the market and accrue more mining rewards, make sure to code those ideas right away, make some runs, and see if your ideas are bearing fruit or not.

If your ideas don't work out, don't worry, as I too have had so many ideas, but most of them didn't work out in the end. I spent half a year just trying out new ideas to improve my bot performance, and after so many failed attempts, I finally made it to the top.

Keep trying until you get there!

However, make sure that you use as minimal funds as possible when trying new ideas because it is a risky endeavor that promises no return.


**Tracking**
============

![image 2022-03-29 212854](image_5.jpg)

Don't go making money without knowing how much you already lose. Keep a spreadsheet under your bed to have a good sleep every night!

Tracking my bot performance is one of my favorite routines of the day. It gives you insight into how good or bad your bot is doing and probably will give you ideas on how to improve them.

There are many metrics to track, and choosing which metric to track could be confusing. However, the ones that work best for me are:

* Your holding by dollar value
* Your earned rewards by dollar value
* Your change in holding compared to yesterday
* Your change in earned rewards compared to yesterday
* The amount of profit or losses you acquire each day is the sum of the change in holding value and the change in earned rewards
* The profit or losses as a percent of yesterday's holding value

You can find the sample spreadsheet with those metrics here:

* [Sample Performance Tracking Spreadsheet](https://docs.google.com/spreadsheets/d/1gaPq6-hMM5sebl0Jod9y_LKOpi8iD0IfeLyNmB1cCKE/edit?usp=sharing&ref=blog.hummingbot.org)

Although those metrics look simple in telling how good your bot is doing. If you could track those metrics every day, they could become a potent source of insight for improving your bot performance.

You can, of course, extend the spreadsheet to track single pairs if you want finer details on your bot performance.

The spreadsheet has been a big help in developing my script and strategy to win the leaderboard. It helps me differentiate between good and bad implementations to stop wasting time and iterate new ones. When the green days come, the spreadsheet also boosts my motivation significantly. When the red days fall, it helps me stop losses and get my funds under control.

So, it is dangerous to go alone, take the spreadsheet and make some money!


**Community**
=============

![image 2022-03-29 213031](image_6.jpg)

Hummingbot has one of a kind community where everyone is competitively making money but is also very open with their "secret sauce".

Taking part in the community is the most rewarding routine that I can do all day. Making discussion, asking questions, clearing people's doubts, helping those in need of guidance could get you a lot of perks; some notable ones are:

* The act of asking and answering questions eventually will improve your understanding of how to make money effectively in the world of market making
* Helping others will improve the overall performance of all miners; therefore, the platform could attract more token issuers, thus driving up the total weekly rewards for everyone
* Getting the "secret sauce" from the experts. On many occasions and many discussions, experienced and top miners often share their insights, toolsets, tips, and tricks, and the direction they took to achieve top position

For members who have programming backgrounds, things got even better. Recently, Hummingbot Foundation has announced their Dev Grant Budget to fund development work performed by community contributors. So anyone with a knack for Python could take part in and make some considerable amount of HBOT token (Hummingbot governance token) while contributing to the improvement of the Hummingbot client codebase.

Also, many decentralized exchanges and centralized exchanges are looking for developers to develop their connectors for Hummingbot client, so it is an excellent opportunity to get contracted by such parties.

All in all, the Hummingbot community is unique, open, friendly, and has a lot of opportunities to take! So don't hesitate to join!


**Conclusion**
==============

There are many opportunities in the cryptocurrency world, but Hummingbot is the most legit and rewarding way to find financial independence. So I hope that the routines that I shared would be useful to anyone who would like to participate in the awesome and exciting Hummingbot community and market making in general.

Also, a little disclaimer, all of the content I wrote is just for educational purposes with zero interest in financial advice.

Have a nice day and happy market making!

Wojak out!