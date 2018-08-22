var path = require('path');
module.exports = function(app){

    app.get('/',(req,res)=>{
        res.sendFile(path.resolve('./views/index.html'));
    });
    app.get('/about',(req,res)=>{
        res.sendFile(path.resolve('./views/about.html'));
    });
}
