[Smart Components](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/smart_components) are a new paradigm that let users create a self-executing, encapsulated piece of logic that can be used in any Script.

## Position Executor

The first Smart Component is the [PositionExecutor](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/smart_components/position_executor/position_executor.py), part of the Directional Framework introduced in version [1.13.0](/release-notes/1.13.0/#directional-framework) that combines this feature along with [Candles Feed](./candles-feed.md) to let users create TA-based strategies.

This component receives as input the strategy and `PositionConfig`, a new data type that includes the information needed to start a directional position on a perpetuals exchange that utilizes the [triple barrier method](https://www.mlfinlab.com/en/latest/labeling/tb_meta_labeling.html) popularized in [Advances in Financial Machine Learning](https://www.wiley.com/en-us/Advances+in+Financial+Machine+Learning-p-9781119482086) by Martin Prado.

In future releases, we aim to extend this component to spot exchanges.

Watch this recording from a recent [community call](/#community-calls) to learn how to use this feature:

<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/X63rACPjtUE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
