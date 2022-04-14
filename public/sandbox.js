"use strict";
let character = 'mario';
let age = 30;
let isBlackBelt = false;
character = 'luigi';
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(3));
// Arrays names is now locked into being an array
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// can't names.push(3);
let numbers = [1, 3, 5];
numbers.push(7);
// can't do numbers.push('hi');
// Mixed array
// Lets you make arrays with multiple types 
let mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 1; // Will still work even though it was a string.
// Objects can't change after declared
let frog = {
    name: 'mario',
    belt: 'black',
    age: 30
};
frog.age = 30;
frog.name = 'someone else';
// can't change type frog.age =  '30'; 
// We can declare frog again...but has to be the same
frog = {
    name: 'luigi',
    belt: 'white',
    age: 20
};
// explicit types
let characterTwo; // only allow values of strings
let money;
let isLoggedIn;
// arrays
let dogs = []; //set it empty when you make it.
dogs = ['german shephard', 'Leo'];
// union type an array with strings or numbers
let mixed2 = [];
let uid;
// objects
let frogOne;
frogOne = { name: 'froggy', age: 33 };
let frogTwo;
// Using any kind of defeats the purpose of typescript
// Dynamic type    (any)    
let newAge; // could be let age:any=25;
// Since any can convert it
newAge = true;
// Function basics
// it infers greet is a function
// let greet = () => {
//     console.log('hello, world');
// };
// we can use
let greet;
greet = () => {
    console.log('hello again');
};
// C is optional and a union
// returns void...meaning no value
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// pass a default value to c if not sent
// always put a default param at the end
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add2(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7); // it knows results will be a number type
// return type is number explicitly here
const minus2 = (a, b) => {
    return a - b;
};
let result2 = minus2(10, 7); // it knows results will be a number type
// So instead of this
//const logDetails = (uid: string|number, item:string) => {
//   console.log(`${item} has a uid of ${uid}`);
//};
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
// const greet2 = ( user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// };
// Becomes
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
// Function signature
let greetAgain;
// Have to match function signature...types have to match
let greet7;
greet7 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDetails2;
logDetails2 = (froggy) => {
    console.log(`${froggy.name} is  ${froggy.age} years old.`);
};
