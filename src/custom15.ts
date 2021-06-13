 
 /* 
 Abstract Class
 Interface Vs  Abstract Class
 Abstract Class


Interface 
1) All members are abstract.
2) Interfaces support multiple inheritances.



Abstract 
1) Some members are abstract and some are fully implemented.
2) 	Abstract class does not support multiple inheritances.
3) We cannot create an instance of an abstract class.
 */ 

 abstract class Person{
    name:string;
    constructor(name:string){
        this.name = name
    }

    display():string{
        return 'Hello.....'
    }

    abstract find(name:string):any;
 }
 
 class Students extends Person{
    stdId:number;
    constructor(name:string,stdId:number){
        super(name)
        this.stdId = stdId
    }

    find(name:string){
        return `Your name is ${name}` 
    }  
 }

 let myStdData = new Students('Code Improve',117);
 console.log(myStdData.stdId)

 console.log(myStdData.find('Rahul'))