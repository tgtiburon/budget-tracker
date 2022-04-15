
import { HasFormatter } from '../interfaces/HasFormatters.js'
// Classes -- blueprint for an object
// all properties are public by default
// private can only be accessed from within the class
// public from anywhere
// readonly modifier....can only read not write


// implements HasFormatter means it has to have a format()
// which it does

export class Invoice implements HasFormatter {
    // Can be done in one of two ways
    // first
    // public client: string;
    // private details: string;
    // public amount: number;

    // constructor(c: string, d:string, a:number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // Second is a short cut
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}


    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }

}

