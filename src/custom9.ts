
 
 class Bikes{

    model:number=2012;
    color:string;
    namePlate:string
    dummy:string
    constructor(namePlate:string,dum?:string){
        this.color = 'White & Black';
        this.namePlate = namePlate
        this.dummy = dum || '';
    }

    getColor(param?:string){
        let bikeClr = param ||  this.color;
        return `Your bike color is ${bikeClr} & number plate will be ${this.namePlate} State`
    }

    getPrice(){ 
        return `1L- 2L ${this.namePlate} State ${this.dummy}`
    }
 }


 let bikeOb = new Bikes('HR','test');

 console.log(bikeOb.model)
 console.log(bikeOb.color)
 console.log(bikeOb.getColor('Red'))

 console.log(bikeOb.getColor())

 console.log(bikeOb.getPrice())

 let bikeOb2 = new Bikes('UP');

 console.log(bikeOb2.model)
 console.log(bikeOb2.color)
 console.log(bikeOb2.getColor('Red'))

 console.log(bikeOb2.getColor())

 console.log(bikeOb2.getPrice())
