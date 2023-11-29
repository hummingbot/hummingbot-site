---
date: 2023-10-30
authors:
  - foundation
tags:
  - Quickstart - Using Dashboard to Deploy and Backtest Strategies
---

# Using Dashboard to Deploy and Backtest Strategies - Part 7

## Introduction

Now, let's dive into the process of evaluating the optimization results and subsequently deploying the selected strategies.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/BJf3ml-9JIQ?si=wdUCvF5ex_dman_Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Visualizing and Evaluating Strategies

Upon completion of the optimization process, it's time to visualize the results. By selecting a specific experiment, you're presented with a scatter plot showing the net Profit & Loss (PnL) on the Y-axis and the maximum drawdown on the X-axis. Each dot on this plot represents a unique combination of strategy parameters. Hovering over these dots reveals detailed information about each experiment.

When you've identified a promising trial, you can move on to a more granular analysis. By choosing a specific trial, you can view its performance on candlestick charts, giving you a clearer picture of how the strategy would have performed historically.

## Saving Best Configs

If a particular configuration resonates with your trading objectives and you believe it's worth deploying, you can save it for later use. This step involves selecting the strategy, viewing its performance, and then saving the configuration for deployment. 

You can repeat this process for multiple configurations, allowing you to cherry-pick the best ones for real-time trading.

## Deploying Strategies

After saving your preferred configurations, navigate to the `Deploy` page. Here, you can select the configurations you wish to deploy, assign a name, and initiate the deployment process directly from a controller configuration. Under the hood, this uses a generic script to launch the strategy, so you just need to manage the controller configuration file.

In this live demonstration, we analyze the optimization results for a particular trading pair. We observe the performance of various configurations, considering factors like take profit, stop loss, and time limits. This hands-on approach gives you a practical understanding of how to interpret results and make informed decisions.

## Running Multiple Configs

After selecting the desired configurations, we demonstrate how to deploy them. These strategies are then run simultaneously, offering a more consistent trading performance that averages out the outcomes of all chosen strategies. This method helps avoid overfitting, ensuring a more stable trading experience.

In conclusion, this chapter equips you with the tools and knowledge to evaluate optimization results critically and deploy the best-performing strategies for real-time trading. It emphasizes the importance of a balanced approach, ensuring that you don't overly rely on a single configuration but rather diversify for better consistency.

## Conclusion and Next Steps

[Conclusion and Next Steps](8-conclusion-and-next-steps.md){ .md-button .md-button--primary }