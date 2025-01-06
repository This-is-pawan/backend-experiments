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
  ],
  };
  res.end(JSON.stringify(course))
 };
 if (req.url=='/') {
  
  res.end('home')
 };
});
server.listen("5000")
//  This way is not enough for conditions so we work with express