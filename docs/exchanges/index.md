# Exchanges

## What Are Exchange Connectors?

Hummingbot is open source software that helps you create and deploy crypto trading bots across 50+ exchanges. The project has **14k+ GitHub stars** and **3.9k+ forks**, representing one of the most active trading bot communities.

Connectors are standardized API integrations that enable Hummingbot to communicate with different exchanges. Each connector implements a common interface for order management, balance tracking, and market data streaming, allowing strategies to work seamlessly across multiple exchanges.

### Supported Exchange Types

| Exchange Type | Description | Sample Connector |
|---------------|-------------|------------------|
| **🏛️ CLOB CEX** | Centralized exchanges with spot & perpetual futures trading in central limit order book (CLOB) markets | [Binance →](/exchanges/binance/) |
| **📊 CLOB DEX** | On-chain, non-custodial spot and perp exchanges CLOB markets | [Hyperliquid →](/exchanges/hyperliquid/) |
| **🔄 Gateway DEX** | AMM decentralized exchanges and aggregators via Gateway | [Uniswap →](/exchanges/gateway/uniswap/) |

* [All CLOB Connectors →](/connectors/clob) 
* [All Gateway DEX Connectors →](/gateway/connectors/)

### Real-Time Usage Data

See live trading activity across all exchanges via our public dashboard:

![Reported Volumes](../assets/img/reported-volumes-light.png#only-light)
![Reported Volumes](../assets/img/reported-volumes-dark.png#only-dark)

The [Reported Volumes](/reporting/) dashboard shows real-time, aggregated trading data from Hummingbot instances worldwide, including both official releases and community forks. This transparent data helps exchanges understand actual usage patterns and trading volume.

[View Live Dashboard →](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52)

## How to Add a Hummingbot Connector

You can choose from three integration options to get an official Hummingbot connector built and maintained:

| Option | Cost | Features |
|--------|------|----------|
| **🔧 DIY Governance** | Free | • Build your own connector<br>• Submit New Connector Proposal<br>• Self-maintenance required |
| **💎 Bounty Management** | $10,000 | • Professional bounty oversight<br>• 1 year maintenance included<br>• Foundation manages process |
| **🏆 Sponsor Foundation** | $50,000+ | • Comprehensive partnership<br>• Priority development<br>• Custom features |

### 🔧 DIY Governance

Build your own connector following other connectors in the `development` branch of Hummingbot's open source framework. Then, create a [New Connector Proposal](/governance/proposals) along with a valid, comprehensive pull request containing the connector code. 

You'll need some [HBOT tokens](/governance/hbot) to create a proposal, and you'll be responsible for ongoing maintenance updates and periodic voting to keep your connector included in ongoing releases of Hummingbot.

### 💎 Bounty Management

Have a professional community developer build and maintain your connector through our Bounty Management service for **$10,000**. This comprehensive package includes full connector development for all supported trading types (spot, perpetuals, AMM), plus one year of maintenance and governance support. The Foundation handles developer assignment, code review, testing, and community approval processes. 

See [Bounties](/bounties) for more information or review the [Bounty Escrow Agreement](https://hummingbot-foundation.notion.site/Bounty-Escrow-Agreement-1eac9b8ea4f780d19afee59abed1fe1e).

### 🏆 Sponsor the Foundation

Partner directly with Hummingbot Foundation for priority development, exchange-specific content like [Funding Rate Arbitrage on Hyperliquid](blog/funding-rate-arbitrage-and-creating-vaults-on-hyperliquid/), and co-marketing campaigns starting at **$50,000**. 

This premium option includes dedicated engineering resources, custom content development, and ongoing collaboration. Ideal for exchanges with new technical requirements and those seeking joint go-to-market and educational initiatives.

## Current Foundation Partners

### 🏆 Exchange Sponsors

Leading exchanges partnering with Hummingbot Foundation for strategic integration:

- [**XRPL**](https://xrpl.org/)
- [**Hyperliquid**](https://hyperliquid.xyz/)
- [**dYdX**](https://dydx.exchange/)
- [**Derive**](https://www.derive.fi/)

### 🤝 Fee-Share Partners

Exchanges supporting open-source development through revenue sharing:

- [**Binance**](https://www.binance.com/)
- [**Gate.io**](https://www.gate.io/)
- [**KuCoin**](https://www.kucoin.com/)
- [**OKX**](https://www.okx.com/)
- [**HTX**](https://www.htx.com/)
- [**Bitmart**](https://www.bitmart.com/)

## Exchange Governance

Hummingbot uses a transparent, community-driven governance process that lets [HBOT] holders decide which exchanges the codebase should support:

### New Connector Proposals (NCPs)
- Exchanges can propose new connectors
- Community votes on inclusion
- Requires 200,000 HBOT stake
- 7-day voting period

### Quarterly Connector Polls
- Community votes on which exchanges to support
- Allocates maintenance resources
- Limits number of exchanges by type
- Removes inactive connectors

[Learn About Governance →](/governance/){: .md-button }

## Connector Development

### CLOB Connectors (CEX/DEX)

CLOB (Central Limit Order Book) connectors provide WebSocket and REST-based integrations for order book exchanges. These connectors handle order placement, cancellation, balance tracking, and real-time market data streaming.

**Key Features:**

- Direct integration into Hummingbot client
- Sub-second order execution
- Compatible with V2 Strategies framework
- Comprehensive testing and QA process

[Build CLOB Connectors →](/developers/connectors/){: .md-button }

### Gateway Connectors (AMM/DEX)

Gateway connectors enable interaction with decentralized protocols through a standardized REST API interface. Gateway supports Router, AMM, and CLMM connector types for blockchain-based trading.

**Key Features:**

- Blockchain-agnostic architecture
- Smart contract integration
- Support for liquidity provision
- Hardware wallet compatibility

[Build Gateway Connectors →](/developers/gateway-connectors/){: .md-button }

## For Exchanges Ready to Connect

Get your exchange integrated with Hummingbot through our comprehensive bounty management service. Email us at <operations@hummingbot.org> or contact Foundation team members on [Hummingbot Discord](https://discord.gg/hummingbot) to learn more. Sign the [Bounty Escrow Agreement](https://hummingbot-foundation.notion.site/Bounty-Escrow-Agreement-1eac9b8ea4f780d19afee59abed1fe1e) and escrow the funds to formalize the engagement.
