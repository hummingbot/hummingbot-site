---
date: 2020-07-27
authors:
  - coinalpha
categories:
  - Academy
tags:
  - User Interviews
---


# Interview with Community Member Vik

![cover](cover.png)


**2023 Update: Hear about Vik's experience taking [Botcamp](/botcamp)!**

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/rFq0Add0qJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

It has been over four months since we launched Liquidity Mining. As we bring more token projects to the platform, we saw more and more miners join liquidity mining and compete for rewards. In this post, we introduce one of our top liquidity miners to you. Hope you can learn something from Vik!

![](User_profile.png)

Vik bought her first Bitcoin at the top of the market in December 2017, but she lost almost everything in the next year. However, she learned from this experience and kept experimenting with different trading strategies until she found liquidity mining. **With liquidity mining, her current monthly return is around 5-7%.**

<!-- more -->

**Disclaimer: Not financial advice. All views expressed in this interview are the interviewee’s and do not represent the opinions of hummingbot.io. Hummingbot does not guarantee nor claim to guarantee profits.**

### Can you tell us a little bit about your background?

I am a microelectronic engineer by education. But after graduation, I changed my area of expertise to 3D computer graphics and started my own project within which we made 3D models and extensions for Autodesk 3Ds Max software. I’ve also always been passionate about code, data, and trading so even though I’ve been on the project for over 10 years, I’ve found myself really happy when I do development and trading. So now I’m changing my path again and I’m at a crossroad because I am eager to go for everything from cryptocurrencies and algorithmic trading to Machine Learning and AI.

### When did you start investing in crypto?

I bought my first Bitcoin almost at the top in December 2017 with the money that I made in forex trading. I didn’t like the commission I paid so I exchanged everything for different altcoins that I thought had potential. Of course I lost almost everything the next year. **But I saw it mostly as a game where I lost the first round just by dipping my toe in it. Afterwards, I was captured by the crypto world and made much more profit than what I lost due to various distributions, contests and trading.**

### Did you hear about Hummingbot first or liquidity mining first? How did you hear about it?

Hummingbot first. I was making some profit by placing orders in a low liquidity market and doing it manually because there was no API. Then I realized that I could try a similar strategy in the faster markets of major exchanges. I started looking for code examples on GitHub to write a python bot myself, but instead, I found hummingbot - a pretty good solution out of the box.

### How has your experience been so far with hummingbot?

I’ve had mixed experiences. I first launched the bot when it was less developed and stable as it is now. While I liked it, I was missing a lot of settings and it crashed frequently on my system. I found that the team was already working on the features I wanted and updating the bot frequently so I just need a little patience. While I was waiting I wrote my own bot and traded with it for a while. **Hummingbot has changed a lot since then so I’m using it again without problems and I really love it, especially the new scripting feature**.

### How long did you spend to figure out Hummingbot? How much effort did you put into it?

It was easy to understand how it works due to the excellent support on Discord and extensive documentations. The Hummingbot team is superb in this regard. I really like the way Mike and the team organize everything. Their passion and love for the project is visible in many details from tutorials on YouTube to the Crypto Snacks section of its bi-weekly newsletter.

### You are one of our top liquidity miners. How has your experience been with liquidity mining?

Great! Liquidity mining helps me a lot in my searching and experiments with different strategies. I don’t consider myself as an experienced trader yet so it also allows me to explore new markets that I think I can never try without the program. The Miner App can sometimes have small problems but the team fixes everything pretty quickly.

### Have you been able to make money so far?

**I manage to earn about 5-7% per month on average**, but at first I lost some in trading due to the significant drop in prices in March. I still have trading losses in almost all markets but the mining rewards greatly compensate for that. I am working on improving trading performance and making bots trade to achieve at least breakeven because I think the number of bots may soon increase. While the rewards are high, there is a tremendous room for experiments.

### What strategies do you use to participate in liquidity mining? And why?

Pure market making only. This is the easiest one for me. I have plans to try more strategies. I just didn't have time yet. 

### Have you tried to set up different instances of the bot?

Yes, when the liquidity campaign just started I traded all available pairs at the same time. Then I saw that it was difficult to keep track of all of them and reduced the number. Now I trade 1-3 markets depending on the situation.

### Did you change your bots’ settings often, and how often did you change them?

I usually change settings if I see a negative result for several days. If mining rewards compensate for the loss, I will let it run unchanged. **I also stop a bot if I see the extreme volatility on the market**. I haven’t figured out how to deal with it yet. Because sometimes just a few minutes of price movement eat up the rewards of several days. 

### What pairs are you trading currently? Why did you choose these pairs?

My favorites were XZCBTC and XCZUSDT for a long time but recently I also started NULS pairs due to higher rewards. From time to time I play with different markets, and after the evaluation period I stop instances where there is a negative or insignificant result, and move on to the most profitable markets.

### What other tools besides Hummingbot do you use to help you trade?

I use mostly my own tools written in python. For example, I find it really helpful to collect past market trades and then analyze participants behavior such as buy/sell volume, average, median and maximum trade sizes, etc. This helps me better understand the market and then set the bot settings.

### What important lessons or insights have you learned while trading using Hummingbot?

To enter with small amounts first and **don’t rush**. Usually when I think that I have a great idea,  and there is a market opportunity I rush into it while it is better just to watch for a while and do more tests. 

### You shared a tool to evaluate Hummingbot trading performance - how did you come up with it? 

Evaluation of results is one of the most important things in many areas. I need feedback to learn if I made a good move or not. I first used an Excel sheet that I manually updated but then decided to automate the process. The early version of the script was very specific to my trading and too complex, so there was no point in sharing. One day I simplified it and tried hummingbot performance metrics. I thought it would be great to share this so that anyone even with no programming experience can use it. At first I wanted to give a Jupyter notebook file, but then I tried Colab and it definitely won. In general, this bothered me for a long time, as I see problems in assessing trading results. Hummingbot’s current calculation is more of a comparison holding vs trading. This is great but slightly different from estimation for pure trading. I think I have a solution which I hope I will share soon as well.

*See instructions for using Vik's tool at the end of this post!*

### Lastly, do you have any recommendations or trading tips for fellow miners?

Learn how to code. Python is fairly easy to start and has a huge library of modules. The code I have shared is very simple, just a few lines but it gives you great help in your daily trading. You can always delegate heavy development, but if you can write simple scripts to extend Hummingbot, or understand and edit someone's code you have a lot more power.

### Vik's Trade Performance Analyzer

Vik created this [Google CoLab notebook](https://colab.research.google.com/drive/1dwIXHirrgodGLoR5pcNJXvXxiyfKVu5W?usp=sharing) to help other users in the Hummingbot community evaluate trading performance.

#### How to use: 

1. Open the Colab file 
2. Save a copy to your account (login to your google account if needed): File -> Save a copy in Drive 
3. Make changes to your saved copy only (To avoid mistakes close the tab with the shared version) 
4. Check that your notebook is not visible to anyone: Find Share button at the top right -> Restricted (Only people added can open with this link) 
5. Change API_key, API_secret to yours. Use read-only keys 
6. Change market and dates to the one you need 
7. Run the code: Runtime -> Run all (or Ctrl + F9) 


#### Benefit

It allows to calculate performance for any dates via API without the need to install any software.

#### Limitation

The performance greatly depends on the end period prices, and in the crypto space prices always change. To mitigate this, Vik has added two valuable metrics: Average buy and sell price. Now, users can at least know if they are buying low and selling high. 
