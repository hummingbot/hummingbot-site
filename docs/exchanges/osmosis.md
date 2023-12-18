# osmosis.md

# 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (DEX)
- **Market Type**: Automatic Market Maker (AMM)
- **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Osmosis&message=BRONZE&color=green)
- **Maintainer:** [Pecunia.Finance](http://Pecunia.Finance)

Currently, Osmosis is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](notion://www.notion.so/governance/epochs). This means Hummingbot Foundation does not maintain the components below, but community members may submit [Proposals](/governance/proposals) to fund development bounties and approve pull requests to fix bugs and add enhancements to them.

The maintainers, Pecunia.Finance DAO, are also open to proposals and fund development bounties to maintain and improve the Osmosis Connector and/or Chain. 

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [2️⃣ AMM Connector](#2-amm-connector) | ✅ |
| [3️⃣ Range AMM Connector](#3-range-amm-connector) | ✅ |
| [🕯 AMM Data Feed](#amm-data-feed) | Not built |

## ℹ️ Exchange Info

- **Website**: [https://osmosis.zone/](https://osmosis.zone/)
- **CoinMarketCap**: [https://coinmarketcap.com/exchanges/osmosis/](https://coinmarketcap.com/exchanges/osmosis/)
- **CoinGecko**: [https://www.coingecko.com/en/exchanges/osmosis](https://www.coingecko.com/en/exchanges/osmosis)
- **Docs:** [https://docs.osmosis.zone/](https://docs.osmosis.zone/)
- **Fees**: [https://docs.osmosis.zone/overview/educate/osmo#transaction-fees](https://docs.osmosis.zone/overview/educate/osmo#transaction-fees)
- **Concentrated Liquidity (range-amm):** [https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity](https://docs.osmosis.zone/osmosis-core/modules/concentrated-liquidity)

## 🔑 How to Connect

Create an Osmosis wallet or use and existing Cosmos wallet on one of the supported networks below:

| Chain | Networks |
| --- | --- |
| osmosis | mainnet, testnet |

### 🌌 Cosmos & IBC Wallets

The Cosmos ecosystem is a collection of blockchains built using the [Cosmos SDK](https://v1.cosmos.network/sdk), which communicate with eachother over the Inter-Blockchain Communication protocol ([IBC](https://cosmos.network/ibc/)).

Similar to multichain wallets such as Metamask, Cosmos ecosystem wallets come with high interoperability built-in - though *specific networks may need to be manually added*.

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

**Note:** Also be aware the exported private key may have an `0x` at the start, which may need to be **removed** to fit the private key format check.
- Before: `0x1234567890000000000000000000000000000000000000000000000000000000`
- After: `1234567890000000000000000000000000000000000000000000000000000000`

### 🔌 Connect with Gateway

From inside the Hummingbot client, run `gateway connect osmosis` in order to connect your wallet:

```
Which chain do you want osmosis to connect to? (osmosis) >>>
Which network do you want osmosis to connect to? (mainnet, testnet) >>>
Enter your osmosis-mainnet private key >>>>

```

If connection is successful (osmosis-mainnet):

```
The osmosis connector now uses wallet [pubKey] on osmosis-mainnet

```

## 2️⃣ AMM Connector

*Integration to this DEX's swap pricing and execution endpoints*

- **ID**: `osmosis`
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

*Integration to this DEX's concentrated liquidity range provision endpoints*

- **ID**: `osmosiscl`
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

## 🕯 AMM Data Feed

*Data feed of this exchange's real-time prices*

- Not currently supported
- Contact [Pecunia.Finance](http://Pecunia.Finance) for collaboration