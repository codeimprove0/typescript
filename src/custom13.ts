 
/*  Duck-typing
 In duck-typing, two objects are considered to be of the same type if both share the same set of properties. 
 
 When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck
 */

 interface Identity{
     email_id:string,
     phone_no:number
 }

 function getClgInformation(student:Identity,parents:Identity):Identity{
     return {
         email_id:'teacher@gmail.com',
         phone_no:9000009091
     }
 }

 let fobj:Identity = {
     email_id:'student@gmail.com',
     phone_no:8900989091
 }


 let sobj:Identity = {
    email_id:'parents@gmail.com',
    phone_no:8100989091
}

console.log(getClgInformation(fobj,sobj))