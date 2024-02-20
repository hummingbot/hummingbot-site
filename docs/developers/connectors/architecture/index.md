!!! note
    The information below are for developers building `spot` and `perpetual` connectors that integrate directly into the Hummingbot client. For information on developing `gateway` connectors that use [Gateway](/gateway), see [Building Gateway Connectors](/gateway/adding-dex-connectors).

Here is the high-level design of a connector:

[![Connector Architecture Diagram](/assets/img/connector-architecture-diagram.svg)](/assets/img/connector-architecture-diagram.svg)

Note that for Derivative (`perp`) connectors, we have a multiple inheritance to `ExchangeBase` and `PerpetualTrading`.

## Component Overview

[![Connector Architecture Diagram](/assets/img/high-level-connector-architecture-diagram.svg)](/assets/img/high-level-connector-architecture-diagram.svg)

Each connector is comprised of the following components.
Below are the detailed descriptions of tasks for each component and its corresponding files.

### Exchange/Derivative.py

**File:** `*_exchange/derivative.py` — **REQUIRED**

Connector modules are centered around an `Exchange/Derivative` class, which are ultimately children of [`ConnectorBase`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/connector_base.pyx).
Each `Exchange/Derivative` class contains an `OrderBookTracker` and `UserStreamTracker,` and they are responsible for maintaining order books and user account information.

`Exchange/Derivative` instances also contain a `ClientOrderTracker` which tracks the connector's `InFlightOrders`, which are orders placed by Hummingbot currently on the order book.
Typically, it is also helpful to have an exchange-specific `Auth` class, which generates the necessary authentication parameters/headers to access restricted REST endpoints and WebSocket channel, such as for placing orders and listening for order updates.

The `Derivative` class in particular inherits functions that are specifically used in perpetual markets.
See the [`PerpetualTrading`](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/perpetual_trading.py) class for more info.

### ConnectorAuth.py

**File:** `*_auth.py` — *OPTIONAL*

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

**File:** `*_order_book_tracker.py` — **REQUIRED**

Each `Exchange/Derivative` class contains an `OrderBookTracker` to maintain a real-time order book of one/multiple trading pairs and is responsible for applying the order book snapshots and diff messages to the corresponding `OrderBook`.

- An `OrderBookTracker` contains a Dictionary of `OrderBook` for each trading pair it is maintaining.
- `APIOrderBookTrackerDataSource` class contains either API requests or WebSocket feeds to pull order book data from the exchange.
- The `OrderBook` class contains methods that convert raw order book snapshots/diff messages from exchanges into usable dictionaries of active bids and asks.

### UserStreamTracker

**File:** `*_user_stream_tracker.py` — *OPTIONAL*

Each `Exchange/Derivative` class contains a `UserStreamTracker`, to maintain the current state of the user's account, orders and positions.

- `APIUserStreamTrackerDataSource` class contains either API requests or WebSocket feeds to maintain user balance and order data from the exchange.
- The `Auth` passed from the `Exchange/Derivative` class contains methods to construct the appropriate authentication requests for REST API calls or WebSocket channel subscription requests.

### OrderBookTrackerDataSource

**File:** `*_order_book_data_source.py` — **REQUIRED**

The `OrderBookTrackerDataSource` class is responsible for order book data retrieval. It simply collects, parses, and queues the data stream to be processed by `OrderBookTracker`. Generally, this would mean pulling data from the exchange's API/WebSocket servers. For **Perpetual** connectors, the `OrderBookTrackerDataSource` is also tasked with maintaining the funding information of the active market.

It is necessary to track the timestamp/nonce of each message received from the exchange API servers to maintain a consistent and up-to-date order book. Depending on the exchange responses, we can keep an order book in the following ways:

1. Presence of Timestamp/Nonce
   - In this ideal scenario, we will only 'apply' delta messages onto the order book if and only if the timestamp/nonce of the message received is **above** or **+1** of `_last_diff_uid` in the order book.
2. Absence of Timestamp/Nonce
   - In this scenario, we would have to assign a timestamp to every message received from the exchange and apply the delta messages sequentially only if it is received **after** the snapshot message and **greater** than the `_last_diff_uid`.

!!! note
    It is important that the order book being maintained reflects all changes and is consistent with the order book on the exchange. As a safeguard/fallback, in the event when Hummingbot is unable to adequately maintain the order book, executing periodic order book snapshot requests can help to ensure that any deltas missed would be corrected.

### UserStreamTrackerDataSource

**File:** `*_user_stream_data_source.py` — *OPTIONAL*

The `UserStreamTrackerDataSource` class deals with user data retrieval. It simply collects, parses and queues the data stream to be processed by `UserStreamTracker`.

Unlike `OrderBookTrackerDataSource`, `UserStreamTrackerDataSource` only retrieves data about user account balances and orders.

### InFlightOrder

**File:** `/hummingbot/core/data_type/in_flight_order.py`

Stores all details pertaining to the current state of an order.

It is important to keep a consistent and accurate state of all active orders placed by the user. This ensures that the strategies are given the correct information and are able to perform their tasks accordingly.

### ClientOrderTracker

**File:** `/hummingbot/connector/client_order_tracker.py`

An instance of `ClientOrderTracker` holds and manages `InFlightOrders` by calling the connector's `trigger_event` method.

Provides utilities for connectors to update in-flight orders and to handle order errors.


## Fee Accounting

The `BudgetChecker` uses the information from a `TradeFeeSchema` to generate a specific instance of `TradeFeeBase` that is then applied to an `OrderCandidate` in order to asses the order's effects on account balances.

### TradeFee

The `TradeFee` object contains the necessary information to account for fees when estimating an order's impact on account balances.

**Example: `TradeFee`**
```python
from hummingbot.client.settings import AllConnectorSettings

trade_fee_schema = AllConnectorSettings.get_connector_settings()[exchange].trade_fee_schema

percent = trade_fee_schema.maker_percent_fee_decimal if is_maker else trade_fee_schema.taker_percent_fee_decimal
fixed_fees = trade_fee_schema.maker_fixed_fees if is_maker else trade_fee_schema.taker_fixed_fees

trade_fee = AddedToCostTradeFee(percent, trade_fee_schema.percent_fee_token, fixed_fees)
```

### TradeFeeSchema

Contains the necessary information to build the `TradeFee` object.

For both makers and takers specifies percent and fixed fees, and tokens in which the fees are paid.

Exchanges must specify their respective default schemas inside their `[exchange]_utils.py` files:
```python
DEFAULT_FEES = TradeFeeSchema(
    maker_percent_fee_decimal=Decimal("0.001"),
    taker_percent_fee_decimal=Decimal("0.001")
)
```

- `percent_fee_token: str`
- `maker_percent_fee_decimal: Decimal`
- `taker_percent_fee_decimal: Decimal`
- `buy_percent_fee_deducted_from_returns: bool`
- `maker_fixed_fees: List`
- `taker_fixed_fees: List`


**Example: `TradeFeeSchema`**
```python
trade_fee_schema = TradeFeeSchema(
    maker_percent_fee_decimal=Decimal("1.0"),
    taker_percent_fee_decimal=Decimal("2.3")
)
```

### TradeFeeBase

A specific instance of the `TradeFeeBase` class defines the fees to be applied to an order - their types, amounts and assets.

- `fee_amount_in_quote()`: calculates a total fee in quote asset units as a combination of a percentage fee and fixed fees
- `get_fee_impact_on_order_cost()`: returns order cost for a particular position opening `OrderCandidate` with fees accounted for
- `get_fee_impact_on_order_returns()`: returns order returns for a particular position closing `OrderCandidate` with fees accounted for

### AddedToCostTradeFee

Extends `TradeFeeBase`, implements `get_fee_impact_on_order_cost()`, `get_fee_impact_on_order_returns()`.

Fees of this class are applied on top of the cost of a buy order (e.g. a buy order of 10 COINX at 9 USDT with a fee of 1% means that the user's account will be deducted 90.9 USDT and added 10 COINX — this is most exchanges' approach to fees).

### DeductedFromReturnsTradeFee

Extends `TradeFeeBase`, implements `get_fee_impact_on_order_cost()`, `get_fee_impact_on_order_returns()`.

Fees of this class are deducted from the returns of a buy order (e.g. a buy order of 10 COINX at 9 USDT with a fee of 1% means that the user's account will be deducted 90 USDT and added 9.9 COINX — this is Binance's approach to fees).


