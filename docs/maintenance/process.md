# Exchange connector and developer application process

## How do exchanges approach Hummingbot for a connector?

Opportunity for Hummingbot to support exchanges comes in different ways:

1. The exchange comes to Hummingbot to get a connector built and does not have one and the exchange pays for the connector build and asks Foundation for a developer and maintainer:
    - Foundation will negotiate a fee share agreement with the exchange and a marketing promotion agreement. Foundation will make introduction of developer to exchange and arrange compensation.  No improvement proposal is required.
        
2. The exchange develops and maintains their own connector and wants to add it to Hummingbot main repository:
    - Foundation will negotiate fee share agreement with the exchange and a marketing promotion agreement. The new connector will be voted and incorporated as a pull request proposal. No improvement proposal is required. No project management for development or developer maintainer assignation is needed.
    
3. Developer has developed a connector for an exchange, community wants to see continuity with maintenance agreement:
    
    - A developer has the connector developed for one exchange and the exchange would want it to be added to Hummingbot community for maintenance sustainment and compensation. Foundation will approach exchange and negotiate the fee share agreement with exchange and allocate percentage to maintainer. No estimation or improvement proposal is required. 
    
4. Foundation submits a connector for grant:

    - Starts from a government proposal that allocates funds to an Improvement proposal, once they are both approved, there is a PR proposal from the developers for a specific exchange or a network. Community will then approve the PRP.

## Where do I find requested connectors information?

The exchange connector Github Project Board displays the status of requested, in-progress, and completed connectors

- [Exchange Connector Github Project Board](https://github.com/hummingbot/hummingbot/projects/11)

## How do developers become connector maintainers?

Currently, maintainers are chosen by Foundation. Today they are developers who have built connectors in the past.

We encourage new maintainers to complete the following application form:

- [Developer/maintainer application form](https://forms.gle/DMspBAr7GfV4nYKZ8)


## How a does a connector get into Hummingbot codebase? It follows the steps:

#### 1. **INITIAL CALL**
    
    - Exchange or developer engages Foundation about the connector
    
    - Preliminary business development meeting between Foundation and Exchange to go over a presentation that explains Foundation role, benefits, user base, etc 
    
#### 2. **SCOPING**

    
 ###   Exchange assessment:
    
    - Define type of connector considered:
    
        * new or modification of existing
    
        * perpetual or spot
    
     - Foundation scopes connector (when available) and exchange API: 
    
        * Is the exchange recently established or mature? 
    
        * Does the exchange have comprehensive API documentation?
    
     !!! note "When contact comes from developer, Foundation attempts to engage exchange in development discussion"
    
 ###   Project scoping:
    
    Foundation PM to collect API existing documentation and meet certified developers-maintainers to select one to develop connector or maintain existing
    
    - Project scoping information usually needed:
    
        1. information available or not on API documentation
         1.a  websocket information and requirements
         1.b  rest api information and requirements
         1.c  maturity of the api
         1.c  how developed or new is the exchange
       2. existing perpetual or spot connector when available
       3. size project duration in days/hours with the information on how developed is the api, precedent of connectors if any (reusable or not)
       4. estimate the project high level costs and constraints
       5. presentation to exchange on connector

#### 3. **AGREEMENT**

Exchange and Foundation agree to sign a maintenance agreement: 

 - Connector built costs and timeline (handled by Foundation assigned maintainer)
 - Ongoing maintenance agreement
 - Connector incentive plan (HBOT and exchange token rewards for first users of the connector)
 - Complete agreement with exchange and signature
 - The fee share agreement plus contribution of liquidity incentives is compared with other exchanges and made public.

#### 4. **FOUNDATION ASSIGNS MAINTAINER**
    
Parameters to identify in evaluation:
    
    - Seniority
    - Past Experience
    - Resume/ References
    - Past performance/track record
    - Availability
    - Cost
    - Speed to deliver
    - Interest from developer
    
    Once approved by exchange, the developer - maintainer selection will be made public as well as developer compensation.
    
    All the connector development charges go from exchange to developer. Foundation will negotiate fee share agreement and marketing actions with exchange and provide project management and QA as part of contribution. Foundation will provide incentive agreement to maximize usage of connector for exchange. The developer gets from Foundation 20% of the variable fee share agreement or 50% of fixed amount agreement of Exchange with Foundation as a compensation for ongoing maintenance as long as maintenance is performing well. The remaining portion goes to Foundation for sustainment. 
    
#### 5. **PROCESS  IMPROVEMENT PROPOSAL (if connector gets funded by Foundation, if funded by Exchange or already developed goes directly to PRP)**
    
    - Foundation creates a process improvement proposal
    
    - Process improvement proposal gets approved by community
    

#### 6. **CONNECTOR DEVELOPMENT PROJECT MANAGEMENT**
    
    - Foundation marks connector as “work in progress” on a public Github project, so it becomes public to all developers
    
    - Developer creates branch from github
    
    - Developer creates PRP
    
    - Developer/ maintainer builds and submits connector in Github
    
    - PM schedules QA time
    
    - PM reports issues and corrective action if any
    
#### 7. **PR GENERATED**
    
    - Connector is added to a PRP
    
    - PR generated
    

#### 8. **Quality Assurance**
    
    - QA analysis and corrective action when needed
    - Community can participate of quality testing and review
    

#### 9. **PR APPROVED AND MERGED**
    
    -  Connector ready for release for PRP vote
    
    -  PR gets approved from community after positive vote 
    
    - PR merged and connector added to codebase