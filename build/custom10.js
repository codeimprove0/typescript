"use strict";
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
var Vehicle = /** @class */ (function () {
    function Vehicle(storeNumber) {
        this.gst = 1000001;
        this.storeNo = 900021;
        this.storeNo = storeNumber;
    }
    Vehicle.prototype.vehicleCategory = function () {
        return 'Three Type of vehicle Car, Bike & Truck';
    };
    Vehicle.prototype.getCount = function () {
        return 'Total 100 Vehicle ' + this.storeNo + ' ' + this.gst;
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brandName, storeId) {
        var _this = _super.call(this, storeId) || this;
        _this.brand = brandName;
        return _this;
    }
    Car.prototype.getCount = function () {
        return 'Total 50 cars ' + this.storeNo;
    };
    Car.prototype.getInfoCount = function () {
        return _super.prototype.getCount.call(this) + ' ===' + this.getCount();
    };
    return Car;
}(Vehicle));
var vehicleObj = new Car('Maruti', 90001);
console.log(vehicleObj.getCount());
console.log(vehicleObj.getInfoCount());
