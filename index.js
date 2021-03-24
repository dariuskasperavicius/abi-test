const abiDecoder = require('abi-decoder');
const testABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
            },
            {
                "indexed": false,
                "internalType": "uint256[]",
                "name": "values",
                "type": "uint256[]"
            }
        ],
        "name": "TransferBatch",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "TransferSingle",
        "type": "event"
    }
];
abiDecoder.addABI(testABI);
const testData = "0x000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000000047a9fe22691c811ea339d9b73150e6911a5343dca0000000000000000040080057a9fe22691c811ea339d9b73150e6911a5343dca0000000000000000040080027a9fe22691c811ea339d9b73150e6911a5343dca0000000000000000040080017a9fe22691c811ea339d9b73150e6911a5343dca00000000000000000400800000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001";
const decodedData = abiDecoder.decodeMethod(testData);

console.log("Output:");
console.log(decodedData);