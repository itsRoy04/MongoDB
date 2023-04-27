const mongo = require("mongoose");

const userSchema = new mongo.Schema({
    user_id:{
        type: String,
        required: true,
    },    
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    
})

const USER = mongo.model('user',userSchema)

module.exports =  USER