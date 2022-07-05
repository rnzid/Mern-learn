const mongoose = require('mongoose');
const express = require('express')
const app = express()


//await to make asynchronous
mongoose.connect('mongodb://localhost:27017')
.then(res => {
  console.log("mongo connected")
}).catch(err=>{
  console.log(err)
})


app.use(express.json())


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
  res.send('Hello World')
})


app.listen(8000,(err,data)=>{
  console.log("listening");})