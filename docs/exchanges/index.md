# Exchanges

## What Exchanges Connect to Hummingbot?

Hummingbot is open source software that helps you create and deploy crypto trading bots across 50+ exchanges. The project has **14.3k GitHub stars** and **3.9k forks**, representing one of the most active trading bot communities.

### Supported Exchange Types

| Exchange Type | Description | Features | View Connectors |
|---------------|-------------|----------|-----------------|
| **🏛️ CLOB CEX** | **Central Limit Order Book**<br>Traditional centralized exchanges | • Spot & derivatives trading<br>• WebSocket streaming<br>• Sub-second execution | [30+ CEX Connectors →](/connectors/clob/) |
| **📊 CLOB DEX** | **Decentralized Order Books**<br>On-chain exchanges with CEX-like functionality | • Self-custody trading<br>• On-chain settlement<br>• Transparent order matching | [DEX CLOB Connectors →](/connectors/clob/) |
| **🔄 AMM DEX** | **Automated Market Makers**<br>DeFi protocols via Gateway integration | • Liquidity provision<br>• Multi-chain support<br>• Smart contract interaction | [20+ AMM Connectors →](/gateway/connectors/) |

### Featured Exchanges

**Major CEX**: Binance, Coinbase, OKX, Gate.io, KuCoin, Bybit  
**Leading DEX**: Hyperliquid, dYdX, Uniswap, PancakeSwap, Raydium

[View All Supported Exchanges →](/connectors/)

### Real-Time Usage Data

See live trading activity across all exchanges via our public dashboard:

![Reported Volumes](../assets/img/reported-volumes-light.png#only-light)
![Reported Volumes](../assets/img/reported-volumes-dark.png#only-dark)

The [Reported Volumes](/reporting/) dashboard shows real-time, aggregated trading data from Hummingbot instances worldwide, including both official releases and community forks. This transparent data helps exchanges understand actual usage patterns and trading volume.

[View Live Dashboard →](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52)

---

## Why Exchanges Connect to Hummingbot

### 📊 Access Global Liquidity Providers

- **40,000+ active traders** using Hummingbot worldwide
- **$2B+ monthly volume** across connected exchanges
- **Professional market makers** providing 24/7 liquidity
- **Sophisticated strategies** improving price discovery

### 🚀 Proven Growth Results

Exchanges that integrate Hummingbot see significant growth:

- **100-500 new traders** in the first month
- **$10M-100M** additional monthly volume
- **50% reduction** in average spreads
- **3x increase** in order book depth

### 🛠️ Professional Trading Infrastructure

Give your users access to:
- **20+ built-in strategies** (market making, arbitrage, etc.)
- **Custom strategy development** framework
- **Advanced order types** and execution logic
- **Risk management** and portfolio tools

[Learn More About Benefits →](/connector-bounties/why-connect.md){: .md-button }

---

## How to Connect Your Exchange to Hummingbot

| Option | Cost | Timeline | Features | Learn More |
|--------|------|----------|----------|------------|
| **🔧 DIY Integration** | Free | 2-4 weeks | • Full control & customization<br>• Self-maintenance required | [Learn More →](/bounties/how-to-connect.md#option-1-diy-do-it-yourself) |
| **💎 Connector Bounty** | $10,000 | 4-8 weeks | • Vetted developer builds connector<br>• 1 year maintenance included | [Get Started →](/bounties/) |
| **🏆 Strategic Sponsorship** | $50,000+ | Custom | • Priority development<br>• Custom features & strategies<br>• Co-marketing campaigns | [Learn More →](/bounties/how-to-connect.md#option-3-strategic-sponsorship) |

---

## Current Exchange Partners

### 🏆 Exchange Sponsors

Leading exchanges partnering with Hummingbot Foundation for strategic integration:

- **XRPL**: XRP Ledger CLOB & AMM integration
- **Hyperliquid**: Onchain perpetuals leader  
- **dYdX**: Decentralized derivatives exchange
- **Derive**: DEX aggregator platform

### 🤝 Fee-Share Partners

Exchanges supporting open-source development through revenue sharing:

| Exchange | User Benefit | Hummingbot Users | Monthly Volume |
|----------|-------------|------------------|----------------|
| **Binance** | 10% fee rebate | 10,000+ | $2B+ |
| **Gate.io** | 20% fee rebate | 3,000+ | $500M+ |
| **KuCoin** | 20% fee rebate | 2,500+ | $300M+ |
| **OKX** | 20% fee rebate | 2,000+ | $400M+ |
| **HTX** | 20% fee rebate | 1,500+ | $200M+ |
| **Bitmart** | 10% fee rebate | 1,000+ | $100M+ |

---

## Exchange Governance

Hummingbot uses a transparent, community-driven governance process:

### New Connector Proposals (NCPs)
- Exchanges can propose new connectors
- Community votes on inclusion
- Requires 200,000 HBOT stake
- 7-day voting period

### Quarterly Connector Polls
- Community votes on which exchanges to support
- Allocates maintenance resources
- Ensures connector quality
- Removes inactive connectors

[Learn About Governance →](/governance/){: .md-button }

---

## Technical Integration

### API Requirements

**For CEX Connectors:**
- REST API for orders and balances
- WebSocket for market data streaming
- Standard authentication (API key/secret)
- Testnet/sandbox environment

**For DEX Connectors:**
- EVM-compatible or custom chain SDK
- Web3 wallet integration
- Smart contract ABIs
- RPC endpoint access

### Connector Standards

All Hummingbot connectors implement:
- Standardized order management
- Unified balance tracking
- Consistent error handling
- Performance monitoring
- Security best practices

[View Technical Docs →](/developers/connectors/){: .md-button }

---

## Success Metrics

### What Makes a Successful Integration?

Track your connector's success through:

**Adoption Metrics:**
- Active users (target: 100+ in month 1)
- Trading volume (target: $10M+ monthly)
- Strategy diversity (5+ strategies used)
- Geographic distribution

**Technical Metrics:**
- API reliability (99.9% uptime)
- Order latency (<200ms average)
- Market data accuracy
- Error rate (<0.1%)

**Community Metrics:**
- Discord engagement
- GitHub issues/PRs
- Documentation views
- Video tutorial views

---

## Get Started Today

### For Exchanges Ready to Connect

| Contact Method | Description | Link |
|----------------|-------------|------|
| **💬 Schedule a Call** | Discuss integration needs with our team | [Book Meeting](https://calendly.com/hummingbot/exchange-integration) |
| **📧 Email Us** | Get detailed information about connector options | [Contact Team](mailto:partnerships@hummingbot.org) |
| **💎 Start Bounty** | Begin the $10k connector bounty process | [Get Started](/bounties/) |

### Quick Links

- [Connector Bounties Overview](/bounties/)
- [Why Connect to Hummingbot](/bounties/why-connect.md)
- [Integration Options](/bounties/how-to-connect.md)
- [Technical Documentation](/developers/connectors/)
- [Join Discord Community](https://discord.gg/hummingbot)

