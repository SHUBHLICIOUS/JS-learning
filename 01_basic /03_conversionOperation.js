// Conversion 

let marks = "74"

// console.log(typeof marks);  // string
// console.log(typeof (marks)); // string 


let newMarks = Number(marks)
// console.log(typeof newMarks); // number
// console.log(typeof(newMarks)); //number
// console.log(newMarks); // 74

let someMarks ="74dshjg"
// console.log(typeof(someMarks)); //string

let newSomeMarks = Number(someMarks)
// console.log(newSomeMarks);
// console.log(typeof(newSomeMarks));

//  "74" => 74 
// "74dshjg" => NaN -> Not a number
// true =>1 / false=> 0

let isLoggedIn = "Shubh"

let shubhIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof shubhIsLoggedIn); // boolean
// console.log(shubhIsLoggedIn); // true

let isLoggedOut = ""
let shubhIsLoggedOut = Boolean(isLoggedOut)
// console.log(typeof shubhIsLoggedOut); // boolean
// console.log(shubhIsLoggedOut); // false

//  "Shubh" => true
//  "" => false

let number = 32

let stringOfNumber = String(number)

// console.log(stringOfNumber);
// console.log(typeof stringOfNumber);  // string


// ******** Operation ********


// console.log(2+2);
// console.log(2-2);
// console.log(2*2)
// console.log(2/2);
// console.log(2%2);


// console.log(2+ "2");
// console.log("2"+ 2);
// console.log(2+ 2+ "2");
// console.log("2"+2 +2);


let num = 100
let num1 = ++num
let num2 = num++
// console.log(num1, num2);


let str1 = "Hello"
let str2 = " Shubh"

console.log(str1 + str2); // Hello Shubh