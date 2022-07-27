(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{555:function(t,e,a){t.exports=a.p+"assets/img/crosschain-seturl.0b69e2b6.png"},556:function(t,e,a){t.exports=a.p+"assets/img/crosschain-debug.7d8ecc43.png"},557:function(t,e,a){t.exports=a.p+"assets/img/crosschain-wallet.a471dfc3.png"},736:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vitex-gateway-integration-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vitex-gateway-integration-guide"}},[t._v("#")]),t._v(" ViteX Gateway Integration Guide")]),t._v(" "),s("h2",{attrs:{id:"what-is-vitex-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-vitex-gateway"}},[t._v("#")]),t._v(" What is ViteX Gateway")]),t._v(" "),s("p",[t._v("ViteX Gateways provide a way to transfer digital assets between any blockchain (Source Chain) and those on the Vite blockchain (Gateway Token).")]),t._v(" "),s("p",[t._v('For instance, if a user wants to trade BTC on ViteX, they would first convert BTC on the Bitcoin blockchain ("native BTC") into a BTC-backed token on the Vite blockchain ("BTC-000"). A user holding an amount of BTC-000 can also convert these tokens back to native BTC via the ViteX Gateway. Between the two said conversions, the native BTC are locked inside the ViteX Gateway.')]),t._v(" "),s("p",[t._v("Following the "),s("RouterLink",{attrs:{to:"/dex/gateway/gateway-protocol.html"}},[t._v("ViteX Gateway Protocol")]),t._v(", anyone can setup a ViteX Gateway without permissions. The ViteX web app and mobile app already support the protocol. The only thing needed to run a third-party ViteX Gateway is implementing interfaces defined in this protocol.")],1),t._v(" "),s("h2",{attrs:{id:"how-to-create-a-vitex-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-vitex-gateway"}},[t._v("#")]),t._v(" How to Create a ViteX Gateway")]),t._v(" "),s("h3",{attrs:{id:"pre-requisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites")]),t._v(" "),s("ul",[s("li",[t._v("Forge a new token on Vite chain to represent the digital asset in the Source Chain. See "),s("RouterLink",{attrs:{to:"/reference/mintage.html"}},[t._v("here")]),t._v(" for instructions of token forging. The new token should have the same total issuance amount and decimal places as the Source Chain asset.")],1),t._v(" "),s("li",[t._v("The operator must be able to verify and send transactions for Gateway Tokens. To do so, they can either run a Vite full node or use API from full nodes of the Vite team.")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Instructions for how to run a Vite full node are "),s("RouterLink",{attrs:{to:"/tutorial/node/install.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("li",[t._v("Instructions for sending and inquiring about Vite transactions are "),s("RouterLink",{attrs:{to:"/api/rpc/"}},[t._v("here")]),t._v(".")],1)])]),t._v(" "),s("ul",[s("li",[t._v("The operator must be able to verify and send transactions for Source Chain tokens as well. Similarly to the above bullet point, they can run a full node for the Source Chain, or use API provided by trustworthy full nodes on the Source Chain.")])]),t._v(" "),s("h3",{attrs:{id:"how-to-integrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-integrate"}},[t._v("#")]),t._v(" How to Integrate")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("The developer would need to use the testnet. ("),s("a",{attrs:{href:"https://buidl.vite.net/assets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://buidl.vite.net/assets"),s("OutboundLink")],1),t._v(").")])]),t._v(" "),s("li",[s("p",[t._v("Forge the coin on the testnet. In below screenshot, we assume ETH-0 as the forged token.")])]),t._v(" "),s("li",[s("p",[s("img",{attrs:{src:a(555),alt:""}})])]),t._v(" "),s("li",[s("p",[s("img",{attrs:{src:a(556),alt:""}})])])]),t._v(" "),s("h2",{attrs:{id:"tips-for-properly-operating-a-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips-for-properly-operating-a-gateway"}},[t._v("#")]),t._v(" Tips for Properly Operating a Gateway")]),t._v(" "),s("h3",{attrs:{id:"asset-custody"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asset-custody"}},[t._v("#")]),t._v(" Asset Custody")]),t._v(" "),s("ul",[s("li",[t._v("Private keys should be stored in cold wallets")]),t._v(" "),s("li",[t._v("Strategy for managing hot wallets (Holding period of assets, upper limit for amount of assets in custody)")]),t._v(" "),s("li",[t._v("Management of private keys (components of secrets shared across multiple people and stored in multiple locations)")]),t._v(" "),s("li",[t._v('Distribution of assets amongst multiple locations ("Don\'t put all your eggs in one basket")')]),t._v(" "),s("li",[t._v("Real-time reconciliation")])]),t._v(" "),s("h3",{attrs:{id:"deposits-and-withdraws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deposits-and-withdraws"}},[t._v("#")]),t._v(" Deposits and Withdraws")]),t._v(" "),s("ul",[s("li",[t._v("Wait for a reasonable number of confirmations prior to transfers")]),t._v(" "),s("li",[t._v("Temporary halt of deposit/withdrawal functions during forks")])]),t._v(" "),s("h3",{attrs:{id:"monitoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),s("ul",[s("li",[t._v("Pay attention to users who withdraw for the first time, and addresses used for withdrawal for the first time")]),t._v(" "),s("li",[t._v("Regularly check-in on internal monitoring process")]),t._v(" "),s("li",[t._v("Frequent and timely analyses of transfer data")]),t._v(" "),s("li",[t._v("Monitoring and confirmation for large deposits and withdrawals")])]),t._v(" "),s("h3",{attrs:{id:"throttling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throttling"}},[t._v("#")]),t._v(" Throttling")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("The following illustrates the workflow of an Ethereum Gateway.")]),t._v(" "),s("h3",{attrs:{id:"gateway-addresses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gateway-addresses"}},[t._v("#")]),t._v(" Gateway Addresses")]),t._v(" "),s("p",[t._v("The Gateway needs to maintain the following types of addresses:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(557),alt:""}})]),t._v(" "),s("ol",[s("li",[t._v("Cold wallet addresses, including ETH addresses and VITE addresses. Large amounts of assets should be stored in the cold wallet to ensure asset safety.")]),t._v(" "),s("li",[t._v("Hot wallet addresses, including ETH addresses and VITE addresses. They are used to accommodate daily transfers.")]),t._v(" "),s("li",[t._v("One ETH address for each VITE address, to facilitate deposits into the Gateway.")]),t._v(" "),s("li",[t._v("User's own ETH address and VITE address.")])]),t._v(" "),s("h3",{attrs:{id:"business-workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#business-workflow"}},[t._v("#")]),t._v(" Business Workflow")]),t._v(" "),s("h4",{attrs:{id:"cross-chain-deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-chain-deposits"}},[t._v("#")]),t._v(" Cross-Chain Deposits")]),t._v(" "),s("ol",[s("li",[t._v("Assignment of user addresses. When a user initiates a cross-chain deposit, the Gateway assigns an ETH address dedicated to this user's deposit process. This address is shared with the user, and its private key is kept by the Gateway.")]),t._v(" "),s("li",[t._v("Monitor the said ETH address and wait for a proper number of confirmations.")]),t._v(" "),s("li",[t._v("Once the Gateway determines this ETH transaction as confirmed, transfer the appropriate amount of Gateway Tokens to the user's VITE address. If need be, transfer the Ether in said ETH address into the hot wallet.")]),t._v(" "),s("li",[t._v("Monitor the VITE network and confirm this Gateway Token transaction. Update records for cross-chain deposits.")])]),t._v(" "),s("h4",{attrs:{id:"cross-chain-withdrawals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-chain-withdrawals"}},[t._v("#")]),t._v(" Cross-Chain Withdrawals")]),t._v(" "),s("ol",[s("li",[t._v("The user provides an address for the withdrawal and submits the withdrawal request. At this point, the official web wallet will sign (on an offline basis) and send a VITE transaction (of the Gateway Token) from the user's VITE address to the Gateway's VITE hot wallet. The transaction will take into account the withdrawal amount and transaction fees.")]),t._v(" "),s("li",[t._v("The Gateway monitors for confirmations and waits until sufficient confirmations have taken place.")]),t._v(" "),s("li",[t._v("Once the Gateway deems this transaction as confirmed, it transfers the appropriate amount of Ether from the ETH hot wallet into the user's ETH address")]),t._v(" "),s("li",[t._v("Monitor the ETH network and update records for cross-chain withdraws once the transaction has been deemed confirmed.")])]),t._v(" "),s("h4",{attrs:{id:"transfer-of-funds-involving-cold-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-of-funds-involving-cold-wallet"}},[t._v("#")]),t._v(" Transfer of Funds Involving Cold Wallet")]),t._v(" "),s("p",[t._v("Allocate 20% of the funds in the hot wallet, and 80% in the cold wallet. The allocation decision will be driven by total token balance and the nature of the flow of funds through the Gateway.")])])}),[],!1,null,null,null);e.default=o.exports}}]);