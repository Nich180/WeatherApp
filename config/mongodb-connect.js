const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/WeatherApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to Mongodb server.');
  }
  console.log('Succesfully conntected to Mongodb server.');
  const db = client.db('WeatherApp');

  // db.collection('Weather').insertOne({
  //   text: "The first weather input",
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('unable to insert weather', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Users').insertOne({
    User: "John",
    Age: "31",
  }, (err, result) => {
    if(err){
      return console.log("Unable to submit data", err)
    }
    console.log(JSON.stringify(result));
  });

  client.close();
});
