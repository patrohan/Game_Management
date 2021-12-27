const mongoose = require('mongoose')

const MainServerListSchema = new mongoose.Schema({
    servername:{
        type: String,
        required: true
    },
    serverip:{
        type: String,
        required: true
    },
    totalplayers:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

mongoose.model("MainServerList", MainServerListSchema)