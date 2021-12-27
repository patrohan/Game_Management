const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    server:{
        type: String,
        required: true
    },
    ram:{
        type: String,
        required: true
    },
    graphics:{
        type: String,
        required: true
    },
    points:{
        type: Number,
        required: true
    }
})

mongoose.model("User", UserSchema)