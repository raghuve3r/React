var express = require('express');
const path = require('path');


//create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req,res,next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url);
  }
});


app.use(express.static('public'));

//
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// });

app.listen(PORT, function(){
  console.log('Port is up on the port'+PORT);
});