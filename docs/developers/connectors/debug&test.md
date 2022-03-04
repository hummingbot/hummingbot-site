# Debugging & Testing

This section will break down some ways to debug and test the code. 


# Connector build testing

## Unit Testing

It is expected that all the connector components mentioned in the connector build process will have unit tests validating all methods. This is independent from any validation done by QA testing.

All connector unit tests should not depend on active connections to the exchange to perform the validations. Instead, the interactions with the exchange should always be mocked or emulated. That can be done using the `aioresponses` library for all REST requests, and using the class `NetworkMockingAssistant` for websocket interactions. 

Examples for their use can be found in both Binance and Binance Perpetual connectors' unit tests.

Binance connector tests can be found in [https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/exchange/binance](https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/exchange/binance)

Binance Perpetual connector tests can be found in [https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/derivative/binance_perpetual](https://github.com/hummingbot/hummingbot/tree/master/test/hummingbot/connector/derivative/binance_perpetual)

## QA Connector testing [checklist](https://docs.google.com/document/d/1jpwjYHHgOQkNKPSZV3RS7iXFnW-IQ2rvXAV_d9BSMEI/edit?usp=sharing)

### Basic validations (required to check the connector is usable)


| Validation              |               Description        |
| ---------------------- | --------------------------- |
| Connecting an API key | - Connects when a valid API key is added 
|  |- Throws an error or warning if the API key is invalid, expired, or has other issues
| | - The same API key can be used on multiple bots unless specified that can only be used in one instance at a time |
 Pulling the balance | - Displays the current available balance and should match the balance shown in the exchange.
 ||- The allocation should be updated whenever there is an open order |
| Market availability during the strategy creation | -  Autocomplete lists should be available when setting a market during the strategy creation.
 || - All markets should work when the created strategy is started. |
| Order submission and cancellation | - Created orders must include an order ID with broker prefix when available.
||- Orders are submitted without any error in the client.
||- Submitted order should match the information of the open order in the exchange.
||- Orders are canceled without any error. Orders are not getting stuck or left out unless it is a manual order.
|| - The client should not cancel orders that are not created within the instance such as manual orders, orders created by other instances, or third-party bots.
||- Gracefully rejects/cancels orders that don’t pass the exchange rule. |
| Data integrity | - Orders book in the client is in sync with the order book in the exchange.
||- Constantly update whenever there is a change in the exchange.
||- Prices are updated constantly (status and ticker) whenever there is a change in the exchange. |
| Filled event | - Full and partial fills are both tracked and recorded properly.
||- Filled order information should match the trade history in the exchange. |

### Advanced validations

---

| Validation | Description |
| --- | --- |
| Compatibility with the available strategies | - The connector should work on any of the strategies available in the client unless the connector is intended for a specific strategy.
||- The connector should work both as a maker and taker exchange (spot connectors only) |
| Price updates and balance updates | - In the status window, the prices are constantly being updated whenever a change takes place in the order book.
||- Available balances are updated whenever an order is created or canceled.
||- A consistent number of orders are created except if there are multiple bots using the asset, there are hanging orders or an order is removed due to a specific parameter. |
| Fast refresh rate | - Gracefully cancels orders: No stuck or lost ordersBalance updates accordingly.
||- There should be no error in the logs during the fast cancellation.
||- Filled orders are tracked and saved if a filled event took place.
||- Rate limit warnings are thrown whenever the request is close to maximizing the allowed limit.
||- Stops placing an order when the rate limit is reached but maintains the connectivity with the exchange. |
| Long refresh rate | - Maintains connectivity when there is an open order.
||- Gracefully cancel an order when not filled.
||- No error should come up during the period that an order is opened (exceptions if there are network issues).
||- If a network issue took place, the open orders should be tracked once the connection is established.
||- Tracked and save filled events that may happen during a disconnection. |
| Multiple orders | - Simultaneously submitting multiple orders without any error.
||- Simultaneously cancels all the orders without any error.
||- Available balance and allocations are adjusted accordingly.
||- Order amounts and levels are adjusted accordingly based on the available balance. |
| Hanging order | - Continuously tracked hanging orders created within the instance.
||- Tracked and saved a filled hanging order.
||- Hanging order should be canceled whenever the strategy is stopped or reached the cancelation percentage.
||- Hanging orders remain uncanceled whenever non-hanging orders are refreshed.
||- No hanging order duplication. |
| Multiple bots | - Open orders in each bot should not be affected by cancelation events happening in another bot.
||- There should be no conflicting order IDs |
| History | - Correctly display filled order information.
||- No duplicate ordersSave partial fills.
||- Display only orders created by the instance.
||- Correctly displays asset information. |
| Trade fees | - Should use the trade fee if available otherwise an estimate fee is used.
||- The transaction fee recorded in the client (CSV or SQLite) should match the fee shown in the trade history in the exchange. |
| Data aggregation | - When enabled, all filled trades are aggregated in Datadog.
||- If the bot is stopped and a filled event took place within the heartbeat interval, this should still be aggregated. |



!!! warning
    As part of the QA process, you are **required** to include the unit test cases for the code review process to begin. Refer to [Option 1: Unit Test Cases](#option-1-unit-test-cases) to build your unit tests.
    
## Option 1. Unit Test Cases

You are required to provide at least 80% of unit-test code coverage to have your contribution accepted in the `hummingbot` repository.
Examples of unit-tests can be found in the [test/integration](https://github.com/hummingbot/hummingbot/tree/master/test/) folder.

!!! warning
    When writing unit-tests for submission with your PR, take extra care not to include any API authentication credentials.

!!! warning
    Unit-tests submitted for merging in the code base must not access any external servers directly. All server API
    communications must be mocked — refer to existing examples provided by the exchange you are basing your implementation on for guidance.

## Option 2. aiopython console
This option is mainly used to test for specific functions. Considering that many of the functions are asynchronous functions, 
it would be easier to test for these in the aiopython console. Click [here](https://aioconsole.readthedocs.io/en/latest/) for some documentation on how to use aiopython.

Writing short code snippets to examine API responses and/or how certain functions in the code base work would help you understand the expected side-effects of these functions and the overall logic of the Hummingbot client.

### Issue a API Request
Below is just a short example on how to write a short asynchronous function to mimic a API request to place an order and displaying the response received.


```python3
# Prints the response of a sample LIMIT-BUY Order
# Replace the URL and params accordingly.

>>> import aiohttp
>>> URL="api.test.com/buyOrder"
>>> params = {
...     "symbol": "ZRXETH",
...     "amount": "1000",
...     "price": "0.001",
...     "order_type": "LIMIT"
... }
>>> async with aiohttp.ClientSession() as client:
...    async with client.request("POST",
...                              url=URL,
...                              params=params) as response:
...        if response == 200:
...            print(await response.json())

```

### Calling a Class Method
i.e. Printing the output from `get_active_exchange_markets()` function in `OrderBookTrackerDataSource`.

```python3
# In this example, we will be using BittrexAPIOrderBookDataSource

>>> from hummingbot.market.bittrex.BittrexAPIOrderBookDataSource import BittrexAPIOrderBookDataSource as b
>>> await b.get_active_exchange_markets() 

                 askRate baseAsset        baseVolume  ...             volume     USDVolume old_symbol
symbol                                                ...
BTC-USD    9357.49900000       BTC  2347519.11072768  ...       251.26097386  2.351174e+06    USD-BTC
XRP-BTC       0.00003330       XRP       83.81218622  ...   2563786.10102864  7.976883e+05    BTC-XRP
BTC-USDT   9346.88236735       BTC   538306.04864142  ...        57.59973765  5.379616e+05   USDT-BTC
.
.
.
[339 rows x 18 columns]
```

## Option 3. Custom Scripts
This option, like in Option 2, is mainly used to test specific functions. This is mainly useful when debugging how various functions/classes interact with one another.

e.g. Initializing a simple websocket connection to listen and output all captured messages to examine the user stream message when placing/cancelling an order. 
This is helpful when determining the exact response fields to use.

e.g. A simple function to craft the Authentication signature of a request. This together with [POSTMAN](https://www.getpostman.com/) can be used to check if you are generating the appropriate authentication signature for the respective requests.

### API Request: POST Order

Below is a sample code for POST-ing a LIMIT-BUY order on Bittrex. This script not only tests the `BittrexAuth` class but also outputs the response from the API server. 

```python
#!/usr/bin/env python3

import asyncio
import aiohttp
from typing import Dict
from hummingbot.connector.exchange.bittrex.bittrex_auth import BittrexAuth

BITTREX_API_ENDPOINT = "https://api.bittrex.com/v3"

async def _api_request(http_method: str,
                       path_url: str = None,
                       params: Dict[str, any] = None,
                       body: Dict[str, any] = None,
                       ):
    url = f"{BITTREX_API_ENDPOINT}{path_url}"

    auth = BittrexAuth(
        "****",
        "****"
    )

    auth_dict = auth.generate_auth_dict(http_method, url, params, body, '')

    headers = auth_dict["headers"]

    if body:
        body = auth_dict["body"]

    client = aiohttp.ClientSession()

    async with client.request(http_method,
                              url=url,
                              headers=headers,
                              params=params,
                              data=body) as response:
        data: Dict[str, any] = await response.json()
        if response.status not in [200,201]:
            print(f"Error occurred. HTTP Status {response.status}: {data}")
        print(data)

# POST order
path_url = "/orders"

body = {
    "marketSymbol": "FXC-BTC",
    "direction": "BUY",
    "type": "LIMIT",
    "quantity": "1800",
    "limit": "3.17E-7",  # Note: This will throw an error
    "timeInForce": "GOOD_TIL_CANCELLED"
}

loop = asyncio.get_event_loop()
loop.run_until_complete(_api_request("POST",path_url=path_url,body=body))
loop.close()


```

## Option 4: Using Debugger tools.

This section will detail the necessary configurations/setup required to run the debugger tool from your IDE of choice.

### VS Code

Include the following debug configurations into the `launch.json` configuration file

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Python: Hummingbot Application",
      "type": "python",
      "request": "launch",
      "program": "${workspaceRoot}/bin/hummingbot.py",
      "console": "integratedTerminal"
    }
  ]
}
```

By executing the `Start Debugging` command, the debugger will automatically attach itself to the Hummingbot process.
The Hummingbot app will appear in the `integratedTerminal`. You may change this as desired.

### PyCharm

Similarly, for PyCharm, you want to set up the debug configurations, as seen in the screenshot below.

![PyCharmDebugConfiguration](/assets/img/pycharm-debug-configurations.png)

!!! note
    As of this writing, there is no way to add breakpoints/log points to any of the Cython code in VSCode or PyCharm.
