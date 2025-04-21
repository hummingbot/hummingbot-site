---
date: 2021-10-07
authors:
  - martin
categories:
  - Engineering
tags:
  - Hummingbot Technical Architecture
---

# Hummingbot Gateway Architecture - Part 1
![cover](cover.jpg)

*by Martin Kou*

**Update (February 2023):** Hummingbot Gateway v2 is now available as a standalone Github repository: [https://github.com/hummingbot/gateway](https://github.com/hummingbot/gateway?ref=blog.hummingbot.org). Most of the functionality listed in this post has now been implemented, and we welcome contributions from the community.

Introduction
------------

Hummingbot Gateway is a software that allows Hummingbot to connect to decentralized exchanges like Uniswap.

The Hummingbot Gateway is a separate piece of software apart from Hummingbot, because software libraries needed for accessing decentralized exchanges, e.g. the Uniswap Smart Order Router, are usually not written in Python. The gateway provides Hummingbot access to these decentralized exchanges with their differing software stacks, by exposing a secure and unified API interface to Hummingbot. This API interface can also be used by other potential gateway clients, such as proprietary trading software.

<!-- more -->

In this series of Hummingbot Gateway v2 Architecture blog posts, we will outline the architectural changes we will be making to Gateway v2 to bring it up to production quality - and why changes are needed.



### **History**

![gate-img1](https://images.ctfassets.net/h07e7qaokuyy/4utYNpq89nETXDme9z7LNG/f358007f79d373ee71341ad6250dea7f/photo-1568315128481-99b456a7cf86.jfif?w=750&h=533&fl=progressive&q=100&fm=jpg)Hummingbot Gateway was originally conceived as an interface for Hummingbot to interact with Celo, Balancer and Terra around mid 2020. While the concept of decentralized exchanges were already well known at the time, trading activity was relatively nascent compared to now.

As a result, the original Hummingbot Gateway had a relatively simple architecture, and did not account for many of the failure modes seen in modern DEXes like Uniswap. e.g. stuck blockchain transactions. As a result, the original Hummingbot Gateway could not provide the reliability expected of production trading systems.

We have decided to do a major overhaul of the Hummingbot Gateway architecture. We are going to call the redesigned Hummingbot Gateway, the Gateway v2.

### **Gateway V2 design goals**

![gate-img2](https://images.ctfassets.net/h07e7qaokuyy/5X1juF7ZPawFwDrk0BLXZX/9ba2bfdfa14fba3ea8afc4f3fd9977fb/photo-1615281144933-17ae60439da2.jfif?w=750&h=500&fl=progressive&q=100&fm=jpg)Gateway v2 is a redesign of the original Hummingbot Gateway, with the following design goals:

**Robustness and reliability:** The gateway should continue to work despite encountering errors and failures; and when an operation in the gateway has to fail, it should fail gracefully rather than catastrophically.

**User experience:** The gateway should be easy to set up and configure; once the gateway has been set up, it should work reliably in the background and let the user focus on trading.

**Developer experience:** While the initial versions of gateway v2 will come with some decentralized exchange connectors bundled with it, we expect the community will be making the majority of contributions for DEX connectors, feature requests and bug fixes over time. This means gateway v2 should be easy to develop and test on for community developers.

Robustness and Reliability
--------------------------

![gate-img3](https://images.ctfassets.net/h07e7qaokuyy/3k6GjmLmU8pmE5mJmSiujf/37d429f1e45466dda14141886f078128/photo-1622322789114-475a83808d89.jfif?w=750&h=562&fl=progressive&q=100&fm=jpg)Hummingbot Gateway and Hummingbot itself, are more similar to backend systems than frontend systems in nature. In particular, these systems deal with transactions that can have significant financial consequences. Thus, Hummingbot gateway needs to be built with the same or superior reliability assurances as seen in large scale backend systems:

* High availability and resilience against errors
* Good test coverage and monitoring
* Information security

### **Resilience Against Errors**

All large scale backend systems that are dependent on other networked components encounter errors on a regular basis. However, the backend system itself must not fail catastrophically just because some of its dependent components have failed or returned errors. For example, thousands of hard disks in Google data centers fail daily; yet, Google as an overall service do not fail just because a thousand hard disks has failed on a Saturday.

Hummingbot and Hummingbot gateway have similar challenges, though at a smaller scale. Exchange APIs and blockchain transactions regularly fail, and blockchain transactions have their own unique modes of failures because of the different system architecture compared to the usual server-client architectures. The resilience requirements for Hummingbot and Hummingbot gateway, however, are the same - just because Ethereum is congested, or the mempool has dropped your transaction, the bot and the gateway must not fail in a catastrophic manner.

### Nonce

Most blockchains, including Ethereum and all EVM based chains, enforce a sequential order of transactions. This is enforced by a unique nonce number for user transactions. In particular, every transaction signed by an Ethereum address must have a unique and monotonically increasing nonce number. The first transaction sent by an address must have a nonce of 0, the second transaction must have a nonce of 1, and so on.

It's possible for gateway clients to request EVM transactions faster than the blockchain network can acknowledge and process them. Thus, the gateway cannot depend on the last nonce reported from Ethereum node APIs for creating new transactions, or it'd risk overwriting recently sent transactions with duplicate nonce numbers.

In the original version of Hummingbot gateway, all transaction-emitting API calls would create new blockchain transactions; it was further assumed that the underlying blockchain would be able to process transactions so quickly, they appear to be "immediate" from the perspective of Hummingbot. Both of these assumptions are often not true in practical mainnet chains, where network congestion is the norm rather than the exception. The mismatched assumptions caused the original gateway to seem to pass testing on Ethereum test nets, or networks with fast block times - but fail on Ethereum main net.

Gateway v2 will come with the following architectural changes to account for how real-world Ethereum blockchains work:

1. All transaction-emitting APIs will be made nonce-aware - such that unconfirmed or stuck blockchain transactions can be re-tried with higher gas fee or cancelled.
2. In the case that Hummingbot or gateway clients are emitting batches transactions quickly - the gateway will track the newest nonce used locally, to make sure the new transactions will be emitted with increasing nonces rather than overwriting each other.
3. The local nonce tracking manager will store the latest nonce in a fast local database, to ensure proper self-healing if gateway crashes and restarts.

### Stuck and dropped transactions

Almost all blockchains today use the concept of transaction fees and mempool to prioritize transactions to include into new blocks. Since miners or validators are automatically incented to prioritize higher fee transactions, transactions marked with lower fees are often delayed or even dropped.

This causes additional problems when considering blockchain transactions must be executed serially. Let's say I've sent transactions with nonces 3, 4, 5 to Ethereum network. If transaction 3 is stuck, then transactions 4 and 5 cannot be processed before 3 has been processed. Thus, just having one transaction stuck or dropped by a blockchain can cause all subsequent transactions to be stuck or dropped.

This transaction semantic is very different from the usual semantic of server API calls. Gateway's job here, is to bridge the unreliable semantics of blockchain transactions to the usual reliable semantics of API calls - s.t. API clients can either hand off some of the processing complexity to gateway, or at least be informed and be able to respond to transaction events (including errors and getting stuck) in a timely manner.

Gateway v2 will be making the following changes to allow for cancelling or retrying stuck transactions:

1. `/poll` API will carry additional response fields to account for transactions that don't yet exist in mempool, transactions that are stuck in mempool, in addition to confirmed transactions.
2. A new `/cancel`API, which allows for cancelling stuck transactions.

All transaction-emitting APIs, including `/cancel`, will accept `maxFeePerGas`,

`maxPriorityFeePerGas`, and `nonce`arguments, to allow Hummingbot to retry stuck transactions with different gas costs.

1. Also, as implied by the `maxPriorityFeePerGas`argument, we're adding support for EIP-1559 transactions.

### Blockchain node errors

Blockchain node API calls (e.g. all ethers.js calls) can fail. The most common reason being network disruptions. The gateway should fail gracefully, rather than catastrophically, in the face of node API errors. It should also give informative errors in the logs, to give visibility to users either on Hummingbot side, or on the standalone gateway logs.

In the original Hummingbot gateway, errors from blockchain node API interactions would often produce cryptic error logs that are confusing to users. While the original Hummingbot gateway did catch for errors when performing blockchain operations, it didn't explicitly catch for common error classes like blockchain node errors and provide legible log message for those cases.

Gateway v2 will carry additional test coverage for blockchain node errors. It will also carry improved error logging for node error cases, to make sure users on Hummingbot side will receive legible and actionable error messages.

### Node API rate limits

This is a more specific, but also common node errors case. Node services like Infura come with API rate limits - once exceeded, the gateway client would get temporarily banned. There are two major things we can do to reduce the number of API calls to blockchain node - reducing the number of calls, and monitoring.

The original Hummingbot gateway did not account for the node API rate limits from common services like Infura, and so exceeding API rate limits and getting banned became one of the most common errors in the original Hummingbot gateway.

Gateway v2 will carry the following architectural changes to reduce the number of API calls made to node services like Infura, and monitor the number of API calls made over time:

1. Caching logic for repeated blockchain information polls calls from Hummingbot, which is useful for saving node API calls before a new block has arrived.
2. Metrics for monitoring the amount of API calls made to blockchain nodes every 5 minutes, which will be useful for catching undetected API call hogs on Hummingbot side, or inside the gateway.

Test Coverage and Monitoring
----------------------------

![gate-img4](https://images.ctfassets.net/h07e7qaokuyy/UBFphEEP1aBlrepmlSCds/3d6118cb7eaf1f14be4922c67e5abde5/photo-1616458964840-5108e4d3adb3.jfif?w=750&h=499&fl=progressive&q=100&fm=jpg)Test cases and monitoring metrics are the other side of the coin for any resilient and reliable software. In general, we can only improve the reliability of a piece of software, if we constantly measure the software's behavior in different cases via test cases and metrics.

While the original Hummingbot gateway carried some test cases - they were not useful for uncovering problems because almost all of them focused on only the happy cases. As a result, most of the error paths were not tested, and effective test coverage was poor.

In the following sections, we will discuss (1) what needs to be tested, (2) how the tests should be constructed, and (3) what kind of monitoring to implement.

### What to test

We cannot implement tests for absolutely every logic path, especially not at the beginning. So it's important to discuss what types of tests should be priority, and why.

**Normal user flows**: These include testing all the logic paths used in normal operation of Hummingbot and gateway. This would include, but not limited to, testing for the normal flows for operations like getting the gas cost, getting asset prices, creating orders, getting transaction status, etc.

**Common error flows**: These include testing the commonly encountered error paths in the normal operation of Hummingbot and gateway. These would include, but not limited to, network errors while making node API calls, transactions not being registered on the blockchain, not enough ETH for paying the gas cost, not enough balance for creating the orders, etc.

**Regression testing**: Bug fixes, especially those concerning logic problems within the code (rather than, say, typographic mistakes) - should come with unit test cases to make sure they do not come back after further code changes. While this may seem like a hassle in early development, regression tests will save the engineering team a lot of time re-fixing bugs later on.

### Test fixtures

It is difficult to test for common error flows unless we have a reliable way of reproducing or simulating them in test cases. There is no known reliable way to coax a blockchain to give us errors consistently - so simulation is the only way. This means some test fixtures for simulating various responses from the blockchain or blockchain related libraries (e.g. Uniswap order router) is required.

We will likely need to expand the test fixtures to testing success cases later as well - again, because blockchain operations are inherently unreliable - so there's also no known way to make it not give us errors.

We will start by constructing small set of prototype unit test cases, with the test fixtures that are able to simulate failure cases. Once we have that, we will be able to write more unit test cases based on the same fixture architecture.

### Monitoring

It is not always enough to rely on user bug reports to gauge the stability of complicated backend systems. Passive monitoring metrics are often required for ensuring the quality of modern systems. Besides monitoring for reliability, metrics can also help us better understand how gateways are being used in the wild - which can help us better craft our product roadmap later on.

**Unit test coverage monitoring**: Gateway v2 will target for a 30% to 40% unit test coverage during the early staging, and gradually move the test coverage to 60%+ as the project matures. This is a similar test coverage trajectory we used for the Hummingbot project.

### Usage and error metrics of important logic flows

These include counts of errors, error logs, or metrics that may lead to errors like the number of node API calls per 5 minutes discussed before. Gateway v2 will carry anonymous telemetry for usage and error metrics, s.t. Hummingbot team can be made aware of new errors in software releases even before users has reported a bug.

Telemetry will only be enabled on Gateway v2 with user consent, and all the metrics data collected will be stored in an anonymized manner.

Information Security
--------------------

![gate-img5](https://images.ctfassets.net/h07e7qaokuyy/4xJcBgxBJ4FTwW2M4dzcQe/ed4634b4d4ab97775b2e2e4e2007f2e6/photo-1554279652-51eee9372f32.jfif?w=750&h=422&fl=progressive&q=100&fm=jpg)Since gateway API calls often carry the wallet private key in plaintext form, it is important to make sure gateway and gateway clients (including Hummingbot) authenticate each other before sending anything to the other side.

The original Hummingbot gateway already comes with SSL authentication for both sides, which already provides some protection against malicious software trying to intercept the private keys in transit. However, the mechanisms to protect the passphrase to the SSL private key is weak in the original Hummingbot gateway, and we are going to strengthen the security around the SSL private keys in Gateway v2.

Here're the changes Gateway v2 will carry on the information security side:

### Better protection for the SSL private key passphrase

* **Hummingbot side**: the passphrase will be encrypted with the Hummingbot password, as opposed to being a plaintext setting in one of the config files.
* **Gateway side**: the passphrase will be isolated in its own file, with `0600`UNIX permissions - rather than being mixed into other config files. This is similar to how SSL private key passphrases are usually protected in web servers.

### Eliminate need to pass the wallet private key in gateway API calls

* We are going to eventually migrate to using encrypted wallet files shared between Hummingbot and Gateway v2, instead of passing the wallet private key in API requests. This will come in a subsequent release after the initial public release of Gateway v2.
* Since encrypted wallet files still depend on passphrases, the passphrase security features outlined in point 1 above will still apply.

Conclusion
----------

This concludes Part 1 of the Hummingbot Gateway v2 Architecture blog series, where we have discussed the improvements we are going to make in the robustness and reliability aspects of Hummingbot Gateway v2. The goal here is to turn Gateway v2 into a production-ready software that's suitable for building high-value crypto trading systems.

In the next part of the blog series, we will talk about the improvements we have planned on the user experience and developer experience aspects of Gateway v2. 

See [Part 2](../hummingbot-gateway-architecture-part-2/index.md) of this post.


