var num = document.getElementsByClassName("num");
for(var i=0;i<num.length;i++){
	num[i].addEventListener("click", function(){
		var pole=document.calc.vvod.value;
		var znach=pole.toString()+this.value.toString();
		znach=+znach;
		document.calc.vvod.value=znach;
	})}
var sbros = document.getElementById("sbr");
sbros.addEventListener("click", function(){
	document.calc.vvod.value=0;
	document.calc.operation.value=0;
	document.calc.mem.value=0;
	document.calc.res.value=0;
	})	
function znak(zn) { 
var rez = Number(document.getElementById("mem").value);

if (document.calc.operation.value == 0) { 
document.getElementById("mem").value = document.calc.vvod.value; 
} else { 
if (document.getElementById("operation").value == "+") {
document.getElementById("mem").value = rez + Number(document.calc.vvod.value); 
}
if (document.getElementById("operation").value == "-") {
document.getElementById("mem").value = rez - Number(document.calc.vvod.value);
}
if (document.getElementById("operation").value == "*") {
document.getElementById("mem").value = rez * Number(document.calc.vvod.value);
}
if (document.getElementById("operation").value == "/") {
document.getElementById("mem").value = rez / Number(document.calc.vvod.value);
}
}
op = zn.toString();
document.getElementById("operation").value = op;
document.calc.vvod.value = op; 
	
}

var ravn = document.getElementById("ravn")
ravn.addEventListener("click", function() {
if (document.calc.vvod.value == 0) {
pole = document.calc.vvod.value; 
} else { 
if (document.getElementById("operation").value == "+") { 
pole = Number(document.getElementById("mem").value) + Number(document.calc.vvod.value); 
}
if (document.getElementById("operation").value == "-") {
pole = Number(document.getElementById("mem").value) - Number(document.calc.vvod.value);
}
if (document.getElementById("operation").value == "*") {
pole = Number(document.getElementById("mem").value) * Number(document.calc.vvod.value);
}
if (document.getElementById("operation").value == "/") {
pole = Number(document.getElementById("mem").value) / Number(document.calc.vvod.value);
}
}
document.calc.vvod.value = pole;
document.getElementById("mem").value=0;
document.getElementById("res").value=pole;
})

var memoryM = document.getElementById("memM");
memoryM.addEventListener("click", function(){
	document.getElementById("memoM").value=document.calc.res.value;
})
var memoryMC = document.getElementById("memMC");
memoryMC.addEventListener("click", function(){
	document.getElementById("memoM").value=0;
})
var memoryMR = document.getElementById("memMR");
memoryMR.addEventListener("click", function(){
	document.calc.vvod.value=document.calc.memoM.value;
})