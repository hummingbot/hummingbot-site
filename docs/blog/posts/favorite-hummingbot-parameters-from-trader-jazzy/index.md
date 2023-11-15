---
date: 2022-03-25
authors:
  - community
categories:
  - Academy
tags:
  - Community Posts
---

# Favorite Hummingbot Parameters from Trader Jazzy

![Alt text](cover.jpg)

*by Jemz Obmaz*

Hey guys, Jazzy here. I am officially helping my sister [Dalskie](../capital-deployment-with-hummingbot/index.md) on operating the Hummingbot bots.

I am not well versed yet on crypto & trading stuff, but really find it intriguing & unbelievable world to be living in. I am happy to have made my long-time dream to be working from home, and be my own boss so to speak. What a wonderful, life-changing this opportunity gives my family, especially financially. Thank you so much, Hummingbot!

About the bot strategy, we are using the **Pure Market Making (PMM) Strategy**.

Ok, same thing, this post is NOT financial advice, & any user following this will be respectively responsible for his / her own results. Please don�t blame me for any future losses you will surely experience. Its not because of me, Hummingbot or the strategy, it is because people panic selling. Period.

So why PMM strategy? Hmm, well it works, & simple. I have learned to use it even without nerdy background. Its not I am super smart or whatever. Its thanks to the software or strategy itself. And of course, thanks to Dalskie.

I am now about to share the favorite parameters that I set for all bots. Roll up your sleeves, guys, lets get officially started.

<!-- more -->

First, I highly recommend to use **price_ceiling** and **price_floor** parameters for all bots, no exception. I usually set it at **3-5%** from mid-price. You can use this Excel file for easier calculation. These parameters are extremely important so bots will not be tricked to buy at high price, and then sell at low price. You know, those candle wicks. Those will not be scary anymore to us. Yes, this is extra work, but this is extra money saved, well worth it if you ask me. Alternatively, you can use the price band script. I don�t know how. You can ask community via discord. I heard you�ve got kind members, & supports always willing to help.

![Alt text](image_1.jpg)

Second, recommending to make **filled_order_delay** a bit longer. I usually set it at **180-360 seconds**. We have tested as short as 3-5 secs but extremely dangerous as other bots out there can rinse and repeat unprofitable trades every 3-5 secs resulting to our capital losses. So, making those bots wait longer for our new orders will make them forget about us, apparently.

Third, set **Kill_switch_enabled** to **True** and set **Kill_switch_rate** to your comfortable minimum value. I usually set it to **-2 to -3**. When this is triggered, I will need to check chart if candle currently has red long body. If yes, I adjust the order_amount equivalent to $20-$40. If no, I just stop & restart bot. Kill switch is always good to set to prevent or limit big losses due to abnormal bot trading activities, very rare but always possible.

Fourth, set **order_refresh_time** and **max_order_age** to longer value. I usually set these to **65 to 125 seconds**. We have tested as low as 3-5 secs, and have missed alot of liquidity mining rewards, and have been banned/rate limited by exchanges. These are not worth it, guys. Some more, low values do not guarantee that your orders will not be filled when the market moves. Slim chance, 2nd to winning lottery, maybe. Don't know. Fifth, set **balance limit** to both USDT and Token to all bots, no exception. I usually give **$20-$30 allowance** for the balance limit. You can use this **excel file** for easier calculation and faster copy-paste into bot terminal. It works for USDT pairs only, and need to adjust ROUND values for decimal output. I'm sure you can figure that out. You can even make it better. Please share back to community later. Balance limit prevents accumulation of tokens to undesired dollar amount, helping you with controlling inventory. Extremely important.

![Alt text](image_2.jpg)

Sixth, set **ask_spread** and **bid_spread** at 4th to 6th position from mid-price. Exact values vary, some pairs will have **0.05 or 0.50 or 0.80**. So, set it accordingly on pair to pair basis. Please guys, don't be too greedy to be at 1st to 3rd position. Been there, done that, not always good outcome. Remember the bad bots out there. So spare yourself from becoming their victim.

Seventh, set **order_amount to same range** at 3rd to 6th position from mid-price. I usually set it at **$60-$100** for initial start of the bots, **$20-$40** for red market, & gradually increasing up to **$200-300** max for green market. If you attempt to place big amount, your order becomes like strong magnet that can be filled by other bots frequently. If you want big amount, its better you increase your ask & bid spreads accordingly also.

I am surprised to have the lucky no 7 above. There is an Eight item, about using script, but it is out of my experience to explain it here. Maybe next time. I was told the script is just basic stuff & has minimal impact yet, unlike the ones I shared above, which are extremely important, once again reminding you.

I have to insert this another extremely important concept. I have given ranges of values for different parameters above, these are the actual values that we are using. This also means that we do not have template parameters for all bots. Each pair is treated individually & respectfully to warrant a unique set of parameters. No, guys, don't copy & paste. Try your best to understand the parameters & the pairs, then you too will succeed. And last, parameters are not set-and-forget things. You need to keep adjusting based on chart movements. I usually change spreads and order amount throughout the day, or whenever chart becomes volatile.

Putting experiences into words are no easy tasks. Please pardon language & grammar. I have re-read & changed many times. I did my best. I hope it is clear & useful, especially for beginners, as I made it to be practical as possible. Thank you for reading!
