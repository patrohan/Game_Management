function onSubmit(e){
    e.preventDefault();
    const adminData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    console.log(adminData);
    axios.post("http://localhost:4000/adminlogin", adminData).then((res)=>{
        //console.log(res)
        if(res.data.success){
            console.log("Signed in successfully")
            sessionStorage.setItem('email', document.getElementById('email').value);
            // window.location.href = 'http://localhost:4000/homepage'
            window.location.href = 'adminhomepage.html'
        }else{
            console.log(res.data.error)
            alert(res.data.error)

        }   
    })
    
  };