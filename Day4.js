// let num1 = 4
// let num2 = 3


// // function(<parameter>,<Parameter>)
// function Sum(Value1,Value2) {
//     //function calculation
//     let Add= Value1+Value2
//     return Add
// }


// //calling a function

// let summed = Sum(3,5)
// console.log({summed});

//Arrow function
//const calculator = (Value1,Value2) => Value1 - Value2 //single line arrow function
// const calculator = (Value1,Value2) =>{ 
//     let Value3 = Value1 - Value2 
//     return Value3
// }


// let diff = calculator(6,3)

// console.log({diff});

var num1= 2
let num2=6
const num3 = 8

if (true) {
    //block scope let const variable
    var num1=11 //globle scope
    let num2=333//block scope
    const num3=88//block scope
    
}

function testScope(){
//block scope let const variable
    var num1=1111 //globle scope
    let num2=33333//block scope
    const num3=8833//block scope
    

    
}

let testScope2=()=>{
    //block scope let const variable
    var num1=1111 //globle scope
    let num2=33333//block scope
    const num3=8833//block scope
    

}
testScope()
console.log({num1})
console.log({num2})
console.log({num3})


//Normal vs pass by refrence