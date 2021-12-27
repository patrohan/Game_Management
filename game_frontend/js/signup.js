function onSubmit(e) {
    e.preventDefault();
    const newUser = {
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    password2: document.getElementById('password2').value,
    server : document.getElementById('server').value,
    ram : document.getElementById('ram').value,
    graphics: document.getElementById('graphics').value,
    };
    console.log(newUser);
    //add user to db
    axios.post("http://localhost:4000/signup", newUser).then((res)=>{
        console.log(res)
        if(res.data.success){
            alert("added")
            window.location.href = "loginpage_index.html"
        }else{
            console.log(res.data.error)
            alert(res.data.error)
        }
    })
    //add user to single server list
    //  axios.post("http://localhost:4000/addPlayertoServer", newUser).then((res)=>{
    //      if(res.data.success){
    //          alert("added to single server")
    //      }else{
    //          console.log(res.data.error)
    //          alert(res.data.error)
    //      }
    //  })
    //update main server table
    axios.put("http://localhost:4000/updateMainServer", newUser).then((res)=>{
        if(res.data.success){
            console.log(res.data)
            //alert("added to main server")
        }else{
            console.log(res.data.error)
            alert(res.data.error)
        }
    })
};
