import { ethers } from "ethers";

export default class EthersService {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.address = "";
  }

  async connectWallet() {
    try {
      const { ethereum } = await window;
      if (!ethereum) {
        alert("Must connect to MetaMask!");
        return;
      }
      const myAccounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      this.address = myAccounts[0];

      console.log("Connected: ", myAccounts[0]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getBalance(address) {
    debugger;
    try {
      const { ethereum } = await window;
      if (ethereum) {
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await this.provider.getBalance(address);
        console.log("this is balance: ", balance);
        return ethers.utils.formatEther(balance);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
