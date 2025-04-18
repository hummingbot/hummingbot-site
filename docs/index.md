---
template: home.html
title: Hummingbot - the open source framework for crypto market makers
hide:
  - toc
  - navigation
  - feedback
---

<div class="custom-metric">
  <div class="metric-value">31.5B</div>
  <div class="metric-label">Volume traded by Hummingbot users in past 1 year</div>
</div>

```vegalite
{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Monthly USDT Volume",
    "width": "container",
    "height": 400,
    "data": {
      "values": [
        {"date": "2024-03-15", "volume": 5056300673.532455},
        {"date": "2024-04-15", "volume": 2803765323.398611},
        {"date": "2024-05-15", "volume": 3073736618.0402546},
        {"date": "2024-06-15", "volume": 3196767990.299173},
        {"date": "2024-07-15", "volume": 2131640444.2422123},
        {"date": "2024-08-15", "volume": 2009532310.070123},
        {"date": "2024-09-15", "volume": 1119785879.8091574},
        {"date": "2024-10-15", "volume": 1312240203.1848197},
        {"date": "2024-11-15", "volume": 2490000000},
        {"date": "2024-12-15", "volume": 2980000000},
        {"date": "2025-01-15", "volume": 2890000000},
        {"date": "2025-02-15", "volume": 3180000000}
      ]
    },
    "mark": {"type": "bar", "color": "#5FFFD7"},
    "encoding": {
      "x": {
        "field": "date",
        "type": "temporal",
        "title": "Month",
        "timeUnit": "yearmonth",
        "axis": {
          "format": "%b %Y",
          "grid": false,
          "labelFontSize": 12,
          "titleFontSize": 16,
          "titlePadding": 20,
          "labelFont": "Satoshi",
          "titleFont": "Satoshi"
        }
      },
      "y": {
        "field": "volume",
        "type": "quantitative",
        "title": "Reported Trading Volume ($ billions)",
        "axis": {
          "format": "~s",
          "grid": false,
          "labelFontSize": 12,
          "titleFontSize": 16,
          "titlePadding": 20,
          "labelFont": "Satoshi",
          "titleFont": "Satoshi",
          "tickCount": 5
        }
      },
      "tooltip": [
        {"field": "date", "type": "temporal", "title": "Month", "timeUnit": "yearmonth", "format": "%b %Y"},
        {"field": "volume", "type": "quantitative", "title": "Volume", "format": ",.0f"}
      ]
    },
    "config": {
      "background": null,
      "view": {
        "stroke": null
      },
      "font": "Satoshi",
      "title": {
        "font": "Satoshi"
      }
    }
}
```
### See [Hummingbot Reported Volumes](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52) for a real-time dashboard of the volume reported by all Hummingbot instances, broken down by exchange.

---

# Sponsored by Leading CEXs and DEXs

<div class="exchange-grid">
  <div class="flex-item">
    <img src="/assets/logos/binance-dark.png" alt="Binance" class="dark-logo"/>
    <img src="/assets/logos/binance-light.png" alt="Binance" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/hyperliquid-dark.png" alt="Hyperliquid" class="dark-logo"/>
    <img src="/assets/logos/hyperliquid-light.png" alt="Hyperliquid" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/okx-dark.png" alt="OKX" class="dark-logo"/>
    <img src="/assets/logos/okx-light.png" alt="OKX" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/xrpl-dark.png" alt="XRPL" class="dark-logo"/>
    <img src="/assets/logos/xrpl-light.png" alt="XRPL" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/gate-dark.png" alt="Gate" class="dark-logo"/>
    <img src="/assets/logos/gate-light.png" alt="Gate" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/kucoin-logo-dark.png" alt="Kucoin" class="dark-logo"/>
    <img src="/assets/logos/kucoin-logo-light.png" alt="Kucoin" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/derive-dark.png" alt="CoinAlpha" class="dark-logo"/>
    <img src="/assets/logos/derive-light.png" alt="CoinAlpha" class="light-logo"/>
  </div>
</div>

### See [Exchanges](/exchanges/) for how Hummingbot Foundation works with these institutions.

---

# Build Powerful Strategies with the V2 Framework

<div class="grid cards" markdown>

-   [![](/blog/introducing-v2-strategies/cover.png)](/blog/introducing-v2-strategies)

    ### [Introducing V2 Strategies](/blog/introducing-v2-strategies)

-   [![](/blog/using-hyperliquid-vaults-with-hummingbot/cover.png)](/blog/funding-rate-arbitrage-and-creating-vaults-on-hyperliquid/)

    ### [Funding Rate Arbitrage on Hyperliquid](/blog/funding-rate-arbitrage-and-creating-vaults-on-hyperliquid/)

-   [![](/blog/coding-a-custom-v2-controller/cover.webp)](/blog/coding-a-liquidation-sniper-v2-strategy-controller/)

    ### [Coding a Liquidation Sniper Strategy](/blog/coding-a-liquidation-sniper-v2-strategy-controller/)

</div>

---
# What can you do with Hummingbot?

<div class="grid cards wide" markdown>

-   :material-format-paint:{ .lg .middle } __Craft Cutting-Edge Strategies__

    ---

    Design sophisticated market making, arbitrage, and directional strategies using the modular strategy framework

    [:octicons-arrow-right-24: Strategy Docs](/strategies/)

-   :material-upload-network:{ .lg .middle } __Seamless Exchange Integration__

    ---

    Hummingbot establishes a direct WebSocket connection with many exchanges, including DEXs on L1/L2 blockchain networks.

    [:octicons-arrow-right-24: Connector Docs](/exchanges/)

-   :material-satellite-uplink:{ .lg .middle } __Backtest and Deploy with Ease__

    ---

    Backtest your strategies against historical data and deploy multiple instances with Dashboard, a web-based command center for your bots.

    [:octicons-arrow-right-24: Get Certified](/dashboard/)

-   :material-cash:{ .lg .middle } __Contribute and Earn__

    ---

    Earn rewards by using and contributing to Hummingbot! Earn trading rewards, developer bounties, and other rewards for supporting the Discord community.

    [:octicons-arrow-right-24: Earn Bounties](/community/rewards)

</div>

---

# Who runs Hummingbot?

<div class="grid" markdown>

<span class="quote">
:material-format-quote-open:
As the company that open-sourced Hummingbot, we're incredibly proud of how the community has embraced it. Today, we run bespoke strategies for our institutional clients using many custom Hummingbot instances.
:material-format-quote-close:
</span>
<br/><br/>
<a href="https://www.linkedin.com/in/jason-tomlinson-88b0b78/" target="_blank" class="author centered">Jason Tomlinson</a>
<span class="role centered">Market Maker</span>
<br />
<a href="https://coinalpha.com/" target="_blank"><img src="/assets/logos/coinalpha-dark.jpeg" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
We started with Hummingbot as the foundation for our market-making business. Their WebSocket connector architecture is the most accessible in the market. We still use it from time to time and enjoy their great documentation.
:material-format-quote-close:
</span>
<br/><br/>
<a href="https://www.linkedin.com/in/etartakovsky/" target="_blank" class="author centered">Eugene Tartakovsky</a>
<span class="role centered">Market Maker</span>
<br/>
<a href="https://3jane.com/" target="_blank"><img src="/assets/brand/3jane-2.jpg" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot has served as a reliable base for us to build custom tools and strategies. It has many quality connectors and all components are well thought out, allowing us to flexibly modify the open source code.
:material-format-quote-close:
</span>
<br/><br/>
<a href="https://www.linkedin.com/in/jelle-buth/" target="_blank" class="author centered">Jelle Buth</a>
<span class="role centered">Market Maker</span>
<br/>
<a href="https://www.enflux.io/" target="_blank"><img src="/assets/brand/enclave.jpg" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot allowed me to run profitable strategies and generate $2 billion in trade volume. I can't recommend Hummingbot enough for any algo trader seeking a 0 to 1 platform.
:material-format-quote-close:
</span>
<br/><br/>
<a href="https://summitoperations.co/" target="_blank" class="author centered">Kollan</a>
<span class="role centered">Prop Trader</span>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot revolutionized my crypto trading. Using advanced strategies, I developed my own trading style and consistently ranked at the top of the Miner leaderboard for months.
:material-format-quote-close:
<br/><br/>
<a href="https://github.com/mlguys" target="_blank" class="author centered">Wojak</a>
<span class="role centered">Prop Trader</span>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Since 2021, I've been a dedicated user of Hummingbot, primarily utilizing the pure market making strategy. Based on my profitable strategies, I started an algo-trading startup in Saudi Arabia!
:material-format-quote-close:
</span>
<br/><br/>
<span class="author centered">Hyder</span>
<span class="role centered">Prop Trader</span>
{ .testimonial }

</div>

---

# A Global Community of Algo Traders

![](/assets/img/globe.png)

<div class="grid cards wide" markdown>

- :material-information-outline: __[Foundation](/about)__: About the Foundation and our mission
- :material-account-group: __[Community](/community)__: Join our global community of algo traders
- :material-gavel: __[Governance](/governance)__: Decide how the Hummingbot framework evolves
- :material-frequently-asked-questions: __[FAQ](/faq)__: Answers to common questions

</div>

---
# Get the Hummingbot newsletter

### Published when a new Hummingbot release drops (about every 2 months), our official newsletter tells you about upcoming events and new contributions from the global Hummingbot community.

<br />

[:octicons-download-16: Get the Newsletter](https://hummingbot.substack.com/){ .md-button .md-button--primary }
