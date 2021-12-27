import React, { Component } from "react";
import { io } from "socket.io-client";
import "./homepageNew.css"
console.log('working fine')
var Socket = io()
Socket.on("connect",()=>{
    // alert("connected")
})
class Test extends Component {
  render() {
    return (
        <div className="header" >
            <section className="headerClass">

            </section>  
            <h1>Welcome to Homepage12!!</h1>
    <div className="col s11">
        <input type="submit" value="Join match" onClick="joinGame();" />
        <button id="gameButton">Join Match1</button>
        <button className="btn-flat waves-effect"><a href="http://localhost:4000/matchmaking">Matchmaking</a></button>
    </div>
    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
                  Play Game
                </button>
              </div>
    <div className="col s11">
        <button className="btn-flat waves-effect"><a href="http://localhost:4000/logout">Logout</a></button>
    </div>
        </div>
    )
  }

onSubmit(){
    console.log('inside function')
    var roomID1 = 1;
 
    
    Socket.emit('joinroom', roomID1);

        var label = document.getElementById('label');
        var input = document.getElementById('input');
        Socket.on('roomcount', function (count, gameId) {
            // const room = io.sockets.adapter.rooms.get(gameId);
            // const nop = room ? room.size : 0;
            console.log('in joinroom of client. players are ' + count)
            var item = document.createElement('div');
            if(count == 1){
                alert("Waiting for a player to match")
                //input.value = 'Waiting for a player to match';
            }else if(count ==2){
                alert("Match found! Let's play!")
                //input.value = 'Match found! Lets play';
                console.log("room id updated to " + gameId)
                setTimeout(function() { playMatch(gameId); }, 6000)
            }
        });
        Socket.on('matchend', function(msg, gameId){
            alert(msg)
            const gameId1 = gameId;
            //socket.emit('closesocket', gameId1)
        })
        function endMatch(gameId){
            //add entry to db and disconnect socket
        }
        function playMatch(gameId){
            //take gameID of sockets, use random function and emit to server. In server use on func and route one to win and other to lose
            Socket.emit('matchplayed', gameId)
        }
}

}

export default Test;