## 🛠 Connector Info

-   **Exchange Type**: Decentralized Exchange (DEX)
-   **Market Type**: Automatic Market Maker (AMM)

| Component                                        | Status    | Notes |
| ------------------------------------------------ | --------- | ----- |
| [2️⃣ AMM Connector](#2-amm-connector)             | ✅        |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | Not built |
| [🕯 AMM Data Feed](#amm-data-feed)                | ✅        |

## ℹ️ Exchange Info

-   **Website**: <https://spectrum.fi/>
-   **CoinMarketCap**: <https://coinmarketcap.com/exchanges/spectrum-finance/>
-   **CoinGecko**: <https://www.coingecko.com/en/exchanges/spectrum-finance>

## 🔑 How to Connect

add following environment variables to the hummingBot project before starting:

```
COINGECKO_URL=https://pro-api.coingecko.com/api/v3

COINGECKO_API_KEY=YOUR_API_KEY
```

Create a wallet on one of the supported networks below:

| Chain  | Networks  |
| ------ | --------- |
| `ergo` | `mainnet` |
| `ergo` | `testnet` |

From inside the Hummingbot client, run `gateway connect spectrum` in order to connect your wallet:

```
Which chain do you want spectrum to connect to? (ergo) >>>
Which network do you want spectrum to connect to? (mainnet) >>>
Do you want to continue to use node url 'http://213.239.193.208:9053/' for ergo-mainnet? (Yes/No) >>>
Enter your ergo-mainnet private key >>>
```

If connection is successful:

```
The spectrum connector now uses wallet [pubKey] on ergo-mainnet
```

## 2️⃣ AMM Connector

_Integration to this DEX's swap pricing and execution endpoints_

-   **ID**: `spectrum`
-   **Connection Type**: REST via [Gateway](/gateway)
-   **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/spectrum>
-   **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/spectrum.yml>

### Endpoints

-   `/amm/price`
-   `/amm/trade`
-   `/amm/estimateGas`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed

_Data feed of this exchange's real-time prices_

-   **ID**: `spectrum_[CHAIN]_[NETWORK]`
-   **Connection Type**: REST via [Gateway](/gateway)
-   **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="spectrum_ergo_mainnet",
        trading_pairs={"ERG-USDT", "ERG-SigUSD"},
        order_amount_in_base=Decimal("1"),
    )
```
