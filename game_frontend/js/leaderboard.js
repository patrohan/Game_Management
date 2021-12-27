axios.get("http://localhost:4000/leaderboardlist1").then((res)=>{
    if(res.data.success){
        console.log(res.data.users.length)

        //alert("added to main server")

        for(var i=0;i<res.data.users.length;i++){
            var user = res.data.users[i]
            document.getElementById("leaderboard_table").insertAdjacentHTML('beforeend', `<tr style="height: 75px;"><td class="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-table-cell u-table-cell-4">${i+1}</td><td class="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-table-cell u-table-cell-5">${user.name}</td><td class="u-border-2 u-border-grey-75 u-border-no-left u-border-no-right u-table-cell u-table-cell-6">${user.points}</td></tr>`)
        }

    }else{
        console.log(res.data.error)
        alert(res.data.error)
    }
})// document.getElementById("leaderboard_table").insertAdjacentElement('beforeend', "<div></div>")