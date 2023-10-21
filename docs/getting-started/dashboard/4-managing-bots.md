# Running and Managing Bots in Hummingbot Dashboard

## Introduction

In this tutorial, we'll dive into the process of spawning new bots, examining available strategies, making modifications, and deploying them for a set duration. The subsequent chapter will focus on analyzing the results of our deployed strategies.

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/915E-C2LWdg?si=Kp2ZzUYiFi2Ysi_G" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Managing Bot Instances

### Hummingbot Broker

On the instances page, to the right, you'll notice the Hummingbot broker. Before creating any bot, it's essential to start this broker. This component is responsible for enabling communication between the dashboard and the bot, facilitating commands such as starting or stopping a strategy.

### Creating Bot Instances

On the left, you'll find the creation card. Here, you'll input:

- Name of the container
- Desired Docker image (useful if you have a custom Hummingbot version with unique strategies)
- Profile to start from (for now, only the master bot is available, but more profiles will be added in the future)

Once a bot is created, a card will appear allowing you to select a strategy from those available. After choosing a strategy, press "Start" to launch the bot with the selected strategy.

## Available Strategies

The strategies available for selection are the same ones present in the master bot. Once you've chosen one, simply press "Start," and the bot will initiate with your chosen strategy.

## Customize Strategy

Below the instances page, the file explorer allows users to view and modify the specific scripts or files for each bot they create. Each bot has its distinct set of scripts that can be adapted to fit specific trading requirements or strategies.

## Putting it all together

To provide a comprehensive example:

1. Navigate to the **Instances** tab.
2. Start the HB broker (may take a few minutes).
3. Create a bot instance, giving it a name like "dman" and using the Hummingbot `latest` Docker image and the master bot profile.
4. View the available strategies and select one (e.g., the "Bollingrid multiple pairs").
5. Use the file explorer to customize the chosen strategy as needed.
6. Execute the strategy, monitor its performance, and make necessary adjustments or stop it as required.

## Conclusion

The ability to spawn, customize, and manage bots offers traders a flexible and dynamic way to optimize their trading strategies with Hummingbot. In our next chapter, we'll delve into analyzing the results and performance of the deployed strategies.