async function main() {
    const nftAddress = "your-deployed-contract-address";
    const NFTCollection = await ethers.getContractAt("NFTCollection", nftAddress);

    for (let i = 1; i <= 5; i++) {
        const tx = await NFTCollection.mint("recipient-address", i, `Prompt Description ${i}`);
        console.log(`Minted NFT ${i}:`, tx.hash);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
