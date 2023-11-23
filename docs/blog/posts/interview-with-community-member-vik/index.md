---
date: 2020-07-27
authors:
  - coinalpha
categories:
  - User Interviews
tags:
  - User Interviews
---

# Interview with Community Member Vik

![cover](cover.webp)

**2023 Update: Discover Vik's journey in [Botcamp](/botcamp)!**

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/rFq0Add0qJ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

Over four months have passed since we initiated Liquidity Mining. With an increasing number of token projects and miners, our platform has seen significant growth. In this post, we feature Vik, one of our top liquidity miners, and her insightful experiences.

![](User_profile.png)

Vik embarked on her Bitcoin journey in December 2017, purchasing at the market peak. Despite significant losses in the following year, she persevered, refining her trading strategies and eventually discovering the benefits of liquidity mining. Currently, she achieves a monthly return of approximately 5-7% through this approach.

<!-- more -->

**Disclaimer: The following interview does not constitute financial advice. The opinions expressed are solely those of the interviewee and do not reflect the views of hummingbot.io. Hummingbot does not promise or guarantee any profits.**

### Can you share a bit about your background?

Originally a microelectronic engineer, I shifted my focus to 3D computer graphics post-graduation, launching a project focused on creating 3D models and extensions for Autodesk 3Ds Max software. My passion for coding, data, and trading persisted, leading me to explore cryptocurrencies, algorithmic trading, Machine Learning, and AI.

### When did you first invest in crypto?

I ventured into crypto in December 2017, using my forex trading earnings to buy Bitcoin. Despite initial losses, I remained captivated by the crypto world, eventually recouping my investments through various distributions, contests, and trading.

### How did you come across Hummingbot and liquidity mining?

My introduction to Hummingbot preceded liquidity mining. I was manually profiting in low liquidity markets and sought to replicate this strategy in major exchange markets. This search led me to discover Hummingbot on GitHub, a comprehensive solution for my needs.

### What has your experience with Hummingbot been like?

Initially, Hummingbot presented challenges with stability and lacked certain features. However, the team's dedication to frequent updates and new features, such as the scripting option, has significantly enhanced my experience, making it a reliable tool in my trading arsenal.

### How much effort did you invest in understanding Hummingbot?

Thanks to the exceptional support on Discord and comprehensive documentation provided by the Hummingbot team, I quickly grasped its functionalities. Their commitment and enthusiasm are evident in various aspects, from YouTube tutorials to their informative Crypto Snacks newsletter.

### As a top liquidity miner, how has your experience been?

Liquidity mining has been instrumental in my strategy experimentation and market exploration. While minor issues with the Miner App occur, the team promptly addresses them, maintaining an efficient platform.

### Have you achieved financial success through this platform?

Despite initial trading losses, I currently average a monthly earning of 5-7%. My focus is now on enhancing trading performance to achieve, at the very least, a breakeven point, anticipating an increase in competition.

### What strategies do you employ in liquidity mining?

I primarily utilize pure market making, considering it the most straightforward approach. However, I am planning to explore additional strategies.

### Have you experimented with multiple bot instances?

Yes, I initially traded all available pairs but soon realized the importance of focusing on a smaller number. Currently, I trade in 1-3 markets, depending on the circumstances.

### How often do you modify your bots' settings?

Adjustments are made based on performance; settings remain unchanged if losses are offset by mining rewards. I also halt operations in markets with extreme volatility, as rapid price movements can negate several days of accumulated rewards.

### Which trading pairs do you currently focus on and why?

I have a preference for XZCBTC and XCZUSDT and recently added NULS pairs due to their higher rewards. My strategy involves periodic evaluation and optimization of market performance.

### Besides Hummingbot, what tools assist you in trading?

I rely on custom Python tools to analyze market trends and participant behaviors, aiding in informed bot setting adjustments.

### Any key insights from your Hummingbot trading experience?

The importance of gradual investment and the avoidance of hasty decisions. Observing and testing before fully committing to a strategy is crucial.

### Can you tell us about your tool for evaluating Hummingbot's trading performance?

Recognizing the need for effective performance evaluation, I developed a tool initially for personal use. It evolved into a user-friendly Google CoLab notebook, accessible to those even without programming experience, aiding in the objective analysis of trading outcomes.

*Instructions for Vik's tool are available at the end of this post!*

### What advice would you offer fellow miners?

I advocate learning to code, particularly Python, for its simplicity and extensive libraries. Basic coding skills empower traders to extend Hummingbot's capabilities and understand shared codes, significantly enhancing trading efficiency.

### Vik's Trade Performance Analyzer

Vik has developed a [Google CoLab notebook](https://colab.research.google.com/drive/1dwIXHirrgodGLoR5pcNJXvXxiyfKVu5W?usp=sharing) to assist the Hummingbot community in evaluating their trading performance.

#### How to use: 

1. Open the Colab file.
2. Save a copy to your account (Google account required): File -> Save a copy in Drive.
3. Edit only your saved copy (Close the tab with the shared version to avoid errors).
4. Ensure privacy: Share button at the top right -> Restricted (Only people added can open with this link).
5. Update API_key and API_secret with your credentials (use read-only keys).
6. Modify the market and dates as needed.
7. Execute the code: Runtime -> Run all (or Ctrl + F9).

#### Benefits and Limitations

This tool calculates performance for any selected period via API, without requiring additional software installation. While performance can fluctuate with market prices, the inclusion of average buy and sell prices provides valuable insights into trading efficiency.
