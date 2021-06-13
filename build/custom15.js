"use strict";
/*
Abstract Class
Interface Vs  Abstract Class
Abstract Class


Interface
1) All members are abstract.
2) Interfaces support multiple inheritances.



Abstract
1) Some members are abstract and some are fully implemented.
2) 	Abstract class does not support multiple inheritances.
3) We cannot create an instance of an abstract class.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        return 'Hello.....';
    };
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, stdId) {
        var _this = _super.call(this, name) || this;
        _this.stdId = stdId;
        return _this;
    }
    Students.prototype.find = function (name) {
        return "Your name is " + name;
    };
    return Students;
}(Person));
var myStdData = new Students('Code Improve', 117);
console.log(myStdData.stdId);
console.log(myStdData.find('Rahul'));
