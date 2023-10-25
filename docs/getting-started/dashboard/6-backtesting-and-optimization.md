## Introduction

In this chapter, we delve deep into one of the most critical aspects of bot trading: **backtesting strategies using historical data**. Dashboard provides a comprehensive framework that helps you do everything from downloading historical data to backtesting strategies and optimizing hyperparameters.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/bAi2ok7_boo?si=R52owIrglHWlSuS5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Download Historical Data

First things first, you need historical data to backtest a trading strategy. Dashboard helps you fetch OHCLV candle data from certain exchanges. You can define the exchange, specify trading pairs (separated by a comma), select the time intervals, and choose the number of days for which you want the historical data. 

Clicking the "Get data" option will initiate a Docker container running a script that downloads the desired data. The data will be stored in the `data` folder, in the `candles` subfolder.

## Available Controllers

Once you have the data, the next step is to define a strategy controller template for backtesting. The "Create" tab showcases a list of available controller templates.

Current examples include directional strategies such as `bollinger v1`, `macd bollinger v1`, and `trend following v1`, as well as market making strategies such as `dman_v1`, `dman_v2`, and `dman_v3`. You can also create and add your own custom controller.

## Optimizing the Bollinger Strategy

In the video, we take a deep dive into optimizing the [`bollinger_v1` controller](https://github.com/hummingbot/dashboard/blob/main/quants_lab/controllers/bollinger_v1.py), which defines a directional trading strategy that uses [Bollinger Bands](https://en.wikipedia.org/wiki/Bollinger_Bands) to determine potential buy and sell signals. The strategy considers factors like the length of the Bollinger band, the number of standard deviations, and specific thresholds for taking long or short positions. 

## Optimization with Optuna

Using the Optuna framework, Dashboard can fine-tune hyperparameters automatically. By selecting a strategy and defining specific optimization parameters, you can initiate the optimization process. The system will then try out numerous combinations of parameters to find the most profitable set.

To demonstrate the entire process, we take the example of optimizing the `near-usdt` trading pair using 120 days of historical 3-minute candles data.

1. We download the candles data which will be saved inside the `/data/candles` folder. 

2. Go to the `Create` page amd select one of the directional strategies. You can use the same values included in the video or use your own.

3. Next in the `Optimize` screen, select the strategy name and click **Create**, change the pair to `near-usdt` and modify the desired values in the script and save the file.
 
4. Select the study name and enter the number of `trials` and click **Run**. 

Upon completion of optimization, you'll be presented with the results, showing which trials yielded the best net profit and loss (PNL). This gives you a clear understanding of which strategy parameters work best.

## Next Steps

As we conclude this chapter, we set the stage for the next one, where we will analyze the results in-depth using the Hummingbot dashboard and deploy the most promising strategies for real-time trading.

[Deploying Backtested Strategies](6-backtesting-and-optimization.md){ .md-button .md-button--primary }
