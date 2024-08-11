// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// file with contract doesn`t exist, so sol2uml will ignore it content but show variable 'v1' of library type
import './MissingContract.sol';

contract Main is MissingContract {
    uint public C = 0;

    function add(uint x, address y) internal pure returns (uint) {
        // a compilation error occurs here because it is not possible to add variables
        // with such types, but sol2uml will ignore it
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}
