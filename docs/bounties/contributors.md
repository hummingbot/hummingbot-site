# Connector Bounty Contributors

Developers can earn market-rate compensation building and maintaining exchange connectors for Hummingbot. All connector bounties are focused on integrating exchanges with the Hummingbot trading platform.

## What Are Connector Bounties?

Connector bounties are tasks posted to the [Bounties Board](https://github.com/orgs/hummingbot/projects/7) for:
- **New connector development**: Build complete exchange integrations
- **Connector maintenance**: Fix bugs and implement updates
- **Feature enhancements**: Add new capabilities to existing connectors
- **Documentation**: Create guides for connector usage

All bounties are funded either by:
- **Exchanges** through the Bounty Management service ($10,000 packages)
- **Foundation** for community-requested improvements

## Step 1: Complete Contributor Application

Before participating in connector bounties, fill out the [New Bounty Contributor Form](https://forms.gle/uArBWsSqCYHBWTcz9). This ensures compliance with financial regulations.

After approval, you'll receive:
- **bounty-contributor** label in Discord
- Access to contributor-only channels
- Ability to apply for bounties

## Step 2: Browse Available Connector Bounties

Visit the [Bounties Board](https://github.com/orgs/hummingbot/projects/7) to find available connector bounties. Each bounty includes:

### Bounty Information
- **Exchange name** and type (CEX/DEX)
- **Connector type** (CLOB Spot/Perp, AMM, etc.)
- **Technical requirements**
- **Acceptance criteria**
- **Bounty amount** (market rate)
- **Expected timeline**

### Typical Connector Bounties
- **CLOB CEX Spot**: $3,750
- **CLOB CEX Perpetual**: $5,000  
- **CLOB DEX Spot**: $5,000
- **CLOB DEX Perpetual**: $6,250
- **AMM Connector**: $3,750-5,000
- **Bug fixes**: $125-625
- **API updates**: $500-1,250

## Step 3: Apply for a Bounty

To apply for a connector bounty, comment on the GitHub issue with:

### Required Information
- **Your background**: Experience with similar connectors
- **Technical expertise**: Python (CLOB) or TypeScript (AMM)
- **Portfolio**: Links to previous Hummingbot contributions
- **Timeline**: Estimated completion date
- **Questions**: Any clarifications needed

### What Foundation Looks For
- Previous Hummingbot connector experience
- Understanding of exchange APIs
- WebSocket/REST API development skills
- Clean coding practices
- Reliable communication

## Step 4: Get Assigned

Foundation evaluates applications based on:
- **Technical competence**: Ability to deliver quality code
- **Past contributions**: Track record with Hummingbot
- **Communication**: Responsiveness and clarity
- **Timeline**: Realistic delivery estimates

Once assigned, you'll receive:
- Access to bounty-specific Discord channel
- Technical documentation and resources
- Direct contact with Foundation team
- Clear acceptance criteria

## Step 5: Develop the Connector

### Development Requirements

**For CLOB Connectors:**
- Implement order management (place, cancel, modify)
- WebSocket market data streaming
- Authentication and security
- Error handling and reconnection
- Rate limit management
- Comprehensive testing

**For AMM Connectors:**
- Smart contract integration
- Wallet connectivity
- Token/pool queries
- Swap execution
- Gas optimization
- Transaction monitoring

### Development Best Practices
- Follow [Connector Development Guidelines](/developers/connectors/)
- Use established coding patterns
- Implement comprehensive error handling
- Add thorough test coverage
- Document your code clearly
- Regular progress updates

### Foundation Support
- Weekly check-ins via Discord
- Technical guidance and code review
- API documentation assistance
- Testing environment access
- Issue resolution support

## Step 6: Submit Pull Request

### PR Requirements
Point your PR to the `development` branch and include:
- **Reference**: Bounty issue number in description
- **Summary**: Clear explanation of changes made
- **Testing**: Evidence of thorough testing
- **Documentation**: Updated guides and examples
- **Code quality**: Passes all linting and style checks

### Code Review Process
Your PR will be reviewed for:
- **Functionality**: Meets acceptance criteria
- **Code quality**: Follows Hummingbot standards
- **Security**: Proper authentication and error handling
- **Performance**: Efficient order execution and data handling
- **Integration**: Works with existing Hummingbot strategies

## Step 7: QA Testing

Foundation QA team will test your connector using:
- [Spot Connector QA Checklist](../developers/connectors/test.md)
- [Perp Connector QA Checklist](../developers/connectors/test-perp.md)

### Testing Areas
- **Order lifecycle**: Place, fill, cancel orders
- **Market data**: Price feeds and order book accuracy
- **Error handling**: Network issues and API errors
- **Performance**: Latency and resource usage
- **Integration**: Compatibility with trading strategies

If issues are found, you'll receive specific feedback and be expected to implement fixes promptly.

## Step 8: Payment Processing

### Payment Timeline
- **After PR merge**: Payment processed within 30 days
- **Monthly payouts**: Distributed on monthly basis
- **Payment tracking**: Available in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing)

### Payment Methods
- **USDC/USDT**: For exchange-funded bounties
- **HBOT tokens**: For Foundation bounties (30-day average price)
- **Processing fee**: 20% for USDC/USDT, 10% for HBOT

### Payment Requirements
- Completed contributor form
- Merged PR to development branch
- Passed QA testing
- Valid payment information

## Ongoing Opportunities

### Maintenance Bounties
After building a connector, you may be assigned:
- **Bug fixes**: Issues reported by users
- **API updates**: Compatibility with exchange changes
- **Feature enhancements**: New functionality requests
- **Performance optimization**: Speed and efficiency improvements

### Career Development
Successful connector developers often:
- Become trusted maintainers of multiple exchanges
- Lead larger integration projects
- Join Foundation as contractor contributors
- Build relationships with exchange partnerships

## Technical Resources

### Documentation
- [Connector Development Guide](/developers/connectors/)
- [Spot Connector Checklist](../developers/connectors/spot-connector-checklist.md)
- [Perp Connector Checklist](../developers/connectors/perp-connector-checklist.md)
- [Testing Guidelines](../developers/connectors/test.md)

### Community Support
- **Discord**: #developer channel for technical questions
- **GitHub**: Discussions for development feedback
- **Foundation team**: Direct support for assigned bounties
- **Peer developers**: Connector contributor community

## Success Tips

### For New Contributors
- Start with simpler CEX spot connectors
- Study existing connector implementations
- Ask questions early and often
- Test thoroughly on testnet first
- Maintain regular communication

### For Experienced Developers
- Consider complex DEX integrations
- Lead connector upgrade projects
- Mentor new contributors
- Contribute to technical standards

## Getting Started

Ready to earn bounties building exchange connectors?

[View Open Bounties →](https://github.com/orgs/hummingbot/projects/7/views/1){: .md-button .md-button--primary }
[Complete Contributor Form →](https://forms.gle/uArBWsSqCYHBWTcz9){: .md-button }
[Join Discord →](https://discord.gg/hummingbot){: .md-button }