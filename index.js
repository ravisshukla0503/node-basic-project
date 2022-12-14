const http = require('http');
const fs = require('fs');
const port = 8080

const server = http.createServer((req, res)=>{
    
    if(req.url=="/"){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.readFile('index.html' , (error, data)=>{
            if(error){
                res.writeHead(400);
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(req.url=="/about"){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.readFile('about.html' , (error, data)=>{
            if(error){
                res.writeHead(400);
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(req.url=="/contact"){
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.readFile('contact.html' , (error, data)=>{
            if(error){
                res.writeHead(400);
            }else{
                res.write(data);
            }
            res.end();
        })
    }else{
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        fs.readFile('404.html' , (error, data)=>{
            if(error){
                res.writeHead(400);
            }else{
                res.write(data);
            }
            res.end();
        })
    }
});

server.listen(port);
