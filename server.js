//Creating server Name
var http = require('http');
http.createServer((req,res)=>{
    res.write (" Hello!")
    res.end();
    console.log(" loading...")
}).listen(1421)

//Changing Server Name
var http = require('http');
http.createServer((req,res)=>{
    res.write (req.url);
    res.end();
    console.log(" loading...")
}).listen(1421)
 
// Reading Server
var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('Happy.txt',(err,data)=>{

    res.write(data);
    res.end();
})
    console.log('srever is loading...')
}).listen(7322)

// Append the Server

var http=require('http');
var fs=require('fs');
http.appendserver((req,res)=>{
    fs.readFile('Happy.txt',"Thank you",(err,data)=>{

    res.write(data);
    res.end();
})
    console.log('srever is adding...')
}).listen(7133)