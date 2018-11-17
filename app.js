var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b ==='number'){
        resolve (a + b);
      }else{
        reject `Invalid parameters`;
      }
    }, 1500);
  });
};

asyncAdd(5, 10).then((res) => {
  console.log(`Result: ${res}`);
  return asyncAdd(33, res);
  }, (errorMessage) => {
    console.log(errorMessage)
  }).then((res) => {
    console.log(`Should be 48, ${res}`)
  }, (errorMessage) => {
    console.log(errorMessage);
  });




const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./geocode/temperaturecode');

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.a, (results, errorMessage) => {
  let coordinates = results;
  console.log(`Longitude: ${coordinates[0]} Latitude: ${coordinates[1]}`);
  weather.getWeather(coordinates[1], coordinates[0], (results, errorMessage) => {
    let temperature = results;
    console.log(`Current temperature: ${temperature[0]} Apparent Temperature: ${temperature[1]}`);
  })
});
