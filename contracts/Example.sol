//  create abi  on https://remix.ethereum.org/

pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Example is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;

    constructor() public ERC1155("https://game.example/api/item/{id}.json") {
        _mint(msg.sender, GOLD, 10**18, "");
        _mint(msg.sender, SILVER, 10**27, "");
    }
}