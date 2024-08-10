import { ethers } from "ethers";
import Web3Modal from 'web3modal';
import address from '../utils/address.json';
import erc20Abi from '../utils/erc20Abi.json';
import auctionAbi from '../utils/AuctionAbi.json';

// NETWORKS
const networks = {
    theta_testnet: {
        chainId: `0x${Number(361).toString(16)}`,
        chainName: "Theta Testnet",
        nativeCurrency: {
            name: "TFUEL",
            symbol: "TFUEL",
            decimals: 18,
        },
        rpcUrls: ["https://testnet-rpc.thetatoken.org/"],
        blockExplorerUrls: ["https://explorer.testnet.thetatoken.org/"],
    },
};
// @ts-ignore
const changeNetwork = async ({ networkName }) => {
    try {
        if (window.ethereum) throw new Error("No Crypto Wallet Found");
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                ...networkName[networkName],
            ]
        })
    } catch (error) {
        console.log(error);
    }
}

export const handleNetworkSwitch = async () => {
    const networkName = 'theta_testnet';
    await changeNetwork({ networkName });
}
// @ts-ignore
export const shortnetAddress = (address) => `${address?.slice(0, 5)}...${address?.length - 4}`;
// @ts-ignore
const fetchContract = (address, abi, signer) => new ethers.Contract(address, abi, signer);


export const erc20Contract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const signer = provider.getSigner();

        const contract = fetchContract(address.erc20, erc20Abi, signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}



export const auctionContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        const signer = provider.getSigner();

        const contract = fetchContract(address.auction, auctionAbi, signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
}





