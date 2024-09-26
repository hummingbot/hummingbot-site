---
template: home.html
title: Hummingbot - the open source framework for crypto market makers
hide:
  - toc
  - navigation
  - feedback
---

# How much volume does the Hummingbot community generate?

<div class="custom-metric">
  <div class="metric-value">33.5B</div>
  <div class="metric-label">Last 12M Reported Trade Volume</div>
</div>

```vegalite
{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Monthly USDT Volume",
    "width": "container",
    "height": 400,
    "data": {
      "values": [
        {"date": "2023-09-15", "volume": 486622937.0597207},
        {"date": "2023-10-15", "volume": 937200707.5059334},
        {"date": "2023-11-15", "volume": 2508799386.868773},
        {"date": "2023-12-15", "volume": 2397766942.158128},
        {"date": "2024-01-15", "volume": 2358984706.9379473},
        {"date": "2024-02-15", "volume": 6490279020.891341},
        {"date": "2024-03-15", "volume": 5056300673.532455},
        {"date": "2024-04-15", "volume": 2803765323.398611},
        {"date": "2024-05-15", "volume": 3073736618.040254},
        {"date": "2024-06-15", "volume": 3196767990.299173},
        {"date": "2024-07-15", "volume": 2131640444.2422123},
        {"date": "2024-08-15", "volume": 2009532310.070123}
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
        "title": "Reported Trading Volume (USD)",
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

# Partners & Sponsors

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
    <img src="/assets/logos/dydx-dark.png" alt="dYdX" class="dark-logo"/>
    <img src="/assets/logos/dydx-light.png" alt="dYdX" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/gate-dark.png" alt="Gate" class="dark-logo"/>
    <img src="/assets/logos/gate-light.png" alt="Gate" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/xrpl-dark.png" alt="XRPL" class="dark-logo"/>
    <img src="/assets/logos/xrpl-light.png" alt="XRPL" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/kucoin-logo-dark.png" alt="Kucoin" class="dark-logo"/>
    <img src="/assets/logos/kucoin-logo-light.png" alt="Kucoin" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/htx-logo-dark.png" alt="HTX" class="dark-logo"/>
    <img src="/assets/logos/htx-logo-light.png" alt="HTX" class="light-logo"/>
  </div>
</div>

---

# What can you do with Hummingbot?

<div class="grid cards wide" markdown>

-   :material-format-paint:{ .lg .middle } __Craft Cutting-Edge Strategies__

    ---

    Design sophisticated market making, arbitrage, and directional strategies using our library of templates and script examples.

    [:octicons-arrow-right-24: Strategy Docs](/strategies/)

-   :material-upload-network:{ .lg .middle } __Seamless Exchange Integration__

    ---

    Hummingbot establishes a direct WebSocket connection with many exchanges, including DEXs on L1/L2 blockchain networks.

    [:octicons-arrow-right-24: Connector Docs](/exchanges/)

-   :material-satellite-uplink:{ .lg .middle } __Backtest and Deploy with Ease__

    ---

    Backtest your strategies against historical data and deploy multiple instances with Dashboard, a new web-based user interface and control center.

    [:octicons-arrow-right-24: Dashboard Docs](/dashboard)

-   :material-directions-fork:{ .lg .middle } __Fork, Customize, Innovate__

    ---

    Certification equips you with skills as a Hummingbot developer, empowering you to earn bounties and customize strategies for yourself and others.

    [:octicons-arrow-right-24: Get Certified](/certification/)

</div>

---

# Who uses Hummingbot?

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
<a href="https://coinalpha.com/" target="_blank"><img src="/assets/logos/coinalpha-dark.png" class="logo centered"></a>
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

# What strategies can you build with Hummingbot?

### Learn how to design and code strategies like these in [Botcamp](https://www.botcamp.xyz/), the official training and membership program for the Hummingbot community.

<div class="grid cards" markdown>

-   [![](/blog/introducing-v2-strategies/cover.png)](/blog/introducing-v2-strategies)

    ### [Introducing V2 Strategies](/blog/introducing-v2-strategies)

-   [![](/academy/using-hyperliquid-vaults-with-hummingbot/hlp.png)](/academy/funding-rate-arbitrage-and-creating-vaults-on-hyperliquid//)

    ### [Funding Rate Arbitrage on Hyperliquid](/academy/funding-rate-arbitrage-and-creating-vaults-on-hyperliquid/)

-   [![](/academy/coding-a-custom-v2-controller/cover.webp)](/academy/coding-a-liquidation-sniper-v2-strategy-controller/)

    ### [Coding a Custom V2 Controller](/academy/coding-a-liquidation-sniper-v2-strategy-controller/)

</div>

<br />

[Join Botcamp](https://www.botcamp.xyz/){ .md-button .md-button--primary .centered }

---

# A Global Algo Trader Community

![](/assets/img/globe.png)

<div class="grid cards wide" markdown>

- :material-information-outline: __[Foundation](/about)__: About the Foundation and our mission
- :material-account-group: __[Community](/community)__: Join our global community of algo traders
- :material-gavel: __[Governance](/governance)__: Decide how the Hummingbot framework evolves
- :material-frequently-asked-questions: __[FAQ](/faq)__: Answers to common questions

</div>

---
# Stay Ahead with the Hummingbot newsletter

### Published when each monthly release drops, our official newsletter has all the Hummingbot news, upcoming events, and contributions from the global Hummingbot community!

<br />

[:octicons-download-16: Get the Newsletter](https://hummingbot.substack.com/){ .md-button .md-button--primary }
