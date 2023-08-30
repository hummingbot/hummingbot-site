Now that you have properly installed, tested, and configured Gateway, it's time to run a bot that calls the Gateway DEX endpoints.

You can either run the AMM-Arbitrage Strategy, or the sample Scripts that utilize Gateway if you want more fine-grained control.

!!! note "Approval needed!"
    Currently, if any tokens do not have sufficient **allowance**, both strategies and scripts will not start and the logs will show messages like `[connector] is not ready. Please wait...` continually. See [Approving tokens](tokens.md) for information on how to approve tokens.

## AMM-Arbitrage Strategy

A good way to safely test Gateway is to run the [AMM-Arbitrage](../strategies/amm-arbitrage.md) strategy between a testnet DEX connector and a CEX connector in paper trading mode.

The guide below shows you how to run this strategy using the `uniswap-ethereum-goerli` connector versus the `binance-paper-trade` connector.

### Setup

1. Connect a wallet to Uniswap Goerli with `gateway connect uniswap`. Afterwards, you should be able to see `uniswap_ethereum_goerli` when you run `balance.`

2. Convert some test ETH into WETH and DAI on [Uniswap](https://app.uniswap.org/#/swap).

3. Approve both WETH and DAI - see [Working with Tokens](tokens.md) for more details.

4. Make sure that your wallet still have a balance of at least 0.2 test ETH for gas costs.

5. Check your paper trading balances with `balance paper` and [add balances](/global-configs/paper-trade/#adding-paper-trade-balance) for ETH and USDT if needed.

### Create strategy

Use `create` command to set up an [`amm_arb` strategy](../strategies/amm-arbitrage/). Answer the question prompts presented so that you to generate the following configuration:

```yaml
template_version: 5
strategy: amm_arb
connector_1: uniswap_ethereum_goerli
market_1: WETH-DAI
connector_2: binance_paper_trade
market_2: ETH-USDT
min_profitability: 1.0
market_1_slippage_buffer: 1.0
market_2_slippage_buffer: 0.0
concurrent_orders_submission: false
debug_price_shim: false
gateway_transaction_cancel_interval: 600
```

Alternatively, you can copy the section above into a `*.yml` file and use the `import` command to import it as a strategy.

### Run strategy

Use the `start` command, and then answer `Yes` when asked to confirm the strategy settings.

After starting the `amm_arb` strategy, you’ll see the apparent prices on the AMM market will track the prices on the CEX exchange, and if there is none, the strategy will report no arbitrage opportunities. 

When it detects an arbitrage opportunity where the total cost to execute the transactions (including gas and fees) still results in a profit higher than (`min_profitability`), then the bot will automatically execute the two transactions.

If `concurrent_orders_submission` is false, then the bot will try to execute and confirm the transaction on `connector_1` before executing the transaction on `connector_2`.

### Triggering arbitrage with `debug_price_shim`

On testnets like Goerli, prices are typically out of line with CEXs, so getting transactions executed is trivial. However, when testing on mainnets, triggering an arbitrage transaction may be trickier.

One option is to set the `min_profitability` to be negative, but that may result in losses when testing on mainnet. Therefore, we have added a `debug_price_shim` feature that lets you modify the apparent prices on the AMM market in the [Debug Console](/developers/debug/) and trigger mock arbitrage transactions.

To use this feature, set `debug_price_shim` to True in your `amm-arb` configuration, either by modifying the config file or running the `config` command:

```python
>>> config debug_price_shim True
```

Let’s say you want to raise the WETH prices on the AMM connector by 40 USDT, in order to trigger a sell on the AMM connector and a buy on the CEX connector. 

The code snippet below will cause `amm_arb` to send sell transactions to Uniswap Goerli and simulated buys on Binance paper trade market. The price delta will persist in the AMM market for 1 minute. Afterwards, it’ll return back to tracking the CEX paper trade market.

```python
from hummingbot.connector.gateway_price_shim import GatewayPriceShim
from decimal import Decimal
GatewayPriceShim.get_instance().apply_price_delta("uniswap", "ethereum", "goerli", "WETH-DAI", Decimal(40))
```

Conversely, if you want to trigger buys on the AMM side and sells on the CEX paper trade side, you can give negative delta prices to make WETH-DAI on the AMM side cheaper.

```python
GatewayPriceShim.get_instance().apply_price_delta("uniswap", "ethereum", "goerli", "WETH-DAI", Decimal(-40))
```

Again, the negative delta price will persist on the AMM market for 1 minute.

If the price delta isn’t enough to trigger an arb opportunity due to high gas fees, feel free to use large delta values, e.g. `Decimal(200)` or even `Decimal(500)`. While the price deltas needed seem unrealistically large - this is reflective of real trading constraints because a small order size would need a large price delta to cover the gas fees.

## Sample Gateway scripts

You can also run the following sample Gateway scripts in the `/scripts/` folder of the Hummingbot repo:

* [`amm_price_example.py`](https://github.com/hummingbot/hummingbot/blob/master/scripts/amm_price_example.py): Fetches and prints the price from an AMM connector

* [`amm_trade_example.py`](https://github.com/hummingbot/hummingbot/blob/master/scripts/amm_trade_example.py): Fetches the price from an AMM connector and executes a trade using that price
