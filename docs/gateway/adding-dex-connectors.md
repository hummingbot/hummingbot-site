This page shows you how to add a decentralized exchange (DEX) connector to Hummingbot's Gateway module and configure which chains and networks it supports.

We'll use the Uniswap and Pangolin connectors as examples to help guide you through the development process. Please note that there might be changes that you have to implement depending on the needs of your DEX.

## Requirements

Introducing a connector into the Hummingbot codebase requires a mutual commitment from both the contributing developer as wel the Hummingbot Foundation team to maintain a high standard of code quality and software reliability.

We encourage and welcome contributions from the community, subject to the guidelines and expectations outlined below:

1. **Connector folder**: A complete set of connector files based on the available examples.
2. **Unit tests:** Tests that cover at least **80%** of the new code. Check coverage using `yarn test:cov`.
3. **Inline code comments**: Highly recommended, particularly for any code that is materially different from the templates
4. **Documentation**: Documentation that contains useful information about the exchange for bot runners

First, install and run Gateway by following the [developer setup guide](https://hummingbot.org/developers/gateway/setup/).

Afterwards, follow the steps below to develop a Gateway connector:

## 1. Create configuration template

📁 **Folder** [`gateway/src/templates`](https://github.com/hummingbot/gateway/tree/main/src/templates)

Create a template in the templates folder and name it `<exchange_name>.yml`. This file will include the configurations needed for connecting to the exchange.

Below are example configurations from Uniswap (Ethereum) and Pangolin (Avalanche). Configurations for other EVM-compatible exchanges should be similar.

### Uniswap

```yaml
versions:
  v2:
    # allowedSlippage: how much the execution price is allowed to move unfavorably from the trade
    # execution price. It uses a rational number for precision.
    allowedSlippage: '2/100'
    # ttl: how long a trade is valid in seconds. After this time passes uniswap will not
    # perform the trade, but the gas will still be sent.
    ttl: 600
  v3:
    allowedSlippage: '2/100'
    ttl: 600
contractAddresses:
  # constant used for each supported network
  mainnet: 
    uniswapV2RouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    uniswapV3RouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564'
    uniswapV3NftManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
  kovan: 
    uniswapV2RouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    uniswapV3RouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564'
    uniswapV3NftManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
  ropsten: 
    uniswapV2RouterAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
    uniswapV3RouterAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564'
    uniswapV3NftManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
```

### Pangolin

```yaml
# allowedSlippage: how much the execution price is allowed to move unfavorably from the trade
# execution price. It uses a rational number for precision.
allowedSlippage: '1/100'
# ttl: how long a trade is valid in seconds. After this time passes pangolin will not
# perform the trade, but the gas will still be sent.
ttl: 300
contractAddresses:
  fuji:
      routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
  avalanche:
      routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
```

This template will then be checked against the schema, in the next step, to generate the configuration under the `gateway/conf` directory.

## 2. Create configuration schema

📁 **Folder** [`gateway/src/services/schema`](https://github.com/hummingbot/gateway/tree/main/src/services/schema)

Create a schema in the directory above for the configuration that you set up. This tells Gateway how to validate and type the entries in the configuration template that you created earlier. The schema should be named `<exchange_name>-schema.json`.

Below is an example of the schema file for Pangolin:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "allowedSlippage": { "type": "string" },
    "ttl": { "type": "integer" },
    "contractAddresses": {
      "type": "object",
      "patternProperties": {
        "^\\w+$": {
          "type": "object",
          "properties": {
            "routerAddress": { "type": "string" }
          },
          "required": ["routerAddress"],
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "required": ["allowedSlippage", "ttl", "contractAddresses"]
}
```

## 3. Create connector

📁 **Folder** [`gateway/src/connectors`](https://github.com/hummingbot/gateway/tree/main/src/connectors)

Now, you can start creating the connector. Following the steps below:

- Create a new directory inside the `connectors` directory and name it `<exchange_name>`.
- Inside this new directory, create the following two files:
  - `<exchange_name>.config.ts`: This file contains the connector configuration.
  - `<exchange_name>.ts`: This file contains functions that interact with the DEX, such as fetching price and pair data, executing trades, and adding/removing liquidity.
- Add the DEX ABI (interface for the smart contract functions and variables) as a json file in the same folder, i.e. `uniswap_v2_router_abi.json`.
- See [pangolin.config.ts](https://github.com/hummingbot/gateway/blob/main/src/connectors/pangolin/pangolin.config.ts) as an example for the `<exchange_name>.config.ts` file. Copy it and update the changes made in step 1 depending on the template configuration for your exchange.
- The `<exchange_name>.ts` file contains three main functions: `estimateSellTrade()`, `estimateBuyTrade()` and `executeTrade()`. The implementation of these functions depends on the exchange SDK. For EVM-compatible exchanges, the implementation should be similar to [pangolin.ts](https://github.com/hummingbot/gateway/blob/main/src/connectors/pangolin/pangolin.ts).
- The other functions in the `<exchange_name>.ts` should follow the examples available and not require many changes.
- Keep in mind that this process is heavily dependent on the needs of your exchange and how the exchange SDK, if available, is implemented.

## 4. Add connector routes

📁 **File** [`gateway/src/connectors/connectors.routes.ts`](https://github.com/hummingbot/gateway/tree/main/src/connectors/connectors.routes.ts)

Add your new connector to the list of connectors available in Gateway. The step should be similar to the examples available in the file, and the new entry should look like this:

```tsx
{
    name: '<exchange_name>',
    trading_type: Exchange_nameConfig.config.tradingTypes,
    available_networks:Exchange_nameConfig.config.availableNetworks,
},
```

## 5. Add SDK classes to Uniswapish interface

📁 **File** [`gateway/src/services/common-interfaces.ts`](https://github.com/hummingbot/gateway/tree/main/src/services/common-interfaces.ts)

Under `gateway/src/services/common-interfaces.ts`, most of the EVM-compatible DEX connectors in the gateway v2 can make use of the Uniswapish interface.

To use this interface, you will need to make additions to the `Tokenish` type, `UniswapishTrade` type, and  `Fractionish` type with the relevant classes from your exchange SDK. An example of the changes needed can be found in `common-interfaces.ts` above.

## 6. Add connector to spender list

📁 **File (Ethereum)** [``gateway/src/chains/ethereum/ethereum.ts`](https://github.com/hummingbot/gateway/tree/main/src/chains/ethereum/ethereum.ts)

Add your exchange to the spender list for the chain where your exchange is located. The changes needed should be similar to those in `ethereum.ts` if the exchange is on an EVM-compatible chain.

Below is an example of the changes required:

```tsx
getSpender(reqSpender: string): string {
    let spender: string;
    if (reqSpender === 'uniswap') {
      spender = UniswapConfig.config.uniswapV2RouterAddress(this._chain);
    } 
    else if (reqSpender === '<exchange_name>') {
      spender = Exchange_nameConfig.config.routerAddress(this._chain);
    }
  
  else {
      spender = reqSpender;
    }
    return spender;
  }
```

## 7. Add connector to Gateway list

📁 **File** [`gateway/src/app.ts`](https://github.com/hummingbot/gateway/tree/main/src/app.ts)

Add your connector to the list of connectors to be accessible via Gateway. The changes needed for this step are simple and should be similar to the example below.

```tsx
interface ConnectorsResponse {
  uniswap: Array<AvailableNetworks>;
  pangolin: Array<AvailableNetworks>;
  traderjoe: Array<AvailableNetworks>;
  <exchange_name>:Array<AvailableNetworks>; 
}
gatewayApp.get(
  '/connectors',
  asyncHandler(async (_req, res: Response<ConnectorsResponse, {}>) => {
    res.status(200).json({
      uniswap: UniswapConfig.config.availableNetworks,
      pangolin: PangolinConfig.config.availableNetworks,
      traderjoe: TraderjoeConfig.config.availableNetworks,
   <exchange_name>: Exchange_nameConfig.config.availableNetworks,
    });
  })
);
```

## 8. Add connector tests

📁 **Folder** [`gateway/test/chains`](https://github.com/hummingbot/gateway/tree/main/test/chains)

Under `gateway/test/chains/<chain>/<exchange_name>`

Automated test coverage is a crucial step for maintaining high-quality connectors. The Hummingbot Foundation QA team runs these tests when reviewing connectors on an ongoing basis.

Follow the [Avalanche tests](https://github.com/hummingbot/gateway/tree/main/test/chains/avalanche) to create tests for the routes and functions of your connector.

Before submitting a pull request for your connector, you should have a minimum testing coverage of **80%**. You can determine test coverage by running `yarn test:cov`.

## 9. Perform manual testing

Make sure to perform extensive manual testing of your connector to ensure that users can use it when running various Hummingbot strategies.

Follow the guides below:

- Manual testing under [Gateway V2](https://www.notion.so/Gateway-V2-e2db78775c9d45f18a1faac41e8633b2)
- Client testing and Postman: [Gateway V2 connector testing guide](https://www.notion.so/Gateway-V2-connector-testing-guide-78eebb22f6484159b321da4322c700ef)

## 10. Create connector documentation page

📁 **Folder** [`hummingbot-site: docs/gateway/exchanges`](https://github.com/hummingbot/hummingbot-site/tree/main/docs/exchanges)

As a last step, create a Markdown documentation page in the `hummingbot-site` Github repository that provides descriptive information about the new DEX connector for Hummingbot users.

The format should be similar to those of other pages in the same directory, i.e. [`uniswap.md`](https://github.com/hummingbot/hummingbot-site/blob/main/docs/gateway/exchanges/uniswap.md) or [`pangolin.md`](https://github.com/hummingbot/hummingbot-site/blob/main/docs/gateway/exchanges/pangolin.md).

Feel free to add more sections as needed, such as guides or best practices that help users make use of your new connector.

## 11. Add documentation page to index

📁 **File** [`hummingbot-site: mkdocs.yml`](https://github.com/hummingbot/hummingbot-site/blob/main/mkdocs.yml)

Finally, modify `mkdocs.yml` in the root `hummingbot-site` directory to include the newly created page in the site index.

In `mkdocs.yml`, add an entry for your connector to the following section:

```
- Gateway Connectors:
      - Gateway Connectors: gateway/index.md
      - DEXs:
        - DEXs: gateway/exchanges/index.md
        - Uniswap: gateway/exchanges/uniswap.md
        - Pangolin: gateway/exchanges/pangolin.md
```
