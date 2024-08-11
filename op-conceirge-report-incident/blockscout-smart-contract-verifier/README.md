# BlockScout API for developing Contract Deployment Dashboard

We are developing a feature in the OP Concierge Suite that allows users to deploy and verify contracts, showing real-time status updates and providing links to Blockscout for detailed inspection.

Please visit our initial attempt at https://github.com/seetadev/op-conceirge-suite/tree/main/op-conceirge-report-incident/blockscout-smart-contract-verifier

The primary function of this service is to receive bytecode and potential source files as inputs and determine whether the files and the bytecode correspond to each other.

This service serves as the core component for all activities related to smart-contract verification in BlockScout. It is essential for enabling smart-contract verification functionality on your instance.

## Requirements
No additional dependencies

## How to enable
Set the following ENVs on blockscout instance:
- `MICROSERVICE_SC_VERIFIER_ENABLED=true`
- `MICROSERVICE_SC_VERIFIER_URL={service_url}`
- `MICROSERVICE_SC_VERIFIER_TYPE=sc_verifier`

