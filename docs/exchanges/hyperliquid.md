!!! tip "Foundation Sponsor"
    Hyperliquid is a [sponsor](../about/sponsors.md) of Hummingbot Foundation, so when you use Hummingbot to run bots on Hyperliquid, you're supporting the Foundation and our mission to democratize algo trading with open source software.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | ✅ | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | ✅ | 
| [📓 Connector Guide](../blog/posts/using-hyperliquid-vaults-with-hummingbot/index.md) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://app.hyperliquid.xyz/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/hyperliquid/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/hyperliquid>
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **Fees**: <https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees>
- **Supported Countries**: Not available

## 🔑 How to Connect

!!! tip
    See the [Hyperliquid Vault Guide](../blog/posts/using-hyperliquid-vaults-with-hummingbot/index.md) for more details on how to use Hyperliquid VauLts.


### New: Hyperliquid API Key Support

Hummingbot now supports **API key authentication** for both the `hyperliquid` (spot) and `hyperliquid_perpetual` (perp) connectors, in addition to the existing **Arbitrum wallet + private key** mode. 

This lets you trade and manage positions using API key / secret credentials generated from the Hyperliquid web interface. 

You can choose whichever auth method best fits your setup and security preferences when configuring the connector in Hummingbot.

### How to Create Hyperliquid API Keys

Follow these steps to create API keys on Hyperliquid:

1. **Open the Hyperliquid API page**

    - Log in to your Hyperliquid account.

    - In the top menu, go to **More → API**, or open: <https://app.hyperliquid.xyz/API>. 

2. **Create an API wallet**

    - Enter a **name** for your API wallet (e.g. `hummingbot`).

    - Paste your **main account wallet address** (the wallet you connected to Hyperliquid). 

    - Click **Generate** to create the API wallet, then click **Authorize API Wallet** when prompted. 

3. **Configure API settings and save the private key**

    - In **Days Valid**, choose your desired validity (many guides recommend **MAX** / 180 days, if available). 

    - Copy the **Private Key** shown on the screen and store it in a secure password manager. This key functions as your **API secret** for bots.

    - Click **Authorize** and sign the transaction in your wallet to finalize the API wallet. Note: you may need to have funds deposited before authorization succeeds. 

4. **Get your account wallet address**

    - In the top-right corner of the Hyperliquid app, click your **email / wallet address** next to the Deposit button.

    - Copy your **Account Wallet Address** from this menu. This is your main / master account address, which bots often need alongside the API key.  

    - In most bot integrations, you only need the **Account Wallet Address**, not the separate **API Wallet Address**. 

5. **Store your credentials safely**

    - Keep the following in a secure place:

        - **Account Wallet Address** (main account / master account)

        - **API public key / wallet address** (if shown)

        - **API private key / secret**

    - Never share your **private key / secret** with anyone, and do not paste it into untrusted tools. 

Once you have these values, you can supply them to Hummingbot when using API key authentication for the Hyperliquid connectors.    

### Add Keys to Hummingbot

From inside the Hummingbot client, run `connect hyperliquid` in Hummingbot in order to connect your wallet:

```
Enter your Arbitrum wallet address >>>
Enter your Arbitrum wallet private key >>>
```

If connection is successful:

```
You are now connected to hyperliquid.
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `hyperliquid`
- **Connection Type**: WebSocket
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/hyperliquid)** 

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`



## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `hyperliquid_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/hyperliquid_perpetual>


### Usage

From inside the Hummingbot client, run `connect hyperliquid_perpetual`:

```
>>> connect hyperliquid_perpetual

```

```
Enter your Arbitrum wallet address >>>
Enter your Arbitrum wallet private key >>>
```

If connection is successful:

```
You are now connected to hyperliquid_perpetual
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This perp exchange offers a paper trading mode: <https://app.hyperliquid-testnet.xyz/trade>

Afer you create an account and create the API keys, you can enter them by using the `connect hyperliquid_perpetual_testnet` command within the Hummingbot client. Once connected, you should be able to use the testnet with the available perpetual strategies / scripts. 

### HIP-3 Markets (Builder-Deployed Perpetuals)

Hyperliquid Improvement Proposal 3 (HIP-3) enables permissionless creation of perpetual futures markets by builders. These markets expand the available trading pairs beyond the core validator-operated perpetuals. When trading HIP-3 markets with Hummingbot:

**Key Considerations:**

- **Margin Mode**: HIP-3 markets require **isolated margin only** (no cross margin). Each position's margin is separate.
- **Asset ID**: HIP-3 assets use different asset IDs than standard perpetuals. Configure your trading pairs according to the HIP-3 asset naming conventions.
- **Trading API**: The trading API for HIP-3 perpetuals is unified with other HyperCore actions, so existing Hummingbot configurations work the same way.

**Fees:**

- Standard HIP-3 fees are approximately **2x the fees** of validator-operated perpetuals
- **Growth mode discounts** can reduce taker fees by over 90% (from 0.045% to as low as 0.0045%)
- Fee tiers apply across all assets (including HIP-3) based on your rolling 14-day volume

**Trading Tips:**

- HIP-3 markets may have lower liquidity compared to core perpetuals - consider adjusting spread and order size parameters accordingly
- Monitor funding rates and liquidation parameters, as these are set by individual market deployers
- Verify the trading pair is correctly configured using the Hyperliquid API before running strategies

For more details, see the [Hyperliquid HIP-3 documentation](https://hyperliquid.gitbook.io/hyperliquid-docs). 

## 🕯 Spot Candles Feed
*OHLCV candles data collector from spot markets*

- **ID**: `hyperliquid`
- **Supported Intervals**: 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 1w | 1M
- **API Docs**: <https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api>
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/hyperliquid_spot_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="hyperliquid",
                                        trading_pair="ETH-USDC",
                                        interval="1m", max_records=50)
```


## 🕯 Perp Candles Feed
*OHLCV candles data collector from perpetual futures markets*

- **ID**: `hyperliquid_perpetual`
- **Supported Intervals**: 1m | 3m | 5m | 15m | 30m | 1h | 2h | 4h | 6h | 8h | 12h | 1d | 1w | 1M
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/hyperliquid_perpetual_candles)** 

### Usage

In a Hummingbot script, import `CandlesFactory` to create the candles that you want:
```python
    from hummingbot.data_feed.candles_feed.candles_factory import CandlesFactory
    candles = CandlesFactory.get_candle(connector="hyperliquid_perpetual",
                                        trading_pair=trading_pair,
                                        interval="3m", max_records=50)
```


