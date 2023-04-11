# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

## Create the project:

npm init
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install --save-dev hardhat
npm install dotenv
npx hardhat

## Run the project:

Try running some of the following tasks on local:

```shell
npx hardhat help
npx hardhat compile
REPORT_GAS=true npx
npx hardhat node
npx hardhat run scripts/simpleContract.js
npx hardhat test test/simpleTest.js
```

Try running some of the following tasks on Seploia Network:

```shell
npx hardhat run --network sepolia scripts/simpleContract.js
npx hardhat verify --network sepolia 0x...
```
