# Checking Balances

## Exchange and wallet balance

Run `balance` command to check the balances of all connected wallets and exchanges.

![](/assets/img/balance-command.png)

**Allocated** column shows how much of your assets are being used when there are active orders.

## Paper trade balance

Run `balance paper` to check your paper trade account balance.

![](/assets/img/balance-paper.png)

By default, these are the paper trade balances pre-loaded in Hummingbot. You can also enter additional assets and credits to use in paper trade mode.

- [Adding Paper Trade Balance](/global-configs/paper-trade/#adding-paper-trade-balance)

## Limit option

Run `balance limit` to check your exchange specific limit that are set in global configs 

```yaml
    # Balance Limit Configurations
    # e.g. Setting USDT and BTC limits on Binance.
    # balance_asset_limit:
    #   binance:
    #     BTC: 0.1
    #     USDT: 1000
    balance_asset_limit:
    coinflex_test: {}
    gate_io: {}
    binance: {}
    binance_us: {}
```

## Rate Oracle

when running the `balance` command the rate oracle uses the global_token from [configuration](https://docs.hummingbot.org/strategy-configs/rate-oracle/#parameters) as the base token for calculating balances. The default values are as follows:

```yaml
    # A universal token which to display tokens values in, e.g. USD,EUR,BTC
    global_token:
    global_token_name: USD
    global_token_symbol: $
```

The default value of the balance is calculated using the default USD as base. The reason some exchanges will show 0 as their total is not having USD based pairs. To change that, simply change the global_token to another token such as USDT, USDC, DAI…

### How it works?

The rate oracle loops through all connected exchanges and check for the assets available under each exchange. Afterwards, it fetches the price of the pair of each asset with the global token and calculates the value of the assets to be displayed. The values are added together to display the Exchanges Total.

