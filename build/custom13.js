"use strict";
/*  Duck-typing
 In duck-typing, two objects are considered to be of the same type if both share the same set of properties.
 
 When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck
 */
function getClgInformation(student, parents) {
    return {
        email_id: 'teacher@gmail.com',
        phone_no: 9000009091
    };
}
var fobj = {
    email_id: 'student@gmail.com',
    phone_no: 8900989091
};
var sobj = {
    email_id: 'parents@gmail.com',
    phone_no: 8100989091
};
console.log(getClgInformation(fobj, sobj));
