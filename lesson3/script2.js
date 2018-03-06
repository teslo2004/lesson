var arr = ["Александр", "Виктор", "Игорь", "Дмитрий", "Василий", "Геннадий"];

var n = 10;
var arr2 = new Array(n);
arr2.fill(0);

for (var i in arr2) {
	    var human = {
        name: arr[Math.floor(arr.length * Math.random())],
        age: Math.floor(1 + (100 - 1) * Math.random()),
        about: function() {
            return "Привет! Меня зовут " + this.name + ", мне " + this.age + ".";
                    }

    };
	
	arr2[i]=human;
	alert(human.about());
}




