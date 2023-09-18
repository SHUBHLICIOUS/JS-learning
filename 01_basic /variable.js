// var, let & const 

const personId = 12345
let personName = "Shubhlicious"
var personEmail = "Shubh@gmail.com"
personCity = "Muzaffarpur"
let personState; // if we do not assign the value to the variable then output is "undefined"

/*  We cannot change const, If we try to change then node.js will give you error -
 "TypeError: Assignment to constant variable."
 personId = 2345 // NOT Allowed
 console.log(personId); 
*/


console.table([personId,personName, personEmail,personCity, personState ])

/* 
prefer to not use 'var' because of issue in block and functional scope 
 */