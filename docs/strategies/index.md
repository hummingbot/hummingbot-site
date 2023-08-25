## What is a strategy?

In the world of algorithmic trading, a strategy refers to a pre-defined set of rules and processes that govern the trading decisions of a bot.

At its core, a strategy continuously collects data from various sources every clock tick, processes this data, and then executes orders based on this processed information. Whether you're looking to arbitrate between exchanges, follow market trends, or create your own unique approach, your strategy is the blueprint that will guide your trading bot's actions.

## How a strategy works

* Data Collection: At the beginning of each clock tick, the strategy collects data from various sources. This could be market data, past trading data, or any other relevant information.
* Data Processing: Once the data is collected, the strategy processes it. This involves analyzing the data, identifying patterns, and making decisions based on pre-defined rules or algorithms.
* Order Execution: Based on the processed data, the strategy then executes orders. This could involve buying, selling, or holding assets.

## Creating strategies with Hummingbot

Hummingbot offers its users several methods to create and customize strategies. These are:

* [V1 Strategies](/v1-strategies): These are templatized programs that provide a structured environment for your trading strategy. They expose a set of user-defined parameters, allowing you to customize the strategy's behavior without needing to dive deep into the code.
* [Scripts](/scripts): For those who are looking for a lightweight solution, Hummingbot provides scripting support. These are single-file strategies that are quick to implement and can be an excellent starting point for those new to algorithmic trading.
* [V2 Strategies](/v2-strategies): Representing the latest and most advanced way to create strategies in Hummingbot, V2 strategies are built using composable elements known as "controllers" and "executors". These elements can be mixed and matched, offering a modular approach to strategy creation. This means you can easily reuse parts of your strategies in different configurations, making the development process faster and more efficient.

## Getting started with V2 Strategies

We highly recommend new users to start their journey with V2 strategies. As the most modern and flexible method of strategy creation, V2 offers unparalleled customization and scalability. Here's how to get started:

* Understand Controllers and Executors: At the heart of V2 strategies lie controllers and executors. While controllers handle data gathering and decision-making, executors take care of order execution. Familiarize yourself with these elements to make the most of V2.
* Explore Pre-Built Templates: To help you kickstart your strategy creation, we offer a range of pre-built templates. These can serve as excellent learning tools and starting points for your strategies.
* Customize and Test: Once you have a basic strategy in place, start customizing it based on your trading goals. Always remember to test your strategy in a safe environment before going live.

Join the Community: Our vibrant community of traders and developers is always ready to help. Join discussions, share your strategies, and learn from experienced users to enhance your trading game.
