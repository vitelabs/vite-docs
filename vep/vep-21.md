# VEP-21 Reduce Quota Consumption to Allow Big Contract

The maximum quota limit for creating a smart contract on the Vite network is **1,000,000**. According to the quota table

* $Qm$ = 1000000
* $QC_{transaction}$ = 31000
* $QC_{snapshot}$ = 40
* $QC_{byte}$ = 160

where $Qm$ is the maximum quota allowed for a single account block, $QC_{transaction}$ is the standard quota consumption for a creating contract transaction, $QC_{snapshot}$ defines the quota consumption per snapshot block, where the number of snapshot blocks is measured by ResponseLatency parameter when the contract is deployed. $QC_{byte}$ defines the quota consumption of a single byte of compiled contract code.

The quota consumption for creating a smart contract is
$$QC=QC_{transaction} + QC_{snapshot} \times ResponseLatency + QC_{byte} \times (len(code)+1)$$

> The additional 1 byte is the contract type.

When $Qc < Qm$, the maximum allowed code length is 6055 in byte. (given ResponseLatency = 1)

This means any smart contract larger than 6055 bytes cannot be deployed on the network.

## Improvement

We propose to reduce the quota consumption per byte to 16 to allow large contract. In the above case, when $QC_{byte}$ = 16, the maximum allowed compiled code is 60559 bytes, 10x the original size.