require("dotenv").config()
module.exports = {
  reactStrictMode: true,
  webpack5: false,
  env:{
    IPFS_PROJECT_ID : process.env.IPFS_PROJECT_ID,
    IPFS_PROJECT_SECRET : process.env.IPFS_PROJECT_SECRET,
  }
}
