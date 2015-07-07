var express = require('express');
var mongoose = require('mongoose');
var Track = require('./api/models/track');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/talentmine');

var app = express();


app.use(bodyParser.json());



app.get('/', function(req, res) {
	return res.json({message : "hello World"});
});

//TRACKS//////////////////////////////////////////////
app.get('/api/tracks', function(req, res) {
	return res.json([]);
});

app.get('/api/tracks:track_id', function(req, res) {
	return res.json({
	
	});
});

app.post('/api/tracks', function(req, res) {
	return res.json({
		Track.create({
		name : req.body.name,
		genre : req.body.genre
	}, function(err, new_track) {
		if(err) {
			return res.status(500).end();
		}
		return res.json(new_track);
	})
	});
});

app.put('/api/tracks:track_id', function(req, res) {
	return res.json({
		name : "can I borrow a feeling"
	});
});

app.delete('/api/tracks:track_id', function(req, res) {
	return res.json({
		name : "can I borrow a feeling"
	});
});


//ARTIST//////////////////////////////////////////////
app.get('/api/artists', function(req, res) {
	return res.json([]);
});

app.get('/api/artists:artist_id', function(req, res) {
	return res.json({
		name : "Flaming Pussies"
	});
});

	//LABEL//////////////////////////////////////////////
app.get('/api/labels', function(req, res) {
	return res.json([]);
});


app.get('/api/labels:label_id', function(req, res) {
	return res.json({
		name : "TRIPPLE OG PRODUCTIONS: A HOOD COLAB"
	});
});

app.listen(8888, console.log('listening on port 8888'));