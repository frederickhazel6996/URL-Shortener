var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Database Schema
var urlSchema = new Schema({
    original_url: String,
    url_identifier: String,
    date_created: String
});

//User Schema
var urls = mongoose.model('urls', urlSchema);

module.exports = urls;
