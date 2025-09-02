# Frequently Asked Questions

## For Exchanges

### What is Bounty Management?

Bounty Management is a $10,000 service where Hummingbot Foundation oversees the complete development and maintenance of your exchange connector through community bounties. This includes 1 year of governance and maintenance support.

### What connector types are included?

The $10,000 fee covers ALL connector sub-types your exchange supports:

- **CLOB Exchanges**: Spot and/or Perpetual connectors
- **AMM/DEX**: Router, AMM, and/or CLMM connectors via Gateway

### How long does development take?

Total timeline is 4-8 weeks:

- **Assignment**: 1-2 weeks (finding and vetting qualified developers)
- **Development**: 2 weeks (experienced developers can typically build a connector quickly using existing templates and documentation)
- **Testing & QA**: 1-2 weeks  
- **Release**: 1-2 weeks (inclusion in official monthly release)

### What if the connector isn't delivered?

Full refund guarantee if:

- No qualified developer assigned within 60 days
- Developer fails to deliver within agreed timeframe
- Connector fails QA testing after reasonable attempts
- Foundation unable to reassign bounty within 90 days

### What's included in 1-year maintenance?

- Bug identification and fixes via bounty system
- API update compatibility
- New Connector Proposal governance
- Quarterly Snapshot voting participation
- Marketing support and documentation

### How does payment work?

- Sign [escrow agreement](https://hummingbot-foundation.notion.site/Bounty-Escrow-Agreement-1eac9b8ea4f780d19afee59abed1fe1e)
- Transfer $10,000 via crypto or wire
- Foundation handles all developer payments
- Annual renewal: $2,000/year (waived if fee share exceeds $200/month)

## For Developers

### What bounties are available?

All bounties focus on exchange connector development:

- **New connectors**: Complete exchange integrations for different connector types
- **Bug fixes**: Resolve issues and edge cases in existing connectors
- **API updates**: Maintain compatibility with exchange changes
- **Feature enhancements**: Add new capabilities and improvements
- **Documentation**: Create and update technical guides

### How do I get assigned?

1. Complete [Contributor Form](https://forms.gle/uArBWsSqCYHBWTcz9)
2. Browse [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1)
3. Comment on issue with experience and timeline
4. Foundation evaluates and assigns

### What are the requirements?

**CLOB Connectors:**

- Python programming skills
- WebSocket/REST API experience
- Trading systems understanding
- Previous Hummingbot work preferred

**AMM Connectors:**

- TypeScript/JavaScript proficiency
- Blockchain/Web3 development
- Smart contract knowledge
- DeFi protocol understanding

### Can I work on multiple bounties?

No, developers can only be assigned one active bounty at a time. Exception: if your PR is under review, you may be assigned a new bounty.

### How does payment work?

- **Timeline**: Within 30 days of PR merge
- **Currency**: USDC/USDT for exchange-funded, HBOT for Foundation bounties
- **Tracking**: Available in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing)

### What if I can't complete a bounty?

If you're unable to complete:

- Communicate immediately with Foundation
- Bounty may be reassigned to another developer
- 7+ days unresponsive results in automatic reassignment

## Technical Questions

### What are connector standards?

All connectors must implement standardized interfaces and functionality as outlined in our developer documentation:

- [Building CLOB Connectors](/developers/connectors/) - Comprehensive guide for spot and perpetual connectors
- [Perpetual Connector Checklist](/developers/connectors/perp-connector-checklist/) - Detailed requirements and API specifications
- [Spot-Perpetual Arbitrage Strategy](/strategies/spot-perpetual-arbitrage/) - Example of connector integration with trading strategies

### What testing is required?

**CLOB connectors:**

- Comprehensive unit tests
- Integration tests with strategies
- Performance benchmarks

**AMM connectors:**

- Curl tests for functionality
- Optional unit tests
- Gas optimization verification

### How does code review work?

Foundation reviews for:

- Code quality and standards
- Security best practices
- Integration compatibility
- Performance optimization
- Documentation completeness

### What support is provided?

- Weekly progress check-ins
- Technical guidance
- Exchange contact facilitation
- Testing environment access
- Code review feedback

## Governance Questions

### How does NCP approval work?

1. A New Connector Proposal is created
2. 7 days Snapshot voting
3. Requires >50% approval with sufficient HBOT quorum
4. Foundation manages entire process for Bounty Management clients

### What happens after governance approval?

- Connector included in monthly release
- Added to supported exchanges list
- Documentation published
- Marketing announcement
