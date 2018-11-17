const request = require('request');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/e499db9bc06611cc8be9846e3283a10b/${lat},${lng}`,
    json: true
  }, (error, response, body) => {

    if (!error && response.statusCode === 200) {
      const { temperature, apparentTemperature } = body.currently;
      callback( [ temperature, apparentTemperature] );
    } else { callback('Unable to fetch weather.'); }
  });
};

module.exports = { getWeather }
