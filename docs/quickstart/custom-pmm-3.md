# Exercise 3: Customize Status Command

In this exercise, let’s customize the output of the `status` command so that we can easily see what’s happening:

- We will use the same file: `quickstart_script_2.py`
- We’ll add a function that overrides the `format_status` method

### ==format_status== (default)

Let’s look at the default `format_status` method first:

```python
    def format_status(self) -> str:
    """
    Returns status of the current strategy on user balances and current active orders. This function is called
    when status command is issued. Override this function to create custom status display output.
    """
    if not self.ready_to_trade:
        return "Market connectors are not ready."
    lines = []
    warning_lines = []
    warning_lines.extend(self.network_warning(self.get_market_trading_pair_tuples()))

    balance_df = self.get_balance_df()
    lines.extend(["", "  Balances:"] + ["    " + line for line in balance_df.to_string(index=False).split("\n")])

    try:
        df = self.active_orders_df()
        lines.extend(["", "  Orders:"] + ["    " + line for line in df.to_string(index=False).split("\n")])
    except ValueError:
        lines.extend(["", "  No active maker orders."])

    warning_lines.extend(self.balance_warning(self.get_market_trading_pair_tuples()))
    if len(warning_lines) > 0:
        lines.extend(["", "*** WARNINGS ***"] + warning_lines)
    return "\n".join(lines)
```

!!! Explanation
    - Note that the method returns a string; this string will be displayed when the users runs the `status` command.
    - If the markets are not ready to trade, the string will be “Market connectors are not ready”
    - There are two lists that we building:
        - `lines`: this list appends all the information that we want to show by using the method `extend` on the list
        - `warning_lines`: this list appends the network and balance warnings
    - We can transform a DataFrame to text using the `to_string` method
    - Lastly, to return the final string, the `join` method join all the strings that we have in the two lists, adding `\n` to inject a new line as a separator.
    - Note that when you ran the `status --live` command in the previous example, the output that you were seeing was the result of this (un-customized) method.

Now, let’s code our custom `format_status` method. Add the following code inside the `QuickstartScript2` class:

### ==format_status== (custom)

```python
def format_status(self) -> str:
        if not self.ready_to_trade:
            return "Market connectors are not ready."
        mid_price = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.MidPrice)
        best_ask = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.BestAsk)
        best_bid = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.BestBid)
        last_trade_price = self.connectors[self.exchange].get_price_by_type(self.trading_pair, PriceType.LastTrade)
        custom_format_status = f"""
| Mid price: {mid_price:.2f}| Last trade price: {last_trade_price:.2f}
| Best ask: {best_ask:.2f} | Best bid: {best_bid:.2f} | 
"""
        return custom_format_status
```

!!! Explanation
    - We are using the conditional to see if all markets are ready like the previous example
    - We are getting the mid price, best ask, best bid and last trade price by using the connector
    - Creating a multiline f-string to show all the variables that we want!

!!! abstract "**Optional Exercise:**"
    💡 In this case, we are overriding the original `format_status` but you may also extend it by appending to the `lines` list with another list that contains custom strings.

## Running the script

- Start Hummingbot
- Run the command: `start --script quickstart_script_2.py`.
- Run the command: `status --live` and you should see:

![Alt text](Untitled%204.png)

## Complete script

!!! Code
    <https://gist.github.com/cardosofede/d85a9d5ed5b7414728bcf967b540b9cb>
