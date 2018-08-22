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
//app.set('view engine','ejs');
stylq.processAndSend('./preprocessor/index.stylq','./views/index.html');
stylq.processAndSend('./preprocessor/about.stylq','./views/about.html');

app.use(express.static('./public'));
routesController(app);
app.listen(80);
console.log('Server On......');