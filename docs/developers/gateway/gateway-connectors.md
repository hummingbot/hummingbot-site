# Developing Gateway Connectors. 

Multiple connectors will be used as examples to help guide you through the development process. Please note that there might be changes that you have to implement depending on the needs of your exchange. 

To install and run the gateway V2 you will need to follow this guide. [Gateway V2](https://hummingbot.org/developers/gateway/setup/) 

## Connector requirements

Introducing a connector into the Hummingbot gateway code base requires a mutual commitment from the Hummingbot team and community developers to maintain a high standard of code quality and software reliability.

We encourage and welcome contributions from the community, subject to the guidelines and expectations outlined below.

1. **Connector folder**: A complete set of connector files based on the available examples.
2. **Unit tests:** Tests that cover at least 80% of the new code — Check coverage using `yarn test:cov`
3. **Inline code comments** (particularly for any code that is materially different from the templates)
4. **Documentation**: Documentation that contains useful information about the exchange for bot users

 Below are some steps you can follow to develop a Gateway V2 connector.

## 1. Configuration Template

Under `gateway/src/templates`

For this step, you will have to create under the templates directory and name it `<exchange_name>.yml`. This file will include the configurations needed for connecting to the exchange. Below are two examples. the example configuration from Pangolin connector on Avalanche and Uniswap. A similar configuration is used for EVM-compatible exchanges.

Pangolin:

```yaml
# how much the execution price is allowed to move unfavorably from the trade
# execution price. It uses a rational number for precision.
allowedSlippage: '1/100'

# how long a trade is valid in seconds. After time passes pangolin will not
# perform the trade, but the gas will still be spent.
ttl: 300

contractAddresses:
  fuji:
      routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
  avalanche:
      routerAddress: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106'
```

Uniswap:

```yaml
versions:
  v2:
    # how much the execution price is allowed to move unfavorably from the trade
    # execution price. It uses a rational number for precision.
    allowedSlippage: '2/100'

    # how long a trade is valid in seconds. After time passes uniswap will not
    # perform the trade, but the gas will still be sent.
    ttl: 600

  v3:
    # how much the execution price is allowed to move unfavorably from the trade
    # execution price. It uses a rational number for precision.
    allowedSlippage: '2/100'

    # how long a trade is valid in seconds. After time passes uniswap will not
    # perform the trade, but the gas will still be sent.
    ttl: 600

contractAddresses:
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

This template will then be checked against the schema, in the next step, to generate the configuration under the `gateway/conf` directory that will be used by the gateway. 

## 2. Configuration Schema

Under `gateway/src/services/schema`

After creating the template, you have to create a schema for the configuration that you set up. The schema should be under the schema directory and it should be named

 `<exchange_name>-schema.json`

Below is an example of the schema file for Pangolin. 

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
!!! warning
    The schema file should represent the schema of the configuration template that you created in the previous step. 

## 3. Creating Connector

Under `gateway/src/connectors`

Once the configuration is done, you can start creating your connectors. The following steps are to help you create your connectors:

- Create a directory under the `connectors` directory and it should be named `<exchange_name>`
- Under the new directory, you should create two files:
    - `<exchange_name>.config.ts` This file will have the configuration of the connector.
    - `<exchange_name>.ts` This file will have the function that connects to the exchange to get price and pair data and to execute trades
- You should add the router abi in a json file under the same folder.
- [Here](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/pangolin/pangolin.config.ts) is an example for `<exchange_name>.config.ts` file. You should follow it and update the changes made in step 1 depending on the template configuration for your exchange.
- For the `<exchange_name>.ts` file, you it has three main function `estimateSellTrade()`, `estimateBuyTrade()` and `executeTrade()`. The implementation of these functions depends on the exchange SDK. For EVM-compatible,  It should be similar to this [implementation](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/connectors/pangolin/pangolin.ts) .
- The other functions in the `<exchange_name>.ts` should follow the examples available and should not require many changes.
- Keep in mind that this process is heavily dependent on the needs of your exchange and the implementation of your sdk.

## 4. Adding Connector to connector routes

Under `gateway/src/connectors/connectors.routes.ts`

You should add your connectors to the list of connectors available in the gateway v2. The step should be similar to the example available in the file. The additions needed should look like this:

```tsx
{
            name: '<exchange_name>',
            trading_type: Exchange_nameConfig.config.tradingTypes,
            available_networks:Exchange_nameConfig.config.availableNetworks,
 },
```

## 5. Adding SDK classes to the Uniswapish interface

Under `gateway/src/services/common-interfaces.ts`, most of the EVM-compatible dex connectors in the gateway v2 can make use of the Uniswapish interface. To use this interface, you will need to make additions to the `Tokenish` type, `UniswapishTrade` type, and  `Fractionish` type with the relevant classes from your exchange SDK. An example of the changes needed can be found [here.](https://github.com/hummingbot/hummingbot/blob/development/gateway/src/services/common-interfaces.ts) 

## 6. Adding connector to the spender list

Under `gateway/src/chains/ethereum/ethereum.ts` Or `src/chains/<Your_chain>/<your_chain>.ts`

This step depends on the chain your exchange is on. The changes needed should be the same regardless of the chain if the exchange is EVM-compatible. 

You need to add your connector to the spender for the gateway to be able to use it. Below is an example of the expected changes. 

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

## 7. Adding connectors to the gateway routes

Under `gateway/src/app.ts`

In This step, you will add your connector to the list of connectors to be accessed through the gateway. The changes needed for this step are simple and should be similar to the example below.

 

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

## 8. Adding tests for the Connector

Under `gateway/test/chains/<chain>/<exchange_name>`

Testing is a crucial step for building connectors. You should follow the examples available [here](https://github.com/hummingbot/hummingbot/tree/development/gateway/test/chains/avalanche/pangolin) to create tests for the routes and functions of your connectors. Before submitting a pull request for your connector, you should have a minimum testing coverage of %80. You can determine test coverage by running `yarn test:cov`.

## 9. Manual testing for the Connector

Please follow the guides available below and perform as much manual testing as possible for your connector. 

Manual testing under [Gateway V2](https://www.notion.so/Gateway-V2-e2db78775c9d45f18a1faac41e8633b2) 

Client testing and Postman: [Gateway V2 connector testing guide](https://www.notion.so/Gateway-V2-connector-testing-guide-78eebb22f6484159b321da4322c700ef)