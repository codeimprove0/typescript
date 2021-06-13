"use strict";
var obj = {
    firstName: 'Code',
    lastName: 'Improve',
    userId: 117,
    status: true,
    age: 5,
    mobile: 9876543210,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(obj);
console.log(obj.fullName());
function printData(params) {
    console.log(params);
}
var myObj = {
    size: 10, label: 'test'
};
printData(myObj);
