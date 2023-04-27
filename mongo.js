const MongoClient = require('mongodb').MongoClient;
const dbName = 'mydatabase';
require('dotenv').config()

const dbInit = async() =>{
  MongoClient.connect(process.env.DB_URL, function(err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    client.close();
 });

    
}
module.exports =  dbInit