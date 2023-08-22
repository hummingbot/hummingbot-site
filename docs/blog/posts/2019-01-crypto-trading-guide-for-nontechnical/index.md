---
type: "blog"
title: "A non-technical crypto trader's guide to python and algo trading"
description: ""
author: "coinalpha"
date: 2019-01-29
image: "./cover.jpeg"
tags: ["trading concepts", "market making", "arbitrage"]
level: "Beginner"
rank: 10
---

In our previous post, we put together some helpful trading and finance-related resources for **developers** who want to dip their toes into crypto algo trading. On the flip side, this post aims to be a good resource for **traders** who have trading experience but little to no programming skills.

This post is also intended to be a "live" document, that we will update regularly with thoughtfully-selected readings and learning resources that we come across.

### Manual trading vs. algo trading
#### What is algo trading?
As discussed in [our previous post](https://www.hummingbot.io/blog/2019-01-beginner-crypto-trader/), algo trading is the process of using computer programs to automatically execute trades based on a predefined set of rules, called algorithms, with the goal to generate profits at high speed and high frequency.

Due to its low barrier to entry from easily accessible exchange APIs, sufficient supplies of free tutorials and documents, reasonable hardware requirements, and an around-the-clock market, algo trading in crypto is attracting more people than ever who are interested in and curious about how this all works.

<!-- more -->

#### What are the advantages of algo trading?
One of the major advantages of algo trading is that it can execute orders 24/7, non-stop. Bots won’t get tired, and the crypto market never closes. That being said, it doesn’t mean you can let your bot run completely without human intervention.  If you have a bug in the program or setup your rules incorrectly, the computer program will not know and it will continue to obediently and tirelessly trade away your assets in accordance with the flawed instructions while you sleep.  You need to constantly monitor and re-adjust your parameters from time to time.

Another advantage is high speed. Stock algo trading systems used by today’s institutions are able to place orders at a speed that’s more than 20 times faster than a blink of the eye (FYI, human eyeblink normally takes 300-400 milliseconds). Although not as fast as its BIG brother used for stock trading, crypto trading bots can still capture short-lived profit-making opportunities at a speed that humans can’t achieve without technological assistance.

In addition, backtesting ability is also one of the unique benefits that algo trading can provide. Since rules are predefined, users can validate their strategies through simulations based on historical data before they invest a single cent.

More important, computers lack emotions, which is typically a source of weakness and leads to irrational investments from their human counterparts.

#### What are the disadvantages of algo trading?
***Crypto algo trading is NOT for everyone.***

One of the biggest disadvantages of crypto algo trading is its relatively high technical barriers, which might not be beginner-friendly. It requires programming skills (or at least an understanding of certain programming languages) and a deep understanding of trading strategies and financial concepts. Thus, an ideal algo trading beginner would be someone who has either strong programming skills, or trading experience as well as finance knowledge, or both.

Another disadvantage of algo trading is that users cannot avoid risks introduced by mechanical failures, system glitches or bugs. Your bots may contain bugs that have not been previously identified. Your computer may crash and miss important orders. Your neighborhood may experience a sudden blackout, and you cannot even turn on the computer. So it’s generally a good idea to start small and be super careful.

And last but not least, algo trading might incur higher costs than manual trading. Increased trade frequency leads to increased trading fees and costs.  You will also need to invest in infrastructure: high-quality hardware as well as fast and stable internet connection are part of the minimal requirement. For increased reliability and to avoid your computer taking on a side hustle of acting as an oven in your house, you may eventually want to host your trading on the cloud, leading to additional recurring costs.  In addition, you may want to purchase data feeds at some point in order to improve your strategies and backtesting. In algorithmic trading, data is gold, and it’s not free.

### Can I do algo trading without learning programming?
A handful of platforms and bots currently available allow individuals with any level of experience to run pre-set strategies on a user-friendly graphic user interface. With the help of these bots, technically anyone, especially those who already have manual trading experience, can begin algo trading with a few clicks of the mouse. If you trade for fun and have no time to acquire a new skill, you might want to check out these bots (a few were mentioned in [our previous post](https://www.hummingbot.io/blog/2019-01-crypto-bot-reviews/)).

At some point down the road, you may want to take a closer look at the logic behind the strategies, test and validate them against historical or real data, figure out your way to improve them, or even create your own strategies or bots. Here is where programming comes into play. While learning programming doesn’t guarantee you to make 10X more money, it does provide 10X more options regarding testing, strategy formulation, debugging and so on. However, whether you’ll need to learn programming ultimately boils down to your goal and motivation for trading.
![](./image1.jpeg)

### Which programming language should I learn?
You can start crypto algo trading with different programming languages such as Python, C++, JAVA, R, etc. There are pros and cons that come with each language. These two articles present brief discussions on different languages -

[5 Programming Languages You Should Know If You Are An Aspiring Trader](https://dollarsandsense.sg/5-programming-languages-you-should-know-if-you-are-an-aspiring-trader/)

[Which Programming Language Should You Learn To Get A Quant Developer Job?](https://www.quantstart.com/articles/Which-Programming-Language-Should-You-Learn-To-Get-A-Quant-Developer-Job)

In this post, we will mainly share basic learning resources for Python. As someone who’s completely new to coding, you may wonder, why Python?
Python is one of the most popular languages used by today’s algo traders and developers. It is relatively easy to grasp, widely used, and capable of doing almost anything from backend web development to data analytics. Here are two articles providing practical insights into “Why Python” -

[Advantages and Disadvantages of Python Programming Language](https://medium.com/@mindfiresolutions.usa/advantages-and-disadvantages-of-python-programming-language-fd0b394f2121)

[Why Python Algorithmic Trading is Preferred Choice Among Traders?](https://www.quantinsti.com/blog/python-trading)

### Python for beginners

This course offered by MIT covers simple algorithms and all the basic Python syntax you’ll need to know, as well as broader computer science concept that will help get you started on your journey:
[Introduction to Computer Science and Programming Using Python](https://www.edx.org/course/introduction-to-computer-science-and-programming-using-python-0).

If time is your key constraint, this crash course takes you less than 3 hours:

<iframe title="YouTube video player" class="youtube-player" type="text/html"
width="640" height="390" src="https://www.youtube.com/embed/yE9v9rt6ziw"
frameborder="0" allowFullScreen></iframe>

After going through these materials, you should be confident with reading code and building simple algorithms yourselves. If so, congrats! You’ll now be able to get started with Hummingbot’s upcoming command line interface, and customize the strategies.

### Python for trading

Once you crack the Python fundamentals, it’s time to get into the meat of programming for algo trading. [Datacamp](https://www.datacamp.com) provides plenty of courses on this subject matter. This article - [Python For Finance: Algorithmic Trading](https://www.datacamp.com/community/tutorials/finance-python-trading) provides a comprehensive walkthrough from data analysis to strategy building using Python.

When it comes to data analysis, you can always refer to this [cheat sheet](https://www.codementor.io/codementorteam/cheat-sheet-python-for-data-science-xe3m6wy4q) for basic syntax. To tame massive data, Pandas, a Python library for data manipulation and analysis, will come in handy. Here is a [Pandas Tutorial: DataFrames in Python](https://www.datacamp.com/community/tutorials/pandas-tutorial-dataframe-python#gs.meCZt7M) that would be worth learning.

To create more complex AI-powered strategies, sufficient knowledge on machine learning is necessary. Machine learning is a method of data analysis that automates pattern recognition and analytical model building, and enables decision making with little human intervention. You can take [a Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/), and spend some good amount of time learning this free [Machine Learning for Trading](https://www.udacity.com/course/machine-learning-for-trading--ud501) online course offered by Georgia Tech, which lays the groundwork for a more advanced algo trading adventure.

### Closing remarks

For those new to algo trading, this field might seem intimidating and be a curious black box that’s interesting but seemingly unapproachable.  However, the crypto market makes it more accessible and it’s a lot easier to get started than you may think!  We hope we’ve provided you some resources here to help you get started.

Programming is an art; there is no right or wrong way to approach it and there is no single way of achieving a single task.  Ultimately, your choice of technology depends on your experience, background, preference, but we hope we’ve laid out some alternatives for those new to algo trading.  Feel free to leave comments here or join [our discussion group](https://t.me/projecthummingbot) if you want to share your own insights, comments, or have any questions.
