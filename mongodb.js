const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lucasflorentin:GgfRjmtA8q9BrcFP@cluster-test-1.gnl2331.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = client;