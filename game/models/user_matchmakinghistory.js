const mongoose = require('mongoose')

const UserMatchmakinghistorySchema = new mongoose.Schema({
    playerid:{
        type: String,
        required: true
    },
    matches:{
        type: [match]
    }
})

var match = new mongoose.Schema({
    matchid:{
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
})

mongoose.model("UserMatchmakinghistory", UserMatchmakinghistorySchema)