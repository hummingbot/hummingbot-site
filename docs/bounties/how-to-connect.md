# How to Connect Your Exchange to Hummingbot

There are three pathways to integrate your exchange with Hummingbot, each designed for different needs and budgets.

## Option 1: DIY (Do It Yourself)

**Cost**: Free (your development time)  
**Timeline**: 2-4 weeks  
**Best for**: Exchanges with strong internal development teams

### Process

1. **Build the Connector**
   - Fork the [Hummingbot repository](https://github.com/hummingbot/hummingbot)
   - Follow our [Connector Development Guide](/developers/connectors/)
   - Implement required interfaces for your exchange type:
     - CLOB: Order placement, cancellation, order book streaming
     - AMM: Swap execution, liquidity provision, pool queries
   - Add comprehensive unit tests

2. **Submit Pull Request**
   - Ensure code meets Hummingbot quality standards
   - Include documentation and examples
   - Pass all CI/CD checks

3. **Create New Connector Proposal (NCP)**
   - Stake minimum 200,000 HBOT tokens
   - Submit proposal on [Snapshot](https://snapshot.org/#/hbot-ncp.eth)
   - Campaign for community approval

4. **Maintain the Connector**
   - Fix bugs reported by users
   - Update for API changes
   - Participate in quarterly polls

### Requirements
- Python expertise (for CLOB connectors)
- TypeScript/JavaScript expertise (for Gateway/AMM connectors)
- Understanding of Hummingbot architecture
- Commitment to ongoing maintenance
- HBOT tokens for governance participation

### Pros & Cons
✅ **Pros**: Full control, no fees, deep integration knowledge  
❌ **Cons**: Resource intensive, governance complexity, ongoing maintenance burden

---

## Option 2: Connector Bounty

**Cost**: $10,000 flat fee  
**Timeline**: 4-8 weeks  
**Best for**: Most exchanges seeking reliable integration

### What's Included

#### Development Package ($10,000)
- Professional connector development by vetted developers
- ALL connector types your exchange supports
- Full testing and quality assurance
- Integration into official codebase
- 1 year of maintenance and governance

### Process

1. **Initial Contact**
   - Reach out via Discord or email
   - Share API documentation
   - Confirm exchange specifications

2. **Bounty Creation**
   - Fund the bounty ($10,000)
   - Foundation creates GitHub issue
   - Developer assigned within 1 week

3. **Development Phase** (2-4 weeks)
   - Developer builds connector
   - Regular progress updates
   - Foundation oversight

4. **Testing & Integration** (1-2 weeks)
   - QA testing by Foundation
   - Bug fixes and optimization
   - Final approval

5. **Governance & Release** (1-2 weeks)
   - New Connector Proposal created
   - Community voting
   - Included in next release

### Payment & Renewal
- **Year 1**: $10,000 (includes development + maintenance)
- **Year 2+**: $2,000/year (waived if affiliate revenue > $200/month)

### Detailed Scope

#### Included Services
- ✅ Connector development (all types)
- ✅ Quality assurance testing
- ✅ Documentation creation
- ✅ 1 year bug fixes
- ✅ 1 year API update support
- ✅ Governance proposal management
- ✅ Quarterly voting participation
- ✅ Marketing announcements
- ✅ Affiliate program setup

#### Success Metrics
- Connector merged within 8 weeks
- 99% uptime in production
- <24 hour response for critical bugs
- Maintained in codebase via governance

[Start Connector Bounty →](./process.md){: .md-button .md-button--primary }

---

## Option 3: Strategic Sponsorship

**Cost**: Starting at $50,000  
**Timeline**: Customized  
**Best for**: Leading exchanges seeking comprehensive partnership

### Partnership Levels

#### Gold Sponsorship ($50,000)
Everything in Connector Bounty, plus:
- Priority connector development
- Custom strategy development
- Dedicated integration guide
- Co-marketing campaign
- Quarterly business reviews

#### Platinum Sponsorship ($100,000)
Everything in Gold, plus:
- Multiple connector types (spot, perp, options)
- Custom trading competition
- Liquidity mining program design
- Direct access to Foundation team
- Conference speaking opportunities

#### Diamond Sponsorship ($250,000+)
Everything in Platinum, plus:
- White-label solutions
- Institutional client introductions
- Custom feature development
- Board advisory relationship
- Strategic partnership agreement

### Sponsorship Benefits

#### Technical Benefits
- **Priority Support**: Dedicated technical contact
- **Custom Development**: Exchange-specific features
- **Performance Optimization**: Tailored for your infrastructure
- **Advanced Integration**: Deep order book, private data feeds

#### Marketing Benefits
- **Launch Campaign**: Coordinated announcement across all channels
- **Content Creation**: Blog posts, videos, tutorials
- **Community Events**: AMAs, workshops, competitions
- **Brand Visibility**: Logo placement, case studies

#### Business Benefits
- **User Acquisition**: Direct promotion to 40,000+ traders
- **Strategic Guidance**: Market making program design
- **Institutional Connections**: Introductions to large traders
- **Data Insights**: Usage analytics and reports

### Custom Programs

We can design bespoke programs including:

- **Liquidity Mining**: Incentivize market makers with rewards
- **Trading Competitions**: Engage community with prizes
- **Educational Content**: Webinars and masterclasses
- **Hackathons**: Build ecosystem developers
- **Research Reports**: Market analysis and insights

### Current Sponsors

<div class="sponsor-grid">
  <div class="sponsor-card">
    <h4>Hyperliquid</h4>
    <p>Perpetual futures DEX with Vaults integration</p>
    <p class="sponsor-tier">Platinum Sponsor</p>
  </div>
  <div class="sponsor-card">
    <h4>dYdX</h4>
    <p>Decentralized derivatives exchange</p>
    <p class="sponsor-tier">Gold Sponsor</p>
  </div>
  <div class="sponsor-card">
    <h4>XRPL</h4>
    <p>XRP Ledger CLOB and AMM</p>
    <p class="sponsor-tier">Gold Sponsor</p>
  </div>
</div>

[Discuss Sponsorship →](mailto:partnerships@hummingbot.org){: .md-button .md-button--primary }

---

## Comparison Matrix

| Feature | DIY | Bounty ($10k) | Sponsorship ($50k+) |
|---------|-----|---------------|---------------------|
| **Development** |
| Professional developers | ❌ | ✅ | ✅ |
| Foundation oversight | ❌ | ✅ | ✅ |
| Priority timeline | ❌ | ❌ | ✅ |
| Custom features | ✅ | ❌ | ✅ |
| **Maintenance** |
| Bug fixes (1 year) | Self | ✅ | ✅ |
| API updates (1 year) | Self | ✅ | ✅ |
| Governance support | Self | ✅ | ✅ |
| Priority support | ❌ | ❌ | ✅ |
| **Marketing** |
| Basic announcement | ❌ | ✅ | ✅ |
| Content creation | ❌ | Limited | ✅ |
| Co-marketing campaign | ❌ | ❌ | ✅ |
| Trading competitions | ❌ | ❌ | ✅ |
| **Business** |
| Affiliate integration | Self | ✅ | ✅ |
| Strategy consulting | ❌ | ❌ | ✅ |
| Institutional intros | ❌ | ❌ | ✅ |
| Custom programs | ❌ | ❌ | ✅ |

## Frequently Asked Questions

### Which option is right for my exchange?

- **Choose DIY if**: You have strong Python/TypeScript developers and want full control
- **Choose Bounty if**: You want professional integration at a fixed, affordable price
- **Choose Sponsorship if**: You're a leading exchange seeking strategic partnership

### How long does integration take?

- **DIY**: 2-4 weeks development + governance process
- **Bounty**: 4-8 weeks total (development + testing + governance)
- **Sponsorship**: Customized timeline with priority delivery

### What about ongoing costs?

- **DIY**: Your internal development costs
- **Bounty**: $2,000/year after year 1 (often waived)
- **Sponsorship**: Included in package, custom renewal terms

### Can we upgrade later?

Yes! Many exchanges start with a Bounty and upgrade to Sponsorship as they grow. The Bounty fee is credited toward sponsorship packages.

### What if we need help deciding?

Contact our team for a consultation. We'll assess your needs and recommend the best path forward.

## Next Steps

### Ready for Connector Bounty?
The fastest path to integration with fixed pricing and timeline.

[Start Bounty Process →](./process.md){: .md-button .md-button--primary }

### Interested in Sponsorship?
Let's discuss a strategic partnership tailored to your goals.

[Contact Partnerships Team →](mailto:partnerships@hummingbot.org){: .md-button .md-button--primary }

### Want to DIY?
Access our developer resources and community support.

[Developer Guides →](/developers/connectors/){: .md-button }
[Join Discord →](https://discord.gg/hummingbot){: .md-button }

---

<style>
.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.sponsor-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background: #f9f9f9;
}

.sponsor-card h4 {
  margin-top: 0;
  color: #1976d2;
}

.sponsor-tier {
  font-weight: bold;
  color: #666;
}
</style>