---
date: 2025-03-18
authors:
  - foundation
categories:
  - Connector Guides
---

# Running a Trading Bot with Hummingbot on Derive

![cover](hummingbot-derive.webp)

Welcome to the new Derive Hummingbot Connector Guide, your comprehensive resource for integrating and trading on Derive’s decentralized derivatives platform using Hummingbot. Powered by the innovative Derive Chain and built on the OP Stack for high throughput and low-cost settlements, Derive redefines onchain trading with seamless onboarding, robust self-custody, and advanced risk management for options, perpetuals, and structured products. 

In this guide, we'll walk you through connecting your Derive account to Hummingbot and setting up an automated trading bot to harness these cutting-edge features. Let's dive in!

<!-- more -->

## Add Funds and Get Derive API Keys

Before you can start trading on Derive using Hummingbot, you'll need to set up your wallet, connect it to the Derive platform, deposit funds, and configure your API access. This section walks you through these essential first steps to prepare your account for automated trading.

*Derive supports multiple wallets such as Rabby Wallet, Coinbase wallet, Ledger etc, but for this guide, we'll use **MetaMask**, one of the most popular Ethereum wallets. MetaMask allows users to interact with Derive via its browser extension or mobile app.*

### Install MetaMask

Ensure MetaMask is Installed and Set Up

If you haven’t already, download and install the [MetaMask](https://metamask.io/) browser extension or mobile app. Create a new wallet or import an existing one.

### Connect MetaMask Wallet to Derive

Open your web browser and go to [https://derive.xyz/](https://derive.xyz/). On the Derive homepage, click the **"Connect Wallet"** button, typically located in the top-right corner of the page.

   [![image](1.png)](1.png)

From the list of available options, select **"MetaMask"**.

   [![image](2.png)](2.png)

MetaMask will open a pop-up asking you to confirm the connection.

   [![image](3.png)](3.png)  
   
After the wallet is connected, Derive will prompt you to sign a message to verify you are the owner of the wallet.

   [![image](4.png)](4.png)
   [![image](5.png)](5.png)  

Check both boxes if you read through and agree with the terms and then "Agree and Continue"

   [![image](6.png)](6.png)

### Deposit Funds

Once your wallet is connected, you will need to deposit tokens into your Derive account. Deposit USDC, ETH, BTC and other tokens to start trading options and perps. Make sure you have enough balance to cover at least the minimum trading amount + fees. 

   [![image](7.png)](7.png)

### Register Session Key

After connecting, click the Developers link on the left side of the page. If you don't see it, go back to the Home page and then click Developers. Click Register Session Key and then enter in your Metamask Wallet's public address. You'll need to confirm the signature request in Metamask. 

   [![image](8.png)](8.png)
   [![image](9.png)](9.png) 

Once this is done, take note of a couple things which we will need to connect Hummingbot, the first one is the **Derive Wallet address** and second is the **Subaccount ID**

   [![image](10.png)](10.png) 

### Get Metamask wallet private key

- Click on the three dots next to your account and then Account Details

- On the Account Details page, click "Show Private Key"

- Enter your wallet password and click "Confirm"

- Click on Hold to reveal Private Key to display your private key 

   [![image](11.png)](11.png)

 
Once available, copy the private key and store it safely in a secure location. You will need this key later to connect to Hummingbot.


## Using Derive with Hummingbot Client

!!! note "Dashboard Compatibility Notice"
    Derive is currently not available via the Hummingbot Dashboard due to dependency conflicts within the Hummingbot Library. Until this is resolved, please follow the instructions below to set up Derive using the standalone command-line client (Docker or Source installation).

The following instructions guide you through adding your Derive credentials to the standalone Hummingbot command-line client.

### Docker Setup

 **Clone the Hummingbot Repository**

   ```bash
   git clone https://github.com/hummingbot/hummingbot
   ```

 **Edit `docker-compose.yml`**

   Navigate to the `hummingbot` project directory and open the `docker-compose.yml` file using an IDE like VSCode or a text editor.

 **Update the Image Line**

   Find the line that starts with `image:` under the `hummingbot` service. Modify it based on whether you want the latest stable or development version:

   For the latest stable version:

   ```bash
   image: hummingbot/hummingbot:latest
   ```

   For the development version:

   ```bash
   image: hummingbot/hummingbot:development
   ```

 **Launch the Docker Container**

   After updating the image line, clone the repository and launch the Hummingbot Docker container:

   ```bash
   cd hummingbot
   docker compose up -d
   ```

 **Attach to the Hummingbot Container**

   Hummingbot should now be running in the background. Use the following command to attach to the running instance:

   ```bash
   docker attach hummingbot
   ```

 **Proceed to Add API Keys**

   Once Hummingbot is running, follow the steps in the "Add Keys to Hummingbot" section below to connect your Derive account.

### Source Setup

 **Clone the Repository**

   ```bash
   git clone https://github.com/hummingbot/hummingbot.git
   ```

 **Run Install**

   After cloning the repo, install the Hummingbot dependencies by running the `install` command:

   ```bash
   cd hummingbot
   ./install
   ```

 **Activate the Conda Environment and Compile**

   Activate the conda environment and compile Hummingbot:

   ```bash
   conda activate hummingbot
   ./compile
   ```

 **Start Hummingbot**

   Run the following command to launch Hummingbot:

   ```bash
   ./start
   ```

### Add Keys to Hummingbot

To connect Hummingbot to Derive's perpetual market, you'll need Derive wallet address, the Subaccount ID and your Metamask wallet private key.

 From within the Hummingbot client, run the following command to start the connection process:

   ```bash
   connect derive_perpetual
   ```

 You will be prompted to enter your credentials:

   ```
    Enter Your DerivePerpetual Wallet address >>>
    Enter your wallet private key >>>
    Enter your Subaccount ID >>>
   ```

 If the credentials are correct, you'll see the following confirmation message:

   ```bash
   You are now connected to derive_perpetual
   ```

 To verify the connection, run the **balance** command within the Hummingbot client to check if the displayed balance matches your Derive account:

   ```bash
   balance
   ```

   [![image](balance.png)](balance.png)

### Run a Strategy

For this example, we'll use the [**bollinger_v1**](https://github.com/hummingbot/hummingbot/blob/development/controllers/directional_trading/bollinger_v1.py) directional trading controller.

 **Create a controller config**

   Run the `create` command from within the Hummingbot client to configure the controller:

   ```bash
   create --controller-config directional_trading.bollinger_v1
   ```

 **Create the configuration:**

   You will be prompted to provide various configuration parameters. Feel free to adjust the settings based on your preferences: 

   - Select **derive_perpetual** as the name of the exchange you want to trade on.

   ```
   Enter the total amount in quote asset to use for trading >>>
   Enter the name of the exchange to trade on >>> derive_perpetual
   Enter the trading pair to trade on >>>
   Enter the maximum number of executors per side >>>
   Set the leverage to use for trading >>>
   Enter the stop loss >>>
   Enter the take profit >>>
   Enter the time limit in seconds >>>
   Enter the order type for taking profit >>>
   Enter the trailing stop as activation_price, trailing delta >>> 
   ```
   
   - When prompted for the connector with the candles data, make sure to select a different connector other than **derive** since it doesn't currently support candles feed.

   ```
   Enter the connector for the candles data, leave empty to use the same exchange as the connector:
   Enter the trading pair for the candles data, leave empty to use the same trading pair as the connector:
   
   ```
   [![image](12.png)](12.png)


  - Once the configuration is done, give the controller config a name or use the default one:

   [![image](13.png)](13.png)

 **Create a script config**

   - Next we have to create the script config for the **v2_with_controllers** generic script to run our controller config.

   - To create the script config, use the following command:

   ```bash
   create --script-config v2_with_controllers
   ```

   - Make sure to enter the file name of the controller config we created earlier 

   [![image](14.png)](14.png)


   - Lastly, give the script config a name

   [![image](15.png)](15.png)


 **Start the strategy**
 
 To start the strategy, use the following command. Note - if your config file has a different file name then replace the config name below

   ```bash
   start --script v2_with_controllers.py --conf conf_v2_with_controllers_1.yml
   ```

   [![image](16.png)](16.png) 
 
**Monitor the Strategy**  

You can monitor your bot by checking the logs for any errors and running the **status** command to view the current order status. If needed, you can close the log pane to get a clearer view of the status.  

This strategy is designed to **place a buy order when the price approaches the lower Bollinger Band** (indicating an oversold condition) and **a sell order when the price reaches the upper Bollinger Band** (indicating an overbought condition). Since the bot waits for favorable conditions before executing trades, you may need to allow some time before it places its first order.

   ```bash
   status
   ```

   [![image](status.png)](status.png)

 **Stop the Bot**

   To stop the bot, use the **stop** command. Please note that the bot will need some time to create orders to close out the positions. 

   ```bash
   stop
   ```

   [![image](17.png)](17.png)

For more details on V2 Strategies or other available controllers, check out the Controllers section of [V2 Strategies](../../../v2-strategies/controllers/index.md) documentation. Please note that since Derive only supports **one-way mode** some V2 Strategies that use Hedge mode may not work correctly with the controller.    



## Known Issues

- [Derive Rate Limit](https://docs.derive.xyz/reference/rate-limits) - The system enforces rate limits using a fixed window algorithm, replenishing the request allowance every 5 seconds to maintain system stability. Market makers can access higher rate limits upon request by contacting the support team. 

## Additional Information: Leverage

When using perpetual futures exchanges, **leverage** refers to the size of your position relative to the collateral you have provided. Specifically, it's calculated as:

\[
\text{Leverage} = \frac{\text{abs(Notional Value)}}{\text{Collateral (net of options)}}
\]

For detailed information on how leverage is computed on Derive, see their [official documentation on Leverage](https://docs.derive.xyz/reference/private-get_positions#:~:text=leverage).