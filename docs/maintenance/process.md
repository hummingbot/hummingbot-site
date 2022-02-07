## Exchange connector and developer application process

### How do exchanges approach Hummingbot for a connector?

Opportunity for Hummingbot to support exchanges comes in different ways:

1. The exchange comes to Hummingbot to get a connector built and does not have one and the exchange pays for the connector build and asks Foundation for a developer and maintainer
    - Foundation will negotiate a fee share agreement with the exchange and a marketing promotion agreement. Foundation will make introduction of developer to exchange and arrange compensation.  No improvement proposal is required.
    
2. The exchange develops and maintains their own connector and wants to add it to Hummingbot main repository
    - Foundation will negotiate fee share agreement with the exchange and a marketing promotion agreement. The new connector will be voted and incorporated as a pull request proposal. No improvement proposal is required. No project management for development or developer maintainer assignation is needed.
    
3. Developer has developed a connector for an exchange, community wants to see continuity with maintenance agreement
    
    A developer has the connector developed for one exchange and the exchange would want it to be added to Hummingbot community for maintenance sustainment and compensation. Foundation will approach exchange and negotiate the fee share agreement with exchange and allocate percentage to maintainer. No estimation or improvement proposal is required. 
    
4. Foundation submits a connector for grant

Starts from a government proposal that allocates funds to an Improvement proposal, once they are both approved, there is a PR proposal from the developers for a specific exchange or a network. Community will then approve the PRP.

### Where do I find requested connectors information?

The Github Project Board Github Project displays the status of requested, in-progress, and completed connectors

- [https://github.com/hummingbot/hummingbot/projects/11](https://github.com/hummingbot/hummingbot/projects/11)

### How do developers become connector maintainers?

Currently, maintainers are chosen by Foundation. Today they are developers who have built connectors in the past.

We encourage new maintainers and will open up an application process form shortly.

### How a does a connector get into Hummingbot codebase?

1. **INITIAL CALL**
    
    1.a  Exchange or developer engages Foundation about the connector
    
    1.b  Preliminary business development meeting between Foundation and Exchange to go over a presentation that explains Foundation role, benefits, user base, etc 
    
2. **SCOPING**
    
    2.a Exchange assessment
    
     2.a.1 Define type of connector considered:
    
        2.a.1.1 new or modification of existing
    
        2.a.1.2 perpetual or spot
    
     2.a.2 Foundation scopes connector (when available) and exchange API: 
    
        2.a.2.1  Is the exchange recently established or mature? 
    
        2.a.2.2  Does the exchange have comprehensive API documentation?
    
     2.a.3 (when contact comes from developer) Foundation attempts to engage exchange in development discussion
    
    2.b Project scoping
    
     2.b.1 Foundation PM to collect API existing documentation and meet certified developers-maintainers to select one to develop connector or maintain existing
    
     2.b.2 Project scoping and questions (form)
    
        1. information available or not in the API documentation
         1.a  websocket information and requirements
         1.b  rest api information and requirements
         1.c  maturity of the api, rank depending on information and how developed or new the exchange
       2. take sample of perpetual or spot connector
       3. determine length of project in days/hours with the information from ranking on how developed is the api, precedent of   connectors (reusable or not)
       4. estimate the project high level duration, costs and constraints
       5. presentation to exchange on connector

3. **AGREEMENT**

3.1  Exchange and Foundation agrees to maintenance agreement 

 1. Connector build cost and timeline (handled by Foundation assigned maintainer)
 2. Ongoing maintenance agreement
 3. Connector incentive plan (HBOT and exchange token rewards for first users of the connector)
 4. Complete agreement with exchange and signature
 5. The fee share agreement plus contribution of liquidity incentives is compared with other exchanges and made public.

4. **FOUNDATION ASSIGNS MAINTAINER**
    
    4.a Parameters to identify in evaluation:
    
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
    
5. **PROCESS  IMPROVEMENT PROPOSAL (if connector gets funded by Foundation, if funded by Exchange or already developed goes directly to PRP)**
    
    5.1 Foundation create process improvement proposal
    
    5.2 Process improvement proposal gets approved
    

6. **CONNECTOR DEVELOPMENT PROJECT MANAGEMENT**
    
    6.1 Foundation marks connector as “work in progress” on a public Github project, so it becomes public to all developers
    
    6.2 Developer creates branch from github
    
    6.3 Developer creates PRP
    
    6.4 Maintainer builds and submits connector in Github
    
    6.5 PM schedules QA time
    
    6.6 PM reports issues and corrective action if any
    
7. **PR GENERATED**
    
    7.1 Connector is added to a PRP
    
    7.2  PR generated
    

8. **QA**
    
    8.1 QA analysis and corrective action when needed
    

9. **PR APPROVED AND MERGED**
    
    9.1  7.2 Connector ready for release for PRP vote
    
    9.2  PR gets approved from community after positive vote 
    
    9.2 PR merged and connector added to codebase