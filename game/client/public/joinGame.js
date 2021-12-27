import { Socket } from "socket.io";
import { io } from "socket.io-client";


document.getElementById('gameButton')
      .addEventListener('click', joinGame);

function myFunction(){
  console.log('asd');
  var socket = io();
        var label = document.getElementById('label');
        var input = document.getElementById('input');

        socket.on('roomcount', function (count, gameId) {
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
        socket.on('matchend', function(msg, gameId){
            alert(msg)
            const gameId1 = gameId;
            //socket.emit('closesocket', gameId1)
        })
        function endMatch(gameId){
            //add entry to db and disconnect socket
        }
        function playMatch(gameId){
            //take gameID of sockets, use random function and emit to server. In server use on func and route one to win and other to lose
            socket.emit('matchplayed', gameId)
        }
}



function joinGame() {
    var socket = io();
    //alert("hai");
    //console.log("roomID is " + variable.roomID)
    console.log('in join game')
    socket.emit('joinroom', roomID1);
}