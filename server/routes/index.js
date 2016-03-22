var express = require('express');
var path = require('path');

var router = express.Router();


router.get('/', function(request, response) {
  console.log('index.js is working');
  response.sendFile(path.join(__dirname, '../public/views/mainPage.html'));
})

module.exports = router;
