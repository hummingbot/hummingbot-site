---
date: 2023-08-01
authors:
  - foundation
categories:
  - Governance
---

# Proposed Epoch 6 Governance Changes

![](cover.png)

Since inception in early 2022, Hummingbot Foundation has continually improved and iterated on its governance system. Each [quarterly Epoch](../../../governance/epochs.md) has introduced voting format changes that are designed to align the choices and decisions that HBOT holders make with changes to the Hummingbot codebase that users want.

Since the end of the Epoch 5 polls, we have engaged in comprehensive internal discussions aimed at enhancing the governance process for the next epoch. Please see below for the proposed improvements. We cordially extend an invitation to our community to thoroughly examine these proposed changes below and provide feedback!

<!-- more -->

## Summary

* Focus Polls on Connector Voting
* Add concept of Bounty Allocations
* Change Governance Parameters

## Focus Polls on Connector Voting

Our community is the heart of our ecosystem, and we recognize the substantial interest in voting on connector inclusion and support. We have analyzed activities from Epochs 1-5 and concluded that our members prioritize voting on **connectors** – standardized integrations to exchanges and blockchain networks.

Connectors are dynamic, reflecting the constantly evolving nature of exchanges and blockchains, and maintaining robust, high-quality connectors require dedicated upgrades and fixes. Recently, we have expanded the functionality of the top connectors by adding support for additional order types and [historical data collection](../../../v2-strategies/candles-feed.md).

To prioritized and allocate maintenance bandwidth efficiently, we propose the changes below:

1. Split the DEX Connector Poll into two categories: DEX-AMM and DEX-CLOB
2. Introduce a Chain Connector Poll
3. Remove the Core Strategies Poll

This means that each quarterly epoch, we will conduct the following Polls to separate connectors into Gold, Silver and Bronze tiers:

1. **CEX**: Centralized exchanges such as Binance, Gate.io, Kucoin, etc.
2. **DEX-CLOB**: Order-book decentralized exchanges such as dYdX, Injective, Dexalot, etc.
3. **DEX-AMM**: AMM decentralized exchanges such as Uniswap, Curve, PancakeSwap, etc.
4. **Chain**: L1/L2 blockchain networks such as Ethereum, Polygon, Arbitrum, etc.

The rationale behind removing the Core Strategies Poll is that Hummingbot is now a general framework for building all kinds of bots rather than just a market making tool.

Rather than focusing on maintaining individual strategies, we believe that our time is spent incentivizing users to contribute various types of sample scripts along with guides that show how to use them, such as our recent [Directional Strategy](https://www.youtube.com/watch?v=UX0ChdWV7uc) and [Grid Strategy](https://www.youtube.com/watch?v=1j81gP2ToCE) experiments conducted by individual community members.

Our goal is to spur innovation and empower our members to build comprehensive library of strategies.

## Add Concept of Bounty Allocations

To make the governance process more transparent, we propose the concept of Bounty Allocations, reserved HBOT amounts dedicated to bounties related to specific connectors.

Following the voting that kicks off each Epoch, we propose to add the following allocation amounts for Gold/Silver connectors:

* Gold: Add 400,000 HBOT to connector's Bounty Allocation (1 per Poll)
* Silver: Add 100,000 HBOT to connector's Bounty Allocation (3 per Poll)
* Bronze: None

Any HBOT holder may propose bounties for connector via Improvement Proposals, provided there is an existing Bounty Allocation. In addition, the Foundation will actively create bounties for Gold and Silver connectors that utilize these allocations. Allocations are considered permanent, but we reserve the right to modify them if they are not being utilized.

## Change Governance Parameters

Finally, we proposing to change certain parameters in the HBOT governance system:

* Rename Minimum Voting Power Threshold to **Connector Inclusion Threshold**. All connectors need to receive at least this number of HBOT votes or more to be included in the next Epoch.
* Revise the Connector Inclusion Threshold from 100K to **200K HBOT**
* Change the minimum HBOT balance required for creating Governance Proposals from 50K to **1M HBOT**

The proposed changes aim to augment efficiency in the distribution of maintenance resources throughout the Hummingbot codebase, achieved by assigning the bounties to Gold and Silver connectors that have earned the community's active use and voting preference. Finally, increasing the thresholds of certain governance parameters underpins our overarching goal of instilling and recognizing the inherent value of each connector incorporated into the Hummingbot codebase.

We have diligently published these proposals well in advance of Epoch 6 to ensure that our valued community of developers and members have ample time to review and provide their invaluable feedback, pose any questions, and offer insightful suggestions.

We invite you to join the conversation in the **#proposals** channel on Discord!
