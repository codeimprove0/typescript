
//  literals
 
/* let vehicleType:"car"|"bike"|"truck" = "car";

vehicleType = 'bike';

vehicleType = 'truck';
//vehicleType = 'scooter';
console.log(vehicleType) */


function getVehicleInfo(vehicleType:"car"|"bike"|"truck") {
    return vehicleType+' yes'
}
console.log(getVehicleInfo('truck'))