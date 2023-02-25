Now that you have properly installed, tested, and configured Gateway, it's time to run a bot that calls the Gateway DEX endpoints.

You can either run the AMM-Arbitrage Strategy, or the sample Scripts that utilize Gateway if you want more fine-grained control.

## AMM-Arbitrage Strategy

A good way to safely test Gateway is to run the [AMM-Arbitrage](/strategies/amm-arbitrage) strategy between a testnet DEX connector and a CEX connector in paper trading mode.

The guide below shows you how to run this strategy using the `uniswap-ethereum-goerli` connector versus the `binance-paper-trade` connector.

### Setup

1. Connect a wallet to Uniswap Goerli with `gateway connect uniswap`. Afterwards, you should be able to see `uniswap_ethereum_goerli` when you run `balance.`

2. Convert some test ETH into WETH and DAI on [Uniswap](https://app.uniswap.org/#/swap).

3. Approve both WETH and DAI - see [Working with Tokens](./tokens) for more details.

4. Make sure that your wallet still have a balance of at least 0.2 test ETH for gas costs.

5. Check your paper trading balances with `balance paper` and [add balances](/global-configs/paper-trade/#adding-paper-trade-balance) for ETH and USDT if needed.

### Create strategy

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

### Run strategy

Use the `start` command, and then answer `Yes` when asked to confirm the strategy settings.

After starting the `amm_arb` strategy, you’ll see the apparent prices on the AMM market will track the prices on the CEX exchange - and if there is none, the strategy will report no arbitrage opportunities.

## Sample Gateway Scripts
