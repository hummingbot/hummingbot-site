## 🛠 Connector Info

- **Exchange Type**: Decentralized Exchange (**DEX**)
- **Market Type**: Central Limit Order Book (**CLOB**)

| Component                            | Status | V2 Strategies | Notes |
|--------------------------------------|--------|---------------|-------|
| [🔀 Spot Connector](#spot-connector) | ✅      | Yes           |
| 🔀 Perp Connector                    | Not available |

## ℹ️ Exchange Info

- **Website**: <https://www.lambdaplex.io>
- **API Docs**: <https://lambdaplex-labs.gitbook.io/lambdaplex/for-developers/api>
- **Fees**: <https://lambdaplex-labs.gitbook.io/lambdaplex/getting-started/fees>

## 🔑 How to Connect

### Generate API Keys

1. Once you've connected your wallet on the Lambdaplex website, click on your account picture in the upper right corner and then click Bots. 
2. Click on "CREATE BOT" and name your bot. 
3. Click on your newly created bot and go to the "API Keys" tab.
4. On your computer, create an SSH key using

```shell
openssl genpkey -algorithm ed25519 -out lambdaplex_key.pem
# public key as 64-char hex:
openssl pkey -in lambdaplex_key.pem -pubout -outform DER | tail -c 32 | od -An -v -tx1 | tr -d ' \n'
```

5. Copy the string of 64 characters and paste it in the "ED25519 PUBLIC KEY" field on the Lambdaplex website.
6. Copy the API key that the Lambdaplex generates for you, something like `lp_E[...]bcmp` and save it for use in Hummingbot.
7. Back on your computer, run

```shell
cat lambdaplex_key.pem
```

8. It will output a key like

```shell
-----BEGIN PRIVATE KEY-----
MC4C[...]Uwxqw
-----END PRIVATE KEY-----
```

9. The second / middle row is the unencrypted private key, and you will use that in Hummingbot.

### Connecting to Hummingbot

From inside the Hummingbot client, run `connect backpack`:

```
>>> connect backpack

Enter your Lambdaplex API key >>>
Enter your Lambdaplex private (unencrypted) key >>>
```

If connection is successful:

```
You are now connected to Lambdaplex
```

## 🔀 Spot Connector
*Integration to spot markets API endpoints*

- **ID**: `lambdaplex`
- **Connection Type**: WebSocket
- **[Github Folder](https://github.com/hummingbot/hummingbot/tree/master/hummingbot/connector/exchange/lambdaplex)**

### Order Types

This connector supports the following `OrderType` constants:

- `LIMIT`
- `MARKET`