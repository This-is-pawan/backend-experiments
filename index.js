let http=require("http");
let server=http.createServer((req,res)=>{
 
 if (req.url=='/course') {
  let course={
   status:'1',
   data:[
    {name:'harry',
    company:'abc',
   },
   {name:'sham',
    company:'db',
   }
     {
         produtcs: "looper",
          nameof: "skin care",
  },
   {
    
          name: "sham",
          company: "db",
    },
  ],
  };
  res.end(JSON.stringify(course))
 };
 if (req.url=='/') {
  
  res.end('home')
 };
});
server.listen("5000")
//  This above written way is not enough for conditions so we work with express
let express=require('express');
let mongoose=require('mongoose');;
require('dotnev').cofig()

let app = express()

app.use(express.json());
app.post('/api/enquiry-insert',(req,res)=>{
  res.send('data saved')
});




mongoose.connect(process.env.DBURL).then(()=>{
  console.log('connected to mogodb');
   app.listen('3000');
   
  //  both can  use in it 
  // app.listen(process.env.PORT,()=>{
  //   console.log('server is running on port '+ process.env.PORT);
    
  // }); // In which we can use the arrow fuction

});
// it is a pomise 


import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {

    const fetchJokes = async () => {
      try {
        const response = await axios.get('http://localhost:4000/about');
        setJokes(response.data); 
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <>
      <h3 style={{ letterSpacing: '2px', textAlign: 'center' }}>
        Full Stack Project Experiment
      </h3>
      {jokes.map((item) => (
        <div className="joking" key={item.id}>
          <div>{item.text}</div>
        </div>
      ))}
    </>
  );
}

export default App;


const express = require("express");
// import express from "express" above and this line is same it is common js and above is module js style
require("dotenv").config();
// or import 'dotenv/config'

const app = express();
// app have a many kind of fuctionality like MATH.many
const port = 4000;

app.get("/", (req, res) => {
  res.send('homepage of jokes');
});
app.get("/about", (req, res) => {
  let jokes=[{
    id:1,
    text:' What does a storm cloud wear under his raincoat? Thunderwear.'
     
  },
  {
    id:2,
    text:' What does a storm cloud wear under his raincoat? Thunderwear.'
     
  },{
    id:1,
    text:' What does a storm cloud wear under his raincoat? Thunderwear.'
     
  }
  ]
  res.send(jokes);
});
app.listen(process.env.PORT||3000, () => {
  console.log(`Example app listening on port ${port}`);
});


