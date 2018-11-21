const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema design for the collection
var GeoTempSchema = new Schema({
  text: {
    type: String,
    required: true,
    min: 5,
    max: 25,
  }
});

var GeoTempModel = mongoose.model('GeoTemperature', GeoTempSchema);
//Models use the schema to create a document within a collection
//for instance, there is the WeatherApp collection.
//Within the collection there will be multiple documents
//Model helps create each and every document within the collection

module.exports = { GeoTempModel };
