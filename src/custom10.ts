 
 class Vehicle{
     private gst:number=1000001;
    protected storeNo:number=900021;
    constructor(storeNumber:number){
        this.storeNo = storeNumber
    }
    vehicleCategory(){
        return 'Three Type of vehicle Car, Bike & Truck'
    }
    getCount(){
        return 'Total 100 Vehicle '+this.storeNo+ ' '+this.gst
    }
 }

 class Car extends Vehicle{
    brand:string;
    constructor(brandName:string,storeId:number){
        super(storeId)
        this.brand = brandName;
    }

    getCount(){
        return 'Total 50 cars '+this.storeNo 
    }

    getInfoCount(){
        return super.getCount()+' ==='+  this.getCount();
    }
 }

 let vehicleObj =  new Car('Maruti',90001);

 console.log(vehicleObj.getCount())

 console.log(vehicleObj.getInfoCount())
 
 