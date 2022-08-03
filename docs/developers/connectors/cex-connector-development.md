# CEX Connector Development

## Environment Setup

### GitHub

:material-checkbox-blank-outline:  Fork the hummingbot/hummingbot repository.

:material-checkbox-blank-outline:  Clone your repository:

        git clone git@github.com:{github_handle}/hummingbot.git

:material-checkbox-blank-outline:  Add the official Hummingbot repo as an upstream remote and fetch upstream data:

        git remote add upstream https://github.com/hummingbot/hummingbot.git
        git fetch upstream

:material-checkbox-blank-outline:  Create your branch from the development branch

        git checkout -b feat/[connector_name]_connector upstream/development

### Directory

!!! Note ""

    Click **[here](https://github.com/hummingbot/hummingbot/tree/development/hummingbot/connector/exchange/binance)** to see to the gold standard connector.

    `connector_name` = the name of the connector in lowercase and separated with underscores if applies.

    - Example without underscore: binance
    - Example with underscore: crypto_com

#### Connector

:material-checkbox-blank-outline:  Create **`connector folder`** inside hummingbot/hummingbot/connector/exchange called `connector_name`.

:material-checkbox-blank-outline:  Create the following files inside of the **`connector folder`:**

:    - _init_.py
     - `connector_name`_api_order_book_data_source.py
     -  `connector_name`_api_user_stream_data_source.py
     -  `connector_name`_auth.py
     -  `connector_name`_constants.py
     -  `connector_name`_exchange.py
     -  `connector_name`_order_book.py
     -  `connector_name`_utils.py
     -  `connector_name`_web_utils.py
     -  dummy.pxd
     -  dummy.pyx

#### Tests

:material-checkbox-blank-outline:  Create **`test folder`** inside hummingbot/test/hummingbot/exchange called `connector_name`.

:material-checkbox-blank-outline:  Create the following files inside of the **`test folder` :**

:    - _init_.py
     -  test_`connector_name`_api_order_book_data_source.py
     -  test_`connector_name`_api_user_stream_data_source.py
     -  test_`connector_name`_auth.py
     -  test_`connector_name`_exchange.py
     -  test_`connector_name`_order_book.py
     -  test_`connector_name`_utils.py
     -  test_`connector_name`_web_utils.py

## Build Process

User guide: [Build Process](https://hummingbot.org/developers/connectors/build/#3-commit-changes-to-a-branch)

## Code steps

### **CONSTANTS**

**Add to the constant files the following variables**

:   :material-checkbox-blank-outline:  `DEFAULT DOMAIN`: check if is you have to add more than 1 domain, this constant will be used for generating the path url in web_utils.

    :material-checkbox-blank-outline:  `REST_URLS`: could be a dictionary like ByBit connector or a f-string like ByBit connector, the `DEFAULT DOMAIN` variable will be used to select the correct URL.

    :material-checkbox-blank-outline:  `RATE_LIMITS`

    :material-checkbox-blank-outline:  `SERVER_TIME_PATH_URL`: check if the exchange needs that your `timestamp` is in sync with the server time.

### **Web Utils**

#### `connector_name`_web_utils.py file

   :material-checkbox-blank-outline: Copy the ByBit connector web_utils file.

   :material-checkbox-blank-outline: `connector_name` with the first letter in uppercase.

   :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

   :material-checkbox-blank-outline:  Code the function to create the rest url, check if you need public and private url or just one of them.

:    **If you need Time Sync:**

     :material-checkbox-blank-outline:  Check that you have the function `build_api_factory_without_time_synchronizer_pre_processor`.

     :material-checkbox-blank-outline:  Check if you need changes in the function `get_current_server_time` (maybe you need to find the server time in the response).

:    **If you don’t need Time Sync:**

    :material-checkbox-blank-outline:  Delete the files related with the Time Sync and code the `build_api_factory` function without that.

### **Utils**

#### Code in`connector_name`_utils.py file

:    :material-checkbox-blank-outline:  Copy the ByBit connector utils file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline:  Replace `DEFAULT_FEES` with the appropriate values .
     
     :material-checkbox-blank-outline:  Check if you need connection to other domains or delete it.
  
### **Order Book Data Source**

#### `connector_name`_order_book.py

:    :material-checkbox-blank-outline:  Copy the ByBit connector order book file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

!!! Note ""
    For now we will not implement any function, the only purpose of this step because we need to import this class in the `connector_name`_api_order_book_data_source.py and we don’t want to have errors in the IDE.

#### `connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit connector order book data source file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline:  Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.

     :material-checkbox-blank-outline:  Check if you need Time Sync or delete it.

     :material-checkbox-blank-outline:  Code the method`_init_trading_pair_symbols`

#### test_`connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit the test of the order book data source file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline:  Check if you need Time Sync or delete it.

!!! Note ""
    Now we are going to start implementing the functionalities of the Order Book Data source but in a TDD way.

#### Methods development

##### `REST`

`trading_pairs`
:    :material-checkbox-blank-outline:  test_fetch_traiding_pairs

     :material-checkbox-blank-outline:  is_exchange_information_valid (check if applies)

     :material-checkbox-blank-outline:  _init_trading_pair_symbols

     :material-checkbox-blank-outline:  fetch_traiding_pairs

     :material-checkbox-blank-outline:  test_fetch_trading_pairs_exception_raised

`last_traded_prices`
:    :material-checkbox-blank-outline:  test_get_last_traded_prices

     :material-checkbox-blank-outline:  get_last_traded_prices

`orderbook_snapshot`
:    :material-checkbox-blank-outline:  test_get_snapshot

     :material-checkbox-blank-outline:  get_snapshot

     :material-checkbox-blank-outline:  test_get_snapshot_raises

     :material-checkbox-blank-outline:  test_get_new_order_book

     :material-checkbox-blank-outline:  get_new_order_book

     :material-checkbox-blank-outline:  snapshot_message_from_exchange

##### `WEBSOCKET`

`listen_for_subscriptions`
:    :material-checkbox-blank-outline:  test_listen_for_subscriptions_subbscribes_to_trades_and_depth/diff `change for test_listen_for_subscriptions_successful`?

     :material-checkbox-blank-outline:  listen_for_subscriptions

     :material-checkbox-blank-outline:  _subscribe_channels

     :material-checkbox-blank-outline:  test_listen_for_subscriptions_sends_ping_message_before_ping_interval_finishes

     :material-checkbox-blank-outline:  test_listen_for_subscriptions_raises_cancel_exception `change for test_listen_for_subscriptions_cancelled_error`

     :material-checkbox-blank-outline:  test_listen_for_subscriptions_logs_exception_details `change for test_listen_for_subscriptions_logs_exception`

`listen_for_trades`
:    :material-checkbox-blank-outline:  test_listen_for_trades_cancelled_error

     :material-checkbox-blank-outline:  test_listen_for_trades_logs_exception

     :material-checkbox-blank-outline:  test_listen_for_trades_successful

     :material-checkbox-blank-outline:  listen_for_trades

     :material-checkbox-blank-outline:  trade_message_from_exchange (in the OrderBook of the exchange)

`listen_for_order_book_diffs`
:    :material-checkbox-blank-outline:  test_listen_for_order_book_diffs_cancelled

     :material-checkbox-blank-outline:  test_listen_for_order_book_diffs_logs_exception

     :material-checkbox-blank-outline:  test_listen_for_order_book_diffs_successful

     :material-checkbox-blank-outline:  listen_for_order_book_diffs

     :material-checkbox-blank-outline:  diff_message_from_exchange (in the OrderBook of the exchange)

     :material-checkbox-blank-outline:  snapshot_message_from_exchange_websocket (if the first message is an orderbook snapshot)

`listen_for_order_book_snapshots`
:    :material-checkbox-blank-outline:  test_listen_for_order_book_snapshots_cancelled_when_fetching_snapshot

     :material-checkbox-blank-outline:  test_listen_for_order_book_snapshots_log_exception

     :material-checkbox-blank-outline:  test_listen_for_order_book_snapshots_successful

     :material-checkbox-blank-outline:  snapshot_message_from_exchange_rest (if ask via rest the orderbook and the message is different than the websocket one)

### Auth

#### `connector_name`_auth.py

:    :material-checkbox-blank-outline:  Copy the ByBit connector order book file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

#### test_`connector_name`_auth.py

:    :material-checkbox-blank-outline:  Copy the ByBit the test of the auth file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline:  Check if you need Time Sync or delete it.

!!! Note ""
    Now we are going to start implementing the functionalities of the Order Book Data source but in a TDD way.

#### Methods development

##### REST

   `rest_authenticate`
:    :material-checkbox-blank-outline:  test_add_auth_headers/params_to_get_request_without_params

     :material-checkbox-blank-outline:  rest_authenticate

     :material-checkbox-blank-outline:  test_add_auth_headers/params_to_get_request_with_params

     :material-checkbox-blank-outline:  test_add_auth_headers/params_to_post_request

##### WEBSOCKET

   `ws_authenticate`

### User Stream Data Source

#### `connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit connector user stream data source file.

     :material-checkbox-blank-outline: Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline: Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline: Replace the `HEARTBEAT_TIME_INTERVAL` with the appropriate value.

     :material-checkbox-blank-outline: Check if you need `LISTEN_KEY_KEEP_ALIVE_INTERVAL`.

     :material-checkbox-blank-outline: Check if you need Time Sync or delete it.

#### test_`connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit the test of the order book data source file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

     :material-checkbox-blank-outline:  Check if you need Time Sync or delete it.

!!! Note ""
    Now we are going to start implementing the functionalities of the Order Book Data source but in a TDD way.

#### Methods development

##### `WEBSOCKET`

   `last_recv_time`
   `listen_for_user_stream`
:    :material-checkbox-blank-outline:  test_listen_for_user_stream_subscribes_to_orders_and_balances_events`change for test_listen_for_user_stream_successful`?

     :material-checkbox-blank-outline: listen_for_user_stream `change for listen_for_subscriptions`

     :material-checkbox-blank-outline: _authenticate_connection

     :material-checkbox-blank-outline: _process_ws_messages

     :material-checkbox-blank-outline: test_listen_for_user_stream_auth

     :material-checkbox-blank-outline: test_listen_for_user_stream_does_not_queue_pong_payload

     :material-checkbox-blank-outline: test_listen_for_user_stream_auth_failed_throws_exception

     :material-checkbox-blank-outline: test_listen_for_user_stream_iter_message_throws_exception

     :material-checkbox-blank-outline: test_listen_for_subscriptions_sends_ping_message_before_ping_interval_finishes

     :material-checkbox-blank-outline: test_listen_for_user_stream_sends_ping_message_before_ping_interval_finishes

### Exchange

#### `connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit connector user stream data source file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

#### test_`connector_name`_api_order_book_data_source.py

:    :material-checkbox-blank-outline:  Copy the ByBit the test of the order book data source file.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name` with the first letter in uppercase.

     :material-checkbox-blank-outline:  Replace ByBit for `connector_name`.

#### Methods development

##### `supported_order_types`

:    :material-checkbox-blank-outline:  test_supported_order_types

     :material-checkbox-blank-outline:  suport_order_types

##### `check_network_success`

:    :material-checkbox-blank-outline:  test_check_network_success

     :material-checkbox-blank-outline:  check_network

     :material-checkbox-blank-outline:  test_check_network_failure

     :material-checkbox-blank-outline:  test_check_network_raises_cancel_exception

##### `update_trading_rules`

:    :material-checkbox-blank-outline:  test_update_trading_rules

     :material-checkbox-blank-outline:  update_trading_rules

##### `get_fee`

:    :material-checkbox-blank-outline:  

##### `initial_status_dict`

:    :material-checkbox-blank-outline:  test_initial_status_dict

     :material-checkbox-blank-outline:  status_dict

##### `client_order_id_on_order`

:    :material-checkbox-blank-outline:  test_client_order_id_on_order

     :material-checkbox-blank-outline:  get_new_client_order_id

     :material-checkbox-blank-outline:  buy

     :material-checkbox-blank-outline:  sell

     :material-checkbox-blank-outline:  _create_order

     :material-checkbox-blank-outline:  quantize_order_price (already implemented)

     :material-checkbox-blank-outline:  quantize_order_amount (already implemented)

     :material-checkbox-blank-outline:  get_order_price_quantum (already implemented)

     :material-checkbox-blank-outline:  get_order_size_quantum (already implemented)

     :material-checkbox-blank-outline:  quantize_order_amount (already implemented)

##### `restore_tracking_states`

:    :material-checkbox-blank-outline:  test_restore_tracking_states_only_registers_open_orders (already implemented)

     :material-checkbox-blank-outline:  restore_tracking_states (already implemented)

##### `create_limit_order`

:    :material-checkbox-blank-outline:  test_create_limit_order_successfully

     :material-checkbox-blank-outline:  _simulate_trading_rules_initialized

     :material-checkbox-blank-outline:  _validate_auth_credentials_present

     :material-checkbox-blank-outline:  _create_order

##### `create_limit_maker_order`

:    :material-checkbox-blank-outline:  test_create_limit_maker_order_successfully

##### `create_market_order`

:    :material-checkbox-blank-outline:  test_create_market_order_successfully

##### `create_order_fails`

:    :material-checkbox-blank-outline:  

##### `cancel_order`

:    :material-checkbox-blank-outline:  test_cancel_order_successfully

     :material-checkbox-blank-outline:  cancel

     :material-checkbox-blank-outline:  _execute_cancel

     :material-checkbox-blank-outline:  test_cancel_order_raises_failure_event_when_request_fails

     :material-checkbox-blank-outline:  test_cancel_order_without_exchange_order_id_marks_order_as_fail_after_retries?

##### `cancel_all`

:    :material-checkbox-blank-outline:  test_cancel_two_orders_with_cancel_all_and_one_fails

     :material-checkbox-blank-outline:  cancel_all

##### `update_time_synchronizer`

:   :material-checkbox-blank-outline:  test_update_time_synchronizer_successfully

    :material-checkbox-blank-outline:  _update_time_synchronizer

    :material-checkbox-blank-outline:  test_update_time_synchronizer_failure_is_logged

    :material-checkbox-blank-outline:  test_update_time_synchronizer_raises_cancelled_error

##### `update_balances`

:    :material-checkbox-blank-outline:  test_update_balances

     :material-checkbox-blank-outline:  _update_balances

     :material-checkbox-blank-outline:  get_all_balances

##### `update_order_status`

:    :material-checkbox-blank-outline:  test_update_order_status_when_filled

     :material-checkbox-blank-outline:  _update_order_status

     :material-checkbox-blank-outline:  CONSTANTS ORDER STATE

##### `_user_stream_event_listener`

:    :material-checkbox-blank-outline:  test_user_stream_update_for_new_order_does_not_update_status

     :material-checkbox-blank-outline: _user_stream_event_listener

     :material-checkbox-blank-outline: test_user_stream_update_for_cancelled_order

     :material-checkbox-blank-outline: test_user_stream_balance_update

:material-checkbox-blank-outline:  Add `connector_name`_api_key and `connector_name`_api_secret to the conf_global_TEMPLATE.yml
