## Exchange API requirements

Exchanges with REST APIs must provide:

- Endpoint to get trading rules. [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)
- Endpoint to check the server status (in general any endpoint returning a low amount of information could serve for this purpose, but a ping or time endpoint would be ideal). [(example)](https://binance-docs.github.io/apidocs/spot/en/#test-connectivity)
- Endpoint to get active orders. [(example)](https://binance-docs.github.io/apidocs/spot/en/#query-order-user_data)
- Endpoint to create new orders. [(example)](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade)
- Endpoint to get the current account balance. [(example)](https://binance-docs.github.io/apidocs/spot/en/#account-information-user_data)
- Documentation of the rate limits applied for each endpoint and global limits for each IP/connection. [(example)](https://binance-docs.github.io/apidocs/spot/en/#limits)

It is useful if the REST API provides the following, but a connector can be built without them:

- Endpoint to get the list of active trading pairs (this is sometimes referred to as "tokens info"). [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)

Exchanges with WebSocket APIs must provide:

- Public orders channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream)
- Public trades channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#trade-streams)
- Private orders updates channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-order-update)
- Private trades events channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-order-update)
- Documentation of the rate limits applied for each subscription and global limits for each IP/connection

It would be useful if the Websocket API also provides the following, but a connector can be built without them:

- Private balance events channel (if not present the connector has to be configured to estimate balance based on the connector activity) [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-account-update)
- The trade events include details about the fees charged for each trade (if not present the connector will have to operate estimating fees).

### Perp connector additional requirements

- REST API endpoint to check positions [(example)](https://binance-docs.github.io/apidocs/futures/en/#position-information-v2-user_data)
- REST API endpoint to configure the leverage [(example)](https://binance-docs.github.io/apidocs/futures/en/#change-initial-leverage-trade)

## Components

Below, we describe the components that need to be implemented to create a new connector. Some components can be implemented in parallel, but others have dependencies.

### Authorization

Class that provides the logic for the web assistant to correctly configure authenticated requests to the exchange (private endpoint). It should be a subclass of AuthBase

**Example**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_auth.py

**Dependencies**: None

### Utils

The Utils module is generally used to define functions that are used in several components from the connector. There is no need to add functions if the connector does not require special behavior when creating requests or does not have a special logic to generate order ids.

It is required to define in this module the configuration for the connector, including:
- Default fees
- Required parameters to establish a connection (for example the API Key and API secret).

The configurations have to be specified for each domain the connector will support (all connectors can handle multiple domains if configured correctly)

**Example**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_utils.py

**Dependencies**: None

### Order Book

Subclass of `OrderBook` to define specialized methods to create the snapshot messages, difference messages and trade messages based on the events received by the data source

**Example**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_order_book.py

**Dependencies**: None

### Order Book Data Source

Subclass of `OrderBookTrackerDataSource`. It includes all the logic related to receiving updates through websocket for all public channels. The class should include:
- Logic to provide the latest prices in the exchange for some one or more trading pairs
- Logic to return all supported trading pairs (filtering out for example any pair that could be disabled in the exchange)
- Functionality to translate trading pairs from exchange notation to the client notation, and the other way around
- Method to get a full copy of the current order book for a particular trading pair
- Logic to subscribe to the required public channels, and process all events received. The required channels would be: order book differences and public trades events. It also requires a method to regularly do a full update of the order book (snapshot).

A tracker class has to be created for the connector (subclass of OrderBookTracker) to start the background process that receives the events and updates.

**Example**:
- https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_api_order_book_data_source.py
- https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_order_book_tracker.py

**Dependencies**: Order Book (to create diff messages, snapshot messages and trade messages)

### User Stream Data Source

Subclass of `UserStreamTrackerDataSource`

The class should include:
- Logic to subscribe to the private websocket channels to receive order updates, trade updates and balances updates
- Logic to process each type of event

A tracker class has to be created for the connector (subclass of `UserStreamTracker`) to start the background process that receives the events and updates.

**Examples**: 

* https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_api_user_stream_data_source.py
* https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_user_stream_tracker.py

**Dependencies**:

- Order Book Data Source (to translate token pairs to the exchange notation only)
- Authorization component

### Connector

Subclass of `ExchangeBase` (for exchange connectors) or `ConnectorBase` (for [Gateway](/developers/gateway) connectors).

It should include:

- Logic to start and stop all required connections and subscriptions for a correct operation.
- Method to determine if the connector is ready to operate (all connections have been stablished) and to check the status regularly
- Functionality for orders lifecycle: creation and cancellation. To keep track of orders and process them correctly it should use an instance of ClientOrderTracker
- Method to send REST requests to the server (using the WebAssistant) and correctly handle error results
- Method to update trading rules regularly
- Logic to regularly update the balance using REST API (this is the backup for the updates received though the websocket)
- Logic to regularly check for order updates using the REST API (this is the backup for the updates received through the websocket)
- Functionality to process correctly the private channel events received through the user stream

**Example**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_exchange.py

**Dependencies**: 

- Order Book Data Source
- User Stream Data Source

### Perp connector additional requirements

In the case of a perpetuals exchange connector, the connector component should subclass also `PerpetualTrading`, and has to include the following functionality:

- Logic to get the current leverage from the exchange and to set it in the exchange
- Provide the supported position modes and change them in the exchange (if allowed by the exchange)
- Method to get the current funding information and logic to regularly update it
- Logic to keep positions status updated

**Example**: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/derivative/binance_perpetual/binance_perpetual_derivative.py

## Unit testing

It is expected that all the components mentioned before will have unit tests validating all methods. This is independent from any validation done by QA testing.

All connector unit tests should not depend on active connections to the exchange to perform the validations. Instead, the interactions with the exchange should always be mocked or emulated. That can be done using the `aioresponses` library for all REST requests, and using the class `NetworkMockingAssistant` for websocket interactions. 

Examples for their use can be found in both Binance and Binance Perpetual connectors' unit tests.

**Binance connector tests:** https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/exchange/binance

**Binance Perpetual connector tests:** https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/derivative

## Special Considerations

### Connector configuration when no websocket balance events are available

When an exchange does not provide a websocket endpoint for balance updates, the connector has to be configured to estimate balances based on the connector activity.

1. Set the `_real_time_balance_update` variable to `False`
2. The method used to update the balance using the REST API regularly should also update the in flight orders snapshot with the following lines:

```python
self._in_flight_orders_snapshot = {k: copy.copy(v) for k, v in self._in_flight_orders.items()}
self._in_flight_orders_snapshot_timestamp = self.current_timestamp
```

As an example, please refer to the Bybit connector: https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/derivative/bybit_perpetual/bybit_perpetual_derivative.py