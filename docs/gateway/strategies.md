# Gateway Strategies & Scripts

This page provides examples of Hummingbot strategies and scripts that utilize Gateway connectors to interact with decentralized exchanges.

!!! note
    This documentation is a work in progress and will be updated frequently as Gateway connectors and strategies evolve. The examples shown here may change as new features are added or existing ones are modified.

## Gateway Scripts

These scripts demonstrate how to use Gateway connectors for various DeFi operations:

### AMM Data Feed
* **Code**: [amm_data_feed_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.4.0](../release-notes/2.4.0.md)
* **Description**: Demonstrates using `AmmGatewayDataFeed` in Hummingbot to fetch real-time price data from decentralized exchanges (DEXs) such as Uniswap (Ethereum) and Jupiter (Solana). The script initializes two AMM data feeds for specified trading pairs and displays their latest price data when ready.

### AMM Trade
* **Code**: [amm_trade_example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.5.0](../release-notes/2.5.0.md)
* **Description**: Monitors real-time DEX prices using the Gateway connector and automatically executes swaps once specified price thresholds are reached. The script allows users to configure conditions (price above or below a target) and handles trade execution seamlessly on decentralized exchanges like Jupiter on Solana or Uniswap on Ethereum.

### LP Manage Position
* **Code**: [lp_manage_position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py)
* **Author**: [fengtality](https://github.com/fengtality)
* **Release Added**: [2.8.0](../release-notes/2.8.0.md)
* **Description**: Manages liquidity positions on AMM or CLMM pools via Gateway. The script monitors pool prices, opens a position when a target price is reached, and automatically closes the position if the price moves out of range for a specified duration. Supports both traditional AMM pools and concentrated liquidity pools on protocols like Raydium, Uniswap, and Meteora.

## Router Schema

The Router schema defines standardized endpoints for DEX aggregators that find optimal swap routes across multiple liquidity sources. Connectors that implement this schema include Jupiter, 0x, and Uniswap's Universal Router.

### Compatible Scripts & Strategies

| Strategy | Strategy Type | Notes |
| -------- | ------------- | ----- |
| [AMM Trade Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py) | Script | Triggers a swap execution when prices reach a certain level |
| [AMM Data Feed Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_data_feed_example.py) | Script | Creates a price feed using a Gateway connector |
| [Arbitrage Controller](https://github.com/hummingbot/hummingbot/blob/master/controllers/generic/arbitrage_controller.py) | V2 Controller | Creates [ArbitrageExecutors](/v2-strategies/executors/arbitrage-executor/) between two markets |
| [AMM Arbitrage](/strategies/amm-arbitrage/) | V1 Strategy | Arbitrage between CEX and DEX markets |
| [Cross Exchange Market Making](/strategies/cross-exchange-market-making/) | V1 Strategy | Gateway connector can be used as taker market |

## AMM Schema

The AMM schema defines standardized endpoints for managing liquidity positions on traditional Automated Market Maker (AMM) DEXs that use constant product (x*y=k) formulas, such as:
- Raydium Standard Pools
- Uniswap V2
- PancakeSwap
- SushiSwap

### Compatible Scripts & Strategies

| Strategy | Strategy Type | Notes |
| -------- | ------------- | ----- |
| [LP Manage Position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py) | Script | Manages traditional AMM liquidity positions |
| [AMM Trade Example](https://github.com/hummingbot/hummingbot/blob/development/scripts/amm_trade_example.py) | Script | Executes swaps on AMM pools |

## CLMM Schema

The CLMM schema defines standardized endpoints for managing concentrated liquidity positions on DEXs like:
- Raydium Concentrated Pools
- Uniswap V3
- Meteora DLMM
- QuickSwap V3

### Compatible Scripts & Strategies

| Strategy | Strategy Type | Notes |
| -------- | ------------- | ----- |
| [LP Manage Position](https://github.com/hummingbot/hummingbot/blob/development/scripts/lp_manage_position.py) | Script | Manages concentrated liquidity positions with custom price ranges |

## Running Gateway Scripts

To run any of these Gateway scripts:

1. **Ensure Gateway is running**: Check for `GATEWAY: 🟢 ONLINE` in the Hummingbot client
2. **Connect your wallet**: Use `gateway connect [chain]` to add your wallet
3. **Start the script**: Run `start --script [script_name]`

For configurable scripts, you can create a configuration file:
```shell
create --script-config [script_name]
```

Then run with the configuration:
```shell
start --script [script_name] --conf [config_file]
```

## Example: Running AMM Trade Script

```
>>> gateway connect solana
>>> start --script amm_trade_example

Which connector? (jupiter/raydium/uniswap) >>> jupiter
Which network? >>> mainnet-beta
Base token (you're selling) >>> SOL
Quote token (you're buying) >>> USDC
Target price >>> 145.00
Trigger above? (True/False) >>> True
Amount >>> 1.0

Monitoring SOL-USDC price on Jupiter...
Current price: 143.50 USDC/SOL
Waiting for price to reach 145.00...
```

## Best Practices

1. **Test on testnet first**: Use devnet/testnet networks to test scripts before mainnet
2. **Monitor gas costs**: Check network fees before executing large transactions
3. **Set appropriate slippage**: Configure slippage tolerance based on market volatility
4. **Use hardware wallets**: For production use, consider hardware wallet integration
5. **Review logs**: Check Gateway and Hummingbot logs for debugging

## Additional Resources

- [Gateway Installation](./installation.md)
- [Gateway Commands](./commands.md)
- [Gateway Configuration](./configuration.md)
- [DEX Connectors](./connectors.md)
- [Scripts Repository](https://github.com/hummingbot/hummingbot/tree/development/scripts)