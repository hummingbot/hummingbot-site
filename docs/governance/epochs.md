The Hummingbot Foundation is an experiment in creating a self-sustainable open source ecosystem by distributing HBOT tokens to community developers who maintain the codebase.

We iterate to improve upon this distribution process via **Epochs**. Each Epoch is a quarterly period that are basically long agile sprints, after which the Foundation and the community may propose changes for the next Epoch.

Polls divide a fixed pool of HBOT between the connectors based on their pro-rata voting share. The Foundation assigns maintenance bounties to community developers for each connector using these amounts. See the **Connector Pots** tab in [HBOT Tracker](https://docs.google.com/spreadsheets/d/1UNAumPMnXfsghAAXrfKkPGRH9QlC8k7Cu1FGQVL1t0M/edit?usp=sharing) for the current allocations for each exchange.

## Epoch 13 (Q3 2025)

### CLOB CEX Connectors

**Poll**: [HGP-71](https://snapshot.box/#/s:hbot.eth/proposal/0x17e57a5dbdfe673463c58d4505e4e127d720ac043a5d2b2b2e6684e8628c87b0)

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | Binance         | 11.1m | 10.25% |
| 2    | Kucoin          | 10.3m | 9.52%  |
| 3    | Bybit           | 10m   | 9.28%  |
| 4    | OKX             | 9.8m  | 9.05%  |
| 5    | Gate.io         | 9.3m  | 8.59%  |
| 6    | Bitrue          | 8.5m  | 7.86%  |
| 7    | MEXC            | 8.5m  | 7.86%  |
| 8    | Coinbase        | 7.8m  | 7.19%  |
| 9    | Kraken          | 7.8m  | 7.19%  |
| 10   | AscendEx        | 5.3m  | 4.95%  |
| 11   | Cube            | 3.8m  | 3.5%   |
| 12   | Bitmart         | 3.8m  | 3.5%   |
| 13   | Bitget          | 3.1m  | 2.91%  |
| 14   | Bitstamp        | 3.1m  | 2.91%  |
| 15   | HTX             | 3.1m  | 2.91%  |
| 16   | BingX           | 1.4m  | 1.25%  |
| 17   | BTC Markets     | 740.2k| 0.69%  |
| 18   | NDAX            | 639.3k| 0.59%  |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | Binance, Kucoin, Bybit, OKX, Gate.io, Bitrue, MEXC, Coinbase, Kraken, AscendEx, Cube, Bitmart, Bitget, Bitstamp, HTX, BingX, BTC Markets, NDAX |
| ❌ |  |

### CLOB DEX Connectors

**Poll**: [HGP-72](https://snapshot.box/#/s:hbot.eth/proposal/0x2f03665ba75502f29929e240b9b4eabfeb2f09e22a50cab839c8cec1904b3a9f)

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | XRPL            | 20.6m | 20.06% |
| 2    | Hyperliquid     | 15.5m | 15.1%  |
| 3    | Injective Helix | 15.5m | 15.1%  |
| 4    | Derive          | 13.7m | 13.38% |
| 5    | Dexalot         | 13.1m | 12.76% |
| 6    | dYdX            | 13m   | 12.66% |
| 7    | Vertex          | 11.2m | 10.94% |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | XRPL, Hyperliquid, Injective Helix, Derive, Dexalot, dYdX, Vertex |
| ❌ |  |

### Gateway DEX Connectors

**Poll**: [HGP-73](https://snapshot.box/#/s:hbot.eth/proposal/0x601b91702fba81e5bb6f778bd0a4f78f1a9abd7df4b27ab9f12168aec2b44b2c)

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | Jupiter         | 14.6m | 14.28% |
| 2    | Meteora         | 14.6m | 14.28% |
| 3    | Raydium         | 13.9m | 13.62% |
| 4    | Uniswap         | 13.9m | 13.55% |
| 5    | Pancakeswap     | 13.4m | 13.09% |
| 6    | Curve           | 11.9m | 11.64% |
| 7    | Trader Joe      | 8.1m  | 7.94%  |
| 8    | ETCSwap         | 5.2m  | 5.08%  |
| 9    | Balancer        | 3.9m  | 3.85%  |
| 10   | Quickswap       | 1.5m  | 1.44%  |
| 11   | Sushiswap       | 1.3m  | 1.22%  |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | Jupiter, Meteora, Raydium, Uniswap, Pancakeswap, Curve, Trader Joe, ETCSwap, Balancer, Quickswap, Sushiswap |
| ❌ | Carbon, Hydration/Polkadot |

## Epoch 12 (Q2 2025)

**Approved Governance Changes**: [HGP-70](https://snapshot.box/#/s:hbot.eth/proposal/0xa8f8364c582f94841e459be8d22440f0405513f19a2eb85d11fe73d7aefc275e)

The Foundation implemented three separate polls, one for each exchange type. To ensure room for new community-suggested exchanges while respecting the 20-choice limit, the following exchange removal conditions apply:

- If there are 20 choices in a Connector Poll, the 2 lowest ranking exchanges by vote will be removed in the following quarter
- If there are 19 choices in a Connector Poll, the lowest ranking exchange by vote will be removed in the following quarter

This system ensures at least 2 open slots in each exchange type for new additions every quarter. These removal conditions apply in addition to the current Minimum HBOT inclusion threshold (400K HBOT).

### CEX Connectors

**Poll**: [HGP-68](https://snapshot.box/#/s:hbot.eth/proposal/0x62c38f8a233a06ee12a46764f10bdc681bb55e6d5e128848c75dc9ecae8344a6)

**Quorum**: 182%

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | Binance         | 10.3m | 11.24% |
| 2    | Kucoin          | 10.1m | 11.06% |
| 3    | OKX             | 7.4m  | 8.09%  |
| 4    | Gate.io         | 7.3m  | 7.97%  |
| 5    | Bitmart         | 6.8m  | 7.5%   |
| 6    | HTX             | 6.8m  | 7.5%   |
| 7    | Bitrue          | 6.5m  | 7.17%  |
| 8    | Kraken          | 6.3m  | 6.86%  |
| 9    | Bybit           | 5.6m  | 6.1%   |
| 10   | MEXC            | 5.2m  | 5.74%  |
| 11   | Coinbase        | 5m    | 5.5%   |
| 12   | AscendEx        | 4.9m  | 5.34%  |
| 13   | Cube            | 2.8m  | 3.03%  |
| 14   | Bitstamp        | 1.8m  | 1.99%  |
| 15   | BingX           | 1.3m  | 1.37%  |
| 16   | Bitget          | 1.2m  | 1.36%  |
| 17   | NDAX            | 1.2m  | 1.36%  |
| 18   | BTC Markets     | 740.2k| 0.81%  |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | Binance, Kucoin, OKX, Gate.io, Bitmart, HTX, Bitrue, Kraken, Bybit, MEXC, Coinbase, AscendEx, Cube, Bitstamp, BingX, Bitget, NDAX, BTC Markets |
| ❌ | Hashkey, Tegro |

### CLOB DEX Connectors

**Poll**: [HGP-69](https://snapshot.box/#/s:hbot.eth/proposal/0x267a7b9b18e9aa09cd97209c0a71c5685969f4bae195a83cd36e201eff0ae081)

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | XRPL            | 19.5m | 21.55% |
| 2    | dYdX            | 14.2m | 15.74% |
| 3    | Derive          | 14.2m | 15.7%  |
| 4    | Hyperliquid     | 14.1m | 15.63% |
| 5    | Dexalot         | 9.9m  | 10.97% |
| 6    | Injective Helix | 9.7m  | 10.78% |
| 7    | Vertex          | 8.7m  | 9.64%  |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | XRPL, dYdX, Derive, Hyperliquid, Dexalot, Injective Helix, Vertex |
| ❌ |  |

### Gateway DEX Connectors

**Poll**: [HGP-70](https://snapshot.box/#/s:hbot.eth/proposal/0x461ac7671836f3b9a812f1c3cd0f81423cadb35408cfb62763ad97f3a163dde9)

| Rank | Exchange        | Votes | Share |
|------|-----------------|-------|-------|
| 1    | Raydium         | 11.7m | 12.88% |
| 2    | Uniswap         | 11.6m | 12.79% |
| 3    | Meteora         | 11m   | 12.12% |
| 4    | Pancakeswap     | 9.8m  | 10.81% |
| 5    | Trader Joe      | 8.7m  | 9.62%  |
| 6    | Balancer        | 8.6m  | 9.52%  |
| 7    | Curve           | 8.6m  | 9.52%  |
| 8    | Hydration/Polkadot | 6m | 6.58%  |
| 9    | Sushiswap       | 5.6m  | 6.2%   |
| 10   | Jupiter         | 4.1m  | 4.52%  |
| 11   | Carbon          | 3.8m  | 4.24%  |
| 12   | Quickswap       | 688.6k| 0.76%  |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|--------------------------------|--------------------|
| ✅ | Raydium, Uniswap, Meteora, Pancakeswap, Trader Joe, Balancer, Curve, Hydration/Polkadot, Sushiswap, Jupiter, Carbon, Quickswap |
| ❌ | ETCSwap (400k votes - below threshold), Mad Meerkat, Osmosis/Osmosis, Spectrum/Ergo, Tinyman/Algorand, VVS |

## Epoch 11 (Q1 2025)

**Approved Governance Changes**: [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738)

### CLOB Spot Connectors

**Poll**: [HGP-65](https://snapshot.box/#/s:hbot.eth/proposal/0xecbc89ab3868885c89a804b30579641850dda166b62e206d2eab009fd75e0bec)

| Rank | Exchange        |
|------| ----------------|
| 1    | XRPL            |
| 2    | Binance         | 
| 3    | Gate.io         |
| 4    | Kucoin          |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | XRPL, Binance, Gate.io, Kucoin, MEXC, Coinbase, Kraken, Ascend_ex, Injective v2, Bitrue, OKX, Bybit, Dexalot, Bitmart, Bitstamp, HTX, Cube, Vertex, NDAX, BTC Markets, Hashkey |
| ❌ | Polkadex |

### CLOB Perp Connectors

**Poll**: [HGP-66](https://snapshot.box/#/s:hbot.eth/proposal/0x8c8e11817a26221b2f28b929f21e356a12d9fa07fa5c65164c9db901ea4d419a)

| Rank | Exchange        |
|------| ----------------|
| 1    | Kucoin Perpetual     |
| 2    | Binance Perpetual    |
| 3    | OKX Perpetual        |
| 4    | Bybit Perpetual      |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Kucoin Perpetual, Binance Perpetual, OKX Perpetual, Bybit Perpetual, dYdX Perpetual, Hyperliquid Perpetual, Gate.io Perpetual, Bitget Perpetual, Injective Helix Perpetual, Hashkey Perpetual |
| ❌ |  |

### AMM Connector Poll

**Poll**: [HGP-67](https://snapshot.box/#/s:hbot.eth/proposal/0xcc516b142e39731780916d4e234ff090cb84995899c2ae66c359ebe6bc4550ba)

| Rank | Chain           |
|------| ----------------|
| 1    | Uniswap         |
| 2    | Pancakeswap     |
| 3    | Balancer        |
| 4    | Curve           |

| Inclusion Threshold Pass/Fail  | Chain Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Uniswap, Pancakeswap, Balancer, Curve, Sushiswap, Trader Joe, Quickswap, Mad Meerkat, Tinyman, VVS, Carbon |
| ❌ | OpenOcean, Pangolin, XSSwap |

## Epoch 10 (Q4 2024)

**Approved Governance Changes**: [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738)

### CLOB Spot Connectors

**Poll**: [HGP-61](https://snapshot.box/#/s:hbot.eth/proposal/0x72aba49ec0d940d8cbdfb69a2e4f8408af2b9f1b0173526c523269755342d19d)

| Rank | Exchange        |
|------| ----------------|
| 1    | Coinbase        |
| 2    | Bybit           | 
| 3    | XRPL            |
| 4    | Binance         |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Coinbase, Bybit, XRPL, Binance, OKX, Gate.io, Polkadex, Bitrue, MEXC, Injective, Ascendex, HTX, Kucoin, BitMart, NDAX, Vertex, BTC Markets, Kraken, Dexalot, Bitstamp, Cube |
| ❌ | Bitfinex, FoxBit |

### CLOB Perp Connectors

**Poll**: [HGP-62](https://snapshot.box/#/s:hbot.eth/proposal/0x14528caecc4dc36e3a89c1a143b10cd97b2467b1a606e735deb5986a22648238)

| Rank | Exchange        |
|------| ----------------|
| 1    | Hyperliquid Perpetual     |
| 2    | Bybit Perpetual           |
| 3    | Binance Perpetual         |
| 4    | dYdX Perpetual            |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Hyperliquid Perpetual, Bybit Perpetual, Binance Perpetual, dYdX Perpetual, OKX Perpetual, Injective Perpetual, Gate.io Perpetual, Bitget Perpetual, Kucoin Perpetual, Hashkey Perpetual |
| ❌ |  |

### AMM Connector Poll

**Poll**: [HGP-63](https://snapshot.box/#/s:hbot.eth/proposal/0x1fb57fd581f39eed62b82646cfe7e1b45c2f3fc8adf7cee23729703f3252401e)

| Rank | Chain           |
|------| ----------------|
| 1    | Uniswap         |
| 2    | Curve           |
| 3    | Pancakeswap     |
| 4    | Tinyman         |

| Inclusion Threshold Pass/Fail  | Chain Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Uniswap, Curve, Pancakeswap, Tinyman, Pangolin, Traderjoe, Mad Meerkat, VVS, Balancer, Sushiswap, Quickswap, OpenOcean, XSwap, Carbon, Plenty  |
| ❌ | Plenty |

## Epoch 9 (Q3 2024)

**Approved Governance Changes**: [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738)

### CEX Connectors

**Poll**: [HGP-58](https://snapshot.box/#/s:hbot.eth/proposal/0x913ce9d9af0f1b5d510c1740099424cb60f612b52b05f4712f141d6eb73091b7)

| Rank | Exchange        |
|------| ----------------|
| 1    | Binance         |
| 2    | OKX             | 
| 3    | Kucoin          |
| 4    | Coinbase        |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Binance, OKX, Kucoin, Coinbase, FoxBit, Kraken, Ascendex, Gate.io, Bitrue, MEXC, Bybit, HTX, Cube Exchange, BitMart, BTC Markets, Bitget, NDAX, Bitfinex, Phemex |
| ❌ | Bit.com, HitBTC |

### DEX Connectors

**Poll**: [HGP-59](https://snapshot.box/#/s:hbot.eth/proposal/0x115de9e634de1385d3dae0efe2a52e2075fa7a72ef03cf976a49cf65c9076f9d)

| Rank | Exchange        |
|------| ----------------|
| 1    | Hyperliquid     |
| 2    | XRP Ledger      |
| 3    | Vega            |
| 4    | Balancer        |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Hyperliquid, XRP Ledger, Vega, Balancer, Uniswap, dYdX, Dexalot, Trader Joe, Pancakeswap, Polkadex, Curve, Osmosis, Injective Helix, Tinyman, Mad Meerkat, OpenOcean, Pangolin, Plenty, Ref, Vertex, VVS, XSwap, Quickswap, Sushiswap, Carbon, Perpetual Protocol |
| ❌ |  |

### Chain Connectors

**Poll**: [HGP-60](https://snapshot.box/#/s:hbot.eth/proposal/0x763450dcb8164a56768f9f3c6df8c54d6b478cdb0d334f4d69c5bb5f4198f29d)

| Rank | Chain           |
|------| ----------------|
| 1    | XRP Ledger      |
| 2    | Ethereum        |
| 3    | Avalanche       |
| 4    | Injective       |

| Inclusion Threshold Pass/Fail  | Chain Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | XRP Ledger, Ethereum, Avalanche, Injective, BNB Chain, Algorand, Harmony, Tezos, XDC Chain, Kujira, Osmosis, Polygon, Cosmos, Cronos, NEAR  |
| ❌ | |

## Epoch 8 (Q2 2024)

**Approved Governance Changes**: [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738)

### CEX Connectors

**Poll**: [HGP-55](https://snapshot.org/#/hbot.eth/proposal/0x0febdd2d5e2a52c18c9990b803e314f3f8f3f6e01702936c422b03e2430ed2a0)

| Rank | Exchange        |
|------| ----------------|
| 1    | OKX             |
| 2    | Binance         |
| 3    | Coinbase        |
| 4    | Kraken          |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | OKX, Binance, Kraken, Coinbase, Kucoin, AscendEx, Bybit, Bitmart, Gate.io, Bitrue, MEXC, Phemex, Foxbit, Huobi, Bit.com, BTC Markets, NDAX, Bitfinex, Bitget, HitBTC |
| ❌ | |

### DEX Connectors

**Poll**: [HGP-56](https://snapshot.org/#/hbot.eth/proposal/0x21a85fbc9297a3d67a31cbed9ce81351bfec7cceae227e1f4e15435b71729819)

| Rank | Exchange        |
|------| ----------------|
| 1    | XRP Ledger      |
| 2    | Uniswap         |
| 3    | dYdX            |
| 4    | Hyperliquid     |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | dYdX, Uniswap, XRP Ledger, Hyperliquid, Dexalot, Pancakeswap, Curve, Tinyman, TraderJoe, Polkadex, Vega, Sushiswap, Carbon, Quickswap, Injective Helix, Osmosis, Mad Meerkat, Plenty, Ref, Vertex, VVS, XSwap, Perpetual Protocol, Pangolin, OpenOcean |
| ❌ | Quipuswap |

### Chain Connectors

**Poll**: [HGP-57](https://snapshot.org/#/hbot.eth/proposal/0x40db2e7c2846b73428a61f5c61cde9b823e2f7a19a1e58a6a1b76d51f55fca54)

| Rank | Chain           |
|------| ----------------|
| 1    | Ethereum        |
| 2    | XRP Ledger      |
| 3    | Polygon         |
| 4    | Injective       |

| Inclusion Threshold Pass/Fail  | Chain Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Ethereum, XRP Ledger, Polygon, Injective, BNB Chain, Avalanche, Algorand, Cronos, Harmony, XDC Chain, NEAR, Tezos, Kujira, Cosmos, Osmosis  |
| ❌ | |

## Epoch 7 (Q4 2023)

**Approved Governance Changes**: [HGP-50](https://snapshot.org/#/hbot.eth/proposal/0xc13f3b9fdaded22d1ce0b5528c9146fb2a762c41deed88e6c64e798465414738)

### CEX Connectors

**Poll**: [HGP-51](https://snapshot.org/#/hbot.eth/proposal/0x09028cd5ebc076f1ae9a55921345a8c1cca1cbb1200cc77c798c66013aabef5d)

| Rank | Exchange        |
|------| ----------------|
| 1    | OKX             |
| 2    | Kraken          |
| 3    | Coinbase        |
| 4    | Kucoin          |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | OKX, Kraken, Coinbase, Kucoin, AscendEx, Bybit, Bitmart, MEXC, Phemex, Foxbit, Huobi, Bit.com, BTC Markets, NDAX, Bitfinex, Bitget, HitBTC |
| ❌ | Bitmex, Woo X |

### DEX Connectors

**Poll**: [HGP-52](https://snapshot.org/#/hbot.eth/proposal/0xaad1c6b8541ed056adcae62a8170d0a4ceb17beb963ef017022eef10f2eddcb4)

| Rank | Exchange        |
|------| ----------------|
| 1    | dYdX            |
| 2    | Uniswap         |
| 3    | XRP Ledger      |
| 4    | Pancakeswap     |

| Inclusion Threshold Pass/Fail  | Exchange Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | dYdX, Uniswap, XRP Ledger, Pancakeswap, Uniswap, Dexalot, TraderJoe, Polkadex, Mad Meerkat, Perpetual Protocol, Sushiswap, Tinyman, Injective Helix, Quickswap, Vertex, Pangolin, Ref, XSwap, Hyperliquid, OpenOcean, Curve, Plenty |
| ❌ | |

### Chain Connectors

**Poll**: [HGP-53](https://snapshot.org/#/hbot.eth/proposal/0x14c4822c380ba8d1e68e4dcb11f0b47dc4a9c40831bb36eaab8471d4edf99352)

| Rank | Chain           |
|------| ----------------|
| 1    | Ethereum        |
| 2    | XRP Ledger      |
| 3    | BNB Chain       |
| 4    | Avalanche       |

| Inclusion Threshold Pass/Fail  | Chain Connector |
|-----------------------------------------------------------------------------------|---------|
| ✅ | Ethereum, XRP Ledger, BNB Chain, Avalanche, XDC Chain, Cronos, Algorand, NEAR, Polygon, Injective, Tezos, Kujira, Cosmos, Harmony |
| ❌ | |

## Epoch 6 (Q3 2023)

**Recap**: [Epoch 6 Polls Recap](../blog/posts/epoch-6-polls-recap/index.md)

**Approved Governance Changes**: [HGP-45](https://snapshot.org/#/hbot.eth/proposal/0x7807da661f09096db6aadb277051ed6defd580259fd8e503c2a77a83779a3fd5)

### CEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Binance |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Gate.io, Kucoin, Huobi |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Ascendex, OKX, Coinbase, Kraken, BTC-Markets, Phemex, HitBTC, Bitfinex, Bitget, Bitmex, BIT, MEXC, Bybit, Bitmart, NDAX |

### DEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | dYdX |
|-----------------------------------------------------------------------------------|------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Dexalot, Polkadex, Injective Helix |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Uniswap, Pancakeswap, Sushiswap, Plenty, TraderJoe, Perpetual Protocol, Quickswap, OpenOcean, Pangolin, Mad Meerkat Finance, Ref Finance, Tinyman, VVS Finance, XSwap, Vertex |

### Chain Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Ethereum |
|-----------------------------------------------------------------------------------|----------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Avalanche, Binance Smart Chain, Polygon |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Injective, Harmony, Tezos, XDC, Algorand, Cosmos, Cronos, Near |

---

## Epoch 5 (Q2 2023)

**Recap**: [Epoch 5 Polls Recap](../blog/posts/epoch-5-polls-recap/index.md)

**Approved Governance Changes**: [HGP-43](https://snapshot.org/#/hbot.eth/proposal/0x63958a27907ef6efa072fc92566f91bcf5df7491523ffcc64ecb47f270df9bcd)

### CEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Binance |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Kucoin, AscendEx, Gate.io |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | OKX, Huobi, AltMarkets, Phemex, BIT, Kraken, Bybit, Bitmart, NDAX, Coinbase, Bitfinex, HitBTC, Binance US, MEXC, BTC-Markets, Bitget, Bitmex |

### DEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Uniswap |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | dYdX, PancakeSwap, Dexalot |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | TraderJoe, Sushiswap, Pangolin, Tinyman, Injective, Quickswap, Mad Meerkat Finance, Ref Finance, VVS Finance, XSwap, Defira, OpenOcean, Loopring |

### Core Strategies

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=CORE&color=yellow) | [Pure Market Making (PMM)](/strategies/pure-market-making/), [Cross Exchange Market Making (XEMM)](/strategies/cross-exchange-market-making/), [AMM Arbitrage](/strategies/amm-arbitrage/) |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green) | Avellaneda Market Making, Liquidity Mining, Perpetual Market Making, Spot Perpetual Arbitrage, UniswapV3 LP, Cross-Exchange Mining, TWAP, Hedge |

---

## Epoch 4 (Q2 2023)

**Recap**: [Epoch 4 Polls Recap](../blog/posts/epoch-4-polls-recap/index.md)

### CEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Binance |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Kucoin, Gate.io, AscendEx |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Bitget, MEXC, NDAX, OKX, Bybit, Bitmart, BTC-Markets, WhiteBit, Kraken, AltMarkets, Bittrex, Crypto.com, Bitmex, LBank, Huobi, Coinbase, Binance US, Bitfinex, HitBTC, ProBit Global |

### DEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Uniswap |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Quickswap, Traderjoe, dYdX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Pancakeswap, MM Finance, Ref Finance, VVS Finance, Sushiswap, Defi Kingdoms, Defira, Loopring, Perpetual Protocol, Pangolin, OpenOcean |

### Core Strategies

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=CORE&color=yellow) | [Pure Market Making (PMM)](/strategies/pure-market-making/), [Cross Exchange Market Making (XEMM)](/strategies/cross-exchange-market-making/), [AMM Arbitrage](/strategies/amm-arbitrage/) |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green) | Perpetual Market Making, Spot Perpetual Arbitrage, Hedge, Avellaneda Market Making, Liquidity Mining, Cross-Exchange Mining, UniswapV3 LP |

---

## Epoch 3 (Q1 2023)

**Recap**: [Epoch 3 Polls Recap](../blog/posts/epoch-3-polls-recap/index.md)

### CEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Binance |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | Kucoin, Gate.io, AscendEx |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | Crypto.com, Kraken, LBank, Bitget, Bybit, NDAX, Coinbase, Bitmart, Bitfinex, Binance US, Bittrex, Huobi, AltMarkets, HitBTC, Bitmex, ProBit Global, OKX, WhiteBit, MEXC |

### DEX Connectors

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=GOLD&color=yellow)   | Uniswap |
|-----------------------------------------------------------------------------------|---------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=SILVER&color=white) | PancakeSwap, SushiSwap, dYdX |
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=BRONZE&color=green) | TraderJoe, QuickSwap, OpenOcean, Pangolin, Defira, Perpetual Protocol, MM Finance, Defi Kingdoms, Loopring, Ref Finance, VVS Finance |

### Core Strategies

| ![](https://img.shields.io/static/v1?label=Hummingbot&message=CORE&color=yellow) | [Pure Market Making (PMM)](/strategies/pure-market-making/), [Cross Exchange Market Making (XEMM)](/strategies/cross-exchange-market-making/), [AMM Arbitrage](/strategies/amm-arbitrage/) |
|-------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| ![](https://img.shields.io/static/v1?label=Hummingbot&message=COMMUNITY&color=green) | Avellaneda Market Making, UniswapV3 LP, Hedge, Cross-Exchange Mining, Perpetual Market Making, Aroon Oscillator, Liquidity Mining, TWAP, Spot Perpetual Arbitrage |

---

## Epoch 2 (Q3-Q4 2022)

**Approved Governance Changes**: [HGP-22](https://snapshot.org/#/hbot.eth/proposal/0x1f84875fb764d697a106e07fa5a7b6584a418cf5634aa94f4d9a8c5852455f4e), [HGP-24](https://snapshot.org/#/hbot.eth/proposal/0xbc73a6b7c04751c9296adfd9ec8bf0377f093bbe6d2ce617c5460b890690851b)

After Epoch 2, the Foundation conducted a [retrospective](https://blog.hummingbot.org/hummingbots-2023-governance-roadmap/) and decided to enact the following changes to improve the governance process:

- Change epoch cadence to from bi-annually to quarterly
- Start [Polls](/governance/polls/) to make HBOT governance easier
- Cease setting per-epoch HBOT distribution targets

---

## Epoch 1 (Q1-Q2 2022)

**Approved Governance Changes**: [HGP-10](https://snapshot.org/#/hbot.eth/proposal/0x63958a27907ef6efa072fc92566f91bcf5df7491523ffcc64ecb47f270df9bcd), [HGP-12](https://snapshot.org/#/hbot.eth/proposal/0x3518fdbd6b5793908698fb1fc6a38dccf4ca2e9923f3510dac1878c9081acc6d), [HGP-17](https://snapshot.org/#/hbot.eth/proposal/0xfc1e42adb4f1e867102c6a5d9f4e0f91cb44107e433bcb27fc7dc95068dc22a9)


After Epoch 1, the Foundation conducted a retrospective and enacted a number of changes to the governance process. Specifically, the Foundation decided to start the following initiatives:

- Start the Exchange Certification initiative
- Create more structure around the [Bounties](../bounties/index.md) process
- Start a developer bootcamp
