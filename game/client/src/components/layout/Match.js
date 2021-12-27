import React, { Component } from "react";
import matchmaker from "simple-matchmaker";
const { io } = require("socket.io-client");

var gameSocket;
var gameid = 1;
//var room = io.sockets.adapter.rooms[gameid];

// var socket = io();

const notify = (result) => {
    console.log("Room is full, match will start now")
    console.log(result);
    gameid++;
};

class Match extends Component {
    render() {
        return (
            <div>
                Welcome to Game arena 
            </div>
            // <div>
            //     {% if room.length == 1} 
            //         Waiting for player
            //     {% else %} 
            //         Room full, start game
            //     {% endif %}
            // </div>

        )
    }
}

export default Match;
/*
//old code
class Match extends Component {
    constructor() {
        super();
        this.state = {
          name: ""
        }
    }
    onSubmit = e => {
        console.log("In Submit button")
        e.preventDefault();
        //addPlayer()
        //add this player to matchmakers queue
        const data= {
            name : this.state.name,
            gameid : gameid
        };
        console.log(data)
        const check = matchmaker.fifomatch.addPlayer(data.name, notify)
        //playerJoinGame(data)

    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
       };
  render() {
    return (
        <div>
            Welcome to Game arena
            <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
            <button className="btn-flat waves-effect"><a href="/">Back to Home</a></button>
            <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  onClick={this.onSubmit}
                >
                  Add Player
                </button>
        </div>

    )
  }
}

function addPlayer(){
    matchmaker.fifomatch.addPlayer('Alessio',notify);
    matchmaker.fifomatch.addPlayer('John',notify);
}
*/
