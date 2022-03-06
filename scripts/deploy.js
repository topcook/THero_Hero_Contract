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
  const PurpleEye = await hre.ethers.getContractFactory("PurpleEye");
  const PurpleEyedemo = await PurpleEye.deploy(
      "PurpleEyev4_demo",
      "PEv4_demo",
      "ipfs://QmUj9X5dGFtjJadREmrHJYr9XLRaoPzNca1KYqUiRrvzro/",
      "ipfs://QmdWUSuyADXVzFvecZ4nJQHhcEMkmfDoFgNBpmNpdzB5Ph/hidden.json"
  );

  await PurpleEyedemo.deployed();

  console.log("PurpleEye demo deployed to:", PurpleEyedemo.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
