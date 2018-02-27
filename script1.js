var str = prompt("Введите строку: ");
var skobki=0;
for(var i=0; i<str.length;i++){
	if(str[i]=="(" && skobki>=0){ //исключаем случай ())(()
		skobki++;
			}
	else if(str[i]==")"){
		skobki--;
	}
	
}
if (skobki ==0){
	alert("True");
}else{
	alert("False");
}



