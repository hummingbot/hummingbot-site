# Connector Bounty FAQ

## For Exchanges

### What is Bounty Management?
Bounty Management is a $10,000 service where Hummingbot Foundation oversees the complete development and maintenance of your exchange connector through community bounties. This includes 1 year of governance and maintenance support.

### What connector types are included?
The $10,000 fee covers ALL connector sub-types your exchange supports:
- **CLOB Exchanges**: Spot and/or Perpetual connectors
- **AMM/DEX**: Router, AMM, and/or CLMM connectors via Gateway

### How long does connector development take?
Total timeline is 4-8 weeks:
- **Development**: 2-4 weeks (depends on complexity)
- **Testing & QA**: 1-2 weeks  
- **Governance**: 1-2 weeks (community approval)

### What happens if the connector isn't delivered?
Full refund guarantee if:
- No qualified developer assigned within 60 days
- Developer fails to deliver within agreed timeframe
- Connector fails QA testing after reasonable attempts
- Foundation unable to reassign bounty within 90 days

### Can multiple exchanges fund development?
Yes, exchanges can co-fund connector development, but they must coordinate payment to ensure timely Foundation receipt.

### What's included in the 1-year maintenance?
- Bug identification and fixes via bounty system
- API update compatibility
- New Connector Proposal governance
- Quarterly Snapshot voting participation
- Marketing support and documentation

## For Developers  

### What types of connector bounties are available?
All bounties focus on exchange connector development:
- **New connectors**: CLOB spot ($3,750), CLOB perp ($5,000), DEX AMM ($3,750-5,000)
- **Bug fixes**: $125-625 depending on complexity
- **API updates**: $500-1,250 for version compatibility
- **Feature enhancements**: $400-800 for new capabilities
- **Documentation**: $100-250 for guides and updates

### How does preliminary technical review work?
Before posting connector bounties, Foundation engineering reviews exchange API documentation to ensure:
- Compatibility with Hummingbot connector standards
- Required WebSocket/REST API endpoints available
- Authentication methods supported
- Rate limits acceptable for trading use

### What tests do developers need to write?
- **CLOB connectors**: Comprehensive unit tests covering all endpoints
- **AMM connectors**: Curl tests for basic functionality, optional unit tests
- **Integration tests**: Compatibility with Hummingbot strategies
- **Performance tests**: Latency and throughput validation

### How do developers get assigned to bounties?
1. Browse available bounties on [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1)
2. Comment on bounty GitHub issue with experience and timeline
3. Foundation evaluates based on:
   - [Certification](/certification) status
   - Past bounty contribution history
   - GitHub track record and code quality
   - Technical competence for specific exchange type
4. Foundation assigns developer and updates bounty status from `OPEN` to `ASSIGNED`

### Can developers work on multiple bounties simultaneously?
No, developers can only be assigned one active bounty at a time. Exception: if current bounty PR is submitted and under review, developer may be assigned a new bounty.

### What happens if development takes too long?
Foundation expects regular progress updates. If developer is:
- **Unresponsive for 7+ days**: Bounty may be unassigned and reopened
- **Unable to complete**: Bounty may be reassigned to another developer
- **Discovers unfixable issue**: Foundation may add `wont-fix` label and provide partial refund

### How are bounty payments processed?
- **Exchange-funded bounties**: Paid in currency escrowed by exchange (typically USDC/USDT)
- **Foundation bounties**: Paid in HBOT tokens using 30-day average price
- **Processing fee**: 20% for stablecoins, 10% for HBOT payments
- **Payment timeline**: Within 30 days of PR merge
- **Distribution**: Monthly payout cycles

### What qualifications do developers need?
**For CLOB Connectors:**
- Strong Python programming skills
- WebSocket/REST API development experience
- Understanding of trading systems
- Previous Hummingbot contributions preferred

**For AMM Connectors:**
- TypeScript/JavaScript proficiency
- Blockchain/Web3 development experience
- Smart contract interaction knowledge
- DeFi protocol understanding

### How does the code review process work?
1. **Engineering Review**: Foundation engineers check:
   - Code quality and standards compliance
   - Security best practices
   - Integration compatibility
   - Performance optimization

2. **QA Testing**: Quality assurance team validates:
   - Functional requirements met
   - Order lifecycle works correctly
   - Market data streaming accurate
   - Error handling robust
   - Strategy compatibility confirmed

### What support do developers receive?
- Weekly progress check-ins
- Technical guidance and documentation
- Access to exchange contacts when needed
- Testing environment setup assistance
- Code review feedback and guidance

## Technical Questions

### What are Hummingbot's connector standards?
All connectors must implement standardized interfaces for:
- Order management (place, cancel, modify)
- Balance and position tracking
- Market data streaming
- Error handling and recovery
- Rate limit management
- Security and authentication

### What exchange APIs are compatible?
**CLOB Requirements:**
- REST API for order operations
- WebSocket for real-time market data
- Standard authentication (API key/secret)
- Sufficient rate limits for trading

**AMM Requirements:**
- Smart contract interfaces
- RPC endpoint access
- Token/pool metadata
- Swap calculation methods

### How does governance approval work?
1. **New Connector Proposal (NCP)** created
2. **Community review period** (7 days discussion)
3. **Snapshot voting** (7 days, requires >50% approval)
4. **HBOT token requirement**: 200,000 HBOT to propose
5. **Foundation management**: Handles entire process for Bounty Management clients

### What ongoing maintenance is provided?
- Monthly connector health monitoring
- Bug identification and bounty posting
- API update coordination when exchanges change
- Performance optimization as needed
- Community issue response and triage

## Pricing & Payment

### Why is Bounty Management $10,000?
This covers:
- Professional developer assignment and oversight
- Multiple bounties for comprehensive connector development
- 1 year of maintenance via ongoing bounties
- Governance proposal management and community advocacy
- Quality assurance and testing
- Marketing and documentation support

### How does this compare to DIY development?
**DIY Costs:**
- Internal developer time (4-8 weeks)
- Ongoing maintenance responsibility
- Governance participation (200,000 HBOT stake)
- Community relations management

**Bounty Management Benefits:**
- Fixed price regardless of complexity
- Professional oversight and quality assurance
- No ongoing maintenance burden
- Foundation handles all governance
- Guaranteed delivery or refund

### When are payments due?
- **Exchanges**: $10,000 upfront or via escrow agreement
- **Developers**: Paid after PR merge and QA approval
- **Annual renewal**: $2,000/year (waived if affiliate revenue >$200/month)

Ready to get started with connector bounties? [Contact us](https://discord.gg/hummingbot) or [browse open bounties](https://github.com/orgs/hummingbot/projects/7/views/1).