var css1 = document.getElementById("hex");
var css2 = document.getElementById("deci");
var degre = document.getElementById("deg");
var av = document.getElementById("av");
var st1 = document.getElementById("star");
var ed1 = document.getElementById("endr");
var st11 = document.getElementById("st11");
var ed11 = document.getElementById("ed11");
var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");


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
	degre.value = Math.floor(Math.random()*360);
	st1.value = Math.floor(Math.random()*35);
	ed1.value = 100 - Math.floor(Math.random()*35);
	setGradient();
}

//set gradient on the page
function setGradient() {
	console.log(st1.value);
	console.log(ed1.value);

	body.style.background ="linear-gradient("+ degre.value +"deg,"+color1.value+" "+st1.value+"%,"+color2.value+" "+ed1.value+"%)";

	css1.textContent = body.style.background;
	css2.textContent ="linear-gradient("+ degre.value +"deg,"+color1.value+" "+st1.value+"%,"+color2.value+" "+ed1.value+"%)";
	av.textContent = degre.value;
	col1.textContent = color1.value;
	col2.textContent = color2.value;
	st11.textContent = st1.value;
	ed11.textContent = ed1.value;
}

window.onload = setColor;

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


degre.addEventListener("change", setGradient);
st1.addEventListener("change", setGradient);
ed1.addEventListener("change", setGradient);


rancol.addEventListener("click", setColor);


