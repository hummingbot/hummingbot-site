## Basic validations

### Connecting an API key
- Connects when a valid API key is added.
- Throws an error or warning if the API key is invalid, expired, or has other issues.
- The same API key can be used on multiple bots unless specified that can only be used in one instance at a time.

### Connecting an API key
- Displays the current available balance and should match the balance shown in the exchange.
- The allocation should be updated whenever there is an open order.

### Market availability during strategy creation
- Autocomplete lists should be available when selecting a market during strategy creation.
- All markets should work when the created strategy is started.

### Order submission and cancellation
- Created orders must include an order ID with broker prefix if there is.
- Orders are submitted without any error in the client.
- Submitted order should match the information of the open order in the exchange.
- Orders are canceled without any error.Orders are not getting stuck or left out unless it is a manual order.
- The client should not cancel orders that are not created within the instance such as manual orders, orders created by other instances, or third-party bots.
- Gracefully rejects/cancels orders that don’t pass the exchange rule.

### Data integrity
- Orders book in the client is in sync with the order book in the exchange.
- Constantly update whenever there is a change in the exchange.
- Prices are updated constantly (status and ticker) whenever there is a change in the exchange.

### Filled event

## Advanced validations

### Compatibility with available strategies

- The connector should work on any of the strategies available in the client unless the connector is intended for a specific strategy.
- The connector should work both as a maker and taker exchange (spot connectors only)

### Price updates and balance updates

- In the status window, the prices are constantly being updated whenever a change takes place in the order book.
- Available balances are updated whenever an order is created or canceled.
- A consistent number of orders are created except if there are multiple bots using the asset, there are hanging orders or an order is removed due to a specific parameter.

### Fast refresh rate

- Gracefully cancels orders: No stuck or lost orders, and balance updates accordingly.
- There should be no error in the logs during the fast cancellation.
- Filled orders are tracked and saved if a filled event took place.
- Rate limit warnings are thrown whenever the request is close to maximizing the allowed limit.
- Stops placing an order when the rate limit is reached but maintains the connectivity with the exchange.

### Long refresh rate

- Maintains connectivity when there is an open order.
- Gracefully cancel an order when not filled.
- No error should come up during the period that an order is opened (exceptions if there are network issues).
- If a network issue took place, the open orders should be tracked once the connection is established.
- Tracked and save filled events that may happen during a disconnection.

### Multiple orders

- Simultaneously submitting multiple orders without any error.
- Simultaneously cancels all the orders without any error.
- Available balance and allocations are adjusted accordingly.
- Order amounts and levels are adjusted accordingly based on the available balance.

### Hanging orders

- Continuously tracked hanging orders created within the instance.
- Tracked and saved a filled hanging order.
- Hanging order should be canceled whenever the strategy is stopped or reached the cancelation percentage.
- Hanging orders remain uncanceled whenever non-hanging orders are refreshed.
- No hanging order duplication.

### Multiple bots

- Open orders in each bot should not be affected by cancelation events happening in another bot.
- There should be no conflicting order IDs.

### `history` command

- Correctly display filled order information.
- No duplicate orders.
- Handles partial fills.
- Display only orders created by the instance.
- Correctly displays asset information.

### Trade fees

- Should use the actual trade fees if available or otherwise the assumed fee levels.
- The transaction fee recorded in the client (CSV or SQLite) should match the fee shown in the trade history in the exchange.

#### Heartbeat

- When enabled, all filled trade volume by exchange is aggregated and reported.
- If the bot is stopped and a filled event took place within the heartbeat interval, it is still aggregated.

