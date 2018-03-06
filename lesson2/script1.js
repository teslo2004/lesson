var str1 = prompt("Введите первую строку: ");
var str2 = prompt("Введите вторую строку: ");

var arr1 = str1.split("");
var arr2 = str2.split("");

str1 = arr1.sort().join("");
str2 = arr2.sort().join("");

if(str1==str2){
	alert("Строки являются анаграммами");
}else{
	alert("Строки не анаграммы");
}
