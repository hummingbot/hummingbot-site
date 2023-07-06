# Gate.io

**Support Hummingbot by creating an account using our [referral link](https://www.gate.io/signup/5868285)!** 🙏🙏🙏

## ℹ️ Info

- Type: Centralized
- Website: <https://www.gate.io>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/gate-io/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/gate-io>
- API docs: <https://www.gate.io/docs/apiv4/en/index.html>
- API version: 4
- Fees: <https://www.gate.io/fee?>
- Supported countries: <https://www.gate.io/help/c2c/c2ctrade/21130/Which-Counties-Regions-are-supported-by-our-OTC-Services>

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white)

HBOT holders voted this exchange into the Silver tier for the current [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

**Maintainer:** Hummingbot Foundation

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**

Gate.io is supported on [Hummingbot Miner](https://miner.hummingbot.io/), a platform that rewards users for providing liquidity on specific trading pairs.

**Past**

* [Gate.io Trading Competition: Results and Retrospective](https://blog.hummingbot.org/gate-io-trading-competition-result-and-retro/)

## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*

- List any Hummingbot-related blog posts or videos with content specific to this exchange, from us and 3rd parties

## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/gate_io)

### How to Connect

From inside the Hummingbot client, run `connect gate_io`:

```
>>> connect gate_io

Enter your gate_io API key >>>
Enter your gate_io secret key >>>
```

If connection is successful:

```
You are now connected to gate_io
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_spot_candles)

[Candles Feed](/scripts/candles-feed) allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair on this exchange, the following candle intervals are supported:

- `10s`
- `1m`
- `5m`
- `5m`
- `15m`
- `30m`
- `1h`
- `4h`
- `8h`
- `1d`
- `7d`
- `30d`

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Paper Trading

Access the [Paper Trade](/global-configs/paper-trade/) version of this connector by running `connect gate_io_paper_trade` instead of `connect gate_io`.

If this is not available by default, you can configure Hummingbot to add this paper trade exchange. See [Adding Exchanges](/global-configs/paper-trade/#adding-exchanges) for more information.

## 🔀 Perp Connector
*Connector to perpetual futures markets*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/derivative/gate_io_perpetual)

### How to Connect

From inside the Hummingbot client, run `connect gate_io_perpetual`:

```
>>> connect gate_io_perpetual

Enter your gate_io_perpetual API key >>>
Enter your gate_io_perpetual secret key >>>
Enter your gate_io_perpetual user id >>>
```

If connection is successful:

```
You are now connected to gate_io_perpetual
```

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `LIMIT_MAKER`
- `MARKET`

### Position Modes

This connector supports the following position modes:

- One-way
- Hedge

### Candles Feed

- [Candles Feed folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/data_feed/candles_feed/gate_io_perpetual_candles)

Candles Feed allows you to use custom OHLCV candles and indicators in your scripts and strategies. For each pair, you can fetch candles using the following intervals:

- `10s`
- `1m`
- `5m`
- `5m`
- `15m`
- `30m`
- `1h`
- `4h`
- `8h`
- `1d`
- `7d`
- `30d`

```
CODE EXAMPLE SHOWING USAGE IN A SCRIPT
```

### Testnets

If testnets are supported, show how to connect to them:

```
CODE EXAMPLE SHOWING HOW TO CONNECT
```
