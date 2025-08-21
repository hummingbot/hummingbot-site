# Perpetual Connector v2.1

## Prerequisites

Before proceeding with the setup of the Spot Connector, ensure that you have the Hummingbot source version installed on your system. Follow the detailed installation instructions provided at [Hummingbot Installation Guide](/installation/source/). 


## API Checklist

| Name                                            | Required      | Type             | Comments                                                                                                           | Path URL                                         |
|-------------------------------------------------|---------------|------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| GET ACTIVE MARKETS                              | True          | Public REST      | Endpoint to get list of active trading pairs. [example](https://binance-docs.github.io/apidocs/spot/en/#exchange-information) | `GET /markets`                                   |
| GET LAST TRADED PRICE                           | False         | Public REST      |                                                                                                                    | `GET /markets`                                   |
| GET ORDERBOOK SNAPSHOT                          | False         | Public REST      |                                                                                                                    | `GET /markets/{market_name}/orderbook?depth={depth}` |
| [TR] MINIMUN NOTIONAL SIZE                      | Conditionally | Public REST      | Endpoint to get trading rules. [example](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)     | `GET /markets`                                   |
| [TR] MINIMUN ORDER SIZE                         | Conditionally | Public REST      | Endpoint to get trading rules. [example](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)     | `GET /markets`                                   |
| [TR] MINIMUN PRICE                              | Conditionally | Public REST      | Endpoint to get trading rules. [example](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)     | `GET /markets`                                   |
| [TR] ORDER INCREMENT                            | Conditionally | Public REST      | Endpoint to get trading rules. [example](https://binance-docs.github.io/apidocs/spot/en/#exchange-information)     | `GET /markets`                                   |
| PING ENDPOINT                                   | True          | Public REST      | For low info endpoints, like ping. [example](https://binance-docs.github.io/apidocs/spot/en/#test-connectivity)    | `GET /`                                          |
| GET ACCOUNT BALANCE                             | True          | Private REST     | Get current account balance. [example](https://binance-docs.github.io/apidocs/spot/en/#account-information-user_data) | `GET /wallet/balances`                          |
| GET ORDER STATUS BY client order id             | Conditionally | Private REST     |                                                                                                                    | `GET /orders/by_client_id/{client_order_id}`     |
| GET ORDER STATUS BY exchange_order_id           | Conditionally | Private REST     |                                                                                                                    | `GET /orders/{order_id}`                         |
| GET TRADES HISTORY BY ORDER ID                  | Conditionally | Private REST     |                                                                                                                    | `GET /fills`                                     |
| GET TRADES HISTORY BY TIMESTAMPS                | Conditionally | Private REST     |                                                                                                                    | `GET /fills`                                     |
| GET OPEN ORDERS                                 | True          | Private REST     | Get active orders. [example](https://binance-docs.github.io/apidocs/spot/en/#query-order-user_data)                 | `GET /orders`                                    |
| CREATE ORDERS                                   | True          | Private REST     | Create new orders. [example](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade)                       | `POST /orders`                                   |
| CREATE ORDERS with client order id              | Conditionally | Private REST     | Create new orders. [example](https://binance-docs.github.io/apidocs/spot/en/#new-order-trade)                       | `POST /orders`                                   |
| CANCEL ORDER BY exchange_order_id               | True          | Private REST     |                                                                                                                    | `DELETE /orders`                                 |
| CANCEL ORDER BY client order id                 | Conditionally | Private REST     |                                                                                                                    | `DELETE /orders`                                 |
| ORDERBOOK CHANNEL (Min depth 100)               | True          | Public Websocket | Public orders channel. [example](https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream)                 | `orderbook`                                      |
| ORDERBOOK DIFF CHANNEL                          | Conditionally | Public Websocket | Public orders channel. [example](https://binance-docs.github.io/apidocs/spot/en/#diff-depth-stream)                 | `orderbook`                                      |
| USER TRADES CHANNEL (Order Status, fills, fees) | True          | Private Websocket| Private orders updates. [example](https://binance-docs.github.io/apidocs/spot/en/#payload-order-update)            | `fills`                                          |
| USER ORDER CHANNEL (Order Status, fills, fees)  |               | Private Websocket|                                                                                                                    | `orders`                                         |
| USER BALANCE CHANNEL (total and available)      | False         | Private Websocket| Private balance events. [example](https://binance-docs.github.io/apidocs/spot/en/#payload-account-update)          |                                                  |
| AUTHENTICATION                                  | True          | Other            | Auth logic for web assistant. [example](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/connector/exchange/binance/binance_auth.py) |                                                  |
| Rate limits                                     | True          | Other            | Rate limits documentation. [example](https://binance-docs.github.io/apidocs/spot/en/#limits)                        |                                                  |
| SERVER TIME                                     | Conditionally | Public REST      |                                                                                                                    |                                                  |
| FUNDING PAYMENT                                 | True          | Public REST      | Funding payment info                                                                                               | `GET /funding_payments`                          |
| GET POSITIONS                                   | True          | Private REST     | Get current positions                                                                                              | `GET /positions`                                 |



## Build Process

### Constants

Add to the constant files the following variables

- [ ]  `DEFAULT DOMAIN`: check if is you have to add more than 1 domain, this constant will be used for generating the path url in web_utils.
- [ ]  `REST_URLS`: could be a dictionary like ByBit connector or a f-string like Binance connector, the `DEFAULT DOMAIN` variable will be used to select the correct URL.
- [ ]  `SERVER_TIME_PATH_URL`: check if the exchange needs that your `timestamp` is in sync with the server time.


### Web Utils

- `connector_name`_web_utils.py file
    - [ ]  Copy the Bybit Perpetual connector web_utils file.
    - [ ]  Replace Bybit Perpetual for `connector_name` with the first letter in uppercase.
    - [ ]  Replace Bybit Perpetual for `connector_name`.
    - [ ]  Check if you need to have linear perpetual or remove that logic
    - [ ]  If you find a pattern, you can code the functions to get the results or success from the rest response
    - [ ]  Also you can do it to extract the topics and payload form the websocket channels
    - [ ]  Code the function to create the rest url, check if you need public and private url or just one of them.
    - If you need Time Sync:
        - [ ]  Check that you have the function `build_api_factory_without_time_synchronizer_pre_processor`.
        - [ ]  Check if you need changes in the function `get_current_server_time` (maybe you need to find the server time in the response).
        - [ ]  Code the `build_api_factory` with the time synchronizer as a rest_pre_processor
    - If you don’t need Time Sync:
        - [ ]  Delete the files related with the Time Sync and code the `build_api_factory` function without that.


### Utils 

- Code in `connector_name`_utils.py file
    - [ ]  Copy the Bybit Perpetual connector utils file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybit_perpetual for `connector_name`.
    - [ ]  Replace `DEFAULT_FEES` with the appropriate values .
    - [ ]  Check if you need connection to other domains or delete it.
    - [ ]  Check if you need linear trading or deleted


### Order Book Data Source

- `connector_name`_api_order_book_data_source.py
    - [ ]  Copy the Bybit Perpetual connector order book data source file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybitl for `connector_name`.
    - [ ]  Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.

- test_`connector_name`_api_order_book_data_source.py
    - [ ]  Copy the Bybit Perpetual the test of the order book data source file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybit for `connector_name`.
    
    > Now we are going to start implementing the functionalities of the Order Book Data source but in a TDD way.
     
- Methods development

    - `REST`
        - `orderbook`
            - [ ]  test_get_new_order_book_successful
            - [ ]  _order_book_snapshot
            - [ ]  _request_order_book_snapshot
            - [ ]  test_get_new_order_book_raises_exception

        - `funding_info`
            - [ ]  test_get_funding_info
            - [ ]  get_funding_info

    - `WEBSOCKET`

        - `listen_for_subscriptions`
            - [ ]  test_listen_for_subscriptions_subscribes_to_trades_and_order_diffs_and_funding_info
            - [ ]  listen_for_subscriptions (is in the superclass)
            - [ ]  _connected_websocket_assistant
            - [ ]  _subscribe_channels
            - [ ]  _process_websocket_messages
            - [ ]  _channel_originating_message
            - [ ]  test_listen_for_subscriptions_raises_cancel_exception
            - [ ]  test_listen_for_subscriptions_logs_exception_details
            - [ ]  test_subscribe_channels_raises_cancel_exception
            - [ ]  test_subscribe_channels_raises_exception_and_logs_error

        - `listen_for_trades`
            - [ ]  test_listen_for_trades_successful
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

        - `listen_for_funding_info`
            - [ ]  test_listen_for_funding_info_cancelled_when_listening
            - [ ]  _parse_funding_info_message
            - [ ]  test_listen_for_funding_info_logs_exception
            - [ ]  test_listen_for_funding_info_successful


### Auth

- `connector_name`_auth.py
    - [ ]  Copy the Bybit Perpetual connector auth file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
- test_`connector_name`_auth.py
    - [ ]  Copy the Bybit Perpetual the test of the auth file.
    - [ ]  Replace Bybit Perpetual for `connector_name` with the first letter in uppercase.
    - [ ]  Replace Bybit Perpetual for `connector_name`.

- Methods development

    - `REST`
        - `rest_authenticate`
            - [ ]  test_rest_authenticate
            - [ ]  rest_authenticate
            - [ ]  add_auth_to_params
            - [ ]  header_for_authentication
            - [ ]  _generate_signature

    - `WEBSOCKET`
        - `ws_authenticate`


### User Stream Data Source 

- `connector_name`_api_user_stream_data_source.py
    - [ ]  Copy the Bybit perpetual connector user stream data source file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybit for `connector_name`.
    - [ ]  Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.
    - [ ]  Check if you need `LISTEN_KEY_KEEP_ALIVE_INTERVAL`.

- test_`connector_name`_api_user_stream_data_source.py
    - [ ]  Copy the Binance the test of the user stream data source file.
    - [ ]  Replace Binance for `connector_name` with the first letter in uppercase.
    - [ ]  Replace binance for `connector_name`.
    
    > Now we are going to start implementing the functionalities of the User Stream Data source but in a TDD way.
     
- Methods development
    - `WEBSOCKET`
        
        If you need Listen Key:
        
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
    - [ ]  Copy the Bybit Perpetual connector derivative file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybit for `connector_name`.

- test_`connector_name`_exchange.py
    - [ ]  Copy the Bybit the test of the derivative file.
    - [ ]  Replace Bybit for `connector_name` with the first letter in uppercase.
    - [ ]  Replace bybit for `connector_name`.

- Methods development
    
    A lot of test are already in the Generic test class! But you have to implement some methods to let it work.
    
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
        - [ ]  empty_funding_payment_mock_response
        - [ ]  expected_supported_position_modes
        - [ ]  funding_info_mock_response
        - [ ]  funding_info_url
        - [ ]  funding_payment_url
        - [ ]  funding_payment_mock_response
        - [ ]  configure_failed_set_leverage
        - [ ]  configure_successful_set_leverage
        - [ ]  position_event_for_full_fill_websocket_update
        - [ ]  funding_info_event_for_websocket_update
        - [ ]  configure_successful_set_position_mode
        - [ ]  configure_failed_set_position_mode

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
        - [ ]  _initialize_trading_pair_symbols_from_exchange_info
        - [ ]  _get_last_traded_price

    - Methods to implement of PerpetualDerivativePyBase

        - [ ]  funding_fee_poll_interval
        - [ ]  supported_position_modes
        - [ ]  get_buy_collateral_token
        - [ ]  get_sell_collateral_token
        - [ ]  _create_order_book_data_source
        - [ ]  _update_positions
        - [ ]  _set_trading_pair_leverage
        - [ ]  _fetch_last_fee_payment

    - `update_time_synchronizer`
        - [ ]  test_update_time_synchronizer_successfully
        - [ ]  _update_time_synchronizer
        - [ ]  test_update_time_synchronizer_failure_is_logged
        - [ ]  test_update_time_synchronizer_raises_cancelled_error
        - [ ]  test_time_synchronizer_related_request_error_detection

    - `update_order_fills`
        - [ ]  test_update_order_fills_from_trades_triggers_filled_event
        - [ ]  _update_order_fills_from_trades
        - [ ]  test_update_order_fills_request_parameters
        - [ ]  test_update_order_fills_from_trades_with_repeated_fill_triggers_only_one_event

    - `update_order_status`
        - [ ]  test_update_order_status_when_failed
        - [ ]  _update_order_status

    - `_user_stream_event_listener`
        - [ ]  test_user_stream_update_for_order_failure
        - [ ]  _user_stream_event_listener
        
    - `position_mode`
        - [ ]  test_set_position_mode_failure
        - [ ]  test_set_position_mode_success

    - `funding_info`
        - [ ]  test_listen_for_funding_info_update_initializes_funding_info
        - [ ]  test_listen_for_funding_info_update_updates_funding_info
        - [ ]  test_init_funding_info
        - [ ]  test_update_funding_info_polling_loop_success
        - [ ]  test_update_funding_info_polling_loop_raise_exception


- [ ] Add `connector_name_api_key` and `connector_name_api_secret` to the `conf_global_TEMPLATE.yml`