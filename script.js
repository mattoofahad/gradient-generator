var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rancol = document.querySelector(".randomcol");


function randomcolor(){
	return "#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);});
}

function	setColor(){
	color1.value = randomcolor();
	color2.value = randomcolor();
	setGradient();
}
function setGradient() {

	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rancol.addEventListener("click", setColor);
