var express = require('express');
const path = require('path');


//create app
var app = express();

app.use(express.static('public'));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, function(){
  console.log('Port is up on 3000');
});
