# Order Lifecycle and Market Events

Exchange connectors track status updates of all orders created in Hummingbot and emit events on status updates of its orders for the strategy modules.
Be careful when implementing a new exchange connector to ensure all the status updates and emitted events adhere to the semantics defined by Hummingbot.

### Order Tracking

Order tracking starts when `_create_order()` is called. It is called from within the `buy()` and `sell()` functions.
An exchange connector should keep tracking the order's status and emit events for any change of states until the order is completed, cancelled, expired, or failed.

!!! note
This is done by calling `start_tracking_order()` method in the #Exchange# class. `start_tracking_order()` should be called before the API request for placing the order is executed.

### Order Lifecycle Flowchart

[![Figure 1: Order lifecycle flowchart](/assets/img/connector-order-lifecycle.svg)](/assets/img/connector-order-lifecycle.svg)

### Creating an Order

An order is created by invoking `buy()` or `sell()` in an exchange connector - usually by a strategy module.
`buy()` and `sell()` would return immediately with a client-side order ID that Hummingbot uses to track the order's status.
They would schedule the order to be submitted to the exchange as soon as possible but would not wait for the reply from the exchange before returning.

### Submitting an Order

In most of our built-in exchange connectors, order submission occurs in the `_create_order()` function - although it may be different for some decentralized exchange connectors.

The `_create_order()` method is responsible for performing the necessary trading rule checks before submitting the order via the REST API.
Upon receiving a successful response, a `BuyOrderCreatedEvent` or `SellOrderCreatedEvent` would be emitted. Otherwise, a `MarketOrderFailureEvent` would be emitted. Note that despite the naming, `MarketOrderFailureEvent` is emitted even for limit orders.

### Order Being Filled

Other market participants could fill an order over time once it's live on an exchange.
Depending on the order types, i.e. limit or market, the order could be filled either immediately or after another market participant fulfils it.

For every order fill on our orders, whether partially or entirely, the exchange connector must emit an `OrderFilledEvent`, to notify the strategy modules about the order's progress.

### Order Completion

Once an order has been completely filled, the exchange connector must emit a `BuyOrderCompletedEvent` or `SellOrderCompletedEvent`.
The exchange connector would stop tracking the order afterward.

`BuyOrderCompletedEvent` or `SellOrderCompletedEvent` should always come **after** an `OrderFilledEvent` has been emitted.

### Order Cancellation or Expiry

If an order is canceled or expired before it has been completely filled, an `OrderCancelledEvent` or an `OrderExpiredEvent` should be emitted.

For centralized exchanges, order tracking should end after emitting an `OrderCancelledEvent` or `OrderExpiredEvent`.
On decentralized exchanges - since it's possible for orders to be filled after cancellation or even expiry, due to block delays - the exchange connector may keep tracking the order for a certain amount of time afterwards.

### Order Failure

If a failed order has been rejected for any reason other than cancellation or expiry, `MarketOrderFailureEvent` must be emitted.
