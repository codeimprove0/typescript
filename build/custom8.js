"use strict";
var Bike = /** @class */ (function () {
    function Bike() {
        this.model = 2012;
        this.color = 'White & Black';
    }
    Bike.prototype.getColor = function (param) {
        var bikeClr = param || this.color;
        return "Your bike color is " + bikeClr;
    };
    return Bike;
}());
var bikeObj = new Bike();
console.log(bikeObj.model);
console.log(bikeObj.color);
console.log(bikeObj.getColor('Red'));
console.log(bikeObj.getColor());
