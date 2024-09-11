## What types of connector bounties will the Foundation handle?

Only CLOB (Spot), CLOB (Perp), and AMM connectors.

## What types of strategies bounties will the Foundation handle?

Only [Controllers](/v2-strategies/controllers/index.md) for directional strategies and market making strategies.

## Can multiple users fund a single bounty?

Yes, multiple users can fund the same bounty.

## What does the preliminary check for new connectors entail?

Before users fund a new connector bounty, the Foundation's engineering team performs a preliminary check of the exchange API documentation to ensure the exchange is compatible with Hummingbot's connector standards and has the necessary WebSocket/REST API endpoints to be integrated into Hummingbot.

### What tests do developer need to write?

- CLOB connectors: unit tests
- AMM connectors: curl tests, optional unit tests (in `test-bronze` folder)

