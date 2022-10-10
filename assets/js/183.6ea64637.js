(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{806:function(s,c,e){"use strict";e.r(c);var a=e(1),l=Object(a.a)({},(function(){var s=this,c=s.$createElement,e=s._self._c||c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"auto-receive-accountblock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auto-receive-accountblock"}},[s._v("#")]),s._v(" Auto-Receive AccountBlock")]),s._v(" "),e("p",[s._v("Enable auto-receive on the account for incoming transactions")]),s._v(" "),e("h2",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[s._v("#")]),s._v(" Constructor")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("Constructor Parameters")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("__namedParameters: object")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("address: Address")]),s._v(" Address of account, mandatory")]),s._v(" "),e("li",[e("code",[s._v("provider: ViteAPI")]),s._v(" "),e("code",[s._v("ViteAPI")]),s._v(" instance")]),s._v(" "),e("li",[e("code",[s._v("privateKey: Hex")]),s._v(" privateKey")]),s._v(" "),e("li",[e("code",[s._v("sign?: Function")]),e("Badge",{attrs:{text:"v2.3.6"}}),s._v("  Used for when you can't get the "),e("code",[s._v("privateKey")]),s._v(", such as the privateKey is on the hardware wallet. You can use this function to set signature. See bellow Examples.")],1)])])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Example")])])])]),s._v(" "),e("p",[s._v("With private key:")]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCmNvbnN0IFJlY2VpdmVUYXNrID0gbmV3IFJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKICAgIGFkZHJlc3M6ICd5b3VyIGFkZHJlc3MnLAogICAgcHJpdmF0ZUtleTogJ3lvdXIgcHJpdmF0ZUtleScsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAp9KTsKClJlY2VpdmVUYXNrLm9uU3VjY2VzcygocmVzdWx0KSA9Jmd0OyB7CiAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIHJlc3VsdCk7Cn0pOwpSZWNlaXZlVGFzay5vbkVycm9yKChlcnJvcikgPSZndDsgewogICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpOwp9KTsKUmVjZWl2ZVRhc2suc3RhcnQoewogICAgY2hlY2tUaW1lOiAzMDAwLAogICAgdHJhbnNjdGlvbk51bWJlcjogMTAKfSk7Cg=="}}),s._v(" "),e("p",[s._v("Without private key, such as using hardware wallet to sign tx:")]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCgpjb25zdCBzaWduV2l0aEhhcmRXYWxsZXQgPSBhc3luYyAoKSA9Jmd0OyB7CiAgICBsZXQgc2lnbmF0dXJlID0gJyc7CiAgICAvLyBTaWduIHdpdGggaGFyZCB3YWxsZXQsIGFuZCByZXR1cm4gc2lnbmF0dXJlCgogICAgcmV0dXJuIHNpZ25hdHVyZTsKfQoKY29uc3QgUmVjZWl2ZVRhc2sgPSBuZXcgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2soewogICAgYWRkcmVzczogJ3lvdXIgYWRkcmVzcycsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAogICAgc2lnbjogYXN5bmMgKF9hY2NvdW50QmxvY2spID0mZ3Q7IHsKICAgICAgICBsZXQgc2lnbmF0dXJlID0gYXdhaXQgc2lnbldpdGhIYXJkV2FsbGV0KCk7CiAgICAgICAgLy8gU2V0IHB1YmxpY0tleSBpZiBub3QKICAgICAgICBfYWNjb3VudEJsb2NrLnNldFB1YmxpY0tleSh0aGlzLnB1YmxpY0tleSk7CiAgICAgICAgLy8gU2V0IHNpZ25hdHVyZSwgdGhpcyBpcyByZXF1aXJlZAogICAgICAgIF9hY2NvdW50QmxvY2suc2V0U2lnbmF0dXJlKHNpZ25hdHVyZSk7CiAgICB9Cn0pOwoKUmVjZWl2ZVRhc2sub25TdWNjZXNzKChyZXN1bHQpID0mZ3Q7IHsKICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzdWx0KTsKfSk7ClJlY2VpdmVUYXNrLm9uRXJyb3IoKGVycm9yKSA9Jmd0OyB7CiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7Cn0pOwpSZWNlaXZlVGFzay5zdGFydCh7CiAgICBjaGVja1RpbWU6IDMwMDAsCiAgICB0cmFuc2N0aW9uTnVtYmVyOiAxMAp9KTsK"}}),s._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[s._v("#")]),s._v(" Methods")]),s._v(" "),e("h3",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[s._v("#")]),s._v(" start")]),s._v(" "),e("p",[s._v("Start auto-receive account blocks")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("Parameters")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("__namedParameters: object")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("checkTime?: number")]),s._v(" Polling interval of unreceived transactions. Default is 3000(ms)")]),s._v(" "),e("li",[e("code",[s._v("transctionNumber?: number")]),s._v(" Transactions handled in each poll. Default is 5")])])])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Example")])])])]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCmNvbnN0IFJlY2VpdmVUYXNrID0gbmV3IFJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKICAgIGFkZHJlc3M6ICd5b3VyIGFkZHJlc3MnLAogICAgcHJpdmF0ZUtleTogJ3lvdXIgcHJpdmF0ZUtleScsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAp9KTsKClJlY2VpdmVUYXNrLnN0YXJ0KHsKICAgIGNoZWNrVGltZTogMzAwMCwKICAgIHRyYW5zY3Rpb25OdW1iZXI6IDEwCn0pOwo="}}),s._v(" "),e("h3",{attrs:{id:"stop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop"}},[s._v("#")]),s._v(" stop")]),s._v(" "),e("p",[s._v("Stop auto-receive account blocks")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("Example")])])]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCmNvbnN0IFJlY2VpdmVUYXNrID0gbmV3IFJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKICAgIGFkZHJlc3M6ICd5b3VyIGFkZHJlc3MnLAogICAgcHJpdmF0ZUtleTogJ3lvdXIgcHJpdmF0ZUtleScsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAp9KTsKClJlY2VpdmVUYXNrLnN0YXJ0KHsKICAgIGNoZWNrVGltZTogMzAwMCwKICAgIHRyYW5zY3Rpb25OdW1iZXI6IDEwCn0pOwpSZWNlaXZlVGFzay5zdG9wKCk7Cg=="}}),s._v(" "),e("h3",{attrs:{id:"onerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onerror"}},[s._v("#")]),s._v(" onError")]),s._v(" "),e("p",[s._v("Receive failed handler")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("Parameters")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("errorCB: Function")]),s._v(" Event handler on receive failure")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("error")]),s._v(" Error message")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("status: 'error'")])]),s._v(" "),e("li",[e("code",[s._v("message: string")]),s._v(" Error message")]),s._v(" "),e("li",[e("code",[s._v("timestamp: number")]),s._v(" Timestamp")]),s._v(" "),e("li",[e("code",[s._v("unreceivedHash?: Hex")]),s._v(" Hash of AccountBlock that was received unsuccessfully")]),s._v(" "),e("li",[e("code",[s._v("error: any")]),s._v(" RPC error message")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Example")])])])]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCmNvbnN0IFJlY2VpdmVUYXNrID0gbmV3IFJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKICAgIGFkZHJlc3M6ICd5b3VyIGFkZHJlc3MnLAogICAgcHJpdmF0ZUtleTogJ3lvdXIgcHJpdmF0ZUtleScsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAp9KTsKClJlY2VpdmVUYXNrLm9uRXJyb3IoKGVycm9yKSA9Jmd0OyB7CiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7Cn0pOwpSZWNlaXZlVGFzay5zdGFydCh7CiAgICBjaGVja1RpbWU6IDMwMDAsCiAgICB0cmFuc2FjdGlvbk51bWJlcjogMTAKfSk7Cg=="}}),s._v(" "),e("h3",{attrs:{id:"onsuccess"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onsuccess"}},[s._v("#")]),s._v(" onSuccess")]),s._v(" "),e("p",[s._v("Receive succeeded handler")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("Parameters")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("successCB: Function")]),s._v(" Event handler on receive success")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("success")]),s._v(" Success message")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("status: 'ok'")])]),s._v(" "),e("li",[e("code",[s._v("message: string")]),s._v(" Success message")]),s._v(" "),e("li",[e("code",[s._v("timestamp: number")]),s._v(" Timestamp")]),s._v(" "),e("li",[e("code",[s._v("accountBlockList?: AccountBlock[]")]),s._v(" AccountBlockList that has been received")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Example")])])])]),s._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"aW1wb3J0IHsgYWNjb3VudEJsb2NrIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKCmNvbnN0IHsgUmVjZWl2ZUFjY291bnRCbG9ja1Rhc2sgfSA9IGFjY291bnRCbG9jazsKCmNvbnN0IFJlY2VpdmVUYXNrID0gbmV3IFJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKICAgIGFkZHJlc3M6ICd5b3VyIGFkZHJlc3MnLAogICAgcHJpdmF0ZUtleTogJ3lvdXIgcHJpdmF0ZUtleScsCiAgICBwcm92aWRlcjogdml0ZVByb3ZpZGVyLAp9KTsKClJlY2VpdmVUYXNrLm9uU3VjY2VzcygocmVzdWx0KSA9Jmd0OyB7CiAgICBjb25zb2xlLmxvZygnc3VjY2VzcycsIHJlc3VsdCk7Cn0pOwpSZWNlaXZlVGFzay5zdGFydCh7CiAgICBjaGVja1RpbWU6IDMwMDAsCiAgICB0cmFuc2FjdGlvbk51bWJlcjogMTAKfSk7Cg=="}})],1)}),[],!1,null,null,null);c.default=l.exports}}]);