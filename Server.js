let express = require('express');
const dbInit = require('./mongo');
const login = require('./Signin');
const signup = require('./Signup');
const dashboard = require('./Dashboard');
const middleWare = require('./middleware');
let cors = require("cors");
const fetchData = require('./api');
const deleteOne = require('./deleteUser');


let  app = express();
app.use(express.json())
app.use(middleWare)
app.use(cors())
app.get('/', function (req, res) {
   res.send('Matrimonial !');
})
app.post('/login', login)
app.post('/signup',signup)
app.get('/dashboard/fetchData',fetchData)
app.delete('/dashboard/delete',deleteOne)

dbInit()

app.listen(3020, ()=>{
    console.log("Server Connected to https://localhost:3020")
})