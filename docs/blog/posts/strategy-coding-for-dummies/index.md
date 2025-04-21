---
date: 2022-03-26
authors:
  - community
categories:
  - Community Posts
  - Strategy Guides
tags:
---

# Hummingbot V1 Strategy Coding for Dummies

![cover](cover.webp)

*by Ben Smeaton*

Hi! I've been using Hummingbot for about a year on and off and wanted to give an overview on how to actually go about defining your own strategies. I got into market making because of a hobbyist interest in python coding and I was at that time tinkering with buying and selling shares automatically on the stock market which was incredibly unsuccessful.

Hummingbot is very accessible for hobby coders due to its mainly python-based code base and the fact that its all open source (Meaning you can play around with the code). It's pretty easy to scrape together your own strategies although it�s taken quite a lot of trial and error to get there myself! I wanted to give a basic idea of how you can go about doing this in the simplest way possible.

<!-- more -->

The best way to get started is to get an idea of the strategies already present in hummingbot, this can be done through diving into the program and getting an idea of how it works. I would recommend starting off with an existing strategy and tweaking it yourself. If it all goes wrong (and it probably will) you can just pull it again from Github and overwrite your changes. Also, if you use Windows you're probably going to want to develop your code on a source installation for windows, this can be done quite easily as per: [Source - Hummingbot Foundation](../../../installation/source/index.md). Obviously, when you have a working code you can then quite easily transfer the strategy file to your AWS server or RPI and compile it there.

When you've installed the software from source you need to head to strategy folder in hummingbot/hummingbot/strategy. Then pick the strategy you want to edit. I'm going to use cross exchange market making for this.


The strategy folders are all laid out in a similar way. The most important file is the one ending in .pyx, this is the main strategy file that contains all of the instructions for how your strategy works. For the other files in this folder:

- The `config_map.py`file contains the parameters that you can configure in the program, they can be added in this file along with prompts and default values.

- The start file initializes these parameters for the main strategy (needs to be kept updated with any new variables you are adding in the config file)

- The `.pdx` file contains a list of the variables used in the `.pyx`file and needs to be updated if new ones are added (No idea why but I�m sure there�s a good reason for it).

Forgetting about the other files open the `.pyx`file. This file is full of different functions which make the strategy operate. The most important thing to understand about this file is that the `c_tick()`function found about half way down the page is called each second by hummingbot and all other functions in this file are in some way called from this one. By the way don't be too concerned by the `c_` superscripts and `cdef` littered through this strategy it just shows the use of cython rather than python but for any additions you make you can just use plain old python notation and it will work just as well.

In general the strategy works by calling `c_tick()`then progressing through a series of functions that check how profitable your trade would be. If the trade is profitable then it makes it through all the checks and the order will actually be placed on the exchange. If there are already buy and sell orders present then the strategy will check whether these are still profitable and decide to remove or keep them.

Looking at the `c_tick()` function this firstly checks a few standard things like if the market is ready, check what active orders are present on the exchange etc, the main logic of the strategy is then passed to the `c_process_market_pair function`which skips the program down a few lines to where this function starts.

Firstly the function checks through the active orders to understand if they are still profitable or not, and will cancel and adjust if needed, if there are no active bid or if there are no active ask orders and no taker orders waiting to complete, the program will get to the bottom of the function and finally call `c_check_and_create_new_orders`.

`c_check_and_create_new_orders`is right at the bottom of the strategy file and checks if there's a current active bid or ask on the exchange > finds the order amount based on your input and the current order book distribution > finds the price to set the order at (by making sure you achieve your required profitability from the current taker price) and finally places the order using `c_place_order`function.

And that's it.

I'm going to show how to add a simple change to this strategy to change its function slightly. I will go through the different files we need to change to do this. The change is a very minor one which is to create a minimum order size in the strategy so that the strategy will not create an order if the order amount is less than this figure.

1. We are first going to create a new parameter that we can access from within the program, this will set the minimum order size. For this, open up the `config_map.py`file and scroll down to the section where the `config_map`dictionary variables are defined, we can then just insert a new variable like the below.

`"min_order_amount": ConfigVar(`

`key="min_order_amount",`

`prompt="What is the minimum order amount required for bid or ask orders?",`

`prompt_on_new=True,`

`type_str="decimal",`

`validator=lambda v: validate_decimal(v, Decimal("0"), inclusive=False),`

`),`

2. We next need to add our `min_order_amount`parameter to the `start.py`file to make sure it's initialized in our strategy. Scroll down to where the start function is defined and paste.

`min_order_amount = xemm_map.get("min_order_amount").value`

We also need to transfer it into the strategy file by pasting it in the `strategy.init_parameters`list at the bottom as:

`min_order_amount=min_order_amount`

3. To make this variable appear for use in our strategy we finally need to go into our `.pyx`file and add to the class definition `init_params`the variable.

`min_order_amount: Decimal = Decimal,`

We also must define an instance variable slightly further down such as:

`self._min_order_amount = min_order_amount`

4. There are two other files we need to update at this point.

A. The .pxd file needs opening and our new variable added to the variable list such as: `object _min_order_amount`

B. We need to update the template file for the strategy in`hummingbot/hummingbot/Templates`

5. We've finally got the variable into our strategy to use! It's going to be a very simple change to the strategy, I'm going to use the variable in the `c_check_and_create_orders` function we looked at earlier and change this code:

if `not has_active_bid:`

`bid_size = self.c_get_market_making_size(market_pair, True)`

`if bid_size > s_decimal_zero:`

`To:`

`if not has_active_bid:`

`bid_size = self.c_get_market_making_size(market_pair, True)`

`if bid_size > self._min_order_amount:`

And the same on the ask side too!

The current function checks if the current bid size is greater than 0 to progress with placing the order, the change makes this greater than your min order amount variable to place the order.

Now all that's left is to recompile the code, this is usually pretty quick just open git bash and cd to the hummingbot folder. Then activate the `hummingbot conda` environment and type ./compile. That's it! Open up hummingbot (`./start`) and test the new parameter.

This was a pretty simple change but it gives the basic idea that literally anything can be changed and configured. It's worth saying that there are a number of tricks and sources of information that can be used within your strategy. In the cross exchange market making file the market\_pair variable has a lot of information associated with it that can be used in your strategy, it has many attributes that can be used.

For example

`market_pair.maker.market.c_get_price()`can get you the current top bid or ask price for the pair.It also contains the market and pair

`market_pair.taker..market.c_get_vwap_for_volume()`can use the order book to find the average buy price given an order size.

There is probably a hummingbot function or attribute that can get you any information required for market making already in the strategy, it's just a matter of exploring the code and finding them. The `strategy_base.py` and `market_base.py`files in the hummingbot folder are worth exploring for these.

*If you'd like to learn more, feel free to reach out to me on Discord: bsmeat#7510*


