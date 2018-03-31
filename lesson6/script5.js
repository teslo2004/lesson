var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	var n=+prompt("Введите размерность таблицы");

	var table='<table border="3" width="760px">'
       
 
        for(var i = 1;i <= n;i++ ){
 
            table += '<tr>';
 
            for(var j = 1;j <= n;j++ ){
                table += '<td>Таблица N*N</td>';
            }
 
            table += '</tr>';
        }
        table += '</table>';
        document.getElementById('table').innerHTML = table;
 

var red=document.getElementsByTagName("td");
for(var i=0;i<red.length;i++){
	
	red[i].addEventListener("mouseover", function(){
		this.className='red';
	});
}

for(var i=0;i<red.length;i++){
	
	red[i].addEventListener("mouseout", function(){
		
		this.className='red2';

		})

}


})



