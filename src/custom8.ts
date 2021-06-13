
 
 class Bike{

    model:number=2012;
    color:string;
    constructor(){
        this.color = 'White & Black';
    }

    getColor(param?:string){
        let bikeClr = param ||  this.color;
        return `Your bike color is ${bikeClr}`
    }
 }


 let bikeObj = new Bike();

 console.log(bikeObj.model)
 console.log(bikeObj.color)
 console.log(bikeObj.getColor('Red'))

 console.log(bikeObj.getColor())
