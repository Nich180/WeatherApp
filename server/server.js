const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./mongoose-config');
const { GeoTempModel } = require('./GeoTempModel');

var app = express();

app.use(bodyParser.json());

app.post('/Weather', (req, res) => {
  var weather = new GeoTempModel({
    text: req.body.text
  });

  weather.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('started on port 3000');
})
