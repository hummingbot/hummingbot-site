## Exchange Inclusion

Hummingbot [connectors](/connectors) link its internal trading engine to different cryptocurrency exchanges via WebSocket and/or REST API. They standardize interactions with the idiosyncratic APIs offered by these platforms, for purposes such as gathering order book and blockchain data, as well as sending and cancelling transactions and orders.

Since each exchange connector requires ongoing maintenance and may conflict with other connectors, the primary goal of the Hummingbot Foundation governance process is to let HBOT holders decide which exchanges are supported by the official Hummingbot codebase.

HBOT holders may propose to add new exchanges to the Hummingbot codebase via [New Connector Proposals](/governance/proposals), which require a pull request with the connector code to the Hummingbot Github repo, along with a minimum HBOT balance to create. For existing connectors, quarterly [Exchange Connector Polls](/governance/polls) determines which exchanges should be included in future releases and allocates HBOT bounties toward the supported exchanges.

## Exchange Sponsors

Exchanges may opt to sponsor the work of the not-for-profit Hummingbot Foundation. For these partners, we engage community developers to build and maintain high-quality, standardized connectors, ensuring reliable integration with Hummingbot's extensive strategy library. Our dedicated team provides oversight over the build process, continuous quality assurance, and assistance with the governance process.

Sponsors benefit from exposure to Hummingbot's active trader community through our documentation, announcements, and communication channels. For more information about sponsorship opportunities, please contact Foundation team members via Discord or email <contact@hummingbot.org>.

<div class="flex-container">
  <div class="flex-item">
    <img src="/assets/logos/xrpl-dark.png" class="dark-logo"/>
    <img src="/assets/logos/xrpl-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/hyperliquid-dark.png" class="dark-logo"/>
    <img src="/assets/logos/hyperliquid-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/dydx-dark.png" class="dark-logo"/>
    <img src="/assets/logos/dydx-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/derive-dark.png" class="dark-logo"/>
    <img src="/assets/logos/derive-light.png" class="light-logo"/>
  </div>
</div>

- [**XRPL**](https://xrpl.org/): The XRP Ledger (XRPL) is a decentralized, public blockchain that enables fast, low-cost transactions between accounts with both central limit order book (CLOB) and automatic market maker (AMM) exchange functionality built into the ledger. The XRPL connector in Hummingbot enables sophisticated trading and liquidity provision strategies on one of the longest-running blockchain platforms. [Connector Guide](/blog/hummingbot-unveils-new-connector-to-xrp-ledger-in-version-20/)

- [**Hyperliquid**](https://hyperliquid.xyz/): Hyperliquid has partnered with Hummingbot Foundation to show the power of democratized, algorithmic access to markets. Hyperliquid is an order book spot and perpetual futures DEX that aims to do everything the best CEXs do, but on-chain. Their unique [Vaults](https://app.hyperliquid.xyz/vaults) allow users to run stake-able liquidity provision strategies. [Announcement](https://twitter.com/_hummingbot/status/1768690918557970846).

- [**Derive**](https://derive.fi/): Derive is a decentralized exchange aggregator that provides users with the best prices across multiple DEXs. By partnering with Hummingbot Foundation, Derive enables users to access deep liquidity across multiple DEXs and execute trades with minimal price impact. The Derive connector in Hummingbot allows users to implement sophisticated trading strategies while leveraging Derive's aggregation capabilities. [Connector Guide](/blog/posts/using-derive-with-hummingbot/).

- [**dYdX**](https://dydx.exchange/): dYdX is a decentralized exchange (DEX) built on its own purpose-built blockchain that offers perpetual futures trading with deep liquidity and low latency. The dYdX v4 connector in Hummingbot enables users to implement sophisticated derivatives trading strategies while maintaining full custody of their assets. [Announcement](/blog/announcing-the-new-dydx-v4-connector-in-hummingbot/).

To learn more about sponsorship opportunities & benefits, contact Hummingbot Foundation via Discord or email operations at hummingbot.org.

## Exchange Partners

We're thrilled to partner with leading industry exchanges to champion decentralized, community-driven market making through strategic fee-share agreements. Our exchange partners share a portion of user-generated fees with the Foundation, at zero cost to users. We are grateful for their support of open source algorithmic trading, where innovation, community, and opportunity collide.

When you sign up for an account with our partner exchanges using the Hummingbot referral link, you will receive a rebate on your trading fees!

| Exchange | Your Fee Rebate | Referral Link |
|----------|----------------|---------------|
| Binance  | 10%           | [Sign Up](https://accounts.binance.com/register?ref=CBWO4LU6) |
| Gate.io  | 20%           | [Sign Up](https://www.gate.io/referral/invite/HBOTGATE_0_103) |
| Kucoin   | 20%           | [Sign Up](https://www.kucoin.com/r/af/hummingbot) |
| OKX      | 20%           | [Sign Up](https://www.okx.com/join/1931920269) |
| HTX      | 20%           | [Sign Up](https://www.htx.com.pk/invite/en-us/1h?invite_code=re4w9223) |
| Bitmart  | 10%           | [Sign Up](https://www.bitmart.com/invite/Hummingbot/en) |

## How exchange partnerships work

When you sign up for an account using our referral links, a portion of your trading fees are rebated back to Hummingbot Foundation. Every time you use Hummingbot to submit an order, it sends an HTTP request to the API of the exchange. The exchange then identifies that the HTTP request for the order is coming from a user who is using the Hummingbot codebase, it checks for the metadata in the HTTP request for a Hummingbot identifier. If the identifier is present, the exchange knows that the order is coming from a Hummingbot user and will rebate a portion of the trading fees to us.
 
## Why should you support us?

These partnerships help sustain the Hummingbot Foundation's mission to keep our platform open source and free, while providing you with trading fee rebates at no additional cost. It's a win-win arrangement that supports both our users and the continued development of Hummingbot.
