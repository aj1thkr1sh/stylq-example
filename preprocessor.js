module.exports.make=function(){
  const stylq = require('stylq');
  const files = {'./preprocessor/index.stylq':'./views/index.html',
                 './preprocessor/about.stylq':'./views/about.html'
                };
  /*
  stylq.processAndSend('./preprocessor/index.stylq','./views/index.html');
  stylq.processAndSend('./preprocessor/about.stylq','./views/about.html');
  */

  for(var key in files){
    console.log(key+' '+files[key]);
    stylq.processAndSend(key,files[key]);
  }
}
