const MongoClient = require("mongodb").MongoClient;
const dbName = "mydatabase";
async function login(req, res) {
  try {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    console.log("username", email, password);

    // MongoClient.connect(process.env.DB_URL, function (err, client) {

    const client = await MongoClient.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    const db = client.db(dbName);
    const collection = db.collection("users");
    const result = await collection.findOne({ email: req.body.email , password: req.body.password });

    if (!result) {

        const collection = db.collection("admin");
        const result = await collection.findOne({ email: req.body.email , password: req.body.password });
        if(result){
            res.send({
                success: true,
                result,
                status : "admin"
              });
        }else{
            res.send({
                success:false,
                message : "Invalid Credentials"
              });
        }
   
    } else if (result) {
        res.send({
            success: true,
            result,
            status : "user"
          });
    }
    client.close();
  } catch (error) {
    console.log(" error", error);
  }
}

module.exports = login;
