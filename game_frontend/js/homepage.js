var Socket = io("http://localhost:4000")
Socket.on("connect",()=>{
    console.log("Connected to socket Server")
})

function onSubmit(){
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
                document.getElementById("displayMessage").innerHTML="Waiting for a player to match"
                //input.value = 'Waiting for a player to match';
            }else if(count ==2){
                document.getElementById("displayMessage").innerHTML="Match found! Let's play!"

                //input.value = 'Match found! Lets play';
                console.log("room id updated to " + gameId)
                setTimeout(function() { playMatch(gameId); }, 6000)
            }
        });
        Socket.on('matchend', function(msg, gameId){
            if(msg.includes("Won")){
                document.getElementById("displayMessage").classList.add("win")
                //get email of user and then call axios to update points
                let email = sessionStorage.getItem('email');
                axios.put(`http://localhost:4000/addpoint/${email}`).then(res=>{
                    if(res.data.success){
                        console.log("point added to user")
                        console.log("points:", JSON.stringify(res.data.user))
                    }else{
                        console.log(err);
                    }
                }).catch(function(error){
                    console.log(error)
                })
            }
            else{
                document.getElementById("displayMessage").classList.add("loose")
            }
            document.getElementById("displayMessage").innerHTML=msg


            //alert(msg)
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
