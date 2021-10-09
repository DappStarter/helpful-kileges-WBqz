require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth pumpkin collect grace depth fresh gauge'; 
let testAccounts = [
"0x4a9fd6da597a189fa09c814a0681633ce138ce77f5bbc9aaf1c85c60bd5c14ec",
"0x5080c1037c80b2920a2be87d94a89632ce0901d273fb4e028f3f1fc384813df3",
"0x7c3b80926579fa168c2d1e3d15ab40cef66c94dd70a8a0d909c8f50f50acf58d",
"0x79c1e9d7652510e3c38086b0d584b0d0d3799609b4f2b8e956fd5e23ce008a65",
"0xb29151472ec344a2d1b4ce64037662106ba8f653069aa8a0b3e8cf76b5092388",
"0xb5c0fd7f3c502ea55bd9baa54f21dc157586fa22d6ab670a4594e27c5a10c791",
"0x3ca829ef607c69c294a41f2abc13a1cdb09a45353aadb10876722af8b8e6e007",
"0x64c715319dc9fb88f5c26f775a3cbe19406dc4a7258bfaa281096ea8024fc7ef",
"0xb81f6561476563be62356e47ee5e049e54de7bab804dfac723ac3dd787a45051",
"0xa086a13bc37f94e2f76d4a7e4eff853b9bab3b2859a748b402db04f69372cba7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

