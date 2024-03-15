---
date: 2024-01-11
authors:
  - community
categories:
  - Guides
---


# Dexalot - Hummingbot Integration Guide

## Introduction

Welcome to our user guide which will embark you on a decentralized trading journey that combines Dexalot's cutting-edge technology built on Avalanche blockchain and Hummingbot's advanced trading capabilities.

**Dexalot** offers a familiar centralized exchange experience within a secure, transparent, and efficient on-chain environment. Linking **Dexalot** with **Hummingbot** unlocks automated trading possibilities. Whether a seasoned trader or a newcomer, this tutorial equips you to navigate the exciting intersection of decentralized finance and automated trading seamlessly.

## Setting Up a Wallet on Dexalot

1. Visit the Dexalot App: <https://app.dexalot.com/trade/>
2. At upper right, click **Connect Wallet**. Then, click on the **Checkboxes** and **Accept** button.
 
![images](02.png)

Select your preferred wallet. In this guide, we will use Metamask.

![images](02a.png)

4. Let’s proceed to deposit funds into Dexalot Subnet Portfolio.
    1. Click on `Balances` tab
    2. On your Metamask wallet, ensure to have available funds in Avalanche network, ideally, $2-$5 AVAX for gas fee during deposit transaction. 
    3. Click on `3 vertical dots` at right side of token you wish to deposit, then select `Deposit into Dexalot`


![images](03.png)    

5. Approve the deposit with your Metamask wallet. Normal gas fees are less than 1 USDT & deposit will normally take less than 1 minute. But will be relatively higher & longer during busy period. 

![images](04.png)    


## Installing Hummingbot and Gateway

### Using Windows 11 Machine 

1. Search for **Powershell**, right-click and click **Run as administrator**


![images](06.png)    

2. In Powershell terminal, type `wsl --install`. Remember to restart PC or laptop after installing.
3. In Microsoft Store, search “Ubuntu”, and click `Get` button to download and install the app.

![images](05.png)    


4. Launch Ubuntu app. Provide preferred username and password.

![images](07.png) 

5. Continue to type these commands in Ubuntu terminal:
    1. `curl -fsSL https://get.docker.com -o get-docker.sh`
    2. `sudo sh get-docker.sh`
    3. `sudo usermod -aG docker $USER`
    4. `sudo apt-get update`
    5. `sudo apt-get install docker-compose-plugin`
    6. `docker compose version`
    7. `git clone https://github.com/hummingbot/deploy-examples.git`
    8. `cd deploy-examples/hummingbot_gateway_compose/`
    9. `docker compose up -d`

![images](11.png)    

10. `sudo chmod -R a+rw ./hummingbot_files ./gateway_files`
11. `docker cp hummingbot:/home/hummingbot/scripts-copy/. ./hummingbot_files/scripts/`
12. `docker attach hummingbot`
    1. type your preferred `password` for Hummingbot client


### **Connecting to Dexalot via Gateway**

1. In Hummingbot client, type 
    1. `gateway generate-certs`
    2. type your preferred `password` for Gateway
    3. type `exit` and press `enter` key    

![images](12.png)     


2. In Ubuntu terminal, type `docker compose down`
3. Open `docker-compose.yaml` file using your favorite code editor. We are using Visual Studio Code.


![images](13.png) 


Uncomment the lines with environment and CONFIG_PASSWORD and type the passwords you have set above. Remember to save the file.

![images](14.png) 


5. In Ubuntu terminal, type these commands:
    1. `docker compose up -d`
    2. `docker attach hummingbot`
6. In Hummingbot client, check that `Gateway: ONLINE`. If so, you have successfully setup Gateway.


![images](15.png) 


7. Continue to connect Metamask wallet to Dexalot, type:
    1. `gateway connect dexalot`
        1. `avalanche`
        2. `dexalot`
        3. `Yes`
        4. <`enter Private key of Metamask wallet`>
        5. <`press enter key`>


![images](16.png)         


### **Setting Up a Simple Market Making Bot**

1. In Hummingbot client, type these commands 
    1. `create`
        1. `pure_market_making`
        2. `dexalot_avalanche_dexalot`
        3. `ALOT-USDC`
        4. `.1`
        5. `.1`
        6. `1800`
        7. `100`
        8. `No`
        9. `dexalot_alotusdc.yml`
    2. Note: *Feel free to change and customize the parameters above, according to your capital and risks tolerance.*
2. Before proceeding to start the bot, ensure to have switch the network from `Avalanche` to `Dexalot` at the Dexalot App. You can switch the network at the upper right of screen.


![images](18.png) 


In addition, ensure also that you have appropriate balances of tokens that you wish to trade with. In this guide, we will be trading ALOT-USDC pair. So, we have manually traded to get ALOT and USDC.


![images](21.png)

Finally, we need to add ALOT in the gas tank. ALOT will be used for gas fees for every activity that the bot will perform. Click on 3 vertical dots at right side of ALOT, and select Add Gas. For amount, we usually set 5-10 ALOT which will last for few weeks or a month.

![images](24.png)

5. We are now ready to start the bot, in Hummingbot client, type:
    1. `start`
    2. `yes`
    3. `status`


![images](22.png)    

You can check the bot’s open orders at Dexalot App, inside the Orders tab, as well as at the Order Book column with yellow dot indicators.

![images](23.png)    

### **Utilizing DIP and Multiverse Programs**

1. The Dexalot Incentive Program (DIP) 
    1. Giving away up to 4.8 Million $ALOT
    2. A 2-year program which started on Q1 2023, & ending on Q1 2025
    3. Total Monthly rewards of 200,000 ALOT Tokens 
    4. Rewards are updated daily at Leaderboard, and distributed the next month after you started trading the eligible pairs. Specifically, rewards are released on 7th, 14th, 21st, & 28th day, depending on your total reward amount.
    5. Refer to this blog post for details on how [DIP rewards are calculated](https://medium.com/dexalot/the-dexalot-incentive-program-1d55c869a6c0).
2. The Multiverse Program
    1. Up to $3 Million in AVAX tokens by Avalanche Foundation
    2. A 1-year program which started on Sep 2023, & ending on Sep 2024
    3. Total monthly rewards are unknown as teams have internal metrics that determines quantity to be unlocked based on user growth, adoption, & trading volume at Dexalot platform.
    4. Rewards are calculated only at end of the month.
    5. Refer to this blog post for details on the [Multiverse Program](https://medium.com/dexalot/dexalot-multiverse-c4887aedf301)
3. Experience Sharing
    1. Note that if you are using a Virtual Private Network (VPN) while accessing the Dexalot App, you may encounter functionality issues. To ensure seamless operation, we recommend disabling your VPN or reconfiguring its settings to allow proper access to the Dexalot App. 
    2. Pay close attention to your ALOT balance, as ALOT is the token used for paying gas fees on the Dexalot subnet. Although the gas fees are relatively low, the frequent refreshing of orders, especially when you have multiple order levels, can quickly deplete your ALOT balance and incur substantial costs. To keep your expenses under control, we recommend setting the order refresh interval to 30-60 minutes or longer, and limiting your orders to a single or few levels. 
    3. Aside from saving on gas fees by setting a longer order refresh interval, keeping your limit orders in the order book for an extended period before they are filled or executed can also earn you additional rewards. This incentivizes traders to place orders with patience and let them stay in the order book, rather than frequently canceling and replacing orders, which can incur higher gas fees.
    4. Ensure that the limit orders are inside the blue bands (i.e within 2 standard deviations of mid-price) in order to be eligible for rewards


![images](26.png)    


5. The rewards you earn are primarily determined by your filled orders and overall trading volume. However, the amount of rewards can fluctuate daily, depending on the volatility of the specific market pair you are trading. Generally, weekends tend to have lower trading activity, as many automated trading bots seem to be less active during those periods. Consequently, the rewards you can potentially earn may be lower on weekends due to the reduced trading volume.
6. After observing the platform's performance over the past 9 months, it appears that under typical market conditions, without any extreme market crashes or volatility, traders can expect to generate a net monthly profit ranging from 5% to 20% of their deployed capital on Dexalot. These figures represent the potential earnings during periods of relatively stable and normal market movements. Note though that profits are NOT guaranteed.
7. Let's take a look at the rewards earned in February 2024 as an example. With a capital deployment of 6,300 USDT, the total rewards accumulated for the month were approximately $1,345. This amount translates to around 21% of the initial capital deployed. Due to the recent upward trend in the market over the past few weeks, trading activities have also been profitable, contributing to the overall positive returns.


![images](25-b.png)    


8. Some issues have been identified with Hummingbot (ex: “[failed to fetch updates](https://github.com/hummingbot/gateway/issues/209)”). We further encourage users to report other issues at Github. We are optimistic that community developers will seize the open bounty opportunity to address these issues, enabling more users to run bots on Dexalot and capitalize on the rewarding opportunities available.

Thanks for taking the time to read this detailed guide. We encourage you to join us on Dexalot and start earning rewards over the next few months. If you have any questions or encounter any issues, feel free to reach out on Hummingbot Discord.
