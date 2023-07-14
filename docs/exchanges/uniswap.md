# Uniswap

**Support Hummingbot by creating an account using our [referral link](https://uniswap.org/)!** 🙏🙏🙏

## ℹ️ Info

- Type: Decentralized
- Website: <https://uniswap.org>
- CoinMarketCap: <https://coinmarketcap.com/exchanges/uniswap/>
- CoinGecko: <https://www.coingecko.com/en/exchanges/uniswap>
- API docs: <https://uniswap.org/docs/v2/API/overview/>
- API version: 2
- Fees: <https://docs.uniswap.org/concepts/protocol/fees>
- Supported countries: Worldwide

## 🛠 Maintenance

![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)

HBOT holders voted this exchange into the Gold tier for the current [Epoch](/governance/epochs). Silver exchanges are maintained and updated by Hummingbot Foundation via [Bounties](/governance/polls), tracking improvements made to the Gold exchanges.

**Maintainer:** Hummingbot Foundation

## 💰 Rewards
*Competitions and other programs that incentivize Hummingbot users to use this exchange*

**Current and Upcoming**



**Past**



## 📺 Content
*Videos and guides that show how to use Hummingbot with this exchange*

* https://blog.hummingbot.org/2021-05-uniswap-v3-hummingbot-strategy/

* https://blog.hummingbot.org/2020-12-amm-arbitrage-uniswap-balancer/

<iframe width="560" height="315" src="https://www.youtube.com/embed/D05kKp-f2vg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## How to create API keys

## 🔀 Spot Connector
*Integration to exchange's spot markets API*

- Connection type: WebSocket
- [Connector folder](https://github.com/hummingbot/gateway/blob/main/src/connectors/uniswap)

### How to Connect

The `uniswap` connector fetches prices and creates swaps. Run `gateway connect uniswap` in order to connect your wallet:

```
Which chain do you want uniswap to connect to? (ethereum, polygon) >>> 
Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>
Enter your ethereum-mainnet private key >>>>
```

If connection is successful (ethereum-mainnet):
```
The uniswap connector now uses wallet [pubKey] on ethereum-mainnet
```


### Order Types


### Candles Feed

### Paper Trading


## 🔀 Perp Connector


### Order Types


### Position Modes


### Candles Feed


### Testnets

[Ethereum:](/chains/ethereum) goerli

Run `gateway connect uniswap` in order to connect your wallet to the goerli testnet:

```
Which chain do you want uniswap to connect to? (ethereum, polygon) >>> ethereum
Which network do you want uniswap to connect to? (mainnet, goerli, arbitrum_one) >>>  goerli
Enter your ethereum-mainnet private key >>>>` XXXXXX
```

If connection is successful (ethereum-goerli):

```
The uniswap connector now uses wallet [pubKey] on ethereum-goerli
```

[Polygon:](/chains/polygon) mumbai

Run `gateway connect uniswap` in order to connect your wallet to the goerli testnet:

```
Which chain do you want uniswap to connect to? (ethereum, polygon) >>> polygon
Which network do you want uniswap to connect to? (mainnet, mumbai) >>>  mumbai
Enter your ethereum-mainnet private key >>>> XXXXXX
```


If connection is successful (polygon-mumbai):

```
The uniswap connector now uses wallet [pubKey] on polygon-mumbai
```
