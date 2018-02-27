var str = prompt("Введите строку: ");
var otkr=0;
var zakr=0;
for(var i=0; i<str.length;i++){
	if(str[i]=="("){
		otkr++;
	}
	else if(str[i]==")"){
		zakr++;
	}
}
if (otkr%zakr ==0 && str[0]=="(" && str[str.length-1]==")"){
	alert("True");
}else{
	alert("False");
}