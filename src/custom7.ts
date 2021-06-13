 
 interface userInfo{
     firstName: string,
     lastName: string,
     userId: number,
     status: boolean,
     mobile: number,
     age?:number,
     fullName:()=> string
 }

 var obj:userInfo = {
     firstName:'Code',
     lastName:'Improve',
     userId: 117,
     status:true,
     age:5,
     mobile:9876543210, 
     fullName: function(){
         return `${this.firstName} ${this.lastName}`
     }
 }

 console.log(obj)
 console.log(obj.fullName())



 interface customObj{
    size:number,
    label:string,
    extra?:string
 }

 function printData(params:customObj){
     console.log(params)

 }
 let myObj = {
     size:10, label:'test' 
 }
 printData(myObj);