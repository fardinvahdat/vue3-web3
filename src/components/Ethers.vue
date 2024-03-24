<template>
  <div>
    <!-- Wallet Connection -->

    <button @click="handleConnectWallet" v-if="!address">Connect Wallet</button>
    <button v-else>
      Connected Wallet Address: <i>{{ address }}</i>
    </button>

    <div v-if="address">
      <hr />
      <button v-if="!balance" @click="getWalletBalance">
        Get Account Balance
      </button>
      <button v-else>Balance: {{ balance }}</button>
    </div>
    <div v-else>
      You Don't Have Connected Wallet,For Checking Your Account Balance Please
      Connect Your Wallet First!
    </div>
  </div>
</template>

<script setup>
import EthersService from "../services/ethersService";
import { ref } from "vue";

//state

const address = ref("");
const balance = ref("");

//methods
const handleConnectWallet = async () => {
  const ethersService = new EthersService();
  await ethersService.connectWallet();
  address.value = ethersService.address;
};
const getWalletBalance = async () => {
  if (address.value) {
    const ethersService = new EthersService();
    balance.value = await ethersService.getBalance(address.value);
  }
};
</script>
