## Bounty Types

Bounties can be classified into one of the following types:

* 🐞 **Bug Fix**: Fix to a bug in the Hummingbot codebase
* 🔗 **Connector**: A new exchange [connector](/exchanges/) that meets the current Hummingbot standard. Decentralized exchanges (DEX) are generally more complex and require more time to develop than centralized exchanges (CEX)
* 📈 **Custom Strategy**: A new Hummingbot strategy - either a [Script](/scripts/) or [Controller](/v2-strategies/controllers)
* 📊 **Candles Feed**: A new [candles feed](/v2-strategies/candles/) that fetches historical OHLCV data from an exchange
* 📀 **Data Feed**: A new [data feed](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed) that fetches real-time market data from an exchange
* 📝 **Connector Guide**: Documentation that explains how to get started with a new Hummingbot connector and running a strategy on it
* 🔼 **Upgrade Connector**: Update to an existing connector in the Hummingbot codebase (due to API changes, Hummingbot standard updates, etc.)

In addition, bounties may be:

* **Open Source**: merged into the official Hummingbot codebase, or 
* **Closed Source**: delivered as a private fork to the Sponsor

## Pricing Guidance

Below, we provide a suggested bounty amount for each task type. Note that these amounts are suggestions only, and are subject to change based on task complexity.

| Task                                | Price (USDT/USDC)| Price (Pay in HBOT) |
|-------------------------------------|------------------|---------------------|
| Bug Fix                             | $125-625         | $110-550            |
| Candles Feed                        | $625             | $550                |
| Data Feed                           | $750             | $660                |
| Custom Strategy (Script/Controller) | from $625        | from $550           |
| Connector - CEX CLOB Spot           | $3,750           | $3,300              |
| Connector - CEX CLOB Perp           | $5,000           | $4,400              |
| Connector - DEX CLOB Spot           | $5,000           | $4,400              |
| Connector - DEX CLOB Perp           | $6,250           | $5,500              |
| Connector - DEX AMM (EVM)           | $3,750           | $3,300              |
| Connector - DEX AMM (non-EVM)       | $5,000           | $4,400              |
| Connector Guide                     | $625             | $550                |
| Upgrade Connector                   | $1,250           | $1,100              |

## Processing Fee

Hummingbot Foundation charges Sponsors a fee for overseeing the entire lifecycle of a bounty: scoping the bounty, finding and assigning the bounty to a qualified contributor, performing engineering/QA review, and conducting payments. This saves you a lot of time and effort.

The standard processing fee is **20%**. If a sponsor submits a 1000 USDT total bounty, the fee is 200 USDT and the developer receives 800 USDT.

If the bounty is denominated in the [HBOT](https://etherscan.io/token/0xe5097d9baeafb89f9bcb78c9290d545db5f9e9cb) token, the fee is **10%**. If a sponsor submits a 100,000 HBOT total bounty, the fee is 10,000 HBOT and the developer receives 90,000 HBOT.

## Payment Denominations

### Foundation Bounties
Foundation bounties are priced in USD but paid in HBOT tokens. The conversion rate is based on the 30-day average trading price of HBOT at the time of payment. This approach ensures that contributors receive fair compensation regardless of short-term price fluctuations in the token.

!!! note "Balancing HBOT"
    To ensure that HBOT retains economic value, the Foundation strives to balance emissions from HBOT bounty distributions with periodic buybacks. Users can track both token distributions and purchases in the [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) spreadsheet under the "HBOT Distributions" and "HBOT Purchases" tabs.

### External Bounties
External bounties are paid in the denomination (cryptocurrency) specified by the sponsor. The sponsor must place the full bounty amount in escrow with the Foundation before the bounty is posted. When the work is completed and approved, the Foundation distributes the payment to the contributor, minus a processing fee.

- Standard processing fee: 20% for payments in USDT/USDC and other cryptocurrencies
- Reduced processing fee: 10% for payments made in HBOT tokens

For detailed information about processing fees and payment wallets, please refer to the [Pricing Guidance](./pricing.md) page.

## Bounty Wallets

In order to fund the bounty, sponsors should send the total bounty amount to a designated Foundation wallet:

* Ethereum Mainnet: [0x60D581aEa0644e74df60c7555e5166d32665d6b6](https://etherscan.io/address/0x60D581aEa0644e74df60c7555e5166d32665d6b6)
* Binance Smart Chain: [0xE517b826a26B439eCE92f3220628eC007049d915](https://bscscan.com/address/0xE517b826a26B439eCE92f3220628eC007049d915)
* Solana: [5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i](https://solscan.io/account/5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i)

Since HBOT is an Ethereum ERC-20 token only, any HBOT-denominated bounties must be sent to the Ethereum Mainnet wallet.
