import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== undefined) {
  web3 = new Web3(window.web3.currentProvider);
  console.log("metamask is installed");
} else {
    console.log('do sth else')
}

export default web3;