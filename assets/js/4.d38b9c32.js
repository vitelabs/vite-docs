(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{593:function(t,e,a){t.exports=a.p+"assets/img/debugger.afadb4e9.png"},594:function(t,e,a){t.exports=a.p+"assets/img/debugsections.f1e3a3b8.png"},595:function(t,e,a){t.exports=a.p+"assets/img/network.2e13d950.png"},596:function(t,e,a){t.exports=a.p+"assets/img/deploy.258325b3.png"},597:function(t,e,a){t.exports=a.p+"assets/img/load.641ac72d.png"},598:function(t,e,a){t.exports=a.p+"assets/img/contract.20628ede.png"},599:function(t,e,a){t.exports=a.p+"assets/img/log2.62eef873.png"},600:function(t,e,a){t.exports=a.p+"assets/img/settings.f214eed5.png"},766:function(t,e,a){"use strict";a.r(e);var o=a(1),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"using-the-debugger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-debugger"}},[t._v("#")]),t._v(" Using the Debugger")]),t._v(" "),o("p",[t._v("Before reading this page, you should have already followed the "),o("RouterLink",{attrs:{to:"/tutorial/sppguide/introduction/installation/"}},[t._v("installation guide")]),t._v(" and successfully "),o("RouterLink",{attrs:{to:"/tutorial/sppguide/introduction/installation.html#deploying-your-first-contract"}},[t._v("deployed your first contract")]),t._v(" to the local debug network. This page will cover the features of the debugging interface in more detail.")],1),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"mydiv",staticStyle:{height:"15em",display:"flex","justify-content":"space-between"}},[o("div",{staticClass:"mydiv",staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticClass:"myimg",staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(593)}}),o("br"),t._v("Debugger interface")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("h2",{attrs:{id:"starting-stopping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-stopping"}},[t._v("#")]),t._v(" Starting / Stopping")]),t._v(" "),o("p",[o("strong",[t._v("Starting:")]),t._v(" From within VSCode, press "),o("code",[t._v("F5")]),t._v(" to launch the debugger for the current Solidity++ file. This will compile your file and open a web browser with the debugging interface. In the background, a local "),o("code",[t._v("gvite")]),t._v(' node is started; all deployments and interactions on the "debug" network are on this local node.')]),t._v(" "),o("p",[o("strong",[t._v("Stopping:")]),t._v(" From within VSCode, press "),o("code",[t._v("Shift+F5")]),t._v(" to stop the debugger.\nPlease note that all data will be cleared from the local debug node after stopping the debugger.")]),t._v(" "),o("h2",{attrs:{id:"layout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[t._v("#")]),t._v(" Layout")]),t._v(" "),o("p",[t._v("The debugger interface is split into several sections as shown below.\n"),o("br")]),o("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",width:"80%",margin:"0 auto","text-align":"center"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"},attrs:{src:a(594)}}),o("br"),t._v("Debugger Layout")])]),t._v(" "),o("br"),o("p"),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#network-wallet"}},[t._v("Network/Wallet")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#contract-deployment"}},[t._v("Contract Deployment")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#contract-loading"}},[t._v("Contract Loading")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#contract-interaction"}},[t._v("Contract Interaction")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#log"}},[t._v("Log")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#settings"}},[t._v("Settings")])])]),t._v(" "),o("h2",{attrs:{id:"network-wallet"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#network-wallet"}},[t._v("#")]),t._v(" Network/Wallet")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"10em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(595)}}),o("br"),t._v("Network/Wallet")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Network")]),t._v(": choose from "),o("code",[t._v("debug")]),t._v(", "),o("code",[t._v("testnet")]),t._v(" and "),o("code",[t._v("mainnet")]),t._v(".")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Current Node")]),t._v(": Shows the websocket address of the current node, reflects the current network.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Snapshot Block Height")]),t._v(": For the "),o("code",[t._v("debug")]),t._v(" network, this starts at a height of 1 and increases once per second as snapshots are produced by the local node. For the "),o("code",[t._v("testnet")]),t._v("/"),o("code",[t._v("mainnet")]),t._v(" this shows the current Snapshot Block Height.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Account Block Number")]),t._v(": Shows the currently selected address' account block height. Each "),o("code",[t._v("Send")]),t._v(" and "),o("code",[t._v("Receive")]),t._v(" transaction adds one additional block.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Balance")]),t._v(": Shows the Balance of the current address. On the "),o("code",[t._v("debug")]),t._v(" network you are automatically provided 1000 Vite. Testnet Vite can be "),o("RouterLink",{attrs:{to:"/tutorial/sppguide/tutorials/dev-wallet.html#personal-wallet-setup"}},[t._v("requested from a faucet")]),t._v(", while mainnet Vite must be acquired through an exchange.")],1)]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Address/Selected Address")]),t._v(": Current address used for contract deployment and debugging. If you want to use a different address, click "),o("code",[t._v("+")]),t._v(" to generate a new address and then choose the new address in the drop-down list.")])])]),t._v(" "),o("h2",{attrs:{id:"contract-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-deployment"}},[t._v("#")]),t._v(" Contract Deployment")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"12em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(596)}}),o("br"),t._v("Contract Deployment")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Contract Selection")]),t._v(": If multiple contracts are in a single "),o("code",[t._v(".solpp")]),t._v(" file, they will be displayed at the top and can be selected (only the contract "),o("code",[t._v("HelloWorld")]),t._v(" is shown in this image).")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("amount")]),t._v(": Amount of Vite to send to the contract's constructor upon deployment.")])])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[t._v("If deploying a contract with "),o("code",[t._v("amount>0")]),t._v(", the contract constructor "),o("em",[o("strong",[t._v("must")])]),t._v(" be "),o("code",[t._v("payable")]),t._v(" or the contract will not deploy successfully .")])]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Response Latency Time")]),t._v(":\nThis parameter specifies the required confirmation depth (i.e. number of snapshot blocks) on any request transaction before the deployed contract will send a response transaction. This value ranges from 0 to 75, where 0 means there is no waiting period and respond block will be produced immediately."),o("br"),t._v("\nIf a contract uses timestamps, snapshot block height, or random numbers, then this value "),o("em",[o("strong",[t._v("must")])]),t._v(" be greater than zero. Generally speaking, larger response latency means slower contract response, and the response transaction will consume more quota.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Quota multiplier")]),t._v(": This parameter modifies the amount of quota consumed by all transactions that call the contract. Quota charged on the contract's response transactions are not affected. The Quota multiplier has a range from 10 to 100, which corresponds to a range of 1x to 10x quota consumption. For example, a value of 15 means that the requested transaction to the contract uses 1.5x the default rate.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Random degree")]),t._v(": The number of snapshot blocks having random seed by which request sent to this contract is confirmed before responding to the specific transaction. Value range is 0-75. 0 indicates that there is no waiting for the request transaction to be included in a snapshot block that contains random number. If any random number related instruction is used in the contract, the value must be above 0. In general, the larger the value, the more secure the random number. This parameter must be no greater than response latency.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("show abi")]),t._v(": Shows the contract's abi, specified in json. It is important to have this information to design interfaces for any deployed contract.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("show code")]),t._v(": Shows the contract's compiled code.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("show offchain code")]),t._v(": Shows the contract's compiled offchain code. It is important to have this information to design interfaces for any deployed contract.")])])]),t._v(" "),o("ul",[o("li",[t._v("Section 3: deploy panel. Field "),o("code",[t._v("amount")]),t._v(" can be used to send VITE (1 VITE = 1e18 attov) upon deploying the contract. Click "),o("code",[t._v("deploy")]),t._v(" button to deploy the contract in local development environment.")])]),t._v(" "),o("h2",{attrs:{id:"contract-loading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-loading"}},[t._v("#")]),t._v(" Contract Loading")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"6em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(597)}}),o("br"),t._v("Load a Contract")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[t._v("This menu only appears before a contract has been loaded or deployed. You can use this menu to load a contract currently deployed on the "),o("code",[t._v("testnet")]),t._v(" or "),o("code",[t._v("mainnet")]),t._v(".")]),t._v(" "),o("p",[t._v("Note that the currently selected contract in the deployment menu must have the correct abi for the contract you are attempting to load, otherwise the contract interaction interface will not have the correct functions or parameters available.")]),t._v(" "),o("h2",{attrs:{id:"contract-interaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contract-interaction"}},[t._v("#")]),t._v(" Contract Interaction")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"12em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(598)}}),o("br"),t._v("Contract Interaction")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("p",[t._v("This menu only appears after a contract has been deployed or loaded, and is used to call functions on a given contract.")]),t._v(" "),o("ul",[o("li",[o("p",[o("strong",[t._v("Contract Name/Address")]),t._v(": If using the debugger to deploy contracts, it is important to save the address of deployed contracts.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("function type")]),t._v(": In the function type drop down, you can select "),o("code",[t._v("function")]),t._v(" or "),o("code",[t._v("offchain")]),t._v(". All "),o("code",[t._v("function")]),t._v("s correspond to message listeners, while "),o("code",[t._v("offchain")]),t._v("s correspond to getters.")])]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Parameters")]),t._v(": This interface is automatically generated based on the compiled contract.")])])]),t._v(" "),o("h2",{attrs:{id:"log"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" Log")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"10em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(599)}}),o("br"),t._v("Log")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("ul",[o("li",[t._v("The log shows details for for any "),o("code",[t._v("Send")]),t._v(" or "),o("code",[t._v("Receive")]),t._v(" transactions added to the current account. Contract response transactions are also be logged. Each transaction can be expended for additional details, for definitions see "),o("RouterLink",{attrs:{to:"/api/rpc/common_models_v2.html#accountblock"}},[t._v("account block details")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),o("br"),t._v(" "),o("div",{staticStyle:{height:"15em",display:"flex","justify-content":"space-between"}},[o("div",{staticStyle:{float:"left",height:"100%",margin:"0 auto","text-align":"center","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}},[o("img",{staticStyle:{"max-height":"100%","max-width":"100%",display:"block",margin:"0",width:"auto",height:"auto"},attrs:{src:a(600)}}),o("br"),t._v("Settings Menu")])]),t._v(" "),o("br"),o("br"),o("br"),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Mnemonic Words")]),t._v(": These words are used to generate the private keys and associated wallet addresses used in the debug environment.")])]),t._v(" "),o("div",{staticClass:"custom-block danger"},[o("p",[t._v("Keep your mnemonic words "),o("strong",[t._v("secret")]),t._v(". Do not fund accounts used for debugging with significant amounts of Vite or other tokens. Be aware that any keys stored on a computer are high risk.")])]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Vite Connect")]),t._v(": Instead of using mnemonic words, this option allows the use of Vite Connect to use a wallet secured by your Vite wallet app.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[t._v("Vite Connect is a safer approach since your wallet's keys are not sent to the computer. All transactions must be confirmed and signed via the Vite Wallet app. Note that even if you decide to use Vite Connect, it is still recommended to have a dedicated developer wallet that stores only the funds needed for deployment (10 Vite per contract deployment).")])])])}),[],!1,null,null,null);e.default=n.exports}}]);