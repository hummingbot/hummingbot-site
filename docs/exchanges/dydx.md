!!! tip "Foundation Sponsor"
    dYdX is a [sponsor](/about/sponsors) of Hummingbot Foundation, so when you use Hummingbot to run bots on dYdX, you're supporting the Foundation and our mission to democratize algo trading with open source software.

## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://dydx.trade>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/dydx-v4/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/dydx-chain>
- **API Docs**: <https://docs.dydx.exchange/api_integration-repositories>
- **Fees**: <https://docs.dydx.exchange/introduction-trading_fees>
- **Supported Countries**: <https://dydx.trade/terms> 


## ⚙️ Install Instructions

At the moment there are some issues with dependencies and installing dydx can be a bit trickier due to some software conflicts. We've created these simple instructions to get you up and running quickly using either Docker or Source. 

### Docker

Open your `docker-compose.yml` file. This file is usually located in your Hummingbot project directory.

Update the `image` line. Find the line that starts with `image:` under the `hummingbot` service. Change it to the following, depending on whether you are trying to run the `latest` or `development` branch. 

For latest stable version:

```bash
image: hummingbot/hummingbot:latest_dydx
```

For development version:

```bash
image: hummingbot/hummingbot:development_dydx
```


### Source

After cloning the Hummingbot repo, use the `--dydx ` flag when running the `install` command

```bash
./install --dydx
```

See below for the full commands: 

```bash
git clone https://github.com/hummingbot/hummingbot.git
cd hummingbot
./install --dydx
conda activate hummingbot
./compile
```


## 🔑 How to Connect to dYdX (v4)

### Generate API Keys

1. **Connect Your Wallet**: 
   - Open the dYdX exchange platform and connect your wallet (e.g., MetaMask or another supported wallet). This will allow you to interact with the exchange and manage your funds.

2. **Deposit USDC**: 
   - Once your wallet is connected, deposit USDC into your dYdX account. USDC is required for trading on the platform.

3. **Access Your Wallet Connection**:
   - In the top right corner of the dYdX interface, locate and click on your wallet icon or address. This will open the wallet connection settings.

4. **Copy Your dYdX Chain Address**: 
   - At the top of the wallet connection settings window, you’ll find your **dYdX Chain Address**. Copy this address and keep it secure for future reference.

5. **Export Your Secret Phrase**: 
   - Scroll down within the wallet connection settings to find the option that says **Export your secret phrase**. Click on it to reveal and securely save your **dYdX v4 Secret Phrase**. This phrase is essential for account recovery and authentication.


### Add Keys to Hummingbot

You will need the following to connect Hummingbot to `dydx_v4_perpetual`:

* dYdX v4 secret_passphrase (24 words)
* dYdX v4 chain address (starts with dydx)

From inside the Hummingbot client, run `connect dydx_v4_perpetual` in Hummingbot in order to connect your wallet:

```
Enter your dydx v4 secret_phrase(24 words) >>>
Enter your dydx_v4 chain address (starts with dydx)>>>
```



## 🔀 Perp Connector
*Integration to perpetual futures markets API endpoints*

- **ID**: `dydx_v4_perpetual`
- **Connection Type**: WebSocket
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/dydx_v4_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way

### Paper Trading

This exchange offers a staging (testnet) mode: <https://v4.testnet.dydx.exchange/>

While users can trade on testnet using the link above, it is not currently supported in Hummingbot.