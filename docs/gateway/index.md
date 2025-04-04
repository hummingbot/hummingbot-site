## What is Gateway?

Hummingbot Gateway is open source API middleware that helps the Hummingbot client to connect to decentralized exchanges (DEX) on various blockchain networks. 

A companion codebase to the Hummingbot, Gateway manages interfacing with DEX connectors and exposes standard REST API endpoints for trading and liquidity-related functionality on these DEXs, enabling Hummingbot to run strategies that operate across multiple CEX and DEXs.

The [Gateway code repo](https://github.com/hummingbot/gateway) is open sourced under the Apache 2.0 license and updated using the same [release cycle](/release-notes) as the main Hummingbot client codebase.


## New vs Legacy

Gateway is currently undergoing a large multi-release codebase refactoring, approved in proposal [NCP-22](https://snapshot.box/#/s:hbot-ncp.eth/proposal/0x5cc3540ee219787d5c842bc1ccdb11aab46203bb7f0be658b6b40858501a8e4c). During this refactoring process, not all connectors are available in the new version, as they are being gradually migrated from the legacy architecture. 

We will maintain two versions of Gateway throughout this transition period to ensure users can continue using all supported connectors while the migration progresses. Both versions are compatible with the latest upgrades and strategies in the Hummingbot client.

- [New (v2.5+)](new/index.md): The latest version with a chain-agnostic design, supporting Swap, AMM, and CLMM connector types. This version is more flexible and designed for future expansion.

- [Legacy (v2.2)](legacy/index.md): The previous version that supports a wider range of chains and networks but with a more rigid architecture. This version will continue to be maintained while the refactor is in progress.

## Supported Chains

Each DEX utilizes a chain connector that integrates a Layer 1 blockchain and their networks into Gateway, enabling wallet access, node RPC interactions, and other support needed by tje DEX.

Chain support in Gateway is determined by the decentralized exchanges (DEX) that HBOT holders vote to be included in the Hummingbot codebase in quarterly [Exchange Connector Polls](/governance/polls) for each [Epoch](/governance/epochs). The main chains and networks where each DEX is deployed will be supported in subsequent releases of Hummingbot and Gateway.

Legacy Gateway (v2.2 and before) supported a wide range of chains and their networks including Ethereum, Algorand, Avalanche, BNB Chain, Cosmos, Cronos, Ethereum Classic, Osmosis, Polygon, and Solana. However, its inflexible route architecture tight coupling with the Hummingbot client made it difficult to support more types of trading interactions.

The new version of Gateway (v2.5+) is more flexible and chain-agnostic. Initially, it supports only a few base chain architectures along with any network that is compatible with them, starting with networks based on the Solana and Ethereum-based virtual machines.

See [Supported Chains](chains/index.md) the list of chains and their DEXs supported by Gateway.

## History

See the following blog posts from Hummingbot co-founder and original CTO Martin Kou for more information about Gateway's history, background, and intended developer experience:

* [Hummingbot Gateway V2 Architecture - Part 1](/blog/hummingbot-gateway-architecture---part-1/)
* [Hummingbot Gateway V2 Architecture - Part 2](/blog/hummingbot-gateway-architecture---part-2/)
