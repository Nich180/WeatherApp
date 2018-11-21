const { MongoClient, ObjectID } = require('Mongodb');
const url = 'mongodb://localhost:27017/WeatherApp';
const dbname = 'WeatherApp';

MongoClient.connect(url, undefined,  (error, client) => {
  const db = client.db(dbname);
  const col = db.collection('Users');


//Finds one and only one then deletes
  col.findOneAndDelete({
    User: "Steven"
  }, (err, res) => {
    console.log(res)
  });

//Prints all data
  col.find({}).toArray((err, item) => {
    console.log(item);
  })
  client.close();
})
