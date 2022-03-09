An exchange connector integrates with the API of a crypto exchange to enable high-frequency, two-way communication between the Hummingbot client and the exchange.

## Exchange types 

Hummingbot exchange connectors try to standardize trading logic and order types across many different exchanges. Connectors are designed to handle specific exchange types:

* `spot`: Connectors to central limit order book (CLOB) exchanges that trade **spot** markets
* `perp`: Connectors to central limit order book (CLOB) exchanges that trade **perpetual swap** markets
* `amm`: Connectors to automatic market maker (**AMM**) decentralized exchanges

!!! note "Centralized vs decentralized exchanges"
    Hummingbot connects to both centralized and decentralized exchanges. Centralized exchanges require users to enter API keys, while decentralized exchanges require users to connect their wallets to the underlying blockchain [protocols](/protocols).

In the future, Hummingbot aims to extend support to other exchange and asset types. Developers interested in forking Hummingbot to support other types of exchanges can discuss with the community on the **#dev** channels in the Hummingbot Discord.

## Status

Connectors may vary in quality. The Hummingbot Foundation QA team keeps a rough indicator of each connector's working status:

* <span style="color:green; font-size:20px">⬤</span> Connector appears to be working properly.
* <span style="color:yellow; font-size:20px">⬤</span> Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/issues) related to this exchange.
* <span style="color:red; font-size:20px">⬤</span> Connector does not seem to work.

## Maintainer

Connector maintainers are responsible for fixing bugs and updating the connector when the exchange API or the Hummingbot connector spec changes.

## Adding connectors

Developers may submit connectors for review by the Hummingbot Foundation team. Please note the [Contribution Guidelines](/developers/contributions/).

Exchanges and other institutions can visit the [official Hummingbot website](https://hummingbot.io), maintained by CoinAlpha, to discuss different ways to build and maintain connectors.

## List of connectors

### `spot`

| Exchange                                        | Website                                      | Protocol                         | Status                                               | Issues                           |
| ----------------------------------------------- | -------------------------------------------- | -------------------------------- | ---------------------------------------------------- | -------------------------------- |
| [AscendEx](/exchanges/ascend-ex)                | [ascendex.com](https://ascendex.com/)        |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/ascend_ex) related to this exchange. |
| [Beaxy](/exchanges/beaxy)                       | [beaxy.com](https://beaxy.com/)              |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Binance](/exchanges/binance)                   | [binance.com](https://binance.com)           |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Binance US](/exchanges/binance-us)             | [binance.us](https://www.binance.us)         |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Bitfinex](/exchanges/bitfinex)                 | [bitfinex.com](https://bitfinex.com)         |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/bitfinex) related to this exchange.  |
| [BitMart](/exchanges/bitmart)                   | [bitmart.com](https://www.bitmart.com/)      |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/bitmart)) related to this exchange.  |
| [Bittrex Global](/exchanges/bittrex)            | [bittrex.com](https://bittrex.com)           |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/bittrex) related to this exchange.   |
| [Blocktane](/exchanges/blocktane)               | [blocktane.io](https://blocktane.io/)        |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/blocktane) related to this exchange. |
| [Coinbase Pro](/exchanges/coinbase)             | [pro.coinbase.com](https://pro.coinbase.com) |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/coinbase_pro) related to this exchange.  |
| [Coinzoom](/exchanges/coinzoom)              | [coinzoom.com](https://www.coinzoom.com/)    |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/coinzoom) related to this exchange.  |
| [Crypto.com](/exchanges/crypto-com)             | [crypto.com](https://crypto.com)             |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/crypto_com) related to this exchange.| 
| [Digifinex](/exchanges/digifinex)               | [digifinex.com](https://www.digifinex.com/)  |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/digifinex) related to this exchange.   |
| [FTX](/exchanges/ftx)                           | [ftx.com](https://ftx.com/foundation)        |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Gate.io](/exchanges/gate-io)                   | [gate.io](https://www.gate.io/)              |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/gate_io) related to this exchange.   |
| [HitBTC](/exchanges/hitbtc)                     | [hitbtc.com](https://hitbtc.com/)            |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Huobi Global](/exchanges/huobi)                | [huobi.com](https://huobi.com)               |                                  | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Kraken](/exchanges/kraken)                     | [kraken.com](https://kraken.com)             |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/kraken) related to this exchange.
| [KuCoin](/exchanges/kucoin)                     | [kucoin.com](https://kucoin.com)             |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/kucoin) related to this exchange.    |
| [Liquid](/exchanges/liquid)                     | [liquid.com](https://liquid.com)             |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/liquid) related to this exchange.    |
| [MEXC Global](/exchanges/mexc)                  | [mexc.com](https://www.mexc.com/)            |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/mexc) related to this exchange.  |
| [NDAX](/exchanges/ndax)                         | [ndax.io](https://ndax.io/)                  |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/ndax) related to this exchange.  |
| [OKEx](/exchanges/okx)                         | [okex.com](https://www.okex.com/)            |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/okex) related to this exchange.  |
| [ProBit Global](/exchanges/probit)              | [probit.com](https://www.probit.com/)        |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/probit) related to this exchange.   |
| [ProBit Korea](/exchanges/probit-korea/)        | [probit.kr](https://www.probit.kr/en-us/)    |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/probit_kr) related to this exchange.   |
| [Loopring](/exchanges/loopring)                 | [loopring.org](https://loopring.org)         | [ethereum](/protocols/ethereum)  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/loopring) related to this exchange.  |
| [WazirX](/exchanges/wazirx)                     | [wazirx.com](https://wazirx.com/)            |                                  | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/wazirx) related to this exchange.   |


### `perp`

| Exchange                                         | Website                                      | Protocol                          | Status                                               | Issues                           |
| ------------------------------------------------ | -------------------------------------------- | --------------------------------- | ---------------------------------------------------- | -------------------------------- |
| [Binance Futures](/exchanges/binance-perpetual)  | [binance.com](https://binance.com)           |                                   | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/binance_perpetual) related to this exchange.  |
| [Bybit Perpetual](/exchanges/bybit-perpetual)              | [bybit.com](https://www.bybit.com/en-US/)    |                                   | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/bybit_perpetual) related to this exchange.    |
| [dYdX Perpetual](/exchanges/dydx-perpetual)      | [dydx.exchange](https://dydx.exchange/)      | [ethereum](/protocols/ethereum)   | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/dydx_perpetual) related to this exchange.    |

### `amm`

| Exchange                                         | Website                                      | Protocol                          | Status                                               | Issues                           |
| ------------------------------------------------ | -------------------------------------------- | --------------------------------- | ---------------------------------------------------- | -------------------------------- |
| [Balancer](/exchanges/balancer)                  | [balancer.fi](https://balancer.fi/)          | [ethereum](/protocols/ethereum)   | <span style="color:green; font-size:25px">⬤</span> | Connector appears to be working properly.
| [Celo](/protocols/celo)                         | [celo.org](https://celo.org/)                | [celo](/protocols/celo)           | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/celo) related to this exchange.    |
| [Perpetual Finance](/exchanges/perp-fi/)         | [perp.exchange](https://perp.exchange/)      | xdai                              | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/perpetual_protocol) related to this exchange.
| [Terra](/protocols/terra/)                       | [terra.money](https://www.terra.money/)      | [terra](/protocols/terra)         |<span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/terra) related to this exchange.
| [Uniswap](/exchanges/uniswap/)                   | [uniswap.org](https://uniswap.org/)          | [ethereum](/protocols/ethereum)   | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/uniswap) related to this exchange.    |
| [Uniswap v3](/exchanges/uniswap-v3)              | [uniswap.org](https://uniswap.org/)          | [ethereum](/protocols/ethereum)   | <span style="color:yellow; font-size:25px">⬤</span> | Connector has one or more reported issues. Search for [outstanding issues](https://github.com/hummingbot/hummingbot/labels/uniswap_v3) related to this exchange. |


