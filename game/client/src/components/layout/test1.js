import React, { Component } from "react";
import { io } from "socket.io-client";
console.log('working fine')
var Socket = io()
Socket.on("connect",()=>{
    // alert("connected")
})
class Test1 extends Component {
  render() {
    return (
  <section  class="u-body"><header class="u-clearfix u-grey-90 u-header u-sticky u-sticky-8ad9 u-header" id="sec-dd12"><div class="u-clearfix u-sheet u-sheet-1">
        <a href="https://nicepage.site" class="u-image u-logo u-image-1" data-image-width="1280" data-image-height="1253" title="home">
        </a>
        <nav class="u-align-right u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div class="menu-collapse u-custom-font" style="font-size: 1.25rem; letter-spacing: 0px; font-family: Alata;">
            <a class="u-button-style u-custom-active-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
              
            </a>
          </div>
          <div class="u-custom-menu u-nav-container">
            <ul class="u-custom-font u-nav u-spacing-10 u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-4-dark-1" href="/USER-PROFILE.html" style="padding: 20px;">USER PROFILE</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-4-dark-1" href="/T_LEADERBOARD.html" style="padding: 20px;">LEADERBORDS</a><div class="u-nav-popup"><ul class="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link u-white">REGIONAL</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-white">GLOBAL</a>
</li></ul>
</div>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-5-light-2 u-text-body-alt-color u-text-hover-palette-4-dark-1" style="padding: 20px;">HISTORY</a>
</li></ul>
          </div>
          <div class="u-custom-menu u-nav-container-collapse">
            <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-3"><li class="u-nav-item"><a class="u-button-style u-nav-link" href="/USER-PROFILE.html" style="padding: 20px;">USER PROFILE</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="/T_LEADERBOARD.html" style="padding: 20px;">LEADERBORDS</a><div class="u-nav-popup"><ul class="u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-nav-4"><li class="u-nav-item"><a class="u-button-style u-nav-link">REGIONAL</a>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link">GLOBAL</a>
</li></ul>
</div>
</li><li class="u-nav-item"><a class="u-button-style u-nav-link" style="padding: 20px;">HISTORY</a>
</li></ul>
              </div>
            </div>
            <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        <h3 class="u-align-center u-custom-font u-text u-text-default u-text-1">GAME CENTER</h3>
      </div></header>
    <section class="u-clearfix u-grey-90 u-section-1" id="sec-d92c">
      <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-valign-middle u-container-layout-1">
                  <h1 class="u-align-center u-text u-text-default u-text-1">ARE YOU READY ?<span style="font-weight: 700;">
                      <span style="font-size: 2.25rem;"></span>
                    </span>
                  </h1>
                  <p class="u-align-center u-text u-text-default u-text-2" data-animation-name="pulse" data-animation-duration="1250" data-animation-direction="" data-animation-delay="250">PRESS THE BUTTON TO ENTER A MATCH</p>
                  <a href="https://nicepage.com/website-templates" class="u-btn u-btn-round u-button-style u-custom-font u-gradient u-none u-radius-29 u-text-active-palette-5-base u-text-body-alt-color u-text-hover-palette-2-base u-btn-1">PLAY</a>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-middle u-container-layout-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    
    <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-21ca"><div class="u-clearfix u-sheet u-sheet-1">
        <div class="u-container-style u-group u-group-1">
          <div class="u-container-layout">
            <p class="u-align-center u-custom-font u-small-text u-text u-text-variant u-text-1">&nbsp;2021&nbsp; &nbsp; Made by ROHAN PATWARDHAN &amp; ATHARVA PATHAK</p><span class="u-icon u-icon-circle u-text-white u-icon-1"></span>
          </div>
        </div>
      </div></footer>
    <section class="u-backlink u-clearfix u-grey-80">
      <a class="u-link" href="https://nicepage.com/website-templates" target="_blank">
        <span>Website Templates</span>
      </a>
      <p class="u-text">
        <span>created with</span>
      </p>
      <a class="u-link" href="" target="_blank">
        <span>Website Builder Software</span>
      </a>. 
    </section>
</section>
    )
  }

onSubmit(){
    console.log('inside function')
    var roomID1 = 1;
 
    
    Socket.emit('joinroom', roomID1);

        var label = document.getElementById('label');
        var input = document.getElementById('input');
        Socket.on('roomcount', function (count, gameId) {
            // const room = io.sockets.adapter.rooms.get(gameId);
            // const nop = room ? room.size : 0;
            console.log('in joinroom of client. players are ' + count)
            var item = document.createElement('div');
            if(count == 1){
                alert("Waiting for a player to match")
                //input.value = 'Waiting for a player to match';
            }else if(count ==2){
                alert("Match found! Let's play!")
                //input.value = 'Match found! Lets play';
                console.log("room id updated to " + gameId)
                setTimeout(function() { playMatch(gameId); }, 6000)
            }
        });
        Socket.on('matchend', function(msg, gameId){
            alert(msg)
            const gameId1 = gameId;
            //socket.emit('closesocket', gameId1)
        })
        function endMatch(gameId){
            //add entry to db and disconnect socket
        }
        function playMatch(gameId){
            //take gameID of sockets, use random function and emit to server. In server use on func and route one to win and other to lose
            Socket.emit('matchplayed', gameId)
        }
}

}

export default Test1;