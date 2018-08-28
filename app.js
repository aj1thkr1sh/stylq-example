/*
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome');
    }
});

server.listen(80);
*/
const express = require('express');
const app = express();
const stylq = require('stylq');
const routesController = require('./controllers/routesController');
const preprocessor = require('./preprocessor');

preprocessor.make();

app.use(express.static('./public'));
routesController(app);

app.listen(80);
console.log('Server On......');
