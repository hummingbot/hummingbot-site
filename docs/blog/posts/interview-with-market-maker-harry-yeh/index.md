---
date: 2020-07-01
authors:
  - coinalpha
categories:
  - User Interviews
tags:
  - User Interviews
---

# Interview with Market Maker Harry Yeh

![cover](cover.webp)

We recently had the opportunity to interview Harry Yeh, Managing Partner at Binary Fintech Group, who brings over seven years of experience in the cryptocurrency trading industry.

Binary Fintech Group, initially established as an Over-the-Counter (OTC) trading desk, caters to a select group of crypto traders. Recently, leveraging the capabilities of Hummingbot, they have embarked on implementing high-frequency market making strategies. 

In this post, we share key excerpts from our video interview, wherein Harry imparts valuable insights into the nuances of crypto algorithmic trading and market making. 

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/PqKkfe9ZV6g?si=hNkB6_Lqc_3BEV4u" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<!-- more -->

### Entering the Realm of High-Frequency Market Making

"Human capacity is inherently limited by time. While we operate on the scale of hours and minutes, computers excel in handling seconds, microseconds, and even milliseconds. This ability to compress time and have computers execute trades efficiently is what drew us to electronic market making.

In the realm of traditional markets, electronic trading has been pivotal. For instance, Renaissance Capital once accounted for a staggering 30% of NASDAQ's volume, largely due to their electronic market making strategies.

My journey into electronic trading began in 2008, sparked by a conversation with a hedge fund manager. This encounter solidified my belief in the future of electronic trading."

### Integrating Hummingbot into Our Operations

"It is imperative to have a solid grasp of trading principles before employing Hummingbot. Our success with Hummingbot stems from a deep understanding of trading dynamics.

Hummingbot, in our organization, is akin to an additional trader. It is a powerful tool, but like handing someone the keys to a Lamborghini without teaching them how to drive, it requires a thorough understanding of its mechanics. This includes knowledge of limit orders, bid-ask spreads, various parameters, order cancellations, and order levels."

### The Inspiration Behind the 'Hanging Orders' Feature

"In our Hummingbot strategies, I sometimes allow orders to remain on the book for extended periods, believing in the bell-shaped nature of the market. It's often advantageous to maintain open limit orders rather than canceling them, as it lets the market dynamics play out.

A common misconception is the nature of market movements. Understanding that markets move in waves allows for strategic placement of limit orders, which can yield profits as the market fluctuates. While it's possible to refresh these orders, I find that over-frequent refreshment can lead to suboptimal outcomes, such as being caught on one side of the trade. Therefore, we sometimes set Hummingbot to not cancel orders, employing exceptionally long refresh times to encourage order fulfillment."

### Navigating Market Volatility

"Volatility is an aspect I particularly enjoy. Effective market making thrives in a ranging market. In volatile conditions, it is crucial to configure wider spreads.

Managing volatility involves scaling in and out of positions and possibly hedging with futures for more advanced strategies. However, the fundamental approach is to trade within one's comfort zone and avoid overextension. 

Currently, our operations include market making for Bitcoin within specific price ranges. In these scenarios, human judgment plays a critical role in deciding whether to continue with automated strategies or intervene manually, based on market trends and predictions."

Check out the full interview video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/PqKkfe9ZV6g?si=80z81RwkQMb6hkgl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
