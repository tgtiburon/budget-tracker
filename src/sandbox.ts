let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi' ;

const circ = (diameter:number) => {
    return diameter * Math.PI

}

console.log(circ(3));


// Arrays names is now locked into being an array
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// can't names.push(3);

let numbers = [1,3,5];

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
let characterTwo : string   // only allow values of strings
let money : number;
let isLoggedIn: boolean;

// arrays
let dogs: String[] = [];//set it empty when you make it.
dogs = ['german shephard', 'Leo'];

// union type an array with strings or numbers
let mixed2: (string|number)[] = [];

let uid : string|number;

// objects
let frogOne : object;
frogOne = { name: 'froggy', age:33};

let frogTwo : {
    name: string,
    age: number,
    beltColor: string
};
// Using any kind of defeats the purpose of typescript

// Dynamic type    (any)    
let newAge: any;   // could be let age:any=25;
// Since any can convert it
newAge = true;


// Function basics
// it infers greet is a function
// let greet = () => {
//     console.log('hello, world');
// };
// we can use
let greet: Function;
greet = () => {
    console.log('hello again');
}
// C is optional and a union
// returns void...meaning no value
const add = (a: number, b: number, c?: number|string) => {
    console.log(a+b);
    console.log(c);
}

add(5,10);
// pass a default value to c if not sent
// always put a default param at the end
const add2 = (a: number, b: number, c: number|string = 10) => {
    console.log(a+b);
    console.log(c);
}
add2(5,10);


const minus = (a: number, b: number) => {
    return a - b;
}
let result = minus(10,7); // it knows results will be a number type
// return type is number explicitly here
const minus2 = (a: number, b: number): number => {
    return a - b;
}
let result2 = minus2(10,7); // it knows results will be a number type


// Aliases

type StringOrNum = string | number;
// So instead of this
//const logDetails = (uid: string|number, item:string) => {
//   console.log(`${item} has a uid of ${uid}`);
//};

const logDetails = (uid: StringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
};

type objWithName = { name: string, uid: StringOrNum };

// const greet2 = ( user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// };
// Becomes
const greet2 = ( user: objWithName) => {
    console.log(`${user.name} says hello`);
};

// Function signature
let greetAgain : Function
// Have to match function signature...types have to match

let greet7: (a: string, b: string) => void;

greet7 = (name:string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

let logDetails2: (obj: {name: string, age: number}) => void;

logDetails2 = (froggy: {name: string, age: number} ) => {
    console.log(`${froggy.name} is  ${froggy.age} years old.`);
}