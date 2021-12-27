const express=require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const path = require("path");
//const FileStore = require('session-file-store')(sessions);
const app=express()
const PORT=4000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
      origin: '*',
    }
  });
const mongoose = require('mongoose')
const bodyparser = require("body-parser");
const {MONGOURL} = require('./keys')
var variable1 = require('./variable')
const cors = require("cors");
const helmet = require("helmet");
// a variable to save a session
var session;

//cookie and sesh
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir464",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

require("./models/user")
require("./models/main_server_list")
require("./models/single_server_master")
require("./models/admin")


app.use(bodyparser.json());
app.use(cors());

app.use(express.json())
app.use(require('./routes/route'))

// cookie parser middleware
app.use(cookieParser());
// allow the app to use cookieparser
app.use(helmet());

// allow the express server to process POST request rendered by the ejs files 
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

// allow the express server to read and render the static css file
//app.use(express.static(path.join(__dirname, "..", "public")));
//app.set("view engine", "ejs");

// render the ejs views
//app.set("views", path.join(__dirname, "views"));

mongoose.connect(MONGOURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Connected to mongodb")
})

mongoose.connection.on("error", ()=>{
    console.log("Error!!")
})

//cookie
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        //expires: new Date('01 12 2021'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});

// get the cookie incoming request
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});

// delete the saved cookie
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie()
    res.send('Cookie has been deleted successfully');
});

// app.get('/logout',(req,res) => {
//     req.session.destroy();
//     res.redirect('/');
// });

app.get("/logout", (req, res) => {
    // clear the cookie
    res.clearCookie("email");
    // redirect to login
    res.type('.js')
    res.sendFile(__dirname + '/client/src/components/layout/test.js')
    //return res.redirect("/login");
  });
  
app.get('/matchmaking',(req,res)=>{
    //res.send("hello world")
    res.sendFile(__dirname + '/client/public/index1.html')
})

app.get('/joinGame.js',(req,res)=>{
    //res.send("hello world")
    res.sendFile(__dirname + "/client/public/joinGame.js")
})

app.get('/homepage', (req, res)=>{
    console.log(req.session)
    // session = req.session
    // if(session.id){
    //     res.sendFile(__dirname + '/client/public/homepage.html')
    // } 
     // check if user is logged in, by checking cookie
    let email = req.cookies.email;
    res.sendFile(__dirname + '/client/public/homepage.html')
    // render the home page
    // return res.render("homepage", {
    //     email,
    // });
})

app.get('/test', (req, res)=>{
    res.type('.js')
    res.sendFile(__dirname + '/client/src/components/layout/test.js')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('in chat msg server side')
        io.emit('chat message', msg);
        console.log('message: ' + msg);
      });
    socket.on('joinroom', function(roomID){
        console.log('in join room server part. game id is ' + variable1.gameId)
        const room = io.sockets.adapter.rooms.get(variable1.gameId);
        const nop = room ? room.size : 0;
        console.log('before joining room, nop is ' + nop);
        if(nop == 0){
            socket.join(variable1.gameId);
            const room = io.sockets.adapter.rooms.get(variable1.gameId);
            console.log(room)
            const nop1 = room ? room.size : 0;
            console.log('after joining room, nop is ' + nop1);
            socket.emit('roomcount', nop+1, variable1.gameId);
        }else if(nop == 1){
            socket.join(variable1.gameId);
            variable1.gameId = variable1.gameId + 1;
            const room = io.sockets.adapter.rooms.get(variable1.gameId-1);
            const nop2 = room ? room.size : 0;
            console.log('room full. game id is ' + variable1.gameId)
            console.log('after joining room, nop is ' + nop2);
            io.sockets.in(variable1.gameId-1).emit('roomcount', nop2, (variable1.gameId-1))
        }
        console.log('number of players in room is ' + (nop+1))
        //io.sockets.in(variable1.gameId).emit('roomcount', nop+1)
        //socket.emit('roomcount', nop+1);
    })
    socket.on('matchplayed', function(gameId1){
        console.log('Match ended for game room: ' + gameId1);
        const gameId2 = gameId1;
        const room = io.sockets.adapter.rooms.get(gameId1);
        const nop = room ? room.size : 0;
        console.log('nop in room are ' + nop)
        count=0;
        x = (Math.floor(Math.random() * 2) == 0);
        if(x){
            for(const roomid of room){
                if(count==0){
                    const playerSocket = io.sockets.sockets.get(roomid);
                    playerSocket.emit('matchend', 'You Won!!', gameId2)
                }else{
                    const playerSocket = io.sockets.sockets.get(roomid);
                    playerSocket.emit('matchend', 'You Lost!!', gameId2)
                }
                count++;
            }
        }else{
            for(const roomid of room){
                if(count==1){
                    const playerSocket = io.sockets.sockets.get(roomid);
                    playerSocket.emit('matchend', 'You Lost!!', gameId2)
                }else{
                    const playerSocket = io.sockets.sockets.get(roomid);
                    playerSocket.emit('matchend', 'You Won!!', gameId2)
                }
                count++;
            }
        }
    })
    socket.on('closesocket', function(gameId1){
        console.log('Closing socket for game room: ' + gameId1);
        const room = io.sockets.adapter.rooms.get(gameId1);
        for(const roomid of room){
            const playerSocket = io.sockets.sockets.get(roomid);
            playerSocket.disconnect();
        }
    })
  });
  
server.listen(PORT, () => {
    console.log('listening on *:4000');
});
//http://localhost:4000/matchmaking
// app.listen(PORT,()=>{
//     console.log("Server is running on",PORT)
// })

//mongo connection string
//mongodb+srv://admin:admin@cluster.ue58t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
