If you are want to get a custom algorithmic strategy or Hummingbot connector built by a professional-grade developer, Hummingbot Foundation can help you navigate the entire development process. This includes:

- Posting the bounty on [Bounties Board](https://github.com/orgs/hummingbot/discussions/categories/bounties)
- Assigning a qualified community developer and monitoring their progress
- Reviewing the code to ensure the connector meets the acceptance criteria and other requirements
- Performing automated and manual testing (quality assurance)
- Paying the developer when the pull request is merged

To initiate the process, please post a create a new [Github Issue](https://github.com/hummingbot/hummingbot/issues/new/choose) and choose the **Bounty Request** template. You may also contact the Foundation team members on [Discord](https://discord.gg/hummingbot) to discuss your bounty.

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

## Bounty Wallets

In order to fund the bounty, sponsors should send the total bounty amount to a designated Foundation wallet:

* Ethereum Mainnet: [0x60D581aEa0644e74df60c7555e5166d32665d6b6](https://etherscan.io/address/0x60D581aEa0644e74df60c7555e5166d32665d6b6)
* Binance Smart Chain: [0xE517b826a26B439eCE92f3220628eC007049d915](https://bscscan.com/address/0xE517b826a26B439eCE92f3220628eC007049d915)
* Solana: [5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i](https://solscan.io/account/5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i)

Since HBOT is an Ethereum ERC-20 token only, any HBOT-denominated bounties must be sent to the Ethereum Mainnet wallet.
