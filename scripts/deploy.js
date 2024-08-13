async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const NFTCollection = await ethers.getContractFactory("NFTCollection");
    const nft = await NFTCollection.deploy("ipfs://your-ipfs-base-uri/");

    console.log("NFTCollection deployed to:", nft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
