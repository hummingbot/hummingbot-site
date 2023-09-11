<iframe style="width:100%; min-height:400px;" src="https://www.youtube.com/embed/t3Su_F_SY_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What does API key do?

An API key is a unique code or a set of unique codes used as an API to authenticate and authorize the calling user or application.  There are two important elements included in a set of API keys; the public key and the private key. These are sometimes also referred to as public key and secret key

link: https://academy.binance.com/en/articles/what-is-an-api-key-and-how-to-use-it-securely

---

## How can we create our API keys?

Creating API keys is different from one exchange to another. Some may need to have a KYC to be approve and others just limit the features. Normally creating API keys are located on the settings or API management. You can check this by going to options or settings of preferred exchange. 

Our supported connectors have each step on how you can create API keys, please refer to https://docs.hummingbot.org/cex-connectors/

## What permissions does the key need?

* Needed
    * Read / trade
    * Spot and perpetual
* Not needed
    * withdraw

---

## How can we connect our API keys on Hummingbot client?

![](./keys-1.png)

![](./keys-2.png)

--- 

## How do we know if API keys are working?

---

## Rate limits

* API keys are rate limited by IP address, not account
* Users can create more server instances if they are hitting rate limits

---

## Keeping keys safe

* What are the risks?
    * People can trade your account and dump into scam tokens
* Don't share
* Storage them somewhere safe

---

## How can we connect our API keys on Hummingbot client?

1. Launch Hummingbot and choose `config` from the main menu.
2. When prompted for the connector, enter the exchange name you wish to connect (e.g., `binance`).
3. You'll be prompted to enter your public API key. Input the public key (or API Key) you generated from the exchange.
4. Next, you'll be prompted for your private API key (or Secret Key). Enter the key carefully.
5. Hummingbot will then verify the connection to the exchange using the provided keys.

Note: The exact steps and prompts may differ depending on the version of Hummingbot you are using. Please refer to the official documentation and ensure that you're using an official and updated version of the software.

![](./keys-1.png)

![](./keys-2.png)

---

## How do we know if API keys are working?

1. After entering your API keys in Hummingbot, the software will attempt to authenticate with the exchange. If successful, you'll receive a confirmation message.
2. You can also use the `status` command within Hummingbot. This will provide information on all running bots and their connectivity status.
3. Perform a simple action, like checking your balance (`balance` command) or fetching order history. If the Hummingbot can retrieve this information without errors, it's likely that your API keys are functioning correctly.
4. Ensure you see no errors related to permissions or authentication in the Hummingbot logs.

---

## Rate limits

* Each exchange has its rate limits, and it's crucial to be aware of these limits to avoid being temporarily banned or restricted. These limits determine how many API calls you can make in a given time frame.
* API keys are rate-limited by IP address, not by the account. So, if you're running multiple bots from the same IP, they will share the rate limit.
* If you encounter rate limit issues, consider spacing out your requests or deploying Hummingbot on multiple servers (each with a different IP) to distribute the load.

---

## Keeping keys safe

* What are the risks?
    * If someone gains access to your API keys, they can place trades on your behalf. They might execute trades at unfavorable rates or even trade into scam or low liquidity tokens causing significant losses.
    * Unauthorized users can also access your trading history and other sensitive data.

* Recommendations:
    * Never share your API keys with anyone. Treat them as you would your password or private keys.
    * Do not store your API keys online or in easily accessible places. Use secure, offline methods whenever possible.
    * Always ensure that the permissions for withdrawals are turned OFF when generating API keys for trading bots.
    * Regularly review and rotate your API keys.
    * Use dedicated email accounts and strong, unique passwords for your exchange accounts.
    * Enable two-factor authentication (2FA) on your exchange accounts for an extra layer of security.