## Run Hummingbot and Get Fee Rebates!

Certain partner exchanges allow their broker partners to allocate a certain percentage of their fee share to users. For these exchanges, we will allocate a porttion of our total fee share to users as an additional incentive to run Hummingbot. This means that any users who sign up using our referral link and/or use Hummingbot will earn rebates on their trading fees an those they refer!

## How to Join

Coming soon!

## Why should you support us?

This supports our work at the not-for-profit Hummingbot Foundation. To keep keep Hummingbot open source and free, we have broker agreements with exchange partners, in which the exchanges share a portion of the trading fees with us, at zero cost to you.

## How do exchange broker program work?

Every time you use Hummingbot to submits an order, it sends an HTTP request to the API of the exchange. The information of the order are placed in the body and the authentication in the headers of the HTTP request (exact implementation differs per exchange).

In order for the exchange to identify that the HTTP request for the order is coming from a user who is using the Hummingbot codebase, it checks for the metadata in the HTTP request for a Hummingbot identifier.
