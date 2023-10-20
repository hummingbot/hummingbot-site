# Backtesting and Optimization

## Introduction

In this chapter, we delve deep into one of the most critical aspects of bot trading: understanding the backtesting framework. The chapter takes you through a comprehensive journey, covering everything from downloading historical data to optimizing trading strategies.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/bAi2ok7_boo?si=R52owIrglHWlSuS5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## **Download Historical Data**

First things first, you need historical data to backtest any trading strategy. The dashboard allows you to define the exchange, specify trading pairs (separated by a comma), select the time intervals, and choose the number of days for which you want the historical data. Clicking the "get data" option will initiate a Docker container running a script that downloads the desired data. The data will be stored in the `data` folder, specifically in the `candles` subfolder.

## **Available Controllers**

Once you have the data, the next step is to select a strategy for backtesting. The "create" tab showcases a list of available controllers. While you can create a custom controller, currently, only the directional trading strategies are backtestable. Examples include `bollinger v1`, `macd bollinger v1`, and `trend following v1`.

## **Bollinger Strategy**

We then deep dive into optimizing the Bollinger strategy, a well-known trading strategy. For those unfamiliar, the Bollinger strategy involves using a set of bands to determine potential buy and sell signals. The strategy considers factors like the length of the Bollinger band, the number of standard deviations, and specific thresholds for taking long or short positions. This chapter will guide you on how to optimize and determine the best parameters for this strategy.

## **Optimization with Optuna**

Optimization is where the real magic happens. Using the Optuna framework, the dashboard can fine-tune hyperparameters automatically. By selecting a strategy and defining specific optimization parameters, you can initiate the optimization process. The system will then try out numerous combinations of parameters to find the most profitable set.

## **Putting it all together**

To demonstrate the entire process, we take the example of optimizing for the `near-usdt` trading pair over a 3-minute timeframe, using 120 days of historical data. We download the candles data which will be saved inside the `/data/candles` folder. Next step is to go to the `Create` page amd select one of the directional strategies. You can use the same values included in the video or use your own. Next in the `Optimize` screen and select the strategy name and click `create`, change the pair to `near-usdt` and modify the desired values in the script and save the file. Select the study name and enter the number of `trials` and click Run. 

Upon completion of optimization, you'll be presented with the results, showing which trials yielded the best net profit and loss (PNL). This gives you a clear understanding of which strategy parameters work best.

As we conclude this chapter, we set the stage for the next one, where we will analyze the results in-depth using the Hummingbot dashboard and deploy the most promising strategies for real-time trading.

