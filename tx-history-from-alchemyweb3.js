import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const apikey = "demo";

const web3 = createAlchemyWeb3(`https://eth-mainnet.alchemyapi.io/v2/${apiKey}`,);

const data = await web3.alchemy.getAssetTransfers({
    fromBlock: "0x0",
    fromAddress: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
})

console.log(data);