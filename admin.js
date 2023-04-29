const MongoClient = require("mongodb").MongoClient;
const dbName = "mydatabase";
const { uuid } = require("uuidv4");


async function admin(req, res) {
    try {
      console.log("body", req.body);
      const uuid_ = uuid();
      console.log(uuid_);
      const client =await MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true });
      db = client.db(dbName);
      const collection = db.collection("admin");
      const newEmp = await collection.insertOne({
        user_id: uuid_,
        email: req.body.email,
        password: req.body.password,
      });
      res.send({
        success: true,
        message: "Account Created ",
        newEmp,
      });
    } catch (error) {
      console.log("error ", error);
    }
  }
  
  module.exports = admin