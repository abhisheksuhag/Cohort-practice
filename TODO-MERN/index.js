 // write basic express boilerplate code,
 // with express.json() middleware

 const express= require('express');
 const port=3000;
 const app= express();

 app.use(express.json());
 app.get("/todo", function(req, res){
        
 })

 app.post("/todos", function(req, res){

 })

 

 app.listen(port);