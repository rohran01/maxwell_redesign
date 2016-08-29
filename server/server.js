var express = require('express');

var index = require('./routes/index.js');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(process.env.PORT || 4000, function() {
  var port = server.address().port;
  console.log('listening on port:', port);
})
