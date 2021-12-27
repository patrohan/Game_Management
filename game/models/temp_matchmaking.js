const mongoose = require('mongoose')

const TempMatchmakingSchema = new mongoose.Schema({
    matchid:{
        type: String,
        required: true
    },
    servername:{
        type: String,
        required: true
    },
    player1:{
        type: String,
        required: true
    },
    player2:{
        type: String,
        required: true
    }
})

mongoose.model("TempMatchmaking", TempMatchmakingSchema)