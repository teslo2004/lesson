var name_flower=[
{name: "Выберите цветок",prices:0},
{name: "Роза",prices:140},
{name: "Пион",prices:100},
{name: "Ромашка",prices:50},
{name: "Тюльпан",prices:85},
{name: "Гвоздика",prices:40},
{name: "Лилия",prices:90},
{name: "Гладиолус",prices:120}
];

var upakovka = [
{name_upak:"Нет упаковки", cena2: 0}, 
{name_upak:"Бумажная", cena2: 3},
{name_upak:"Фольга", cena2: 5}
];

var dostavkaT = [
{name_dost: "Выберите тип доставки", cena:0},
{name_dost:"Курьером", cena:5},
{name_dost:"Самовывоз", cena:0},
{name_dost:"Курьером к получателю", cena:2}
];

var type_flower = document.getElementById("type_flower");
var str="";
name_flower.forEach(function(flowers){
	var flower = "<option value='"+flowers.prices+"'>"+flowers.name+"</option>";
	str+=flower;
});
type_flower.innerHTML=str;
type_flower.children[0].disabled=true;

var price = document.getElementById("price");
type_flower.addEventListener("click", function(){
price.value=type_flower.value+" руб.";
})


var dostavka = document.getElementById("dostavka");
var str1="";
dostavkaT.forEach(function(dostav){
	var dostavs = "<option value='"+dostav.cena+"'>"+dostav.name_dost+"</option>";
	str1+=dostavs;
});
dostavka.innerHTML=str1;
dostavka.children[0].disabled=true;

var num2 = document.getElementById("num2");
dostavka.addEventListener("click", function(){
num2.value=dostavka.value+" руб.";
})

var upak = document.getElementById("upak");
var str2="";
upakovka.forEach(function(upakovs){
	var upakov="<input type='radio' name='upak' value='"+upakovs.cena2+"'>"+upakovs.name_upak;
	str2+=upakov;
})
upak.innerHTML=str2;



var num3 = document.getElementById("num3");
upak.addEventListener("click", function(){
for(var i=0;i<upak.children.length;i++){
	if(upak.children[i].checked){
	num3.value=upak.children[i].value;
		}
	}
})

var itogo = document.getElementById("itogo");


dostavka.addEventListener("click", function(){
itogo.value=type_flower.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})

num.addEventListener("input", function(){
itogo.value=type_flower.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})

upak.addEventListener("click", function(){
itogo.value=type_flower.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})


type_flower.addEventListener("input", function(){
itogo.value=type_flower.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})



















