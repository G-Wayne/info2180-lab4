window.onload = function() {

   document.getElementById('boundary1').onmouseover=start;
   document.getElementById('boundary1').addEventListener("mouseover",borders);
}

function start() {

	document.getElementById('boundary1').className="boundary youlose";
}

function borders(){

	var walls = document.querySelectorAll(".boundary");
	for (var x=0;x < walls.length; x++)
	{
		walls[x].className = "boundary youlose";
		document.getElementById("status").textContent = "You Lose!";
	}
}
