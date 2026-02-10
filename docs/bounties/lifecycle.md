# Bounty Lifecycle

This page outlines the complete lifecycle of connector bounties from initial contact through development, testing, and maintenance.

## Exchange Onboarding Process

### 1. Initial Contact
Exchange reaches out via Discord or email to discuss connector integration needs. Foundation schedules introduction call to understand requirements.

### 2. Technical Review & Pricing

Foundation reviews exchange API documentation to confirm:

- Compatibility with Hummingbot standards
- Required connector types (CLOB, AMM, etc.)
- WebSocket/REST API capabilities
- Development complexity assessment

After review, Foundation quotes a price for the Bounty Management service ranging from **$10,000 to $25,000** depending on scope. Factors that affect pricing include:

- **Exchange API robustness**: Well-documented, stable APIs reduce development effort
- **Connectors required**: Spot only vs Perp only vs Spot + Perp
- **CEX vs DEX**: DEX integrations may involve additional complexity
- **New vs established exchange**: Newer exchanges typically require more development work

### 3. Bounty Management Agreement

Exchange proceeds with quoted service:

- Sign [escrow agreement](https://hummingbot-foundation.notion.site/Connector-Bounty-Escrow-Agreement-template-1eac9b8ea4f780d19afee59abed1fe1e)
- Transfer funds via crypto or wire
- 90-day delivery guarantee with full refund if not completed
- 1 year maintenance included

### 4. Bounty Creation

Foundation posts bounties to [Bounties Board](https://github.com/orgs/hummingbot/projects/7/views/1):

- New connector development bounties
- Testing and QA bounties
- Documentation bounties

## Developer Assignment Process

### 5. Developer Applications

Qualified developers apply by commenting on GitHub issues with:

- Relevant experience
- Estimated timeline
- Portfolio samples

### 6. Assignment Decision

Foundation assigns based on:

- Past Hummingbot contributions
- Technical expertise
- Communication skills
- Realistic timelines

### 7. Development Phase

Assigned developer:

- Reviews API documentation
- Implements connector following standards
- Reports progress via GitHub
- Receives Foundation support

## Review & Testing Process

### 8. Pull Request Submission

Developer submits PR with:

- Complete implementation
- Test coverage
- Documentation updates
- Standards compliance

### 9. Engineering Review

Foundation engineers review using:

- [Spot Connector Checklist](../connectors/connectors/spot-connector-checklist.md)
- [Perp Connector Checklist](../connectors/connectors/perp-connector-checklist.md)


Focus areas:

- Code quality and security
- Integration compatibility
- Performance optimization

### 10. QA Testing

QA team performs testing using:

- [Spot QA Checklist](../connectors/connectors/test.md)
- [Perp QA Checklist](../connectors/connectors/test-perp.md)


Testing includes:

- Functional verification
- Integration testing
- Performance benchmarks
- Security assessment

### 11. Exchange Validation

For Bounty Management service, exchange may:

- Review functionality
- Test with their systems
- Provide feedback
- Approve for production

## Governance & Release

### 12. New Connector Proposal

Foundation creates and manages:

- NCP for community approval
- Required HBOT staking
- 7-day voting period
- Community advocacy

### 13. Official Release

Upon approval:

- Merged to monthly release
- Documentation published
- Marketing announcement
- Added to supported exchanges

## Payment Processing

### Developer Payments
- Processed after PR merge
- Within 30 days
- Currency as specified in bounty
- Marked as "Paid" on board

### Exchange Payments
- $10,000-$25,000 upfront via escrow (based on scope)
- Covers all development bounties
- Includes 1 year maintenance

## Maintenance Phase

### Year 1 - Included

Foundation manages ongoing bounties for:

- Bug fixes ($125-625)
- API updates ($500-1,250)
- Feature additions ($400-800)
- Performance optimization ($250-500)

### Year 2+ - Renewal Options

- Continue management: $2,000/year
- Affiliate offset: Waived if affiliate revenue >$200/month
- Self-maintenance: Exchange takes over
- Foundation provides 60-day renewal notice before expiration

## Timeline Summary

**Typical: 7-12 weeks | Guaranteed: 90 days or full refund**

- Assignment: 1-2 weeks (finding and vetting qualified developers)
- Development: 4-6 weeks
- Testing & QA: 1-2 weeks
- Release Inclusion: 1-2 weeks

## Quality Assurance

Foundation ensures quality through:

- Multiple review phases
- Comprehensive testing
- Exchange validation
- Community feedback
- Developer reassignment if needed

## Refund Guarantee

Full refund of escrowed funds if connector is not successfully built and integrated within 90 days due to:

- No pull request meeting acceptance criteria passes QA after reasonable remediation attempts
- Technical incompatibility or exchange API issues preventing completion

Refund requests processed within 14 business days of validation.
