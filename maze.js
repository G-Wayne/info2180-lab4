var line = document.querySelectorAll(".boundary");
var touch = "false";
window.onload = function(){
    var move= document.getElementById("boundary1");
    borders();
    startOver();
    end(touch);
    setupMaze();
    cheatBlocker();
 }

 function start(cursor){
     cursor.addEventListener("mouseover",glow);
     function glow(){
         touch="true";
         var line = document.querySelectorAll(".boundary");
         for(i = 0; i < line.length-1; i++){
         line[i].className="boundary youlose";
     }
     }
 };

 function borders(){
      var line = document.querySelectorAll(".boundary");
     for(i = 0; i < line.length-1; i++){
        start(line[i])
     }
 };

 function end(error){
     document.getElementById("end").addEventListener("mouseover",outcome);
     function outcome(){
     if(document.getElementById("boundary1").className==="boundary youlose"){
        document.getElementById("status").textContent="You Lose!"
     }
     else{
         document.getElementById("status").textContent = "You Win! :) :)"
     }
 };
 };

function startOver(){
    document.getElementById("start").addEventListener("click",reset);
    function reset(){
         var line = document.querySelectorAll(".boundary");
         for(i = 0; i < line.length-1; i++){
            line[i].className="boundary";

         }
         document.getElementById("status").textContent = 'Use your mouse to press the "S" to restart.'
          }
}

function setupMaze(){
    document.getElementById("start").addEventListener("mouseout",startMaze);
    function startMaze(){
        document.getElementById("status").textContent = 'Begin your journey'
    }

}
function cheatBlocker(){
     document.getElementById("maze").addEventListener("mouseout",blockCheat);
     function blockCheat(event){
        var x = event.clientX;
        var y = event.clientY;

        var top = document.getElementById("maze").offsetTop;
        var height = document.getElementById("maze").offsetHeight;
        var left = document.getElementById("maze").offsetLeft;
        var width = document.getElementById("maze").offsetWidth;

         if(touch && x < left || y < top || y > (top + height) ){
             document.getElementById("status").textContent = "You Cheated You Lose!";

             var line = document.querySelectorAll(".boundary");
         for(i = 0; i < line.length-1; i++){
         line[i].className="boundary youlose";
         }
     }
}
}
