## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
- **Maintainer:** 

Currently, Perpetual Protocol is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅
| [🕯 AMM Data Feed](#amm-data-feed) | ✅ | 

## ℹ️ Exchange Info

- **Website**: <https://perp.com/>
- **CoinMarketCap**: <https://coinmarketcap.com/exchanges/perpetual-protocol/>
- **CoinGecko**: <https://www.coingecko.com/en/exchanges/perpetual_protocol>
- **API Docs**: <https://perp.com/developers>
- **Fees**: 

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `optimism`

From inside the Hummingbot client, run `gateway connect perpetual_protocol` in order to connect your wallet:

```
Which chain do you want perp to connect to? (ethereum) >>>
Which network do you want perp to connect to? (optimism) >>>
Enter your ethereum-optimism private key >>>>
```

If connection is successful:
```
The perp connector now uses wallet [pubKey] on ethereum-optimism
```


## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `perpetualprotocol`
- **Connection Type**: REST via [Gateway](/gateway)
- **API Docs**: <https://docs.perpetualprotocol-test.com/api>
- **Folder**: <https://github.com/hummingbot/gateway/tree/main/src/connectors/perp>
- **Default Configs**: <https://github.com/hummingbot/gateway/blob/main/src/templates/perp.yml>

### Endpoints

- `/amm/perp/market-prices`
- `/amm/perp/market-status`
- `/amm/perp/pairs`
- `/amm/perp/position`
- `/amm/perp/balance`
- `/amm/perp/open`
- `/amm/perp/close`

For more info, run Gateway and go to <https:localhost:8080> in your browser to see detailed documentation for each endpoint.

## 🕯 AMM Data Feed
*Data feed of this exchange's real-time prices*

- **ID**: `perpetualprotocol_[CHAIN]_[NETWORK]`
- **Connection Type**: REST via [Gateway](/gateway)
- **Folder**: <https://github.com/hummingbot/hummingbot/blob/master/hummingbot/data_feed/amm_gateway_data_feed.py>

### Usage

```python
from hummingbot.data_feed.amm_gateway_data_feed import AmmGatewayDataFeed
prices = AmmGatewayDataFeed(
        connector_chain_network="perp_ethereum_optimism",
        trading_pairs={"WAVAX-USDC", "PERP-USDC"},
        order_amount_in_base=Decimal("1"),
    )
```