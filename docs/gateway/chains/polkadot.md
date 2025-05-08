!!! note
This chain has been upgraded to the **Gateway New (v2.5+)** architecture and is available in the current `development` branch. For installation instructions, refer to the [Installation & Setup](../installation.md) page.

## 📁 Connector Info

* Folder: [/gateway/src/chains/polkadot](https://github.com/hummingbot/gateway/tree/development/chains/polkadot)
* Configs: [/gateway/src/templates/polkadot.yml](https://github.com/hummingbot/gateway/tree/src/templates/polkadot.yml)
* Config Schema: [/gateway/src/services/schema/polkadot-schema.json](https://github.com/hummingbot/gateway/blob/development/src/services/schema/polkadot-schema.json)

## ℹ️ Chain Info

* Website: <https://polkadot.com/>
* Block Explorer: <https://polkadot.subscan.io/> (Hydration)<https://hydration.subscan.io/>
* CoinMarketCap: <https://coinmarketcap.com/currencies/polkadot/>
* CoinGecko: <https://www.coingecko.com/en/coins/polkadot>

## 🕸️ Supported Networks

| Network | Type |
|---------|---------|
| `mainnet` | mainnet |

Upon Gateway setup, a default `polkadot.yml` configuration file matching the schema is created in your `conf` folder based on the [template](https://github.com/hummingbot/gateway/tree/development/src/templates/polkadot.yml) below:

```yaml
networks:
  mainnet:
    nodeURL: 'wss://rpc.hydradx.cloud'
    transactionURL: 'https://hydration.api.subscan.io/api/scan/extrinsic'
    tokenListType: 'FILE'
    tokenListSource: 'src/templates/lists/hydration.json'
    nativeCurrencySymbol: 'HDX'
    feePaymentCurrencySymbol: 'HDX'
```

### Networks

The Polkadot integration supports network, configuration for Node RPC endpoint, an URL to fetch transactions, 
token list source and format, and native and fee payment currency symbols.

- `nodeURL`: The RPC endpoint for the Polkadot mainnet (or when a Hydration RPC endpoint when using this parachain)
- `transactionURL`: Subscan API URL for querying transactions (or a Hydration parachain subscan when using it)
- `tokenListType`: How token information is sourced (FILE or URL)
- `tokenListSource`: Location of the token list file or URL
- `nativeCurrencySymbol`: The native currency symbol (DOT, or HDX when using Hydration)
- `feePaymentCurrencySymbol`: Symbol of the currency used to pay transaction fees (e.g. DOT, or HDX when using Hydration)


!!! warning "RPC Rate Limits"
By default we are providing a Hydration RPC endpoint (`wss://rpc.hydradx.cloud`), if you suffer rate limitations, contact the [Hydration](https://hydration.net/) team.
Or try alternatives like using a dedicated RPC provider such as [PublicNode](https://polkadot-rpc.publicnode.com/), [QuickNode](https://www.quicknode.com/chains/dot) for production use to ensure more reliable transaction processing and higher throughput. 

### Token Lists

Token lists provide essential mapping between token symbols and their on-chain address and decimals.

You can customize the default token list for each network by editing the specified file located in [`conf/lists/`](https://github.com/hummingbot/gateway/tree/development/src/templates/lists).
