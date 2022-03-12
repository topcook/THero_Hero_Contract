// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Hero_NFT = await hre.ethers.getContractFactory("THero_Hero_NFT");
  const HeroNFT = await Hero_NFT.deploy(
      "THero_Hero_v1",
      "THR_Hero_v1",
      "ipfs://QmQia3LHb5VLsz58gvJvMwYFFN1DhZ6ssGzwPJUZrj6pZh/",
      "ipfs://QmZQFPbCYTyCLq6n7Nk78kdhSpne6U6jV7nxXphRinTYFe/hidden_hero.json"
  );

  await HeroNFT.deployed();

  console.log("Hero NFT deployed to:", HeroNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
