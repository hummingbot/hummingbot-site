## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)


| Component                                        | Status    | Notes |
| ------------------------------------------------ | --------- | ----- |
| [2️⃣ AMM Connector](#2-amm-connector)             | ✅        |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | ✅        |
| [🕯 AMM Data Feed](#amm-data-feed)                | Not built |
| [📓 Connector Guide](/academy-content/using-osmosis-with-hummingbot/) | ✅ |

!!! note "There is a single connector for both AMM types."
The Osmosis connector determines which routes to take based on the input strategy. In either case, the name of the connector is `osmosis_osmosis_mainnet`.

## ℹ️ Exchange Info

- **Website**: [https://osmosis.zone/](https://osmosis.zone/)
- **CoinMarketCap**: [https://coinmarketcap.com/exchanges/osmosis/](https://coinmarketcap.com/exchanges/osmosis/)
- **CoinGecko**: [https://www.coingecko.com/en/exchanges/osmosis](https://www.coingecko.com/en/exchanges/osmosis)
- **Docs:** [https://docs.osmosis.zone/](https://docs.osmosis.zone/)
- **Fees**: [https://docs.osmosis.zone/overview/educate/osmo#transaction-fees](https://docs.osmosis.zone/overview/educate/osmo#transaction-fees)
- **Concentrated Liquidity (range-amm):** [https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity](https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity)

## 🔑 How to Connect

!!! tip
    See the [Osmosis Connector Guide](/academy-content/using-osmosis-with-hummingbot/) for step-by-step instructions.

Create an Osmosis wallet or use and existing Cosmos wallet on one of the supported networks below:

| Chain   | Networks         |
| ------- | ---------------- |
| osmosis | mainnet, testnet |

### 🌌 Cosmos & IBC Wallets

The Cosmos ecosystem is a collection of blockchains built using the [Cosmos SDK](https://v1.cosmos.network/sdk), which communicate with eachother over the Inter-Blockchain Communication protocol ([IBC](https://cosmos.network/ibc/)).

Similar to multichain wallets such as Metamask, Cosmos ecosystem wallets come with high interoperability built-in - though _specific networks may need to be manually added_.

The following are Osmosis-compatible browser-wallets:

- [Keplr](https://www.keplr.app/) | Tested ✔
- [Leap](https://www.leapwallet.io/) | Tested ✔ | Preferred 👍
- [Trust](https://trustwallet.com/) | Untested 🤷‍♂️
- [MetaMask](https://metamask.io/) | Untested 🤷‍♂️
- [Others](https://www.coincarp.com/currencies/osmosis/wallets/) | Untested 🤷‍♂️

### 🔐 Get Private Key from Keplr

Keplr is the most popular Cosmos-based wallet. When creating a Keplr wallet, **only users who link a Google Account are able to export their private key directly from Keplr**.

To get around this, you can:

1. Export your Keplr seed phrase.
2. Restore the wallet using the seed phrase, in a different Cosmos-based wallet (such as Leap wallet) which allows exporting the private key.
3. Export the private key from the newly restored wallet.

!!! note "💡 An Osmosis Private Key has 64 characters"
    Be aware an exported private key may have an `0x` at the start, which may need to be **removed** to fit the private key format check. 
    
    - Before: `0x1234567890...` 
    
    - After: `1234567890...`

### 🔌 Connect with Gateway

From inside the Hummingbot client, run `gateway connect osmosis` in order to connect your wallet:

```
Which chain do you want osmosis to connect to? (osmosis) >>> osmosis
Which network do you want osmosis to connect to? (mainnet, testnet) >>> mainnet
Do you want to continue to use node url 'https://rpc.osmosis.zone/' for osmosis-mainnet? (Yes/No) [default: Yes]
Enter your osmosis-mainnet private key >>>> ****************************************************************
```

If connection is successful (osmosis-mainnet):

```
The osmosis connector now uses wallet [Wallet Public Adress] on osmosis-mainnet
```

## 2️⃣ AMM Connector

_Integration to this DEX's swap pricing and execution endpoints_

- **ID**: `osmosis_osmosis_mainnet`
- **Connection Type**: REST via [Gateway](notion://www.notion.so/gateway)
- **API Docs**: [https://docs.osmosis.zone/osmosis-core/guides/structure#retrieving-a-block](https://docs.osmosis.zone/osmosis-core/guides/structure#retrieving-a-block)
- **Folder**: [https://github.com/hummingbot/gateway/tree/main/src/connectors/osmosis](https://github.com/hummingbot/gateway/tree/main/src/connectors/uniswap)
- **Default Configs**: [https://github.com/hummingbot/gateway/blob/main/src/templates/osmosis.yml](https://github.com/hummingbot/gateway/blob/main/src/templates/osmosis.yml)

### Endpoints

- `/amm/price`
- `/amm/trade`
- `/amm/estimateGas`

For more info, run Gateway and go to https://localhost:8080 in your browser to see detailed documentation for each endpoint.

## 3️⃣ Range AMM Connector

_Integration to this DEX's concentrated liquidity range provision endpoints_

- **ID**: `osmosis_osmosis_mainnet`
- **Connection Type**: REST via [Gateway](notion://www.notion.so/gateway)
- **API Docs**: [https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity](https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity)
- **Folder**: [https://github.com/hummingbot/gateway/tree/main/src/connectors/osmosis](https://github.com/hummingbot/gateway/tree/main/src/connectors/osmosis)
- **Default Configs**: [https://github.com/hummingbot/gateway/blob/main/src/templates/osmosis.yml](https://github.com/hummingbot/gateway/blob/main/src/templates/osmosis.yml)

### Endpoints

- `/amm/liquidity/price`
- `/amm/liquidity/add`
- `/amm/liquidity/remove`
- `/amm/liquidity/position`
- `/amm/liquidity/collect_fees`

For more info, run Gateway and go to [https://localhost:8080](https://localhost:8080/) in your browser to see detailed documentation for each endpoint.

### Interfaces

_Cosmos-specific additions to amm.requests_

Multiple interfaces within `gateway/src/amm/amm.requests.ts` include additions in the response models and re-use of tokenId > poolId so that when data comes in, the gateway will assume the optional variables relevant for the connector in use; e.g. The interfaces work with both Cosmos and non-Cosmos responses and handle the data accordingly.

### 🧪 Create CLMM Strategy

From inside the Hummingbot client, run `create` and then select `amm_v3_lp` in order to create a custom CLMM strategy.

To select Osmosis DEX, enter `osmosis_osmosis_mainnet` as the name of the LP connector.

!!! warning "💡 Only LOW/MEDIUM/HIGH fee tiers available"
    Inputting 'LOWEST' as the fee tier may result in an error.

```
Enter name of LP connector >>> osmosis_osmosis_mainnet
Enter the trading pair you would like to provide liquidity on (e.g. WETH-USDC) >>> [Your desired pool pair; e.g. OSMO-USDC]
On which fee tier do you want to provide liquidity on? (LOWEST/LOW/MEDIUM/HIGH) >>> [LOW/MEDIUM/HIGH]
How wide around current pool price and/or last created positions do you want new positions to span? (Enter 1 to indicate 1%) >>> [DYOR]
Enter the maximum value (in terms of base asset) to use for providing liquidity. >>> [DYOR]
Enter a new file name for your configuration >>> [default is 'conf_amm_v3_lp_[#].yml' or 'input custom_name.yml']
```

## 🕯 AMM Data Feed

_Data feed of this exchange's real-time prices_

- Not currently supported
- Contact [Pecunia.Finance](https://pecuniafinance.com) for collaboration
