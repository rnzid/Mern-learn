let fruit1 = "apple"
let fruit2 = "mango"
let age = 24

let arry = [fruit1,fruit2,age]
// indexing in array always start from zero


//primitive data and non primitive data types
//primitive 
// Number
// string
// Boolean
// null
// undefined
// non primitive
// Object
// javascript object

console.log({arry})
console.log(arry[0])

let obj = {
    value:"key", // key are aslo refered to as attribute. property
}

console.log(obj)
let value1;
let value=null;
let obj2 = {
    "key":value1, // key are aslo refered to as attribute. property
    "add":value, // key are aslo refered to as attribute. property
    "arr":arry, // key are aslo refered to as attribute. property

}

console.log(obj)
console.log(obj2)



//operatory
// Assignment // = 
// bitwise
// arthmetic

// +	Addition
//let c=a+b // where a=1 ,b=2 =>3

// -	Subtraction
// " 
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
let num1=100
//num1++
console.log(num1)


//pre increment and postincrement
//post increment // return value before it increment
//pre increment //return value after it was incremented
let num2=100
//num1++
console.log(num1)
let num3=100
//num1++
console.log(++num1,num3)
console.log(num1++,num1)





// --	Decrement
// logical
//logical return only one value ie boolean true or false

//AND return true if all condition true
// return true if any one is true
// NOT reverese of bool

let stat = true
let stat2 = true
let stat3 = false

console.log("AND",(stat && stat2) && stat3);
console.log("OR",(stat && stat2) || stat3);
console.log("OR",stat || (stat2 && stat3));
console.log("NOR",!((stat && stat2) || stat3));




// comparision
//to check the contain data
// greather than  or less than
// ==   equal to
// !=  Not equal to


// strick check ===
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false

console.log(false === false);
// expected output: true

// falsy values