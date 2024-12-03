# Spot Connector v2.1

## Prerequisites

Before proceeding with the setup of the Spot Connector, ensure that you have the Hummingbot source version installed on your system. Follow the detailed installation instructions provided at [Hummingbot Installation Guide](./../../installation/linux.md). 

## API Checklist

| Endpoint                                | Required | Type            | Description |
|-----------------------------------------|-------------|-----------------|-------------|
| GET ACTIVE MARKETS                      | True        | Public REST     | Endpoint to get the list of active trading pairs (this is sometimes referred to as "tokens info"). [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) |
| GET LAST TRADED PRICE                   | True        | Public REST     |  |
| GET ORDERBOOK SNAPSHOT                  | True        | Public REST     |  |
| [TR] MINIMUM NOTIONAL SIZE              | Conditionally | Public REST     | Endpoint to get trading rules. [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) |
| [TR] MINIMUM ORDER SIZE                 | Conditionally | Public REST     | Endpoint to get trading rules. [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) |
| [TR] MINIMUM PRICE                      | Conditionally | Public REST     | Endpoint to get trading rules. [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) |
| [TR] ORDER INCREMENT                    | Conditionally | Public REST     | Endpoint to get trading rules. [(example)](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) |
| PING ENDPOINT                           | True        | Public REST     | In general any endpoint returning a low amount of information could serve for this purpose, but a ping or time endpoint would be ideal. [(example)](https://binance-docs.github.io/apidocs/spot/en/#test-connectivity) |
| GET ACCOUNT BALANCE                     | True        | Private REST    | Endpoint to get the current account balance. [(example)](https://binance-docs.github.io/apidocs/spot/en/#account-information-user_data) |
| GET ORDER STATUS BY client order id     | Conditionally | Private REST    |  |
| GET ORDER STATUS BY exchange_order_id   | Conditionally | Private REST    |  |
| GET TRADES HISTORY BY ORDER ID          | Conditionally | Private REST    |  |
| GET TRADES HISTORY BY TIMESTAMPS        | Conditionally | Private REST    |  |
| GET OPEN ORDERS                         | True        | Private REST    | Endpoint to get active orders [(example)](https://binance-docs.github.io/apidocs/spot/en/#query-order-user_data) |
| CREATE ORDERS                           | True        | Private REST    | Endpoint to create new orders [(example)](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade) |
| CREATE ORDERS with client_order_id      | Conditionally | Private REST    | Endpoint to create new orders [(example)](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade) |
| CANCEL ORDER BY exchange_order_id       | True        | Private REST    |  |
| CANCEL ORDER BY client order id         | Conditionally | Private REST    |  |
| ORDERBOOK CHANNEL (Min depth 100)       | True        | Public Websocket| Public orders channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream) |
| ORDERBOOK DIFF CHANNEL                  | Conditionally | Public Websocket| Public orders channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream) |
| USER ORDER/TRADES CHANNEL               | True        | Private Websocket| Private orders updates channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-order-update)<br>Private orders updates channel [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-order-update)] |
| USER BALANCE CHANNEL (total and available balance) | False | Private Websocket | Private balance events channel (if not present the connector has to be configured to estimate balance based on the connector activity) [(example)](https://binance-docs.github.io/apidocs/spot/en/#payload-account-update) |
| AUTHENTICATION                          | True | Other           | Class that provides the logic for the web assistant to correctly configure authenticated requests to the exchange (private endpoint). It should be a subclass of AuthBase [(example)](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_auth.py) |
| Rate limits                             | True | Other           | Documentation of the rate limits applied for each endpoint and global limits for each IP/connection. [(example)](https://binance-docs.github.io/apidocs/spot/en/#limits) | 
| SERVER TIME                             | Conditionally | Public REST     |  |



## Directory Setup

### Connector

Create `connector` folder inside hummingbot/hummingbot/connector/exchange called `connector_name`.

!!! Note 
    `connector_name` = the name of the connector in lowercase and separated with underscores if applies.  
        
    - Example without underscore: `binance`
        
    - Example with underscore: `crypto_com`

Create the following files inside of the `connector folder`:

- __init__.py
- `connector_name`_api_order_book_data_source.py
- `connector_name`_api_user_stream_data_source.py
- `connector_name`_auth.py
- `connector_name`_constants.py
- `connector_name`_exchange.py
- `connector_name`_order_book.py
- `connector_name`_utils.py
- `connector_name`_web_utils.py
- dummy.pxd
- dummy.pyx

### Tests

Create `test` folder dwad inside hummingbot/test/hummingbot/exchange called `connector_name`.

Create the following files inside of the `test folder`:

- __init__.py
- test_`connector_name`_api_order_book_data_source.py
- test_`connector_name`_api_user_stream_data_source.py
- test_`connector_name`_auth.py
- test_`connector_name`_exchange.py
- test_`connector_name`_order_book.py
- test_`connector_name`_utils.py
- test_`connector_name`_web_utils.py

## Build Process

### CONSTANTS

Add to the constant files the following variables

- [ ]  `DEFAULT DOMAIN`: check if is you have to add more than 1 domain, this constant will be used for generating the path url in web_utils.
- [ ]  `REST_URLS`: could be a dictionary like ByBit connector or a f-string like Binance connector, the `DEFAULT DOMAIN` variable will be used to select the correct URL.
- [ ]  `RATE_LIMITS`
- [ ]  `SERVER_TIME_PATH_URL`: check if the exchange needs that your `timestamp` is in sync with the server time.

### Web Utils

- `connector_name`_web_utils.py file
    - [ ]  Copy the Binance connector web_utils file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    - [ ]  Code the function to create the rest url, check if you need public and private url or just one of them.
    - If you need Time Sync:
        - [ ]  Check that you have the function `build_api_factory_without_time_synchronizer_pre_processor`.
        - [ ]  Check if you need changes in the function `get_current_server_time` (maybe you need to find the server time in the response).
        - [ ]  Code the `build_api_factory` with the time synchronizer as a rest_pre_processor
    - If you don’t need Time Sync:
        - [ ]  Delete the files related with the Time Sync and code the `build_api_factory` function without that.


### Utils 

- Code in `connector_name`_utils.py file
    - [ ]  Copy the Binance connector utils file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    - [ ]  Replace `DEFAULT_FEES` with the appropriate values .
    - [ ]  Check if you need connection to other domains or delete it.


### Order Book

- `connector_name`_order_book.py
    - [ ]  Copy the Binance connector order book file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    
    > For now we will not implement any method, the only purpose of this step because we need to import this class in the `connector_name`_api_order_book_data_source.py and we don’t want to have errors.
    >

### Order Book Data Source

- `connector_name`_api_order_book_data_source.py
    - [ ]  Copy the Binance connector order book data source file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    - [ ]  Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.

- test_`connector_name`_api_order_book_data_source.py
    - [ ]  Copy the Binance the test of the order book data source file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.

    > Now we are going to start implementing the functionalities of the Order Book Data source but in a TDD way.

    - Methods Development
        - REST
            - `orderbook`
                - [ ]  test_get_new_order_book_successful
                - [ ]  _order_book_snapshot
                - [ ]  _request_order_book_snapshot
                - [ ]  `ExchangeOrderBook`.snapshot_message_from_exchange
                - [ ]  test_get_new_order_book_raises_exception

        - WEBSOCKET
            - `listen_for_subscriptions`
                - [ ]  test_listen_for_subscriptions_subscribes_to_trades_and_order_diffs
                - [ ]  listen_for_subscriptions
                - [ ]  _subscribe_channels
                - [ ]  _process_websocket_messages
                - [ ]  test_listen_for_subscriptions_raises_cancel_exception
                - [ ]  test_listen_for_subscriptions_logs_exception_details
                - [ ]  test_subscribe_channels_raises_cancel_exception
                - [ ]  test_subscribe_channels_raises_exception_and_logs_error

            - `listen_for_trades`
                - [ ]  test_listen_for_trades_successful
                - [ ]  listen_for_trades
                - [ ]  _parse_trade_message
                - [ ]  test_listen_for_trades_cancelled_when_listening
                - [ ]  test_listen_for_trades_logs_exception

            - `listen_for_order_book_diffs`
                - [ ]  test_listen_for_order_book_diffs_successful
                - [ ]  listen_for_order_book_diffs
                - [ ]  _parse_order_book_diff_message
                - [ ]  test_listen_for_order_book_diffs_cancelled
                - [ ]  test_listen_for_order_book_diffs_logs_exception

            - `listen_for_order_book_snapshots`
                - [ ]  test_listen_for_order_book_snapshots_cancelled_when_fetching_snapshot
                - [ ]  listen_for_order_book_snapshots
                - [ ]  _parse_order_book_snapshot_message
                - [ ]  test_listen_for_order_book_snapshots_log_exception
                - [ ]  test_listen_for_order_book_snapshots_successful



### Auth

- `connector_name_auth.py`
    - [ ]  Copy the Binance connector auth file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.

- `test_connector_name_auth.py`
    - [ ]  Copy the Binance the test of the auth file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.

    - Methods Development
        - REST
            - `rest_authenticate`
                - [ ]  `test_rest_authenticate`
                - [ ]  `rest_authenticate`
                - [ ]  `add_auth_to_params`
                - [ ]  `header_for_authentication`
                - [ ]  `_generate_signature`
        - WEBSOCKET
            - [ ]  `ws_authenticate`


### User Stream Data Source

- `connector_name`_api_user_stream_data_source.py
    - [ ]  Copy the Binance connector user stream data source file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    - [ ]  Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.
    - [ ]  Check if you need `LISTEN_KEY_KEEP_ALIVE_INTERVAL`.

- test_`connector_name`_api_user_stream_data_source.py
    - [ ]  Copy the Binance the test of the user stream data source file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.

    > Now we are going to start implementing the functionalities of the User Stream Data source but in a TDD way.

    - Methods Development
        - WEBSOCKET
            - If you need Listen Key:
                - `get_listen_key`
                    - [ ]  test_get_listen_key_log_exception
                    - [ ]  _get_listen_key
                    - [ ]  test_get_listen_key_successful
                    - [ ]  test_ping_listen_key_log_exception
                    - [ ]  _ping_listen_key
                    - [ ]  test_ping_listen_key_successful
                    - [ ]  test_manage_listen_key_task_loop_keep_alive_failed
                    - [ ]  _manage_listen_key_task_loop
                    - [ ]  test_manage_listen_key_task_loop_keep_alive_successful

                - `listen_for_user_stream`
                    - [ ]  test_listen_for_user_stream_get_listen_key_successful_with_user_update_event
                    - [ ]  listen_for_user_stream (is in the superclass)
                    - [ ]  _connected_websocket_assistant
                    - [ ]  _subscribe_channels
                    - [ ]  _get_ws_assistant
                    - [ ]  _on_user_stream_interruption
                    - [ ]  test_listen_for_user_stream_does_not_queue_empty_payload
                    - [ ]  test_listen_for_user_stream_connection_failed
                    - [ ]  test_listen_for_user_stream_iter_message_throws_exception


### Exchange

- `connector_name`_exchange.py
    - [ ]  Copy the Binance connector exchange file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.

- test_`connector_name`_exchange.py
    - [ ]  Copy the Binance the test of the exchange file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.

    - Methods Development
        - A lot of tests are already in the Generic test class! But you have to implement some methods to let it work.
            - Methods for the Generic test class
            - [ ]  all_symbols_request_mock_response
            - [ ]  latest_prices_request_mock_response
            - [ ]  all_symbols_including_invalid_pair_mock_response
            - [ ]  network_status_request_successful_mock_response
            - [ ]  trading_rules_request_mock_response
            - [ ]  trading_rules_request_erroneous_mock_response
            - [ ]  order_creation_request_successful_mock_response
            - [ ]  balance_request_mock_response_for_base_and_quote
            - [ ]  balance_request_mock_response_only_base
            - [ ]  balance_event_websocket_update
            - [ ]  expected_latest_price
            - [ ]  expected_supported_order_types
            - [ ]  expected_trading_rule
            - [ ]  expected_logged_error_for_erroneous_trading_rule
            - [ ]  expected_exchange_order_id
            - [ ]  is_cancel_request_executed_synchronously_by_server
            - [ ]  is_order_fill_http_update_included_in_status_update
            - [ ]  is_order_fill_http_update_executed_during_websocket_order_event_processing
            - [ ]  expected_partial_fill_price
            - [ ]  expected_partial_fill_amount
            - [ ]  expected_fill_fee
            - [ ]  expected_fill_trade_id
            - [ ]  exchange_symbol_for_tokens
            - [ ]  create_exchange_instance
            - [ ]  validate_auth_credentials_present
            - [ ]  validate_order_creation_request
            - [ ]  validate_order_cancelation_request
            - [ ]  validate_order_status_request
            - [ ]  validate_trades_request
            - [ ]  configure_successful_cancelation_response
            - [ ]  configure_erroneous_cancelation_response
            - [ ]  configure_one_successful_one_erroneous_cancel_all_response
            - [ ]  configure_completely_filled_order_status_response
            - [ ]  configure_canceled_order_status_response
            - [ ]  configure_erroneous_http_fill_trade_response
            - [ ]  configure_open_order_status_response
            - [ ]  configure_http_error_order_status_response
            - [ ]  configure_partially_filled_order_status_response
            - [ ]  configure_partial_fill_trade_response
            - [ ]  configure_full_fill_trade_response
            - [ ]  order_event_for_new_order_websocket_update
            - [ ]  order_event_for_canceled_order_websocket_update
            - [ ]  order_event_for_full_fill_websocket_update
            - [ ]  trade_event_for_full_fill_websocket_update

            - Methods to implement of ExchangePyBase
                - [ ]  authenticator
                - [ ]  name
                - [ ]  rate_limits_rules
                - [ ]  domain
                - [ ]  client_order_id_max_length
                - [ ]  client_order_id_prefix
                - [ ]  trading_rules_request_path
                - [ ]  trading_pairs_request_path
                - [ ]  check_network_request_path
                - [ ]  trading_pairs
                - [ ]  is_cancel_request_in_exchange_synchronous
                - [ ]  is_trading_required
                - [ ]  supported_order_types
                - [ ]  _is_request_exception_related_to_time_synchronizer
                - [ ]  _create_web_assistants_factory
                - [ ]  _create_order_book_data_source
                - [ ]  _create_user_stream_data_source
                - [ ]  _get_fee
                - [ ]  _place_order
                - [ ]  _place_cancel
                - [ ]  _format_trading_rules
                - [ ]  _status_polling_loop_fetch_updates
                - [ ]  _update_trading_fees
                - [ ]  _user_stream_event_listener
                - [ ]  _all_trade_updates_for_order
                - [ ]  _request_order_status
                - [ ]  _update_balances
                - [ ]  _get_last_traded_price
                - [ ]  _initialize_trading_pair_symbols_from_exchange_info
                
            - `update_time_synchronizer`
                - [ ]  test_update_time_synchronizer_successfully
                - [ ]  _update_time_synchronizer
                - ... [additional methods]
                - [ ]  test_time_synchronizer_related_request_error_detection

            - `update_order_fills`
                - [ ]  test_update_order_fills_from_trades_triggers_filled_event
                - [ ]  _update_order_fills_from_trades
                - ... [additional methods]
                - [ ]  test_update_order_fills_from_trades_with_repeated_fill_triggers_only_one_event        

            - `update_order_status`
                - [ ]  test_update_order_status_when_failed
                - [ ]  _update_order_status    

            - `_user_stream_event_listener`
                - [ ]  test_user_stream_update_for_order_failure
                - [ ]  _user_stream_event_listener


- [ ] Add `connector_name_api_key` and `connector_name_api_secret` to the `conf_global_TEMPLATE.yml`