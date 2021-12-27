let email = sessionStorage.getItem('email');
    axios.get(`http://localhost:4000/getUserprofile/${email}`).then((res)=>{
        if(res.data.success){
            console.log("in here");
            let abc = JSON.stringify(res.data.user)
            console.log("user:", JSON.stringify(res.data.user))
            var user = res.data.user
            document.getElementById("name").innerHTML = user.name;
            document.getElementById("username").innerHTML = user.username;
            document.getElementById("points").innerHTML = user.points;
            document.getElementById("profilename").value = user.name;
            document.getElementById("profileusername").value = user.username;
        }
})

function displayform(){
    document.getElementById("name").style.display = "none";
    document.getElementById("username").style.display = "none";
    document.getElementById("profilename").style.display = "inline-block";
    document.getElementById("profileusername").style.display = "inline-block";
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("cancel").style.display = "inline-block";
}

function cancelbtnclick(){
    document.getElementById("name").style.display = "inline-block";
    document.getElementById("username").style.display = "inline-block";
    document.getElementById("profilename").style.display = "none";
    document.getElementById("profileusername").style.display = "none";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}

function savebtnclick(){
    var name = document.getElementById("profilename").value;
    var username = document.getElementById("profileusername").value;
    axios.put("http://localhost:4000/updateprofile", {name, username, email}).then((res)=>{
        if(res.data.success){
            console.log("update successful")
            let abc = JSON.stringify(res.data.user)
            console.log("user:", JSON.stringify(res.data))
            var user = res.data.user
            //sessionStorage.setItem('email', );
            document.getElementById("name").style.display = "inline-block";
            document.getElementById("username").style.display = "inline-block";
            document.getElementById("name").innerHTML = name;
            document.getElementById("username").innerHTML = username;
            document.getElementById("profilename").style.display = "none";
            document.getElementById("profileusername").style.display = "none";
            document.getElementById("save").style.display = "none";
        document.getElementById("cancel").style.display = "none";
        }
    })
}
