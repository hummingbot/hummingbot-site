# Hummingbot Gateway

## What is Gateway?

Hummingbot Gateway, sometimes called Gateway-V2, is standalone API middleware that helps Hummingbot and other trading clients to connect to decentralized exchanges (DEX) on various blockchain networks. 

Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs.

Essentially, Gateway is a light web server that enables Hummingbot to send and receive data from different blockchain protocols and provides an easier entry point for external devs to build connectors to other protocols.

## How to use Gateway

Following the guides below to install, configure and use Gateway:

- [Installation](installation.md): How to install Gateway from source or via Docker
- [Testing with Postman](testing.md): How to test Gateway API endpoints on a standalone basis using Postman and other tools
- [Using Gateway with Hummingbot ](setup.md): How to send commands to Gateway from Hummingbot
- [Working with Tokens](tokens.md): Adding tokens, approving tokens and getting testnet tokens
- [Running DEX Bots](running-dex-bots.md): How to run the `amm-arb` strategy and scripts that use Gateway DEX connectors
- [Adding Connectors](adding-dex-connectors.md): Developer guide for contributing new DEX connectors into the open source Gateway codebase
- [API Reference](api-reference.md): List of the API endpoints that each DEX type exposes

## Supported DEXs

See [Exchanges](/exchanges) for the DEXs that Gateway currently supports. All DEXs with either the **AMM** and **AMM-RANGE** labels are Gateway connectors, along with certain **CLOB** DEX connectors.

## Supported Chains

See [Chains](/chains) for a list of blockchains and their networks that Gateway currently supports.

## History

See the following blog posts from CoinAlpha CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](https://blog.hummingbot.org/gateway-v2-code-architecture/)
* [Hummingbot Gateway V2 Architecture - Part 2](https://blog.hummingbot.org/gateway-architecture-part-2/)

!!! note
    [Gateway-V1](https://github.com/CoinAlpha/gateway-api) is a deprecated version of Gateway compatible with pre-1.0 Hummingbot releases that is no longer supported.
