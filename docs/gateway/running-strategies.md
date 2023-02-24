## Running [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy

Currently Gateway only supports the [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy.
A good way to safely test [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy is to set it up on Kovan testnet, and arbitrage against Binance in paper trading mode.

Running integration tests with this configuration has the following advantages:

1. Kovan test tokens are easy to obtain - just go to [https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/).
2. No actual CEX account, or CEX balance is required to perform testing.

### Connecting Wallets

Start Hummingbot, and issue the following commands to connect to your test wallet.

```bash
# Connecting Ethereum wallet to Uniswap protocol
>>> gateway connect uniswap

# Connecting AVAX wallet to Pangolin protocol
>>> gateway connect pangolin
```

!!! warning "Remove private keys from clipboard"
    Make sure to remove the copied private keys from your clipboard after use.

### Setting Up Global Configuration

You’ll need to enable debug console to allow triggering arbitrage transactions later. Also, you should set up some appropriate paper trade account balance to allow `amm_arb` to trade on both sides.

e.g. you’re going to set up `amm_arb` to trade between WETH-DAI Uniswap / Kovan vs. ETH-USDT on Binance paper trade. Then, you’ll need to set up some initial ETH and USDT balance on the paper trade account in `conf_client.yml` . Here’s an example setup you can use for the global config.

```yaml
debug_console: true
paper_trade_account_balance:
  ETH: 10
  USDT: 30000
```

### Setting Up `amm_arb` Strategy

Use `create` command to set up an `amm_arb` strategy. Make sure you’re trading between a test-net gateway connector, vs. a CEX in paper trading mode. Also, use small order amounts so you don’t burn up all your test tokens in just one order.

Here’s an example config:

```yaml
Connector 1: uniswap_ethereum_goerli
Market 1: WETH-DAI
Connector 2: binance_paper_trade
Market 2: ETH-USDT
Order amount: 0.1
Min profitability: 1
Market 1 slippage buffer: 0.05
Market 2 slippage buffer: 0
Concurrent orders submission: choose any
```

After creating the config, use the `config` command to set `debug_price_shim` to True.

```bash
>>> config debug_price_shim True
```

### Starting `amm_arb` Strategy

Use the `start` command, and then answer `Yes` when asked to confirm the strategy settings.

After starting the `amm_arb` strategy, you’ll see the apparent prices on the AMM market will track the prices on the CEX exchange - and if there is none, the strategy will report no arbitrage opportunities.

## Running sample scripts