"use strict";
/*
 "experimentalDecorators": true,
Decorators
1) invoked at runtime
2) it's simply functions that return functions
3)  Decorators allow you to execute functions
type:-
1) class Decorators
2)  Property
3) Method
4)  Parameter
@
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @Input @Ouput
function first(value) {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
        var originalMethod = descriptor.value;
        // console.log(originalMethod)
        descriptor.value = function () {
            var context = this;
            var args = arguments;
            setTimeout(function () {
                originalMethod.apply(context, args);
            }, value);
        };
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
        this.count = 0;
    }
    ExampleClass.prototype.method = function () {
        this.count++;
        console.log('custom fn', this.count);
    };
    __decorate([
        first(3000),
        second()
    ], ExampleClass.prototype, "method", null);
    return ExampleClass;
}());
var dec = new ExampleClass();
console.log('++++++++++++++++++');
dec.method();
console.log('========', dec.count);
