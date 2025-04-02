## Gateway (Legacy) Connectors

Each Gateway connector is a folder in the [Gateway](/gateway) repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors) or [chains](https://github.com/hummingbot/gateway/tree/main/src/chains).

Run `gateway list` in the Hummingbot client or the `GET /connectors` endpoint to see a DEXs that Gateway currently supports.

See [Chains](/chains) for a list of blockchains and their networks that Gateway currently supports.

## How to use Gateway

Following the guides below to install, configure and use Gateway:

- [Installation](installation.md): How to install Gateway from source or via Docker
- [Testing with Postman](testing.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Using Gateway with Hummingbot ](setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](tokens.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase

## History

See the following blog posts from CoinAlpha CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](https://blog.hummingbot.org/gateway-v2-code-architecture/)
* [Hummingbot Gateway V2 Architecture - Part 2](https://blog.hummingbot.org/gateway-architecture-part-2/)
