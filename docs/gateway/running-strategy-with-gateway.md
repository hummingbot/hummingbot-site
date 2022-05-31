# Running [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy

Currently the gateway V2 only supports the [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy. 
A good way to safely test [amm_arb](https://hummingbot.org/strategies/amm-arbitrage/) strategy is to set it up on Kovan testnet, and arbitrage against Binance in paper trading mode.

Running integration tests with this configuration has the following advantages:

1. Kovan test tokens are easy to obtain - just go to [https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/).
2. No actual CEX account, or CEX balance is required to perform testing.

## Obtaining Testnet Tokens

If you’re testing on Kovan, go to [https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/). You’ll be provided with the following testnet tokens:

- 1 ETH
- 1 WETH
- 500 DAI

If you’re testing on Avalanche, go to [https://faucet.avax-test.network/](https://faucet.avax-test.network/). You’ll be provided with 2 testnet AVAX.

### Connecting Wallets

Start Hummingbot, and issue the following commands to connect to your test wallet.

```bash
# Connecting Ethereum wallet to Uniswap protocol
>>> gateway connect uniswap

# Connecting AVAX wallet to Pangolin protocol
>>> gateway connect pangolin
```

!!! warning
    **Ensure to remove private keys from clipboard once used.**

## Setting Up Global Configuration

You’ll need to enable debug console to allow triggering arbitrage transactions later. Also, you should set up some appropriate paper trade account balance to allow `amm_arb` to trade on both sides.

e.g. you’re going to set up `amm_arb` to trade between WETH-DAI Uniswap / Kovan vs. ETH-USDT on Binance paper trade. Then, you’ll need to set up some initial ETH and USDT balance on the paper trade account in `conf_global.yml` . Here’s an example setup you can use for the global config.

```yaml
debug_console: true
paper_trade_account_balance:
  ETH: 10
  USDT: 30000
```

## Setting Up `amm_arb` Strategy

Use `create` command to set up an `amm_arb` strategy. Make sure you’re trading between a test-net gateway connector, vs. a CEX in paper trading mode. Also, use small order amounts so you don’t burn up all your test tokens in just one order.

Here’s an example config:

```yaml
Connector 1: uniswap_ethereum_kovan
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

## Starting `amm_arb` Strategy

Use the `start` command, and then answer `Yes` when asked to confirm the strategy settings.

After starting the `amm_arb` strategy, you’ll see the apparent prices on the AMM market will track the prices on the CEX exchange - and if there is none, the strategy will report no arbitrage opportunities.


## Testing on Pangolin

Testing on Pangolin needs to be done on Avalanche mainnet. There is no easy way to test Pangolin on Avalanche’s Fuji testnet. This implies real Avalanche tokens will be needed to perform tests.

Below are some recommended steps for performing tests on Pangolin.

**Preparations**

1. Buy 2 AVAX from a real exchange, and send to test wallet.
2. Go to the [Pangolin Exchange website](https://app.pangolin.exchange/#/swap), and wrap 0.8 AVAX into WAVAX.
3. Trade 0.8 AVAX into USDT.e
4. In Hummingbot, issue `gateway connect pangolin`, and connect using the private key of the test wallet. Remember to clear out your clipboard by copying some other stuff into it, after pasting the private key.
5. Add some entries AVAX and USDT to the paper trading balance in `conf_global.yml`.

**Strategy Setup**

1. Set up an `amm_arb` strategy to trade between Pangolin on Avalanche, vs. Binance paper trade. Use `WAVAX-USDT.e` as the trading pair on Pangolin, and `AVAX-USDT` as the trading pair on Binance paper trade. Set a reasonably small order size to avoid burning through your wallet balance in one trade. e.g.

    
    ```yaml
    Connector 1: pangolin_avalanche_avalanche
    Market 1: WAVAX-USDT.e
    Connector 2: binance_paper_trade
    Market 2: AVAX-USDT
    Order amount: 0.05
    Min profitability: 1
    Market 1 slippage buffer: 1
    Market 2 slippage buffer: 0
    Concurrent orders submission: Doesn't matter, choose any
    ```
    

1. Enable debug price shim in the strategy config by issuing `config debug_price_shim True` in Hummingbot console.
2. Start the strategy.
3. Use `GatewayPriceShim`, as detailed in the last section, to trigger arbitrage opportunities on the AMM side. Feel free to use relatively large price deltas (e.g. `Decimal(40)`) to trigger arbitrage orders - because small order sizes would require a large price delta to cover gas costs.

### Useful sites

- Avalanche node provider
    - [https://moralis.io/](https://moralis.io/)
- Kovan tokens faucet
    - [https://faucet.paradigm.xyz/](https://faucet.paradigm.xyz/)
- Test ETH faucets
    - [https://faucets.chain.link/](https://faucets.chain.link/)
- AVAX faucets:
    - [https://faucet.avax-test.network/](https://faucet.avax-test.network/)
- Uniswap Kovan
    - [https://kovan-uniswap.netlify.app/swap](https://kovan-uniswap.netlify.app/swap)