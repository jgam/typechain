"use strict";
// console.log('hello');
Object.defineProperty(exports, "__esModule", { value: true });
// const name = 'jgam',
//   age = 24,
//   gender = 'male';
// // interface Human {
// //   name: string;
// //   age: number;
// //   gender: string;
// // }
// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
// const jgam = new Human('jgam', 18, 'male');
// const person = {
//   name: 'jimmy',
//   gender: 'male',
//   age: 22,
// };
// //what to do when you want to pass in object?
// const sayHi = (person: Human): void => {
//   console.log(
//     `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}.`
//   );
// };
// //ts wouldn't let me compile if there are not enough number of arguments
// sayHi(jgam);
//type script import
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.previousHash === 'string' &&
    typeof aBlock.timestamp === 'number' &&
    typeof aBlock.data === 'string';
const genesisBlock = new Block(0, '2020202020', '', 'Hello', 20200510);
//it is array of blocks
//with this in ts, we know blockchain is only composed of Blockf
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock('second block');
createNewBlock('third block');
createNewBlock('fourth block');
console.log(blockchain);
//# sourceMappingURL=index.js.map