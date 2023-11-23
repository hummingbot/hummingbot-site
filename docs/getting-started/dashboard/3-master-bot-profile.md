## Introduction

In this installment, we show how to utilize the Master Bot Profiles to create and store API keys, along with exploring available scripts in the Hummingbot Dashboard. Let's break down the essentials!

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/MPQTnlDXPno?si=7Ouo4OtS2Qh5VN_b" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Role of the Master Bot Profile

The Master Bot plays a pivotal role in the credential management process in Hummingbot. It serves as a centralized location where exchange API keys and the scripts/strategies available to new bots are securely stored. When spawning new bots from the dashboard, they inherit the encrypted keys and available scripts/strategies from the Master Bot.

### How Does It Work?

1. Create an instance of the Master Bot from Docker
2. Connect to this Docker instance
3. Add exchange credentials to this instance.
4. Spawn new bots from Dashboard, which will use the encrypted data from the Master Bot for credential access.

### Future Profiles 

In the future, plans are in place to introduce additional **bot profiles**. Each profile can possess different API keys and available scripts, enabling users to specify the profile they want to use when spawning a new bot.

## Adding Exchange Credentials

![](master-bot.png)

To test the Master Bot's functionality, we'll connect to the Binance exchange as an example:

1. Ensure Docker is running, as it's essential for spawning new bots.
2. Navigate to the **Credentials** tab in the dashboard.
3. Click on the **Start** button to initiate the Master Bot.
4. Open a terminal and enter the command `docker attach hummingbot-master_bot_conf` to attach to the Master Bot.
5. Connect to the desired exchange (e.g., Binance) and input the required API keys using the command `connect binance` (replace binance wih the name of exchange you want to connect to).
6. Fetch the balance to verify the connection.

## Scripts Exploration

The Hummingbot Dashboard offers a variety of pre-written scripts that can be utilized as templates for new bots. Here's how you can explore and modify them:

1. In the dashboard, navigate to the **File Explorer**.
2. Browse through available scripts. Those prefixed with "V2" are part of the V2 framework.
3. For deeper understanding and advanced configurations, consider joining the **Bot Camp**, which offers comprehensive training on these scripts.
4. Open any script to view its content. The built-in editor allows for direct modifications.
5. If you're more comfortable with an external IDE, you can edit scripts there and then upload them back to the dashboard.

## Saving Changes

The process of integrating credentials and leveraging available scripts is streamlined to ensure both security and efficiency. Whether you're editing scripts directly in the dashboard or using an external IDE, remember to save your changes to any scripts you modify.

If you make modifications in the dashboard's editor, use **Apply** button to apply changes, and then **Ctrl + S** to save.

## Next Steps

The Master Bot Profile ensures the secure handling of credentials and offers users flexibility in creating bots. Next, learn how to create and manage new instances:

[Managing Bots](4-managing-bots.md){ .md-button .md-button--primary }


