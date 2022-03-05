---
order: false
---

# A Simple Introduction to Vite

A fast, fee-less blockchain that adopts a message-driven, asynchronous architecture and a DAG-based ledger. The Vite Mainnet launched on September 25, 2019. 

## How to Get Vite Coins

### Purchase at Exchanges

* [ViteX][vitex]
* [Binance][binance]
* [Bittrex][bittrex]
* [CoinEx][coinex]

### Receive SBP Reward

**SBP (Snapshot Block Producer)** is responsible for producing snapshot blocks and securing consensus on the Vite chain. SBP rewards are issued to incentivize the SBP nodes. There are 25 SBPs in Vite Mainnet.

:::tip
SBP reward is **0.951293759512937595** VITE per snapshot block plus additional voting reward. The rewards are issued on-chain. The SBP should send a **Reward Retrieval Transaction** to get rewards.
:::

Related links:

* [How to Run a SBP][sbp-manage]
* [SBP Rewards Allocation][sbp-reward]

### Receive Full Node Reward

Full nodes construct the Vite ecosystem. The **Full Node Reward Program** was firstly launched on December 13, 2018 in Vite Testnet, and has been upgraded when the Mainnet launched till today. Full node rewards are distributed on a daily basis.

Related links:

* [Rules for Full Node Rewards][fullnode-reward]
* [Node Configuration](./tutorial/node/install.md#full-node-reward)

## The Features of Vite Mainnet

### Fee-less Transactions

Transactions are free in the Vite network. Considering sending or processing transactions still take a bit resource, to cover the cost and prevent spamming, Vite has implemented a **Quota-Based Model** to measure the transactions an account can send or receive at a time. 

Quota is the fuel that keeps the Vite chain functioning. Every transaction requires quota. Quota can be obtained by staking.

### HDPoS Consensus

The consensus of Vite is called **Hierarchical Delegated Proof of Stake(HDPoS)**. 

HDPoS is a multi-tiered algorithm featured by levels of consensus groups. The eventual consensus in HDPoS is secured by SBP nodes in **Snapshot Consensus Group**, while nodes in **Delegated Consensus Group** and **Private Consensus Group** are responsible for reaching consensus for transactions of smart contracts and user accounts.

The existence of multiple instances of consensus group in HDPoS guarantees that transactions can be verified, persisted, and confirmed at high speed. 

### Fast Transactions

The DAG ledger and asynchronous communication scheme is the magic of Vite's high performance. Vite has implemented three asynchronous designs: 

* Asynchronous Design of Request and Response 
* Asynchronous Design of Transaction Writing and Confirmation 
* Asynchronous Design of Cross-Contract Calls

### Built-In Smart Contracts

Built-in smart contracts like SBP registration, voting, staking, token issuance, and ViteX exchange, are implemented in Vite.

#### SBP Registration

In the Mainnet, the steps for launching an SBP node are as follows:

* Staking **1,000,000** VITE for a locking period of 3 months;
* Operating an SBP node and maintaining the said node;
* Having substantial community influence and being able to solicit votes from VITE holders.

#### Voting for SBP

Many SBPs distribute voting rewards to supporters. Users can vote for them and get rewards! The VITE balance in the user's address will count toward the voting weight. Voting does not lock VITE coins, and the user can revote to another SBP at any time. 

:::tip Notice
NOT every SBP distributes voting rewards. Pay attention to the latest SBP list that gives rewards out!
:::

#### Staking for Quota

Users should get quota through staking. In the Mainnet, the minimum staking amount is 134 VITE, which will gives 1 transaction every 74 seconds. 

**Staking Lock-up Period**: 3 days

The lock-up period is defined as the period of time in which the staked VITE are locked up and cannot be withdrawn. When the lock-up expires, the staking address will be able to withdraw the staked coins.

#### Staking for a Recipient Account

The staking address can designate a quota beneficiary. If not specified, the default beneficiary is the staking address itself.

#### Staking Withdrawal

The staking address can cancel a staking after the lock-up period has passed and retrieve the staked VITE coins. The minimum withdrawal amount is **134** VITE.

#### Token Issuance

Issuing tokens on Vite is as simple as filling a form. This dramatically reduces the barrier of token issuance with additional security improvement by avoiding from introducing unexpected code flaws.

## Coins on Vite

Three built-in coins, **VITE**, **VCP** and **VX**, are issued when Vite Mainnet launched.

### VITE
Full name：*Vite Coin*

VITE is the native coin of the Vite public chain. VITE is the fuel to power up transactions on the Vite chain. Unlike the traditional fuel of "Gas" that will be consumed on other public chains (e.g. Ethereum), VITE is used to stake for the computational and bandwidth resources, and can be retained at no cost once the transactions are complete. VITE is currently listed on the top exchanges and can be traded for serious investment considerations.

### VCP

Full name：*Vite Community Points*

VCP is the credit of the community. They are distributed for free to recognize community members who have significant contribution. At the time being, VCP is mainly used for redeeming Vite merchandise (such as T-shirts and hats) in ViteStore. 
VCP will not be listed or trade in exchange.

### VX

Full name：*ViteX Coin*

As the platform token of ViteX, VX holders benefit from the exchange's dividend distributions and governance privileges. All VX are 100% mined through real tradings, staking, coin listings, referrals, and market-making activities based on an agreed remittance schedule.

[sbp-reward]: <./reference/sbp.html#SBP-rewards>
[fullnode-reward]: <./reference/fullnode.html>
[fullnode-install]: <./tutorial/node/install.html>
[sbp-manage]: <./tutorial/node/sbp.html>
[web-wallet]: <https://x.vite.net>
[app-wallet]: <https://app.vite.net>
[vitex]: <https://x.vite.net/trade?symbol=VITE_BTC-000>
[bittrex]: <https://international.bittrex.com/Market/Index?MarketName=BTC-VITE>
[coinex]: <https://www.coinex.com/exchange/VITE-USDT>
[binance]: <https://www.binance.com/en/trade/VITE_BTC>
[solidity++]: <./contract/soliditypp.html>

