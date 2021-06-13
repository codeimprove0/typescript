///  <reference path="./custom16-2.ts"/>
namespace Market{

    export class Shoes implements ShoesInt {
        sBrand:string;
        name:string = 'test';
        constructor(sBrand:string){
            this.sBrand = sBrand;
        }
        getShoes(){
            return 'Bata,Sparx, Addidas '+this.sBrand;
        }
    }

    export function area(){
        return "India"
    }
 }

 let mkt =  new Market.Shoes('Nike');

 console.log(mkt.getShoes())

 console.log(Market.area())