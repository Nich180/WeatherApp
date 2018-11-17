const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/WeatherApp', (err, client) => {
  if(err){ return console.log(`Unable to fetch data: ${err}`)}

  const db = client.db('WeatherApp');
  const collection = db.collection('Users');
  collection.find(
    {
      _id: new ObjectID('5bebd6bd893e8f1d5590624a')
    }
  ).toArray().then((docs) => {
    console.log('WeatherApp - Data')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch data: ', err)
  })
})
