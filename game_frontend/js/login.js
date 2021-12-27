function onSubmit(e){
    e.preventDefault();
    const userData = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
    console.log(userData);
    axios.post("http://localhost:4000/login", userData).then((res)=>{
        //console.log(res)
        if(res.data.success){
            console.log("Signed in successfully")
            sessionStorage.setItem('email', document.getElementById('email').value);
            // window.location.href = 'http://localhost:4000/homepage'
            window.location.href = 'homepage.html'
        }else{
            console.log(res.data.error)
            alert(res.data.error)

        }   
    })
    
  };