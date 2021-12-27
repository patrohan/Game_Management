const mongoose = require('mongoose')


const player = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    points:{
        type: Number,
        required : true
    }
})

const SingleServerMasterSchema = new mongoose.Schema({
    servername:{
        type: String,
        required: true
    },
    players:{
        type: [player]
    }
})

mongoose.model("SingleServerMaster", SingleServerMasterSchema)