# Exchanges

## What Are Exchange Connectors?

Hummingbot is open source software that helps you create and deploy crypto trading bots across 50+ exchanges. The project has **14k+ GitHub stars** and **3.9k+ forks**, representing one of the most active trading bot communities.

Connectors are standardized API integrations that enable Hummingbot to communicate with different exchanges. Each connector implements a common interface for order management, balance tracking, and market data streaming, allowing strategies to work seamlessly across multiple exchanges.

### Supported Exchange Types

| Exchange Type | Description | Sample Connector |
|---------------|-------------|------------------|
| **🏛️ CLOB CEX** | Centralized exchanges with spot & perpetual futures trading in central limit order book (CLOB) markets | [Binance →](./binance/index.md) |
| **📊 CLOB DEX** | On-chain, non-custodial spot and perp exchanges CLOB markets | [Hyperliquid →](hyperliquid.md) |
| **🔄 Gateway DEX** | AMM decentralized exchanges and aggregators via Gateway | [Uniswap →](./gateway/uniswap.md) |

* [All CLOB Connectors →](../connectors/clob.md) 
* [All Gateway DEX Connectors →](../gateway/connectors.md)

### Real-Time Usage Data

See live trading activity across all exchanges via our public dashboard:

![Reported Volumes](../assets/img/reported-volumes-light.png#only-light)
![Reported Volumes](../assets/img/reported-volumes-dark.png#only-dark)

The [Reported Volumes](../reporting.md) dashboard shows real-time, aggregated trading data from Hummingbot instances worldwide, including both official releases and community forks. This transparent data helps exchanges understand actual usage patterns and trading volume.

[View Live Dashboard →](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52)

## How to Add a Hummingbot Connector

You can choose from three integration options to get an official Hummingbot connector built and maintained:

| Option | Cost | Features |
|--------|------|----------|
| **🔧 DIY Governance** | Free | • Build your own connector<br>• Submit Governance Proposal<br>• Self-maintenance required |
| **💎 Bounty Management** | $10,000 | • Professional bounty oversight<br>• 1 year maintenance included<br>• Foundation manages process |
| **🏆 Sponsor Foundation** | $50,000+ | • Comprehensive partnership<br>• Priority development<br>• Custom features |

### 🔧 DIY Governance

Build your own connector following other connectors in the `development` branch of Hummingbot's open source framework. Then, create a [Hummingbot Governance Proposal (HGP)](../about/proposals.md) along with a valid, comprehensive pull request containing the connector code. 

You'll need some [HBOT tokens](../about/governance.md) to create a proposal, and you'll be responsible for ongoing maintenance updates to keep your connector included in ongoing releases of Hummingbot.

### 💎 Bounty Management

Have a professional community developer build and maintain your connector through our Bounty Management service, starting at **$10,000**. This comprehensive package includes full connector development for all supported trading types (spot, perpetuals, AMM), plus one year of maintenance and governance support. The Foundation handles developer assignment, code review, testing, and community approval processes. We offer a full refund if the connector isn't successfully merged into the codebase within a prescribed amount of time.

See [Bounties](../bounties/index.md) for more information.

### 🏆 Sponsor the Foundation

Partner directly with Hummingbot Foundation for priority development, exchange-specific content like [Funding Rate Arbitrage on Hyperliquid](../blog/posts/using-hyperliquid-vaults-with-hummingbot/index.md), and co-marketing campaigns starting at **$50,000**. 

This premium option includes dedicated engineering resources, custom content development, and ongoing collaboration. Ideal for exchanges with new technical requirements and those seeking joint go-to-market and educational initiatives.

## Current Foundation Partners

- [**Binance**](https://www.binance.com/)
- [**Bitmart**](https://www.bitmart.com/)
- [**Bitget**](https://www.bitget.com/)
- [**Gate.io**](https://www.gate.io/)
- [**Hyperliquid**](https://hyperliquid.xyz/)
- [**HTX**](https://www.htx.com/)
- [**Kucoin**](https://www.kucoin.com/)
- [**OKX**](https://www.okx.com/)
- [**XRPL**](https://xrpl.org/)

## Exchange Governance

Hummingbot uses a transparent, community-driven governance process that lets HBOT holders decide which exchanges the codebase should support. All governance decisions flow through a unified proposals process:

- **New connectors**: Propose adding new exchange connectors
- **Connector management**: Propose bounty allocations or connector removals
- **Requires 200,000 HBOT**: Minimum balance to create a proposal
- **5-day process**: 2+ day discussion, 3-day voting period

[Learn About Governance →](../about/governance.md){: .md-button }

## Connector Development

### CLOB Connectors (CEX/DEX)

CLOB (Central Limit Order Book) connectors provide WebSocket and REST-based integrations for order book exchanges. These connectors handle order placement, cancellation, balance tracking, and real-time market data streaming.

**Key Features:**

- Direct integration into Hummingbot client
- Sub-second order execution
- Compatible with V2 Strategies framework
- Comprehensive testing and QA process

[Build CLOB Connectors →](../connectors/connectors/build.md){: .md-button }

### Gateway Connectors (AMM/DEX)

Gateway connectors enable interaction with decentralized protocols through a standardized REST API interface. Gateway supports Router, AMM, and CLMM connector types for blockchain-based trading.

**Key Features:**

- Blockchain-agnostic architecture
- Smart contract integration
- Support for liquidity provision
- Hardware wallet compatibility

[Build Gateway Connectors →](../connectors/gateway-connectors/index.md){: .md-button }

## For Exchanges Ready to Connect

Get your exchange integrated with Hummingbot through our comprehensive bounty management service. Email us at <operations@hummingbot.org> or contact Foundation team members on [Hummingbot Discord](https://discord.gg/hummingbot) to learn more. Sign the [Bounty Escrow Agreement](https://hummingbot-foundation.notion.site/Bounty-Escrow-Agreement-1eac9b8ea4f780d19afee59abed1fe1e) and escrow the funds to formalize the engagement.
