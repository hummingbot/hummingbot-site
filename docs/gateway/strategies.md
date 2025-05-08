!!! note
    This documentation is a work in progress and will be updated frequently as the Gateway connectors and strategies evolve. The examples shown here may change as new features are added or existing ones are modified.

This page provides examples of Hummingbot strategies and scripts that utilize the [Gateway New](./new/index.md) connectors.

## Swap schema

The [Swap schema](/gateway/schemas/#swap-schema) defines standardized endpoints for basic token swapping functionality. Connectors that implement this schema allow Hummingbot to query prices and execute trades on DEXs. The following strategies can utilize connectors that implement the Swap schema:

| Strategy | Strategy Type | Notes |
| -------- | ------------- | ----- |
| [AMM Price Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_price_example.py) | Script | Fetches current price from a Gateway connector |
| [AMM Trade Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py) | Script | Triggers a swap execution when prices reach a certain level |
| [AMM Data Feed Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py) | Script | Creates a price feed using a Gateway connector |
| [Arbitrage Controller](https://github.com/hummingbot/hummingbot/blob/master/controllers/generic/arbitrage_controller.py) | V2 | Creates [ArbitrageExecutors](/v2-strategies/executors/arbitrage-executor/) between two markets |
| [AMM Arbitrage](/strategies/amm-arbitrage/) | V1 | |
| [Cross Exchange Market Making](/strategies/cross-exchange-market-making/) | V1 | | Gateway connector can be used as taker market

## AMM schema

The [AMM schema](/gateway/schemas/#amm-schema) defines standardized endpoints for managing liquidity positions on Automated Market Maker (AMM) DEXs like Raydium Standard, Uniswap V2 pools, and Hydration. Sample strategies demonstrating AMM functionality will be available soon.

## CLMM schema

The [CLMM schema](/gateway/schemas/#clmm-schema) defines standardized endpoints for managing concentrated liquidity positions on DEXs like Raydium Concentrated and Uniswap V3 pools. The following strategies can utilize connectors that implement the CLMM schema:

| Strategy | Strategy Type | Notes |
| -------- | ------------- | ----- |
| [CLMM Manage Position](https://github.com/hummingbot/hummingbot/blob/development/scripts/clmm_manage_position.py) | Script | Demonstrates how to manage concentrated liquidity positions |
