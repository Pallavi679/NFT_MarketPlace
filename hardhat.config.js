require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const privateKey = process.env.PRIVATE_KEY
const projectId = process.env.PROJECT_ID

module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    mainnet:{
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
