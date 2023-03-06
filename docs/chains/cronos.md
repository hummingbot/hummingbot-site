This page contains notes about connecting Gateway to the Cronos Chain.

## Cronos Chain

📁 [Chain folder](https://github.com/hummingbot/gateway/tree/main/src/chains/cronos)

📁 [Config template](https://github.com/hummingbot/gateway/tree/main/src/templates/cronos.yml)

Below are the Cronos Chain networks that Gateway currently supports.

### `mainnet` (cronos mainnet)

**Default configuration parameters**

* `chainID`: 25
* `nodeURL`: <https://evm.cronos.org/>
* `tokenListType`: FILE
* `tokenListSource`: src/chains/cronos/mainnet_beta.json
* `nativeCurrencySymbol`: CRO
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config cronos.networks.mainnet.<parameter>
```

### `testnet` (cronos testnet)

**Default configuration parameters**

* `chainID`: 338
* `nodeURL`: <https://evm-t3.cronos.org/>
* `tokenListType`: FILE
* `tokenListSource`: src/chains/cronos/testnet.json
* `nativeCurrencySymbol`: CRO
* `gasPriceRefreshInterval`: 60

You can adjust these parameters by running the Hummingbot command:

```
gateway config cronos.networks.testnet.<parameter>
```
