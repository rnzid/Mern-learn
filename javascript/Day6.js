// let arr= [1,2,3,4,5]

// for (let i = 0; i < arr.length; i++) {
//     const Index = arr[i];
//     console.log("index",i,"Value",Index)
    
// }

//let arr = [2,3,"asd",{a:1,b:2,c:[1,2,3]},undefined,null]

// let arr1=[1,2,3,4]

// //console.log([...arr1,3])

// //arr1.push(3)
// //arr1.unshift(0)
// //arr1.pop()
// //arr1.shift()
// //arr1.splice(2,1)
// arr2=arr1.slice(1,3)

// console.log(arr1);
// console.log(arr2);


// arr = [1,2,3,4,5,6]

// arr2 = arr.filter(element=> {
//     if (element == 2) {
//         return true
//     }

// })

// console.log(arr);
// console.log(arr2);


//arr1=[0,1,2,3]

//output=>[0,2,4,6]

// arr = [1,2,3,4,5,6]

// arr2 = arr.map(el=> {
//    return el*2
// })

// console.log(arr);
// console.log(arr2);


arr=[1,2,3]
arr2=[]
for (let i = 0; i < arr.length; i++) {
   arr2[i] = arr[i]*2;
}
console.log(arr);
console.log(arr2);


//JavaScript program to swap two variables

//take input from the users
let a = 4;
let b = 2;

//using destructuring assignment
[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

//JavaScript program to swap two variables

//take input from the users
let a1 = 4;
let b1 = 5;

// addition and subtraction operator
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("The value of a after swapping:" ,a1);
console.log("The value of b after swapping:" ,b1);