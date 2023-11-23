---
date: 2022-03-29
authors:
  - community
categories:
  - Academy
tags:
  - Community Posts
---

# How To Get Good At Market Making

![cover](cover.webp)

*by Lã Minh Hoàng*

Hey guys, Wojak here!

I hope you're having a good day! Today, let's dive into the topic of how to get good at market making!

So, a little bit of introduction first! I am Wojak, an active member of the [Miner](https://miner.hummingbot.io) community, and I have been competitively market making on the platform for the past year.

As we all know, market making is not simple. It's even harder to compete on the Hummingbot Miner platform. Getting good at market making requires knowledge of market dynamics and technical skills to scale up the business. In addition, your funds could be in grave danger if you don't have a good strategy to counter adverse market conditions.

Therefore, it would be great if a beginner could start their market making journey with a bag full of tips and tricks! Say no more; I'm here to help!

<!-- more -->

## The Five Pillars Of Success

![image 2022-03-29 212320](image_1.jpg)

So, what is the "secret sauce" for success? Of course, you will need a magic glass ball to foresee the market.

Nope, that's just a fantasy! In my experience, the best way for a beginner to be successful is through a system of routines that can help you improve your performance over time.

I call it "The Five Pillars of Success"; sounds good, right? Each pillar is a routine that focuses on improving a skill essential for good market making.

These pillars are Learning, Watching, Coding, Tracking, and Community.

### Learning

![image 2022-03-29 212439](image_2.jpg)

It is crucial to arm yourself with knowledge. The more you understand, the better you are at figuring out solutions for every situation.

Questions like, "What should I do with this parameter?", "Should I set the spread big or small for this market condition?", "What strategy should I use: Pure Market Making or Cross Exchange Market Making?", or "How to improve liquidity mining rewards? Should I tighten the spreads or increase my funds? Which token should I allocate more funds to for increased return?"

If this is your first time using Hummingbot, these questions can be tough to answer. But don't worry, I will share some of my sources that, if you spend some time each day learning, will sharpen your knowledge to "peel" any tricky question in no time!

For a quick rundown of market making and how to configure the Hummingbot client, Hummingbot's academy articles, documentation, Youtube videos, and GitHub repository are good places to study:

- Hummingbot Academy articles: [https://hummingbot.org/academy](https://hummingbot.org/academy/)
- Hummingbot Youtube channel: [https://www.youtube.com/c/Hummingbot](https://www.youtube.com/c/Hummingbot?ref=blog.hummingbot.org)
- Hummingbot GitHub: [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot?ref=blog.hummingbot.org)

For more advanced traders, scientific papers and books are the places to dig into the nature of market making. Here are some of my favorites:

- "[High-frequency trading in a limit order book](https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf?ref=blog.hummingbot.org)" by Marco Avellaneda and Sasha Stoikov.
- "[Optimal High-Frequency Market Making](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf?ref=blog.hummingbot.org)" by Takahiro Fushimi, Christian González Rojas, and Molly Herman.
- Papers from [Sanmay Das](https://cs.gmu.edu/~sanmay/?ref=blog.hummingbot.org).
- Not related to crypto but also a good source on market making in general: "[High-frequency trading: a practical guide to algorithmic strategies and trading systems](https://ahmetbeyefendi.com/wp-content/uploads/2020/07/High-Frequency-Trading-Irene-Aldridge.pdf?ref=blog.hummingbot.org)" by Irene Aldridge.

The Hummingbot client source code is primarily in Python, so learning Python is always recommended for understanding the bot logic and customization. Here are some excellent sources for learning Python:

- Python crash course: [https://github.com/srebalaji/python-crash-course](https://github.com/srebalaji/python-crash-course?ref=blog.hummingbot.org)
- Another Python crash course: [https://www.youtube.com/watch?v=rfscVS0vtbw](https://www.youtube.com/watch?v=rfscVS0vtbw&ref=blog.hummingbot.org)
- Another Python crash course: [https://www.youtube.com/watch?v=\_uQrJ0TkZlc](https://www.youtube.com/watch?v=_uQrJ0TkZlc&ref=blog.hummingbot.org)

### Watching

![image 2022-03-29 212605](image_3.jpg)

Watching the news and looking out for market crashes is something you should do daily to protect your funds.

Crypto markets are very volatile by nature; a small Bitcoin dump in the magnitude of 1% to 5% could lead to a significant drop in other altcoins, especially those with low liquidity.

The immediate effect of such drops is that your hard-earned profit, or even your funds, could get wiped out instantly. It's even worse if the declines continue for several days.

So, what can you do to mitigate such risk? For me, assessing the market first thing in the morning and fine-tuning my strategy depending on the assessment are what I do to protect my funds daily.

Whenever I wake up, I always take a glance at:

- **TradingView**: Bitcoin chart in a 1-hour time frame with simple trend indicators like EMA or Bollinger Band.
- **CryptoPanic**: Trending section.

Also, I would look for any price alerts that got triggered overnight to see if there are any losing pairs. You should set a price alert for any pair you are market making on; it could be your lifesaving buoy before an imminent market downfall.

Those are usually enough signals to assess if today is a green day or a red day:

- **Green day** means that the price is slightly uptrend or sideways, few to no price alerts, and most of the news is bullish.
- **Red day** means that the price is in a strong downtrend, there are a lot of price alerts, and most news is bearish.

For a green day, I am confident that market making will make a good profit, and I could leave my bots running all day long without worrying that my funds could get rekt.

However, if it is a red day, then I would limit my exposure to the market:

- Reduce my funds for market making
  - Use the Inventory Skew feature and set the ratio between inventory and cash to something like 30:70.
- Reduce order amount size
  - Turn off the bots.
  - Sell off all inventory to recover funds.

### Coding

![image 2022-03-29 212739](image_4.jpg)

The Hummingbot client is in Python and open source. Tinkering with the source code and making customizations are always better ways to have an edge in your trades.

You can find the source code of the Hummingbot client here:

- [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot?ref=blog.hummingbot.org)

By default, the Hummingbot client is an excellent tool for market making. However, you can add much more value to it if you know Python. For example, you can:

- Improve or add new features to the current strategies like Pure Market Making or Avellaneda Market Making so that they can work as you want.
- Fix annoying bugs that prevent your bots from running stably.
- Create your custom trading strategy.
- Use the script feature of the Pure Market Making strategy to change parameters on the fly.

If you compete on the Hummingbot Miner platform, customizing your bot could bring you a massive advantage over other miners. In my case, I have made a custom script on the Pure Market Making strategy to dynamically change the spreads according to the market conditions, optimizing spreads that could reduce my losses and increase my mining rewards significantly. It is the main reason I could maintain my top position on the miner leaderboard for so long.

So, if you have ideas on how to beat the market and accrue more mining rewards, make sure to code those ideas right away, make some runs, and see if your ideas are bearing fruit.

If your ideas don't work out, don't worry, as I too have had many ideas, but most of them didn't work out in the end. I spent half a year just trying out new ideas to improve my bot performance, and after so many failed attempts, I finally made it to the top.

Keep trying until you get there!

However, make sure that you use minimal funds as possible when trying new ideas because it is a risky endeavor that promises no return.

### Tracking

![image 2022-03-29 212854](image_5.jpg)

Before you start making money, it's crucial to understand how much you might be losing. Keeping a detailed spreadsheet is a wise practice for peace of mind!

Tracking my bot's performance is a daily routine I greatly enjoy. It provides insights into the bot's effectiveness and often sparks ideas for improvements.

There are several key metrics I track, though the choice of metrics can be subjective. The most useful for me include:

* Value of your holdings in dollars
* Dollar value of your earned rewards
* Day-to-day change in your holdings
* Day-to-day change in your earned rewards
* Daily profit or loss, calculated as the sum of changes in holding value and earned rewards
* Profit or loss as a percentage of the previous day's holding value

You can access a sample spreadsheet with these metrics here:

* [Sample Performance Tracking Spreadsheet](https://docs.google.com/spreadsheets/d/1gaPq6-hMM5sebl0Jod9y_LKOpi8iD0IfeLyNmB1cCKE/edit?usp=sharing&ref=blog.hummingbot.org)

These metrics, while straightforward, can offer deep insights into your bot's performance when tracked consistently. You may also extend the spreadsheet to monitor individual pairs for more granular analysis.

This spreadsheet has been instrumental in refining my scripts and strategies, aiding me in distinguishing between effective and less effective approaches. It not only motivates me during profitable periods but also helps in minimizing losses and managing funds during downturns.

In essence, navigating market making without proper tracking tools is risky, so equip yourself with a good spreadsheet to enhance your earning potential!

### Community

![image 2022-03-29 213031](image_6.jpg)

The Hummingbot community is unique, characterized by competitive yet open and sharing members.

Engaging in the community is an incredibly rewarding daily activity. Participating in discussions, asking questions, resolving doubts, and assisting those seeking guidance can offer numerous benefits:

* Improved understanding of effective market making through inquiry and discussion.
* Enhancing the overall performance of all miners, potentially attracting more token issuers and increasing weekly rewards.
* Gaining insights, tools, and strategies from experienced miners and top performers.

Members with programming skills have even more to gain. The Hummingbot Foundation recently announced their Dev Grant Budget to fund development contributions from the community. This presents an opportunity for Python enthusiasts to contribute to the Hummingbot client's codebase and earn HBOT tokens (Hummingbot governance token).

Moreover, many decentralized and centralized exchanges are seeking developers to create connectors for the Hummingbot client, offering excellent contracting opportunities.

Overall, the Hummingbot community stands out for its openness, friendliness, and wealth of opportunities. Don’t miss out on becoming a part of this vibrant community!

## Conclusion

The world of cryptocurrency is filled with opportunities, and Hummingbot stands out as a legitimate and rewarding path to financial independence. I hope the routines and insights I've shared prove useful to anyone looking to join the vibrant and exciting world of Hummingbot and market making.

Please note, all the information provided here is for educational purposes only and is not intended as financial advice.

Have a great day, and happy market making!

Wojak out!
