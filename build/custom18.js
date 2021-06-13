"use strict";
/*  function getValue(item:number):number {
     return item;
 } */
/*  let values = getValue('Hello Code Improve')
 console.log(values) */
/*  let values = getValue(12)
 console.log(values) */
/*
 function getValue<T>(item:T):T {
    return item;
}
 let values = getValue([12,13])
 console.log(values) */
/*
function getValue<T,U>(item:T,name:U):U {
    return name;
}
 let values = getValue([12,13],'Test')
 console.log(values) */
var Persons = /** @class */ (function () {
    function Persons(fname, lname) {
        this.firstname = fname;
        this.lastName = lname;
    }
    return Persons;
}());
var Persons2 = /** @class */ (function () {
    function Persons2(fname, lname) {
        this.firstname = fname;
        this.lastNames = lname;
    }
    return Persons2;
}());
function messages(per) {
    console.log(per);
}
var per = new Persons('Code', 'Improve');
console.log('hell', per);
messages(per);
