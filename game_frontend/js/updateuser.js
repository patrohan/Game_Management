function onSubmit(e){
    e.preventDefault();
    const newUser = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value
    }
    console.log(newUser)
    axios.put(`http://localhost:4000/updateUser/${newUser.email}`).then((res)=>{
        if(res.data.success){
            console.log(res.data)
            //session.setItem('email', res.data.email);
            alert("user details updated")
            window.location.href = 'HOMEPAGE.html'
        }else{
            console.log(res.data.error)
            alert(res.data.error)
        }
    })
    
}