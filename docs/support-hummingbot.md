# Support Hummingbot and Get Fee Rebates

**English version | [中文版](/support-hummingbot-cn)**

## Intro

Thank you for your support for the Hummingbot codebase! We’d love to have you all support us by creating exchange accounts using our referral codes, or if you're a developer, adding our brokerID to your custom bots.  

This supports our work at the not-for-profit Hummingbot Foundation and **provides you with increased fee share rebates as well!** Our primary revenue stream are exchange broker programs, in which we partner with exchanges that share a portion of the trading fees you pay with us, at zero cost to you. For exchanges that allow it, we remit 25% of our total fee share with users.

## Why should you support us?

Hummingbot is different from other trading bots:

1. **Open Source:** Our mission is democratize high-frequency trading (HFT) and make sophisticated trading tools and algorithms accessible to everyone in the world! In order to achieve this mission, we’ve decided to make our exchange connectors and strategies open source so that any one can benefit from and contribute to the codebase.
2. **Free:** To keep keep Hummingbot open source and free, we have fee share agreements with exchange partners, in which the exchanges share a portion of the trading fees, without bearing any additional fees from the user.
3. **Community Owned:** Hummingbot Foundation is community owned, where the community can create proposals and vote through HBOT. Excess Funds are held in treasury and can be allocated via voting towards dev grants, token buybacks, or other initiatives that the community proposes. Feel free to learn more about how [Governance](/governance/) and [HBOT proposals & voting](/governance/proposals) works!

### Get increased fee rebates

Certain exchanges such as [Gate.io](https://www.gate.io/) and [OKX](https://www.okx.com/) allow their broker partners to allocate a certain percentage of their fee share to users.  For exchanges that allow for this, we already allocate 25% of our total fee share (typically 10%) to users as an additional incentive to add the Hummingbot brokerID. This means that any users who sign up using our referral link and/or use Hummingbot will get an additional 10% off their trading fees!

[![](/assets/img/fee-discounts.jpg)](/assets/img/fee-discounts.jpg)

Our revenues, which we report to the community every month (see [Reporting](https://hummingbot.org/reporting/)) lets us maintain a full-time, globally distributed team of engineers, quality assurance analysts, community managers, and others who support the global Hummingbot community of developers and traders.

### Dev grants in stablecoins, not HBOT

Currently, all developer grants are in HBOT tokens since our revenues are not quite covering operational costs. After we are cash flow positive, we will propose that a certain percentage of our fees be directed toward developer grants. This would allow developers to earn stablecoins rather than HBOT for:

- Fixing bugs
- Adding new exchange connectors
- Adding and improving strategies

### Future community initiatives

Hummingbot Foundation’s mission also includes **educating everyone on how to master high-frequency trading (HFT)** because we believe its the best way to help everyone achieve financial freedom!

For example, we are launching a free developer bootcamp ([Hummingbot Botcamp](http://www.hummingbot.thinkific.com)) to teach everyone how to create their own trading bots with Hummingbot.

More resources means that we can create more program like this, as well as supporting the community in creating other tools and resources like [trader sharing sessions](https://www.youtube.com/watch?v=eB_66K0JxgM&t=351s), [TradingView integrations](https://www.youtube.com/watch?v=IZeCQNJmLy8), and [StreamLit dashboards](https://www.youtube.com/watch?v=l6PWbN2pDK8).

Future initiatives may include a [user-generated strategies marketplace](https://forum.hummingbot.org/t/idea-earning-hbot-with-user-generated-strategies/18/5), and [trading competitions](https://forum.hummingbot.org/t/idea-featured-exchange-monthly-trading-competitions/17)!

It just takes less then 10 minutes to set this up, and you’ll be able to support us and our mission. The future of our roadmap depends on you all.

## Supporting Hummingbot on Binance

Use our referral code to sign up for Binance, and we will receive the following portion of trading fees you pay, at zero cost to you.

| % Trading fee rebate  | Binance Spot | Binance Futures |
|-----------------------|--------------|-----------------|
| Hummingbot Foundation | 45%          | 30%             |

Currently, we are discussing with Binance how to share a portion to users, as we already do for Gate.io, OKX, and other exchanges.

### For Hummingbot users

Below, we show you how to support us if you use the latest versions of Hummingbot to run bots on Binance:

#### 1. Create a new Binance account using our referral link

In order for both you and us to get fee share rebates, you will need to sign up for a new account with these referral links:

- **Binance.com**: <https://www.binance.com/en/register?ref=FQQNNGCD>
- **Binance.com Futures**: <https://www.binance.com/en/futures/ref/hummingbot>

#### 2. Create new API keys

Afterwards, create an API key, following this [Binance guide](https://www.binance.com/en/support/faq/360002502072).

When creating the API key, make sure to  **Enable Spot & Margin Trading** if you are trading on spot markets, as well as  **Enable Futures** if you are trading perpetual futures.

#### 3. Add API keys to Hummingbot

Inside Hummingbot, run the [`connect` command](/operation/connect/) to add your new API keys. Now, every trade you perform will share a portion of your trading fees with Hummingbot Foundation.

### For Hummingbot forks and custom bots

[![](/assets/img/fork-volumes.png)](/assets/img/fork-volumes.png)

From our [public dashboard](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52), we are aware that a large portion of reported trading volumes comes from the 1600+ Hummingbot forks out there. As an free and public open source project, **we encourage anyone to fork our code** because it contributes to our greater mission to democratize high-frequency trading.

However, since exchange fee share agreement sustain our activities as a not-for-profit foundation, we ask that developers who use Hummingbot forks, as well as others in the community who run their custom trading bots consider adding the Hummingbot brokerID to their code when placing orders.

Here is how you can add our brokerId into your bot code for Binance:

#### 1. (Binance only) Create a new account and API keys

Follow the steps above in **For Hummingbot users** to create a new Binance account and API keys, since Binance only shares fees with us for accounts that are created using our referral links. Most other exchanges don't impose this requirement.

#### 2. Add our brokerID to your codebase

Below, we provide instructions for how you can add the Hummingbot brokerID. For more information, refer to [How to Set Up the API Broker ID](https://www.binance.com/en/support/faq/a78a065d0c4846aaa1af474d8e712ab9) in the Binance documentation.

**Binance Spot**

1. Go to the method or function of your code that is sending the orders to the exchange
2. Find the param `newClientOrderId` in the body of the request
3. Check that the order id that you are sending has this prefix: **`x-XEKWYICX`**
4. Ensure that the length of `newClientOrderId` is a maximum of 32 char

[Reference Code Sample](https://github.com/hummingbot/hummingbot/blob/ea84d2b959e795866f4105cc5206731c49ba8b20/hummingbot/connector/exchange/binance/binance_exchange.py#L91)

**Binance Futures**

1. Go to the method or function of your code that is sending the orders to the exchange
2. Find the param `newClientOrderId` in the body of the request
3. Check that the order id that you are sending has this prefix: **`x-3QreWesy`**
4. Ensure that the length of `newClientOrderId` is a maximum of 32 char

[Reference Code Sample](https://github.com/hummingbot/hummingbot/blob/ea84d2b959e795866f4105cc5206731c49ba8b20/hummingbot/connector/utils.py#L64)

!!! tip
    If you need help with this process, don't hesitate to reach out to us on the **#developer-chat** channel in [Discord](https://discord.gg/hummingbot) or send us an email to <federico@hummingbot.org>.

## Supporting Hummingbot on other exchanges

Since most exchange share fees with Hummingbot Foundation based on the brokerID only, all you have to do to run the latest versions of Hummingbot.

For users running older versions of Hummingbot or forks, here is how you can support us by adding our brokerID to your code.

Different exchanges have different ways of handling the BrokerID.

1. Go to the **Hummingbot BrokerIDs** table below
2. For each exchange, see **Constants File** for how the brokerID is defined in the Hummingbot codebase
3. Check the **Reference Code Sample** column to how the brokerID is attached to orders in the Hummingbot codebase

<a href="https://hummingbot-foundation.notion.site/04f67a05abe545bc9f076b99869cf7d1?v=4630a74538764b89a088b85518450061" target="_blank" class="md-button md-button--primary">:fontawesome-solid-table: Hummingbot BrokerIDs</a>

!!! tip
    If you need help with this process, don't hesitate to reach out to us on the **#developer-chat** channel in [Discord](https://discord.gg/hummingbot) or send us an email to <federico@hummingbot.org>.

## FAQ

### How can you add a Hummingbot brokerID?

All you need to do is to add a snippet of code (as listed above) depending on the exchange that you are using for trading. This code snippet allows Hummingbot to add specific metadata to the HTTP requests so that the exchanges are able to identify that the order comes from a user using the Hummingbot codebase.

### How does the brokerID actually work for different exchanges?

Every time you use Hummingbot to submits an order, it sends an HTTP request to the API of the exchange. The information of the order are placed in the body and the authentication in the headers of the HTTP request (exact implementation differs per exchange).

In order for the exchange to identify that the HTTP request for the order is coming from a user who is using the Hummingbot codebase, it checks for the metadata in the HTTP request for a Hummingbot identifier. It works slightly differently for every exchange, the way they implemented the mechanism can be grouped into three major categories of metadata within an HTTP request:

**Order ID**

- Hummingbot may need to create a specific order id that the exchange is able to recognize as a Hummingbot order that is sent in the body of an HTTP request.
- Some exchanges ask to put a referral code as a prefix in this order ID
- Example: Binance

**Header**

- Some exchange may request a special Hummingbot header in the HTTP request
- Example: ByBit

**Custom parameter in body**

- Some exchanges create their own custom parameters in the metadata to identify the order

### After adding the brokerID, can Hummingbot get access to my account for other purposes?

No. We are only updating the metadata of the HTTP request of which your bot is sending orders for Binance to check that the order comes from a user using the Hummingbot codebase. We are also only able to know your order volume for each exchange through the code implementation.

### What if I have a very old version of Hummingbot where the implementation code logic for the metadata tracking in the HTTP request does not exist?

Follow the instructions in the **Hummingbot BrokerIDs** table.

<a href="https://hummingbot-foundation.notion.site/04f67a05abe545bc9f076b99869cf7d1?v=4630a74538764b89a088b85518450061" target="_blank" class="md-button md-button--primary">:fontawesome-solid-table: Hummingbot BrokerIDs</a>

If it doesn’t work, reach out to us on the #developer-chat channel in Discord or email federico@hummingbot.org.
