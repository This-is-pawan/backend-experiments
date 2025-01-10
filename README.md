<!-- ######  BACK END    ####### -->
1)First of all we install node LTS version  link:https://nodejs.org/en
2)install vs code 

NOTE:we can also  .env import in it 
firstly we create a package.json it is use for empty node application ( use cmd : npm init OR npm init -y 
)
  Add this code in package.json
  "scripts": {
    "start": "node index.js"
  },


3) creata file name is index.js

4)install expres cmd: npm i express 
offical link:
https://expressjs.com/en/starter/hello-world.html
5)npm i dotenv 
if you save your port 
require('dotenv').config() or import 'dotenv/config'
console.log(process.env) // 

click getstarted the hello world example
this 
const express = require('express')
//** */ import express from "express" 
above and this line is same it is common js and above is module js style
const app = express()
//** */ app have a many kind of fuctionality like MATH.many
const port = 3000
<!-- any 65thousand+ port free and payed -->
app.get('/', (req, res) => {
  res.send('Hello World!')
})

1) about get: is a method what should do you do e.g post,send,delete etc
2)/ it is a route which page data show you the client and server e.g /aboutpage,/contactpage i.e it is a part of URL 
3) After coma send is a callback function with two parameter in it request,response
read more API reference 4.x
https://expressjs.com/en/4x/api.html


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


