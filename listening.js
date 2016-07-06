var express = require('express');
var app  = express();


console.log('Listen Bot activated');
app.listen(3000);

app.get('/',function (req, res){
  res.send('hello');
});
