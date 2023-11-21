# Using and Customizing v2 Scripts in Hummingbot

1. Getting Familiar with the Scripts
Script Overview: Briefly explain the structure of the scripts, mentioning the main parts like trading pairs, order levels, and risk management settings.

2. Customization Areas

- Trading Pairs:
Explain how to change the trading pairs in the script (e.g., from "LOOM-USDT" to another pair).
Mention where this change is made in the script.

- Order Levels:
Manual Order Levels or use Order Builder

`Linear`
spreads = Distributions.linear(n_levels=15, start=0.4, end=2.5)

`Arithmetic Distribution`
spreads = Distributions.arithmetic(n_levels=15, start=0.4, step=0.2)

`Geometric Distribution`
spreads = Distributions.geometric(n_levels=15, start=0.4, ratio=1.2)

`Logarithmic Distribution`
spreads = Distributions.logarithmic(n_levels=10, base=10, scaling_factor=1.0, start=0.4)


- Risk Management (Triple Barrier Configuration):
Explain the purpose of stop loss, take profit, and time limit settings.
Point out where these parameters can be adjusted in the script.

- Market Data (Candles Configuration):
Clarify the role of candle data and how its interval impacts trading decisions.
Indicate where to change the candle interval settings.

3. Running the Script
Starting Hummingbot: Instructions on how to start Hummingbot and load the script.

4. Monitoring and Adjustments:
Guide on monitoring the bot’s performance.

To effectively monitor the activity of your Hummingbot script, especially in the context of Binance, you would want to set up a view that aligns with the key parameters and indicators used in your script. Here's a breakdown of the indicators and settings you should consider:

  - a. Bollinger Bands
    Length: Set the Bollinger Band length to 200 as per your script.
    Standard Deviation: Set the standard deviation to 3.0 as specified in your bollinger_band_std.
    Trading Pair: Ensure this pair is selected on Binance.

  - b. Candlestick Chart
    Interval: Set the interval to 1h (1 hour) to match your script's candles_interval.