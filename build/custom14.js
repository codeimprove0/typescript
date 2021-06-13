"use strict";
/* function hello():void{
   console.log("yesssssss")
}

console.log(hello()) */
var VehicleType;
(function (VehicleType) {
    VehicleType["car"] = "Car";
    VehicleType["bike"] = "Bike";
    VehicleType[VehicleType["truck"] = 1212] = "truck";
    VehicleType[VehicleType["scooter"] = 1213] = "scooter";
})(VehicleType || (VehicleType = {}));
var vehicleData;
vehicleData = VehicleType.bike;
console.log(vehicleData);
function getName(name) {
    return 'helllo';
}
console.log(getName(3));
