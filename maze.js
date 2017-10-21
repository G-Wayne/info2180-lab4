var touch = "false";
 window.onload = function(){
    var move= document.getElementById("boundary1");
   start(move);
   borders();
   end(touch);
 }

 function start(cursor){
     cursor.addEventListener("mouseover",glow);

     function glow(){
        touch="true";
         var line = document.querySelectorAll(".boundary");
        for(i in line){
        for(i = 0; i < line.length-1; i++){
        line[i].className="boundary youlose";
     }
     }

}
};
 function borders(){
      var line = document.querySelectorAll(".boundary");
    for(i in line){
    for(i = 0; i < line.length-1; i++){
        start(line[i])
     }
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
