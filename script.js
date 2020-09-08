var css1 = document.getElementById("hex");
var css2 = document.getElementById("deci");
var degre = document.getElementById("deg");
var av = document.getElementById("av");
var st1 = document.getElementById("star");
var ed1 = document.getElementById("endr");



var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");

var rancol = document.querySelector(".randomcol");
var degok = document.querySelector(".degok");


//random color generator
function randomcolor(){
	return "#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);});
}

//set color on the page
function setColor(){
	color1.value = randomcolor();
	color2.value = randomcolor();
	setGradient();
}

//set gradient on the page
function setGradient() {
	console.log(st1.value);
	console.log(ed1.value);

	body.style.background ="linear-gradient("+ degre.value +"deg,"+color1.value+" "+st1.value+"%,"+color2.value+" "+ed1.value+"%)";

	css1.textContent = body.style.background;
	css2.textContent ="linear-gradient("+ degre.value +"deg,"+color1.value+" "+st1.value+"%,"+color2.value+" "+ed1.value+"%)";
	av.textContent = "Current Value  : " + degre.value;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


degre.addEventListener("change", setGradient);
st1.addEventListener("change", setGradient);
ed1.addEventListener("change", setGradient);


rancol.addEventListener("click", setColor);

