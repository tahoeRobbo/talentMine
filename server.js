var express = require('express');

var app = express();

app.get('/', function(req, res) {
	return res.json({message : "hello World"});
});

app.listen(8888, console.log('listening on port 8888'));