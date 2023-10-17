<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/MPQTnlDXPno?si=RaR0CIqOEeSJ9-m2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the Master Bot Profile?

* Using Master bot you could set the exchange credentials, create strategies/scripts the and provide it to other bots
* Configuration will be replicated by other bots
* Password, API keys, etc

## Why?

* Users don't need to add new credentials to each new bot they create
* They can just duplicate the Master Bot Profile

## How to launch master bot profile?

1. Access /Credentials page
    
![](./credentials.png)
    
2. Create the master bot

3. Open new terminal and Attach the bot using `docker attach hummingbot-master_bot_conf`

- Click launch / attach etc

## How to use Master Bot to create other instances

* One bot has 1 set of key for each exchange
* Create instance and select master bot


