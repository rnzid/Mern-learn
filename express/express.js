const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');


//await to make asynchronous
mongoose.connect('mongodb://localhost:27017')
.then(res => {
  console.log("mongo connected")
}).catch(err=>{
  console.log(err)
})


//global middleware
//next() = call the next middle wire in line
app.use((req,res,next)=>{
    console.log("middlewire");
    return next();
    console.log("after middlewire");

})

app.use(express.static('Public'))

//app.use(bodyParser.json())

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

const auth_middlewire = (req,res,next)=>{
  let auth_status=false;
  if (auth_status) {
    console.log("auth middlewire");
    next();
  } else {
    res.status(401)
    next({err:"adjhskadskjdb"})
  }
  
}
app.use(auth_middlewire);

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("Post")
})

app.use("",(req,res)=>{
  res.send({msg:"404 page not found"})

})
app.use("",(err,req,res,next)=>{
  res.send(err)

})
app.listen(8000,(err,data)=>{
  console.log("listening");
})


