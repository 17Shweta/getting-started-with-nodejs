//use this command to install packages
//npm install express

//code for express handler
const express = require('express')

//code to start express
const app = express();

//to handle lots of req and response
app.get('/',function(req,res){
    res.send('Hello world')
    console.log('done')
})


//to start server use app.listen() and inside this pass port no. for ex 9000
//to see if the server is running or not use the function 

app.listen(9000,function(req,res){
    console.log('Running...')
})

//write http://localhost:9000/shweta  on browser to see the o/p 
app.get('/shweta',function(req,res){
     //use this url http://localhost:9000/shweta?id=24
     const id = req.query.id
    res.send('Hello shweta '+id)
})

//also mentioning the port no.
app.get('/shweta/20',function(req,res){
    res.send('Hello shweta you are called at port no. 20')
})


// what is we wanna call port no. dynamically
app.get('/shweta/:id',function(req,res){
    const id = req.params.id
    res.send('Hello shweta you are called at port no. '+id)
})


