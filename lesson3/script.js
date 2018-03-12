var p1 = -10;
var p2 = 10;
var percent = Math.floor(p1 + (p2 - p1)*Math.random());
var p = (100-percent)/100;
console.log(percent);
console.log(p);

var A = -500*p;
var B = 500*p;

var n = 10;

var arr = new Array(n);
arr.fill(0);
for (var i in arr){
	arr[i] = Math.floor(A + (B - A)*Math.random());
}
console.log(arr);


arr.sort(function(a,b){
	return Math.abs(b%10) - Math.abs(a%10);
});
console.log(arr);
