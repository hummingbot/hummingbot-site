---
date: 2024-02-15
authors:
  - foundation
categories:
  - Academy
tags:
  - Connector Guides
---

# Using Binance with Hummingbot

![cover](cover.png)

## Introduction

[Binance](https://binance.com) is the world’s largest crypto exchange by trading volume, with $76 billion daily trading volume on Binance exchange as of August 2022, and 90 million customers worldwide.

This section provides a step-by-step guide that helps you use Hummingbot with Binance, starting with generating exchange API keys and adding them to Hummingbot. All information is sourced from the exchange website and other content.

<!-- more -->

## Generate API Keys

**Step 1**

Log in to your Binance account and click **Profile** - **[API Management](https://www.binance.com/en/my/settings/api-management)**

   ![Step 1](binance-api1.png)

**Step 2**

Click **Create API**. Please note that before creating an API Key, you need to:

   - Enable [two-factor authentication (2FA)](https://www.binance.com/en/support/faq/account-functions?c=1&navId=1#11) on your account.
   - Make a deposit of any amount to activate your account.

   ![Step 2](binance-api2.png)

Select **System generated** as your preferred API Key type. For more details on self-generated API Keys, please refer to [How to Generate an RSA Key Pair to Send API Requests on Binance](https://www.binance.com/en/support/faq/2b79728f331e43079b27440d9d15c5db).

   ![Step 3](binance-api3.png)

Enter a label/name for your API Key.

   ![Step 4](binance-api4.png)

**Step 3**

Verify your request with 2FA devices.

   ![Step 5](binance-api5.png)

   [![Step 6](binance-api6.png)](binance-api6.png)

Your API Key is now created. Do not disclose your API Key, Secret Key (HMAC), or Private Key (RSA) to anyone to avoid asset losses. If you forget your Secret Key, you'll need to delete the API and create a new one.

## Add Keys to Hummingbot

From inside the Hummingbot client, run `connect binance`:

```
>>> connect binance

Enter your binance API key >>>
Enter your binance secret key >>>
```

If connection is successful:

```
You are now connected to binance
```
