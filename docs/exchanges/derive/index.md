!!! tip "Foundation Sponsor"
    Derive is a [sponsor](../../about/sponsors.md) of Hummingbot Foundation, so when you use Hummingbot to run bots on Derive, you're supporting the Foundation and our mission to democratize algo trading with open source software. To help support us, create an account using our [Derive referral link](https://www.derive.xyz/invite/7SA0V). Thanks for your help! 🙏

!!! tip "Hackathon Sponsor"
    Derive is a sponsor of the [Agent Builders Cup](../../release-notes/2.16.0.md#agent-builders-cup-hackathon), a Hummingbot strategy hackathon with a \$20,000 total prize pool. Build an agent that trades on Derive and apply to the Derive team at [botcamp.xyz/hackathons](https://www.botcamp.xyz/hackathons)!

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Connector Version | V2 Strategies | Notes | 
| --------- | ------ | ----------------- |  ------------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | v2.1 | Yes | Supports `MARKET` order type
| [🔀 Perp Connector](#perp-connector) | ✅ | v2.1 | Yes | Supports testnet
| 🕯 Spot Candles Feed | | 
| 🕯 Perp Candles Feed | |
| [📓 Connector Guide](../../blog/posts/using-derive-with-hummingbot/index.md) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://www.derive.xyz>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/derive/>
- **CoinGecko**: <https://www.coingecko.com/en/coins/derive>
- **Fees**: <https://docs.derive.xyz/reference/fees-1>
- **Supported Countries**: <https://www.derive.xyz/terms-of-use#:~:text=restricted%20region>
- **Referral link:** <https://www.derive.xyz/invite/7SA0V>

## 🔑 About Rate Limits

- The system enforces rate limits using a fixed window algorithm, replenishing the request allowance every 5 seconds to maintain system stability. Market makers can access higher rate limits upon request by contacting the support team.

    ![API](rate-limit-api1.png)

    ![API](rate-limit-api9.png)

- **Derive Rate Limit:**  <https://docs.derive.xyz/reference/rate-limits>

# Rate Limits

The below rate limits have been implemented to safeguard our system. Rate limiters use a **"fixed window" algorithm** to discretely refill the request allowance every 5 seconds.

**Market makers are eligible for higher rate limits.**  
To apply for increased rates, please contact our support team.

| Type          | Matching | Per-Instrument Matching | Non-Matching | Connections      | Burst Multiplier |
|---------------|----------|--------------------------|---------------|------------------|------------------|
| Trader        | 1 TPS    | 1 TPS                    | 5 TPS         | 4x per IP        | 5x               |
| Market Maker  | 500+ TPS | 10+ TPS                  | 500+ TPS      | up to 64x per IP | 5x               |

> **Note:**  
> Burst requests for both REST and WebSockets are refreshed every 5 seconds.  
> For example, a trader can send 5× matching requests in a single burst but must wait 5 seconds before any further requests can be sent.


## Matching, Non-Matching, and Custom Requests

The below requests are counted as **matching** and **per-instrument matching** requests:

- `private/order`
- `private/replace` *(counted as 1 request)*
- `private/cancel`
- `private/cancel_by_nonce`
- `private/cancel_by_instrument`
- `private/cancel_by_label` *(if `instrument_name` param is set)*

### Custom Rate-Limited Requests

- `private/cancel_all` – **1 TPS**
- `private/cancel_by_label` – **10 TPS** *(if `instrument_name` param is **NOT** set)*

All requests outside of the above are counted as **non-matching**.

---

## REST

All **non-matching** requests over the **REST API** are rate limited per IP at a flat **10 TPS** with a **5x burst**.

If the limit is crossed, a **`429 Too Many Requests`** response is returned.


## 🔑 How to Connect

### Generate API Keys

- Click **Connect** at upper right side

    ![API](derive-api2.png)

- At top left, click **Hamburger** icon to open side bar, click **Developers**, click **Register Session Key**

    ![API](derive-api3.png)

- Enter **Name**, Click **Generate** button, click **Copy** icon of private key, Select **Admin** for Scope, Click **Register** button

    ![API](derive-api4.png)

!!! note "Important"
    Keep private key safe & secure. Create a new session key if it is lost or compromised.

- Click **Confirm** at Metamask pop-up form


### Add Keys to Condor in Web Dashboard

- Install Condor using [Condor Quickstart](https://hummingbot.org/installation/condor/)

- In Telegram Condor bot, type `/keys` at message field and press **Enter**, then click **Open Dashboard**

   ![image](14.png)

- Click **+ Add API Key**

   ![image](15.png)

- Click **Perpetual**

   ![image](16.png)

- Click **derive_perpetual**

   ![image](17.png)

- Input **Derive Wallet address**, **Session Key**, **Subaccount ID**, and **Account Type**.  
  Click **Add Credential**

   ![image](18.png)

!!! note "Account Type"
    Use one of the following values:

    | Value | Meaning | Typical use |
    | --- | --- | --- |
    | **SM** | Standard Margin | Spot and perpetual trading |
    | **PM2** | Portfolio Margin | Multiple options and perps |

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect derive`:

- Input a Derive Wallet address

    ![API](derive-api8.png)

- Input a Session Private Key

    ![API](12.png)

- Input your Subaccount ID
  
    ![API](derive-api10.png)

- Input **SM** or **PM2** for Account Type

!!! note "Account Type"
    Use one of the following values:

    | Value | Meaning | Typical use |
    | --- | --- | --- |
    | **SM** | Standard Margin | Spot and perpetual trading |
    | **PM2** | Portfolio Margin | Multiple options and perps |

```
>>> connect derive

Enter Your Derive Wallet address >>>

Enter your session private key >>>

Enter your Subaccount ID >>>

Enter your Derive Account Type (SM/PM2) >>>

```

If connection is successful:

```
You are now connected to derive
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `derive`
- **Connection Type**: WebSocket
- **API Docs**: <https://docs.derive.xyz>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/derive)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Paper Trading

Access the [Paper Trade](../../client/global-configs/paper-trade.md) version of this connector by running `connect derive_paper_trade` instead of `connect derive`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](../../client/global-configs/paper-trade.md#adding-exchanges) for more information.

## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `derive_perpetual`
- **Connection Type**: WebSocket
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/derive_perpetual)** 

### Usage

From inside the Hummingbot client, run `connect derive_perpetual`:

- In Developers at sidebar, click **Copy** icon of Wallet

    ![API](derive-api8.png)

- In Subaccounts at sidebar, click **Create Subaccount** button

!!! tip "Recommended"
    Create a **new subaccount** so balances are fetched and displayed correctly for both spot and perpetual.

- In Create Subaccount Form, enter **Name**, select **Standard Margin**, click **Enable Trading** button

    ![API](derive-api9.png)

- Copy the **ID** of the newly created Subaccount, & paste into Hummingbot client.
  
    ![API](derive-api10.png)
```
>>> connect derive_perpetual

Enter Your DerivePerpetual Wallet address >>>
Enter your Session private key >>>
Enter your Subaccount ID >>>
Enter your Derive Account Type (SM/PM2) >>>

```

If connection is successful:

```
You are now connected to derive_perpetual
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading (Derive Testnet)

This perp exchange offers a paper trading mode: <https://testnet.derive.xyz>

Afer you create an account and create the API keys, you can enter them by using the `connect derive_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts.

### Additional Information: Perp Connector

- Note: Only for perps. Leverage of the position, defined as abs(notional) / collateral net of options.
- **Derive Leverage:** <https://docs.derive.xyz/reference/private-get_positions#:~:text=leverage>

- Sample View
    ![API](derive-api11.png)
