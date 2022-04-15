import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
//const form = document.querySelector('form');
// Casting form as a type HTMLFormElement
const form = document.querySelector('.new-item-form');
//console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stops page from refreshing with a submit
    // Use tuples values
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // we can use a spread since we know the types of each value due to tuples ..
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Learning code below
// Generics
// old way does not allow for docOne.name to work.
// It does not know what was in docOne it just passes it
//const addUID = (obj:object) => {
// New way using generic
// The <T> Captures which properties are on the object passed to it
// Must extends means it must include object that has a string
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    // spits out the object with a new uid attached
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
// Generics also used with interfaces
// Interfaces say how an object must look
// T will store the data type and info
// so we can store anything in data
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree : Resource<object> = {
//     uid:1,
//     resourceName: 'person',
//     data: {name: 'bob'}
// }
// const docFour : Resource<string[]> = {
//     uid: 1, 
//     resourceName: 'shopping list',
//     data: ['bread', 'milk', 'test'],
// }
// console.log('docThree', docThree);
// console.log('docFour', docFour);
// Interface
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// };
// const me: IsPerson = {
//     name: "Bob",
//     age: 30,
//     speak(text:string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };
// console.log(me);
// // Enforces types on a variable
// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }
// greetPerson(me);
// Add ! to show you know a will be returned
// const anchor = document.querySelector('a')!;
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 300);
// docTwo = new Payment('mario', 'plumbing work', 200);
// // restrict only to things that have HasFormatter interface
// // everything in here has a format string function
// let docs: HasFormatter[] = []; 
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 250);
// // only the class Invoice can be allowed in this array
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     // can't do details because it's private
//    // console.log(inv.client, inv.details, inv.amount, inv.format());
//     console.log(inv.client,  inv.amount, inv.format());
// })
//console.log(anchor.href);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
// ResourceType.BOOK is index 0
const docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
// ResourceType.PERSOn is index 4
const docSix = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docFive, docSix);
// Tuples
// A bit like arrays
// Positions are fixed once initialized
// Any position can be a string a number or a boolean 
// since there is at least one of them in the array already
let arr = ['string', 25, true];
// index has to match it's type
let tup = ['string', 35, true];
let student;
student = ['bob', 11];
// student = [11, 'bob'] will not work
