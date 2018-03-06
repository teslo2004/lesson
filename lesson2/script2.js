var arr = prompt("Введите любые числа через пробел: ").split(" ");
function sumNum(){
var res =0;
var num=0;

for (var i in arr){
	if (arr[i]%3==0){
		res=res+(+arr[i]);
		num=num+1;
	}
	
}
alert("Количество чисел = "+num+", их сумма = "+res);
}
sumNum();