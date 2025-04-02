## Gateway (Legacy) Connectors

## Gateway Legacy Support

Starting in v2.3, Gateway underwent a major refactor to support a wider range of DEX architectures and simplify adding new connectors. The legacy documentation and code is maintained for users who need to continue using Gateway v2.2.0 or earlier versions.

The Hummingbot `fix/gateway-2.2` branch is compatible with Gateway v2.2.0, which contains the legacy connectors. This branch will be kept updated with `development` while the refactor is in progress.

* Github: <https://github.com/hummingbot/hummingbot/tree/fix/gateway-2.2>
* DockerHub: <https://hub.docker.com/r/hummingbot/hummingbot/tags?name=gateway-2.2>

The Gateway v2.2.0 branch is:

* Gateway Github Repo: <https://github.com/hummingbot/gateway/tree/v2.2.0/src>
* Gateway DockerHub: <https://hub.docker.com/r/hummingbot/gateway/tags?name=version-2.2.0>

## Gateway Connectors

Each Gateway connector is a folder in the [Gateway](/gateway) repository, either in [connectors](https://github.com/hummingbot/gateway/tree/main/src/connectors) or [chains](https://github.com/hummingbot/gateway/tree/main/src/chains).

Run `gateway list` in the Hummingbot client or the `GET /connectors` endpoint to see DEXs that Gateway currently supports.

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
