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

### See [Hummingbot Reported Volumes](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52) for a real-time dashboard of the aggregated, anonymized trade volumes reported by Hummingbot instances.

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

## :fontawesome-solid-arrows-turn-to-dots: Market Makers

<div class="accent" markdown>

### For many crypto market making firms, Hummingbot is the trusted starting point for creating secure, scalable algo trading solutions.

</div>

<div class="grid" markdown>

<span class="quote">
:material-format-quote-open:
As the company that open-sourced Hummingbot, we're incredibly proud of how the community has embraced it. Today, we run bespoke strategies for our institutional clients using many custom Hummingbot instances.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/authors/carlo-las-marias.jpg" class="headshot centered" />
<br/>
<a href="https://www.linkedin.com/in/carlolm/" target="_blank" class="author centered">Carlo Las Marias</a>
<br/>
<a href="https://coinalpha.com/" target="_blank"><img src="/assets/logos/coinalpha-dark.png" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
We started with Hummingbot as the foundation for our market-making business. Their WebSocket connector architecture is the most accessible in the market. We still use it from time to time and enjoy their great documentation.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/brand/3jane-eugene.jpg" class="headshot centered" />
<br/>
<a href="https://www.linkedin.com/in/etartakovsky/" target="_blank" class="author centered">Eugene Tartakovsky</a>
<br/>
<a href="https://3jane.com/" target="_blank"><img src="/assets/brand/3jane-2.jpg" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot has served as a reliable base for us to build custom tools and strategies. It has many quality connectors and all components are well thought out, allowing us to flexibly modify the open source code.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/brand/enclave-jelle-buth.jpg" class="headshot centered" />
<br/>
<a href="https://www.linkedin.com/in/jelle-buth/" target="_blank" class="author centered">Jelle Buth</a>
<br/>
<a href="https://www.enflux.io/" target="_blank"><img src="/assets/brand/enclave.jpg" class="logo centered"></a>
{ .testimonial }

</div>

</br />

## :fontawesome-solid-people-group: Algo Traders & Boutique Firms

<div class="accent" markdown>

### Algorithmic traders and boutique firms leverage Hummingbot for capturing cross-chain + cross-exchange arbitrage opportunities with the [AMM Arbitrage strategy](strategies/amm-arbitrage.md) and earning liquidity mining rewards on [Hummingbot Miner](https://miner.hummingbot.io).

</div>

<div class="grid" markdown>

<span class="quote">
:material-format-quote-open:
Hummingbot allowed me to launch a successful suite of trading strategies managing over $2 billion in trade volume. I can't recommend Hummingbot enough for any algo trader seeking a 0 to 1 platform.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/authors/kollan.png" class="headshot centered"/>
<br/>
<a href="https://summitoperations.co/" target="_blank" class="author centered">Kollan</a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Since 2021, I've been a dedicated user of Hummingbot, primarily utilizing the pure market making strategy. Based on my profitable strategies, I started an algo-trading startup in Saudi Arabia!
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/authors/hyder.jpg" class="headshot centered" />
<br/>
<span class="author centered">Hyder</span>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot revolutionized my crypto trading. Using advanced strategies, I developed my own successful trading style and consistently ranked at the top of Hummingbot Miner's leaderboard for months.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/authors/wojak.png" class="headshot centered" />
<br/>
<a href="https://github.com/mlguys" target="_blank" class="author centered">Wojak</a>
{ .testimonial }

</div>

</br />

## :material-upload-network: Protocols & Token Projects

<div class="accent" markdown>

### Blockchain protocols harness Hummingbot to foster liquidity, catalyzing their ecosystems without the overhead of external market makers.

</div>

<div class="grid wide" markdown>

<span class="quote">
:material-format-quote-open:
We're big supporters of Hummingbot's vision of open source algo trading. Their community of market makers has contributed significantly to the liquidity on Avalanche-based DEXs.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/brand/ava-labs-lydia.jpg" class="headshot centered" />
<br/>
<a href="https://www.linkedin.com/in/encycloplydia/" target="_blank" class="author centered">Lydia Chiu</a>
<br/>
<a href="https://www.avalabs.org/" target="_blank"><img src="/assets/brand/ava-labs.jpg" class="logo centered"></a>
{ .testimonial }

<span class="quote">
:material-format-quote-open:
Hummingbot plays a pivotal role in Harmony's DeFi strategy. Our Hummingbot connector enables our community to power liquidity for current and future projects on Harmony.
:material-format-quote-close:
</span>
<br/><br/><br/>
<img src="/assets/brand/harmony-stephen.jpg" class="headshot centered" />
<br/>
<a href="https://www.linkedin.com/in/tsestephen/" target="_blank" class="author centered">Stephen Tse</a>
<br/>
<a href="https://www.harmony.one/" target="_blank"><img src="/assets/brand/harmony.jpg" class="logo centered"></a>
{ .testimonial }


</div>

---

# What strategies can you build with Hummingbot?

### Learn how to design and code strategies like these in [Botcamp](https://www.botcamp.xyz/), the official training and membership program for the Hummingbot community.

<div class="grid cards" markdown>

-   [![](/blog/introducing-v2-strategies/cover.png)](/blog/introducing-v2-strategies)

    ### [Introducing V2 Strategies](/blog/introducing-v2-strategies)

-   [![](/academy-content/directional-trading-with-macd-and-bollinger-bands/cover.webp)](/academy-content/directional-trading-with-macd-and-bollinger-bands/)

    ### [Directional Trading with MACD and Bollinger Bands](/academy-content/directional-trading-with-macd-and-bollinger-bands/)

-   [![](/academy-content/technical-deep-dive-into-the-avellaneda-stoikov-strategy/cover.webp)](academy-content/posts/technical-deep-dive-into-the-avellaneda-stoikov-strategy/index.md)

    ### [Technical Deep Dive into the Avellaneda & Stoikov Strategy](academy-content/posts/technical-deep-dive-into-the-avellaneda-stoikov-strategy/index.md)

</div>

<br />

[Join Botcamp](https://www.botcamp.xyz/){ .md-button .md-button--primary .centered }

---

# A Global Nexus for Algo Traders

### The Hummingbot Foundation, a not-for-profit beacon, ensures the codebase's decentralized evolution, guided by the Hummingbot community and Governance Token (HBOT).

- [About Us](/about): About the Foundation and our mission
- [Governance](/governance): Decide how Hummingbot evolves
- [FAQ](/faq): Answers to common questions

---

# Sponsors & Backers

### We are grateful to the exchanges, protocols, and companies who support our quest to **democratize high-frequency trading**!

<div class="flex-container home">
  <div class="flex-item">
    <img src="/assets/logos/hyperliquid-dark.png" class="dark-logo"/>
    <img src="/assets/logos/hyperliquid-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/dydx-dark.png" class="dark-logo"/>
    <img src="/assets/logos/dydx-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/vega-dark.png" class="dark-logo"/>
    <img src="/assets/logos/vega-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/initialized-dark.png" class="dark-logo"/>
    <img src="/assets/logos/initialized-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/defiance-dark.png" class="dark-logo"/>
    <img src="/assets/logos/defiance-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/bain-capital-dark.png" class="dark-logo"/>
    <img src="/assets/logos/bain-capital-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/1kx-dark.png" class="dark-logo"/>
    <img src="/assets/logos/1kx-light.png" class="light-logo"/>
  </div>
  <div class="flex-item">
    <img src="/assets/logos/coinalpha-dark.png" class="dark-logo"/>
    <img src="/assets/logos/coinalpha-light.png" class="light-logo"/>
  </div>
</div>

---
# Stay Ahead with the Hummingbot newsletter

### Published when each monthly release drops, our official newsletter has all the Hummingbot news, upcoming events, and contributions from the global Hummingbot community!

<br />

[:octicons-download-16: Get the Newsletter](https://hummingbot.substack.com/){ .md-button .md-button--primary }
