Hummingbot Foundation maintains a public, real-time dashboard that provides transparent insights into Hummingbot usage across all exchanges. This data is essential for exchanges to track their integration success and understand community adoption.

## Reported Volumes Dashboard

[**View Live Dashboard →**](https://reporting.hummingbot.org){: .md-button .md-button--primary }

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