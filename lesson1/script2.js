var x = +prompt("Введите X: ");
var n = +prompt("Введите N: ");

const factorial = function(n) {
    if (n <= 0) {
        return 1;
    }
    return (n * factorial(n - 1));
}

function ryadT() {
    var result = 0;
    for (var i = 0; i <= n; i++) {
        var a = (factorial(2 * i)) * Math.pow(x, 2 * i + 1);
        var b = (Math.pow(4, i)) * (Math.pow(factorial(i), 2)) * (2 * i + 1);
        result = result + (a / b);
    }
    alert("Arcsin x = "+result);
}
ryadT();
