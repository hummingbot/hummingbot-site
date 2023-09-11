## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)
- **Maintainer:** Hummingbot Foundation

Currently, Dexalot is a **Silver** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means that Hummingbot Foundation maintains the components below via [Bounties](/governance/bounties), tracking improvements made to the Gold exchange connectors of that type.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ |
| [🔀 Perp Connector](#perp-connector) | Not available
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ |

## ℹ️ Exchange Info

- **Website**: <https://dexalot.com>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/dexalot/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/dexalot>
- **API Docs**: <https://docs.dexalot.com/>
- **Fees**: 

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `avalanche` | `dexalot`

From inside the Hummingbot client, run `gateway connect dexalot` in order to connect your wallet:

```
Which chain do you want dexalot to connect to? (avalanche) >>>
Which network do you want dexalot to connect to? (dexalot)
Enter your dexalot-avalanche-dexalot wallet private key >>>

Enter your Dexalot API Key (you can request one from the Dexalot team) >>> 
```

If connection is successful:

```
The dexalot connector now uses wallet [pubKey] on avalanche-dexalot
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `dexalot`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.dexalot-test.com/api>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/dexalot>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/dexalot.yml>

### Endpoints

- `/clob/orders`
- `/clob/batchOrders`
- `/chain/balances`
- `/chain/poll`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `dexalot_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="dexalot_avalanche_dexalot",
        trading_pairs={"WAVAX-USDC", "ALOT-USDC"},
        order_amount_in_base=Decimal("1"),
    )
```