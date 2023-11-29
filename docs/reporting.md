
See below for a real-time dashboard of the aggregated, anonymized trade volumes that Hummingbot clients report:

<a href="https://p.datadoghq.com/sb/a96a744f5-a15479d77992ccba0d23aecfd4c87a52" target="_blank" class="md-button md-button--primary">:fontawesome-solid-chart-line: Hummingbot Reported Volumes</a>

You can use the **exchange** and **version** toggles to filter the data. In addition, you can also change the timespan, as well as activate dark mode!

[![](./toggles.png)](./toggles.png)

## FAQ

### How does data reporting work?

Unless users turn it off, instances of the Hummingbot software send the following metrics to a Hummingbot Foundation server every 15 minutes:

* Aggregated trade volume
* Exchange where the trades occurred
* Version of Hummingbot software used
* Device and system information
* InstanceID (an anonymous, randomly-generated unique identifier)

All data collected will be used exclusively by Hummingbot Foundation for reporting purposes only, and we will never sell this data to any third party.

### How do I configure or turn off this feature?

In the Hummingbot client, run the following command:

```
config anonymized_metrics_mode
```

Change the parameter above to `anonymized_metrics_enabled` to enable or `anonymized_metrics_disabled` to disable for data reporting. 

### How does this dashboard help Hummingbot users?

To sustain development of the Hummingbot client, Hummingbot Foundation enters into fee share partnerships with exchanges. These partners need actionable data to convince their stakeholders and community members that a Hummingbot partnership is worthwhile. Their most common requests include total volume traded and number of users, so this dashboard provides this data.

### How can I be sure that this is the only data Hummingbot collects?

The Hummingbot codebase is 100% open source and publicly auditable on Github. Feel free to review the code for yourself and post publicly on our [Discord](https://discord.gg/hummingbot) what you found. We’ve always been open and honest with our community members and you’ll find that this case is no different.
