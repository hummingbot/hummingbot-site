## 📁 Connector Info

* **Exchange Type**: Decentralized Exchange (**DEX**)
* **Market Type**: Central Limit Order Book (**CLOB**)
* **Maintenance Tier**: ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green)
* Maintainer: Hummingbot Foundation

Currently, Vega is a **Bronze** exchange, as voted by HBOT holders in each quarterly [Epoch](/governance/epochs).

| Component | Status | Notes | 
| --------- | ------ | ----- |
| [🔀 Spot Connector](#spot-connector) | Not available |
| [🔀 Perp Connector](#perp-connector) | ✅ | Supports testnet
| [🕯 Spot Candles Feed](#spot-candles-feed) | Not available | 
| [🕯 Perp Candles Feed](#perp-candles-feed) | Not available | 


## ℹ️ Exchange Info

* **Website**: <https://vega.xyz>
* **DefiLLama**: <https://defillama.com/protocol/vega-protocol>
* **API Docs**: <https://docs.vega.xyz/testnet/api/overview>
* **Fees**: <https://docs.vega.xyz/testnet/concepts/trading-on-vega/fees-rewards>

## 🔑 How to Connect

### Generate your public key in Vega Wallet
You can download the browser extension wallet (for use in the UI) by visiting https://vega.xyz/wallet/#overview. You can also get to the wallet by clicking connect on through the dAPP interface. Which will offer a pop up which has an option which will take you to download and install the Vega Wallet extension.

From there you will set up the wallet, you’ll need your seed phrase generated here for use within the connector.

Once the wallet is set up you’ll have a public key which you will also need for the connector.

### Generate your public key in Metamask Snap
Note: The derivation for snap key is based completely off the seed phrase of the metamask wallet. If you intend to set up a shared account (for testing with multiple parties) the seed phrase is critically important.

**Recommended**: Setup a brand new browser profile, install a fresh version of Metamask and use that seed phrase for testing, as you will need to provide the seed phrase to the system (mnemonic is currently the ONLY supported way).

Once on the site you can connect and it will provide a pop up with options to connect with Vega Wallet or Metamask Snap, choose snap. This will carry you through messages asking you to approve the installation of the Snap.

Once installed and connected to the site, you will see your SNAP KEY in the top right with the option, when clicked, to copy the address, this is your Vega Party ID which will be used within the system when configuring Hummingbot.


Create a wallet on one of the supported networks below:

| Chain | Networks | 
| ----- | -------- |
| `ethereum` | `mainnet`, `sepolia`
| `cosmos` | `vega_alpha_mainnet`, `vega_fairground`


From inside the Hummingbot client, run gateway connect vega_perpetual in order to connect your wallet:

```
Enter your Vega public key (party id), NOTE: This is not your ETH public key! >>>
Enter the seed phrase used with your Vega Wallet / Metamask Snap >>>
```

If connection is successful:

```
You are now connected to vega_perpetual.
```

### 🔀 Perp Connector

Integration to perpetual markets API endpoints

* **ID**: vega_perpetual
* **Connection Type**: WebSocket, REST, gRPC
* **Folder**: https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/vega_perpetual
* **Default Configs**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/derivative/vega_perpetual/vega_perpetual_constants.py

### Order Types
This connector supports the following OrderType constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### 🛠 Testnet

This connector supports testnet trading. To connect to the testnet exchange, run `connect vega_perpetual_testnet` and enter your API keys.