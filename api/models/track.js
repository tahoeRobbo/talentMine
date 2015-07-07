var mongoose = require('mongoose');

var labelSchema = mongoose.Schema({
	name : String,
	genre : String, 
	artists : []
});

module.exports = mongoose.model('track, trackSchema');