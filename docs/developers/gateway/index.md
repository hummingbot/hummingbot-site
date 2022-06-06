---
tags:
- gateway
- gateway-v2
---

!!! note
    Gateway-V2 takes an exchange-first approach that makes building DEX connectors much easier for developers. There exists [an earlier version of Gateway](https://github.com/CoinAlpha/gateway-api) compatible with pre-1.0 Hummingbot releases that has been deprecated and is no longer supported.

## Background

Hummingbot Gateway-V2, henceforth called **Gateway**, is API middleware that allows Hummingbot to connect to decentralized exchanges on various blockchain protocols that are used in the [amm-arb strategy](/strategies/amm-arbitrage/) and other strategies. Essentially, Gateway is a light web server that enables Hummingbot client to send and receive data from different blockchain protocols and provides an easier entry point for external devs to build connectors to other protocols.

This page explains how to install and test Gateway from a developer's standpoint, so that DEXs can add their own connectors and traders can customize and modify Gateway's behavior.

See [History](/gateway/history) in the main Gateway section for more information about Gateway's history, background, and intended developer experience.

## Building on Gateway

* [Setup](./setup): Install and configure Gateway
* [Running AMM-ARB with Gateway](./running-amm-arb): Developer-oriented tutorial that shows you how to test out the [`amm-arb`](/strategies/amm-arbitrage) strategy with Gateway 
* [Developing Gateway Connectors](./gateway-connectors): Guide to develop Gateway V2 connectors for decentralized exchanges. 