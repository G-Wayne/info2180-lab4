window.onload = function() {
  document.getElementById('boundary1').onmouseover = start;
}

function start(){
  document.getElementById('boundary1').className = "boundary youlose";
}
