---
date: 2021-04-22
authors:
  - coinalpha
categories:
  - Strategy Guides
---

# Technical Deep Dive into the Avellaneda & Stoikov Strategy

![cover](cover.webp)

In our previous blog post, we introduced the new `avellaneda_market_making` strategy. This time, we delve deeper into the mathematical aspects of this strategy. We aim to explain how we adapted the original Avellaneda-Stoikov model for the cryptocurrency market and simplified the calculation of key parameters, known as greeks.

This article mathematically substantiates the assumptions and calculations that made the authors' model more suitable for Hummingbot traders.

## Original Model and Our Proposed Extensions

Let's start by revisiting the core equations from the [Avellaneda-Stoikov paper](https://www.math.nyu.edu/faculty/avellane/HighFrequencyTrading.pdf):

<!-- more -->

### Original Model

Reservation price (market price, adjusted toward your target inventory level):

$$
r(s,q,t,\sigma)=s-q\gamma\sigma^{2}(T-t)
$$

$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$

Optimal spread around reservation price:

$$
\delta^{a}+\delta^{b}=\gamma\sigma^{2}(T-t)+\frac{2}{\gamma}ln(1+\frac{\gamma}{\kappa})
$$

Where:

- s [quote asset] = current mid price
- q [no unit] = quantity of stocks in inventory of base asset (could be positive/negative for long/short positions)
- $\gamma$ [1/quote asset] = inventory risk aversion parameter
- $\sigma$ [quote asset] = volatility
- T [no unit] = closing time (conveniently normalized to 1)
- t [no unit] = current time (T is normalized = 1, so t is a time fraction)
- $\delta^{a}, \delta^{b}$ [quote asset]= Bid/Ask spread (they are symmetrical to reservation price → $\delta^{a}=\delta^{b}$)
- $\kappa$ [1/quote asset]= Order book *liquidity* parameter

### Proposed Extensions

The paper's model is predicated on assumptions that may not align well with the needs of a crypto trader. To address this, we propose several modifications:

1. Hummingbot allows traders to specify the order amount, so we introduce `order_amount_shape_factor` ($\eta$), as described in the 2018 [Optimal High-Frequency Market Making](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf) paper.
2. Given the rapid volatility changes in crypto, we suggest a volatility threshold that triggers a recalculation of strategy parameters `vol_to_spread_multiplier`.
3. Recalculation as mentioned in point 2.
4. Considering that bots may run indefinitely, we propose a finite `closing_time` (_T_) with a recurring time fraction _t_, alongside parameter recalibration every time t=T.

## Calculation of $\gamma$, $\kappa$ and $\eta$

### Introduction

The original Avellaneda equations offer multiple variables. To establish constraints, we focus on the bid/ask spread to mid-price as a primary value for our bots. Additionally, $\gamma$ serves as a risk aversion parameter to inventory risk, so we seek a *knob* parameter to manage this factor while adhering to user-defined spread parameters.

### Calculation of $\gamma$

Assuming users have set `min_spread` and `max_spread`, we calculate the maximum possible risk factor ($\gamma$) based on these spreads:

#### Case where q&gt;0 (inventory ratio should be decreased)

To comply with user-defined spreads:

$$
Spread\ optimal\_ask_{t=0}\ge Min\ Spread
$$

$$
Spread\ optimal\_bid_{t=0}\le Max\ Spread
$$

From this, we derive:

$$
(\frac{1}{2}-q)\gamma\sigma^{2}+\frac{1}{2}ln(1+\frac{\gamma}{\kappa})\ge Min\ Spread
$$

$$
(\frac{1}{2}+q)\gamma \sigma ^{2}+\frac{1}{2}ln(1+\frac{\gamma}{\kappa}) \le Max\ Spread
$$

Combining these inequalities:

$$
2q\gamma\sigma^{2} \le Max\ Spread - Min\ Spread
$$

#### Case where q&lt;0 (inventory ratio should be increased)

For q&lt;0:

$$
-2q\gamma\sigma^{2} \le Max\ Spread - Min\ Spread
$$

Both cases lead to the inequality:

$$
\gamma \le \frac{Max\ Spread-Min\ Spread}{2\|q\|\sigma^{2}}=\gamma_{max}
$$

Setting `inventory_risk_aversion` (IRA) as a coefficient between 0 and 1, we define $\gamma$ as:

$$
\gamma=\gamma_{max}*IRA=\frac{Max\ Spread-Min\ Spread}{2\|q\|\sigma^{2}}*IRA
$$

### Calculation of $\kappa$

We select `order_book_depth_factor` ($\kappa$) to start with the maximum possible spread at t=0. This decision is to traverse a broader range of spreads for maximum profitability. The calculation is:

$$
spread_{t=0}=\frac{\delta_{a}+\delta_{b}}{2}\pm \Delta
$$

$$
(\delta_{a}+\delta_{b})_{max}=(2-IRA)*Max\ Spread+IRA*Min\ Spread
$$

Final equation for $\kappa$:

$$
\kappa\bigg((\delta_{a}+\delta_{b})_{t=0}\bigg)=\frac{\gamma}{exp\{\frac{(\delta_{a}+\delta_{b})_{t=0}\gamma-\sigma^{2}\gamma^{2}}{2}\}-1}
$$

### Calculation of $\eta$

`order_amount_shape_factor` ($\eta$) modifies order size based on the distance from the target inventory _q_. Using `inventory_risk_aversion` (IRA), we determine:

$$
q_{decay}=\frac{Total\,inventory\,in\,base\_asset}{IRA}\newline\\[0.1in]\eta=\frac{1}{q_{decay}}
$$

### $IRA \to 0 \implies \gamma \to 0$

When $IRA \to 0$ (equivalent to $\gamma \to 0$), the reservation price becomes symmetrical to the mid-price, with final spread values determined by:

$$
IRA \to 0 \implies \gamma \to 0 \newline\\[0.1in]
t=0 \implies (T-t)=1 \newline\\[0.3in]
\lim_{\gamma \to 0} r(s,q,t=0,\sigma) = s \\[0.3in]
\lim_{\gamma \to 0} \delta^{a}+\delta^{b}(q,t=0,\sigma) = \frac{2}{\kappa}\\[0.1in]
$$

Thus, if $\gamma \to 0$, the spread around r = mid_price will be fixed:

$$
r = s\\[0.1in]
If\ \gamma \to 0 \implies IRA \to 0\ \therefore\\[0.1in]
(\delta_{a}+\delta_{b})=2*Max\ Spread
$$

In this scenario, pure market making strategy is a special case of the Avellaneda market making strategy.

## References

[High-frequency trading in a limit order book (Avellaneda and Stoikov, 2006)](https://people.orie.cornell.edu/sfs33/LimitOrderBook.pdf)

[Optimal High-Frequency Market Making (Fushimi, Gonzalez Rojas and Herman, 2018)](http://stanford.edu/class/msande448/2018/Final/Reports/gr5.pdf)
