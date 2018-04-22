var name_flower=[
{name: "Роза",prices:140, img:"rose.jpg"},
{name: "Пион",prices:100, img:"pion.jpg"},
{name: "Ромашка",prices:50, img:"romashka.jpg"},
{name: "Тюльпан",prices:85, img:"tulpan.jpg"},
{name: "Гвоздика",prices:40, img:"gvozdika.jpg"},
{name: "Лилия",prices:90, img:"lilia.jpg"},
{name: "Гладиолус",prices:120, img:"glad.jpg"}
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

var kartinki = document.getElementById("kartinki");
var str0="";
name_flower.forEach(function(flowers){
	var flower = "<div class='cl1'><img src='"+flowers.img+"' alt='"+flowers.prices+"'></div>";
	str0+=flower;
}) 
kartinki.innerHTML=str0;



var price = document.getElementById("price");
var cl1=document.getElementsByClassName("cl1");

for(var i=0;i<cl1.length;i++){
	cl1[i].addEventListener("click",function(){
		price.value=this.lastChild.alt;
	})
}


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
num2.value=dostavka.value;
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
itogo.value=price.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})

num.addEventListener("input", function(){
itogo.value=price.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})

upak.addEventListener("click", function(){
itogo.value=price.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})

price.addEventListener("input", function(){
itogo.value=price.value*num.value+(+num2.value)+(+num3.value)+" руб.";
})



















