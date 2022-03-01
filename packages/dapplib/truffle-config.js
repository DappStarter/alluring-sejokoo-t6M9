require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind hole heavy kitten swift test'; 
let testAccounts = [
"0x848f83586626af83b7316061a868d788778c45e151070096778f5cf4995b37af",
"0xa1684001f1b615aba1b0e2d1c5132ec22ba0704b41e2953e88ecc485144683e0",
"0x50708d8fa1ee3348ab4e3b9758e975983678755a4d8001bd84ec94588823bc21",
"0x25f84672fb62a492a3c1c25bdea8f1d81343dc9730487ec0ccf39c0fba29d5b8",
"0x931c692b8a0a2cb98e1845dfda636439a467e7ebe5263b841b2d2ac2f43c2ab8",
"0x120f91ee79ffab34bf91e6db3f8b5e787adbdb1ef4e1975a28c898ca075a2d22",
"0x2a52bb79b12b4d33353de71d501ede1e70e7f073eab1b5cb0e5da3069c6a36b3",
"0x5c3f0d2930d64a372391555a420e20b99f8bfa2c8cd48d5487ed968cf4e33e58",
"0xef4c76c688a194e7743373761aba6340f872e7334db3bbe585df8c05804ca4da",
"0xda2ee428f24de8fb1ae5d11d6b1beaf264abe88d4c936bc6121a3b9b0e6be634"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

