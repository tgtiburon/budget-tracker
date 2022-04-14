"use strict";
// Add ! to show you know a will be returned
const anchor = document.querySelector('a');
console.log(anchor.href);
//const form = document.querySelector('form');
// Casting form as a type HTMLFormElement
const form = document.querySelector('.new-item-form');
//console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
