const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    matchid:{
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
    },
    winner:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required : true
    }
})

mongoose.model("Match", MatchSchema)