require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY =  process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",        
      },
      {
        version: "0.8.0",        
      }
    ]
  }
};
