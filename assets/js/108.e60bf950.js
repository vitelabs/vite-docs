(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{704:function(e,o,t){"use strict";t.r(o);var d=t(1),c=Object(d.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx"}},[e._v("#")]),e._v(" Tx")]),e._v(" "),t("h2",{attrs:{id:"tx-sendrawtx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx-sendrawtx"}},[e._v("#")]),e._v(" tx_sendRawTx")]),e._v(" "),t("p",[e._v("Send a raw transaction block")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")]),e._v(": "),t("code",[e._v("Object")]),e._v(": "),t("code",[e._v("RawTxBlock")])]),e._v(" "),t("p",[e._v("Mandatory:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("blockType")]),e._v(": "),t("code",[e._v("byte")]),e._v(" Block type")]),e._v(" "),t("li",[t("code",[e._v("height")]),e._v(": "),t("code",[e._v("string")]),e._v(" Height")]),e._v(" "),t("li",[t("code",[e._v("hash")]),e._v(": "),t("code",[e._v("Hash")]),e._v(" Transaction hash")]),e._v(" "),t("li",[t("code",[e._v("prevHash")]),e._v(": "),t("code",[e._v("Hash")]),e._v("  The hash of previous block in the account chain. Fill 0 if there is no previous block")]),e._v(" "),t("li",[t("code",[e._v("accountAddress")]),e._v(": "),t("code",[e._v("Address")]),e._v(" Account address")]),e._v(" "),t("li",[t("code",[e._v("publicKey")]),e._v(": "),t("code",[e._v("[]byte")]),e._v(" Account's public key")]),e._v(" "),t("li",[t("code",[e._v("signature")]),e._v(": "),t("code",[e._v("[]byte")]),e._v(" Signature")])]),e._v(" "),t("p",[e._v("Optional: below fields should be filled upon sending transaction through pow, otherwise can be ignored or filled with null")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("difficulty")]),e._v(": "),t("code",[e._v("*string")]),e._v(" PoW difficulty")]),e._v(" "),t("li",[t("code",[e._v("nonce")]),e._v(": "),t("code",[e._v("[]byte")]),e._v(" Nonce")])]),e._v(" "),t("p",[e._v("Optional: below fields should be filled depending on the transaction type (send or receive)")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("fromBlockHash")]),e._v(": "),t("code",[e._v("Hash")]),e._v("  The hash of corresponding request transaction. Required for response transaction")]),e._v(" "),t("li",[t("code",[e._v("toAddress")]),e._v(": "),t("code",[e._v("Address")]),e._v("  The account address to send the transaction to. Required for request transaction")]),e._v(" "),t("li",[t("code",[e._v("tokenId")]),e._v(": "),t("code",[e._v("TokenTypeId")]),e._v(" The token ID in which the transaction is settled. Required for request transaction")]),e._v(" "),t("li",[t("code",[e._v("amount")]),e._v(": "),t("code",[e._v("*string")]),e._v(" Transaction amount. Required for request transaction")]),e._v(" "),t("li",[t("code",[e._v("fee")]),e._v(": "),t("code",[e._v("*string")]),e._v(' Transaction fee. Fill "0" or null for all transactions')]),e._v(" "),t("li",[t("code",[e._v("data")]),e._v(": "),t("code",[e._v("[]byte")]),e._v(" Additional data the transaction carries. This field can be specified in request transaction for user account as additional comment or formalized data used to call a contract. Ignore or fill with null if not used.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Returns")]),e._v(": "),t("code",[e._v("Object")]),e._v(": "),t("code",[e._v("AccountBlock")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("blockType")]),e._v(": "),t("code",[e._v("byte")])]),e._v(" "),t("li",[t("code",[e._v("height")]),e._v(": "),t("code",[e._v("string")])]),e._v(" "),t("li",[t("code",[e._v("hash")]),e._v(": "),t("code",[e._v("Hash")])]),e._v(" "),t("li",[t("code",[e._v("prevHash")]),e._v(": "),t("code",[e._v("Hash")])]),e._v(" "),t("li",[t("code",[e._v("accountAddress")]),e._v(": "),t("code",[e._v("Address")])]),e._v(" "),t("li",[t("code",[e._v("publicKey")]),e._v(": "),t("code",[e._v("[]byte")])]),e._v(" "),t("li",[t("code",[e._v("signature")]),e._v(": "),t("code",[e._v("[]byte")])]),e._v(" "),t("li",[t("code",[e._v("fromAddress")]),e._v(": "),t("code",[e._v("Address")])]),e._v(" "),t("li",[t("code",[e._v("toAddress")]),e._v(": "),t("code",[e._v("Address")])]),e._v(" "),t("li",[t("code",[e._v("fromBlockHash")]),e._v(": "),t("code",[e._v("Hash")])]),e._v(" "),t("li",[t("code",[e._v("tokenId")]),e._v(": "),t("code",[e._v("TokenTypeId")])]),e._v(" "),t("li",[t("code",[e._v("amount")]),e._v(": "),t("code",[e._v("*string")])]),e._v(" "),t("li",[t("code",[e._v("fee")]),e._v(": "),t("code",[e._v("*string")])]),e._v(" "),t("li",[t("code",[e._v("data")]),e._v(": "),t("code",[e._v("[]byte")])]),e._v(" "),t("li",[t("code",[e._v("difficulty")]),e._v(": "),t("code",[e._v("*string")])]),e._v(" "),t("li",[t("code",[e._v("nonce")]),e._v(": "),t("code",[e._v("[]byte")])]),e._v(" "),t("li",[t("code",[e._v("quota")]),e._v(": "),t("code",[e._v("*string")]),e._v(" The quota consumed by the transaction, excluding temporary quota obtained through PoW")]),e._v(" "),t("li",[t("code",[e._v("quotaUsed")]),e._v(": "),t("code",[e._v("*string")]),e._v(" The quota consumed by the transaction")]),e._v(" "),t("li",[t("code",[e._v("utUsed")]),e._v(": "),t("code",[e._v("*string")]),e._v(" The quota consumed by the transaction in Unit Transactions (rounded to 4 decimals)")]),e._v(" "),t("li",[t("code",[e._v("logHash")]),e._v(": "),t("code",[e._v("*types.Hash")]),e._v(" The hash of LogList generated by smart contract")]),e._v(" "),t("li",[t("code",[e._v("sendBlockList")]),e._v(": "),t("code",[e._v("[]*RawTxBlock")]),e._v(" A list of request transactions sent from within the block. RS block only")]),e._v(" "),t("li",[t("code",[e._v("tokenInfo")]),e._v(": "),t("code",[e._v("*RpcTokenInfo")]),e._v(" The token information in which the transaction is settled")]),e._v(" "),t("li",[t("code",[e._v("confirmedTimes")]),e._v(": "),t("code",[e._v("*string")]),e._v(" The confirmation number of the transaction")]),e._v(" "),t("li",[t("code",[e._v("confirmedHash")]),e._v(": "),t("code",[e._v("*Hash")]),e._v(" The hash of snapshot block in which the transaction was snapshotted")]),e._v(" "),t("li",[t("code",[e._v("timestamp")]),e._v(": "),t("code",[e._v("int64")]),e._v("  The timestamp(seconds) in which the transaction was snapshotted")]),e._v(" "),t("li",[t("code",[e._v("receiveBlockHeight")]),e._v(": "),t("code",[e._v("*string")]),e._v(" The height of the corresponding response transaction. Request transaction only")]),e._v(" "),t("li",[t("code",[e._v("receiveBlockHash")]),e._v(": "),t("code",[e._v("*Hash")]),e._v(" The hash of the corresponding response transaction. Request transaction only")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),t("code-group",[t("code-block",{attrs:{title:"Request"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDt0eF9zZW5kUmF3VHgmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFt7CiAgICAJJnF1b3Q7YmxvY2tUeXBlJnF1b3Q7OiAyLAogICAgICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7OSZxdW90OywKICAgICAgICAmcXVvdDtoYXNoJnF1b3Q7OiAmcXVvdDs3MTYxZjYyMWQxYmRjMjU3MWZhMWU2NjkxN2ZjYTkwYjA0N2UzZTVjNzhjMThlNWNmYjExZWRiYTMyYzdjMmZjJnF1b3Q7LAogICAgICAgICZxdW90O3ByZXZIYXNoJnF1b3Q7OiAmcXVvdDs3YzZhOGI3MjllNzNhZTk4NDA5YTVhYjcyY2NjNDU4ZmY0NDllY2VkNWU3ZWU3NTdkNTJkZTgzZThmMzJhMDcwJnF1b3Q7LAogICAgICAgICZxdW90O2FjY291bnRBZGRyZXNzJnF1b3Q7OiAmcXVvdDt2aXRlX2FiMjRlZjY4Yjg0ZTY0MmMwZGRjYTA2YmVlYzgxYzlhY2IxOTc3YmJkN2RhMjdhODdhJnF1b3Q7LAogICAgICAgICZxdW90O3B1YmxpY0tleSZxdW90OzogJnF1b3Q7V0haaW54c2xzY0UrV2FJcXJVakd1MnNjT3ZvcmdENFErRFFPT2NEQnY0TT0mcXVvdDssCiAgICAgICAgJnF1b3Q7c2lnbmF0dXJlJnF1b3Q7OiZxdW90O0h6OGJDNlRVTTAwb1d5bFV1YTdvTjJzRTRFRUZVdUNLNEM5TFFjWlp1OHZ5YjNVVTl4RzMyQmVKdEJRPT0mcXVvdDssCiAgICAgICAgJnF1b3Q7ZGlmZmljdWx0eSZxdW90OzogJnF1b3Q7NjU1MzUmcXVvdDssCiAgICAgICAgJnF1b3Q7bm9uY2UmcXVvdDs6ICZxdW90O1RnYitQZWJtRTR3PSZxdW90OywKICAgICAgICAmcXVvdDtmcm9tQmxvY2tIYXNoJnF1b3Q7OiAmcXVvdDswMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7LAogICAgICAgICZxdW90O3RvQWRkcmVzcyZxdW90OzomcXVvdDt2aXRlX2FiMjRlZjY4Yjg0ZTY0MmMwZGRjYTA2YmVlYzgxYzlhY2IxOTc3YmJkN2RhMjdhODdhJnF1b3Q7LAogICAgICAgICZxdW90O3Rva2VuSWQmcXVvdDs6ICZxdW90O3R0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAmcXVvdDssCiAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMCZxdW90OywKICAgICAgICAmcXVvdDtmZWUmcXVvdDs6ICZxdW90OzAmcXVvdDssCiAgICAgICAgJnF1b3Q7ZGF0YSZxdW90OzpudWxsCiAgICB9XQp9Cg=="}})],1),e._v(" "),t("code-block",{attrs:{title:"Request"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDt0eF9zZW5kUmF3VHgmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFt7CiAgICAJJnF1b3Q7YmxvY2tUeXBlJnF1b3Q7OiA0LAogICAgICAgICZxdW90O2hlaWdodCZxdW90OzogJnF1b3Q7MTEmcXVvdDssCiAgICAgICAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7ZDdhMjY4NTVmMTMxZjUzYmE2MzIwZjBlYmNiYTk5ZjJjMjE1N2Q2MGE0N2RjN2E1M2EzMTg2Y2QwYjIwMmI2MyZxdW90OywKICAgICAgICAmcXVvdDtwcmV2SGFzaCZxdW90OzogJnF1b3Q7OWY0NjNiN2RiNTFmOTE5NTFkZTk0NDU1NzBlNGE2ZDRmMDBkZWY0ZDUyOGM4MGRkZmRmMzllMWU0N2Y4NDk4ZCZxdW90OywKICAgICAgICAmcXVvdDthY2NvdW50QWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV9hYjI0ZWY2OGI4NGU2NDJjMGRkY2EwNmJlZWM4MWM5YWNiMTk3N2JiZDdkYTI3YTg3YSZxdW90OywKICAgICAgICAmcXVvdDtwdWJsaWNLZXkmcXVvdDs6ICZxdW90O1dIWmlueHNsc2NFK1dhSXFyVWpHdTJzY092b3JnRDRRK0RRT09jREJ2NE09JnF1b3Q7LAogICAgICAgICZxdW90O3NpZ25hdHVyZSZxdW90OzomcXVvdDt6QkY1TGdPT3hRK0g4Nm9NTlEza2J1SmJpUSt5Q2RMYnRPZG1FSjdRUk5vNjdIRjNiL3BtK2JmTTVFSHV4TU5wT25pbUtnYXd0b3pad2lmbkZWaHlEUT09JnF1b3Q7LAogICAgICAgICZxdW90O2RpZmZpY3VsdHkmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7bm9uY2UmcXVvdDs6IG51bGwsCiAgICAgICAgJnF1b3Q7ZnJvbUJsb2NrSGFzaCZxdW90OzomcXVvdDs3YzZhOGI3MjllNzNhZTk4NDA5YTVhYjcyY2NjNDU4ZmY0NDllY2VkNWU3ZWU3NTdkNTJkZTgzZThmMzJhMDcwJnF1b3Q7LAogICAgICAgICZxdW90O2RhdGEmcXVvdDs6bnVsbAogICAgfV0KfQo="}})],1),e._v(" "),t("code-block",{attrs:{title:"Response"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiBudWxsCn0K"}})],1),e._v(" "),t("code-block",{attrs:{title:"Response"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7ZXJyb3ImcXVvdDs6IHsKICAgICAgICAmcXVvdDtjb2RlJnF1b3Q7OiAtMzYwMDYsCiAgICAgICAgJnF1b3Q7bWVzc2FnZSZxdW90OzogJnF1b3Q7dmVyaWZ5IHByZXZCbG9jayBmYWlsZWQsIGluY29ycmVjdCB1c2Ugb2YgcHJldkhhc2ggb3IgZm9yayBoYXBwZW5lZCZxdW90OwogICAgfQp9Cg=="}})],1)],1),t("h2",{attrs:{id:"tx-calcpowdifficulty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx-calcpowdifficulty"}},[e._v("#")]),e._v(" tx_calcPoWDifficulty")]),e._v(" "),t("p",[e._v("Obtain current PoW difficulty for sending a transaction via "),t("code",[e._v("sendRawTx")]),e._v(".")]),e._v(" "),t("p",[e._v("This method calculates the required quota based on given transaction parameters, and then determines whether the account has enough quota from staking. Difficulty is only calculated if the account does not have sufficient quota.\nIf error is returned, it could be because too many characters in data field, or the current transaction cannot obtain quota by calculating PoW. For example, during the same snapshot period, if previous transaction in the account chain has obtained quota through calculating PoW, calling this method for next transaction will throw an error.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("selfAddr")]),e._v(": "),t("code",[e._v("Address")]),e._v("  Account address")]),e._v(" "),t("li",[t("code",[e._v("prevHash")]),e._v(": "),t("code",[e._v("Hash")]),e._v("  The hash of previous block in the account chain. Fill 0 if there is no previous block")]),e._v(" "),t("li",[t("code",[e._v("blockType")]),e._v(": "),t("code",[e._v("byte")]),e._v("  Transaction type")]),e._v(" "),t("li",[t("code",[e._v("toAddr")]),e._v(": "),t("code",[e._v("Address")]),e._v("  The account address to send the transaction to. Required for request transaction. Fill null for response.")]),e._v(" "),t("li",[t("code",[e._v("data")]),e._v(": "),t("code",[e._v("[]byte")]),e._v("  Additional data the transaction carries. Fill null for response transaction.")]),e._v(" "),t("li",[t("code",[e._v("usePledgeQuota")]),e._v(": "),t("code",[e._v("bool")]),e._v("  Whether quota from staking is used first")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Returns")]),e._v(": "),t("code",[e._v("Object")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("difficulty")]),e._v(": "),t("code",[e._v("big.Int")]),e._v(" Current PoW difficulty. Empty string means calculating PoW is not necessary")]),e._v(" "),t("li",[t("code",[e._v("quotaRequired")]),e._v(": "),t("code",[e._v("uint64")]),e._v(" Quota that will be consumed by the transaction")]),e._v(" "),t("li",[t("code",[e._v("utRequired")]),e._v(": "),t("code",[e._v("uint64")]),e._v("  Quota that will be consumed by the transaction in Unit Transactions (rounded to 4 decimals)")]),e._v(" "),t("li",[t("code",[e._v("isCongestion")]),e._v(": "),t("code",[e._v("bool")]),e._v("  An indicator to show if the network is jammed at the time being. If the value is true, the quota consumed by the transaction will increase.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),t("code-group",[t("code-block",{attrs:{title:"Request"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewoJJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAoJJnF1b3Q7aWQmcXVvdDs6IDE3LAoJJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDt0eF9jYWxjUG9XRGlmZmljdWx0eSZxdW90OywKCSZxdW90O3BhcmFtcyZxdW90OzogW3sKCQkmcXVvdDtzZWxmQWRkciZxdW90OzomcXVvdDt2aXRlX2JiNmFkMDIxMDdhNDQyMmQ2YTMyNGZkMmUzNzA3YWQ1M2NmZWQ5MzU5Mzc4YTc4NzkyJnF1b3Q7LAoJCSZxdW90O3ByZXZIYXNoJnF1b3Q7OiZxdW90OzUxZWU3Y2U5YzYyMThlZWUwZTk4NTUxZWJmYTQ2MjU1ZGZiZDljNDBiZjczYzRiNjk2MjJmZjkwZTViOGQxNTMmcXVvdDssCgkJJnF1b3Q7YmxvY2tUeXBlJnF1b3Q7OjIsCgkJJnF1b3Q7dG9BZGRyJnF1b3Q7OiZxdW90O3ZpdGVfYmI2YWQwMjEwN2E0NDIyZDZhMzI0ZmQyZTM3MDdhZDUzY2ZlZDkzNTkzNzhhNzg3OTImcXVvdDssCgkJJnF1b3Q7ZGF0YSZxdW90OzomcXVvdDs4cHhzNGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUdBQUFBQUFBQUFBQUFBQUFBQ0ExRWJlQ3pKbnNEeTZmWnRKcjZYbkUwSEh6UUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRmMzVndaWElBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9JnF1b3Q7LAoJCSZxdW90O3VzZVBsZWRnZVF1b3RhJnF1b3Q7OnRydWUKCX1dCn0K"}})],1),e._v(" "),t("code-block",{attrs:{title:"Response"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7cXVvdGFSZXF1aXJlZCZxdW90OzogMzIxNTIsCiAgICAgICAgJnF1b3Q7ZGlmZmljdWx0eSZxdW90OzogJnF1b3Q7MTAwNTA2JnF1b3Q7LAogICAgICAgICZxdW90O3V0UmVxdWlyZWQmcXVvdDs6ICZxdW90OzEuNTMxJnF1b3Q7LAogICAgICAgICZxdW90O2lzQ29uZ2VzdGlvbiZxdW90OzogZmFsc2UKICAgIH0KfQo="}})],1)],1),t("h2",{attrs:{id:"tx-calcquotarequired"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tx-calcquotarequired"}},[e._v("#")]),e._v(" tx_calcQuotaRequired")]),e._v(" "),t("p",[e._v("Calculate the quota required for sending the transaction")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("selfAddr")]),e._v(": "),t("code",[e._v("Address")]),e._v("  Account address")]),e._v(" "),t("li",[t("code",[e._v("blockType")]),e._v(": "),t("code",[e._v("byte")]),e._v("  Transaction type")]),e._v(" "),t("li",[t("code",[e._v("toAddr")]),e._v(": "),t("code",[e._v("Address")]),e._v("  The account address to send the transaction to. Required for request transaction. Fill null for response.")]),e._v(" "),t("li",[t("code",[e._v("data")]),e._v(": "),t("code",[e._v("[]byte")]),e._v("  Additional data the transaction carries. Fill null for response transaction.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Returns")]),e._v(": "),t("code",[e._v("Object")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("quotaRequired")]),e._v(": "),t("code",[e._v("uint64")]),e._v(" Quota that will be consumed by the transaction")]),e._v(" "),t("li",[t("code",[e._v("utRequired")]),e._v(": "),t("code",[e._v("uint64")]),e._v("  Quota that will be consumed by the transaction in Unit Transactions (rounded to 4 decimals)")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),t("code-group",[t("code-block",{attrs:{title:"Request"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewoJJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAoJJnF1b3Q7aWQmcXVvdDs6IDE3LAoJJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDt0eF9jYWxjUG9XRGlmZmljdWx0eSZxdW90OywKCSZxdW90O3BhcmFtcyZxdW90OzogW3sKCQkmcXVvdDtzZWxmQWRkciZxdW90OzomcXVvdDt2aXRlX2JiNmFkMDIxMDdhNDQyMmQ2YTMyNGZkMmUzNzA3YWQ1M2NmZWQ5MzU5Mzc4YTc4NzkyJnF1b3Q7LAoJCSZxdW90O2Jsb2NrVHlwZSZxdW90OzoyLAoJCSZxdW90O3RvQWRkciZxdW90OzomcXVvdDt2aXRlX2JiNmFkMDIxMDdhNDQyMmQ2YTMyNGZkMmUzNzA3YWQ1M2NmZWQ5MzU5Mzc4YTc4NzkyJnF1b3Q7LAoJCSZxdW90O2RhdGEmcXVvdDs6JnF1b3Q7OHB4czRnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFHQUFBQUFBQUFBQUFBQUFBQUNBMUViZUN6Sm5zRHk2Zlp0SnI2WG5FMEhIelFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZjM1Z3WlhJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBPSZxdW90OwoJfV0KfQo="}})],1),e._v(" "),t("code-block",{attrs:{title:"Response"}},[t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDE3LAogICAgJnF1b3Q7cmVzdWx0JnF1b3Q7OiB7CiAgICAgICAgJnF1b3Q7cXVvdGFSZXF1aXJlZCZxdW90OzogMzIxNTIsCiAgICAgICAgJnF1b3Q7dXRSZXF1aXJlZCZxdW90OzogJnF1b3Q7MS41MzEmcXVvdDsKICAgIH0KfQo="}})],1)],1)],1)}),[],!1,null,null,null);o.default=c.exports}}]);