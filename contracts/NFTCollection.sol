// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721Enumerable, Ownable {
    string public baseURI;
    mapping(uint256 => string) public promptDescriptions;

    constructor(string memory initialBaseURI, address initialOwner) ERC721("NFTCollection", "NFTC") Ownable(initialOwner) {
        baseURI = initialBaseURI;
    }

    function mint(address to, uint256 tokenId, string memory description) external onlyOwner {
        _mint(to, tokenId);
        promptDescriptions[tokenId] = description;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        return promptDescriptions[tokenId];
    }
}
