var street = ["Немига", "Могилевская", "Жуковского", "Чапаева", "Ленина", "Бельского"];
var izo =["0.jpg", "1.jpg","2.jpg","3.jpg","4.jpg"];
var ol=document.getElementById("home");
var n = 5;
var adress = new Array(n);
adress.fill(0);

for (var i in adress) {
	    var home = {
		street: street[Math.floor(street.length * Math.random())],
		num: Math.floor(1 + (100 - 1) * Math.random()),
		floor: Math.floor(1 + (10 - 1) * Math.random()),
		izo: izo[Math.floor(izo.length * Math.random())],
		square: Math.floor(100 + (500 - 100) * Math.random()),
		people: Math.floor(1 + (100 - 1) * Math.random()),
		about: function() {
			return "Дом расположен на улице " + this.street + ", дом " + this.num + ". Этажей в доме - "+this.floor+". Площадь дома "+this.square+
			" кв.м. Количество жильцов - "+this.people+"."+"<img src="+this.izo+">";
                    }

    };
	
	adress[i]=home;

}
var str="";
adress.forEach(function(elem){
		str+="<li>"+elem.about()+"</li>";
	})
	ol.innerHTML=str;
	