"use strict";
var Bikes = /** @class */ (function () {
    function Bikes(namePlate, dum) {
        this.model = 2012;
        this.color = 'White & Black';
        this.namePlate = namePlate;
        this.dummy = dum || '';
    }
    Bikes.prototype.getColor = function (param) {
        var bikeClr = param || this.color;
        return "Your bike color is " + bikeClr + " & number plate will be " + this.namePlate + " State";
    };
    Bikes.prototype.getPrice = function () {
        return "1L- 2L " + this.namePlate + " State " + this.dummy;
    };
    return Bikes;
}());
var bikeOb = new Bikes('HR', 'test');
console.log(bikeOb.model);
console.log(bikeOb.color);
console.log(bikeOb.getColor('Red'));
console.log(bikeOb.getColor());
console.log(bikeOb.getPrice());
var bikeOb2 = new Bikes('UP');
console.log(bikeOb2.model);
console.log(bikeOb2.color);
console.log(bikeOb2.getColor('Red'));
console.log(bikeOb2.getColor());
console.log(bikeOb2.getPrice());
