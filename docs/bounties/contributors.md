# Developer Guide

This guide is for developers interested in earning bounties by building and maintaining exchange connectors for Hummingbot.

## Getting Started

### Step 1: Complete Application

Fill out the [New Bounty Contributor Form](https://forms.gle/uArBWsSqCYHBWTcz9) for compliance. After approval, you'll receive:

- **bounty-contributor** label in Discord
- Access to contributor channels
- Ability to apply for bounties

### Step 2: Browse Available Bounties

Visit the [Bounties Board](https://github.com/orgs/hummingbot/projects/7) to find connector bounties.

## Types of Bounties

### New Connector Development

Build complete exchange integrations:

- **CLOB CEX**: Centralized exchange spot and perpetual connectors
- **CLOB DEX**: Decentralized exchange spot and perpetual connectors
- **Gateway AMM**: Automated market makers and DeFi protocols

### Maintenance Bounties

Comprehensive connector maintenance including:

- **Bug fixes**: Resolve issues and edge cases
- **API updates**: Maintain compatibility with exchange changes
- **Feature enhancements**: Add new functionality and improvements
- **Documentation**: Update guides and technical documentation

## Application Process

### How to Apply

Comment on the GitHub issue with:

- Your background and experience
- Technical expertise (Python for CLOB, TypeScript for AMM)
- Portfolio of previous work
- Estimated completion timeline
- Any clarification questions

### Selection Criteria

Foundation evaluates based on:

- Technical competence
- Past Hummingbot contributions
- Communication skills
- Realistic timelines

## Development Requirements

### CLOB Connectors

- Order management (place, cancel, modify)
- WebSocket market data streaming
- Authentication and security
- Error handling and reconnection
- Rate limit management
- Comprehensive testing

### AMM Connectors

- Smart contract integration
- Wallet connectivity
- Token/pool queries
- Swap execution
- Gas optimization
- Transaction monitoring

### Development Standards

- Follow [Connector Development Guidelines](/developers/connectors/)
- Use established coding patterns
- Implement error handling
- Add test coverage
- Document your code
- Provide regular updates

## Submission Process

### Pull Request Requirements

Point PR to `development` branch with:

- Reference to bounty issue number
- Clear summary of changes
- Evidence of testing
- Updated documentation
- Passing linting and style checks

### Code Review

Your PR will be reviewed for:

- Functionality and acceptance criteria
- Code quality and standards
- Security and error handling
- Performance optimization
- Integration compatibility

### QA Testing

Foundation QA uses:

- [Spot Connector QA Checklist](../developers/connectors/test.md)
- [Perp Connector QA Checklist](../developers/connectors/test-perp.md)


Testing covers:

- Order lifecycle
- Market data accuracy
- Error handling
- Performance metrics
- Strategy compatibility

## Payment Information

### Payment Timeline

- Processed within 30 days after PR merge
- Monthly distribution cycles
- Tracked in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing)

### Payment Methods

- **USDC/USDT**: Exchange-funded bounties
- **HBOT tokens**: Foundation bounties (30-day average price)
- **Processing fee**: 20% for stablecoins, 10% for HBOT

## Support Resources

### Documentation

- [Connector Development Guide](/developers/connectors/)
- [Spot Connector Checklist](../developers/connectors/spot-connector-checklist.md)
- [Perp Connector Checklist](../developers/connectors/perp-connector-checklist.md)
- [Testing Guidelines](../developers/connectors/test.md)

### Community Support

- **Discord**: #developer channel
- **GitHub**: Discussions and issues
- **Foundation team**: Direct support for assigned bounties

## Important Notes

- Developers can only work on one bounty at a time
- Regular progress updates expected (7+ days inactive may result in reassignment)
- Foundation provides weekly check-ins and technical guidance
- All connectors must meet Hummingbot standards

[View Open Bounties →](https://github.com/orgs/hummingbot/projects/7/views/1){: .md-button .md-button--primary }
[Complete Contributor Form →](https://forms.gle/uArBWsSqCYHBWTcz9){: .md-button }
[Join Discord →](https://discord.gg/hummingbot){: .md-button }