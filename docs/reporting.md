Hummingbot Foundation maintains a public, real-time dashboard that provides transparent insights into Hummingbot usage across all exchanges. This data is essential for exchanges to track their integration success and understand community adoption.

## Reported Volumes Dashboard

![Reported Volumes](./assets/img/reported-volumes-light.png#only-light)
![Reported Volumes](./assets/img/reported-volumes-dark.png#only-dark)

[**View Live Dashboard →**](https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52){: .md-button .md-button--primary }

The Reported Volumes dashboard provides comprehensive, real-time metrics including:

## What the Reported Volumes Dashboard Shows

### Exchange Connector Usage

- **Total volume by exchange**: Ranked list of all connected exchanges
- **Active instances**: Number of live Hummingbot clients per exchange
- **Version distribution**: Usage across different Hummingbot releases

### Version Insights

- **Release adoption**: How quickly users upgrade to new versions
- **Fork tracking**: Community-maintained versions and modifications
- **Feature utilization**: Which Hummingbot capabilities drive the most volume

### Interactive Filters

You can customize the view using several controls:

![Dashboard Controls](./toggles.png)

- **Exchange filter**: Focus on specific exchanges or compare subsets
- **Version filter**: Analyze adoption of different Hummingbot releases
- **Timespan selector**: View data from 1 day to 6 months
- **Dark/light mode**: Optimal viewing for any environment

## Data Transparency

### What Data Is Collected

Hummingbot instances automatically report the following anonymized metrics every 15 minutes:

| Metric | Purpose | Privacy Level |
|--------|---------|---------------|
| **Aggregated trade volume** | Track exchange usage | Anonymized USD totals only |
| **Exchange identifier** | Attribute volume to exchanges | Hummingbot connector id |
| **Hummingbot version** | Monitor version adoption | Version numbers only |
| **Instance information** | Monitor OS adoption | General system specs |
| **Anonymous Instance ID** | Prevent double-counting | Random UUID, not traceable |

### Privacy Protection

- **No personal information** is collected or stored
- **No individual trading data** is transmitted
- **No wallet addresses** or **API keys** are included
- **All data is aggregated** before being displayed publicly

### Data Usage Policy

- Data is used **exclusively for reporting purposes**
- **Never sold to third parties** or used for commercial purposes beyond reporting
- Helps **sustain Hummingbot development** through exchange partnerships
- Enables **transparent community metrics** for ecosystem health

### Disabling Data Reporting

Users who prefer not to participate in data reporting can disable it:

```bash
config anonymized_metrics_mode
```

Set to `anonymized_metrics_disabled` to opt out of all data collection.

### Why Most Users Keep It Enabled

- **Supports ecosystem growth** through exchange partnerships
- **Maintains complete anonymity** of individual traders
- **Enables better exchange integrations** through usage insights
- **Contributes to open-source transparency** and community metrics

## Technical Implementation

### Data Collection Process

1. **Client-side aggregation**: Volumes are totaled locally every 15 minutes
2. **Secure transmission**: HTTPS-encrypted data sent to Foundation servers
3. **Server-side processing**: Data is further aggregated and anonymized
4. **Public dashboard**: Real-time visualization updated continuously

### Open Source Verification
The entire data collection process is open source and auditable:

- **Review the code**: All collection logic is visible in the [Hummingbot repository](https://github.com/hummingbot/hummingbot)
- **Community oversight**: Any changes to data collection are publicly discussed
- **Transparent operation**: Dashboard methodology is fully documented

---

*The Reported Volumes dashboard represents Hummingbot's commitment to transparency and community-driven development. By providing open access to usage metrics, we enable data-driven decisions that benefit the entire ecosystem.*