//console.log(global);
//console.log(process)
/* 
console.log(process.argv) */
/* 
console.log(111);
process.exit();
console.log(222);
 */


/* 
console.log(__filename);
console.log(__directory);
 */
/* 
core module
local module 
third party module
*/
// //common js
// const fs = require("fs")

//  //Es6 Module
// //import fs from "fs";


// //asynchronuos 
// fs.writeFile("custom.txt","random",(err,data)=>{
//     if (err) console.log({err});
//     console.log({data});
// }
// )
/*
console.log(222)


//syncronous
let status = fs.writeFileSync("custom2.txt","adssad");
console.log({status});
console.log(333);

fs.readFile("./custom.txt",(err,data)=>{
    console.log(data.toString());
})

 */
//

// fs.readFile("./custom.txt","utf-8",(err,data)=>{
//     //console.log(data.toString());
//     console.log(data);

// })

/* const path = require("path")
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.join("custom",__filename));

 */

//Buffer => use data in bainary from in bytes
/* 
C-create
R-read
U-update
D-delete
 */

// fs.appendFile("custom.txt", ' This is my text.',(err,data)=>{
//     if (err) console.log({err});
//     console.log("updated");
//   });


//   fs.unlink('custom.txt', (err,data)=>{
//     if (err) console.log({err});
//     console.log("deleted");
//   });



const auth = require("./auth.js")


console.log(11);
//console.log({auth})

//default call
// auth();

//alternative
// auth.login();
// auth.signup();

console.log(22222);

//http module

const http = require("http")
const fs = require('fs')

const server = http.createServer((req,res)=>{
    // console.log("Request accepted");
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("req acpt")
    const html = fs.readFileSync("../index.html")
    console.log(req.url);
    res.end(html);
})

server.listen(8000,()=>{
    console.log("listening");
})
/* 
GET -read
POST -create
PUT / PATCH - update
DELETE -delete
*/ 
// const http = require('http');
// const server = http.createServer((req, res)=> {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   //Return the url part of the request object:
//   res.write(req.url);
//   res.end();
//  })
//  server.listen(8000);
