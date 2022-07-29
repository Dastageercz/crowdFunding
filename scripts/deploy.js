const { ethers } = require("hardhat");

const main = async() => {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("CrowdFunding");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
