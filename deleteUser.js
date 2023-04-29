const MongoClient = require("mongodb").MongoClient;
const dbName = "mydatabase";

async function deleteOne(req, res) {
    console.log(req.body);
  try {
    const client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    db = client.db(dbName);
    const collection = db.collection("users");

    let result = await collection.deleteOne({user_id: req.body.user_id})
    res.send({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = deleteOne;
