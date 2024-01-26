# Hummingbot Gateway

!!! warning "DEX / Blockchain Experience Needed"
    Since running DEX trading bots successfully is more complex and entails more specialized blockchain engineering than running CEX bots, we recommend Gateway for users with prior blockchain engineering or DEX trading experience.

## What is Gateway?

Hummingbot Gateway is open source API middleware that helps the Hummingbot client to connect to decentralized exchanges (DEX) on various blockchain networks. 

Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs.

Essentially, Gateway is a light web server that enables Hummingbot to send and receive data from different blockchain protocols and provides an easier entry point for external devs to build connectors to other protocols.

## Gateway Connectors

Each Gateway connector is a folder in the [Gateway](/gateway) repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors) or [chains](https://github.com/hummingbot/gateway/tree/main/src/chains).

See [DEX Connectors](/dex-connectors) for the DEXs that Gateway currently supports, which are listed in the **Connection** column.

See [Chains](/chains) for a list of blockchains and their networks that Gateway currently supports.

The [`hummingbot/connector/gateway`](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/gateway) folder contains the sub-standards that are currently supported:

  * amm
  * amm_lp
  * amm_perpetual
  * clob_perp
  * clob_spot

## How to use Gateway

Following the guides below to install, configure and use Gateway:

- [Installation](installation.md): How to install Gateway from source or via Docker
- [Testing with Postman](testing.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Using Gateway with Hummingbot ](setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](tokens.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase

## API Endpoints

Gateway included a Swagger-based API documentation server that is provided at <http://localhost:8080> when Gateway is started. The documentation provides a list of the Gateway API endpoints and examples on how to use them.


## History

See the following blog posts from CoinAlpha CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](https://blog.hummingbot.org/gateway-v2-code-architecture/)
* [Hummingbot Gateway V2 Architecture - Part 2](https://blog.hummingbot.org/gateway-architecture-part-2/)
