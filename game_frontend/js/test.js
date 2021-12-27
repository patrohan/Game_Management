
    axios.get("http://localhost:4000/userList").then((res)=>{
        if(res.data.success){
            console.log(JSON.stringify(res.data));
            var users = JSON.stringify(res.data)
            for(var user in users){
                
            }
            console.log("user:", JSON.stringify(res.data.user))
            //var user = res.data.user
            // document.getElementById("name").innerHTML = user.name;
            // document.getElementById("username").innerHTML = user.username;
            // document.getElementById("points").innerHTML = user.points;
        }
})
