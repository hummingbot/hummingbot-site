## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | ✅ | Supports testnet
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 

## ℹ️ Exchange Info

- **Website**: <https://helixapp.com>
- **CoinMarketCap**: <https://coinmarketcap.com/currencies/injective>
- **CoinGecko**: <https://www.coingecko.com/en/coins/injective>
- **API Docs**: <https://api.injective.exchange>
- **Fees**: <https://docs.injective.network/learn/basic-concepts/gas_and_fees/>
- **Supported Countries**: 

## 🔑 How to Connect

Create a wallet on one of the supported networks below:

| Chain       | Networks                       |
| ----------- |--------------------------------|
| `injective` | `mainnet`, `testnet`, `custom` |

The connector supports two different account modes:
- Trading with delegate accounts
- Trading through off-chain vault contracts

There is a third account type called `read_only_account`. This mode only allows to request public information from the nodes, but since it does not require credentials it does not allow to perform trading operations.

### Delegate account mode
When configuring the connector with this mode, the account used to send the transactions to the chain for trading is not the account holding the funds.
The user will need to have one portfolio account and at least one trading account. And permissions should be granted with the portfolio account to the trading account for it to operate using the portfolio account's funds.

#### Trading permissions grant
To grant permissions from a portfolio account to a trading account to operate using the portfolio account funds please refer to the script [account_delegation_script.py](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/injective_v2/account_delegation_script.py)

#### Mode parameters
When configuring a new instance of the connector in Hummingbot the following parameters are required:

- **private_key**: the private key of the trading account (grantee account)
- **subaccount_index**: the index (decimal number) of the subaccount from the trading account that the connector will be operating with
- **granter_address**: the public key (injective format address) of the portfolio account
- **granter_subaccount_index**: the index (decimal number) of the subaccount from the portfolio account (the subaccount holding the funds)


### Off-chain vault mode
When configuring the connector with this mode, all the operations are sent to be executed by a vault contract in the chain.
The user will need to have a vault contract deployed on chain, and use the vault's admin account to configure this mode's parameters.
To know more about vaults please read the official [Mito managed vaults documentation](https://docs.mito.fi/vaults/managed-vaults)

#### Mode parameters
When configuring a new instance of the connector in Hummingbot the following parameters are required:

- **private_key**: the vault's admin account private key
- **subaccount_index**: the index (decimal number) of the subaccount from the vault's admin account
- **vault_contract_address**: the address in the chain for the vault contract

### Gas Fee Calculator Mode
Injective connectors support two different modes to calculate the gas fee when broadcasting transactions:

- Gas calculation using transaction simulation (default option)
- Gas estimation based on the transaction messages (without simulation)

The gas estimation without simulation is more efficient because it does not require requesting the node to run the simulation (an action that could take around 200 milliseconds when using public nodes). But the gas estimation is not as accurate as the gas cost determined by the simulation. Using the gas estimation mode could result in spending a little bit more INJ on gas fee compared to the gas amount spent when using the fee calculator using simulation. 

The gas estimation with transaction simulation uses a multiplier to estimate the gas fee. The default multiplier is 1.3, but users can change this value with the global variable `GAS_LIMIT_ADJUSTMENT_MULTIPLIER` in the constants module (hummingbot/connector/exchange/injective_v2/injective_constants.py).

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `injective_v2`
- **Connection Type**: gRPC
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/injective_v2>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

## 🔀 Perp Connector
*Integration to derivative markets API endpoints*

- **ID**: `injective_v2_perpetual`
- **Connection Type**: gRPC
- **Folder**: <https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/injective_v2_perpetual>

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
