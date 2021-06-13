
 

/*  function getValue(item:number):number {
     return item;
 } */

/*  let values = getValue('Hello Code Improve')
 console.log(values) */

/*  let values = getValue(12)
 console.log(values) */
 
/*  
 function getValue<T>(item:T):T {
    return item;
} 
 let values = getValue([12,13])
 console.log(values) */


/*   
function getValue<T,U>(item:T,name:U):U {
    return name;
} 
 let values = getValue([12,13],'Test')
 console.log(values) */

 class Persons{
     firstname:string;
     lastName:string;

     constructor(fname:string,lname:string){
         this.firstname = fname;
         this.lastName = lname;
     }
 }
 
 class Persons2{
    firstname:string;
    lastNames:string;

    constructor(fname:string,lname:string){
        this.firstname = fname;
        this.lastNames = lname;
    }
}

 function messages<T extends Persons> (per:T):void {
     console.log(per) 
 }

 var per = new Persons('Code','Improve')
 console.log('hell',per)
 messages(per)