var express = require('express');

var index = require('./routes/index.js');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

<<<<<<< HEAD
var server = app.listen(process.env.PORT || 4000, function() {
=======
var server = app.listen(3000, function() {
>>>>>>> 3b3b279a70917c0e7c08bb6d195802479d5e02d7
  var port = server.address().port;
  console.log('listening on port:', port);
})
