let express = require('express');
let  app = express();


app.get('/', function (req, res) {
   res.send('Matrimonial !');
})




app.listen(3010, ()=>{
    console.log("Server Connected to https://localhost:3010")
})