

axios.get("http://localhost:4000/").then((res)=>{
    if(res.data.success){
        console.log(res.data)

        //alert("added to main server")

         for(var i=0;i<res.data.mainserverlists.length;i++){
             var mainserver = res.data.mainserverlists[i]
             document.getElementById("adminhomepagetable").insertAdjacentHTML('beforeend', `<tr><td><a href="./serverlistview.html">${mainserver.servername}</a></td><td>${mainserver.serverip}</td><td >${mainserver.totalplayers}</td><td>${mainserver.status}</td></tr>`)
         }

    }else{
        console.log(res.data.error)
        alert(res.data.error)
    }
})// document.getElementById("leaderboard_table").insertAdjacentElement('beforeend', "<div></div>")


// $(document).ready(function() 
//      $('tr').click(function() {
//          var href = $(this).find("a").attr("href");
//          if(href) {
//              window.location = href;
//          }
//      })
// });

//when admin uses delete btn
function onSubmit(e){
    e.preventDefault();
    //use document.getELementByid to get respective element
    let email = "vicky@gmail.com"
    axios.delete(`http://localhost:4000/delete/${email}`).then((res)=>{
        if(res.data.success){
            console.log("Deleted successfully")
            //sessionStorage.setItem('email', document.getElementById('email').value);
            // window.location.href = 'http://localhost:4000/homepage'
            //window.location.href = 'adminhomepage.html'
        }else{
            console.log(res.data.error)
            alert(res.data.error)

        }   
    })
}