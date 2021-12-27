const express=require('express');
const router=express.Router();
const mongoose=require("mongoose")
const User=mongoose.model("User")
const MainServerList = mongoose.model("MainServerList")
const SingleServerMaster = mongoose.model("SingleServerMaster")
const Admin = mongoose.model("Admin")
const bcrypt=require('bcryptjs');
const session = require('express-session');

//admin can delete user
router.delete("/delete/:email", (req, res)=>{
    console.log(req.params.email)
    User.findOneAndRemove(
        {email : req.params.email}).exec((err, deleteItem)=>{
        if(err){
            res.send(err);
        }
        return res.json(deleteItem);
    });
});

//admin login
router.post('/adminlogin',(req,res)=>{
    console.log('in admin login route')
    var {email,password}=req.body
    //console.log(req.body)
    if(!email || !password )
    {
        return res.status(200).json({error:"Please add all fields"})
    }
    if(email == "admin@gmail.com" && password == "admin"){
        res.status(200).json({success:true});
    }else{
        return res.status(422).json({error:"Invalid Email or password"})
    }

    // Admin.findOne({email:email})
    // .then((savedUser)=>{
    //     if(!savedUser){
    //         return res.status(422).json({error:"Invalid Email or password"})
    //    }
    //     bcrypt.compare(password,savedUser.password)
    //     .then(match=>{
    //         if(match)
    //         {
    //             //session=req.session;
    //             //session.email=req.body.email;
    //             res.cookie("email", email);
    //             console.log(email)
    //             res.status(200).json({success:true});
    //             //res.redirect('http://localhost:4000/homepage')
    //         }
    //         else{
    //             return res.status(200).json({error:"Invalid email or password"})
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // })
})

//add point to user
router.put("/addpoint/:email", (req, res) =>{
    let email = req.params.email;
    console.log("in add point method--------")
    console.log(email)
    User.findOneAndUpdate(
        {email:req.params.email},{
            $inc:{
                'points' : 1
            }
        },
        (err, post)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
    // User.findByIdAndUpdate(
    //     {email:req.params.email},{
    //         $inc : {
    //             'points' : 1
    //         }
    //     },
    //     (err, post)=>{
    //         if(err) return res.status(400).json({success:false, err});
    //         return res.status(200).json({success:true});
    //     }
    // )
})

//update master server
router.put("/updateMainServer", (req, res) =>{
    var {name,username,email,password, password2, server, ram, graphics}=req.body
    console.log(server)
    MainServerList.findOneAndUpdate(
        {servername: server},{
            $inc : {
                'totalplayers' : 1
            } 
        },
        (err, mainserver)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
})

//update profile
router.put("/updateprofile", (req, res) =>{
    var {name,username,email}=req.body
    console.log("in update profile ")
    console.log(name)
    console.log(username)
    User.findOneAndUpdate(
        {email: email},{
            $set :{
                'name': name,
                'username': username
            }
        },
        (err, user)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        } 
    )
})

//add player to single server list
// router.post("/addPlayertoServer", (req, res) =>{
//     var {name,username,email,password, password2, server, ram, graphics}=req.body
//     console.log(email)
//     User.findOne({email: email}, function(err, savedUser)){
//         console.log(savedUser);
//     }
//     .then((savedUser)=>{
//         console.log(JSON.stringify(savedUser),"=======")
//         let id = savedUser.id;
//         let points = savedUser.points;
//         let player = {
//             username : username,
//             points : points
//         }
//         let SingleServerMasterObj = {
//             servername : servername,
//             players : player
//         }
//         const SingleServerMaster = new SingleServerMaster(SingleServerMasterObj)
//         SingleServerMaster.findOneAndUpdate(
//             servername,{
//                 $set : SingleServerMaster
//             },
//             (err, post)=>{
//                 if(err) return res.status(400).json({success:false, err});
//                 return res.status(200).json({success:true});
//             }
//         )
//         })
// })

//get all users
router.get("/userlist", (req, res)=>{
    User.find().exec((err, users)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true, users: users});
    })
})

//get top5 users according to points
router.get("/leaderboardlist1", (req, res)=>{
    User.find().sort({points:-1}).limit(5).exec((err, users)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true, users: users});
    })
})

//get mainserver list
router.get("/", (req, res)=>{
    MainServerList.find().exec((err, mainserverlists)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true, mainserverlists: mainserverlists});
    });
});

//add mainserver
router.post("/addMainServer", (req, res) => {
    const mainServerList = new MainServerList(req.body);
    mainServerList.save((err)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true});
    }) 
})

//add admin
router.post("/addAdmin", (req, res) =>{
    const admin = new Admin(req.body);
    admin.save((err)=>{
        if(err) return res.status(400).json({success:false, err});
        return res.status(200).json({success:true});
    })
})

//get detail about a server
router.get("/detail/:id", (req, res)=>{
    let id = req.params.id
 
    MainServerList.findById(id, function(err, mainserverlist){
        if(err) return res.json({success: false, error:err})
        return res.json ({success:true, mainserverlist})
    })
})

//update a server
router.put("/update/:id", (req, res)=>{
    MainServerList.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err, post)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
});

//update user
router.put("/updateUser/:id", (req, res)=>{
    User.findOneAndUpdate(
        {email : req.params.email},{
            $set : {
             'name':  req.params.name,
             'username': req.params.username,
             'email': req.params.email
            }
        },
        (err, post)=>{
            if(err) return res.status(400).json({success:false, err});
            return res.status(200).json({success:true});
        }
    )
})

router.get('/getUserprofile/:email', (req, res)=>{
    let email = req.params.email
    console.log(email, "=================")
    User.findOne({email: email}, function(err, user){
        console.log(user, "----------")
        if(err) return res.json({success: false, error:err})
        return res.json ({success:true, user})
    })
    
})
//login route
router.post('/login',(req,res)=>{
    console.log('in login route')
    var {email,password}=req.body
    //console.log(req.body)
    if(!email || !password )
    {
        return res.status(200).json({error:"Please add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or password"})
       }
        bcrypt.compare(password,savedUser.password)
        .then(match=>{
            if(match)
            {
                //session=req.session;
                //session.email=req.body.email;
                res.cookie("email", email);
                console.log(email)
                res.status(200).json({success:true});
                //res.redirect('http://localhost:4000/homepage')
            }
            else{
                return res.status(200).json({error:"Invalid email or password"})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
})


//signup route using hashing
router.post('/signup',(req,res)=>{
    var {name,username,email,password, password2, server, ram, graphics}=req.body
    var points = 0;
    console.log(req.body)
    if(password != password2){
        return res.status(200).json({error:"Passwords don't match"})
    }else if(!email || !password || !name || !username || !password2)
    {
        return res.status(200).json({error:"Please enter all data"})
    }
    
    bcrypt.hash(password,12)
    .then((hashedpw)=>{
        User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
                 return res.status(422).json({error:"User already exists with that email"})
            }
            const user=new User({
             points,
             graphics,
             ram,
             server,
             email,
             password:hashedpw,
             username,
             name,
         })
         user.save()
         .then((user)=>{
            res.status(200).json({success:true});
            console.log(user.email)
         })
         .catch((err)=>{
             console.log(err)
         })
    })
    .catch((err)=>{
        console.log(err)
    })   

})
.catch((err)=>{
    console.log(err)
})
})


// router.post('/signup',(req,res)=>{
//     var {name,username,email,password}=req.body
//     console.log(req.body)
//     if(!email || !password || !name || !username)
//     {
//         return res.status(422).json({error:"Add all data"})
//     }
//     User.findOne({email:email})
//    .then((savedUser)=>{
//        if(savedUser){
//             return res.status(422).json({error:"User already exists with that email"})
//        }
//        const user=new User({
//         email,
//         password,
//         username,
//         name,
//     })
//     user.save()
//     .then((user)=>{
//         res.json({message:"Saved Successfully"})
//         console.log(user.email)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
// })

module.exports=router
