// function fun1() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const error=true;
//       if (!error) {
//         console.log("sucessful");
//         resolve();
//       } else {
//         console.log("reject");
//         reject("false");
//       }
//     }, 2000);
//   });
// }
// fun1().then(function() {
//     console.log("thanks");
// }).catch(function (error) {
//     console.log("sorry"+ error);
// })


///this is a complex feature

// try{
// let a = c + d;
// console.log(a);
// }
// catch(err){
//   console.log({err});
//   console.log("responce ... ");
// }



//--event queue, event loop,call stack queue


// console.log(1);
// console.log(1);
// //macrotask
// setTimeout(() => {
//   console.log("inside ime out");
// }, 1000);
// //microtask
// prm1 = new Promise((resolve,reject)=>{
//   resolve("true from promise");
// })
// prm1.then(res=>{
//   console.log(res);
// }).catch(fail=>{console.log(fail);})
// console.log(3);
// console.log(4);

//assignment "object literal"
/* 
JS Escape Characters
\' — Single quote
\" — Double quote
\\ — Backslash
\b — Backspace
\f — Form feed
\n — New line
\r — Carriage return
\t — Horizontal tabulator
WebsiteSetup.org - Beginner’s Javascript Cheat Sheet 7
\v — Vertical tabulator */