"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('hello');
const name = 'jgam', age = 24, gender = 'male';
const person = {
    name: 'jimmy',
    gender: 'male',
    age: 22,
};
//what to do when you want to pass in object?
const sayHi = (person) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}.`);
};
//ts wouldn't let me compile if there are not enough number of arguments
sayHi(person);
//# sourceMappingURL=index.js.map