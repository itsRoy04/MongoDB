const MongoClient = require("mongodb").MongoClient;
const dbName = "mydatabase";

async function fetchData(req, res) {
  try {
    const client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    db = client.db(dbName);
    const collection = db.collection("users");

    let result = await collection.find({}).toArray();
    res.send({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = fetchData;
