
/* function hello():void{
   console.log("yesssssss")
}

console.log(hello()) */

enum VehicleType{
    car='Car',
    bike="Bike",
    truck=1212,
    scooter
}

let vehicleData:VehicleType;


vehicleData = VehicleType.bike;
console.log(vehicleData)

function getName(name:VehicleType):string{ 
    return 'helllo';
}
console.log(getName(3))

