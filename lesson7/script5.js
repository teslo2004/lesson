var styleColor=["red", "green", "blue", "gold", "grey", "brown"];
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	var n=+prompt("Введите размерность таблицы");
	var table='<table border="3" width="760px" id="color"><tbody>'
        for(var i = 1;i <= n;i++ ){
 
            table += '<tr id="color">';
 
            for(var j = 1;j <= n;j++ ){
                table += '<td >Таблица N*N</td>';
            }
            table += '</tr>';
        }
        table += '</tbody></table>';
        document.getElementById('table').innerHTML = table;

var color=document.getElementById("color");
color.addEventListener("click", function(e){
		if(e.target.nodeName=="TD"){
		e.target.id=styleColor[Math.floor(styleColor.length*Math.random())];
	}
})
})


