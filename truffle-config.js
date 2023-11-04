module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    },
    gnosis: {
          provider: function() {
                return new HDWalletProvider(
               process.env.MNEMONIC,
               "https://rpc.gnosischain.com")
          },
          network_id: 100,
          gas: 500000,
          gasPrice: 1000000000
    },
    chiado: {
          provider: function() {
                return new HDWalletProvider(
               process.env.MNEMONIC,
               "https://rpc.chiadochain.net")
          },
          network_id: 10200,
          gas: 500000,
          gasPrice: 1000000000
    },
  }
};