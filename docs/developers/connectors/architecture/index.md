# Connector Architecture

[![Connector Architecture Diagram](/assets/img/connector-architecture-diagram.svg)](/assets/img/connector-architecture-diagram.svg)

The **_Architecture Diagram_**, given above, depicts the high-level design of a Connector. 

!!! tip
    Notice that for `Derivative` connectors, we have a multiple inheritance to `ExchangeBase` and `PerpetualTrading`.

## Connector Component Overview

[![Connector Architecture Diagram](/assets/img/high-level-connector-architecture-diagram.svg)](/assets/img/high-level-connector-architecture-diagram.svg)

Each connector is comprised of the following components.
Below are the detailed descriptions of tasks for each component and its corresponding files.

### Exchange/Derivative.py

**File:** `*_exchange/derivative.py` — REQUIRED

Connector modules are centered around an `Exchange/Derivative` class, which are ultimately children of [`ConnectorBase`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/connector_base.pyx).
Each `Exchange/Derivative` class contains an `OrderBookTracker` and `UserStreamTracker,` and they are responsible for maintaining order books and user account information.

<<<<<<< Updated upstream:docs/developers/connectors/architecture/index.md
`Exchange/Derivative` instances also contain a list of `InFlightOrders`, which are orders placed by Hummingbot currently on the order book.
=======
`Exchange/Derivative` instances also contain a `ClientOrderTracker` which tracks the connector's `InFlightOrders`, which are orders placed by Hummingbot currently on the order book.
Typically, it is also helpful to have an exchange-specific `Auth` class, which generates the necessary authentication parameters/headers to access restricted REST endpoints and WebSocket channel, such as for placing orders and listening for order updates.
>>>>>>> Stashed changes:docs/developers/connectors/architecture.md

The `Derivative` class in particular inherits functions that are specifically used in perpetual markets.
See the [`PerpetualTrading`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/perpetual_trading.py) class for more info.

### ConnectorAuth.py

**File:** `*_auth.py` — OPTIONAL

This class generates the appropriate authentication headers for the restricted REST endpoints to be used by the `Exchange/Derivative` and `UserStreamTrackerDataSource` classes.
Generally, this would mean constructing the appropriate HTTP headers and authentication payload(as specified by the exchange's API documentation)

Some arguments tend to include:

- HTTP Request Type
- Endpoint URL
- Mandatory parameters to pass on to the exchange (e.g. API key, passphrase, request body)

Depending on the specific exchange, different information may be needed for authentication. Typically, the `Auth` class will:

- Generate a timestamp/nonce.
  Generate a signature based on the time, access method, endpoint, provided parameters, and the user's private key.
- Compile the public key, timestamp, provided parameters, and signature into a dictionary to be passed via an `http` or `ws` request.

!!! note
    This module is typically required for centralized exchange only. Generally, auth for DEXs is handled by the respective wallet.

### OrderBookTracker

**File:** `*_order_book_tracker.py` — REQUIRED

Each `Exchange/Derivative` class contains an `OrderBookTracker` to maintain a real-time order book of one/multiple trading pairs and is responsible for applying the order book snapshots and diff messages to the corresponding `OrderBook`.

- An `OrderBookTracker` contains a Dictionary of `OrderBook` for each trading pair it is maintaining.
- `APIOrderBookTrackerDataSource` class contains either API requests or WebSocket feeds to pull order book data from the exchange.
- The `OrderBook` class contains methods that convert raw order book snapshots/diff messages from exchanges into usable dictionaries of active bids and asks.

### UserStreamTracker

**File:** `*_user_stream_tracker.py` — OPTIONAL

Each `Exchange/Derivative` class contains a `UserStreamTracker`, to maintain the current state of the user's account, orders and positions.

- `APIUserStreamTrackerDataSource` class contains either API requests or WebSocket feeds to maintain user balance and order data from the exchange.
- The `Auth` passed from the `Exchange/Derivative` class contains methods to construct the appropriate authentication requests for REST API calls or WebSocket channel subscription requests.

### OrderBookTrackerDataSource

**File:** `*_order_book_data_source.py` — REQUIRED

The `OrderBookTrackerDataSource` class is responsible for order book data retrieval. It simply collects, parses, and queues the data stream to be processed by `OrderBookTracker`. Generally, this would mean pulling data from the exchange's API/WebSocket servers. For **Perpetual** connectors, the `OrderBookTrackerDataSource` is also tasked with maintaining the funding information of the active market.

It is necessary to track the timestamp/nonce of each message received from the exchange API servers to maintain a consistent and up-to-date order book. Depending on the exchange responses, we can keep an order book in the following ways:

1. Presence of Timestamp/Nonce
   - In this ideal scenario, we will only 'apply' delta messages onto the order book if and only if the timestamp/nonce of the message received is **above** or **+1** of `_last_diff_uid` in the order book.
2. Absence of Timestamp/Nonce
   - In this scenario, we would have to assign a timestamp to every message received from the exchange and apply the delta messages sequentially only if it is received **after** the snapshot message and **greater** than the `_last_diff_uid`.

!!! note
    It is important that the order book being maintained reflects all changes and is consistent with the order book on the exchange. As a safeguard/fallback, in the event when Hummingbot is unable to adequately maintain the order book, executing periodic order book snapshot requests can help to ensure that any deltas missed would be corrected.

### UserStreamTrackerDataSource

**File:** `*_user_stream_data_source.py` — OPTIONAL

The `UserStreamTrackerDataSource` class deals with user data retrieval. It simply collects, parses and queues the data stream to be processed by `UserStreamTracker`.

Unlike `OrderBookTrackerDataSource`, `UserStreamTrackerDataSource` only retrieves data about user account balances and orders.

### InFlightOrder

**File:** `/hummingbot/core/data_type/in_flight_order.py`

Stores all details pertaining to the current state of an order.

It is important to keep a consistent and accurate state of all active orders placed by the user. This ensures that the strategies are given the correct information and are able to perform their tasks accordingly.

### ClientOrderTracker

**File:** `/hummingbot/connector/client_order_tracker.py`

An instance of `ClientOrderTracker` holds and manages `InFlightOrders` for its connector.

Provides utilities for connectors to update in-flight orders and to handle order errors.




For more details on how to begin implementing the components, please refer to the [Connector Tutorial](/developers/contributions/)

## Protocol Connector Components Overview\ [TBD\]

Coming soon.
