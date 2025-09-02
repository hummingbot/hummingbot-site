# Bounty Escrow Agreement

## HUMMINGBOT FOUNDATION DEVELOPER BOUNTY ESCROW AGREEMENT

**Effective Date**: ________________

**Agreement Between**:

- **Hummingbot Foundation** ("Foundation")
- **________________________** ("Sponsor")

## 1. PURPOSE AND SCOPE

1.1 This Escrow Agreement ("Agreement") establishes the terms and conditions under which the Sponsor will provide funds to be held in escrow by the Foundation for the purpose of funding developer bounties for contributions to the Hummingbot codebase or related projects.

1.2 The Foundation will act as escrow agent, holding the escrowed funds until predetermined conditions for release have been met.

1.3 This Agreement covers both the initial development of the connector and one (1) year of maintenance and governance support following successful integration.

## 2. ESCROW DEPOSIT

2.1 The Sponsor agrees to deposit **10,000 USDC** ("Escrowed Funds") to the Foundation's designated wallet:

- Ethereum Mainnet: `0x60D581aEa0644e74df60c7555e5166d32665d6b6`
- Binance Smart Chain: `0xE517b826a26B439eCE92f3220628eC007049d915`
- Solana: `5bhQNYaDEwEqjcjsuRJRuGyqbchzcDtYK49e593Wuc8i`

2.2 The Sponsor acknowledges that the Escrowed Funds shall be used exclusively for:

- Payment to developers who successfully complete the bounty requirements
- Foundation administration fees as outlined in Section 3
- One year of maintenance and governance support as outlined in Section 7
- Full refund to Sponsor if conditions in Section 5 are met

2.3 The Escrowed Funds shall be deposited no later than 7 days following the mutual execution of this Agreement.

## 3. FOUNDATION FEES AND RESPONSIBILITIES

3.1 The Foundation shall charge an administration fee for managing the building, maintenance and governance of the exchange connector, which is included in the total Escrowed Funds amount.

3.2 The Foundation's responsibilities include:

**Development Phase:**

- Securely holding the Escrowed Funds
- Managing the bounty listing on the Bounties Board
- Vetting and assigning qualified developers
- Reviewing submitted code and pull requests
- Quality assurance testing
- Processing payments to developers
- Communicating progress updates to Sponsor

**Maintenance & Governance Phase (1 Year):**

- Creating and managing New Connector Proposal via NCP Governance
- Managing Snapshot Voting in periodic polls to maintain connector in codebase
- Identifying and coordinating bug fixes
- Ensuring connector compatibility with API updates
- Providing ongoing technical support

## 4. CONNECTOR BOUNTY SPECIFICATIONS

4.1 The bounty project specifications are as follows:

- **Exchange Name**: [Exchange]
- **Exchange Type**: [CLOB / AMM]
    - **Connector Types (CLOB)**: [CLOB Perp, CLOB Spot, N/A]
    - **Connector Types (AMM)**: [CLMM, AMM, Router, N/A]
- **Connector Standard**: Must implement all required endpoints according to current Hummingbot and Gateway connector standards
- **Expected Timeframe**: As determined by the Foundation based on the scope and complexity of the project
- **Acceptance Criteria**: Connector must successfully implement all required endpoints and functionality for the specified connector type and meet current Hummingbot quality standards

4.2 The Acceptance Criteria specified in Section 4.1 and the GitHub issue shall serve as the definitive metrics for determining whether the developer's submission fulfills the requirements of the bounty.

4.3 The scope includes building and maintaining ALL sub-types that the exchange supports within the specified Exchange Type.

## 5. REFUND CONDITIONS

5.1 **Full Refund Policy**: If the connector is not successfully built and integrated into the Hummingbot codebase, the Sponsor shall receive a full refund of the Escrowed Funds ($10,000 USDC).

5.2 Conditions triggering full refund:

- No qualified developer is assigned to the bounty within 60 days of listing
- The assigned developer fails to deliver a pull request meeting the Acceptance Criteria within the timeframe specified by the Foundation
- The Foundation is unable to reassign the bounty to another qualified developer within 90 days
- The connector fails to pass quality assurance testing after reasonable attempts at remediation

5.3 All refund requests must be submitted in writing to the Foundation. Upon validation of refund conditions, the Foundation shall process the full refund within 14 business days.

## 6. PAYMENT PROCESS

6.1 The Foundation shall release payment to the developer only after:

- The developer submits a pull request that addresses the requirements
- The Foundation's engineering team reviews and approves the code
- The Foundation's QA team verifies the work meets acceptance criteria
- The code is merged into the development branch (or Hummingbot fork for private bounties)
- The New Connector Proposal is created and approved via governance

6.2 Payment to the developer shall be made within a reasonable timeframe at the Foundation's discretion, typically within 30 days of the pull request being merged.

## 7. MAINTENANCE AND GOVERNANCE SERVICES

7.1 **One Year Included**: The Escrowed Funds include one (1) year of maintenance and governance support commencing from the date the connector is officially included in a Hummingbot release.

7.2 **Governance Services** include:

- Creating and submitting New Connector Proposal (NCP) for community approval
- Managing periodic Snapshot Voting to maintain connector in the codebase
- Representing connector interests in governance discussions
- Ensuring continued community support for the connector

7.3 **Maintenance Services** include:

- Monitoring connector performance and stability
- Identifying and coordinating resolution of bugs
- Adapting connector to exchange API updates
- Ensuring compatibility with Hummingbot framework updates
- Providing technical support for connector-related issues

7.4 **Service Level**: The Foundation commits to commercially reasonable efforts in providing maintenance and governance services, with response times consistent with the severity of issues and standard practices for the Hummingbot ecosystem.

## 8. RENEWAL AND AFFILIATE AGREEMENT

8.1 **Annual Renewal**: After the initial one-year period, the Sponsor may renew maintenance and governance services for $2,000 USD per year.

8.2 **Affiliate Agreement Integration**: The Foundation will incorporate any type of affiliate agreement supported by the exchange, including:

- Broker/builder codes that rebate share of volume
- Referral links for signup in Hummingbot documentation

8.3 **Fee Waiver**: Annual renewal fees shall be waived if revenues from affiliate agreements exceed $200 USD per month.

8.4 **Renewal Notice**: The Foundation shall notify the Sponsor 60 days before the expiration of the current maintenance period regarding renewal options.

## 9. MARKETING COLLABORATION

9.1 The Foundation agrees to collaborate with the Sponsor's marketing team to promote the connector integration, including:

- Announcements on Hummingbot Discord and Twitter channels (subject to Foundation approval)
- Connector documentation and guides on the Hummingbot website
- Educational videos on the Hummingbot YouTube channel

9.2 All marketing materials must be approved by both parties before publication.

## 10. DISPUTE RESOLUTION

10.1 In the event of a dispute regarding whether a developer's submission meets the Acceptance Criteria, the Foundation shall make the final determination after consulting with both the Sponsor and the developer.

10.2 If the Sponsor disputes the Foundation's determination, the parties agree to resolve the dispute through good-faith negotiation. If negotiation fails, disputes shall be resolved through arbitration under the rules of the American Arbitration Association.

## 11. TERM AND TERMINATION

11.1 This Agreement shall remain in effect until:

- The completion of the initial one-year maintenance period following successful connector integration
- The Escrowed Funds are fully refunded to the Sponsor in accordance with Section 5
- The Agreement is terminated by mutual written consent

11.2 Upon expiration of the initial term, the Agreement may be renewed pursuant to Section 8.

## 12. REPRESENTATION AND WARRANTIES

12.1 The Sponsor represents and warrants that:

- They have the legal authority to enter into this Agreement
- The Escrowed Funds are legally obtained
- They comply with all applicable laws and regulations

12.2 The Foundation represents and warrants that:

- It will hold the Escrowed Funds securely
- It will administer the bounty process fairly and in accordance with this Agreement
- It will apply the same standards and processes used for all bounties
- It will provide maintenance and governance services for the full one-year period

## 13. LIMITATION OF LIABILITY

13.1 The Foundation's liability under this Agreement shall be limited to the amount of the Escrowed Funds.

13.2 Neither party shall be liable for any indirect, special, incidental, or consequential damages.

## 14. GOVERNING LAW

14.1 This Agreement shall be governed by and construed in accordance with the laws of the Cayman Islands.

## 15. ENTIRE AGREEMENT

15.1 This Agreement constitutes the entire understanding between the parties concerning the subject matter hereof and supersedes all prior agreements, understandings, or negotiations.

## 16. MODIFICATIONS

16.1 This Agreement may only be modified by a written instrument executed by both parties.

## SIGNATURES

**Hummingbot Foundation**

Name: ________________________  
Title: ________________________  
Date: ________________________  
Signature: ____________________

**Sponsor**

Name: ________________________  
Title: ________________________  
Date: ________________________  
Signature: ____________________

---

## How to Execute This Agreement

1. **Download the Agreement**
   - [Download PDF Version](./escrow-agreement.pdf)
   - [Download Word Version](./escrow-agreement.docx)

2. **Complete Exchange Information**
   - Fill in your exchange name
   - Specify exchange type (CLOB/AMM)
   - List supported connector types

3. **Sign and Return**
   - Sign the agreement
   - Email to: legal@hummingbot.org
   - Or DocuSign link available upon request

4. **Fund the Bounty**
   - Transfer funds within 7 days of signing
   - Send transaction hash for confirmation

## Alternative: Direct Crypto Payment

If you prefer to skip the formal agreement and proceed with direct crypto payment:

1. Transfer $10,000 USDC/USDT to our wallets
2. Email confirmation to operations@hummingbot.org
3. Include exchange name and API documentation
4. Bounty process begins immediately

## Questions?

- **Legal Questions**: legal@hummingbot.org
- **Technical Questions**: operations@hummingbot.org
- **General Inquiries**: [Discord](https://discord.gg/hummingbot)

[Back to Process →](./process.md){: .md-button }
[Contact Us →](mailto:operations@hummingbot.org){: .md-button .md-button--primary }