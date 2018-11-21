const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Connects to the local mongodb
const uri = 'mongodb://localhost:27017/WeatherApp';
mongoose.connect(uri);

module.exports = { mongoose }
