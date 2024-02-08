---
date: 2024-02-12
authors:
  - foundation
categories:
  - Guides
---

# User Guide: Hyperliquid Vaults

## What are Vaults

Hyperliquid vaults serves as an exchange wallet where the funds are use by a individual trader or automated market maker. Anyone can deposit on the vault and earn a share of profits.

## How to create a Vault


Login to https://app.hyperliquid.xyz/ using your preferred wallet (metamask)

[![image](image1.png)](image1.png)

Go to Vaults then Create Vault

[![image](image2.png)](image2.png)

Enter the name for the vault and short description

[![image](image3.png)](image3.png)

- Make sure to check the name and description as it cannot be changed later
- Creation of vault requires minimum of 100 USDC
- Leaders need to always keep at least 5% of the total value of that vault. This rule is in place to make sure that you, as the vault leader have a  investment in the vault's success.
- Leaders are not allowed if withdrawing money from the vault would make the ownership less than 5%. This requirement is designed to align the interests with the vault's performance and encourage responsible management.

Leaders are vault owners in Hyperliquid 


How to manage my vault?

Once you have successfully created the vault, Go to Trade page 

[![image](image4.png)](image4.png)

On the upper right corner, there is a dropdown to select which account to use. Either main account or vault


How to close my vault?

On your vault’s dedicated page, click the Leader Actions dropdown and select “Close Vault”. A modal will appear to confirm that you want to close your vault.

[![image](image5.png)](image5.png)

- `All positions must be closed before the vault can close.` All depositors will receive their share of the vault when it is closed.
- ***What happens to open positions in a vault when someone withdraws?***
    - If there is enough initial margin to keep the open positions, withdrawal does not affect the open position
    - If there is not enough initial margin for the open position, a proportional amount of the withdrawal is closed for all open positions. For example, if a user comprised 10% of the vault’s total deposits, 10% of all open positions would be closed when they withdraw.


### What are the benefits of using vaults?

### Protocol vaults

- The Hyperliquidity Provider (HLP) vault runs market making strategies on Hyperliquid. Anyone can provide liquidity for HLP and share in the pnl. HLP doesn’t collect any fees, and pnl is shared proportionally based on each depositor’s share of the vault. HLP is community owned.
- Minimum deposit is 0.01 USDC with a locked period of 4 days

### Vault Leaders

- Vault leaders receive a 10% profit share for managing the vault.

### Vault Depositors

- Users can go to `Vault` page and select on the list


[![image](image6.png)](image6.png)


- Earn a share of the profits, or losses, of the vault.
- In the event of profit and decided to withdraw, 10% of the total earned goes to the Leader
- Minimum deposit is 0.01 USDC with a locked period of 1 day

