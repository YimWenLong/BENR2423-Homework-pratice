require ("sslkeylog").hookAll();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:123abcdghhgg3455@sandbox.twx68.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB')
    client.db().admin().listDatabases().then(result => {
        console.log(result);
      })
      client.db('sample_training').listCollections().toArray().then(result => {
        console.log(result);
      })
      client.db('sample_training').collection('zips').find({'city':'CLEVELAND'}).toArray().then(result=>{
        console.log(result);
      })

  // const collection = client.db("test").collection("devices");

  // client.close();
});
