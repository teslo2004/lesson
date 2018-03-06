var p1 = -10;
var p2 = 10;
var percent = Math.floor(p1 + (p2 - p1)*Math.random());
var p = (100-percent)/100;
console.log(percent);
console.log(p);

var A = -500*p;
var B = 500*p;

var n = 1000;

var arr = new Array(n);
arr.fill(0);
for (var i in arr){
	arr[i] = Math.floor(A + (B - A)*Math.random());
}
console.log(arr);

var result = arr.map(function(elem){
	return Math.abs(elem%10); //для отрицательных чисел
})

result.sort(function(a,b){
	return b-a;
})
console.log(result);