Exercise II: Simple PMM

In this exercise, we are going to see how to implement a simple pure market making strategy. To understand what the strategy is going to do, you can check this Strategy Design Template.

## Let's Code

Add the following file inside the scripts folder: `quickstart_script_2.py`

Open the file in your IDE editor and write this code:

```Python
import logging
from decimal import Decimal
from typing import List

from hummingbot.core.data_type.common import OrderType, PriceType, TradeType
from hummingbot.core.data_type.order_candidate import OrderCandidate
from hummingbot.core.event.events import OrderFilledEvent
from hummingbot.strategy.script_strategy_base import ScriptStrategyBase


class QuickstartScript2(ScriptStrategyBase):

 bid_spread = 0.008
  ask_spread = 0.008
  order_refresh_time = 15
  order_amount = 0.01
  create_timestamp = 0
  trading_pair = "ETH-USDT"
  exchange = "binance_paper_trade"
  # Here you can use for example the LastTrade price to use in your strategy
  price_source = PriceType.MidPrice
 
 markets = {exchange: {trading_pair}}

```

**Explanation:**

- We are adding the variables that we are going to need for the script based on the design template:
  - The spreads are going to be useful to calculate the price of our orders.
  - We are going to use `order_refresh_time` and `create_timestamp` to define when is necessary to cancel the open orders that we have in the market and place the new ones.
  - `order_amount` is the amount in base asset for our orders.
  - `price_source` will be used when asking the price to the connector with the method `get_price_by_type`.

    The different options for `PriceType` are:
    - `MidPrice`
    - `BestBid`
    - `BestAsk`
    - `LastTrade`
    - `LastOwnTrade`
    - `Custom` (if you are using a custom API to get the price)
  - `trading_pair` and `exchange` are going to be used to initialize the markets as we saw in the previous example.

Let’s code the logic that will be executed every tick_size (default=1sec)

```Python
def on_tick(self):
    if self.create_timestamp <= self.current_timestamp:
        self.cancel_all_orders()
        proposal: List[OrderCandidate] = self.create_proposal()
        proposal_adjusted: List[OrderCandidate] = self.adjust_proposal_to_budget(proposal)
        self.place_orders(proposal_adjusted)
        self.create_timestamp = self.order_refresh_time + self.current_timestamp
```

**Explanation:**

- Based on the design template, these are the high-level tasks that the bot has to do.
- If it’s time to replace the orders, the bot will:
    1. Cancel all the orders
    2. Create a new proposal.
        - The proposal will be a list of  `OrderCandidate`.
        - The `OrderCandidate` is helpful to check if you have sufficient tokens to execute the transaction.
    3. Adjust the proposal to the budget:
        - We have to use the budget_checker of the connector.
            - To adjust one order: `self.connectors[connector_name].budget_checker.adjust_candidate(OrderCandidate)`
            - To adjust a list of orders: `self.connectors[connector_name].budget_checker.adjust_candidates(List[OrderCandidate])`
        - Then we are going to see the implementation. Now you can see why creating the proposal as a list or OrderCandidates was a good idea.
    4. Place the orders
    5. Update the create timestamp: this will set up the time that the bot has to wait until starting to execute the logic again.

Now let’s code the methods that we defined before:

- `cancel_all_orders`

```Python
def cancel_all_orders(self):
    for order in self.get_active_orders(connector_name=self.exchange):
        self.cancel(self.exchange, order.trading_pair, order.client_order_id)

```

**Explanation**

- The method `get_active_orders` gives you a list of the active limit orders.

- We are going to cancel each order by calling the method `self.cancel(connector_name, trading_pair, client_order_id)`
  - We are using the information of `trading_pair` of the LimitOrder and the `client_order_id` which is an internal order id that Hummingbot generates before sending the order.

- `create_proposal`

```Python
def create_proposal(self) -> List[OrderCandidate]:
    ref_price = self.connectors[self.exchange].get_price_by_type(self.trading_pair, self.price_source)
    buy_price = ref_price * Decimal(1 - self.bid_spread)
    sell_price = ref_price * Decimal(1 + self.ask_spread)

    buy_order = OrderCandidate(trading_pair=self.trading_pair, is_maker=True, order_type=OrderType.LIMIT,
                               order_side=TradeType.BUY, amount=Decimal(self.order_amount), price=buy_price)

    sell_order = OrderCandidate(trading_pair=self.trading_pair, is_maker=True, order_type=OrderType.LIMIT,
                                order_side=TradeType.SELL, amount=Decimal(self.order_amount), price=sell_price)

  return [buy_order, sell_order]
```

**Explanation**

- First, we are getting the reference price (in this case MidPrice) which we are going to use to calculate the bid and ask prices, by multiplying it with the bid and ask spread.

- Then we are creating two `OrderCandidate`'s and return them inside a list.

- `adjust_proposal_to_budget`

```Python
def adjust_proposal_to_budget(self, proposal: List[OrderCandidate]) -> List[OrderCandidate]:
    proposal_adjusted = self.connectors[self.exchange].budget_checker.adjust_candidates(proposal, all_or_none=True)
    return proposal_adjusted
```

**Explanation**

- As we mentioned before, we can use the budget checker to check if the balance that we have in the account is enough to send the order.

- The argument `all_or_none=True` checks if you can balance to send the entire amount, if not, modifies the amount to the order to zero.

- If `all_or_none=False`, the budget checker will adjust the value to the balance available in your inventory. For example:
  - Order Amount = 1 ETH
  - Balance = 0.5 ETH
  - The new order amount will be 0.5 ETH

- `place_orders`

```Python
def place_orders(self, proposal: List[OrderCandidate]) -> None:
    for order in proposal:
        self.place_order(connector_name=self.exchange, order=order)
```

- `place_order`

```Python
def place_order(self, connector_name: str, order: OrderCandidate):
    if order.order_side == TradeType.SELL:
        self.sell(connector_name=connector_name, trading_pair=order.trading_pair, amount=order.amount,
                  order_type=order.order_type, price=order.price)
    elif order.order_side == TradeType.BUY:
        self.buy(connector_name=connector_name, trading_pair=order.trading_pair, amount=order.amount,
                 order_type=order.order_type, price=order.price)
```

**Explanation**

- Based on the side of the order we are going to call the method `buy` or `sell` of the strategy.
- Is important to execute the buy and sell methods of the strategy because the logic of the order tracking is encapsulated there. If you buy or sell directly with the connector, you are going to loose the tracking of the order by the strategy.

The last thing that we are going to do before running the script is to code an event.

- `did_fill_order`

```Python
def did_fill_order(self, event: OrderFilledEvent):
    msg = (f"{event.trade_type.name} {round(event.amount, 2)} {event.trading_pair} {self.exchange} at {round(event.price, 2)}")
    self.log_with_clock(logging.INFO, msg)
    self.notify_hb_app_with_timestamp(msg)
```

- Hummingbot has the following events implemented:
  - `did_fill_order`
  - `did_complete_buy_order`
  - `did_complete_sell_order`
  - `did_cancel_order`
  - `did_create_buy_order`
  - `did_create_sell_order`
  - `did_fail_order`
  - etc.

- You can use them to create custom logic if something happens!
- In this case, we are just logging the message and sending the notification to the app.
- After the tutorial, try to implement another event and see how it works.

1. Open a terminal and run the client with **./bin/hummingbot.py.** (Make sure that the conda environment is activated)
2. Run the command: `start --script quickstart_script_2.py`. You should have the following output.

![Alt text](../assets/example2-a.png)

Run the command: status --live and you should see:

![Alt text](../assets/example2-b.png)

!!! Code
    <https://gist.github.com/cardosofede/41826e41172ef64a86fbedadc4289708>
