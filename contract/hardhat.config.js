const dotenv = require("dotenv");

require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  namedAccounts: { deployer: 0 },
  networks: {
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: { mnemonic: process.env.MNEMONIC ?? "" },
    },
  },
};