# Contract that adds the version field

## Usage

1. Install the package `yarn add @big-whale-labs/versioned-contract`
2. Add to your contract as follows:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@big-whale-labs/versioned-contract/contracts/Versioned.sol";

contract MyContract is Versioned {
  constructor(string memory _version) Versioned(_version) {}
}
```

## Available scripts

- `yarn build` — compiles the contract ts interface to the `typechain` directory
- `yarn test` — runs the test suite
- `yarn deploy` — deploys the contract to the network
- `yarn eth-lint` — runs the linter for the solidity contract
- `yarn lint` — runs all the linters
- `yarn prettify` — prettifies the code in th project
- `yarn release` — relases the `typechain` directory to NPM
